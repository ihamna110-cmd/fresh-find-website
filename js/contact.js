/**
 * FreshFind — Contact Us Page Controller
 * Includes Real-Time Form Validation, Ticket Generator, Interactive Leaflet Map, and FAQ Accordion
 */
import { Header } from './components/header.js';
import { GardenScrollbar } from './components/gardenScrollbar.js';
import { CustomCursor } from './components/customCursor.js';
import { audioManager } from './audioManager.js';

class ContactPageController {
  constructor() {
    this.header = null;
    this.gardenScrollbar = null;
    this.customCursor = null;
    this.map = null;
    this.toastContainer = document.getElementById('toastContainer');
  }

  init() {
    // 1. Initialize Header
    try {
      this.header = new Header(this);
      this.header.init();
    } catch (e) {
      console.warn('Header init:', e);
    }

    // 2. Initialize Botanical Scrollbar
    try {
      this.gardenScrollbar = new GardenScrollbar(this);
      this.gardenScrollbar.init();
    } catch (e) {
      console.warn('GardenScrollbar init:', e);
    }

    // 3. Initialize Custom Cursor
    try {
      this.customCursor = new CustomCursor();
    } catch (e) {
      console.warn('CustomCursor init:', e);
    }

    // 4. Contact Form Validation & Submission
    this.setupContactForm();

    // 5. Initialize Leaflet Map
    this.initMap();

    // 6. Setup FAQ Accordion
    this.setupFAQ();

    // 7. Click sounds on interactive elements
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        try { audioManager.playClick(); } catch (_) {}
      });
    });
  }

  setupContactForm() {
    const form = document.getElementById('standaloneContactForm');
    const successCard = document.getElementById('contactSuccessCard');
    const resetBtn = document.getElementById('resetContactFormBtn');
    if (!form) return;

    const fields = {
      name: {
        el: document.getElementById('cfName'),
        errorEl: document.getElementById('cfNameError'),
        validate: (val) => {
          if (!val || val.length < 3) return 'Please enter your full name (at least 3 letters).';
          if (!/^[a-zA-Z\s'.]+$/.test(val)) return 'Name should only contain letters and spaces.';
          return '';
        }
      },
      email: {
        el: document.getElementById('cfEmail'),
        errorEl: document.getElementById('cfEmailError'),
        validate: (val) => {
          if (!val) return 'Email address is required.';
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
          if (!emailRegex.test(val)) return 'Please provide a valid email (e.g. name@domain.com).';
          return '';
        }
      },
      subject: {
        el: document.getElementById('cfSubject'),
        errorEl: document.getElementById('cfSubjectError'),
        validate: (val) => {
          if (!val || val.length < 4) return 'Please provide a subject (at least 4 characters).';
          return '';
        }
      },
      category: {
        el: document.getElementById('cfCategory'),
        errorEl: document.getElementById('cfCategoryError'),
        validate: (val) => {
          if (!val) return 'Please choose an inquiry topic.';
          return '';
        }
      },
      message: {
        el: document.getElementById('cfMessage'),
        errorEl: document.getElementById('cfMessageError'),
        validate: (val) => {
          if (!val || val.length < 15) return 'Message must be at least 15 characters so we can help.';
          return '';
        }
      }
    };

    // Live character counter for Message field
    const charCountEl = document.getElementById('cfCharCount');
    if (fields.message.el && charCountEl) {
      fields.message.el.addEventListener('input', () => {
        const len = fields.message.el.value.length;
        charCountEl.textContent = `${len} / 500`;
        if (len >= 500) {
          charCountEl.style.color = '#ef4444';
          charCountEl.style.fontWeight = '700';
        } else if (len >= 15) {
          charCountEl.style.color = '#15803d';
          charCountEl.style.fontWeight = '600';
        } else {
          charCountEl.style.color = '#6e8878';
          charCountEl.style.fontWeight = '500';
        }
      });
    }

    // Attach real-time input and blur validation listeners to all fields
    Object.keys(fields).forEach(key => {
      const field = fields[key];
      if (!field.el) return;

      const runValidation = (isBlur = false) => {
        const val = field.el.value.trim();
        const error = field.validate(val);

        if (error) {
          // If blurring or already was invalid, show error state
          if (isBlur || field.el.classList.contains('is-invalid')) {
            field.el.classList.add('is-invalid');
            field.el.classList.remove('is-valid');
            if (field.errorEl) {
              const span = field.errorEl.querySelector('span');
              if (span) span.textContent = error;
              field.errorEl.classList.add('visible');
            }
          }
          return false;
        } else {
          // Valid state
          field.el.classList.remove('is-invalid');
          field.el.classList.add('is-valid');
          if (field.errorEl) {
            field.errorEl.classList.remove('visible');
          }
          return true;
        }
      };

      field.el.addEventListener('input', () => runValidation(false));
      field.el.addEventListener('blur', () => runValidation(true));
      if (field.el.tagName === 'SELECT') {
        field.el.addEventListener('change', () => runValidation(true));
      }
    });

    // Form Submission Handling
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;
      let firstInvalidEl = null;

      // Validate all fields on submit
      Object.keys(fields).forEach(key => {
        const field = fields[key];
        if (!field.el) return;

        const val = field.el.value.trim();
        const error = field.validate(val);

        if (error) {
          hasError = true;
          field.el.classList.add('is-invalid');
          field.el.classList.remove('is-valid');
          if (field.errorEl) {
            const span = field.errorEl.querySelector('span');
            if (span) span.textContent = error;
            field.errorEl.classList.add('visible');
          }
          if (!firstInvalidEl) firstInvalidEl = field.el;
        } else {
          field.el.classList.remove('is-invalid');
          field.el.classList.add('is-valid');
          if (field.errorEl) field.errorEl.classList.remove('visible');
        }
      });

      if (hasError && firstInvalidEl) {
        firstInvalidEl.focus();
        firstInvalidEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        this.showToast('Please correct the highlighted fields ⚠️', true);
        return;
      }

      // Valid form — Submission flow
      const submitBtn = document.getElementById('cfSubmitBtn');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="loading-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation:spinClockwise 0.8s linear infinite;">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
            <path d="M12 2a10 10 0 0 1 10 10"/>
          </svg>
          <span>Dispatching Message...</span>
        `;
      }

      setTimeout(() => {
        const senderName = fields.name.el.value.trim();
        const senderEmail = fields.email.el.value.trim();
        const senderSubject = fields.subject.el.value.trim();
        const senderCategory = fields.category.el.value.trim();

        // Generate Ticket ID
        const ticketId = `#FF-${Math.floor(10000 + Math.random() * 90000)}`;

        // Populate Success Card
        const ticketDisplay = document.getElementById('ticketIdDisplay');
        const nameDisplay = document.getElementById('successSenderName');
        const catDisplay = document.getElementById('successCategoryText');
        const emailDisplay = document.getElementById('successSenderEmail');

        if (ticketDisplay) ticketDisplay.textContent = ticketId;
        if (nameDisplay) nameDisplay.textContent = senderName;
        if (catDisplay) catDisplay.textContent = senderCategory || senderSubject;
        if (emailDisplay) emailDisplay.textContent = senderEmail;

        // Play chime audio
        try { audioManager.playChime(); } catch (_) {}

        // Hide form and show success card
        form.style.display = 'none';
        if (successCard) {
          successCard.classList.add('active');
          successCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Show toast
        this.showToast(`Message Sent! Ticket ${ticketId} created 🌱`);

        // Reset submit button state
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }

        // Reset form inputs & remove validation classes
        form.reset();
        Object.keys(fields).forEach(key => {
          fields[key].el?.classList.remove('is-valid', 'is-invalid');
          if (fields[key].errorEl) fields[key].errorEl.classList.remove('visible');
        });
        if (charCountEl) charCountEl.textContent = '0 / 500';

      }, 650);
    });

    // Reset button to send another message
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (successCard) successCard.classList.remove('active');
        form.style.display = 'block';
        fields.name.el?.focus();
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  initMap() {
    const mapEl = document.getElementById('contactMap');
    if (!mapEl || !window.L || this.map) return;

    try {
      // Karachi, Pakistan coordinates [24.8607, 67.0011]
      const karachiCoords = [24.8607, 67.0011];
      this.map = L.map('contactMap', {
        center: karachiCoords,
        zoom: 13,
        scrollWheelZoom: false,
        zoomControl: true
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }).addTo(this.map);

      const customMarkerIcon = L.divIcon({
        className: 'custom-contact-marker',
        html: `
          <div style="background:#15803d; color:#ffffff; width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 8px 24px rgba(21,128,61,0.45); border:3px solid #ffffff; font-size:1.3rem;">
            🌱
          </div>
        `,
        iconSize: [44, 44],
        iconAnchor: [22, 22]
      });

      L.marker(karachiCoords, { icon: customMarkerIcon })
        .addTo(this.map)
        .bindPopup(`
          <div style="padding: 6px; font-family: 'Plus Jakarta Sans', sans-serif;">
            <strong style="color:#15803d; font-size:1.05rem;">FreshFind Community Hub</strong><br>
            <span style="color:#6e8878; font-size:0.84rem; font-weight:700;">Karachi, Pakistan</span>
            <p style="margin:6px 0 0; font-size:0.86rem; color:#4b6354; line-height:1.4;">Connecting urban communities with certified neighborhood farmers markets & organic family farms.</p>
          </div>
        `)
        .openPopup();
    } catch (e) {
      console.warn('Map initialization:', e);
      mapEl.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#4b6354;font-weight:600;">📍 Karachi, Pakistan — FreshFind Community Hub</div>';
    }
  }

  setupFAQ() {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        if (!item) return;

        const isOpen = item.classList.contains('open');

        // Close other items
        document.querySelectorAll('.faq-item.open').forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
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
    }, 3500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new ContactPageController();
  window.freshFindApp = app;
  app.init();
});
