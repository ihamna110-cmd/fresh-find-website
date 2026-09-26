import { audioManager } from '../audioManager.js';

/**
 * CinematicIntro & Fresh Food Opener Motion Engine
 * Inspired by Envato Elements "Fresh Food Cooking Show Intro with Textured Typography" (MULYKD4 / Pinterest)
 * Features:
 * - Dynamic tumbling fresh herb leaves (basil, mint, sage) with 3D rotation & vein highlights
 * - Translucent morning dew droplets & golden harvest pollen spores
 * - Interactive cursor magnetic webs & shockwave bursts
 * - Topic-tailored kinetic typography cycling through farm produce
 * - Smooth 3D parallax tilt with lerp damping for video card & produce badges
 * - Infinite seamless marquee ticker
 * - Automatic pause on scroll for 60fps performance
 */
export class CinematicIntro {
  constructor(app) {
    this.app = app;
    this.heroSection = document.getElementById('home');
    this.canvas = document.getElementById('heroMotionCanvas');
    this.ctx = null;

    // 3D Video & Card elements
    this.hero3DStage = document.getElementById('hero3DStage');
    this.hero3DCard = document.getElementById('hero3DCard');
    this.heroBgVideo = document.getElementById('heroBgVideo');
    this.heroVideo = document.getElementById('heroHarvestVideo');
    this.heroVideoGlow = document.getElementById('heroVideoAmbientGlow');
    this.playPauseBtn = document.getElementById('heroVideoPlayPauseBtn');
    this.playIcon = document.getElementById('heroVideoPlayIcon');
    this.soundBtn = document.getElementById('heroVideoSoundBtn');
    this.soundIcon = document.getElementById('heroVideoSoundIcon');

    // Kinetic Typography element
    this.kineticWordEl = document.getElementById('heroKineticWord');
    this.kineticWords = [
      '100% ORGANIC CROPS',
      'CRISP ORCHARD APPLES',
      'HEIRLOOM CARROTS',
      'FARM-TO-TABLE FRESH',
      'ZERO FOOD MILES',
      'GENERATIONAL GROWERS',
      'RAW WILDFLOWER HONEY',
      'HARVESTED THIS MORNING'
    ];
    this.kineticIndex = 0;
    this.kineticTimer = null;

    // Canvas simulation state
    this.particles = [];
    this.sparkBursts = [];
    this.animFrameId = null;
    this.isCanvasActive = true;
    this.mouse = { x: -9999, y: -9999, isHovering: false, lastX: 0, lastY: 0, speed: 0 };

    // 3D Tilt lerp interpolation
    this.tiltTarget = { x: 0, y: 0 };
    this.tiltCurrent = { x: 0, y: 0 };
    this.tiltFrameId = null;

    // Scroll Parallax State
    this.scrollY = 0;
    this.scrollRAFId = null;
    this.heroBrandDisplay = null;
    this.heroContentCol = null;
  }

  init() {
    this.initMotionCanvas();
    this.initKineticTypography();
    this.initHeroVideo();
    this.setupHeroVideoControls();
    this.setupHero3DParallax();
    this.setupHeroScrollParallax();
    this.initHarvestTickerMarquee();
    this.setupVisibilityObserver();
  }

