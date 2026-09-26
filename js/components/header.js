import { audioManager } from '../audioManager.js';

export class Header {
  constructor(app) {
    this.app = app;
    this.clockEl = document.getElementById('liveClockText');
    this.themeToggleBtn = document.getElementById('themeToggleBtn');
    this.soundToggleBtn = document.getElementById('soundToggleBtn');
    this.mobileToggleBtn = document.getElementById('mobileMenuToggle');
    this.mainNav = document.getElementById('mainNav');
    this.bookmarkBadge = document.getElementById('headerBookmarkBadge');
    this.searchInput = document.getElementById('navSearchInput');
    this.searchBtn = document.getElementById('navSearchSubmitBtn');
    this.notifyBtn = document.getElementById('navNotifyBtn');
    this.cartBtn = document.getElementById('navCartBtn');
  }

  init() {
    this.startClock();
    this.setupThemeToggle();
    this.setupSoundToggle();
    this.setupMobileMenu();
    this.setupScrollEffect();
    this.setupSearch();
    this.setupActions();
    this.setupNewsletter();
    this.syncInitialBadge();
  }

  setupNewsletter() {
    window.handleNewsletterSubscribe = function(form) {
      if (!form) return;
      const input = form.querySelector('input[type="email"]');
      const email = input ? input.value.trim() : '';
      if (!email) return;

      const btn = form.querySelector('button[type="submit"]');
      const successMsg = form.querySelector('.newsletter-success-msg') || (form.parentElement && form.parentElement.querySelector('.newsletter-success-msg'));

      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Subscribing...';
      }

      setTimeout(() => {
        if (input) input.value = '';
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Subscribed ✓';
        }
        if (successMsg) {
          successMsg.style.display = 'flex';
        }
        if (window.freshFindApp && typeof window.freshFindApp.showToast === 'function') {
          window.freshFindApp.showToast(`Thank you for subscribing (${email})! 🎉`);
        }
      }, 600);
    };

    document.querySelectorAll('.newsletter-form-box').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        window.handleNewsletterSubscribe(form);
      });
    });
  }

  syncInitialBadge() {
    try {
      const saved = localStorage.getItem('freshfind_user_bookmarks');
      if (saved) {
        const data = JSON.parse(saved);
        const total = Object.keys(data.markets || {}).length + Object.keys(data.market || {}).length + Object.keys(data.produce || {}).length;
        this.updateBookmarkCount(total);
      } else {
        this.updateBookmarkCount(0);
      }
    } catch (e) {
      this.updateBookmarkCount(0);
    }
  }

  startClock() {
    const updateTime = () => {
      const els = document.querySelectorAll('#liveClockText, .live-clock-text');
      if (!els.length) return;
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const dayStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      els.forEach(el => {
        el.textContent = `${dayStr} • ${timeStr}`;
      });
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  setupThemeToggle() {
    if (!this.themeToggleBtn) return;
    const savedTheme = localStorage.getItem('freshfind_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcon(savedTheme);

    this.themeToggleBtn.addEventListener('click', () => {
      audioManager.playClick();
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('freshfind_theme', nextTheme);
      this.updateThemeIcon(nextTheme);
      this.app?.showToast(`Switched to ${nextTheme} mode`);
    });
  }

  updateThemeIcon(theme) {
    if (!this.themeToggleBtn) return;
    this.themeToggleBtn.innerHTML = theme === 'dark'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }

  setupSoundToggle() {
    if (!this.soundToggleBtn) return;
    this.updateSoundIcon(audioManager.isMuted());
    this.soundToggleBtn.addEventListener('click', () => {
      const isMuted = audioManager.toggleMute();
      this.updateSoundIcon(isMuted);
      if (!isMuted) audioManager.playChime();
      this.app?.showToast(isMuted ? 'Sound muted' : 'Sound enabled');
    });
  }

  updateSoundIcon(isMuted) {
    if (!this.soundToggleBtn) return;
    this.soundToggleBtn.innerHTML = isMuted
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
  }

  setupMobileMenu() {
    if (this.mobileToggleBtn && this.mainNav) {
      this.mobileToggleBtn.addEventListener('click', () => {
        audioManager.playClick();
        this.mainNav.classList.toggle('open');
      });

      // Close on link click
      this.mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          this.mainNav.classList.remove('open');
        });
      });
    }
  }

  setupScrollEffect() {
    const headerWrapper = document.querySelector('.site-header-wrapper') || document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        headerWrapper?.classList.add('scrolled');
      } else {
        headerWrapper?.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  setupSearch() {
    const handleSearch = () => {
      const q = this.searchInput ? this.searchInput.value.trim() : '';
      if (!q) return;
      try { if (typeof audioManager !== 'undefined' && audioManager.playClick) audioManager.playClick(); } catch(e) {}

      const kwInput = document.getElementById('filterKeyword') || document.getElementById('marketSearchInput');

      if (this.app && this.app.marketDirectory) {
        if (kwInput) {
          kwInput.value = q;
        }
        this.app.marketDirectory.searchKeyword = q.toLowerCase();
        this.app.marketDirectory.render();
        const dirEl = document.getElementById('directory');
        if (dirEl) dirEl.scrollIntoView({ behavior: 'smooth' });
        if (this.app && typeof this.app.showToast === 'function') {
          this.app.showToast("Showing results for \"" + q + "\"");
        }
      } else {
        sessionStorage.setItem('freshfind_pending_search', q);
        window.location.href = "index.html?search=" + encodeURIComponent(q) + "#directory";
      }
    };

    if (this.searchBtn) this.searchBtn.addEventListener('click', handleSearch);
    if (this.searchInput) {
      this.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSearch();
      });
    }
  }

  setupActions() {
    // Notification Bell trigger
    this.notifyBtn?.addEventListener('click', () => {
      audioManager.playChime();
      this.app?.showToast('All 8 local farmers markets open and operating on regular schedule!');
    });

    // Saved Bookmarks Button Trigger
    this.cartBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      audioManager.playClick();
      if (this.app?.bookmarks && document.getElementById('bookmarksDrawer')) {
        this.app.bookmarks.open();
      } else {
        window.location.href = 'index.html#open-bookmarks';
      }
    });
  }

  updateBookmarkCount(count) {
    document.querySelectorAll('#headerBookmarkBadge, .nav-cart-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  }
}
