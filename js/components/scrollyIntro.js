/**
 * FreshFind — Auto-Playing Animated Intro
 * ========================================
 * Plays automatically on every page load:
 *  1. Basket bounces in from below
 *  2. Produce items fly out of basket with staggered pop
 *  3. Background text morphs: FRESH → ORGANIC
 *  4. "Enter FreshFind" button appears with 3s countdown
 *  5. Slides intro overlay UP → main site revealed smoothly
 *
 * No scrolling required. Zero scroll-hijack.
 */

import { audioManager } from '../audioManager.js';

export class ScrollyIntro {
  constructor(app) {
    this.app = app;
    this.section    = document.getElementById('scrollyIntroSection');
    this.pinViewport = document.getElementById('pin-viewport');
    this.stageTracker = document.getElementById('introStageTracker');
    this.navStageLabel = document.getElementById('introNavStageLabel');
    this.navBadge   = document.getElementById('introNavBadge');
    this.skipBtn    = document.getElementById('introSkipBtn');
    this.enterBtn   = document.getElementById('enterPlatformBtn');
    this.brandHeader = document.getElementById('introBrandHeader');

    this.countdownInterval = null;
    this.isDone = false;
  }

  init() {
    if (!this.section) return;

    // Lock body scroll while intro is playing
    document.body.style.overflow = 'hidden';
    document.body.style.height   = '100vh';

    // Make intro a fixed full-screen overlay
    this._styleAsOverlay();

    // Wire skip / enter buttons
    this._setupButtons();

    // Start auto animation
    if (window.gsap) {
      this._playGSAP();
    } else {
      this._playCSS();
    }
  }

  /* ── Fixed full-screen overlay styling ── */
  _styleAsOverlay() {
    if (!this.section) return;
    Object.assign(this.section.style, {
      position:   'fixed',
      inset:      '0',
      width:      '100vw',
      height:     '100vh',
      zIndex:     '9999',
      overflow:   'hidden',
      background: 'var(--color-cream, #fbf9f4)',
    });
    if (this.pinViewport) {
      Object.assign(this.pinViewport.style, {
        position:      'fixed',
        inset:         '0',
        width:         '100%',
        height:        '100vh',
        opacity:       '1',
        visibility:    'visible',
        pointerEvents: 'all',
      });
    }
  }

  /* ── Buttons: skip or enter both dismiss intro ── */
  _setupButtons() {
    const dismiss = (e) => { e?.preventDefault(); this._exitIntro(); };
    this.skipBtn?.addEventListener('click', dismiss);
    this.enterBtn?.addEventListener('click', dismiss);
  }

