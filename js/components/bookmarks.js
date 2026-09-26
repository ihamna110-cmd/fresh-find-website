import { dataService } from '../dataService.js';
import { audioManager } from '../audioManager.js';

export class Bookmarks {
  constructor(app) {
    this.app = app;
    this.drawer = document.getElementById('bookmarksDrawer');
    this.openBtn = document.getElementById('bookmarksToggleBtn');
    this.closeBtn = document.getElementById('closeBookmarksBtn');
    this.container = document.getElementById('bookmarksList');
    this.exportBtn = document.getElementById('exportBookmarksBtn');
    this.downloadBtn = document.getElementById('downloadBookmarksBtn');
    this.shareBtn = document.getElementById('shareBookmarksBtn');

    // Storage structure: { markets: { [id]: noteText }, produce: { [id]: noteText } }
    this.storageKey = 'freshfind_user_bookmarks';
    this.data = this.load();
  }

  init() {
    this.setupListeners();
    this.updateHeaderBadge();
  }

  normalizeType(type) {
    if (type === 'market' || type === 'markets') return 'markets';
    if (type === 'produce' || type === 'produces') return 'produce';
    return type || 'markets';
  }

  load() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      let parsed = saved ? JSON.parse(saved) : { markets: {}, produce: {} };
      const data = { markets: {}, produce: {} };

