import { dataService } from '../dataService.js';
import { audioManager } from '../audioManager.js';

export class MarketDetail {
  constructor(app) {
    this.app = app;
    this.modalOverlay = document.getElementById('marketDetailModal');
    this.contentContainer = document.getElementById('marketDetailContent');
    this.detailMap = null;
  }

  init() {
    this.setupCloseModal();
  }

  setupCloseModal() {
    document.getElementById('closeMarketDetailBtn')?.addEventListener('click', () => {
      this.close();
    });

    this.modalOverlay?.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) {
        this.close();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalOverlay?.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(marketId) {
    if (!this.modalOverlay) {
      this.modalOverlay = document.getElementById('marketDetailModal');
    }
    if (!this.contentContainer) {
      this.contentContainer = document.getElementById('marketDetailContent');
    }
    const market = dataService.getMarketById(marketId);
    if (!market) {
      console.warn('Market not found:', marketId);
      return;
    }

    try {
      if (window.audioManager) audioManager.playChime();
    } catch (e) {}

    try {
      this.render(market);
    } catch (err) {
      console.error('Error rendering market detail modal:', err);
    }

    if (this.modalOverlay) {
      this.modalOverlay.classList.add('active');
      this.modalOverlay.style.display = 'flex';
      this.modalOverlay.style.opacity = '1';
      this.modalOverlay.style.visibility = 'visible';
      this.modalOverlay.style.pointerEvents = 'auto';
    }
    document.body.style.overflow = 'hidden';

    // Update breadcrumb
    if (this.app?.updateBreadcrumbs) {
      this.app.updateBreadcrumbs([
        { label: 'Home', action: 'home' },
        { label: 'Market Directory', action: 'directory' },
        { label: market.name, active: true }
      ]);
    }

    setTimeout(() => {
      this.initDetailMap(market);
    }, 300);
  }

  close() {
    try {
      if (window.audioManager) audioManager.playClick();
    } catch (e) {}

    if (!this.modalOverlay) {
      this.modalOverlay = document.getElementById('marketDetailModal');
    }
    if (this.modalOverlay) {
      this.modalOverlay.classList.remove('active');
      this.modalOverlay.style.display = '';
      this.modalOverlay.style.opacity = '';
      this.modalOverlay.style.visibility = '';
      this.modalOverlay.style.pointerEvents = '';
    }
    document.body.style.overflow = '';
    if (this.app?.updateBreadcrumbs) {
      this.app.updateBreadcrumbs([
        { label: 'Home', action: 'home' },
        { label: 'Market Directory', action: 'directory', active: true }
      ]);
    }
  }

  initDetailMap(market) {
    const mapElement = document.getElementById('marketModalMap');
    if (!mapElement || !window.L) return;

    try {
      if (this.detailMap) {
        try { this.detailMap.remove(); } catch(e) {}
        this.detailMap = null;
      }

      this.detailMap = L.map('marketModalMap').setView([market.lat, market.lng], 14);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.detailMap);

      const customIcon = L.divIcon({
        className: 'custom-detail-icon',
        html: `<div style="background:#15803d; color:#fff; width:38px; height:38px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(0,0,0,0.35); border:3px solid #fff;"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg></div>`,
        iconSize: [38, 38],
        iconAnchor: [19, 19]
      });

      L.marker([market.lat, market.lng], { icon: customIcon })
        .addTo(this.detailMap)
        .bindPopup(`<b>${market.name}</b><br>${market.address}`)
        .openPopup();

      setTimeout(() => {
        this.detailMap?.invalidateSize();
      }, 350);
    } catch (err) {
      console.warn('Map initialization in modal:', err);
    }
  }