  /**
   * 1. FRESH FOOD MOTION CANVAS ENGINE
   * Renders floating herb leaves, dew drops, and golden pollen spores
   */
  initMotionCanvas() {
    if (!this.canvas || !this.heroSection) return;
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) return;

    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas(), { passive: true });

    // Seed dynamic fresh ingredients and particles (optimized for silky 60fps)
    const particleCount = Math.min(22, Math.floor((this.canvas.width * this.canvas.height) / 45000));
    this.particles = [];
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(this.createParticle());
    }

    // Mouse tracking with speed detection
    this.heroSection.addEventListener('mousemove', (e) => {
      const rect = this.heroSection.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      const dx = currentX - this.mouse.lastX;
      const dy = currentY - this.mouse.lastY;
      this.mouse.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 30);

      this.mouse.x = currentX;
      this.mouse.y = currentY;
      this.mouse.lastX = currentX;
      this.mouse.lastY = currentY;
      this.mouse.isHovering = true;
    }, { passive: true });

    this.heroSection.addEventListener('mouseleave', () => {
      this.mouse.x = -9999;
      this.mouse.y = -9999;
      this.mouse.isHovering = false;
      this.mouse.speed = 0;
    });

    // Tap/Click particle shockwave burst
    this.heroSection.addEventListener('click', (e) => {
      if (e.target.closest('button, a, select, input, .quick-find-bar, .hero-video-controls')) return;
      const rect = this.heroSection.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      this.spawnSparkBurst(clickX, clickY);
    });

    this.renderCanvas();
  }

  resizeCanvas() {
    if (!this.canvas || !this.heroSection) return;
    const rect = this.heroSection.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx?.scale(dpr, dpr);
    this.cssWidth = rect.width;
    this.cssHeight = rect.height;
  }

  createParticle(fromClick = false, clickX = 0, clickY = 0) {
    const types = ['herb_leaf', 'dew_drop', 'harvest_spore', 'citrus_mote'];
    const rand = Math.random();
    let type = 'harvest_spore';
    if (rand < 0.35) type = 'herb_leaf';
    else if (rand < 0.60) type = 'dew_drop';
    else if (rand < 0.85) type = 'citrus_mote';

    let colorBase = 'rgba(34, 197, 94, ';
    if (type === 'citrus_mote') colorBase = 'rgba(245, 158, 11, ';
    else if (type === 'dew_drop') colorBase = 'rgba(209, 250, 229, ';
    else if (type === 'harvest_spore') colorBase = 'rgba(251, 191, 36, ';

    const size = type === 'herb_leaf' ? Math.random() * 5 + 4 : Math.random() * 3 + 1.2;
    const baseAlpha = Math.random() * 0.5 + 0.3;

    return {
      type: type,
      x: fromClick ? clickX : Math.random() * (this.cssWidth || 800),
      y: fromClick ? clickY : Math.random() * (this.cssHeight || 600),
      radius: size,
      colorBase: colorBase,
      alpha: baseAlpha,
      baseAlpha: baseAlpha,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -(Math.random() * 0.7 + 0.25),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.04,
      scaleX: 1,
      scaleY: Math.random() * 0.4 + 0.8,
      wobbleSpeed: Math.random() * 0.03 + 0.015,
      wobbleOffset: Math.random() * Math.PI * 2,
      wobbleRadius: Math.random() * 2 + 0.8
    };
  }

  spawnSparkBurst(x, y) {
    audioManager?.playClick?.();
    const count = 16;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i + (Math.random() * 0.3);
      const speed = Math.random() * 4.2 + 2.2;
      this.sparkBursts.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 3.5 + 2,
        color: i % 2 === 0 ? 'rgba(250, 204, 21, ' : 'rgba(74, 222, 128, ',
        alpha: 1,
        life: 1,
        decay: Math.random() * 0.03 + 0.02
      });
    }
  }

  renderCanvas() {
    if (!this.isCanvasActive) return;

    const ctx = this.ctx;
    if (!ctx) return;

    ctx.clearRect(0, 0, this.cssWidth || 1000, this.cssHeight || 800);

    const now = performance.now() * 0.001;

    // 1. Draw connecting nutrient web filaments
    const maxDistance = 105;
    const pLen = this.particles.length;
    for (let i = 0; i < pLen; i++) {
      const p1 = this.particles[i];
      for (let j = i + 1; j < pLen; j++) {
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const lineAlpha = (1 - dist / maxDistance) * 0.12;
          ctx.strokeStyle = `rgba(34, 197, 94, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Connect to mouse pointer
      if (this.mouse.isHovering) {
        const mdx = p1.x - this.mouse.x;
        const mdy = p1.y - this.mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 145) {
          const mAlpha = (1 - mDist / 145) * 0.38;
          ctx.strokeStyle = `rgba(250, 204, 21, ${mAlpha})`;
          ctx.lineWidth = 1.3;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(this.mouse.x, this.mouse.y);
          ctx.stroke();

          // Smooth magnetic repulsion/attraction
          const force = (1 - mDist / 145) * 1.8;
          p1.x += (mdx / mDist) * force;
          p1.y += (mdy / mDist) * force;
        }
      }
    }

    // 2. Render & animate particles (Herb leaves, dew drops, spores)
    for (let i = 0; i < pLen; i++) {
      const p = this.particles[i];

      // Update position & rotation
      p.rotation += p.rotationSpeed;
      p.x += p.vx + Math.sin(now * p.wobbleSpeed * 60 + p.wobbleOffset) * (p.wobbleRadius * 0.45);
      p.y += p.vy;

      // Wrap boundaries
      if (p.y < -30) {
        p.y = (this.cssHeight || 700) + 20;
        p.x = Math.random() * (this.cssWidth || 900);
      }
      if (p.x < -30) p.x = (this.cssWidth || 900) + 20;
      if (p.x > (this.cssWidth || 900) + 30) p.x = -20;

      if (p.type === 'herb_leaf') {
        // Draw 3D tumbling fresh herb leaf
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(p.scaleX, p.scaleY);
        ctx.beginPath();
        ctx.moveTo(0, -p.radius * 2);
        ctx.quadraticCurveTo(p.radius * 1.5, -p.radius * 0.4, 0, p.radius * 2);
        ctx.quadraticCurveTo(-p.radius * 1.5, -p.radius * 0.4, 0, -p.radius * 2);
        ctx.fillStyle = `${p.colorBase}${p.alpha})`;
        ctx.shadowColor = p.colorBase + '0.7)';
        ctx.shadowBlur = 6;
        ctx.fill();

        // Delicate leaf vein spine
        ctx.strokeStyle = `rgba(255, 255, 255, ${p.alpha * 0.45})`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(0, -p.radius * 1.6);
        ctx.lineTo(0, p.radius * 1.6);
        ctx.stroke();
        ctx.restore();
      } else {
        // Glowing dew drop or golden pollen spore
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${p.alpha})`;
        ctx.shadowColor = p.colorBase + '0.85)';
        ctx.shadowBlur = p.type === 'citrus_mote' ? 9 : 6;
        ctx.fill();
      }
    }
    ctx.shadowBlur = 0;

    // 3. Render spark shockwave bursts
    for (let i = this.sparkBursts.length - 1; i >= 0; i--) {
      const s = this.sparkBursts[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vx *= 0.93;
      s.vy *= 0.93;
      s.life -= s.decay;

      if (s.life <= 0) {
        this.sparkBursts.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius * s.life, 0, Math.PI * 2);
      ctx.fillStyle = `${s.color}${s.life})`;
      ctx.shadowColor = s.color + '0.95)';
      ctx.shadowBlur = 12;
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    this.animFrameId = requestAnimationFrame(() => this.renderCanvas());
  }

  /**
   * 2. KINETIC TYPOGRAPHY CYCLER (Cooking Show Opener Textured Words)
   */
  initKineticTypography() {
    if (!this.kineticWordEl) return;

    this.kineticTimer = setInterval(() => {
      this.kineticWordEl.classList.add('flipping');

      setTimeout(() => {
        this.kineticIndex = (this.kineticIndex + 1) % this.kineticWords.length;
        this.kineticWordEl.textContent = this.kineticWords[this.kineticIndex];
        this.kineticWordEl.classList.remove('flipping');
        this.kineticWordEl.classList.add('entering');

        requestAnimationFrame(() => {
          setTimeout(() => {
            this.kineticWordEl.classList.remove('entering');
          }, 45);
        });
      }, 420);
    }, 3200);
  }

  /**
   * 3. VIDEO CONTROLS & AMBIENT GLOW
   */
  initHeroVideo() {
    const playSafe = (vid) => {
      if (!vid) return;
      vid.muted = true;
      const p = vid.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {});
      }
    };
    playSafe(this.heroBgVideo);
    playSafe(this.heroVideo);
  }

  setupHeroVideoControls() {
    this.playPauseBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      audioManager?.playClick?.();
      const isPaused = this.heroVideo ? this.heroVideo.paused : (this.heroBgVideo ? this.heroBgVideo.paused : false);

      if (isPaused) {
        this.heroVideo?.play()?.catch?.(() => {});
        this.heroBgVideo?.play()?.catch?.(() => {});
        if (this.playIcon) this.playIcon.textContent = '⏸ Pause';
        this.app?.showToast?.('Harvest Motion Reel Playing ▶');
      } else {
        this.heroVideo?.pause();
        this.heroBgVideo?.pause();
        if (this.playIcon) this.playIcon.textContent = '▶ Play';
        this.app?.showToast?.('Harvest Motion Reel Paused ⏸');
      }
    });

    this.soundBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      audioManager?.playClick?.();
      const currentMuted = this.heroVideo ? this.heroVideo.muted : true;
      const newMuted = !currentMuted;

      if (this.heroVideo) this.heroVideo.muted = newMuted;
      if (this.heroBgVideo) this.heroBgVideo.muted = newMuted;

      if (this.soundIcon) {
        this.soundIcon.textContent = newMuted ? '🔇 Mute' : '🔊 Sound On';
      }
      this.app?.showToast?.(newMuted ? 'Video Muted 🔇' : 'Ambient Harvest Sound Enabled 🔊');
    });
  }

  /**
   * 4. 3D CARD & FRESH INGREDIENTS PARALLAX TILT
   */
  setupHero3DParallax() {
    if (!this.heroSection || !this.hero3DCard) return;

    this.heroSection.addEventListener('mousemove', (e) => {
      const rect = this.hero3DCard.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - cardCenterX) / 20;
      const deltaY = (e.clientY - cardCenterY) / 20;

      this.tiltTarget.x = Math.max(-14, Math.min(14, deltaX));
      this.tiltTarget.y = Math.max(-14, Math.min(14, -deltaY));

      if (!this.tiltFrameId) {
        this.tiltFrameId = requestAnimationFrame(() => this.updateTilt());
      }
    }, { passive: true });

    this.heroSection.addEventListener('mouseleave', () => {
      this.tiltTarget.x = 0;
      this.tiltTarget.y = 0;
      if (!this.tiltFrameId) {
        this.tiltFrameId = requestAnimationFrame(() => this.updateTilt());
      }
    });
  }

  updateTilt() {
    this.tiltCurrent.x += (this.tiltTarget.x - this.tiltCurrent.x) * 0.1;
    this.tiltCurrent.y += (this.tiltTarget.y - this.tiltCurrent.y) * 0.1;

    if (this.hero3DCard) {
      this.hero3DCard.style.transform = `perspective(1100px) rotateX(${this.tiltCurrent.y.toFixed(2)}deg) rotateY(${this.tiltCurrent.x.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;
    }

    if (this.heroVideoGlow) {
      this.heroVideoGlow.style.transform = `translate3d(${-this.tiltCurrent.x * 2.8}px, ${-this.tiltCurrent.y * 2.8}px, 0)`;
    }

    const badges = this.heroSection.querySelectorAll('.hero-3d-badge');
    badges.forEach((b, idx) => {
      const depth = (idx % 2 === 0 ? 1 : -1) * 1.6;
      b.style.transform = `translate3d(${(-this.tiltCurrent.x * depth).toFixed(1)}px, ${(-this.tiltCurrent.y * depth).toFixed(1)}px, 25px)`;
    });

    const isClose = Math.abs(this.tiltTarget.x - this.tiltCurrent.x) < 0.05 && Math.abs(this.tiltTarget.y - this.tiltCurrent.y) < 0.05;
    if (!isClose) {
      this.tiltFrameId = requestAnimationFrame(() => this.updateTilt());
    } else {
      this.tiltFrameId = null;
    }
  }

  /**
   * 5. SCROLL-DRIVEN 3D PARALLAX (Fresh Find Brand Float + Stage Tilt + Badge Z-Depth)
   * Creates a premium cinematic depth experience on page scroll.
   */
  setupHeroScrollParallax() {
    if (!this.heroSection) return;

    // Cache DOM elements for performance
    this.heroBrandDisplay = this.heroSection.querySelector('.hero-brand-display');
    this.heroContentCol = this.heroSection.querySelector('.hero-content-col');
    this.heroTitleEl = this.heroSection.querySelector('.hero-title');

    let ticking = false;

    const onScroll = () => {
      this.scrollY = window.scrollY;
      if (!ticking) {
        ticking = true;
        this.scrollRAFId = requestAnimationFrame(() => {
          this._applyScrollParallax(this.scrollY);
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  _applyScrollParallax(scrolled) {
    if (!this.heroSection) return;

    const heroHeight = this.heroSection.offsetHeight;
    // Normalized 0→1 progress through hero section
    const progress = Math.min(scrolled / heroHeight, 1);

    // --- BRAND TITLE: Drift upward faster than page for depth illusion ---
    if (this.heroBrandDisplay) {
      const drift = scrolled * 0.28;
      const fadeOut = Math.max(0, 1 - progress * 2.2);
      this.heroBrandDisplay.style.transform = `translate3d(0, ${-drift}px, 0) scale(${1 + progress * 0.04})`;
      this.heroBrandDisplay.style.opacity = fadeOut.toString();
    }

    // --- HERO CONTENT COLUMN: Gentle upward drift with parallax ---
    if (this.heroContentCol) {
      const colDrift = scrolled * 0.18;
      this.heroContentCol.style.transform = `translate3d(0, ${-colDrift}px, 0)`;
    }

    // --- 3D STAGE: Dynamic perspective tilt on scroll ---
    if (this.hero3DStage) {
      const scrollTiltX = progress * 6;
      const scrollTiltY = progress * -4;
      // Only apply scroll tilt if mouse tilt is near zero (don't fight with mousemove)
      const isMouseIdle = Math.abs(this.tiltCurrent.x) < 1 && Math.abs(this.tiltCurrent.y) < 1;
      if (isMouseIdle) {
        this.hero3DStage.style.transform = `perspective(1400px) rotateX(${scrollTiltX}deg) rotateY(${scrollTiltY}deg) translateY(${scrolled * 0.12}px)`;
      }
    }

    // --- FLOATING BADGES: Multi-speed z-depth parallax ---
    const badges = this.heroSection.querySelectorAll('.hero-3d-badge');
    const speeds = [0.55, 0.15, 0.38, 0.22, 0.48, 0.30, 0.42, 0.18];
    badges.forEach((badge, i) => {
      const speed = speeds[i % speeds.length];
      const dir = i % 2 === 0 ? 1 : -1;
      const yShift = scrolled * speed * dir;
      const xShift = scrolled * (speed * 0.35) * (i % 3 === 0 ? 1 : -1);
      badge.style.transform = `translate3d(${xShift.toFixed(1)}px, ${yShift.toFixed(1)}px, 0)`;
      const fadeStart = 0.5;
      const badgeFade = Math.max(0, 1 - Math.max(0, progress - fadeStart) / (1 - fadeStart));
      badge.style.opacity = badgeFade.toString();
    });

    // --- AMBIENT GLOW: Counterparallax for depth ---
    const ambientGlow = this.heroSection.querySelector('.hero-ambient-aurora');
    if (ambientGlow) {
      ambientGlow.style.transform = `translate3d(0, ${scrolled * 0.35}px, 0) scale(${1 + progress * 0.15})`;
      ambientGlow.style.opacity = Math.max(0, 0.85 - progress * 0.9).toString();
    }
  }

  /**
   * 6. INFINITE SEAMLESS LIVE HARVEST MARQUEE TICKER
   */
  initHarvestTickerMarquee() {
    const track = document.getElementById('heroTickerTrack');
    if (!track) return;
    track.innerHTML += track.innerHTML;
  }

  /**
   * 6. SCROLL VISIBILITY OBSERVER (0% CPU when out of view)
   */
  setupVisibilityObserver() {
    if (!this.heroSection) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.isCanvasActive) {
            this.isCanvasActive = true;
            this.renderCanvas();
          }
          this.heroBgVideo?.play()?.catch?.(() => {});
          this.heroVideo?.play()?.catch?.(() => {});
        } else {
          this.isCanvasActive = false;
          if (this.animFrameId) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
          }
          this.heroBgVideo?.pause();
          this.heroVideo?.pause();
        }
      });
    }, { threshold: 0.05 });

    observer.observe(this.heroSection);
  }

  destroy() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    if (this.tiltFrameId) cancelAnimationFrame(this.tiltFrameId);
    if (this.scrollRAFId) cancelAnimationFrame(this.scrollRAFId);
    if (this.kineticTimer) clearInterval(this.kineticTimer);
  }
}