  /* ── GSAP Auto Animation ── */
  _playGSAP() {
    // Initial states
    gsap.set('#basket-wrapper', { y: 200, scale: 0.65, opacity: 0 });
    gsap.set(['#veg-carrot','#veg-broccoli','#veg-tomato','#veg-corn','#veg-grapes','#veg-pineapple'], {
      x: 0, y: 60, scale: 0.5, opacity: 0, rotation: 0
    });
    gsap.set('#bg-text-fresh',   { opacity: 0, scale: 0.85 });
    gsap.set('#bg-text-harvest', { opacity: 0, scale: 0.9  });
    if (this.enterBtn)   gsap.set(this.enterBtn,   { opacity: 0, y: 30, scale: 0.9 });
    if (this.stageTracker) gsap.set(this.stageTracker, { opacity: 0, y: -20 });
    if (this.skipBtn)    gsap.set(this.skipBtn,    { opacity: 0 });
    if (this.brandHeader) gsap.set(this.brandHeader, { opacity: 0, y: -25, scale: 0.92 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 0.0s — Brand Header + Stage tracker + skip appear
    if (this.brandHeader) tl.to(this.brandHeader, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.4)' }, 0.0);
    tl.to(this.stageTracker,  { opacity: 1, y: 0,  duration: 0.5 }, 0.1);
    tl.to(this.skipBtn,       { opacity: 1,         duration: 0.4 }, 0.3);

    // 0.4s — Basket bounces in from below
    tl.to('#basket-wrapper', {
      y: 0, scale: 1, opacity: 1, duration: 1.0, ease: 'back.out(1.7)'
    }, 0.4);

    // 0.8s — FRESH text appears
    tl.to('#bg-text-fresh', { opacity: 0.35, scale: 1.0, duration: 0.8 }, 0.8);

    // 1.2s — Produce pops out in stagger
    tl.to('#veg-carrot',    { x: -110, y: -160, opacity: 1, scale: 1.1, rotation: -25, duration: 0.7, ease: 'back.out(2)' }, 1.2);
    tl.to('#veg-broccoli',  { x:  -35, y: -210, opacity: 1, scale: 1.2, rotation:  12, duration: 0.7, ease: 'back.out(2)' }, 1.3);
    tl.to('#veg-tomato',    { x:   45, y: -150, opacity: 1, scale: 1.1, rotation:  18, duration: 0.7, ease: 'back.out(2)' }, 1.35);
    tl.to('#veg-corn',      { x:  115, y: -220, opacity: 1, scale: 1.15,rotation:  30, duration: 0.7, ease: 'back.out(2)' }, 1.4);
    tl.to('#veg-grapes',    { x: -140, y:  -90, opacity: 1, scale: 1.05,rotation: -15, duration: 0.7, ease: 'back.out(2)' }, 1.45);
    tl.to('#veg-pineapple', { x:  140, y: -120, opacity: 1, scale: 1.2, rotation: -10, duration: 0.7, ease: 'back.out(2)' }, 1.5);

    // 1.9s — Update stage label
    tl.call(() => {
      if (this.navStageLabel) this.navStageLabel.textContent = 'Stage II: Fresh Harvest Ready!';
      if (this.navBadge) this.navBadge.style.backgroundColor = '#22c55e';
    }, [], 1.9);

    // 2.2s — FRESH fades, ORGANIC rises
    tl.to('#bg-text-fresh',   { opacity: 0.05, scale: 1.08, duration: 0.6 }, 2.2);
    tl.to('#bg-text-harvest', { opacity: 0.22, scale: 1.04, duration: 0.7 }, 2.3);

    // 2.7s — Enter button appears
    tl.to(this.enterBtn, { opacity: 1, y: 0, scale: 1, duration: 0.5 }, 2.7);

    // 3.0s — Update stage label & start countdown
    tl.call(() => {
      if (this.navStageLabel) this.navStageLabel.textContent = 'Stage III: Entering FreshFind';
      this._startAutoCountdown(3);
    }, [], 3.0);

    // Gentle float loop on produce after reveal
    ['#veg-carrot','#veg-broccoli','#veg-tomato','#veg-corn','#veg-grapes','#veg-pineapple'].forEach((sel, i) => {
      gsap.to(sel, {
        y: `+=${8 + i * 2}`, yoyo: true, repeat: -1,
        duration: 1.6 + i * 0.2, delay: 2.2 + i * 0.1, ease: 'sine.inOut'
      });
    });
  }

  /* ── CSS fallback animation (no GSAP) ── */
  _playCSS() {
    const basket = document.getElementById('basket-wrapper');
    const itemIds = ['veg-carrot','veg-broccoli','veg-tomato','veg-corn','veg-grapes','veg-pineapple'];
    const transforms = [
      'translate3d(-110px,-160px,0) scale(1.1) rotate(-25deg)',
      'translate3d(-35px,-210px,0) scale(1.2) rotate(12deg)',
      'translate3d(45px,-150px,0) scale(1.1) rotate(18deg)',
      'translate3d(115px,-220px,0) scale(1.15) rotate(30deg)',
      'translate3d(-140px,-90px,0) scale(1.05) rotate(-15deg)',
      'translate3d(140px,-120px,0) scale(1.2) rotate(-10deg)',
    ];

    if (basket) {
      basket.style.transform = 'translateY(200px) scale(0.65)';
      basket.style.opacity   = '0';
      setTimeout(() => {
        basket.style.transition = 'all 1.0s cubic-bezier(0.34,1.56,0.64,1)';
        basket.style.transform  = 'translateY(0) scale(1)';
        basket.style.opacity    = '1';
      }, 400);
    }

    itemIds.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.style.opacity   = '0';
      el.style.transform = 'translateY(60px) scale(0.5)';
      setTimeout(() => {
        el.style.transition = `all 0.7s cubic-bezier(0.34,1.56,0.64,1) ${0.1 * i}s`;
        el.style.transform  = transforms[i];
        el.style.opacity    = '1';
      }, 1200 + i * 80);
    });

    if (this.enterBtn) {
      this.enterBtn.style.opacity   = '0';
      this.enterBtn.style.transform = 'translateY(30px)';
      setTimeout(() => {
        this.enterBtn.style.transition = 'all 0.5s ease';
        this.enterBtn.style.opacity    = '1';
        this.enterBtn.style.transform  = 'translateY(0)';
      }, 2700);
    }

    setTimeout(() => {
      if (this.navStageLabel) this.navStageLabel.textContent = 'Stage III: Entering FreshFind';
      this._startAutoCountdown(3);
    }, 3000);
  }

