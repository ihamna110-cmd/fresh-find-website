/**
 * FreshFind - Universal Production Bundle (About)
 */
(function() {
  if (window.__FRESHFIND_ABOUT_BUNDLE_LOADED__) return;
  window.__FRESHFIND_ABOUT_BUNDLE_LOADED__ = true;

/* === [Module: audioManager.js] === */
/**
 * FreshFind - Audio Feedback Manager (Web Audio API)
 * Generates futuristic, organic, subtle audio clicks and soft bell chimes without any external audio files.
 */
class AudioManager {
  constructor() {
    this.audioCtx = null;
    this.muted = localStorage.getItem('freshfind_muted') === 'true';
  }

  init() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('freshfind_muted', this.muted);
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  playClick() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.05); // A5

      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.06);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playChime() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5 - E5 - G5 - C6
      freqs.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + idx * 0.04);

        const startTime = this.audioCtx.currentTime + idx * 0.04;
        gain.gain.setValueAtTime(0.05, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch (e) {}
  }
}

const audioManager = new AudioManager();


/* === [Module: components/header.js] === */
// [import stripped]

class Header {
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
    this.syncInitialBadge();
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
      const q = this.searchInput?.value.trim();
      if (!q) return;
      audioManager.playClick();

      // If marketDirectory exists on the page
      if (this.app?.marketDirectory) {
        const dirEl = document.getElementById('directory');
        if (dirEl) dirEl.scrollIntoView({ behavior: 'smooth' });
        const dirSearch = document.getElementById('marketSearchInput');
        if (dirSearch) {
          dirSearch.value = q;
          this.app.marketDirectory.render();
        }
        this.app?.showToast(`Showing results for "${q}"`);
      } else {
        // Redirect to homepage directory with query
        window.location.href = `index.html#directory`;
      }
    };

    this.searchBtn?.addEventListener('click', handleSearch);
    this.searchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSearch();
    });
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


/* === [Module: components/gardenScrollbar.js] === */
/**
 * FreshFind Living Garden Scrollbar Component (DELUXE VIP EDITION)
 * Highly optimized, zero-lag signature botanical scrollbar featuring:
 * - Large sprouting top bud cap (44x44px)
 * - Wide organic curving vine stem track with glowing nodes
 * - Deluxe 3D botanical leaf thumb (54x74px) with veins, gloss & dynamic breeze sway
 * - Decorative breeze-swaying branch leaves along the track
 * - Handcrafted woven market basket bottom cap (50x50px) with harvest celebration
 * - Event-driven, low-CPU physics loop (0% idle CPU)
 * - Draggable and click-to-jump track support
 */

class GardenScrollbar {
  constructor(app) {
    this.app = app;
    this.container = null;
    this.track = null;
    this.thumb = null;
    this.topCap = null;
    this.bottomBasket = null;
    this.particlesContainer = null;
    this.decorativeLeaves = [];

    this.isDragging = false;
    this.startY = 0;
    this.startScrollTop = 0;

    // Scroll physics & velocity state
    this.lastScrollY = 0;
    this.lastScrollTime = Date.now();
    this.scrollVelocity = 0;
    this.targetRotation = 0;
    this.currentRotation = 0;
    this.scrollTimeout = null;
    this.isScrolling = false;
    this.hasHarvested = false;

    // Performance cached layout metrics
    this.cachedTrackHeight = 0;
    this.cachedThumbHeight = 68;
    this.cachedMaxScroll = 1;
    this.rafId = null;
    this.isPhysicsRunning = false;
    this.lastParticleTime = 0;
  }

  init() {
    this.buildDOM();
    this.cacheMetrics();
    this.bindEvents();
    this.updatePosition();
  }

  cacheMetrics() {
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = window.innerHeight;
    this.cachedMaxScroll = Math.max(1, scrollHeight - clientHeight);

    if (this.track) {
      this.cachedTrackHeight = this.track.clientHeight;
    }
    if (this.thumb) {
      this.cachedThumbHeight = this.thumb.clientHeight || 68;
    }
  }

