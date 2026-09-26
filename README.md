# FreshFind — Fresh All Along 🌱
### World Tech Championship
- **Category:** Web Innovation Unleashed
- **Theme:** eGreen Basket
- **SRS Version:** 1.0 Compliant
- **Architecture:** Zero-Backend Client-Side Single Page Application (SPA)

---

## 🌟 Overview
**FreshFind** is an award-winning, responsive Single Page Application designed to empower residents and conscious food consumers to discover local farmers markets, check live operating hours, explore peak seasonal produce, and quantify their environmental savings.

---

## 🚀 Key Features

1. **🎬 Cinematic Intro Sequence:**
   - FreshFind World Tech Championship holographic boot screen.
   - Concentric rotating cyber hologram rings with glowing organic core.
   - Dynamic real-time system console logs & live progress bar (0% -> 100%).
   - Interactive **ENTER FRESHFIND EXPERIENCE 🌿** action button & Skip Intro toggle.
   - Synthesized Web Audio API acoustic and futuristic chime triggers.

2. **✨ 3D Hero Motion & Parallax Stage:**
   - High-definition 3D advertising motion video showcasing fresh apples, carrots, and water droplets.
   - Interactive 3D mouse parallax tilt with perspective depth tracking.
   - Floating 3D Produce Badges (3D Tree-Ripened Apple, 100% Organic Soil Carrot, eGreen Shield).
   - Glassmorphic video control bar with Play/Pause toggle and Video Audio Mute/Unmute.
   - Real-time synchronized clock with ticking radar status.
   - Animated digital odometer visitor counter.
   - Prominent **Quick Find** search prompt by neighborhood, day, and produce.
   - Organic biophilic glassmorphism design system with dark & light theme toggle.

2. **📍 Market Directory & Interactive Map:**
   - 3-way instant filtering (Neighborhood Area, Day of the Week, Produce Category).
   - "Open Right Now" live filter comparing current system time with market hours.
   - Multi-criteria sorting (Nearest Proximity, Rating, Alphabetical A-Z/Z-A).
   - Dual view toggle: **Card Grid View** & **Interactive Leaflet.js Map View** with custom pins.

3. **🏬 Comprehensive Market Detail Modal:**
   - Weekly operating schedule table with dynamic **Current Day & Active Hours** highlighting.
   - Typical produce available grid with direct links to produce details.
   - Interactive geographic location map with directions link.
   - Local grower spotlight and accessibility amenities.

4. **🥕 Produce Guide & Seasonal Calendar:**
   - Browsable catalogue across 5 categories (Fruits, Vegetables, Herbs, Dairy & Eggs, Honey).
   - Nutritional benefits, home storage guidelines, and peak months.
   - Interactive 4-season agricultural wheel (Spring, Summer, Autumn, Winter) with chef tips.

5. **🤖 FreshBot AI Assistant:**
   - Floating widget with unread notification ping beacon.
   - Natural language rule-based keyword matching loaded from `data/chatbot.json`.
   - Suggested quick reply prompt chips and direct deep links.
   - Integrated **Voice Assistant** (Speech-to-Text Microphone + Text-to-Speech Audio Readout).

6. **🔖 Personal Itinerary Bookmarks & Export:**
   - One-click favoriting of markets and produce items.
   - Personal shopping notes attached to bookmarked items.
   - **Formatted Export**: Print-ready PDF stylesheet layout, downloadable `.txt` shopping list, and social sharing.

7. **🌿 Futuristic "eGreen Basket" Innovation:**
   - Interactive **Food Miles & Carbon Savings Calculator** calculating annual CO2 and plastic reductions.

---

## 💻 Quick Start & Installation

Run any local web server from the project directory:

```bash
# Using Python 3:
python -m http.server 3000

# OR using Node.js:
npx serve . -p 3000
```

Then visit:
```
http://localhost:3000
```

---

## 📁 Project Structure

```
GLOBAL CHALLENGE/
├── index.html                      # Master semantic HTML5 SPA
├── css/
│   ├── main.css                    # Design tokens & biophilic variables
│   ├── components.css              # Cards, tables, modals, chatbot, drawers
│   ├── animations.css              # Keyframes, pulse beacons, odometer
│   └── responsive.css              # Mobile, tablet & print export styles
├── js/
│   ├── app.js                      # Application orchestrator & router
│   ├── dataService.js              # JSON dataset loader & real-time clock parser
│   ├── audioManager.js             # Web Audio API organic sound synthesizer
│   ├── visitorCounter.js           # Animated odometer visitor counter
│   └── components/
│       ├── header.js               # Header, clock, theme toggle, sound toggle
│       ├── marketDirectory.js      # Filterable directory & Leaflet map
│       ├── marketDetail.js         # Weekly schedule table & produce grid
│       ├── produceGuide.js         # Category filters & seasonal calendar
│       ├── chatbot.js              # FreshBot AI & Web Speech API
│       ├── bookmarks.js            # Itinerary notes, print & text export
│       ├── ecoCalculator.js        # Carbon & food miles calculator
│       └── contactAbout.js         # Contact validation & HQ map
├── data/
│   ├── markets.json                # Detailed farmers markets dataset
│   ├── produce.json                # Seasonal produce & nutrition dataset
│   ├── chatbot.json                # Intents, keywords, & quick replies
│   └── seasonal.json               # Agricultural calendar & eco metrics
└── documentation/
    └── TechWiz_Report.md           # Project Report (DFD, Flowcharts, 15 Test Cases)
```

---

## 📋 Project Deliverables
The complete project documentation report is located in [`documentation/TechWiz_Report.md`](file:///c:/Users/RB%20Tech/OneDrive/Desktop/GLOBAL%20CHALLENGE/documentation/TechWiz_Report.md), covering:
- Problem Definition
- Level 0 and Level 1 Data Flow Diagrams (DFD)
- Process Flowcharts for Core Activities
- 15 Comprehensive Test Cases (100% Passed)
- Installation and Demonstration Guide
