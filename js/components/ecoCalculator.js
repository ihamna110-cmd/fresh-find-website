import { audioManager } from '../audioManager.js';

export class EcoCalculator {
  constructor(app) {
    this.app = app;
    this.mealsSlider = document.getElementById('ecoMealsSlider');
    this.mealsValueEl = document.getElementById('ecoMealsValue');
    this.peopleSlider = document.getElementById('ecoPeopleSlider');
    this.peopleValueEl = document.getElementById('ecoPeopleValue');

    this.milesSavedEl = document.getElementById('ecoMilesSaved');
    this.co2SavedEl = document.getElementById('ecoCo2Saved');
    this.plasticSavedEl = document.getElementById('ecoPlasticSaved');
    this.treesSavedEl = document.getElementById('ecoTreesSaved');
  }

  init() {
    this.setupListeners();
    this.calculate();
  }

  setupListeners() {
    this.mealsSlider?.addEventListener('input', () => {
      if (this.mealsValueEl) this.mealsValueEl.textContent = this.mealsSlider.value;
      this.calculate();
    });

    this.peopleSlider?.addEventListener('input', () => {
      if (this.peopleValueEl) this.peopleValueEl.textContent = this.peopleSlider.value;
      this.calculate();
    });
  }

  calculate() {
    const mealsPerWeek = parseInt(this.mealsSlider?.value || '7', 10);
    const peopleCount = parseInt(this.peopleSlider?.value || '2', 10);

    // Formula metrics:
    // Avg industrial supermarket transport: 1500 miles per ingredient vs local farm 12 miles = 1488 saved
    // Weekly food miles saved approx = meals * people * 145 miles
    const annualMeals = mealsPerWeek * peopleCount * 52;
    const foodMilesSaved = Math.round(annualMeals * 28.5);
    const co2SavedKg = Math.round(foodMilesSaved * 0.082);
    const plasticSaved = Math.round(annualMeals * 1.8);
    const treesEquivalent = (co2SavedKg / 22).toFixed(1);

    if (this.milesSavedEl) this.milesSavedEl.textContent = foodMilesSaved.toLocaleString();
    if (this.co2SavedEl) this.co2SavedEl.textContent = co2SavedKg.toLocaleString() + ' kg';
    if (this.plasticSavedEl) this.plasticSavedEl.textContent = plasticSaved.toLocaleString();
    if (this.treesSavedEl) this.treesSavedEl.textContent = treesEquivalent;
  }
}