  buildDOM() {
    const existing = document.getElementById('gardenScrollbar');
    if (existing) existing.remove();

    this.container = document.createElement('div');
    this.container.id = 'gardenScrollbar';
    this.container.className = 'garden-scrollbar-wrap';
    this.container.setAttribute('role', 'scrollbar');
    this.container.setAttribute('aria-label', 'Living Garden Botanical Scrollbar');
    this.container.setAttribute('aria-controls', 'main');

    this.container.innerHTML = `
      <!-- Top Bud Cap: Large Sprouting Fresh Leaf -->
      <div class="garden-top-bud" title="Scroll to Top of Garden" id="gardenTopBud">
        <svg viewBox="0 0 44 44" class="garden-bud-svg" fill="none">
          <circle cx="22" cy="22" r="18" fill="rgba(184, 233, 134, 0.25)" filter="blur(4px)" />
          <!-- Stem Base -->
          <path d="M22 40 C22 30, 20 24, 22 18" stroke="#163D2A" stroke-width="3.5" stroke-linecap="round"/>
          <!-- Left Fresh Leaf -->
          <path d="M22 24 C15 20, 8 22, 6 15 C11 13, 18 16, 22 24" fill="url(#gardenSproutGrad1)" stroke="#163D2A" stroke-width="1.2"/>
          <!-- Right Sunlit Leaf -->
          <path d="M22 21 C27 15, 36 16, 38 8 C31 8, 24 13, 22 21" fill="url(#gardenSproutGrad2)" stroke="#163D2A" stroke-width="1.2"/>
          <!-- Morning Dew Glow Core -->
          <circle cx="22" cy="15" r="3.2" fill="#FFF9EC" stroke="#B8E986" stroke-width="1"/>
          <circle cx="21" cy="14" r="1.2" fill="#ffffff"/>
          <defs>
            <linearGradient id="gardenSproutGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#B8E986"/>
              <stop offset="100%" stop-color="#6FAF45"/>
            </linearGradient>
            <linearGradient id="gardenSproutGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#B8E986"/>
              <stop offset="50%" stop-color="#6FAF45"/>
              <stop offset="100%" stop-color="#163D2A"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Vine Stem Track -->
      <div class="garden-vine-track" id="gardenVineTrack">
        <!-- SVG Organic Vine Stem Curve with Nodes -->
        <svg class="garden-vine-svg" preserveAspectRatio="none" viewBox="0 0 28 500">
          <!-- Background Vine Shadow -->
          <path class="garden-vine-path-bg" d="M14 0 Q20 125, 9 250 T18 500" fill="none" stroke="rgba(22, 61, 42, 0.35)" stroke-width="7" stroke-linecap="round"/>
          <!-- Vibrant Organic Stem -->
          <path class="garden-vine-path" d="M14 0 Q20 125, 9 250 T18 500" fill="none" stroke="url(#gardenVineGrad)" stroke-width="4.5" stroke-linecap="round"/>
          <!-- Glowing Vine Nodes -->
          <circle cx="16" cy="95" r="3.2" fill="#B8E986" stroke="#163D2A" stroke-width="0.8"/>
          <circle cx="10" cy="210" r="3.2" fill="#6FAF45" stroke="#163D2A" stroke-width="0.8"/>
          <circle cx="14" cy="335" r="3.2" fill="#B8E986" stroke="#163D2A" stroke-width="0.8"/>
          <circle cx="17" cy="440" r="3.2" fill="#6FAF45" stroke="#163D2A" stroke-width="0.8"/>
          <defs>
            <linearGradient id="gardenVineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#B8E986"/>
              <stop offset="30%" stop-color="#6FAF45"/>
              <stop offset="70%" stop-color="#163D2A"/>
              <stop offset="100%" stop-color="#B98245"/>
            </linearGradient>
          </defs>
        </svg>

        <!-- Decorative Leaves along the vine at 18%, 42%, 68%, 88% -->
        <div class="garden-deco-leaf deco-1" style="top: 18%;" data-side="left">
          <svg viewBox="0 0 22 22" width="20" height="20">
            <path d="M20 20 C11 17, 3 11, 3 3 C11 3, 17 11, 20 20" fill="#6FAF45" stroke="#163D2A" stroke-width="1.2"/>
            <path d="M20 20 L6 6" stroke="#DDEACB" stroke-width="1" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="garden-deco-leaf deco-2" style="top: 42%;" data-side="right">
          <svg viewBox="0 0 22 22" width="20" height="20">
            <path d="M3 20 C12 17, 20 11, 20 3 C12 3, 6 11, 3 20" fill="#B8E986" stroke="#163D2A" stroke-width="1.2"/>
            <path d="M3 20 L17 6" stroke="#FFF9EC" stroke-width="1" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="garden-deco-leaf deco-3" style="top: 68%;" data-side="left">
          <svg viewBox="0 0 22 22" width="18" height="18">
            <path d="M20 20 C11 17, 3 11, 3 3 C11 3, 17 11, 20 20" fill="#6FAF45" stroke="#163D2A" stroke-width="1.2"/>
            <path d="M20 20 L6 6" stroke="#DDEACB" stroke-width="1" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="garden-deco-leaf deco-4" style="top: 88%;" data-side="right">
          <svg viewBox="0 0 22 22" width="18" height="18">
            <path d="M3 20 C12 17, 20 11, 20 3 C12 3, 6 11, 3 20" fill="#DDEACB" stroke="#163D2A" stroke-width="1.2"/>
          </svg>
        </div>

        <!-- Trailing Spores Container -->
        <div class="garden-particles-layer" id="gardenParticlesLayer"></div>

        <!-- Large Draggable Botanical Leaf Thumb (54x74px) -->
        <div class="garden-leaf-thumb" id="gardenLeafThumb" title="Drag to Scroll" tabindex="0" role="slider" aria-orientation="vertical">
          <div class="garden-thumb-inner">
            <svg viewBox="0 0 52 74" class="garden-thumb-leaf-svg" style="overflow:visible;">
              <defs>
                <!-- Realistic Multi-Stop Chlorophyll Gradient -->
                <linearGradient id="leafRealBodyGrad" x1="0.15" y1="0.0" x2="0.85" y2="1.0">
                  <stop offset="0%" stop-color="#BAF268"/>
                  <stop offset="18%" stop-color="#84DB3A"/>
                  <stop offset="45%" stop-color="#49A429"/>
                  <stop offset="75%" stop-color="#236B27"/>
                  <stop offset="100%" stop-color="#123B17"/>
                </linearGradient>

                <!-- Sunlit Upper Leaf Blade Translucency -->
                <linearGradient id="leafSunlightGlow" x1="0" y1="0" x2="1" y2="0.8">
                  <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.55"/>
                  <stop offset="35%" stop-color="#CEFAA0" stop-opacity="0.30"/>
                  <stop offset="100%" stop-color="#236B27" stop-opacity="0"/>
                </linearGradient>

                <!-- Leaf Soft Shadow for 3D Depth -->
                <radialGradient id="leafDewShadow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="rgba(10,35,16,0.6)"/>
                  <stop offset="100%" stop-color="rgba(10,35,16,0)"/>
                </radialGradient>

                <!-- Dew Drop Refraction -->
                <linearGradient id="dewDropGrad" x1="0.2" y1="0.1" x2="0.8" y2="0.9">
                  <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
                  <stop offset="40%" stop-color="#E2FCD0" stop-opacity="0.75"/>
                  <stop offset="85%" stop-color="#559938" stop-opacity="0.6"/>
                  <stop offset="100%" stop-color="#19481E" stop-opacity="0.85"/>
                </linearGradient>

                <filter id="leafSoftBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.2"/>
                </filter>
              </defs>

              <!-- 1. Ambient Drop Shadow / 3D Grounding Layer -->
              <path d="M26 68 C25 60, 25 53, 26 47 C14 44, 4 33, 4 21 C4 9, 15 2, 27 1 C39 2, 49 11, 48 23 C48 35, 38 45, 27 48 C27 54, 28 61, 28 68 Z"
                    fill="rgba(10, 30, 16, 0.42)" transform="translate(1.5, 3.5)" filter="url(#leafSoftBlur)"/>

              <!-- 2. Organic Leaf Stem (Petiole) -->
              <path d="M26 72 C25 65, 25.5 58, 26 50" fill="none" stroke="#2D7A2E" stroke-width="3" stroke-linecap="round"/>
              <path d="M26.2 72 C25.3 65, 25.8 58, 26.2 50" fill="none" stroke="#8FE240" stroke-width="1.2" stroke-linecap="round"/>

              <!-- 3. Main Realistic Leaf Body (Natural asymmetrical botanical curve) -->
              <path class="leaf-blade-path"
                    d="M27 2 
                       C21 8, 5 16, 5 28 
                       C5 40, 15 49, 26 52 
                       C37 49, 47 38, 47 26 
                       C47 14, 33 6, 27 2 Z"
                    fill="url(#leafRealBodyGrad)"
                    stroke="#16431E"
                    stroke-width="1.2"/>

              <!-- 4. Sunlit Upper Hemisphere & Cellular Sheen Layer -->
              <path d="M27 3 
                       C21 9, 6 17, 6 28 
                       C6 38, 14 46, 26 50 
                       C25 36, 25 18, 27 3 Z"
                    fill="url(#leafSunlightGlow)"/>

              <!-- 5. Fine Leaf Margin Highlight (Wax Cuticle Edge) -->
              <path d="M26 3 C20 9, 7 17, 7 28 C7 36, 12 43, 20 48"
                    fill="none" stroke="rgba(255, 255, 255, 0.45)" stroke-width="0.8" stroke-linecap="round"/>

              <!-- 6. Realistic Primary Midrib Spine (Tapering & naturally curved) -->
              <path d="M26 51 C25.5 38, 25.8 20, 27 3"
                    fill="none" stroke="#133D19" stroke-width="2.2" stroke-linecap="round"/>
              <path d="M26 51 C25.5 38, 25.8 20, 27 3"
                    fill="none" stroke="#E5F9CB" stroke-width="1.2" stroke-linecap="round"/>

              <!-- 7. Delicate Curved Secondary Veins (Left Leaf Blade) -->
              <g stroke="#D4F3AF" stroke-width="0.75" stroke-linecap="round" fill="none" opacity="0.85">
                <path d="M26 44 C20 42, 13 41, 10 37"/>
                <path d="M26 36 C19 34, 12 31, 8 26"/>
                <path d="M26 27 C19 24, 13 21, 10 16"/>
                <path d="M26.5 18 C22 15, 17 13, 14 9"/>
                <path d="M27 10 C24 8, 21 7, 19 4"/>
              </g>

              <!-- 8. Delicate Curved Secondary Veins (Right Leaf Blade) -->
              <g stroke="#C6EFA0" stroke-width="0.75" stroke-linecap="round" fill="none" opacity="0.85">
                <path d="M26 44 C32 42, 39 40, 42 35"/>
                <path d="M26 35 C33 33, 40 29, 44 23"/>
                <path d="M26.2 26 C33 23, 39 19, 42 14"/>
                <path d="M26.5 17 C31 14, 36 12, 39 8"/>
                <path d="M27 9 C30 7, 33 6, 35 4"/>
              </g>

              <!-- 9. Soft Dorsal Reflection Glow Ridge -->
              <path d="M26 8 C23 18, 21 30, 23 44" fill="none" stroke="rgba(255, 255, 255, 0.4)" stroke-width="1.0" filter="url(#leafSoftBlur)"/>

              <!-- 10. Hyper-Realistic Dew Droplet with Refraction & Sun Sparkle -->
              <ellipse cx="17" cy="27" rx="3.4" ry="2.8" fill="rgba(10,35,16,0.38)" transform="translate(1, 1.5)"/>
              <ellipse cx="17" cy="27" rx="3.3" ry="2.7" fill="url(#dewDropGrad)"/>
              <!-- Droplet Specular Reflection -->
              <circle cx="16" cy="25.8" r="1.1" fill="#FFFFFF" opacity="0.95"/>
              <circle cx="18" cy="27.6" r="0.5" fill="#E4FCD0" opacity="0.8"/>
            </svg>

            <!-- Active Drag & Velocity Glow Aura -->
            <div class="garden-thumb-glow" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      <!-- Bottom Basket Cap: Handcrafted Woven Market Basket (50x50px) -->
      <div class="garden-bottom-basket" title="Fresh Harvest Basket" id="gardenBottomBasket">
        <div class="garden-basket-inner">
          <svg viewBox="0 0 44 44" class="garden-basket-svg">
            <!-- Glow background on bottom reached -->
            <circle cx="22" cy="25" r="19" fill="rgba(185, 130, 69, 0.25)" class="garden-basket-aura" />
            
            <!-- Basket Sturdy Handle -->
            <path d="M11 22 C11 8, 33 8, 33 22" fill="none" stroke="#B98245" stroke-width="3" stroke-linecap="round"/>
            <path d="M14 22 C14 11, 30 11, 30 22" fill="none" stroke="#875323" stroke-width="1.2"/>

            <!-- Fresh Harvest Vegetables inside basket -->
            <!-- Carrot -->
            <path class="harvest-crop crop-carrot" d="M13 16 L19 24 L16 25 Z" fill="#ea580c"/>
            <path d="M12 13 L14 16 L11 15" stroke="#6FAF45" stroke-width="1.8" stroke-linecap="round"/>
            <!-- Juicy Tomato -->
            <circle class="harvest-crop crop-tomato" cx="22" cy="19" r="4.6" fill="#dc2626"/>
            <path d="M20 15 L22 17 L24 15" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Apple / Green Herb -->
            <circle class="harvest-crop crop-herb" cx="29" cy="20" r="4" fill="#6FAF45"/>

            <!-- Woven Basket Base Body -->
            <path d="M7 22 L11 38 C12 41, 32 41, 33 38 L37 22 Z" fill="url(#gardenBasketGrad)" stroke="#673d16" stroke-width="1.8"/>
            
            <!-- Woven Lattice Lines -->
            <path d="M8 26 L36 26 M9 31 L35 31 M11 36 L33 36" stroke="#875323" stroke-width="1.2"/>
            <path d="M15 22 L17 38 M22 22 L22 39 M29 22 L27 38" stroke="#875323" stroke-width="1.2"/>
            <path d="M6 22 L38 22" stroke="#B98245" stroke-width="3" stroke-linecap="round"/>

            <defs>
              <linearGradient id="gardenBasketGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#e2ab69"/>
                <stop offset="50%" stop-color="#B98245"/>
                <stop offset="100%" stop-color="#875323"/>
              </linearGradient>
            </defs>
          </svg>

          <!-- Harvest Celebration Sparkles on reaching bottom -->
          <div class="harvest-sparkle-wrap" id="harvestSparkleWrap" aria-hidden="true">
            <span class="harvest-sparkle s-1">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#facc15" stroke="#facc15" stroke-width="1"><path d="M12 2l2.09 6.26L21 9l-5.46 4.73L17.18 21 12 17.27 6.82 21l1.64-7.27L3 9l6.91-.74z"/></svg>
            </span>
            <span class="harvest-sparkle s-2">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </span>
            <span class="harvest-sparkle s-3">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>
            </span>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.container);

    this.track = document.getElementById('gardenVineTrack');
    this.thumb = document.getElementById('gardenLeafThumb');
    this.topCap = document.getElementById('gardenTopBud');
    this.bottomBasket = document.getElementById('gardenBottomBasket');
    this.particlesContainer = document.getElementById('gardenParticlesLayer');
    this.decorativeLeaves = Array.from(this.container.querySelectorAll('.garden-deco-leaf'));
  }

  bindEvents() {
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    window.addEventListener('resize', () => {
      this.cacheMetrics();
      this.updatePosition();
    }, { passive: true });

    // Click on top bud -> scroll to top
    this.topCap?.addEventListener('click', () => {
      this.app?.audioManager?.playClick?.();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Click on bottom basket -> scroll to bottom
    this.bottomBasket?.addEventListener('click', () => {
      this.app?.audioManager?.playChime?.();
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    });

    // Click anywhere on vine track to jump scroll
    this.track?.addEventListener('click', (e) => {
      if (e.target.closest('#gardenLeafThumb')) return;
      const rect = this.track.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const pct = Math.max(0, Math.min(1, clickY / rect.height));
      const targetScroll = pct * this.cachedMaxScroll;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    });

    // Drag handling on leaf thumb
    this.thumb?.addEventListener('mousedown', (e) => this.onDragStart(e));
    this.thumb?.addEventListener('touchstart', (e) => this.onDragStart(e.touches[0]), { passive: false });

    window.addEventListener('mousemove', (e) => this.onDragMove(e), { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (this.isDragging) {
        e.preventDefault();
        this.onDragMove(e.touches[0]);
      }
    }, { passive: false });

    window.addEventListener('mouseup', () => this.onDragEnd());
    window.addEventListener('touchend', () => this.onDragEnd());

    // Keyboard accessibility
    this.thumb?.addEventListener('keydown', (e) => {
      const step = 80;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        window.scrollBy({ top: step, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        window.scrollBy({ top: -step, behavior: 'smooth' });
      } else if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      }
    });
  }

  handleScroll() {
    const now = Date.now();
    const currentScrollY = window.scrollY;
    const dt = Math.max(1, now - this.lastScrollTime);
    const dy = currentScrollY - this.lastScrollY;

    // Instant velocity in px/ms
    const rawVelocity = dy / dt;
    this.scrollVelocity = this.scrollVelocity * 0.7 + rawVelocity * 0.3;

    this.lastScrollY = currentScrollY;
    this.lastScrollTime = now;

    // Cap sway between -14deg and +14deg
    this.targetRotation = Math.max(-14, Math.min(14, this.scrollVelocity * 9));

    this.isScrolling = true;
    this.container?.classList.add('scrolling');

    if (Math.abs(this.scrollVelocity) > 1.2) {
      this.container?.classList.add('fast-scroll');
    } else {
      this.container?.classList.remove('fast-scroll');
    }

    // Spawn trailing shimmer dew particles (throttled to avoid DOM bloat)
    if (now - this.lastParticleTime > 150 && Math.abs(this.scrollVelocity) > 0.4) {
      this.lastParticleTime = now;
      this.spawnTrailSpore();
    }

    // Sway decorative leaves subtly
    this.swayDecorativeLeaves(this.scrollVelocity);

    // Check bottom harvest condition
    this.checkHarvestBottom();

    // Start physics loop if not already running
    this.startPhysicsLoop();

    // Settle debounce
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
      this.targetRotation = 0;
      this.scrollVelocity = 0;
      this.container?.classList.remove('scrolling', 'fast-scroll');
      this.settleBounce();
    }, 120);
  }

  startPhysicsLoop() {
    if (this.isPhysicsRunning) return;
    this.isPhysicsRunning = true;

    const loop = () => {
      // Lerp rotation for organic fluid movement
      this.currentRotation += (this.targetRotation - this.currentRotation) * 0.16;

      this.updatePosition();

      // Stop physics loop when motion has settled to save CPU
      if (!this.isScrolling && !this.isDragging && Math.abs(this.currentRotation - this.targetRotation) < 0.05) {
        this.currentRotation = 0;
        this.updatePosition();
        this.isPhysicsRunning = false;
        this.rafId = null;
        return;
      }

      this.rafId = requestAnimationFrame(loop);
    };

    this.rafId = requestAnimationFrame(loop);
  }

  updatePosition() {
    if (!this.track || !this.thumb) return;

    const scrollTop = window.scrollY;
    const scrollPct = Math.max(0, Math.min(1, scrollTop / (this.cachedMaxScroll || 1)));

    const trackHeight = this.cachedTrackHeight || this.track.clientHeight;
    const thumbHeight = this.cachedThumbHeight;
    const maxThumbTop = Math.max(0, trackHeight - thumbHeight);
    const thumbTop = scrollPct * maxThumbTop;

    this.thumb.style.transform = `translate3d(0, ${thumbTop.toFixed(1)}px, 0) rotate(${this.currentRotation.toFixed(2)}deg)`;

    const pctInt = Math.round(scrollPct * 100);
    this.thumb.setAttribute('aria-valuenow', pctInt);
  }

  swayDecorativeLeaves(velocity) {
    const angle = Math.max(-18, Math.min(18, velocity * 12));
    this.decorativeLeaves.forEach((leaf, idx) => {
      const isLeft = leaf.getAttribute('data-side') === 'left';
      const dir = isLeft ? -1 : 1;
      const stagger = 1 + idx * 0.15;
      leaf.style.transform = `rotate(${(angle * dir * stagger).toFixed(1)}deg)`;
    });
  }

  settleBounce() {
    this.decorativeLeaves.forEach((leaf) => {
      leaf.style.transform = `rotate(0deg)`;
    });

    if (this.thumb) {
      this.thumb.classList.add('settle-bounce');
      setTimeout(() => this.thumb?.classList.remove('settle-bounce'), 450);
    }
  }

  checkHarvestBottom() {
    const scrollTop = window.scrollY;
    const clientHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 40);

    if (isAtBottom) {
      if (!this.hasHarvested) {
        this.hasHarvested = true;
        this.bottomBasket?.classList.add('harvest-active');
        this.app?.audioManager?.playChime?.();
        this.app?.showToast?.('🧺 Reached the Harvest Floor! 100% Farm Fresh!');
      }
    } else {
      if (this.hasHarvested) {
        this.hasHarvested = false;
        this.bottomBasket?.classList.remove('harvest-active');
      }
    }
  }

  spawnTrailSpore() {
    if (!this.particlesContainer || !this.thumb) return;
    const thumbTop = parseFloat(this.thumb.style.transform.split('translate3d(0, ')[1] || '0');

    const spore = document.createElement('div');
    spore.className = 'garden-spore';

    const relY = thumbTop + 34;
    const relX = 14 + (Math.random() * 12 - 6);
    const size = Math.random() * 6 + 4;

    spore.style.cssText = `
      top: ${relY}px;
      left: ${relX}px;
      width: ${size}px;
      height: ${size}px;
      background: ${Math.random() > 0.4 ? '#B8E986' : '#FFF9EC'};
      box-shadow: 0 0 8px #B8E986;
    `;

    this.particlesContainer.appendChild(spore);
    setTimeout(() => spore.remove(), 550);
  }

  onDragStart(e) {
    this.isDragging = true;
    this.startY = e.clientY;
    this.startScrollTop = window.scrollY;
    this.container?.classList.add('dragging');
    document.body.classList.add('garden-scrollbar-dragging');
    this.app?.audioManager?.playClick?.();
    this.startPhysicsLoop();
  }

  onDragMove(e) {
    if (!this.isDragging || !this.track) return;
    const deltaY = e.clientY - this.startY;
    const trackHeight = this.cachedTrackHeight || this.track.clientHeight;
    const thumbHeight = this.cachedThumbHeight;
    const maxThumbTop = Math.max(1, trackHeight - thumbHeight);

    const scrollDelta = (deltaY / maxThumbTop) * this.cachedMaxScroll;
    window.scrollTo({
      top: this.startScrollTop + scrollDelta,
      behavior: 'auto'
    });
  }

  onDragEnd() {
    if (this.isDragging) {
      this.isDragging = false;
      this.container?.classList.remove('dragging');
      document.body.classList.remove('garden-scrollbar-dragging');
      this.settleBounce();
    }
  }

  destroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
    this.container?.remove();
  }
}


/* === [Module: components/customCursor.js] === */
/**
 * FreshFind — High-Performance Smiling Carrot Botanical Cursor
 * ============================================================
 * • 100% Click Reliability: Tip is aligned with (e.clientX, e.clientY) with ZERO offset
 * • 0% CPU Idle Overhead: Event-driven motion without heavy background DOM particle thrashing
 * • Zero-Lag Pointer: Pure GPU-accelerated translate3d with pointer-events: none !important
 * • Cute Expressive Face: Smiles on hover & squashes happily on click
 * • Safe across all browsers & devices
 */

// [import stripped]

class CustomCursor {
  constructor() {
    // Only skip on touch-only mobile devices without pointer support
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches) return;

    this.container = null;
    this.carrotBody = null;
    this.isHovering = false;
    this.isClicking = false;
    this.rafId = null;
    this.targetX = -100;
    this.targetY = -100;
    this.currentX = -100;
    this.currentY = -100;
    this._hasMoved = false;

    this.init();
  }

  init() {
    this._createDOM();
    this._injectStyles();
    this._addEventListeners();
    this._startLoop();
  }

  _createDOM() {
    const existing = document.getElementById('ffCarrotCursor');
    if (existing) existing.remove();

    this.container = document.createElement('div');
    this.container.id = 'ffCarrotCursor';
    this.container.className = 'ff-carrot-cursor';
    this.container.setAttribute('aria-hidden', 'true');

    // Hotspot is at (0, 0) top-left tip where the pointed carrot tip aligns precisely
    this.container.innerHTML = `
      <div class="ff-carrot-wrap" id="ffCarrotWrap">
        <!-- Ambient Botanical Glow at Pointer Tip -->
        <div class="ff-carrot-tip-glow"></div>

        <svg class="ff-carrot-svg" width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ffCarrotGrad" x1="4" y1="4" x2="32" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#FFA23A"/>
              <stop offset="35%" stop-color="#FF6F00"/>
              <stop offset="85%" stop-color="#E65100"/>
              <stop offset="100%" stop-color="#BF360C"/>
            </linearGradient>

            <linearGradient id="ffLeafGrad" x1="20" y1="20" x2="35" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#A3E635"/>
              <stop offset="50%" stop-color="#4ADE80"/>
              <stop offset="100%" stop-color="#15803D"/>
            </linearGradient>

            <linearGradient id="ffShimmerGrad" x1="2" y1="2" x2="20" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.85"/>
              <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
            </linearGradient>

            <radialGradient id="ffBlushGrad">
              <stop offset="0%" stop-color="#FF3366" stop-opacity="0.85"/>
              <stop offset="70%" stop-color="#FF5E7E" stop-opacity="0.45"/>
              <stop offset="100%" stop-color="#FF5E7E" stop-opacity="0"/>
            </radialGradient>
          </defs>

          <!-- 🥕 Main Carrot Body (Tip pointed exactly at 1, 1 for 100% click precision) -->
          <path d="M1.5 1.5 C6 12, 14 26, 26 26 C30 26, 32 23, 31 18 C28 8, 14 3, 1.5 1.5 Z"
                fill="url(#ffCarrotGrad)"
                stroke="#C2410C"
                stroke-width="1.2"
                stroke-linejoin="round"/>

          <!-- Glossy highlight curve -->
          <path d="M4 6 C8 12, 16 18, 24 19"
                stroke="url(#ffShimmerGrad)"
                stroke-width="1.6"
                stroke-linecap="round"/>

          <!-- 🌿 Cute Top Foliage Leaves (Trailing at back-right, never blocking pointer) -->
          <g class="ff-leaves-group">
            <path d="M26 23 C31 23, 36 29, 34 35 C28 34, 25 28, 26 23 Z" fill="url(#ffLeafGrad)" stroke="#166534" stroke-width="0.8"/>
            <path d="M28 20 C34 18, 38 23, 37 30 C31 28, 27 23, 28 20 Z" fill="url(#ffLeafGrad)" stroke="#166534" stroke-width="0.8"/>
            <path d="M29 25 C33 30, 31 38, 26 36 C24 32, 27 27, 29 25 Z" fill="url(#ffLeafGrad)" stroke="#166534" stroke-width="0.8"/>
          </g>

          <!-- 😊 NORMAL STATE FACE -->
          <g class="ff-face-normal" id="ffFaceNormal">
            <!-- Left Eye -->
            <circle cx="15" cy="11" r="1.8" fill="#1C1917"/>
            <circle cx="15.6" cy="10.5" r="0.6" fill="#FFFFFF"/>
            <!-- Right Eye -->
            <circle cx="21" cy="14" r="1.8" fill="#1C1917"/>
            <circle cx="21.6" cy="13.5" r="0.6" fill="#FFFFFF"/>
            <!-- Cute Smile -->
            <path d="M16 16 Q18.5 18 21 17" stroke="#1C1917" stroke-width="1.2" stroke-linecap="round" fill="none"/>
          </g>

          <!-- 😄 SMILING STATE FACE (Active on Hover & Click) -->
          <g class="ff-face-smiling" id="ffFaceSmiling">
            <!-- Cheerful Pink Blush -->
            <ellipse cx="13" cy="14" rx="2.2" ry="1.4" fill="url(#ffBlushGrad)"/>
            <ellipse cx="23" cy="17" rx="2.2" ry="1.4" fill="url(#ffBlushGrad)"/>
            <!-- Happy Squint Eyes (^ ^) -->
            <path d="M13.5 11 Q15 9 16.5 11" stroke="#1C1917" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <path d="M19.5 14 Q21 12 22.5 14" stroke="#1C1917" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <!-- Open Joyful Smile (:D) -->
            <path d="M16 14.5 Q18.5 19 22 16.5 Z" fill="#2E1103"/>
            <path d="M17.5 16.5 Q19 18 21 16 Z" fill="#FF4E74"/>
          </g>

          <!-- ✨ Golden Star Sparkles on Hover -->
          <g class="ff-sparkles" id="ffSparkles">
            <path class="ff-sparkle-star" d="M3 18 L3.8 20 L6 20.8 L3.8 21.6 L3 23.8 L2.2 21.6 L0 20.8 L2.2 20 Z" fill="#FACC15"/>
            <path class="ff-sparkle-star" d="M12 2 L12.6 3.6 L14.5 4.2 L12.6 4.8 L12 6.5 L11.4 4.8 L9.5 4.2 L11.4 3.6 Z" fill="#FDE047"/>
          </g>
        </svg>
      </div>
    `;

    document.body.appendChild(this.container);
    this.carrotBody = this.container.querySelector('#ffCarrotWrap');
  }

  _injectStyles() {
    const existing = document.getElementById('ffCarrotCursorStyles');
    if (existing) existing.remove();

    const style = document.createElement('style');
    style.id = 'ffCarrotCursorStyles';
    style.textContent = `
      /* Root Cursor Container - 100% Passthrough Guaranteed */
      .ff-carrot-cursor,
      .ff-carrot-cursor * {
        pointer-events: none !important;
        user-select: none !important;
        -webkit-user-select: none !important;
      }

      .ff-carrot-cursor {
        position: fixed;
        top: 0;
        left: 0;
        width: 36px;
        height: 48px;
        z-index: 2147483647 !important;
        will-change: transform;
        transform: translate3d(-100px, -100px, 0);
        opacity: 0;
        transition: opacity 0.15s ease;
      }

      /* Carrot Wrap - Tip is at (1px, 1px) pointing directly at mouse coordinate */
      .ff-carrot-wrap {
        width: 100%;
        height: 100%;
        position: relative;
        transform-origin: 1px 1px;
        transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s ease;
        filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.22));
      }

      /* Glowing Pointer Tip */
      .ff-carrot-tip-glow {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(163, 230, 53, 0.9) 0%, rgba(34, 197, 94, 0.4) 60%, transparent 90%);
        transform: translate(-50%, -50%);
        opacity: 0.8;
        pointer-events: none !important;
        transition: transform 0.2s ease, opacity 0.2s ease;
      }

      /* Normal vs Smiling states */
      .ff-face-normal {
        opacity: 1;
        transition: opacity 0.15s ease;
      }

      .ff-face-smiling {
        opacity: 0;
        transition: opacity 0.15s ease;
      }

      .ff-sparkles {
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      /* Active Hover / Smile State */
      .ff-carrot-cursor.is-smiling .ff-face-normal {
        opacity: 0;
      }

      .ff-carrot-cursor.is-smiling .ff-face-smiling {
        opacity: 1;
      }

      .ff-carrot-cursor.is-smiling .ff-sparkles {
        opacity: 1;
      }

      .ff-carrot-cursor.is-smiling .ff-carrot-wrap {
        filter: drop-shadow(0 0 10px rgba(163, 230, 53, 0.75)) drop-shadow(0 3px 8px rgba(0,0,0,0.3));
        transform: scale(1.12);
      }

      .ff-carrot-cursor.is-smiling .ff-carrot-tip-glow {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 1;
      }

      /* Quick squash on click - Pure CSS, zero DOM element creation */
      .ff-carrot-cursor.is-clicking .ff-carrot-wrap {
        transform: scale(0.88);
      }
    `;
    document.head.appendChild(style);
  }

  _addEventListeners() {
    // Mouse movement: smooth coordinate tracking
    window.addEventListener('mousemove', (e) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;

      if (!this._hasMoved) {
        this._hasMoved = true;
        this.currentX = this.targetX;
        this.currentY = this.targetY;
        if (this.container) this.container.style.opacity = '1';
      }
    }, { passive: true });

    // Click reaction - audio chime + pure CSS squash, NO DOM MUTATION on mousedown
    window.addEventListener('mousedown', () => {
      this.isClicking = true;
      if (this.container) {
        this.container.classList.add('is-clicking');
        this.container.classList.add('is-smiling');
      }
      try {
        if (typeof audioManager !== 'undefined' && audioManager) {
          audioManager.playClick();
        }
      } catch(err) {}
    }, { passive: true });

    window.addEventListener('mouseup', () => {
      this.isClicking = false;
      if (this.container) {
        this.container.classList.remove('is-clicking');
        if (!this.isHovering) {
          this.container.classList.remove('is-smiling');
        }
      }
    }, { passive: true });

    // Lightweight interactive hover check
    document.addEventListener('mouseover', (e) => {
      const interactive = e.target.closest('a, button, input, select, textarea, [role="button"], .market-card, .produce-card, .view-market-detail-btn, .dropdown-link');
      if (interactive) {
        this.isHovering = true;
        if (this.container) this.container.classList.add('is-smiling');
      }
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
      const interactive = e.target.closest('a, button, input, select, textarea, [role="button"], .market-card, .produce-card, .view-market-detail-btn, .dropdown-link');
      if (interactive) {
        this.isHovering = false;
        if (!this.isClicking && this.container) {
          this.container.classList.remove('is-smiling');
        }
      }
    }, { passive: true });

    // Window boundaries
    document.addEventListener('mouseleave', () => {
      if (this.container) this.container.style.opacity = '0';
    }, { passive: true });

    document.addEventListener('mouseenter', () => {
      if (this._hasMoved && this.container) this.container.style.opacity = '1';
    }, { passive: true });
  }

  _startLoop() {
    const render = () => {
      if (this._hasMoved && this.container) {
        // High-precision lerp for ultra-smooth 60fps tracking without lag
        this.currentX += (this.targetX - this.currentX) * 0.45;
        this.currentY += (this.targetY - this.currentY) * 0.45;

        // Exactly align (0, 0) top-left tip with cursor
        this.container.style.transform = `translate3d(${this.currentX.toFixed(1)}px, ${this.currentY.toFixed(1)}px, 0)`;
      }

      this.rafId = requestAnimationFrame(render);
    };

    this.rafId = requestAnimationFrame(render);
  }

  destroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.container?.remove();
    document.getElementById('ffCarrotCursorStyles')?.remove();
  }
}


/* === [Module: about.js] === */
/**
 * FreshFind — About Us Page Controller
 */
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]

class AboutPageController {
  constructor() {
    this.header = null;
    this.gardenScrollbar = null;
    this.customCursor = null;
    this.toastContainer = document.getElementById('toastContainer');
  }

  init() {
    // 1. Initialize Header utilities
    try {
      this.header = new Header(this);
      this.header.init();
    } catch (e) {
      console.warn('Header init:', e);
    }

    // 2. Initialize Living Garden Botanical Scrollbar
    try {
      this.gardenScrollbar = new GardenScrollbar(this);
      this.gardenScrollbar.init();
    } catch (e) {
      console.warn('GardenScrollbar init:', e);
    }

    // 3. Initialize Custom Botanical Cursor
    try {
      this.customCursor = new CustomCursor();
    } catch (e) {
      console.warn('CustomCursor init:', e);
    }

    // 4. Click sound feedback on buttons
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        audioManager.playClick();
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
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new AboutPageController();
  window.freshFindApp = app;
  app.init();
});


  window.audioManager = audioManager;
})();
