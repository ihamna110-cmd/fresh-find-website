/**
 * FreshFind - Simulated Visitor Counter (SRS Compliant)
 * Features persistent animated odometer effect.
 */
export class VisitorCounter {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.baseCount = 58420;
  }

  init() {
    if (!this.container) return;

    let saved = localStorage.getItem('freshfind_visitor_count');
    let count;

    if (!saved) {
      count = this.baseCount + Math.floor(Math.random() * 250);
    } else {
      count = parseInt(saved, 10) + Math.floor(Math.random() * 3) + 1;
    }

    localStorage.setItem('freshfind_visitor_count', count.toString());
    this.render(count);

    // Periodically simulate new organic visitors joining
    setInterval(() => {
      count += 1;
      localStorage.setItem('freshfind_visitor_count', count.toString());
      this.render(count);
    }, 18000);
  }

  render(count) {
    const formatted = count.toString().padStart(6, '0');
    this.container.innerHTML = formatted
      .split('')
      .map(digit => `<span class="odometer-digit-box">${digit}</span>`)
      .join('');
  }
}
