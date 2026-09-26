import { dataService } from './dataService.js';
import { audioManager } from './audioManager.js';
import { Header } from './components/header.js';
import { MarketDirectory } from './components/marketDirectory.js';
import { MarketDetail } from './components/marketDetail.js';
import { ProduceGuide } from './components/produceGuide.js';
import { Chatbot } from './components/chatbot.js';
import { Bookmarks } from './components/bookmarks.js';
import { EcoCalculator } from './components/ecoCalculator.js';
import { ContactAbout } from './components/contactAbout.js';
import { VisitorCounter } from './visitorCounter.js';
import { CinematicIntro } from './components/cinematicIntro.js';
import { CinematicHeroBg } from './components/cinematicHeroBg.js';
import { GardenScrollbar } from './components/gardenScrollbar.js';
import { CustomCursor } from './components/customCursor.js';

class FreshFindApp {
  constructor() {
    this.header = null;
    this.cinematicIntro = null;
    this.cinematicHeroBg = null;
    this.gardenScrollbar = null;
    this.marketDirectory = null;
    this.marketDetail = null;
    this.produceGuide = null;
    this.chatbot = null;
    this.bookmarks = null;
    this.ecoCalculator = null;
    this.contactAbout = null;
    this.visitorCounter = null;
    this.toastContainer = document.getElementById('toastContainer');
  }

  async init() {

    // 2. Geolocation (user-initiated only, no auto-popup overlay)
    // this.setupGeolocation();

    // 3. Load all JSON datasets (uses offline fallback if file:// protocol)
    try {
      await dataService.loadAll();
    } catch(e) { console.warn('DataService loadAll:', e); }

    // 4. Initialize components - each wrapped so one failure won't crash others
    try { this.header = new Header(this); this.header.init(); } catch(e) { console.warn('Header:', e); }
    try { this.visitorCounter = new VisitorCounter('visitorOdometerDigits'); this.visitorCounter.init(); } catch(e) { console.warn('VisitorCounter:', e); }
    try { this.marketDirectory = new MarketDirectory(this); this.marketDirectory.init(); } catch(e) { console.warn('MarketDirectory:', e); }
    try { this.marketDetail = new MarketDetail(this); this.marketDetail.init(); } catch(e) { console.warn('MarketDetail:', e); }
    try { this.produceGuide = new ProduceGuide(this); this.produceGuide.init(); } catch(e) { console.warn('ProduceGuide:', e); }
    try { this.chatbot = new Chatbot(this); this.chatbot.init(); } catch(e) { console.warn('Chatbot:', e); }
    try {
      this.bookmarks = new Bookmarks(this);
      this.bookmarks.init();
      if (window.location.hash === '#open-bookmarks' || window.location.hash === '#bookmarks') {
        setTimeout(() => this.bookmarks?.open(), 400);
      }
    } catch(e) { console.warn('Bookmarks:', e); }
    try { this.ecoCalculator = new EcoCalculator(this); this.ecoCalculator.init(); } catch(e) { console.warn('EcoCalculator:', e); }
    try { this.contactAbout = new ContactAbout(this); this.contactAbout.init(); } catch(e) { console.warn('ContactAbout:', e); }

    // 5. FreshFind Botanical Custom Cursor
    try {
      this.customCursor = new CustomCursor();
    } catch(e) { console.warn('CustomCursor:', e); }

    // 6. UI enhancements & VIP Card Motion (safe execution)
    try { this.setupAuthModal(); } catch(e) { console.warn('AuthModal:', e); }
    try { this.setupShareModal(); } catch(e) { console.warn('ShareModal:', e); }
    try { this.setupNavigation(); } catch(e) { console.warn('Navigation:', e); }
    try { this.setupScrollReveal(); } catch(e) { console.warn('ScrollReveal:', e); }
    try { this.setupParallaxScroll(); } catch(e) { console.warn('Parallax:', e); }
    try { this.setupScrollSpy(); } catch(e) { console.warn('ScrollSpy:', e); }
    try { this.setupHeroParticles(); } catch(e) { console.warn('HeroParticles:', e); }
    try { this.setupScrollProgress(); } catch(e) { console.warn('ScrollProgress:', e); }
    try { this.setupVIPCardEffects(); } catch(e) { console.warn('VIPCardEffects:', e); }
    try { this.setupGlobalCardDelegation(); } catch(e) { console.warn('CardDelegation:', e); }

    // 7. Living Garden Botanical Scrollbar
    try {
      this.gardenScrollbar = new GardenScrollbar(this);
      this.gardenScrollbar.init();
    } catch(e) { console.warn('GardenScrollbar:', e); }

    // 8. Cinematic Intro (runs after everything is ready)
    try {
      this.cinematicHeroBg = new CinematicHeroBg(this);
      this.cinematicHeroBg.init();
    } catch(e) { console.warn('CinematicHeroBg:', e); }
  }

