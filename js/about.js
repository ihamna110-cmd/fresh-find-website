/**
 * FreshFind — About Us Page Controller
 */
import { Header } from './components/header.js';
import { GardenScrollbar } from './components/gardenScrollbar.js';
import { CustomCursor } from './components/customCursor.js';
import { audioManager } from './audioManager.js';

class AboutPageController {
  constructor() {
    this.header = null;
    this.gardenScrollbar = null;
    this.customCursor = null;
    this.toastContainer = document.getElementById('toastContainer');
  }

  init() {
    // 1. Initialize Header utilities
    try {
      this.header = new Header(this);
      this.header.init();
    } catch (e) {
      console.warn('Header init:', e);
    }

    // 2. Initialize Living Garden Botanical Scrollbar
    try {
      this.gardenScrollbar = new GardenScrollbar(this);
      this.gardenScrollbar.init();
    } catch (e) {
      console.warn('GardenScrollbar init:', e);
    }

    // 3. Initialize Custom Botanical Cursor
    try {
      this.customCursor = new CustomCursor();
    } catch (e) {
      console.warn('CustomCursor init:', e);
    }

    // 4. Click sound feedback on buttons
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        audioManager.playClick();
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
    }, 3200);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new AboutPageController();
  window.freshFindApp = app;
  app.init();
});