      if (Array.isArray(parsed)) {
        parsed.forEach(id => {
          const sid = String(id);
          if (sid.startsWith('prod')) data.produce[sid] = '';
          else data.markets[sid] = '';
        });
      } else if (parsed && typeof parsed === 'object') {
        const rawMarkets = parsed.markets || parsed.market || [];
        if (Array.isArray(rawMarkets)) {
          rawMarkets.forEach(id => { data.markets[String(id)] = ''; });
        } else if (typeof rawMarkets === 'object') {
          Object.keys(rawMarkets).forEach(k => { data.markets[String(k)] = rawMarkets[k] || ''; });
        }

        const rawProduce = parsed.produce || parsed.produces || [];
        if (Array.isArray(rawProduce)) {
          rawProduce.forEach(id => { data.produce[String(id)] = ''; });
        } else if (typeof rawProduce === 'object') {
          Object.keys(rawProduce).forEach(k => { data.produce[String(k)] = rawProduce[k] || ''; });
        }
      }
      return data;
    } catch (e) {
      return { markets: {}, produce: {} };
    }
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    this.updateHeaderBadge();
  }

  setupListeners() {
    const handleOpen = (e) => {
      if (e) e.preventDefault();
      audioManager.playClick();
      this.open();
    };

    this.openBtn?.addEventListener('click', handleOpen);
    document.getElementById('navCartBtn')?.addEventListener('click', handleOpen);
    document.getElementById('bookmarksToggleBtn')?.addEventListener('click', handleOpen);
    document.getElementById('footerOpenBookmarks')?.addEventListener('click', handleOpen);

    this.closeBtn?.addEventListener('click', () => {
      audioManager.playClick();
      this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.drawer?.classList.contains('open')) {
        this.close();
      }
    });

    document.addEventListener('click', (e) => {
      if (this.drawer?.classList.contains('open') &&
          !this.drawer.contains(e.target) &&
          !e.target.closest('#navCartBtn') &&
          !e.target.closest('#bookmarksToggleBtn') &&
          !e.target.closest('#footerOpenBookmarks')) {
        this.close();
      }
    });

    this.exportBtn?.addEventListener('click', () => {
      audioManager.playChime();
      this.exportFormattedPrint();
    });

    this.downloadBtn?.addEventListener('click', () => {
      audioManager.playChime();
      this.downloadFormattedText();
    });

    this.shareBtn?.addEventListener('click', () => {
      audioManager.playClick();
      this.openSocialShareModal();
    });
  }

  open() {
    this.render();
    this.drawer?.classList.add('open');
  }

  close() {
    this.drawer?.classList.remove('open');
  }

  isBookmarked(type, id) {
    if (!id) return false;
    const key = this.normalizeType(type);
    return !!(this.data[key] && this.data[key][String(id)] !== undefined);
  }

  toggle(type, id) {
    if (!id) return false;
    audioManager.playClick();
    const key = this.normalizeType(type);
    const sid = String(id);
    if (!this.data[key]) this.data[key] = {};

    let nowSaved = false;
    if (this.data[key][sid] !== undefined) {
      delete this.data[key][sid];
      this.app?.showToast('Removed from Bookmarks');
      nowSaved = false;
    } else {
      this.data[key][sid] = '';
      this.app?.showToast('Saved to Bookmarks');
      nowSaved = true;
    }

    this.save();
    this.render();

    // Update all matching favorite buttons across page immediately
    document.querySelectorAll(`.market-fav-btn[data-id="${sid}"]`).forEach(btn => {
      if (nowSaved) {
        btn.classList.add('favorited');
        const svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', 'currentColor');
      } else {
        btn.classList.remove('favorited');
        const svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', 'none');
      }
    });

    return nowSaved;
  }

  updateNote(type, id, note) {
    const key = this.normalizeType(type);
    const sid = String(id);
    if (this.data[key] && this.data[key][sid] !== undefined) {
      this.data[key][sid] = note;
      this.save();
    }
  }

  updateHeaderBadge() {
    const total = Object.keys(this.data.markets || {}).length + Object.keys(this.data.produce || {}).length;
    this.app?.header?.updateBookmarkCount(total);
    document.querySelectorAll('#headerBookmarkBadge, .nav-cart-badge').forEach(badge => {
      badge.textContent = total;
      badge.style.display = total > 0 ? 'inline-flex' : 'none';
    });
  }

  render() {
    if (!this.container) return;

    const marketIds = Object.keys(this.data.markets || {});
    const produceIds = Object.keys(this.data.produce || {});

    if (marketIds.length === 0 && produceIds.length === 0) {
      this.container.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          <div style="display:flex; justify-content:center; margin-bottom:0.75rem; opacity:0.6;">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
          </div>
          <h4 style="font-size:1.1rem; color:var(--text-main); margin-bottom:0.4rem;">No Saved Bookmarks Yet</h4>
          <p style="font-size:0.88rem; line-height:1.5;">
            Click the bookmark icon on any farmers market or seasonal produce card to save it to your personal itinerary!
          </p>
        </div>
      `;
      return;
    }

    let html = '';

    if (marketIds.length > 0) {
      html += `
        <div style="margin-bottom:1.5rem;">
          <h4 style="font-size:0.95rem; text-transform:uppercase; letter-spacing:0.04em; color:var(--primary); margin-bottom:0.75rem; display:flex; align-items:center; gap:0.4rem;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Saved Farmers Markets (${marketIds.length})
          </h4>`;
      marketIds.forEach(id => {
        const m = dataService.getMarketById(id);
        const name = m ? m.name : `Market #${id}`;
        const area = m ? m.area : 'Local Area';
        const image = m?.image || 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=300&q=80';
        const note = this.data.markets[id] || '';
        html += `
          <div class="bookmark-item-card" style="display:flex; flex-direction:column; gap:0.6rem; padding:0.9rem; background:var(--bg-surface); border:1px solid var(--border-light); border-radius:12px; margin-bottom:0.85rem; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="display:flex; gap:0.75rem; align-items:center;">
              <img src="${image}" alt="${name}" style="width:52px; height:52px; object-fit:cover; border-radius:8px; flex-shrink:0;">
              <div style="flex:1; min-width:0;">
                <h5 style="font-size:0.92rem; font-weight:700; margin:0 0 0.2rem 0; cursor:pointer;" class="bookmark-open-detail" data-id="${id}">${name}</h5>
                <span style="font-size:0.76rem; color:var(--text-muted); display:inline-flex; align-items:center; gap:0.25rem;">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  ${area}
                </span>
              </div>
              <button class="remove-bk-btn" data-type="markets" data-id="${id}" style="background:none; border:none; color:#dc2626; cursor:pointer; padding:6px; font-size:1.1rem; line-height:1;" title="Remove Bookmark">✕</button>
            </div>
            <div>
              <label style="display:block; font-size:0.72rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:0.25rem;">Personal Notes:</label>
              <textarea class="bookmark-note-textarea" data-type="markets" data-id="${id}" rows="2" style="width:100%; box-sizing:border-box; padding:0.5rem; font-size:0.82rem; border:1px solid var(--border-light); border-radius:6px; background:var(--bg-muted); resize:vertical;" placeholder="e.g. Arrive early for fresh sourdough...">${note}</textarea>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    }

    if (produceIds.length > 0) {
      html += `
        <div style="margin-bottom:1.5rem;">
          <h4 style="font-size:0.95rem; text-transform:uppercase; letter-spacing:0.04em; color:var(--primary); margin-bottom:0.75rem; display:flex; align-items:center; gap:0.4rem;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            Saved Produce Items (${produceIds.length})
          </h4>`;
      produceIds.forEach(id => {
        const p = dataService.getProduceById(id);
        const name = p ? p.name : `Produce #${id}`;
        const cat = p ? p.category : 'Fresh Produce';
        const image = p?.image || 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80';
        const note = this.data.produce[id] || '';
        html += `
          <div class="bookmark-item-card" style="display:flex; flex-direction:column; gap:0.6rem; padding:0.9rem; background:var(--bg-surface); border:1px solid var(--border-light); border-radius:12px; margin-bottom:0.85rem; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="display:flex; gap:0.75rem; align-items:center;">
              <img src="${image}" alt="${name}" style="width:52px; height:52px; object-fit:cover; border-radius:8px; flex-shrink:0;">
              <div style="flex:1; min-width:0;">
                <h5 style="font-size:0.92rem; font-weight:700; margin:0 0 0.2rem 0;">${name}</h5>
                <span style="font-size:0.76rem; color:var(--primary); font-weight:600; display:inline-flex; align-items:center; gap:0.25rem;">
                  ${cat}
                </span>
              </div>
              <button class="remove-bk-btn" data-type="produce" data-id="${id}" style="background:none; border:none; color:#dc2626; cursor:pointer; padding:6px; font-size:1.1rem; line-height:1;" title="Remove Bookmark">✕</button>
            </div>
            <div>
              <label style="display:block; font-size:0.72rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:0.25rem;">Recipe / Shopping Note:</label>
              <textarea class="bookmark-note-textarea" data-type="produce" data-id="${id}" rows="2" style="width:100%; box-sizing:border-box; padding:0.5rem; font-size:0.82rem; border:1px solid var(--border-light); border-radius:6px; background:var(--bg-muted); resize:vertical;" placeholder="e.g. Buy 2 lbs for soup...">${note}</textarea>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    }

    this.container.innerHTML = html;

    // Attach listeners
    this.container.querySelectorAll('.remove-bk-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const type = e.currentTarget.getAttribute('data-type');
        const id = e.currentTarget.getAttribute('data-id');
        this.toggle(type, id);
      });
    });

    this.container.querySelectorAll('.bookmark-open-detail').forEach(el => {
      el.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (id && this.app?.openMarketDetail) {
          this.close();
          this.app.openMarketDetail(id);
        }
      });
    });

    this.container.querySelectorAll('.bookmark-note-textarea').forEach(tx => {
      tx.addEventListener('input', (e) => {
        const type = e.currentTarget.getAttribute('data-type');
        const id = e.currentTarget.getAttribute('data-id');
        this.updateNote(type, id, e.currentTarget.value);
      });
    });
  }

  exportFormattedPrint() {
    const marketIds = Object.keys(this.data.markets || {});
    const produceIds = Object.keys(this.data.produce || {});

    if (marketIds.length === 0 && produceIds.length === 0) {
      this.app.showToast('Your bookmarks list is empty! Add some markets or produce first.');
      return;
    }

    const printWin = window.open('', '_blank', 'width=800,height=900');
    if (!printWin) {
      window.print();
      return;
    }

    let marketsHtml = '';
    marketIds.forEach((id, idx) => {
      const m = dataService.getMarketById(id);
      if (m) {
        marketsHtml += `
          <div style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin-bottom:14px; page-break-inside:avoid; background:#f8fafc;">
            <h3 style="margin:0 0 6px 0; color:#15803d; font-size:18px;">${idx + 1}. ${m.name}</h3>
            <div style="font-size:14px; color:#475569; margin-bottom:4px;"><b>&#128204; Location:</b> ${m.address} (${m.area})</div>
            <div style="font-size:14px; color:#475569; margin-bottom:6px;"><b>&#9200; Schedule:</b> ${m.days.join(', ')} • ${m.hours}</div>
            ${this.data.markets[id] ? `<div style="margin-top:8px; padding:8px 12px; background:#e0f2fe; border-left:4px solid #0284c7; border-radius:4px; font-size:13px; color:#0369a1;"><b>Personal Note:</b> ${this.data.markets[id]}</div>` : ''}
          </div>
        `;
      }
    });

    let produceHtml = '';
    produceIds.forEach((id, idx) => {
      const p = dataService.getProduceById(id);
      if (p) {
        produceHtml += `
          <div style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin-bottom:14px; page-break-inside:avoid; background:#f8fafc;">
            <h3 style="margin:0 0 6px 0; color:#15803d; font-size:18px;">${idx + 1}. ${p.name} <span style="font-size:13px; color:#64748b; font-weight:normal;">(${p.category})</span></h3>
            <div style="font-size:14px; color:#475569; margin-bottom:6px;"><b>&#x1F33F; Nutritional Value:</b> ${p.nutrition}</div>
            ${this.data.produce[id] ? `<div style="margin-top:8px; padding:8px 12px; background:#dcfce7; border-left:4px solid #16a34a; border-radius:4px; font-size:13px; color:#15803d;"><b>Recipe / Shopping Note:</b> ${this.data.produce[id]}</div>` : ''}
          </div>
        `;
      }
    });

    printWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>FreshFind — My Green Market Itinerary</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.5; color: #1e293b; padding: 32px; max-width: 760px; margin: 0 auto; }
          .header { text-align: center; border-bottom: 2px solid #15803d; padding-bottom: 20px; margin-bottom: 28px; }
          .logo { font-size: 26px; font-weight: 800; color: #15803d; letter-spacing: -0.5px; }
          .sub { font-size: 14px; color: #64748b; margin-top: 4px; }
          .badge { display: inline-block; background: #dcfce7; color: #15803d; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; margin-top: 8px; }
          h2 { color: #0f172a; font-size: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 24px 0 16px 0; }
          .footer { text-align: center; font-size: 12px; color: #94a3b8; margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 16px; }
          @media print {
            body { padding: 16px; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">&#x1F33F; FreshFind — Fresh All Along</div>
          <div class="sub">Curated Personal Farmers Market Itinerary & Shopping List</div>
          <div class="badge">Generated on \${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>

        \${marketIds.length > 0 ? \`<h2>&#x1F4CD; Saved Farmers Markets (\${marketIds.length})</h2>\${marketsHtml}\` : ''}
        \${produceIds.length > 0 ? \`<h2>&#x1F955; Saved Seasonal Produce &amp; Crops (\${produceIds.length})</h2>\${produceHtml}\` : ''}

        <div class="footer">
          Printed from FreshFind • Zero Carbon Food Miles
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        <\/script>
      </body>
      </html>
    `);
    printWin.document.close();
  }

  downloadFormattedText() {
    const marketIds = Object.keys(this.data.markets || {});
    const produceIds = Object.keys(this.data.produce || {});

    let content = `=========================================\n`;
    content += ` FRESHFIND - MY FARMERS MARKET ITINERARY \n`;
    content += ` Generated: ${new Date().toLocaleString()}\n`;
    content += `=========================================\n\n`;

    content += `[ SAVED MARKETS ]\n`;
    marketIds.forEach((id, idx) => {
      const m = dataService.getMarketById(id);
      if (m) {
        content += `${idx + 1}. ${m.name}\n`;
        content += `   Location: ${m.address}\n`;
        content += `   Operating Hours: ${m.hours} (${m.days.join(', ')})\n`;
        if (this.data.markets[id]) {
          content += `   My Note: ${this.data.markets[id]}\n`;
        }
        content += `\n`;
      }
    });

    content += `[ SAVED SEASONAL PRODUCE ]\n`;
    produceIds.forEach((id, idx) => {
      const p = dataService.getProduceById(id);
      if (p) {
        content += `${idx + 1}. ${p.name} (${p.category})\n`;
        content += `   Nutrition: ${p.nutrition}\n`;
        if (this.data.produce[id]) {
          content += `   My Note: ${this.data.produce[id]}\n`;
        }
        content += `\n`;
      }
    });

    content += `Plan your green journey with FreshFind: Fresh All Along! 🌱\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FreshFind_Shopping_Plan_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    this.app.showToast('Downloaded itinerary list! 📄');
  }

  openSocialShareModal() {
    const text = encodeURIComponent("Check out my curated local farmers markets on FreshFind: Fresh All Along! 🌿 https://freshfind.eco");
    const shareModal = document.getElementById('shareModal');
    if (shareModal) {
      document.getElementById('shareWhatsapp')?.setAttribute('href', `https://api.whatsapp.com/send?text=${text}`);
      document.getElementById('shareTwitter')?.setAttribute('href', `https://twitter.com/intent/tweet?text=${text}`);
      document.getElementById('shareFacebook')?.setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://freshfind.eco')}`);

      document.getElementById('copyShareLinkBtn')?.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href);
        this.app.showToast('Link copied to clipboard! 📋');
      });

      shareModal.classList.add('active');
    }
  }
}
