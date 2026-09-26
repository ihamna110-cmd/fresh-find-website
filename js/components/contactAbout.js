import { audioManager } from '../audioManager.js';

export class ContactAbout {
  constructor(app) {
    this.app = app;
    this.contactForm = document.getElementById('contactForm');
    this.contactMap = null;
  }

  init() {
    this.setupContactForm();
    this.initContactMap();
  }

  setupContactForm() {
    this.contactForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      audioManager.playChime();

      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const message = document.getElementById('contactMessage')?.value.trim();

      if (!name || !email || !message) {
        this.app.showToast('Please fill out all contact fields! ⚠️', true);
        return;
      }

      this.app.showToast(`Thank you, ${name}! Your inquiry has been sent 🌱`);
      this.contactForm.reset();
    });
  }

  initContactMap() {
    const mapEl = document.getElementById('contactMap');
    if (!mapEl || !window.L || this.contactMap) return;

    // FreshFind Community Hub HQ
    const hqCoords = [34.0522, -118.2437];
    this.contactMap = L.map('contactMap').setView(hqCoords, 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.contactMap);

    const customIcon = L.divIcon({
      className: 'custom-hq-icon',
      html: `<div style="background:#15803d; color:#fff; width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:2px solid #fff; font-size:16px;">🏢</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });

    L.marker(hqCoords, { icon: customIcon })
      .addTo(this.contactMap)
      .bindPopup("<b>FreshFind Community Hub & Farmers Co-op</b><br>450 Organic Boulevard, Downtown")
      .openPopup();
  }
}
