/**
 * FreshFind — VIP Interactive Documentation Engine (42 Pages)
 * Features: Web Audio API Synthesizer, 3D Tilt, Global Search, Autoplay, Keybindings
 */

(function () {
  'use strict';

  // Global App State
  const AppState = {
    currentPage: 1,
    totalPages: 42,
    audioEnabled: true,
    isPresentationMode: false,
    presentationInterval: null,
    theme: localStorage.getItem('freshfind_doc_theme') || 'dark',
    audioCtx: null
  };

  // Audio Engine using Web Audio API (No external sound files required)
  class SoundFX {
    static init() {
      if (!AppState.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          AppState.audioCtx = new AudioContext();
        }
      }
      if (AppState.audioCtx && AppState.audioCtx.state === 'suspended') {
        AppState.audioCtx.resume();
      }
    }

    static playChime() {
      if (!AppState.audioEnabled) return;
      this.init();
      if (!AppState.audioCtx) return;

      const ctx = AppState.audioCtx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.12); // G5

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    }

    static playSwoosh() {
      if (!AppState.audioEnabled) return;
      this.init();
      if (!AppState.audioCtx) return;

      const ctx = AppState.audioCtx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    }

    static playPop() {
      if (!AppState.audioEnabled) return;
      this.init();
      if (!AppState.audioCtx) return;

      const ctx = AppState.audioCtx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    }
  }

  // 42 Pages Metadata Registry
  const PagesData = [
    { id: 1, cat: "01. OVERVIEW", title: "Project Cover & Executive Summary", sub: "FreshFind — World Tech Championship Global Challenge SRS 1.0 Platform" },
    { id: 2, cat: "01. OVERVIEW", title: "Problem Definition & Market Friction", sub: "Bridging the informational divide between local organic farmers and urban citizens" },
    { id: 3, cat: "01. OVERVIEW", title: "UN Sustainable Development Goals Alignment", sub: "Direct impact matrix for SDG 2 (Zero Hunger), SDG 12 (Consumption), and SDG 13 (Climate Action)" },
    { id: 4, cat: "01. OVERVIEW", title: "User Personas & Multi-Stakeholder Matrix", sub: "Detailed workflows for Eco-Shopper Sarah, Organic Grower Marcus, and Urban Family David" },
    { id: 5, cat: "02. ARCHITECTURE", title: "Zero-Backend Client-Side Architecture", sub: "Single Page Application (SPA) with zero external server dependencies & offline resilience" },
    { id: 6, cat: "02. ARCHITECTURE", title: "Technology Stack & Architectural Decisions", sub: "Vanilla ES6+, Biophilic CSS Custom Properties, Leaflet.js, and Web Speech API" },
    { id: 7, cat: "03. DESIGN SYSTEM", title: "Visual Identity & Biophilic Glassmorphism", sub: "Design language combining cyber-organic vibrancy with frosted translucent surfaces" },
    { id: 8, cat: "03. DESIGN SYSTEM", title: "Harmonious HSL Color Palette & Tokens", sub: "Forest Emerald (#15803D), Spring Green (#22C55E), Amber Harvest (#F59E0B) token scale" },
    { id: 9, cat: "03. DESIGN SYSTEM", title: "Typography Tokens & Font Architecture", sub: "Plus Jakarta Sans for display, Inter for body copy, and JetBrains Mono for metrics" },
    { id: 10, cat: "03. DESIGN SYSTEM", title: "Elevation, Borders & Micro-Interaction Tokens", sub: "Multi-layered depth, glowing perimeter borders, and cubic-bezier motion curves" },
    { id: 11, cat: "04. HERO & INTRO", title: "Cinematic Holographic Launch Sequence", sub: "Concentric cyber-rings, boot-up telemetry stream, audio synth, and enter transition" },
    { id: 12, cat: "04. HERO & INTRO", title: "3D Hero Parallax & Motion Visuals Engine", sub: "Interactive mouse tilt tracking, floating organic fruit assets, and headline typography" },
    { id: 13, cat: "05. SEARCH & GEO", title: "Global Multi-Entity Fuzzy Search Engine", sub: "Unified search across markets, seasonal produce, vendor farms, and culinary recipes" },
    { id: 14, cat: "05. SEARCH & GEO", title: "Leaflet.js Map Architecture & Custom Tiles", sub: "OpenStreetMap tile server, custom pin styling, clustering, and dynamic popup overlays" },
    { id: 15, cat: "05. SEARCH & GEO", title: "Real-Time Market Schedule & Status Evaluator", sub: "Instant live radar pulse computing Open Now, Closing Soon, and Closed status based on local time" },
    { id: 16, cat: "05. SEARCH & GEO", title: "Haversine Distance & Proximity Geolocation", sub: "Spherical trigonometry engine ranking nearest farms from user coordinates in real-time" },
    { id: 17, cat: "06. PRODUCE & DIET", title: "Seasonal Produce Intelligence & Vitamin Matrix", sub: "Detailed profiles of seasonal fruits, herbs, and root vegetables with macro-nutritional data" },
    { id: 18, cat: "06. PRODUCE & DIET", title: "Peak Freshness Interactive Crop Calendar", sub: "Dynamic month-by-month harvest timeline with harvesting, planting, and peak freshness indicators" },
    { id: 19, cat: "06. PRODUCE & DIET", title: "Farm-to-Table AI Recipe Generator", sub: "Smart culinary engine matching currently available market ingredients into zero-waste recipes" },
    { id: 20, cat: "07. MARKETPLACE", title: "Generational Farmer Profiles & Storytelling", sub: "Showcasing family-run micro-farms, soil health practices, and certifications" },
    { id: 21, cat: "07. MARKETPLACE", title: "Direct Farm Marketplace & Pre-Order Basket", sub: "Zero-middleman order staging, local pickup scheduling, and dynamic price totals" },
    { id: 22, cat: "07. MARKETPLACE", title: "Slide-Out Bookmark Drawer & Notes Storage", sub: "Persisting user favorites, custom itinerary notes, and printable market shopping lists" },
    { id: 23, cat: "08. AI & VOICE", title: "FreshBot AI: Rule-Based NLP Intent Engine", sub: "Deterministic natural language query processor supporting 60+ localized farm queries" },
    { id: 24, cat: "08. AI & VOICE", title: "Speech Recognition & Web Speech API Synthesis", sub: "Hands-free voice input and natural agricultural voice feedback directly in the browser" },
    { id: 25, cat: "09. NOVEL UX", title: "Custom Interactive Garden Scrollbar Experience", sub: "Sprouting leaf nodes, organic vine growth progress, and interactive scroll thumb physics" },
    { id: 26, cat: "09. NOVEL UX", title: "Seasonal Weather & Microclimate Integration", sub: "Simulated localized farm weather widget advising shoppers on optimal market visiting times" },
    { id: 27, cat: "10. SUSTAINABILITY", title: "Food Miles & Carbon Savings Calculation Engine", sub: "Algorithmic comparison of industrial supermarket transit emissions vs. local farm transport" },
    { id: 28, cat: "10. SUSTAINABILITY", title: "Plastic Waste & Packaging Impact Tracker", sub: "Visualizing single-use packaging reduction achieved through naked basket shopping" },
    { id: 29, cat: "11. COMMUNITY", title: "Community Forum & Farmer Knowledge Exchange", sub: "Interactive discussion boards for composting, urban gardening, and seasonal pest control" },
    { id: 30, cat: "12. ACCESSIBILITY", title: "Accessibility (a11y) & WCAG 2.1 AA Compliance", sub: "High contrast modes, keyboard tab focus traps, ARIA roles, and screen reader announcements" },
    { id: 31, cat: "13. ENGINEERING", title: "Frontend Performance & Core Web Vitals", sub: "Sub-second LCP, 0 Cumulative Layout Shift, lazy-loaded media, and lightweight DOM footprints" },
    { id: 32, cat: "13. ENGINEERING", title: "JSON Data Schemas & Model Architectures", sub: "Formal schemas for markets.json, produce.json, recipes.json, and chatbot intents" },
    { id: 33, cat: "13. ENGINEERING", title: "Client State Management & LocalStorage Persistence", sub: "Zero-loss persistence for theme preferences, saved favorites, cart items, and search history" },
    { id: 34, cat: "13. ENGINEERING", title: "Security Protocols, CSP & Input Sanitization", sub: "Strict Content Security Policies, DOMPurify-style HTML escaping, and zero third-party telemetry" },
    { id: 35, cat: "14. PAGES", title: "About Us Page Architecture & Leadership Showcase", sub: "Biophilic cards, mentor profiles (Samia, RB Tech), and global sustainability mission" },
    { id: 36, cat: "14. PAGES", title: "Contact Us Page, Validation & Asynchronous Feedback", sub: "Interactive form controls, floating labels, real-time regex validation, and animated success state" },
    { id: 37, cat: "14. PAGES", title: "Responsive Layout System & Device Breakpoints", sub: "Fluid clamp() typography, CSS Grid auto-fit tracks, and mobile drawer adaptations" },
    { id: 38, cat: "15. QA & TESTING", title: "Comprehensive 15-Point Quality Assurance Test Matrix", sub: "Functional, performance, cross-browser, and regression test suites with 100% pass rate" },
    { id: 39, cat: "15. QA & TESTING", title: "Critical Bug Triage & Engineering Resolutions", sub: "Post-mortem analysis of bundle.js IIFE boundary, card layout normalization, and search query bindings" },
    { id: 40, cat: "16. DEPLOYMENT", title: "Zero-Backend Deployment Pipeline & Hosting", sub: "Automated GitHub Pages workflow, custom DNS mapping, and caching headers configuration" },
    { id: 41, cat: "17. ROADMAP", title: "Future Roadmap: IoT Soil Sensors & PWA Expansion", sub: "Upcoming phases: Farm IoT telemetry, offline Progressive Web App, and QR traceability stickers" },
    { id: 42, cat: "17. ROADMAP", title: "Conclusion, Final Deliverables & TechWiz Summary", sub: "Comprehensive project wrap-up, jury evaluation criteria checklist, and repository links" }
  ];

  // Document Controller
  class DocApp {
    constructor() {
      this.dom = {
        pages: [],
        pageIndicator: document.getElementById('pageIndicator'),
        chapterBadge: document.getElementById('chapterBadge'),
        pageDotsContainer: document.getElementById('pageDotsContainer'),
        progressFill: document.getElementById('progressFill'),
        btnPrev: document.getElementById('btnPrev'),
        btnNext: document.getElementById('btnNext'),
        tocDrawer: document.getElementById('tocDrawer'),
        tocList: document.getElementById('tocList'),
        btnToggleToc: document.getElementById('btnToggleToc'),
        btnCloseToc: document.getElementById('btnCloseToc'),
        modalJump: document.getElementById('modalJump'),
        jumpGrid: document.getElementById('jumpGrid'),
        btnCloseJump: document.getElementById('btnCloseJump'),
        modalSearch: document.getElementById('modalSearch'),
        btnSearchTrigger: document.getElementById('btnSearchTrigger'),
        btnCloseSearch: document.getElementById('btnCloseSearch'),
        searchInput: document.getElementById('searchInput'),
        searchResultsList: document.getElementById('searchResultsList'),
        btnToggleSound: document.getElementById('btnToggleSound'),
        btnToggleTheme: document.getElementById('btnToggleTheme'),
        btnPlaySlideshow: document.getElementById('btnPlaySlideshow'),
        btnFullscreen: document.getElementById('btnFullscreen'),
        btnPrintDoc: document.getElementById('btnPrintDoc')
      };
    }

    init() {
      this.cachePages();
      this.applyTheme();
      this.renderTOC();
      this.renderJumpGrid();
      this.renderPageDots();
      this.bindEvents();
      this.initParallaxTilt();

      // Check URL Hash for initial page
      const hash = window.location.hash;
      const match = hash.match(/#page-(\d+)/);
      if (match) {
        const pageNum = parseInt(match[1], 10);
        if (pageNum >= 1 && pageNum <= AppState.totalPages) {
          this.goToPage(pageNum, false);
          return;
        }
      }
      this.goToPage(1, false);
    }

    cachePages() {
      this.dom.pages = Array.from(document.querySelectorAll('.doc-page'));
      AppState.totalPages = this.dom.pages.length || 42;
    }

    applyTheme() {
      document.documentElement.setAttribute('data-theme', AppState.theme);
      if (this.dom.btnToggleTheme) {
        this.dom.btnToggleTheme.innerHTML = AppState.theme === 'dark' ? '☀️' : '🌙';
      }
    }

    toggleTheme() {
      AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('freshfind_doc_theme', AppState.theme);
      this.applyTheme();
      SoundFX.playPop();
    }

    renderPageDots() {
      if (!this.dom.pageDotsContainer) return;
      this.dom.pageDotsContainer.innerHTML = '';
      for (let i = 1; i <= AppState.totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = `dot-step ${i === AppState.currentPage ? 'active' : ''}`;
        dot.title = `Page ${i}: ${PagesData[i - 1]?.title || ''}`;
        dot.addEventListener('click', () => {
          this.goToPage(i);
        });
        this.dom.pageDotsContainer.appendChild(dot);
      }
    }

    renderTOC() {
      if (!this.dom.tocList) return;
      this.dom.tocList.innerHTML = '';
      PagesData.forEach((p) => {
        const item = document.createElement('button');
        item.className = `toc-item ${p.id === AppState.currentPage ? 'active' : ''}`;
        item.innerHTML = `
          <span class="toc-num">${p.id < 10 ? '0' + p.id : p.id}</span>
          <span class="toc-text">${p.title}</span>
        `;
        item.addEventListener('click', () => {
          this.goToPage(p.id);
          this.closeTOC();
        });
        this.dom.tocList.appendChild(item);
      });
    }

    renderJumpGrid() {
      if (!this.dom.jumpGrid) return;
      this.dom.jumpGrid.innerHTML = '';
      PagesData.forEach((p) => {
        const card = document.createElement('div');
        card.className = `jump-card ${p.id === AppState.currentPage ? 'active' : ''}`;
        card.innerHTML = `
          <div class="jump-page-num">${p.id < 10 ? '0' + p.id : p.id}</div>
          <div class="jump-page-title">${p.title}</div>
        `;
        card.addEventListener('click', () => {
          this.goToPage(p.id);
          this.closeJumpModal();
        });
        this.dom.jumpGrid.appendChild(card);
      });
    }

    goToPage(pageNum, playSound = true) {
      if (pageNum < 1 || pageNum > AppState.totalPages) return;
      AppState.currentPage = pageNum;

      // Update Active Page in DOM
      this.dom.pages.forEach((p, idx) => {
        if (idx + 1 === pageNum) {
          p.classList.add('active');
          p.scrollTop = 0;
        } else {
          p.classList.remove('active');
        }
      });

      // Update Navigation & UI
      const pageInfo = PagesData[pageNum - 1] || { cat: "PAGE", title: "Documentation" };
      if (this.dom.pageIndicator) {
        this.dom.pageIndicator.innerText = `${pageNum < 10 ? '0' + pageNum : pageNum} / ${AppState.totalPages}`;
      }
      if (this.dom.chapterBadge) {
        this.dom.chapterBadge.innerText = pageInfo.cat;
      }

      // Update Progress Bar
      if (this.dom.progressFill) {
        const percent = ((pageNum) / AppState.totalPages) * 100;
        this.dom.progressFill.style.width = `${percent}%`;
      }

      // Update Prev / Next Buttons
      if (this.dom.btnPrev) this.dom.btnPrev.disabled = pageNum === 1;
      if (this.dom.btnNext) this.dom.btnNext.disabled = pageNum === AppState.totalPages;

      // Update Dots
      if (this.dom.pageDotsContainer) {
        const dots = this.dom.pageDotsContainer.querySelectorAll('.dot-step');
        dots.forEach((dot, idx) => {
          if (idx + 1 === pageNum) {
            dot.classList.add('active');
            dot.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          } else {
            dot.classList.remove('active');
          }
        });
      }

      // Update TOC Active State
      if (this.dom.tocList) {
        const items = this.dom.tocList.querySelectorAll('.toc-item');
        items.forEach((item, idx) => {
          if (idx + 1 === pageNum) {
            item.classList.add('active');
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          } else {
            item.classList.remove('active');
          }
        });
      }

      // Update Hash
      window.history.replaceState(null, '', `#page-${pageNum}`);

      if (playSound) {
        SoundFX.playChime();
      }
    }

    prevPage() {
      if (AppState.currentPage > 1) {
        this.goToPage(AppState.currentPage - 1);
      }
    }

    nextPage() {
      if (AppState.currentPage < AppState.totalPages) {
        this.goToPage(AppState.currentPage + 1);
      }
    }

    openTOC() {
      if (this.dom.tocDrawer) this.dom.tocDrawer.classList.add('open');
      SoundFX.playPop();
    }

    closeTOC() {
      if (this.dom.tocDrawer) this.dom.tocDrawer.classList.remove('open');
      SoundFX.playPop();
    }

    openJumpModal() {
      if (this.dom.modalJump) this.dom.modalJump.classList.add('open');
      SoundFX.playPop();
    }

    closeJumpModal() {
      if (this.dom.modalJump) this.dom.modalJump.classList.remove('open');
      SoundFX.playPop();
    }

    openSearchModal() {
      if (this.dom.modalSearch) {
        this.dom.modalSearch.classList.add('open');
        setTimeout(() => this.dom.searchInput && this.dom.searchInput.focus(), 100);
      }
      SoundFX.playPop();
    }

    closeSearchModal() {
      if (this.dom.modalSearch) this.dom.modalSearch.classList.remove('open');
      SoundFX.playPop();
    }

    performSearch(query) {
      if (!this.dom.searchResultsList) return;
      this.dom.searchResultsList.innerHTML = '';
      const q = query.trim().toLowerCase();
      if (!q) {
        this.dom.searchResultsList.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">Type to search all 42 pages...</div>`;
        return;
      }

      const matches = PagesData.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.sub.toLowerCase().includes(q) ||
        p.cat.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        this.dom.searchResultsList.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">No matching sections found for "${query}"</div>`;
        return;
      }

      matches.forEach(m => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
          <div class="search-result-header">
            <span class="search-result-title">${m.title}</span>
            <span class="chapter-badge">Page ${m.id}</span>
          </div>
          <div class="search-result-snippet">${m.sub}</div>
        `;
        item.addEventListener('click', () => {
          this.goToPage(m.id);
          this.closeSearchModal();
        });
        this.dom.searchResultsList.appendChild(item);
      });
    }

    togglePresentationMode() {
      AppState.isPresentationMode = !AppState.isPresentationMode;
      if (this.dom.btnPlaySlideshow) {
        this.dom.btnPlaySlideshow.classList.toggle('active', AppState.isPresentationMode);
        this.dom.btnPlaySlideshow.innerHTML = AppState.isPresentationMode ? '⏸️' : '▶️';
      }

      if (AppState.isPresentationMode) {
        SoundFX.playChime();
        AppState.presentationInterval = setInterval(() => {
          if (AppState.currentPage >= AppState.totalPages) {
            this.goToPage(1);
          } else {
            this.nextPage();
          }
        }, 9000);
      } else {
        clearInterval(AppState.presentationInterval);
        SoundFX.playPop();
      }
    }

    toggleAudio() {
      AppState.audioEnabled = !AppState.audioEnabled;
      if (this.dom.btnToggleSound) {
        this.dom.btnToggleSound.classList.toggle('active', AppState.audioEnabled);
        this.dom.btnToggleSound.innerHTML = AppState.audioEnabled ? '🔔' : '🔕';
      }
      if (AppState.audioEnabled) {
        SoundFX.playChime();
      }
    }

    toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => console.log(err));
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }

    initParallaxTilt() {
      const cards = document.querySelectorAll('.vip-card, .metric-box');
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -5;
          const rotateY = ((x - centerX) / centerX) * 5;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
      });
    }

    bindEvents() {
      // Prev / Next
      if (this.dom.btnPrev) this.dom.btnPrev.addEventListener('click', () => this.prevPage());
      if (this.dom.btnNext) this.dom.btnNext.addEventListener('click', () => this.nextPage());

      // TOC
      if (this.dom.btnToggleToc) this.dom.btnToggleToc.addEventListener('click', () => this.openTOC());
      if (this.dom.btnCloseToc) this.dom.btnCloseToc.addEventListener('click', () => this.closeTOC());

      // Page Indicator / Jump
      const pageIndicatorPill = document.querySelector('.page-indicator-pill');
      if (pageIndicatorPill) pageIndicatorPill.addEventListener('click', () => this.openJumpModal());
      if (this.dom.btnCloseJump) this.dom.btnCloseJump.addEventListener('click', () => this.closeJumpModal());

      // Search Modal
      if (this.dom.btnSearchTrigger) this.dom.btnSearchTrigger.addEventListener('click', () => this.openSearchModal());
      if (this.dom.btnCloseSearch) this.dom.btnCloseSearch.addEventListener('click', () => this.closeSearchModal());
      if (this.dom.searchInput) {
        this.dom.searchInput.addEventListener('input', (e) => this.performSearch(e.target.value));
      }

      // Feature Buttons
      if (this.dom.btnToggleSound) this.dom.btnToggleSound.addEventListener('click', () => this.toggleAudio());
      if (this.dom.btnToggleTheme) this.dom.btnToggleTheme.addEventListener('click', () => this.toggleTheme());
      if (this.dom.btnPlaySlideshow) this.dom.btnPlaySlideshow.addEventListener('click', () => this.togglePresentationMode());
      if (this.dom.btnFullscreen) this.dom.btnFullscreen.addEventListener('click', () => this.toggleFullscreen());
      if (this.dom.btnPrintDoc) this.dom.btnPrintDoc.addEventListener('click', () => window.print());

      // Close Modals on Overlay Click
      if (this.dom.modalJump) {
        this.dom.modalJump.addEventListener('click', (e) => {
          if (e.target === this.dom.modalJump) this.closeJumpModal();
        });
      }
      if (this.dom.modalSearch) {
        this.dom.modalSearch.addEventListener('click', (e) => {
          if (e.target === this.dom.modalSearch) this.closeSearchModal();
        });
      }

      // Copy Code Buttons
      document.querySelectorAll('.code-copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const pre = btn.closest('.code-block').querySelector('.code-content');
          if (pre) {
            navigator.clipboard.writeText(pre.innerText).then(() => {
              const original = btn.innerText;
              btn.innerText = 'Copied! ✓';
              SoundFX.playPop();
              setTimeout(() => btn.innerText = original, 2000);
            });
          }
        });
      });

      // Global Keyboard Navigation
      window.addEventListener('keydown', (e) => {
        // Prevent shortcuts if typing in input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
          if (e.key === 'Escape') this.closeSearchModal();
          return;
        }

        switch (e.key) {
          case 'ArrowRight':
          case ' ':
            e.preventDefault();
            this.nextPage();
            break;
          case 'ArrowLeft':
            e.preventDefault();
            this.prevPage();
            break;
          case 'Home':
            e.preventDefault();
            this.goToPage(1);
            break;
          case 'End':
            e.preventDefault();
            this.goToPage(AppState.totalPages);
            break;
          case 'k':
          case 'K':
            if (e.ctrlKey || e.metaKey) {
              e.preventDefault();
              this.openSearchModal();
            }
            break;
          case '/':
            e.preventDefault();
            this.openSearchModal();
            break;
          case 't':
          case 'T':
            e.preventDefault();
            this.dom.tocDrawer?.classList.contains('open') ? this.closeTOC() : this.openTOC();
            break;
          case 'p':
          case 'P':
            e.preventDefault();
            this.togglePresentationMode();
            break;
          case 'f':
          case 'F':
            e.preventDefault();
            this.toggleFullscreen();
            break;
          case 'Escape':
            this.closeTOC();
            this.closeJumpModal();
            this.closeSearchModal();
            break;
        }
      });
    }
  }

  // Auto-instantiate when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const app = new DocApp();
    app.init();
    window.freshFindDoc = app;
  });

})();