  setupGeolocation() {
    if (typeof navigator !== 'undefined' && 'geolocation' in navigator) {
      try {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            if (typeof dataService !== 'undefined' && dataService) {
              dataService.userLocation = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
              };
            }
            if (this.marketDirectory && typeof this.marketDirectory.render === 'function') {
              this.marketDirectory.render();
            }
          },
          (err) => {
            console.log('Geolocation unavailable or denied:', err ? err.message : '');
          },
          { timeout: 8000, maximumAge: 600000 }
        );
      } catch (err) {
        console.warn('Geolocation error:', err);
      }
    }
  }

  openMarketDetail(marketId) {
    if (!marketId) return;
    if (this.marketDetail && typeof this.marketDetail.open === 'function') {
      this.marketDetail.open(marketId);
    } else {
      console.warn('MarketDetail component not initialized, retrying...');
      try {
        this.marketDetail = new MarketDetail(this);
        this.marketDetail.init();
        this.marketDetail.open(marketId);
      } catch(e) { console.error('Cannot open market detail:', e); }
    }
  }

  setupGlobalCardDelegation() {
    document.addEventListener('click', (e) => {
      // 1. Market card clicks
      const mktEl = e.target.closest('.view-market-detail-btn, .market-card, [data-action="open-market"]');
      if (mktEl && !e.target.closest('.market-fav-btn')) {
        const marketId = mktEl.getAttribute('data-id') || mktEl.closest('[data-id]')?.getAttribute('data-id');
        if (marketId) {
          this.openMarketDetail(marketId);
        }
      }

      // 2. Modal close button click delegation
      if (e.target.closest('#closeMarketDetailBtn, .modal-close-btn')) {
        this.marketDetail?.close();
      }
    });
  }

  setupNavigation() {
    // ── 1. Smooth scrolling for all hash links ──────────────────────────────
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        try { audioManager.playClick(); } catch(err) {}
        const headerOffset = 90;
        const targetTop = targetSection.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0) - headerOffset;
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });
        document.querySelectorAll('.nav-item-pill, .nav-item-link').forEach(l => l.classList.remove('active'));
        const navMatch = document.querySelector(`.main-nav a[href="${href}"]`);
        if (navMatch) navMatch.classList.add('active');
        // Close mobile menu on link click
        document.getElementById('mainNav')?.classList.remove('open');
        document.getElementById('mobileMenuToggle')?.classList.remove('active');
      }
    });

    // ── 2. Mobile Hamburger Menu Toggle ─────────────────────────────────────
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    if (mobileToggle && mainNav) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        mobileToggle.classList.toggle('active', isOpen);
        mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        mobileToggle.innerHTML = isOpen
          ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
          : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.site-navbar-capsule') && mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          mobileToggle.classList.remove('active');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
        }
      });

      // Close on page nav-link click within mobile menu
      mainNav.querySelectorAll('.nav-item-link, .nav-item-pill, .dropdown-link').forEach(link => {
        link.addEventListener('click', () => {
          mainNav.classList.remove('open');
          mobileToggle.classList.remove('active');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
        });
      });
    }

    // ── 3. Sticky Scrolled Class (adds shadow/transition when scrolled) ──────
    const headerWrapper = document.querySelector('.site-header-wrapper');
    if (headerWrapper) {
      const onScroll = () => {
        if (window.scrollY > 10) {
          headerWrapper.classList.add('scrolled');
        } else {
          headerWrapper.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  setupAuthModal() {
    const authModal = document.getElementById('authModal');
    const authBtn = document.getElementById('authToggleBtn') || document.getElementById('navUserBtn');
    const closeBtn = document.getElementById('closeAuthBtn');
    const authTabs = document.querySelectorAll('.auth-tab-btn');
    const authForm = document.getElementById('authForm');
    const submitBtn = document.getElementById('authSubmitBtn');
    let currentMode = 'login';

    const openAuth = (e) => {
      if (e) e.preventDefault();
      audioManager.playClick();
      authModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeAuth = () => {
      audioManager.playClick();
      authModal?.classList.remove('active');
      document.body.style.overflow = '';
    };

    authBtn?.addEventListener('click', openAuth);
    document.getElementById('navUserBtn')?.addEventListener('click', openAuth);
    document.getElementById('authToggleBtn')?.addEventListener('click', openAuth);
    document.getElementById('footerOpenAuth')?.addEventListener('click', openAuth);

    closeBtn?.addEventListener('click', closeAuth);

    authModal?.addEventListener('click', (e) => {
      if (e.target === authModal) {
        closeAuth();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && authModal?.classList.contains('active')) {
        closeAuth();
      }
    });

    authTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        audioManager.playClick();
        currentMode = tab.getAttribute('data-mode');
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        if (submitBtn) {
          submitBtn.textContent = currentMode === 'login' ? 'Sign In to FreshFind' : 'Create Free Green Account';
        }
      });
    });

    authForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      audioManager.playChime();
      const email = document.getElementById('authEmail')?.value;
      this.showToast(`Welcome! Successfully logged in as ${email || 'Eco Shopper'} 🌱`);
      closeAuth();
      authForm.reset();
    });
  }

  setupShareModal() {
    const shareModal = document.getElementById('shareModal');
    const closeShareBtn = document.getElementById('closeShareModalBtn');

    closeShareBtn?.addEventListener('click', () => {
      audioManager.playClick();
      shareModal?.classList.remove('active');
    });

    shareModal?.addEventListener('click', (e) => {
      if (e.target === shareModal) {
        shareModal.classList.remove('active');
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && shareModal?.classList.contains('active')) {
        shareModal.classList.remove('active');
      }
    });

    document.getElementById('copyShareLinkBtn')?.addEventListener('click', () => {
      audioManager.playClick();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
      }
      this.showToast('Direct link copied to clipboard! 📋');
    });
  }


  openMarketDetail(marketId) {
    this.marketDetail.open(marketId);
  }

  toggleBookmark(type, id) {
    return this.bookmarks.toggle(type, id);
  }

  isBookmarked(type, id) {
    return this.bookmarks ? this.bookmarks.isBookmarked(type, id) : false;
  }

  updateBreadcrumbs(items) {
    const list = document.getElementById('breadcrumbList');
    if (!list) return;

    list.innerHTML = items.map((item, idx) => {
      if (item.active) {
        return `<li class="breadcrumb-item active">${item.label}</li>`;
      }
      return `
        <li class="breadcrumb-item">
          <a href="#" data-action="${item.action || ''}">${item.label}</a>
          <span style="opacity:0.4;">/</span>
        </li>
      `;
    }).join('');

    list.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const action = a.getAttribute('data-action');
        if (action === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (action === 'directory') {
          document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  showToast(message, isAlert = false) {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast ${isAlert ? 'toast-accent' : ''}`;
    toast.innerHTML = `<span>${message}</span>`;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  /**
   * Scroll Reveal - high-performance IntersectionObserver with immediate viewport reveal
   */
  setupScrollReveal() {
    const selectors = '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, .reveal-3d, .section-tag';
    const elements = document.querySelectorAll(selectors);

    if (!elements.length) return;

    // Immediately reveal elements already near or above the viewport so they are never blank
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 80) {
        el.classList.add('revealed');
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.02,
      rootMargin: '120px 0px 80px 0px'
    });

    elements.forEach(el => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    });

    // Count-up animation for stat numbers
    const countEls = document.querySelectorAll('.count-num');
    if (countEls.length) {
      const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            const duration = 1600;
            const start = performance.now();
            const initial = 0;

            const step = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(initial + (target - initial) * eased);
              el.textContent = current.toLocaleString() + (target >= 100 && el.getAttribute('data-suffix') ? el.getAttribute('data-suffix') : '');
              if (progress < 1) requestAnimationFrame(step);
              else el.textContent = target.toLocaleString();
            };
            requestAnimationFrame(step);
            countObserver.unobserve(el);
          }
        });
      }, { threshold: 0.1 });

      countEls.forEach(el => countObserver.observe(el));
    }
  }

  /**
   * Lightweight 60fps Parallax via requestAnimationFrame
   */
  setupParallaxScroll() {
    const orb1 = document.querySelector('.bg-ambient-orb-1');
    const orb2 = document.querySelector('.bg-ambient-orb-2');
    const orb3 = document.querySelector('.bg-ambient-orb-3');
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          if (orb1) orb1.style.transform = `translate3d(0, ${scrolled * 0.06}px, 0)`;
          if (orb2) orb2.style.transform = `translate3d(0, -${scrolled * 0.04}px, 0)`;
          if (orb3) orb3.style.transform = `translate3d(0, ${scrolled * 0.03}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /**
   * ScrollSpy Active Nav Link Tracking
   */
  setupScrollSpy() {
    const sectionIds = ['home', 'directory', 'produce', 'eco-calculator', 'contact', 'about'];
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + 160;
      let activeId = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          activeId = id;
        }
      }

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${activeId}`) {
          link.classList.add('active');
        } else if (href && href.startsWith('#')) {
          link.classList.remove('active');
        }
      });
    }, { passive: true });
  }

  /**
   * Premium Hero Section — Entrance animations, mouse-parallax, floating particles & stat counters
   */
  setupHeroParticles() {
    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    // ── 1. ENTRANCE ANIMATION SEQUENCE ──────────────────────────────────────────
    const pill    = heroSection.querySelector('.ff-hero__badge');
    const h1      = heroSection.querySelector('.ff-hero__headline');
    const desc    = heroSection.querySelector('.ff-hero__desc');
    const btns    = heroSection.querySelector('.ff-hero__ctas');
    const props   = heroSection.querySelector('.ff-hero__features');
    const ribbon  = heroSection.querySelector('.ff-hero__ribbon');
    const cards   = heroSection.querySelector('.ff-hero__float-cards');

    // Entrance animations are handled smoothly by CSS (animations.css / components.css)

    // ── 2. MOUSE-TRACKING PARALLAX ON HERO IMAGE ────────────────────────────────
    const bgImg = heroSection.querySelector('.ff-hero__bg-img');
    if (bgImg) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width  - 0.5;   // -0.5 → 0.5
        const ny = (e.clientY - rect.top)  / rect.height - 0.5;
        const tx = nx * -14;  // max 14px shift
        const ty = ny * -8;
        bgImg.style.transition = 'transform 1.8s cubic-bezier(0.25,0.1,0.25,1)';
        bgImg.style.transform = `scale(1.06) translate(${tx}px, ${ty}px)`;
      }, { passive: true });
      heroSection.addEventListener('mouseleave', () => {
        bgImg.style.transition = 'transform 2.4s cubic-bezier(0.25,0.1,0.25,1)';
        bgImg.style.transform = 'scale(1.02) translate(0, 0)';
      }, { passive: true });
    }

    // ── 3. FLOATING POLLEN / DUST PARTICLES (Disabled to ensure 60fps stutter-free video playback) ──


    // ── 4. NOTIFY CARD DISMISS ─────────────────────────────────────────────────
    const notifyCard  = document.getElementById('heroNotifyCard');
    const notifyClose = document.getElementById('heroNotifyClose');
    if (notifyCard && notifyClose) {
      notifyClose.addEventListener('click', () => {
        notifyCard.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        notifyCard.style.opacity = '0';
        notifyCard.style.transform = 'translateY(-10px) scale(0.96)';
        setTimeout(() => notifyCard.style.display = 'none', 420);
      });
    }

    // ── 5. ANIMATED STAT COUNTERS IN RIBBON ─────────────────────────────────────
    const statTargets = [
      { id: 'statFarmersNum',   end: 500, suffix: '+' },
      { id: 'statMarketsNum',   end: 50,  suffix: '+' },
      { id: 'statCustomersNum', end: 10,  suffix: 'K+' },
    ];

    const animateCounter = (el, end, suffix) => {
      let start = 0;
      const dur2 = 1800;
      const step = 16;
      const steps = dur2 / step;
      const inc = end / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += inc;
        if (current >= end) {
          el.textContent = end + suffix;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current) + suffix;
        }
      }, step);
    };

    const ribbonObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statTargets.forEach(({ id, end, suffix }) => {
            const el2 = document.getElementById(id);
            if (el2) animateCounter(el2, end, suffix);
          });
          ribbonObs.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const ribbonEl = heroSection.querySelector('.hero-stats-ribbon') || heroSection.querySelector('.ff-hero__ribbon');
    if (ribbonEl) ribbonObs.observe(ribbonEl);
  }

  /**
   * Scroll progress indicator bar at top
   */
  setupScrollProgress() {
    const bar = document.createElement('div');
    bar.id = 'scrollProgressBar';
    bar.style.cssText = `
      position:fixed;
      top:0;
      left:0;
      height:3px;
      width:0%;
      background:linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 50%, var(--accent) 100%);
      z-index:99999;
      transition:width 0.1s ease;
      box-shadow:0 0 8px var(--primary-glow);
    `;
    document.body.appendChild(bar);

    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.min(100, (scrollTop / docHeight) * 100);
      bar.style.width = pct + '%';

      // Back to top button visibility
      if (backToTopBtn) {
        if (scrollTop > 400) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }
    }, { passive: true });

    backToTopBtn?.addEventListener('click', () => {
      audioManager.playClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /**
   * Interactive VIP Cards - Handled via 100% GPU-accelerated CSS for butter-smooth 60fps
   */
  setupVIPCardEffects() {
    // Pure CSS hardware acceleration used in components.css to ensure 0ms latency and 0% CPU overhead
  }
}

// Instantiate and start app safely whether DOM is ready or already loaded
function startFreshFindApp() {
  if (window.freshFindApp) return;
  const app = new FreshFindApp();
  window.freshFindApp = app;
  app.init().catch(err => console.error('FreshFind App failed to initialize:', err));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startFreshFindApp);
} else {
  startFreshFindApp();
}
