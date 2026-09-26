import { dataService } from '../dataService.js';
import { audioManager } from '../audioManager.js';

export class MarketDirectory {
  constructor(app) {
    this.app = app;
    this.gridContainer = document.getElementById('marketsGrid');
    this.mapContainer = document.getElementById('marketsMapContainer');
    this.map = null;
    this.mapMarkers = [];
    this.currentView = 'grid'; // 'grid' or 'map'

    // Filter controls
    this.areaSelect = document.getElementById('filterArea');
    this.daySelect = document.getElementById('filterDay');
    this.produceSelect = document.getElementById('filterProduce');
    this.openNowToggle = document.getElementById('filterOpenNow');
    this.sortSelect = document.getElementById('sortMarkets');
    this.resultCountEl = document.getElementById('marketResultCount');

    // Quick Find from Hero
    this.heroSearchInput = document.getElementById('heroSearchInput');
    this.heroAreaSelect = document.getElementById('heroAreaSelect');
    this.heroDaySelect = document.getElementById('heroDaySelect');
    this.heroSearchBtn = document.getElementById('heroSearchBtn');
    this.filterKeyword = document.getElementById('filterKeyword');
    this.searchKeyword = '';
    this.activeQuickFilter = null;

    // View toggles
    this.viewGridBtn = document.getElementById('viewGridBtn');
    this.viewMapBtn = document.getElementById('viewMapBtn');
  }

  init() {
    this.populateFilterOptions();
    this.setupEventListeners();
    this.render();
  }