  render(market) {
    const isOpen = dataService.isMarketOpenNow(market);
    const isFav = this.app.isBookmarked('market', market.id);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[new Date().getDay()];

    const allProduce = dataService.getProduce().filter(p => p.availableMarkets.includes(market.id));

    this.contentContainer.innerHTML = `
      <div style="position:relative;">
        <img src="${market.image}" alt="${market.name}" style="width:100%; height:320px; object-fit:cover; border-radius:var(--radius-xl) var(--radius-xl) 0 0;">
        <div style="position:absolute; top:20px; left:20px;">
          <span class="status-badge ${isOpen ? 'open' : 'closed'}">
            <span class="pulse-dot"></span>
            ${isOpen ? 'Open Today' : 'Closed Today'}
          </span>
        </div>
      </div>

      <div style="padding: 2rem;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem; flex-wrap:wrap; gap:1rem;">
          <div>
            <h2 style="font-size: 1.85rem; margin-bottom: 0.35rem; color:var(--text-main);">${market.name}</h2>
            <p style="color:var(--primary); font-weight:600; display:flex; align-items:center; gap:0.4rem;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              ${market.address}
            </p>
          </div>
          <div style="display:flex; gap:0.75rem;">
            <button class="btn-secondary toggle-modal-fav" data-id="${market.id}">
              ${isFav 
                ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="#ca8a04" stroke="#ca8a04" stroke-width="2" style="display:inline-block;vertical-align:-2px;margin-right:4px;"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>Saved to Bookmarks' 
                : '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:4px;"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>Add to Bookmarks'}
            </button>
            <a href="https://maps.google.com/?q=${encodeURIComponent(market.address)}" target="_blank" rel="noopener" class="btn-primary" style="display:inline-flex; align-items:center; gap:0.4rem;">
              <span>Get Google Directions</span>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>

        <p style="font-size:1.02rem; line-height:1.7; color:var(--text-muted); margin-bottom:2rem;">
          ${market.longDescription}
        </p>

        <!-- Weekly Operating Schedule Table (SRS Mandatory) -->
        <div style="margin-bottom: 2.5rem;">
          <h3 style="margin-bottom: 0.75rem; font-size:1.35rem; display:flex; align-items:center; gap:0.5rem;">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--primary)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Weekly Operating Schedule
          </h3>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:0.75rem;">
            Today is <b>${currentDay}</b>. Current active operating hours are highlighted below:
          </p>
          <table class="weekly-schedule-table">
            <thead>
              <tr>
                <th>Day of Week</th>
                <th>Operating Hours</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${Object.entries(market.weeklySchedule).map(([day, hours]) => {
                const isToday = day === currentDay;
                const isDayOpen = hours.toLowerCase() !== 'closed';
                return `
                  <tr class="${isToday ? 'current-day-row' : ''}">
                    <td><b>${day}</b> ${isToday ? '(Today)' : ''}</td>
                    <td>${hours}</td>
                    <td>
                      ${isToday 
                        ? (isOpen ? '<span style="color:#166534; font-weight:700;">● Active Now</span>' : '<span style="color:#991b1b;">● Closed for now</span>') 
                        : (isDayOpen ? 'Scheduled' : 'Closed')}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <!-- Typical Produce Available Grid (SRS Mandatory) -->
        <div style="margin-bottom: 2.5rem;">
          <h3 style="margin-bottom: 1rem; font-size:1.35rem; display:flex; align-items:center; gap:0.5rem;">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--primary)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            Typical Produce Available at this Market
          </h3>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:1.25rem;">
            ${allProduce.map(p => `
              <div style="background:var(--bg-muted); border:1px solid var(--border-light); border-radius:var(--radius-md); padding:1rem; display:flex; align-items:center; gap:0.75rem;">
                <img src="${p.image}" alt="${p.name}" style="width:54px; height:54px; border-radius:var(--radius-sm); object-fit:cover;">
                <div>
                  <h5 style="font-size:0.92rem; margin-bottom:0.2rem;">${p.name}</h5>
                  <span style="font-size:0.76rem; color:var(--accent); font-weight:700;">${p.category}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Interactive Map & Directions -->
        <div style="margin-bottom: 2.5rem;">
          <h3 style="margin-bottom: 1rem; font-size:1.35rem; display:flex; align-items:center; gap:0.5rem;">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--primary)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
            Market Geographic Pin & Location Map
          </h3>
          <div id="marketModalMap" style="width:100%; height:280px; border-radius:var(--radius-lg); border:1px solid var(--border-medium); z-index:1;"></div>
        </div>

        <!-- Featured Farmers Spotlight -->
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; font-size:1.35rem; display:flex; align-items:center; gap:0.5rem;">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--primary)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Local Grower & Farmer Spotlight
          </h3>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem;">
            ${market.farmerProfiles.map(f => `
              <div style="background:var(--bg-surface); border:1px solid var(--border-medium); border-radius:var(--radius-md); padding:1.25rem;">
                <h4 style="font-size:1.05rem; color:var(--primary); margin-bottom:0.2rem;">${f.name}</h4>
                <div style="font-weight:700; font-size:0.85rem; margin-bottom:0.35rem; display:flex; align-items:center; gap:0.35rem;">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  ${f.farm}
                </div>
                <div style="font-size:0.82rem; color:var(--text-muted);">Specialty: ${f.specialty}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Amenities Tags -->
        <div>
          <h4 style="margin-bottom:0.75rem; font-size:1.05rem;">Market Amenities & Accessibility</h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
            ${market.amenities.map(a => `
              <span style="background:var(--bg-muted); border:1px solid var(--border-light); padding:0.35rem 0.8rem; border-radius:var(--radius-full); font-size:0.82rem; font-weight:600; color:var(--text-main); display:inline-flex; align-items:center; gap:0.35rem;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                ${a}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Hook modal favorite button
    this.contentContainer.querySelector('.toggle-modal-fav')?.addEventListener('click', () => {
      this.app.toggleBookmark('market', market.id);
      this.render(market);
    });
  }
}
