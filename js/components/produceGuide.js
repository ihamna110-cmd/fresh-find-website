import { dataService } from '../dataService.js';
import { audioManager } from '../audioManager.js';

export class ProduceGuide {
  constructor(app) {
    this.app = app;
    this.gridContainer = document.getElementById('produceGrid');
    this.categoryFiltersContainer = document.getElementById('produceCategoryFilters');
    this.seasonTabsContainer = document.getElementById('seasonTabsContainer');
    this.seasonCardContainer = document.getElementById('seasonShowcaseCard');

    this.activeCategory = 'all';
    this.activeSeason = 'Summer';
  }

  init() {
    this.setupCategoryFilters();
    this.setupSeasonTabs();
    this.renderProduce();
    this.renderSeasonCard();
  }

  setupCategoryFilters() {
    if (!this.categoryFiltersContainer) return;
    const categories = ['all', 'Fruits', 'Vegetables', 'Herbs', 'Dairy & Eggs', 'Honey & Preserves'];

    this.categoryFiltersContainer.innerHTML = categories.map(cat => `
      <button class="season-tab-btn ${cat === this.activeCategory ? 'active' : ''}" data-cat="${cat}">
        ${cat === 'all' ? '<svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg> All Produce' : cat}
      </button>
    `).join('');

    this.categoryFiltersContainer.querySelectorAll('.season-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        audioManager.playClick();
        this.activeCategory = e.currentTarget.getAttribute('data-cat');
        this.categoryFiltersContainer.querySelectorAll('.season-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.renderProduce();
      });
    });
  }

  setupSeasonTabs() {
    if (!this.seasonTabsContainer) return;
    const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];

    const seasonIcons = {
      Spring: '<svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/><path d="M12 17a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0v-1a4 4 0 0 0-4-4z"/><path d="M22 12a4 4 0 0 0-4-4h-1a4 4 0 0 0 0 8h1a4 4 0 0 0 4-4z"/><path d="M2 12a4 4 0 0 0 4-4h1a4 4 0 0 0 0 8H6a4 4 0 0 0-4-4z"/></svg>',
      Summer: '<svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
      Autumn: '<svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
      Winter: '<svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="4.93" y1="19.07" x2="19.07" y2="4.93"/></svg>'
    };

    this.seasonTabsContainer.innerHTML = seasons.map(s => `
      <button class="season-tab-btn ${s === this.activeSeason ? 'active' : ''}" data-season="${s}">
        <span>${seasonIcons[s]}</span> ${s}
      </button>
    `).join('');

    this.seasonTabsContainer.querySelectorAll('.season-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        audioManager.playClick();
        this.activeSeason = e.currentTarget.getAttribute('data-season');
        this.seasonTabsContainer.querySelectorAll('.season-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.renderSeasonCard();
      });
    });
  }

  renderSeasonCard() {
    if (!this.seasonCardContainer) return;
    const seasonal = dataService.getSeasonalData();
    if (!seasonal || !seasonal.seasons) return;

    const currentSeasonData = seasonal.seasons[this.activeSeason];
    const featuredProduce = dataService.getProduce().filter(p => currentSeasonData.featuredProduceIds.includes(p.id));

    this.seasonCardContainer.innerHTML = `
      <div class="season-highlight-info">
        <span class="season-period-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px; margin-right:4px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          ${currentSeasonData.period}
        </span>
        <h3>${currentSeasonData.name}</h3>
        <p style="font-size:1.05rem; margin-bottom:1.25rem;">${currentSeasonData.tagline}</p>
        
        <div class="season-quote-box">
          <div style="font-weight:700; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 1 5 5v2H7V7a5 5 0 0 1 5-5z"/><path d="M4 14h16v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7z"/></svg>
            Chef Suggestion:
          </div>
          <span style="font-style:italic;">"${currentSeasonData.chefTip}"</span>
        </div>

        <div style="font-size:0.88rem; color:var(--primary); font-weight:600; display:flex; align-items:center; gap:0.4rem;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          Eco-Basket Fact: ${currentSeasonData.ecoFact}
        </div>
      </div>

      <div>
        <h4 style="margin-bottom:1rem; font-size:1.1rem;">Top Peak In-Season Crops</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
          ${featuredProduce.map(p => `
            <div style="background:var(--bg-muted); border:1px solid var(--border-light); border-radius:var(--radius-md); padding:0.85rem; display:flex; align-items:center; gap:0.65rem; cursor:pointer;" class="quick-view-crop" data-id="${p.id}">
              <img src="${p.image}" alt="${p.name}" style="width:48px; height:48px; border-radius:var(--radius-sm); object-fit:cover;">
              <div>
                <h5 style="font-size:0.88rem; margin-bottom:0.15rem;">${p.name}</h5>
                <span style="font-size:0.72rem; color:var(--accent); font-weight:700;">${p.category}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.seasonCardContainer.querySelectorAll('.quick-view-crop').forEach(card => {
      card.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.openProduceModal(id);
      });
    });
  }

  renderProduce() {
    if (!this.gridContainer) return;
    let items = dataService.getProduce();

    if (this.activeCategory !== 'all') {
      items = items.filter(p => p.category === this.activeCategory);
    }

    this.gridContainer.innerHTML = items.map((p, idx) => {
      const isFav = this.app.isBookmarked('produce', p.id);
      const delayMs = idx * 60;
      return `
        <div class="produce-card" data-id="${p.id}" style="animation: revealCard 0.5s ${delayMs}ms cubic-bezier(0.16,1,0.3,1) both;">
          <div class="produce-img-wrap">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <span class="produce-category-badge">${p.category}</span>
            <button class="market-fav-btn ${isFav ? 'favorited' : ''}" data-type="produce" data-id="${p.id}" title="Save to Bookmarks" aria-label="Save">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>

          <div class="produce-card-body">
            <div class="produce-header-row">
              <h3 class="produce-title">${p.name}</h3>
              <span class="produce-season-pill">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" style="vertical-align:-2px; margin-right:3px;"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>
                ${p.season[0]}
              </span>
            </div>

            <p class="produce-desc">${p.description}</p>

            <div class="produce-markets-count" style="cursor:pointer;" data-id="${p.id}">
              <span>Found in ${p.availableMarkets.length} local markets</span> →
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.gridContainer.querySelectorAll('.produce-card, .produce-markets-count').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('.market-fav-btn')) return;
        const id = el.getAttribute('data-id') || el.closest('.produce-card').getAttribute('data-id');
        this.openProduceModal(id);
      });
    });

    this.gridContainer.querySelectorAll('.market-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        this.app.toggleBookmark('produce', id);
        this.renderProduce();
      });
    });

    // 3D tilt on produce cards
    this.gridContainer.querySelectorAll('.produce-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-10px) scale(1.025)`;
        card.style.transition = 'transform 0.1s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      });
    });
  }

  openProduceModal(produceId) {
    const p = dataService.getProduceById(produceId);
    if (!p) return;

    audioManager.playChime();
    const modal = document.getElementById('marketDetailModal');
    const content = document.getElementById('marketDetailContent');

    const availableMarketObjs = dataService.getMarkets().filter(m => p.availableMarkets.includes(m.id));

    content.innerHTML = `
      <div style="position:relative;">
        <img src="${p.image}" alt="${p.name}" style="width:100%; height:280px; object-fit:cover; border-radius:var(--radius-xl) var(--radius-xl) 0 0;">
      </div>
      <div style="padding: 2rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <h2 style="font-size:1.85rem; color:var(--text-main);">${p.name}</h2>
          <span style="font-weight:700; color:var(--accent); background:var(--bg-muted); padding:0.35rem 0.85rem; border-radius:var(--radius-full); font-size:0.85rem;">
            ${p.category}
          </span>
        </div>

        <p style="font-size:1.05rem; line-height:1.7; color:var(--text-muted); margin-bottom:1.5rem;">
          ${p.description}
        </p>

        <div style="background:var(--bg-subtle); border:1px solid var(--border-medium); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.5rem;">
          <h4 style="margin-bottom:0.4rem; color:var(--primary); display:flex; align-items:center; gap:6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            Nutritional Benefits
          </h4>
          <p style="font-size:0.92rem; color:var(--text-main); margin-bottom:0.75rem;">${p.nutrition}</p>
          <h4 style="margin-bottom:0.4rem; color:var(--primary); display:flex; align-items:center; gap:6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Storage Recommendation
          </h4>
          <p style="font-size:0.92rem; color:var(--text-main); margin:0;">${p.storageTip}</p>
        </div>

        <div style="margin-bottom:1.75rem;">
          <h4 style="margin-bottom:0.5rem; display:flex; align-items:center; gap:6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Peak Harvest Months
          </h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
            ${p.peakMonths.map(m => `
              <span style="background:var(--bg-muted); border:1px solid var(--border-light); padding:0.25rem 0.65rem; border-radius:var(--radius-full); font-size:0.82rem; font-weight:600;">
                ${m}
              </span>
            `).join('')}
          </div>
        </div>

        <div>
          <h4 style="margin-bottom:0.75rem; display:flex; align-items:center; gap:6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Where to Buy (${availableMarketObjs.length} Verified Markets)
          </h4>
          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            ${availableMarketObjs.map(m => `
              <div style="background:var(--bg-surface); border:1px solid var(--border-medium); border-radius:var(--radius-md); padding:0.85rem 1.25rem; display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <h5 style="font-size:0.98rem; margin-bottom:0.2rem;">${m.name}</h5>
                  <span style="font-size:0.82rem; color:var(--text-muted); display:flex; align-items:center; gap:4px;">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    ${m.area} (${m.days.join(', ')})
                  </span>
                </div>
                <button class="btn-primary direct-open-market-btn" data-id="${m.id}" style="padding:0.4rem 0.9rem; font-size:0.82rem;">
                  View Market →
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    content.querySelectorAll('.direct-open-market-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mId = e.currentTarget.getAttribute('data-id');
        this.app.openMarketDetail(mId);
      });
    });
  }
}