  populateFilterOptions() {
    const markets = (dataService && typeof dataService.getMarkets === 'function' ? dataService.getMarkets() : null) || [];
    if (!markets.length) return;
    const areas = [...new Set(markets.map(m => m.area))].filter(Boolean).sort();
    const produceTypes = [...new Set(markets.flatMap(m => m.produceTypes || []))].filter(Boolean).sort();

    // Populate Area dropdowns if only 1 option
    if (this.areaSelect && this.areaSelect.options.length <= 1) {
      areas.forEach(area => {
        const opt = document.createElement('option');
        opt.value = area;
        opt.textContent = area;
        this.areaSelect.appendChild(opt);
      });
    }

    if (this.heroAreaSelect && this.heroAreaSelect.options.length <= 1) {
      areas.forEach(area => {
        const opt = document.createElement('option');
        opt.value = area;
        opt.textContent = area;
        this.heroAreaSelect.appendChild(opt);
      });
    }

    // Populate Produce dropdown if only 1 option
    if (this.produceSelect && this.produceSelect.options.length <= 1) {
      produceTypes.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p;
        opt.textContent = p;
        this.produceSelect.appendChild(opt);
      });
    }
  }

  setupEventListeners() {
    // Standard Filter events
    const triggerFilter = () => {
      try { audioManager.playClick(); } catch(e) {}
      this.render();
    };

    this.areaSelect?.addEventListener('change', triggerFilter);
    this.areaSelect?.addEventListener('input', triggerFilter);
    this.daySelect?.addEventListener('change', triggerFilter);
    this.daySelect?.addEventListener('input', triggerFilter);
    this.produceSelect?.addEventListener('change', triggerFilter);
    this.produceSelect?.addEventListener('input', triggerFilter);
    this.sortSelect?.addEventListener('change', triggerFilter);
    this.sortSelect?.addEventListener('input', triggerFilter);

    // Open Now button toggle
    this.openNowToggle?.addEventListener('click', (e) => {
      e.preventDefault();
      try { audioManager.playClick(); } catch(e) {}
      this.openNowToggle.classList.toggle('active');
      this.render();
    });

    // View toggles (Grid / Map)
    this.viewGridBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      try { audioManager.playClick(); } catch(e) {}
      this.setView('grid');
    });

    this.viewMapBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      try { audioManager.playClick(); } catch(e) {}
      this.setView('map');
    });

    // Keyword Search Inputs
    const handleFilterKeyword = (e) => {
      this.searchKeyword = e.target.value.trim().toLowerCase();
      if (this.heroSearchInput && this.heroSearchInput !== e.target) {
        this.heroSearchInput.value = e.target.value;
      }
      this.render();
    };

    this.filterKeyword?.addEventListener('input', handleFilterKeyword);
    this.filterKeyword?.addEventListener('keyup', handleFilterKeyword);
    this.filterKeyword?.addEventListener('change', handleFilterKeyword);
    this.filterKeyword?.addEventListener('search', handleFilterKeyword);

    const handleHeroKeyword = (e) => {
      this.searchKeyword = e.target.value.trim().toLowerCase();
      if (this.filterKeyword && this.filterKeyword !== e.target) {
        this.filterKeyword.value = e.target.value;
      }
      this.render();
    };

    this.heroSearchInput?.addEventListener('input', handleHeroKeyword);
    this.heroSearchInput?.addEventListener('keyup', handleHeroKeyword);
    this.heroSearchInput?.addEventListener('change', handleHeroKeyword);

    this.heroSearchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.heroSearchBtn?.click();
      }
    });

    // Hero Quick Find Search Button
    this.heroSearchBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      try { audioManager.playChime(); } catch(e) {}
      const heroArea = this.heroAreaSelect?.value || 'all';
      const heroDay = this.heroDaySelect?.value || 'all';
      this.searchKeyword = this.heroSearchInput?.value.trim().toLowerCase() || '';

      if (this.filterKeyword) this.filterKeyword.value = this.searchKeyword;
      if (this.areaSelect) this.areaSelect.value = heroArea;
      if (this.daySelect) this.daySelect.value = heroDay;

      this.render();
      document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Hero Quick Filter Pills
    document.querySelectorAll('.hero-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        try { audioManager.playChime(); } catch(e) {}
        const filterType = btn.getAttribute('data-filter');

        if (this.activeQuickFilter === filterType) {
          this.activeQuickFilter = null;
          btn.classList.remove('active');
        } else {
          document.querySelectorAll('.hero-pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.activeQuickFilter = filterType;
          if (filterType === 'near-me') {
            this.app?.setupGeolocation?.();
          }
        }

        this.render();
        document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  setView(view) {
    this.currentView = view;
    if (view === 'grid') {
      if (this.gridContainer) this.gridContainer.style.display = 'grid';
      if (this.mapContainer) {
        this.mapContainer.classList.remove('active');
        this.mapContainer.style.display = 'none';
      }
      this.viewGridBtn?.classList.add('active');
      this.viewMapBtn?.classList.remove('active');
    } else {
      if (this.gridContainer) this.gridContainer.style.display = 'none';
      if (this.mapContainer) {
        this.mapContainer.classList.add('active');
        this.mapContainer.style.display = 'block';
      }
      this.viewGridBtn?.classList.remove('active');
      this.viewMapBtn?.classList.add('active');
      this.initMapIfNeeded();
      setTimeout(() => this.map?.invalidateSize(), 150);
      setTimeout(() => this.map?.invalidateSize(), 400);
    }
  }

  initMapIfNeeded() {
    if (this.map) {
      this.updateMapMarkers(this.getFilteredMarkets());
      return;
    }
    const userLoc = (dataService && typeof dataService.getUserLocation === 'function')
      ? dataService.getUserLocation()
      : { lat: 34.0522, lng: -118.2437 };

    // Initialize Leaflet map
    if (window.L) {
      try {
        this.map = L.map('marketsMap').setView([userLoc.lat, userLoc.lng], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(this.map);
        this.updateMapMarkers(this.getFilteredMarkets());
      } catch (err) {
        console.warn('Leaflet map initialization:', err);
      }
    }
  }

  updateMapMarkers(markets) {
    if (!this.map || !window.L) return;

    // Clear existing markers
    this.mapMarkers.forEach(m => this.map.removeLayer(m));
    this.mapMarkers = [];

    markets.forEach(m => {
      const isOpen = dataService && typeof dataService.isMarketOpenNow === 'function' ? dataService.isMarketOpenNow(m) : false;
      const markerColor = isOpen ? '#22c55e' : '#15803d';

      const customIcon = L.divIcon({
        className: 'custom-leaflet-icon',
        html: `<div style="background:${markerColor}; color:#fff; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 8px rgba(0,0,0,0.3); border:2px solid #fff;"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 12"/></svg></div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      });

      const marker = L.marker([m.lat, m.lng], { icon: customIcon }).addTo(this.map);
      marker.bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; min-width:180px;">
          <h4 style="margin:0 0 4px 0; color:#15803d; font-size:15px;">${m.name}</h4>
          <p style="margin:0 0 6px 0; font-size:12px; color:#64748b;">${m.address}</p>
          <div style="font-size:12px; font-weight:700; margin-bottom:8px; color:${isOpen ? '#15803d' : '#64748b'};">
            ${isOpen ? '● Open Today' : 'Scheduled'}
          </div>
          <button id="popup-btn-${m.id}" style="background:#15803d; color:#fff; border:none; padding:4px 10px; border-radius:12px; font-size:12px; cursor:pointer; width:100%;">
            View Details
          </button>
        </div>
      `);

      marker.on('popupopen', () => {
        document.getElementById(`popup-btn-${m.id}`)?.addEventListener('click', () => {
          this.app?.openMarketDetail(m.id);
        });
      });

      this.mapMarkers.push(marker);
    });

    if (markets.length > 0 && this.mapMarkers.length > 0) {
      const group = new L.featureGroup(this.mapMarkers);
      this.map.fitBounds(group.getBounds().pad(0.1));
    }
  }

  getFilteredMarkets() {
    let markets = (dataService && typeof dataService.getMarkets === 'function' ? dataService.getMarkets() : null) || [];
    const area = this.areaSelect?.value || 'all';
    const day = this.daySelect?.value || 'all';
    const produce = this.produceSelect?.value || 'all';
    const openNowOnly = this.openNowToggle?.classList.contains('active');
    const sort = this.sortSelect?.value || 'rating';
    const userLoc = (dataService && typeof dataService.getUserLocation === 'function')
      ? dataService.getUserLocation()
      : { lat: 34.0522, lng: -118.2437 };

    // 1. Filter by Text Keyword
    if (this.searchKeyword) {
      const kw = this.searchKeyword;
      markets = markets.filter(m => 
        m.name.toLowerCase().includes(kw) ||
        m.address.toLowerCase().includes(kw) ||
        m.area.toLowerCase().includes(kw) ||
        (m.shortDescription && m.shortDescription.toLowerCase().includes(kw)) ||
        (m.produceTypes && m.produceTypes.some(p => p.toLowerCase().includes(kw))) ||
        (m.featuredProducts && m.featuredProducts.some(fp => fp.toLowerCase().includes(kw)))
      );
    }

    // 2. Filter by Quick Pills (from Hero)
    if (this.activeQuickFilter) {
      const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const todayDay = dayNames[new Date().getDay()];

      if (this.activeQuickFilter === 'open-today') {
        markets = markets.filter(m => m.days && m.days.includes(todayDay));
      } else if (this.activeQuickFilter === 'weekend') {
        markets = markets.filter(m => m.days && (m.days.includes('Saturday') || m.days.includes('Sunday')));
      } else if (this.activeQuickFilter === 'near-me') {
        // Will sort by distance below
      } else if (this.activeQuickFilter === 'organic') {
        markets = markets.filter(m => 
          m.name.toLowerCase().includes('organic') ||
          (m.shortDescription && m.shortDescription.toLowerCase().includes('organic')) ||
          (m.longDescription && m.longDescription.toLowerCase().includes('organic'))
        );
      } else if (this.activeQuickFilter === 'flowers') {
        markets = markets.filter(m => 
          (m.shortDescription && m.shortDescription.toLowerCase().includes('flower')) ||
          (m.featuredProducts && m.featuredProducts.some(fp => fp.toLowerCase().includes('flower'))) ||
          (m.produceTypes && m.produceTypes.some(pt => pt.toLowerCase().includes('flower')))
        );
      }
    }

    // 3. Filter by Area
    if (area !== 'all') {
      markets = markets.filter(m => m.area === area);
    }

    // 4. Filter by Day
    if (day !== 'all') {
      markets = markets.filter(m => m.days && m.days.includes(day));
    }

    // 5. Filter by Produce Available
    if (produce !== 'all') {
      markets = markets.filter(m => m.produceTypes && m.produceTypes.includes(produce));
    }

    // 6. Filter by Open Right Now (Smart live / today / weekend detection)
    if (openNowOnly) {
      const openStrict = markets.filter(m => dataService && dataService.isMarketOpenNow && dataService.isMarketOpenNow(m));
      if (openStrict.length > 0) {
        markets = openStrict;
      } else {
        // If outside morning operating hours, filter to markets open today
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const todayDay = dayNames[new Date().getDay()];
        const openToday = markets.filter(m => m.days && m.days.includes(todayDay));
        if (openToday.length > 0) {
          markets = openToday;
        } else {
          // If none today, show weekend markets
          const weekend = markets.filter(m => m.days && (m.days.includes('Saturday') || m.days.includes('Sunday')));
          markets = weekend.length > 0 ? weekend : markets;
        }
      }
    }

    // 7. Calculate Distance & Sort
    markets = markets.map(m => ({
      ...m,
      distance: (dataService && typeof dataService.calculateDistance === 'function')
        ? dataService.calculateDistance(userLoc.lat, userLoc.lng, m.lat, m.lng)
        : '1.2',
      isOpenNow: (dataService && typeof dataService.isMarketOpenNow === 'function')
        ? dataService.isMarketOpenNow(m)
        : false
    }));

    // If 'near-me' quick pill is active, override sort to distance
    const effectiveSort = (this.activeQuickFilter === 'near-me') ? 'distance' : sort;

    if (effectiveSort === 'az') {
      markets.sort((a, b) => a.name.localeCompare(b.name));
    } else if (effectiveSort === 'za') {
      markets.sort((a, b) => b.name.localeCompare(a.name));
    } else if (effectiveSort === 'distance') {
      markets.sort((a, b) => parseFloat(a.distance || 0) - parseFloat(b.distance || 0));
    } else if (effectiveSort === 'rating') {
      markets.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (effectiveSort === 'next_open') {
      const getDaysUntilNextOpen = (m) => {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const todayIdx = new Date().getDay();
        if (m.isOpenNow) return 0;
        let minDays = 7;
        for (const day of (m.days || [])) {
          const targetIdx = dayNames.indexOf(day);
          if (targetIdx !== -1) {
            let diff = targetIdx - todayIdx;
            if (diff <= 0) diff += 7;
            if (diff < minDays) minDays = diff;
          }
        }
        return minDays;
      };
      markets.sort((a, b) => getDaysUntilNextOpen(a) - getDaysUntilNextOpen(b));
    }

    return markets;
  }

  render() {
    const markets = this.getFilteredMarkets();

    if (this.resultCountEl) {
      this.resultCountEl.textContent = `Showing ${markets.length} farmer market${markets.length === 1 ? '' : 's'}`;
    }

    if (!this.gridContainer) return;

    if (markets.length === 0) {
      this.gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="margin-bottom: 1.25rem;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>
          </div>
          <h3>No markets match your criteria</h3>
          <p>Try resetting filters or checking back on other days of the week.</p>
          <button id="resetFiltersBtn" class="btn-primary" style="margin-top: 1.25rem;">Reset All Filters</button>
        </div>
      `;
      document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
        if (this.areaSelect) this.areaSelect.value = 'all';
        if (this.daySelect) this.daySelect.value = 'all';
        if (this.produceSelect) this.produceSelect.value = 'all';
        if (this.heroSearchInput) this.heroSearchInput.value = '';
        if (this.filterKeyword) this.filterKeyword.value = '';
        this.searchKeyword = '';
        this.activeQuickFilter = null;
        document.querySelectorAll('.hero-pill-btn').forEach(b => b.classList.remove('active'));
        this.openNowToggle?.classList.remove('active');
        this.render();
      });
      return;
    }

    this.gridContainer.innerHTML = markets.map((m, idx) => {
      const isFav = this.app?.isBookmarked ? this.app.isBookmarked('market', m.id) : false;
      const delayMs = idx * 60;
      return `
        <div class="market-card" data-id="${m.id}" style="animation: revealCard 0.5s ${delayMs}ms cubic-bezier(0.16,1,0.3,1) both;">
          <div class="market-card-thumb-wrap">
            <img src="${m.image}" alt="${m.name}" class="market-card-thumb" loading="lazy">
            <span class="market-category-badge">${m.area}</span>
            <button class="market-fav-btn ${isFav ? 'favorited' : ''}" data-type="market" data-id="${m.id}" title="Save to Bookmarks" aria-label="Save">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>

          <div class="market-card-body">
            <div class="market-header-row">
              <h3 class="market-card-title">${m.name}</h3>
              <span class="market-status-pill ${m.isOpenNow ? 'open' : 'closed'}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${m.isOpenNow ? '#16a34a' : '#d97706'}" stroke-width="2.5" style="vertical-align:-2px; margin-right:3px;">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/>
                </svg>
                ${m.isOpenNow ? 'Open Now' : (m.days && m.days.some(d => d.includes('Sat') || d.includes('Sun')) ? 'Weekend Market' : 'Scheduled')}
              </span>
            </div>

            <p class="market-card-desc">${m.shortDescription}</p>

            <div class="market-card-footer-link view-market-detail-btn" data-id="${m.id}">
              <span>Explore Market & Produce</span> →
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click events - clicking anywhere on card or explore button opens market detail
    this.gridContainer.querySelectorAll('.market-card').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('.market-fav-btn')) return;
        const id = card.getAttribute('data-id');
        if (id) {
          try { audioManager.playClick(); } catch(err) {}
          this.app?.openMarketDetail(id);
        }
      });
    });

    this.gridContainer.querySelectorAll('.view-market-detail-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('data-id');
        if (id) {
          try { audioManager.playClick(); } catch(err) {}
          this.app?.openMarketDetail(id);
        }
      });
    });

    this.gridContainer.querySelectorAll('.market-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        this.app?.toggleBookmark('market', id);
        this.render();
      });
    });

    // 3D Tilt effect on each card
    this.gridContainer.querySelectorAll('.market-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-10px) scale(1.02)`;
        card.style.transition = 'transform 0.1s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      });
    });

    // Update map markers if map is initialized
    if (this.map) {
      this.updateMapMarkers(markets);
    }
  }
}
