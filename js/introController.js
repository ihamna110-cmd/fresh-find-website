/**
 * FreshFind — Intro Animation & Dismissal Controller
 * Pure vanilla JS, works seamlessly on both http:// and local file:/// protocols
 * Non-blocking, instant click-to-dismiss, auto-dismisses after 2.5s
 */
(function() {
  let isDismissed = false;
  let countdownTimer = null;
  let forceDismissTimer = null;
  let remaining = 3;

  function dismissIntroNow() {
    if (isDismissed) return;
    isDismissed = true;

    if (countdownTimer) clearInterval(countdownTimer);
    if (forceDismissTimer) clearTimeout(forceDismissTimer);

    // Save session flag so reload is instantaneous
    try { sessionStorage.setItem('ff_intro_seen', '1'); } catch(e) {}

    // Unlock page scroll immediately
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.classList.add('intro-finished');

    const section = document.getElementById('scrollyIntroSection');
    if (!section) return;

    // Immediately stop intercepting any clicks
    section.style.setProperty('pointer-events', 'none', 'important');
    section.style.setProperty('opacity', '0', 'important');
    section.style.setProperty('display', 'none', 'important');
    section.classList.add('intro-dismissed');
    section.setAttribute('aria-hidden', 'true');

    // Wake up botanical scrollbar
    if (window.freshFindApp?.gardenScrollbar) {
      try {
        window.freshFindApp.gardenScrollbar.cacheMetrics();
        window.freshFindApp.gardenScrollbar.updatePosition();
      } catch(e) {}
    }
  }

  window.dismissFreshFindIntro = dismissIntroNow;

  function initIntro() {
    const section = document.getElementById('scrollyIntroSection');
    if (!section) {
      document.body.classList.add('intro-finished');
      return;
    }

    // If user has already seen intro in this session, skip it instantly
    try {
      if (sessionStorage.getItem('ff_intro_seen') === '1') {
        dismissIntroNow();
        return;
      }
    } catch(e) {}

    // Lock scroll briefly during intro
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const stageLabel = document.getElementById('introNavStageLabel');
    const badge      = document.getElementById('introNavBadge');
    const countEl    = document.getElementById('introCountdownNum');

    // Stage progression
    setTimeout(() => {
      if (!isDismissed && stageLabel) {
        stageLabel.textContent = 'Stage II: Fresh Organic Harvest';
        if (badge) {
          badge.style.backgroundColor = '#22c55e';
          badge.style.boxShadow = '0 0 10px rgba(34,197,94,0.6)';
        }
      }
    }, 1000);

    // Auto dismiss after 2.5 seconds maximum
    forceDismissTimer = setTimeout(() => {
      dismissIntroNow();
    }, 2500);

    // Countdown: tick every 800ms
    countdownTimer = setInterval(() => {
      remaining--;
      if (countEl) countEl.textContent = Math.max(0, remaining);
      if (remaining <= 0) {
        clearInterval(countdownTimer);
        dismissIntroNow();
      }
    }, 800);

    // Click anywhere on the intro screen = instant dismiss
    section.addEventListener('click', () => {
      dismissIntroNow();
    }, { once: true });

    // Keyboard: Escape, Space, Enter = instant skip
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        dismissIntroNow();
      }
    }, { once: true });
  }

  window.replayFreshFindIntro = function() {
    const section = document.getElementById('scrollyIntroSection');
    if (!section) return;

    isDismissed = false;
    remaining   = 3;
    if (countdownTimer) clearInterval(countdownTimer);

    try { sessionStorage.removeItem('ff_intro_seen'); } catch(e) {}

    section.style.cssText = '';
    section.style.display = 'flex';
    section.classList.remove('intro-dismissed');
    section.removeAttribute('aria-hidden');

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.classList.remove('intro-finished');

    initIntro();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIntro);
  } else {
    initIntro();
  }
})();