  /* ── Countdown then auto-exit ── */
  _startAutoCountdown(seconds) {
    if (this.isDone) return;
    let remaining = seconds;

    const updateBtn = () => {
      if (!this.enterBtn) return;
      this.enterBtn.innerHTML = `
        <span style="display:inline-flex;align-items:center;gap:0.6rem;font-weight:700;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
          </svg>
          Enter FreshFind
          <span style="background:rgba(255,255,255,0.3);border-radius:50%;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:0.9rem;">${remaining}</span>
        </span>`;
    };

    updateBtn();
    this.countdownInterval = setInterval(() => {
      remaining--;
      if (remaining <= 0) {
        clearInterval(this.countdownInterval);
        this._exitIntro();
      } else {
        updateBtn();
      }
    }, 1000);
  }

  /* ── Smooth exit: slide overlay UP → main site revealed ── */
  _exitIntro() {
    if (this.isDone) return;
    this.isDone = true;
    clearInterval(this.countdownInterval);

    // Restore scrolling immediately
    document.body.style.overflow = '';
    document.body.style.height   = '';

    const slideOut = () => {
      if (window.gsap) {
        gsap.to(this.section, {
          y: '-100vh', opacity: 0, duration: 0.85, ease: 'power2.inOut',
          onComplete: () => {
            if (this.section) {
              this.section.style.display = 'none';
              this.section.setAttribute('aria-hidden', 'true');
            }
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
        });
      } else {
        if (this.section) {
          this.section.style.transition = 'transform 0.85s cubic-bezier(0.77,0,0.175,1), opacity 0.5s ease';
          this.section.style.transform  = 'translateY(-100vh)';
          this.section.style.opacity    = '0';
          setTimeout(() => {
            this.section.style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'instant' });
          }, 900);
        }
      }
    };

    // Flash-fade produce items then exit
    if (window.gsap) {
      if (this.brandHeader) gsap.to(this.brandHeader, { opacity: 0, y: -20, duration: 0.3 });
      gsap.to(['#veg-carrot','#veg-broccoli','#veg-tomato','#veg-corn','#veg-grapes','#veg-pineapple','#basket-wrapper'], {
        opacity: 0, scale: 0.8, duration: 0.35, stagger: 0.04, ease: 'power2.in'
      });
      gsap.to(['#bg-text-fresh','#bg-text-harvest'], { opacity: 0, duration: 0.3 });
      setTimeout(slideOut, 430);
    } else {
      slideOut();
    }
  }
}

