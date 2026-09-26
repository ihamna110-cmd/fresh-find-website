import { fallbackMarkets, fallbackProduce, fallbackChatbot, fallbackSeasonal } from './fallbackData.js';

/**
 * FreshFind - Data Service Layer
 * Loads and coordinates market, produce, chatbot, and seasonal datasets.
 */
class DataService {
  constructor() {
    this.markets = fallbackMarkets || [];
    this.produce = fallbackProduce || [];
    this.chatbotData = fallbackChatbot || null;
    this.seasonalData = fallbackSeasonal || null;
    this.userLocation = null;
  }

  async loadAll() {
    try {
      const [marketsRes, produceRes, chatRes, seasonRes] = await Promise.all([
        fetch('data/markets.json'),
        fetch('data/produce.json'),
        fetch('data/chatbot.json'),
        fetch('data/seasonal.json')
      ]);

      this.markets = await marketsRes.json();
      this.produce = await produceRes.json();
      this.chatbotData = await chatRes.json();
      this.seasonalData = await seasonRes.json();
    } catch (err) {
      console.warn('Network fetch unavailable (e.g. running from file://), using high-speed offline datasets:', err);
      this.markets = fallbackMarkets;
      this.produce = fallbackProduce;
      this.chatbotData = fallbackChatbot;
      this.seasonalData = fallbackSeasonal;
    }

    return {
      markets: this.markets,
      produce: this.produce,
      chatbot: this.chatbotData,
      seasonal: this.seasonalData
    };
  }

  getMarkets() {
    return this.markets;
  }

  getMarketById(id) {
    if (!id) return null;
    return this.markets.find(m => String(m.id) === String(id));
  }

  getProduce() {
    return this.produce;
  }

  getProduceById(id) {
    if (!id) return null;
    return this.produce.find(p => String(p.id) === String(id));
  }

  getSeasonalData() {
    return this.seasonalData;
  }

  getChatbotData() {
    return this.chatbotData;
  }

  /**
   * Evaluates if a given market is open right now based on day and time.
   */
  isMarketOpenNow(market) {
    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[now.getDay()];

    const schedule = market.weeklySchedule[currentDay];
    if (!schedule || schedule.toLowerCase() === 'closed') {
      return false;
    }

    // Example format: "08:00 AM - 02:00 PM"
    const match = schedule.match(/(\d{1,2}):(\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (!match) return false;

    let [_, startH, startM, startP, endH, endM, endP] = match;
    startH = parseInt(startH, 10);
    startM = parseInt(startM, 10);
    endH = parseInt(endH, 10);
    endM = parseInt(endM, 10);

    if (startP.toUpperCase() === 'PM' && startH !== 12) startH += 12;
    if (startP.toUpperCase() === 'AM' && startH === 12) startH = 0;
    if (endP.toUpperCase() === 'PM' && endH !== 12) endH += 12;
    if (endP.toUpperCase() === 'AM' && endH === 12) endH = 0;

    const startMinutes = startH * 60 + startM;
    const endMinutes = endH * 60 + endM;
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
  }

  /**
   * Distance calculation via Haversine formula (Miles)
   */
  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3958.8; // Radius of Earth in miles
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
  }

  setUserLocation(lat, lng) {
    this.userLocation = { lat, lng };
  }

  getUserLocation() {
    return this.userLocation || { lat: 34.0522, lng: -118.2437 }; // Default Central Downtown
  }
}

export const dataService = new DataService();
