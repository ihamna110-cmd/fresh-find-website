/**
 * FreshFind - Universal Production Bundle (Index)
 * Supports both http:// and local file:/// protocol without CORS restriction
 */
(function() {
  if (window.__FRESHFIND_MAIN_BUNDLE_LOADED__) return;
  window.__FRESHFIND_MAIN_BUNDLE_LOADED__ = true;

/* === [Module: fallbackData.js] === */
// Auto-generated fallback data for seamless zero-backend & offline file:// execution
const fallbackMarkets = [
  {
    "id": "mkt-1",
    "name": "Green Valley Organic Harvest Market",
    "tagline": "Pristine farm-fresh produce directly from local sustainable growers",
    "area": "Downtown Green District",
    "address": "450 Organic Boulevard, Central Green Square, Downtown",
    "lat": 34.0522,
    "lng": -118.2437,
    "rating": 4.9,
    "reviewCount": 142,
    "image": "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80",
    "shortDescription": "Award-winning downtown market featuring over 40 certified organic local family farms with seasonal fruits, greens, and artisan bread.",
    "longDescription": "Green Valley Organic Harvest Market is the city's premier weekend gathering for health-conscious food lovers. Established in 2012, this vibrant market hosts over 40 generational family farmers who practice 100% pesticide-free, regenerative agriculture. Visitors enjoy live acoustic music, fresh-squeezed organic juices, and interactive seasonal tastings.",
    "days": ["Saturday", "Sunday"],
    "hours": "08:00 AM - 02:00 PM",
    "weeklySchedule": {
      "Monday": "Closed",
      "Tuesday": "Closed",
      "Wednesday": "Closed",
      "Thursday": "Closed",
      "Friday": "Closed",
      "Saturday": "08:00 AM - 02:00 PM",
      "Sunday": "08:00 AM - 02:00 PM"
    },
    "produceTypes": ["Fruits", "Vegetables", "Herbs", "Dairy & Eggs", "Artisan Bakery"],
    "featuredProducts": ["Organic Heirloom Tomatoes", "Crisp Honeycrisp Apples", "Wild Mountain Honey", "Pasture-Raised Eggs", "Artisan Sourdough"],
    "amenities": ["Wheelchair Accessible", "Pet Friendly", "Card & Digital Pay", "EV Charging", "Free Bicycle Parking"],
    "contact": {
      "phone": "+1 (555) 234-8901",
      "email": "contact@greenvalleymarket.org",
      "website": "https://greenvalleyorganic.org"
    },
    "farmerProfiles": [
      { "name": "Elena Vance", "farm": "Sunlit Valley Orchard", "specialty": "Apples & Stone Fruits" },
      { "name": "Marcus Chen", "farm": "Verdant Roots Co-op", "specialty": "Hydroponic Greens & Microgreens" }
    ]
  },
  {
    "id": "mkt-2",
    "name": "Riverfront Artisanal Farmers Market",
    "tagline": "Scenic riverwalk shopping with artisanal dairy and heirloom crops",
    "area": "Riverside Promenade",
    "address": "120 Riverside Esplanade, Riverwalk Pier 4",
    "lat": 34.0560,
    "lng": -118.2580,
    "rating": 4.8,
    "reviewCount": 98,
    "image": "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80",
    "shortDescription": "Stroll alongside the calm riverbanks while shopping for goat cheeses, seasonal berries, raw wildflower honey, and wild-harvested teas.",
    "longDescription": "Situated along the scenic Riverwalk, this lively market combines artisanal food crafting with community spirit. Renowned for its dairy artisans, European-style bread bakers, and farm-fresh berries, the Riverfront Market provides panoramic waterfront views and interactive cooking workshops every Sunday morning.",
    "days": ["Sunday", "Wednesday"],
    "hours": "09:00 AM - 03:00 PM",
    "weeklySchedule": {
      "Monday": "Closed",
      "Tuesday": "Closed",
      "Wednesday": "09:00 AM - 03:00 PM",
      "Thursday": "Closed",
      "Friday": "Closed",
      "Saturday": "Closed",
      "Sunday": "09:00 AM - 03:00 PM"
    },
    "produceTypes": ["Fruits", "Dairy & Eggs", "Herbs", "Artisan Bakery", "Honey & Preserves"],
    "featuredProducts": ["Handcrafted Goat Cheeses", "Organic Blueberries", "Lavender Bundles", "Clover Honey", "Herb Focaccia"],
    "amenities": ["Riverfront Seating", "Live Music", "Restrooms Available", "Card & Digital Pay"],
    "contact": {
      "phone": "+1 (555) 872-4411",
      "email": "hello@riverfrontmarket.com",
      "website": "https://riverfrontmarket.com"
    },
    "farmerProfiles": [
      { "name": "Matteo Bianchi", "farm": "Cascada Alpine Goat Dairy", "specialty": "Aged Cheeses & Yogurt" },
      { "name": "Sofia Lind", "farm": "River Mist Herbs", "specialty": "Fresh Basil, Rosemary & Culinary Herbs" }
    ]
  },
  {
    "id": "mkt-3",
    "name": "Suncrest Morning Community Market",
    "tagline": "Early sunrise harvests for the neighborhood morning crowd",
    "area": "North Hills",
    "address": "880 Suncrest Peak Road, North Hills Plaza",
    "lat": 34.0720,
    "lng": -118.2300,
    "rating": 4.7,
    "reviewCount": 76,
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    "shortDescription": "A friendly neighborhood gathering featuring early-morning harvested leafy greens, citrus delights, and freshly baked whole-grain pastries.",
    "longDescription": "Suncrest Market opens early so neighborhood families and fitness enthusiasts can purchase crops harvested just hours prior at dawn. Featuring a dedicated kids' gardening booth, cold-pressed citrus juice bars, and master gardener Q&A stations.",
    "days": ["Tuesday", "Thursday", "Saturday"],
    "hours": "07:30 AM - 01:00 PM",
    "weeklySchedule": {
      "Monday": "Closed",
      "Tuesday": "07:30 AM - 01:00 PM",
      "Wednesday": "Closed",
      "Thursday": "07:30 AM - 01:00 PM",
      "Friday": "Closed",
      "Saturday": "07:30 AM - 01:00 PM",
      "Sunday": "Closed"
    },
    "produceTypes": ["Vegetables", "Fruits", "Artisan Bakery", "Juices"],
    "featuredProducts": ["Crisp Baby Spinach", "Valencia Oranges", "Golden Carrots", "Multigrain Boules", "Cold-Pressed Beet Juice"],
    "amenities": ["Dog Friendly", "Playground Adjacent", "On-site Coffee", "Card & Digital Pay"],
    "contact": {
      "phone": "+1 (555) 439-0021",
      "email": "suncrestfarmers@gmail.com",
      "website": "https://suncrestmarket.org"
    },
    "farmerProfiles": [
      { "name": "David Morales", "farm": "Highland Citrus Groves", "specialty": "Navel & Blood Oranges" }
    ]
  },
  {
    "id": "mkt-4",
    "name": "Emerald Meadows Eco-Village Market",
    "tagline": "Zero-waste, 100% bio-dynamic agricultural wonderland",
    "area": "Westside Greenbelt",
    "address": "710 Meadowlark Avenue, Westside Eco Commons",
    "lat": 34.0410,
    "lng": -118.2710,
    "rating": 4.95,
    "reviewCount": 210,
    "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
    "shortDescription": "Pioneering zero-waste eco-market with bio-dynamic root vegetables, edible flowers, heritage grains, and composting drop-offs.",
    "longDescription": "Emerald Meadows is a nationally acclaimed model for ecological community markets. Every stall operates with zero single-use plastics, packaging is 100% biodegradable or reusable, and all produce is bio-dynamically certified. Features community compost collection, heirloom seed swap tables, and solar-powered food stands.",
    "days": ["Friday", "Saturday"],
    "hours": "08:30 AM - 02:30 PM",
    "weeklySchedule": {
      "Monday": "Closed",
      "Tuesday": "Closed",
      "Wednesday": "Closed",
      "Thursday": "Closed",
      "Friday": "08:30 AM - 02:30 PM",
      "Saturday": "08:30 AM - 02:30 PM",
      "Sunday": "Closed"
    },
    "produceTypes": ["Vegetables", "Herbs", "Grains & Pulses", "Honey & Preserves"],
    "featuredProducts": ["Rainbow Chard", "Heritage Red Wheat", "Edible Nasturtium Flowers", "Raw Royal Jelly", "Kombucha On Tap"],
    "amenities": ["Zero-Waste Certified", "Compost Hub", "Bicycle Repair Station", "Wheelchair Accessible"],
    "contact": {
      "phone": "+1 (555) 912-7744",
      "email": "info@emeraldmeadows.eco",
      "website": "https://emeraldmeadows.eco"
    },
    "farmerProfiles": [
      { "name": "Claire Dupont", "farm": "Terre Vivante Biodynamic Farm", "specialty": "Heirloom Root Crops & Microgreens" },
      { "name": "Tariq Al-Mansoor", "farm": "Golden Apiary", "specialty": "Raw Monofloral Honey" }
    ]
  },
  {
    "id": "mkt-5",
    "name": "Oakridge Twilight Farmers Market",
    "tagline": "Evening street market with fresh evening harvests and local cuisine",
    "area": "Oakridge District",
    "address": "304 Old Forest Way, Oakridge Historic Square",
    "lat": 34.0615,
    "lng": -118.2350,
    "rating": 4.65,
    "reviewCount": 84,
    "image": "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80",
    "shortDescription": "Atmospheric evening market with fairy lights, dusk-picked vegetables, gourmet mushrooms, woodfired artisan pizza, and live folk music.",
    "longDescription": "Designed specifically for working professionals and night owls who cannot make early morning weekend markets. Oakridge Twilight brings together exotic mushroom foragers, micro-creamery butter makers, craft bakers, and evening vegetable harvesters under charming string lights.",
    "days": ["Wednesday", "Friday"],
    "hours": "04:00 PM - 08:30 PM",
    "weeklySchedule": {
      "Monday": "Closed",
      "Tuesday": "Closed",
      "Wednesday": "04:00 PM - 08:30 PM",
      "Thursday": "Closed",
      "Friday": "04:00 PM - 08:30 PM",
      "Saturday": "Closed",
      "Sunday": "Closed"
    },
    "produceTypes": ["Vegetables", "Herbs", "Mushrooms", "Dairy & Eggs", "Artisan Bakery"],
    "featuredProducts": ["Lion's Mane & Shiitake Mushrooms", "Cultured Farmhouse Butter", "Tuscan Kale", "Focaccia Barese"],
    "amenities": ["Evening Lighting", "Heated Dining Pavilions", "Wine & Cider Tasting", "Live Music"],
    "contact": {
      "phone": "+1 (555) 789-3320",
      "email": "twilight@oakridgemarket.com",
      "website": "https://oakridgemarket.com"
    },
    "farmerProfiles": [
      { "name": "Oliver Sterling", "farm": "Fungal Forest Cultivators", "specialty": "Specialty Culinary & Medicinal Mushrooms" }
    ]
  },
  {
    "id": "mkt-6",
    "name": "Harbor Breeze Coastal Produce Exchange",
    "tagline": "Ocean breezes, coastal citrus, organic berries, and seaweed organics",
    "area": "Bayview Harbor",
    "address": "55 Pelican Wharf, Bayview Marina Boardwalk",
    "lat": 34.0320,
    "lng": -118.2840,
    "rating": 4.85,
    "reviewCount": 115,
    "image": "https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=800&q=80",
    "shortDescription": "Savor the refreshing ocean breeze while browsing coastal strawberries, Meyer lemons, organic avocados, and ocean-mineral sea salts.",
    "longDescription": "Set against the sparkling marina, Harbor Breeze Exchange celebrates maritime micro-climates. Coastal berries grown in sandy loam soils taste remarkably sweeter, and local certified foragers offer edible seaweeds, Meyer lemons, and cold-pressed olive oils.",
    "days": ["Sunday"],
    "hours": "08:00 AM - 01:30 PM",
    "weeklySchedule": {
      "Monday": "Closed",
      "Tuesday": "Closed",
      "Wednesday": "Closed",
      "Thursday": "Closed",
      "Friday": "Closed",
      "Saturday": "Closed",
      "Sunday": "08:00 AM - 01:30 PM"
    },
    "produceTypes": ["Fruits", "Vegetables", "Herbs", "Specialty Salts & Oils"],
    "featuredProducts": ["Sweet Coastal Strawberries", "Hass Avocados", "Meyer Lemons", "Smoked Sea Salt", "Extra Virgin Olive Oil"],
    "amenities": ["Waterfront Walkway", "Boat Dock Access", "Pet Friendly", "Seafood Safety Certified"],
    "contact": {
      "phone": "+1 (555) 670-9988",
      "email": "crew@harborbreezemarket.org",
      "website": "https://harborbreezemarket.org"
    },
    "farmerProfiles": [
      { "name": "Maya Lin", "farm": "Coastal Crest Berry Ranch", "specialty": "Albion Strawberries & Blackberries" }
    ]
  },
  {
    "id": "mkt-7",
    "name": "Heritage Valley Agricultural Fair & Market",
    "tagline": "Celebrating heirloom seed varieties and antique orchard treasures",
    "area": "Heritage District",
    "address": "900 Pioneer Heritage Way, Historic Old Barn Grounds",
    "lat": 34.0780,
    "lng": -118.2520,
    "rating": 4.9,
    "reviewCount": 160,
    "image": "https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&w=800&q=80",
    "shortDescription": "Step back in agricultural heritage with 18th-century apple varieties, purple carrots, heirloom pumpkins, and stone-ground heritage grits.",
    "longDescription": "Dedicated to biodiversity and saving near-extinct food varieties. Heritage Valley brings together heritage crop preservationists, antique apple orchardists, and traditional cheese masters. Kids love the heritage chicken coop and apple pressing demonstrations.",
    "days": ["Saturday"],
    "hours": "08:00 AM - 02:00 PM",
    "weeklySchedule": {
      "Monday": "Closed",
      "Tuesday": "Closed",
      "Wednesday": "Closed",
      "Thursday": "Closed",
      "Friday": "Closed",
      "Saturday": "08:00 AM - 02:00 PM",
      "Sunday": "Closed"
    },
    "produceTypes": ["Fruits", "Vegetables", "Grains & Pulses", "Dairy & Eggs"],
    "featuredProducts": ["Cox's Orange Pippin Apples", "Black Beauty Eggplants", "Cherokee Purple Tomatoes", "Stone-ground Cornmeal"],
    "amenities": ["Historical Tours", "Seed Bank Exhibit", "Free Parking Lot", "Handicap Accessible"],
    "contact": {
      "phone": "+1 (555) 321-7654",
      "email": "heritagefair@valleymarkets.org",
      "website": "https://heritagevalleymarket.org"
    },
    "farmerProfiles": [
      { "name": "Arthur Pendelton", "farm": "Ancestral Orchardists", "specialty": "Rare & Ancient Apple Varieties" }
    ]
  },
  {
    "id": "mkt-8",
    "name": "Midtown Urban Sprouts Community Market",
    "tagline": "Rooftop agriculture and vertical hydroponic fresh harvests",
    "area": "Midtown Central",
    "address": "210 Metro Central Concourse, Pavilion Plaza",
    "lat": 34.0480,
    "lng": -118.2510,
    "rating": 4.75,
    "reviewCount": 92,
    "image": "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?auto=format&fit=crop&w=800&q=80",
    "shortDescription": "Innovative urban agriculture hub showcasing vertical microgreens, rooftop honey, aeroponic strawberries, and crisp salad greens.",
    "longDescription": "Located in the heart of the tech & financial district, Midtown Urban Sprouts connects high-density urban residents with modern urban farms operating within 10 miles of city center. Perfect for a quick healthy lunchtime pickup or weekday evening pantry stocking.",
    "days": ["Monday", "Thursday"],
    "hours": "11:00 AM - 04:30 PM",
    "weeklySchedule": {
      "Monday": "11:00 AM - 04:30 PM",
      "Tuesday": "Closed",
      "Wednesday": "Closed",
      "Thursday": "11:00 AM - 04:30 PM",
      "Friday": "Closed",
      "Saturday": "Closed",
      "Sunday": "Closed"
    },
    "produceTypes": ["Vegetables", "Herbs", "Honey & Preserves", "Juices"],
    "featuredProducts": ["Spicy Radish Microgreens", "Aeroponic Butterhead Lettuce", "Rooftop Blossom Honey", "Wheatgrass Shots"],
    "amenities": ["Subway Connected", "Contactless Tap-to-Pay", "Express Grab Bags"],
    "contact": {
      "phone": "+1 (555) 888-2040",
      "email": "midtownsprouts@urbanfarm.io",
      "website": "https://midtownsprouts.io"
    },
    "farmerProfiles": [
      { "name": "Zara Khan", "farm": "Skyline Hydroponics", "specialty": "Crisp Salads & Fresh Micro-Herbs" }
    ]
  }
]
;
const fallbackProduce = [
  {
    "id": "prod-1",
    "name": "Heirloom Brandywine Tomatoes",
    "category": "Vegetables",
    "icon": "🍅",
    "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Summer",
      "Autumn"
    ],
    "peakMonths": [
      "July",
      "August",
      "September",
      "October"
    ],
    "description": "Prized for an incomparable rich, wine-sweet flavor and deep pink-red ribbed flesh. Grown from 19th-century heirloom seeds with zero genetic modification.",
    "nutrition": "High in Lycopene, Vitamin C, Potassium, and Vitamin K1. Great for heart health and glowing skin.",
    "storageTip": "Store stem-down at room temperature. Never refrigerate before slicing to preserve fragrant aromatic oils.",
    "availableMarkets": [
      "mkt-1",
      "mkt-4",
      "mkt-7"
    ]
  },
  {
    "id": "prod-2",
    "name": "Organic Honeycrisp Apples",
    "category": "Fruits",
    "icon": "🍎",
    "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Autumn",
      "Winter"
    ],
    "peakMonths": [
      "September",
      "October",
      "November",
      "December"
    ],
    "description": "Explosively crisp and juicy with a balanced honey-sweet and tart bite. Tree-ripened in high-altitude family orchards.",
    "nutrition": "Rich in dietary pectin fiber, Vitamin C, and polyphenols that assist digestion and reduce inflammation.",
    "storageTip": "Keep in the crisper drawer of your refrigerator at 32-35°F for maximum crunch lasting up to 6 weeks.",
    "availableMarkets": [
      "mkt-1",
      "mkt-7",
      "mkt-3"
    ]
  },
  {
    "id": "prod-3",
    "name": "Tuscan Lacinato Dinosaur Kale",
    "category": "Vegetables",
    "icon": "🥬",
    "image": "assets/images/tuscan_kale.jpg",
    "season": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "peakMonths": [
      "October",
      "November",
      "December",
      "January",
      "February",
      "March"
    ],
    "description": "Dark blue-green embossed leaves with a sweeter, more tender taste than curly kale. Becomes even sweeter after light frost.",
    "nutrition": "Powerhouse of Vitamins A, C, and K, iron, and glucosinolates that support cellular detoxification.",
    "storageTip": "Wrap stems in a moist cloth towel and store in an airtight container or reusable silicone bag.",
    "availableMarkets": [
      "mkt-1",
      "mkt-4",
      "mkt-5",
      "mkt-8"
    ]
  },
  {
    "id": "prod-4",
    "name": "Wild Spring Wildflower Honey",
    "category": "Honey & Preserves",
    "icon": "🍯",
    "image": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Spring",
      "Summer"
    ],
    "peakMonths": [
      "April",
      "May",
      "June",
      "July"
    ],
    "description": "100% unheated, unfiltered raw honey gathered by local bees foraging on wildflower blossoms and clover.",
    "nutrition": "Contains active enzymes, bee pollen, propolis, and natural antioxidants with anti-bacterial benefits.",
    "storageTip": "Keep sealed at room temperature in a dry pantry. If natural crystallization occurs, gently warm in a warm water bath.",
    "availableMarkets": [
      "mkt-1",
      "mkt-2",
      "mkt-4",
      "mkt-8"
    ]
  },
  {
    "id": "prod-5",
    "name": "Artisan Goat Cheese Chèvre",
    "category": "Dairy & Eggs",
    "icon": "🧀",
    "image": "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "peakMonths": [
      "Year-round"
    ],
    "description": "Velvety, mild, and creamy goat log infused with fresh garden rosemary and cracked pink peppercorns.",
    "nutrition": "Easier to digest A2 protein structure, lower in lactose, packed with bioavailable calcium and healthy fatty acids.",
    "storageTip": "Wrap in wax or parchment paper rather than plastic wrap to allow the cheese rind to breathe.",
    "availableMarkets": [
      "mkt-1",
      "mkt-2",
      "mkt-5"
    ]
  },
  {
    "id": "prod-6",
    "name": "Sweet Coastal Albion Strawberries",
    "category": "Fruits",
    "icon": "🍓",
    "image": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Spring",
      "Summer"
    ],
    "peakMonths": [
      "April",
      "May",
      "June",
      "July",
      "August"
    ],
    "description": "Deep red to the core, picked at peak sugar ripeness just hours before market opening. Unmatched aroma and candy sweetness.",
    "nutrition": "One serving delivers over 140% daily Vitamin C, manganese, and anthocyanin antioxidants.",
    "storageTip": "Do not wash until immediately before eating. Store in single layers lined with paper towels.",
    "availableMarkets": [
      "mkt-2",
      "mkt-6",
      "mkt-8"
    ]
  },
  {
    "id": "prod-7",
    "name": "Sweet Italian Genovese Basil",
    "category": "Herbs",
    "icon": "🌿",
    "image": "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Spring",
      "Summer"
    ],
    "peakMonths": [
      "May",
      "June",
      "July",
      "August",
      "September"
    ],
    "description": "Aromatic lush green leaves essential for traditional pesto, Caprese salads, and woodfired rustic pizzas.",
    "nutrition": "High in eugenol essential oils, Vitamin K, beta-carotene, and natural anti-inflammatory compounds.",
    "storageTip": "Trim stem bottoms and place like a bouquet in a glass of water on your counter at room temperature.",
    "availableMarkets": [
      "mkt-1",
      "mkt-2",
      "mkt-4",
      "mkt-5",
      "mkt-8"
    ]
  },
  {
    "id": "prod-8",
    "name": "Organic Pasture-Raised Golden Eggs",
    "category": "Dairy & Eggs",
    "icon": "🥚",
    "image": "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "peakMonths": [
      "Year-round"
    ],
    "description": "Laid by heritage hens roaming freely on open clover pastures. Deep amber yolks rich with natural omega-3s.",
    "nutrition": "Double the Vitamin E and 3x more Omega-3 fatty acids than conventional eggs, complete protein source.",
    "storageTip": "Keep inside carton on the center shelf of refrigerator, not the door, for consistent temperature.",
    "availableMarkets": [
      "mkt-1",
      "mkt-3",
      "mkt-7",
      "mkt-5"
    ]
  },
  {
    "id": "prod-9",
    "name": "Heirloom Rainbow Carrots",
    "category": "Vegetables",
    "icon": "🥕",
    "image": "assets/images/rainbow_carrots.jpg",
    "season": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "peakMonths": [
      "October",
      "November",
      "December",
      "January",
      "February"
    ],
    "description": "Stunning bunch of purple, sunshine yellow, deep orange, and white carrots with tender sweet crunch.",
    "nutrition": "Dense in lutein, beta-carotene, and anthocyanins that sharpen eyesight and support cardiovascular immunity.",
    "storageTip": "Remove green tops immediately (greens draw moisture from root) and store submerged in water or sealed bag.",
    "availableMarkets": [
      "mkt-3",
      "mkt-4",
      "mkt-7"
    ]
  },
  {
    "id": "prod-10",
    "name": "Hass Avocados (Tree-Matured)",
    "category": "Fruits",
    "icon": "🥑",
    "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Spring",
      "Summer"
    ],
    "peakMonths": [
      "March",
      "April",
      "May",
      "June",
      "July"
    ],
    "description": "Buttery, nutty, rich avocados left on coastal trees until maximum oil content is achieved.",
    "nutrition": "Monounsaturated oleic acid fats, folate, more potassium than bananas, soluble fiber.",
    "storageTip": "Ripen on counter until yielding to gentle thumb pressure. Once ripe, refrigerate to suspend further softening.",
    "availableMarkets": [
      "mkt-6",
      "mkt-1",
      "mkt-8"
    ]
  },
  {
    "id": "prod-11",
    "name": "Gourmet Foraged Lion's Mane Mushrooms",
    "category": "Vegetables",
    "icon": "🍄",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Autumn",
      "Winter"
    ],
    "peakMonths": [
      "September",
      "October",
      "November",
      "December"
    ],
    "description": "Spectacular cascading white icicle mushrooms with a succulent texture reminiscent of lobster and crab meat.",
    "nutrition": "Renowned for neuroprotective erinacines and hericenones that promote memory focus and NGF synthesis.",
    "storageTip": "Store in a breathable brown paper bag in your refrigerator vegetable drawer. Never seal in plastic.",
    "availableMarkets": [
      "mkt-5",
      "mkt-1",
      "mkt-4"
    ]
  },
  {
    "id": "prod-12",
    "name": "Golden Meyer Lemons",
    "category": "Fruits",
    "icon": "🍋",
    "image": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Winter",
      "Spring"
    ],
    "peakMonths": [
      "December",
      "January",
      "February",
      "March",
      "April"
    ],
    "description": "A cross between a traditional lemon and a mandarin orange. Thinner peel, sweeter floral aroma, and low acidity.",
    "nutrition": "Superior bioflavonoids, Vitamin C, citric acid aiding mineral absorption and alkaline body balance.",
    "storageTip": "Room temperature for 1 week or inside a sealed zip bag in the fridge for up to 4 weeks.",
    "availableMarkets": [
      "mkt-3",
      "mkt-6"
    ]
  },
  {
    "id": "prod-13",
    "name": "Golden Grass-Fed Artisan Butter",
    "category": "Dairy & Eggs",
    "icon": "🧈",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "peakMonths": [
      "Year-round"
    ],
    "description": "Slow-churned from cultured cream of pasture-raised Jersey cows. Rich golden hue, 84% butterfat with delicate sea salt flakes.",
    "nutrition": "Rich in CLA, Vitamin A, Vitamin K2 (MK-4), and butyrate for metabolic vitality.",
    "storageTip": "Store wrapped in greaseproof butter paper. Keep butter bell at room temp for daily spreading.",
    "availableMarkets": [
      "mkt-1",
      "mkt-2",
      "mkt-5"
    ]
  },
  {
    "id": "prod-14",
    "name": "Farmhouse Greek Yogurt & Raw Milk",
    "category": "Dairy & Eggs",
    "icon": "🥛",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "peakMonths": [
      "Year-round"
    ],
    "description": "Traditional small-batch strained whole milk Greek yogurt with thick velvety consistency and live active probiotic cultures.",
    "nutrition": "High protein, calcium, live Lactobacillus and Bifidobacterium cultures for microbiome health.",
    "storageTip": "Refrigerate at 36-39°F. Consume within 10 days of opening for peak probiotic potency.",
    "availableMarkets": [
      "mkt-1",
      "mkt-4",
      "mkt-7"
    ]
  },
  {
    "id": "prod-15",
    "name": "Pure Mountain Raw Acacia Honeycomb",
    "category": "Honey & Preserves",
    "icon": "🐝",
    "image": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Spring",
      "Summer"
    ],
    "peakMonths": [
      "May",
      "June",
      "July",
      "August"
    ],
    "description": "Intact virgin beeswax comb filled with delicate, slow-crystallizing light amber nectar collected from mountain acacia groves.",
    "nutrition": "Naturally anti-microbial enzymes, royal jelly traces, pollen, antioxidant pinocembrin.",
    "storageTip": "Keep at room temperature in sealed container. Cut squares straight onto warm toast or cheese boards.",
    "availableMarkets": [
      "mkt-2",
      "mkt-3",
      "mkt-8"
    ]
  },
  {
    "id": "prod-16",
    "name": "Wild Mountain Blackberry Artisan Jam",
    "category": "Honey & Preserves",
    "icon": "🫐",
    "image": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Summer",
      "Autumn"
    ],
    "peakMonths": [
      "July",
      "August",
      "September"
    ],
    "description": "Kettle-cooked in copper pans using wild-foraged mountain blackberries, organic lemon juice, and pure cane sugar with no artificial pectin.",
    "nutrition": "Packed with anthocyanins, dietary fiber, Vitamin C, and natural fruit pectin.",
    "storageTip": "Refrigerate after opening and enjoy within 6 weeks for optimal vibrant berry flavor.",
    "availableMarkets": [
      "mkt-1",
      "mkt-3",
      "mkt-6"
    ]
  },
  {
    "id": "prod-17",
    "name": "Sun-Ripened Fig & Orange Blossom Marmalade",
    "category": "Honey & Preserves",
    "icon": "🍊",
    "image": "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Autumn",
      "Winter"
    ],
    "peakMonths": [
      "September",
      "October",
      "November",
      "December"
    ],
    "description": "Rich Mediterranean Mission figs simmered with thin-cut citrus peels and aromatic orange blossom water.",
    "nutrition": "High in dietary polyphenols, potassium, calcium, and natural prebiotic fiber.",
    "storageTip": "Keep in a cool dry pantry before opening; store chilled once opened.",
    "availableMarkets": [
      "mkt-2",
      "mkt-4",
      "mkt-7"
    ]
  },
  {
    "id": "prod-18",
    "name": "Organic Fragrant French Lavender",
    "category": "Herbs",
    "icon": "🪻",
    "image": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Spring",
      "Summer"
    ],
    "peakMonths": [
      "June",
      "July",
      "August"
    ],
    "description": "Culinary-grade angustifolia lavender hand-harvested at morning dew. Delivers sweet floral notes to pastries, teas, and syrups.",
    "nutrition": "Linalool and linalyl acetate terpenes that naturally promote relaxation and sleep quality.",
    "storageTip": "Hang upside down in a dark, dry space for preservation or store in an airtight glass jar.",
    "availableMarkets": [
      "mkt-1",
      "mkt-5",
      "mkt-8"
    ]
  },
  {
    "id": "prod-19",
    "name": "Fresh Garden Rosemary & Wild Thyme",
    "category": "Herbs",
    "icon": "🌿",
    "image": "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "peakMonths": [
      "Year-round"
    ],
    "description": "Robust woody sprigs of mountain rosemary and creeping wild thyme picked fresh with intense resinous and savory aroma.",
    "nutrition": "High concentration of rosmarinic acid, carnosic acid, and thymol with strong antioxidant activity.",
    "storageTip": "Wrap loosely in damp paper towels inside a reusable silicone bag in the crisper drawer.",
    "availableMarkets": [
      "mkt-2",
      "mkt-4",
      "mkt-6"
    ]
  },
  {
    "id": "prod-20",
    "name": "Crisp Moroccan Peppermint & Spearmint",
    "category": "Herbs",
    "icon": "🍃",
    "image": "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80",
    "season": [
      "Spring",
      "Summer"
    ],
    "peakMonths": [
      "May",
      "June",
      "July",
      "August",
      "September"
    ],
    "description": "Tender bright green mint leaves loaded with pure cooling menthol. Perfect for infused waters, teas, salads, and mocktails.",
    "nutrition": "Antispasmodic menthol compounds that support digestive comfort and respiratory freshness.",
    "storageTip": "Store upright with stems in a jar of cool water on your kitchen windowsill.",
    "availableMarkets": [
      "mkt-1",
      "mkt-3",
      "mkt-5",
      "mkt-7"
    ]
  }
];

const fallbackChatbot = {
  "botName": "FreshBot AI",
  "welcomeMessage": "Hello! I am FreshBot, your intelligent farmers market guide 🌱. Ask me about nearby markets, seasonal produce, operating hours, or click one of the quick suggestions below!",
  "quickReplies": [
    { "label": "Which markets are open today? ⏰", "query": "Which markets are open today?" },
    { "label": "Seasonal produce right now 🍓", "query": "What produce is in season right now?" },
    { "label": "Find organic vegetable markets 🥬", "query": "Where can I find organic vegetables?" },
    { "label": "How to export my bookmarks? 🔖", "query": "How do I export bookmarks and notes?" }
  ],
  "intents": [
    {
      "id": "greeting",
      "keywords": ["hello", "hi", "hey", "assalam", "good morning", "good evening", "greetings", "start", "freshbot"],
      "response": "Hello there! Welcome to FreshFind! 🌿 I can help you locate nearby farmers markets, check operating hours, browse seasonal produce, or calculate your eco footprint. What would you like to explore?",
      "quickReplies": ["Markets open today ⏰", "Produce Guide 🥕", "Calculate Eco Footprint 🌍"]
    },
    {
      "id": "open_today",
      "keywords": ["open today", "open now", "timings", "today", "schedule", "working hours", "open right now"],
      "action": "FILTER_OPEN_TODAY",
      "response": "I've checked our live real-time market schedules! Currently active and scheduled markets are highlighted with our green radar badge. You can view them right now in the directory.",
      "quickReplies": ["View Market Directory 📍", "Weekend markets 📅", "Suncrest Market 🌄"]
    },
    {
      "id": "organic_produce",
      "keywords": ["organic", "pesticide free", "chemical free", "bio dynamic", "healthy", "natural"],
      "action": "FILTER_PRODUCE_ORGANIC",
      "response": "For certified organic and bio-dynamic goods, we highly recommend **Green Valley Organic Harvest Market** (Downtown) and **Emerald Meadows Eco-Village Market** (Westside)! Both prohibit synthetic pesticides and practice regenerative farming.",
      "relatedMarketId": "mkt-1",
      "quickReplies": ["Open Green Valley Details 🏬", "Browse Produce Guide 🥕"]
    },
    {
      "id": "fruits_season",
      "keywords": ["fruit", "fruits", "berries", "strawberry", "apples", "lemon", "avocado", "sweet"],
      "action": "NAVIGATE_PRODUCE_FRUITS",
      "response": "We have amazing fruit selections! Depending on the season, you'll discover **Sweet Coastal Albion Strawberries** at Harbor Breeze, **Honeycrisp Apples** at Green Valley, and tree-matured **Hass Avocados**.",
      "quickReplies": ["Explore All Fruits 🍓", "Harbor Breeze Market 🌊"]
    },
    {
      "id": "vegetables_greens",
      "keywords": ["vegetable", "vegetables", "kale", "tomatoes", "carrots", "mushrooms", "greens", "spinach"],
      "action": "NAVIGATE_PRODUCE_VEG",
      "response": "Looking for crisp greens? Check out **Heirloom Brandywine Tomatoes**, **Tuscan Dinosaur Kale**, and **Lion's Mane Mushrooms**! Grown by local growers and harvested hours before market opening.",
      "quickReplies": ["View Vegetables 🥬", "Find Markets Near Me 📍"]
    },
    {
      "id": "dairy_honey",
      "keywords": ["dairy", "cheese", "eggs", "honey", "milk", "butter", "artisan"],
      "action": "NAVIGATE_PRODUCE_DAIRY",
      "response": "Looking for farmstead dairy and raw honey? **Riverfront Artisanal Market** has handcrafted goat cheese, and **Green Valley Market** offers pasture-raised golden eggs and raw wildflower honey.",
      "quickReplies": ["Riverfront Market 🧀", "View Raw Honey 🍯"]
    },
    {
      "id": "bookmarks_export",
      "keywords": ["bookmark", "favorite", "export", "notes", "save", "print", "share"],
      "action": "OPEN_BOOKMARKS",
      "response": "You can save any market or produce item by tapping the heart icon 💚. In the Bookmarks panel, you can add personal shopping notes and **Export as a formatted printable list or JSON/text file**!",
      "quickReplies": ["Open Bookmarks Panel 🔖", "Export My List 📄"]
    },
    {
      "id": "eco_impact",
      "keywords": ["eco", "carbon", "food miles", "green basket", "sustainable", "co2", "environment", "calculator"],
      "action": "OPEN_ECO_CALC",
      "response": "Shopping at local farmers markets saves an average of **1,450 food transit miles** per meal compared to conventional supermarket chains! Try our interactive **Eco-Impact & Carbon Calculator** to compute your personalized green savings.",
      "quickReplies": ["Launch Eco Calculator 🌍", "Learn About eGreen Basket 🌿"]
    },
    {
      "id": "payment_cards",
      "keywords": ["payment", "card", "cash", "credit card", "apple pay", "digital pay", "tap to pay"],
      "response": "Almost all our featured markets accept credit/debit cards, Apple Pay, Google Pay, and digital tap-to-pay. Many vendors also accept SNAP/EBT tokens at market information booths.",
      "quickReplies": ["Market Directory 📍", "Contact Support ✉"]
    },
    {
      "id": "parking_pets",
      "keywords": ["parking", "pets", "dogs", "car", "subway", "wheelchair", "accessible"],
      "response": "Most markets are pet-friendly (on leashes) and wheelchair accessible! Check the **Amenities** tags on each market card for designated parking lots, subway access, and bicycle valet services.",
      "quickReplies": ["Show Market Directory 📍"]
    },
    {
      "id": "contact_help",
      "keywords": ["contact", "help", "email", "phone", "support", "team", "feedback"],
      "action": "NAVIGATE_CONTACT",
      "response": "Our community support team is here for you! You can reach out through our Contact page, or email us directly at support@freshfind.eco.",
      "quickReplies": ["Go to Contact Page ✉", "About FreshFind Team 👥"]
    },
    {
      "id": "global_challenge",
      "keywords": ["global challenge", "freshfind", "first position", "1st position", "competition", "award", "judges", "winner", "sustainability", "project"],
      "response": "🏆 **FreshFind Project**: FreshFind represents our next-generation **eGreen Basket** initiative! Built with real-time interactive mapping, local farm traceability, zero-food-miles carbon calculation, voice-enabled AI assistance, and responsive glassmorphism design. Designed to secure 1st position through genuine sustainability and technological excellence!",
      "quickReplies": ["Explore Eco Calculator 🌍", "Open Market Directory 📍", "Browse In-Season Crops 🍓"]
    },
    {
      "id": "urdu_friendly",
      "keywords": ["salam", "assalam", "kya haal", "kaise ho", "sabzi", "batao", "btao", "kahan", "urdu", "shukriya", "kia hal", "kya hal"],
      "response": "Walaikum Assalam! 🌿 Bohat khushi hui aap se mil kar! FreshFind par aap apne qareebi farmers markets, taza sabzian (vegetables), organic phal (fruits), aur live schedules ba-asani dekh sakte hain. Aapko kya daryaft karna hai?",
      "quickReplies": ["Aaj kaunsi market khuli hai? ⏰", "Taza sabzian 🥬", "Organic Phal 🍓"]
    },
    {
      "id": "recipes_ideas",
      "keywords": ["recipe", "cook", "dish", "meal", "soup", "salad", "smoothie", "make", "dinner", "lunch"],
      "response": "👨‍🍳 **Farm-to-Table Recipe Inspiration**:\n1. **Crisp Summer Dinosaur Kale Salad**: Toss fresh Tuscan kale with lemon-infused virgin olive oil, shaved parmesan, and heirloom tomatoes.\n2. **Wild Lion's Mane Mushroom Sauté**: Pan-seared with farmstead butter and fresh rosemary.\n3. **Golden Sunrise Smoothie**: Blend fresh strawberries, raw wildflower honey, and organic almond milk!",
      "quickReplies": ["Browse Vegetables 🥬", "Browse Fruits 🍓", "Find Markets Near Me 📍"]
    },
    {
      "id": "market_bargains",
      "keywords": ["deal", "discount", "cheap", "bargain", "budget", "save money", "price", "affordable"],
      "response": "💡 **Pro-Shopper Market Hacks**:\n• **Golden Hour Discounts**: Visit in the final 45 minutes before closing; farmers often bundle excess produce at 30-50% off!\n• **Buy in Bulk / Flats**: In-season berries and stone fruits are much cheaper when purchased by the full case.\n• **Ugly but Delicious**: Look for 'seconds' or imperfect produce for 40% lower cost—ideal for sauces and smoothies!",
      "quickReplies": ["Open Today's Markets ⏰", "Calculate Green Savings 🌍"]
    },
    {
      "id": "freshness_storage",
      "keywords": ["store", "preserve", "keep fresh", "spoil", "fridge", "shelf life", "crisper"],
      "response": "❄️ **Freshness Preservation Guide**:\n• **Leafy Greens (Kale, Spinach)**: Wrap in a slightly damp paper towel and store in an airtight container in the crisper drawer.\n• **Carrots & Radishes**: Cut off green tops immediately so they don't draw moisture from the root.\n• **Berries**: Do NOT wash until right before eating! Store dry in a paper towel-lined container.",
      "quickReplies": ["Explore All Produce 🥕", "Markets Open Now 📍"]
    }
  ],
  "defaultResponse": "I'm still learning new things! 🌿 You can ask me about **market locations**, **operating hours today**, **seasonal fruits & vegetables**, or click one of the quick suggestions below:",
  "defaultQuickReplies": [
    "Markets open today ⏰",
    "Browse Produce Guide 🥕",
    "Eco Impact Calculator 🌍",
    "Export My Bookmarks 🔖"
  ]
}
;
const fallbackSeasonal = {
  "seasons": {
    "Spring": {
      "name": "Spring Awakening",
      "period": "March - May",
      "tagline": "Tender shoots, crisp radishes, sweet early strawberries, and aromatic herbs.",
      "featuredProduceIds": ["prod-6", "prod-7", "prod-4", "prod-10"],
      "chefTip": "Toss delicate spring greens with a simple emulsion of raw wildflower honey, lemon juice, and cold-pressed olive oil.",
      "ecoFact": "Buying spring greens in season reduces greenhouse gas heating emissions from out-of-season commercial greenhouses by up to 70%."
    },
    "Summer": {
      "name": "Summer Sun & Harvest",
      "period": "June - August",
      "tagline": "Peak juicy heirloom tomatoes, sweet berries, stone fruits, and sweet corn.",
      "featuredProduceIds": ["prod-1", "prod-6", "prod-7", "prod-4"],
      "chefTip": "Slice heirloom tomatoes thickly, sprinkle with coarse sea salt, tear fresh Genovese basil leaves, and layer with fresh artisanal goat chèvre.",
      "ecoFact": "Summer outdoor sun-grown field tomatoes have a 90% lower carbon footprint than winter greenhouse imports."
    },
    "Autumn": {
      "name": "Autumn Abundance",
      "period": "September - November",
      "tagline": "Crisp orchard apples, sweet root vegetables, hardy squashes, and earthy gourmet mushrooms.",
      "featuredProduceIds": ["prod-2", "prod-1", "prod-9", "prod-11", "prod-3"],
      "chefTip": "Roast rainbow carrots and Lion's Mane mushrooms with fresh rosemary and a drizzle of raw honey until caramelized.",
      "ecoFact": "Orchards act as natural carbon sinks, absorbing tonnes of atmospheric CO2 each year during their peak fruiting cycle."
    },
    "Winter": {
      "name": "Winter Earth & Citrus",
      "period": "December - February",
      "tagline": "Frost-kissed sweet Tuscan kale, vibrant Meyer lemons, hearty root crops, and farmstead cheeses.",
      "featuredProduceIds": ["prod-3", "prod-12", "prod-9", "prod-5", "prod-8"],
      "chefTip": "Massage Lacinato kale with Meyer lemon juice and sea salt for 2 minutes to break down fibers, then toss with shaved hard goat cheese.",
      "ecoFact": "Winter farmers markets support multi-generational farming families during lean off-peak seasons."
    }
  },
  "ecoMetrics": {
    "avgSupermarketDistanceMiles": 1500,
    "avgLocalMarketDistanceMiles": 12,
    "savedCo2PerPoundPurchasedKg": 0.45,
    "plasticPackagingReducedPercent": 92
  }
}
;


/* === [Module: audioManager.js] === */
/**
 * FreshFind - Audio Feedback Manager (Web Audio API)
 * Generates futuristic, organic, subtle audio clicks and soft bell chimes without any external audio files.
 */
class AudioManager {
  constructor() {
    this.audioCtx = null;
    this.muted = localStorage.getItem('freshfind_muted') === 'true';
  }

  init() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('freshfind_muted', this.muted);
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  playClick() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.05); // A5

      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.06);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playChime() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5 - E5 - G5 - C6
      freqs.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + idx * 0.04);

        const startTime = this.audioCtx.currentTime + idx * 0.04;
        gain.gain.setValueAtTime(0.05, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch (e) {}
  }
}

const audioManager = new AudioManager();


/* === [Module: dataService.js] === */
// [import stripped]

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

const dataService = new DataService();


/* === [Module: visitorCounter.js] === */
/**
 * FreshFind - Simulated Visitor Counter (SRS Compliant)
 * Features persistent animated odometer effect.
 */
class VisitorCounter {
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


/* === [Module: components/customCursor.js] === */
/**
 * FreshFind — High-Performance Smiling Carrot Botanical Cursor
 * ============================================================
 * • 100% Click Reliability: Tip is aligned with (e.clientX, e.clientY) with ZERO offset
 * • 0% CPU Idle Overhead: Event-driven motion without heavy background DOM particle thrashing
 * • Zero-Lag Pointer: Pure GPU-accelerated translate3d with pointer-events: none !important
 * • Cute Expressive Face: Smiles on hover & squashes happily on click
 * • Safe across all browsers & devices
 */

// [import stripped]

class CustomCursor {
  constructor() {
    // Only skip on touch-only mobile devices without pointer support
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches) return;

    this.container = null;
    this.carrotBody = null;
    this.isHovering = false;
    this.isClicking = false;
    this.rafId = null;
    this.targetX = -100;
    this.targetY = -100;
    this.currentX = -100;
    this.currentY = -100;
    this._hasMoved = false;

    this.init();
  }

  init() {
    this._createDOM();
    this._injectStyles();
    this._addEventListeners();
    this._startLoop();
  }

  _createDOM() {
    const existing = document.getElementById('ffCarrotCursor');
    if (existing) existing.remove();

    this.container = document.createElement('div');
    this.container.id = 'ffCarrotCursor';
    this.container.className = 'ff-carrot-cursor';
    this.container.setAttribute('aria-hidden', 'true');

    // Hotspot is at (0, 0) top-left tip where the pointed carrot tip aligns precisely
    this.container.innerHTML = `
      <div class="ff-carrot-wrap" id="ffCarrotWrap">
        <!-- Ambient Botanical Glow at Pointer Tip -->
        <div class="ff-carrot-tip-glow"></div>

        <svg class="ff-carrot-svg" width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ffCarrotGrad" x1="4" y1="4" x2="32" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#FFA23A"/>
              <stop offset="35%" stop-color="#FF6F00"/>
              <stop offset="85%" stop-color="#E65100"/>
              <stop offset="100%" stop-color="#BF360C"/>
            </linearGradient>

            <linearGradient id="ffLeafGrad" x1="20" y1="20" x2="35" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#A3E635"/>
              <stop offset="50%" stop-color="#4ADE80"/>
              <stop offset="100%" stop-color="#15803D"/>
            </linearGradient>

            <linearGradient id="ffShimmerGrad" x1="2" y1="2" x2="20" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.85"/>
              <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
            </linearGradient>

            <radialGradient id="ffBlushGrad">
              <stop offset="0%" stop-color="#FF3366" stop-opacity="0.85"/>
              <stop offset="70%" stop-color="#FF5E7E" stop-opacity="0.45"/>
              <stop offset="100%" stop-color="#FF5E7E" stop-opacity="0"/>
            </radialGradient>
          </defs>

          <!-- 🥕 Main Carrot Body (Tip pointed exactly at 1, 1 for 100% click precision) -->
          <path d="M1.5 1.5 C6 12, 14 26, 26 26 C30 26, 32 23, 31 18 C28 8, 14 3, 1.5 1.5 Z"
                fill="url(#ffCarrotGrad)"
                stroke="#C2410C"
                stroke-width="1.2"
                stroke-linejoin="round"/>

          <!-- Glossy highlight curve -->
          <path d="M4 6 C8 12, 16 18, 24 19"
                stroke="url(#ffShimmerGrad)"
                stroke-width="1.6"
                stroke-linecap="round"/>

          <!-- 🌿 Cute Top Foliage Leaves (Trailing at back-right, never blocking pointer) -->
          <g class="ff-leaves-group">
            <path d="M26 23 C31 23, 36 29, 34 35 C28 34, 25 28, 26 23 Z" fill="url(#ffLeafGrad)" stroke="#166534" stroke-width="0.8"/>
            <path d="M28 20 C34 18, 38 23, 37 30 C31 28, 27 23, 28 20 Z" fill="url(#ffLeafGrad)" stroke="#166534" stroke-width="0.8"/>
            <path d="M29 25 C33 30, 31 38, 26 36 C24 32, 27 27, 29 25 Z" fill="url(#ffLeafGrad)" stroke="#166534" stroke-width="0.8"/>
          </g>

          <!-- 😊 NORMAL STATE FACE -->
          <g class="ff-face-normal" id="ffFaceNormal">
            <!-- Left Eye -->
            <circle cx="15" cy="11" r="1.8" fill="#1C1917"/>
            <circle cx="15.6" cy="10.5" r="0.6" fill="#FFFFFF"/>
            <!-- Right Eye -->
            <circle cx="21" cy="14" r="1.8" fill="#1C1917"/>
            <circle cx="21.6" cy="13.5" r="0.6" fill="#FFFFFF"/>
            <!-- Cute Smile -->
            <path d="M16 16 Q18.5 18 21 17" stroke="#1C1917" stroke-width="1.2" stroke-linecap="round" fill="none"/>
          </g>

          <!-- 😄 SMILING STATE FACE (Active on Hover & Click) -->
          <g class="ff-face-smiling" id="ffFaceSmiling">
            <!-- Cheerful Pink Blush -->
            <ellipse cx="13" cy="14" rx="2.2" ry="1.4" fill="url(#ffBlushGrad)"/>
            <ellipse cx="23" cy="17" rx="2.2" ry="1.4" fill="url(#ffBlushGrad)"/>
            <!-- Happy Squint Eyes (^ ^) -->
            <path d="M13.5 11 Q15 9 16.5 11" stroke="#1C1917" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <path d="M19.5 14 Q21 12 22.5 14" stroke="#1C1917" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <!-- Open Joyful Smile (:D) -->
            <path d="M16 14.5 Q18.5 19 22 16.5 Z" fill="#2E1103"/>
            <path d="M17.5 16.5 Q19 18 21 16 Z" fill="#FF4E74"/>
          </g>

          <!-- ✨ Golden Star Sparkles on Hover -->
          <g class="ff-sparkles" id="ffSparkles">
            <path class="ff-sparkle-star" d="M3 18 L3.8 20 L6 20.8 L3.8 21.6 L3 23.8 L2.2 21.6 L0 20.8 L2.2 20 Z" fill="#FACC15"/>
            <path class="ff-sparkle-star" d="M12 2 L12.6 3.6 L14.5 4.2 L12.6 4.8 L12 6.5 L11.4 4.8 L9.5 4.2 L11.4 3.6 Z" fill="#FDE047"/>
          </g>
        </svg>
      </div>
    `;

    document.body.appendChild(this.container);
    this.carrotBody = this.container.querySelector('#ffCarrotWrap');
  }

  _injectStyles() {
    const existing = document.getElementById('ffCarrotCursorStyles');
    if (existing) existing.remove();

    const style = document.createElement('style');
    style.id = 'ffCarrotCursorStyles';
    style.textContent = `
      /* Root Cursor Container - 100% Passthrough Guaranteed */
      .ff-carrot-cursor,
      .ff-carrot-cursor * {
        pointer-events: none !important;
        user-select: none !important;
        -webkit-user-select: none !important;
      }

      .ff-carrot-cursor {
        position: fixed;
        top: 0;
        left: 0;
        width: 36px;
        height: 48px;
        z-index: 2147483647 !important;
        will-change: transform;
        transform: translate3d(-100px, -100px, 0);
        opacity: 0;
        transition: opacity 0.15s ease;
      }

      /* Carrot Wrap - Tip is at (1px, 1px) pointing directly at mouse coordinate */
      .ff-carrot-wrap {
        width: 100%;
        height: 100%;
        position: relative;
        transform-origin: 1px 1px;
        transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s ease;
        filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.22));
      }

      /* Glowing Pointer Tip */
      .ff-carrot-tip-glow {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(163, 230, 53, 0.9) 0%, rgba(34, 197, 94, 0.4) 60%, transparent 90%);
        transform: translate(-50%, -50%);
        opacity: 0.8;
        pointer-events: none !important;
        transition: transform 0.2s ease, opacity 0.2s ease;
      }

      /* Normal vs Smiling states */
      .ff-face-normal {
        opacity: 1;
        transition: opacity 0.15s ease;
      }

      .ff-face-smiling {
        opacity: 0;
        transition: opacity 0.15s ease;
      }

      .ff-sparkles {
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      /* Active Hover / Smile State */
      .ff-carrot-cursor.is-smiling .ff-face-normal {
        opacity: 0;
      }

      .ff-carrot-cursor.is-smiling .ff-face-smiling {
        opacity: 1;
      }

      .ff-carrot-cursor.is-smiling .ff-sparkles {
        opacity: 1;
      }

      .ff-carrot-cursor.is-smiling .ff-carrot-wrap {
        filter: drop-shadow(0 0 10px rgba(163, 230, 53, 0.75)) drop-shadow(0 3px 8px rgba(0,0,0,0.3));
        transform: scale(1.12);
      }

      .ff-carrot-cursor.is-smiling .ff-carrot-tip-glow {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 1;
      }

      /* Quick squash on click - Pure CSS, zero DOM element creation */
      .ff-carrot-cursor.is-clicking .ff-carrot-wrap {
        transform: scale(0.88);
      }
    `;
    document.head.appendChild(style);
  }

  _addEventListeners() {
    // Mouse movement: smooth coordinate tracking
    window.addEventListener('mousemove', (e) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;

      if (!this._hasMoved) {
        this._hasMoved = true;
        this.currentX = this.targetX;
        this.currentY = this.targetY;
        if (this.container) this.container.style.opacity = '1';
      }
    }, { passive: true });

    // Click reaction - audio chime + pure CSS squash, NO DOM MUTATION on mousedown
    window.addEventListener('mousedown', () => {
      this.isClicking = true;
      if (this.container) {
        this.container.classList.add('is-clicking');
        this.container.classList.add('is-smiling');
      }
      try {
        if (typeof audioManager !== 'undefined' && audioManager) {
          audioManager.playClick();
        }
      } catch(err) {}
    }, { passive: true });

    window.addEventListener('mouseup', () => {
      this.isClicking = false;
      if (this.container) {
        this.container.classList.remove('is-clicking');
        if (!this.isHovering) {
          this.container.classList.remove('is-smiling');
        }
      }
    }, { passive: true });

    // Lightweight interactive hover check
    document.addEventListener('mouseover', (e) => {
      const interactive = e.target.closest('a, button, input, select, textarea, [role="button"], .market-card, .produce-card, .view-market-detail-btn, .dropdown-link');
      if (interactive) {
        this.isHovering = true;
        if (this.container) this.container.classList.add('is-smiling');
      }
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
      const interactive = e.target.closest('a, button, input, select, textarea, [role="button"], .market-card, .produce-card, .view-market-detail-btn, .dropdown-link');
      if (interactive) {
        this.isHovering = false;
        if (!this.isClicking && this.container) {
          this.container.classList.remove('is-smiling');
        }
      }
    }, { passive: true });

    // Window boundaries
    document.addEventListener('mouseleave', () => {
      if (this.container) this.container.style.opacity = '0';
    }, { passive: true });

    document.addEventListener('mouseenter', () => {
      if (this._hasMoved && this.container) this.container.style.opacity = '1';
    }, { passive: true });
  }

  _startLoop() {
    const render = () => {
      if (this._hasMoved && this.container) {
        // High-precision lerp for ultra-smooth 60fps tracking without lag
        this.currentX += (this.targetX - this.currentX) * 0.45;
        this.currentY += (this.targetY - this.currentY) * 0.45;

        // Exactly align (0, 0) top-left tip with cursor
        this.container.style.transform = `translate3d(${this.currentX.toFixed(1)}px, ${this.currentY.toFixed(1)}px, 0)`;
      }

      this.rafId = requestAnimationFrame(render);
    };

    this.rafId = requestAnimationFrame(render);
  }

  destroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.container?.remove();
    document.getElementById('ffCarrotCursorStyles')?.remove();
  }
}


/* === [Module: components/gardenScrollbar.js] === */
/**
 * FreshFind Living Garden Scrollbar Component (DELUXE VIP EDITION)
 * Highly optimized, zero-lag signature botanical scrollbar featuring:
 * - Large sprouting top bud cap (44x44px)
 * - Wide organic curving vine stem track with glowing nodes
 * - Deluxe 3D botanical leaf thumb (54x74px) with veins, gloss & dynamic breeze sway
 * - Decorative breeze-swaying branch leaves along the track
 * - Handcrafted woven market basket bottom cap (50x50px) with harvest celebration
 * - Event-driven, low-CPU physics loop (0% idle CPU)
 * - Draggable and click-to-jump track support
 */

class GardenScrollbar {
  constructor(app) {
    this.app = app;
    this.container = null;
    this.track = null;
    this.thumb = null;
    this.topCap = null;
    this.bottomBasket = null;
    this.particlesContainer = null;
    this.decorativeLeaves = [];

    this.isDragging = false;
    this.startY = 0;
    this.startScrollTop = 0;

    // Scroll physics & velocity state
    this.lastScrollY = 0;
    this.lastScrollTime = Date.now();
    this.scrollVelocity = 0;
    this.targetRotation = 0;
    this.currentRotation = 0;
    this.scrollTimeout = null;
    this.isScrolling = false;
    this.hasHarvested = false;

    // Performance cached layout metrics
    this.cachedTrackHeight = 0;
    this.cachedThumbHeight = 68;
    this.cachedMaxScroll = 1;
    this.rafId = null;
    this.isPhysicsRunning = false;
    this.lastParticleTime = 0;
  }

  init() {
    this.buildDOM();
    this.cacheMetrics();
    this.bindEvents();
    this.updatePosition();
  }

  cacheMetrics() {
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = window.innerHeight;
    this.cachedMaxScroll = Math.max(1, scrollHeight - clientHeight);

    if (this.track) {
      this.cachedTrackHeight = this.track.clientHeight;
    }
    if (this.thumb) {
      this.cachedThumbHeight = this.thumb.clientHeight || 68;
    }
  }

  buildDOM() {
    const existing = document.getElementById('gardenScrollbar');
    if (existing) existing.remove();

    this.container = document.createElement('div');
    this.container.id = 'gardenScrollbar';
    this.container.className = 'garden-scrollbar-wrap';
    this.container.setAttribute('role', 'scrollbar');
    this.container.setAttribute('aria-label', 'Living Garden Botanical Scrollbar');
    this.container.setAttribute('aria-controls', 'main');

    this.container.innerHTML = `
      <!-- Top Bud Cap: Large Sprouting Fresh Leaf -->
      <div class="garden-top-bud" title="Scroll to Top of Garden" id="gardenTopBud">
        <svg viewBox="0 0 44 44" class="garden-bud-svg" fill="none">
          <circle cx="22" cy="22" r="18" fill="rgba(184, 233, 134, 0.25)" filter="blur(4px)" />
          <!-- Stem Base -->
          <path d="M22 40 C22 30, 20 24, 22 18" stroke="#163D2A" stroke-width="3.5" stroke-linecap="round"/>
          <!-- Left Fresh Leaf -->
          <path d="M22 24 C15 20, 8 22, 6 15 C11 13, 18 16, 22 24" fill="url(#gardenSproutGrad1)" stroke="#163D2A" stroke-width="1.2"/>
          <!-- Right Sunlit Leaf -->
          <path d="M22 21 C27 15, 36 16, 38 8 C31 8, 24 13, 22 21" fill="url(#gardenSproutGrad2)" stroke="#163D2A" stroke-width="1.2"/>
          <!-- Morning Dew Glow Core -->
          <circle cx="22" cy="15" r="3.2" fill="#FFF9EC" stroke="#B8E986" stroke-width="1"/>
          <circle cx="21" cy="14" r="1.2" fill="#ffffff"/>
          <defs>
            <linearGradient id="gardenSproutGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#B8E986"/>
              <stop offset="100%" stop-color="#6FAF45"/>
            </linearGradient>
            <linearGradient id="gardenSproutGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#B8E986"/>
              <stop offset="50%" stop-color="#6FAF45"/>
              <stop offset="100%" stop-color="#163D2A"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Vine Stem Track -->
      <div class="garden-vine-track" id="gardenVineTrack">
        <!-- SVG Organic Vine Stem Curve with Nodes -->
        <svg class="garden-vine-svg" preserveAspectRatio="none" viewBox="0 0 28 500">
          <!-- Background Vine Shadow -->
          <path class="garden-vine-path-bg" d="M14 0 Q20 125, 9 250 T18 500" fill="none" stroke="rgba(22, 61, 42, 0.35)" stroke-width="7" stroke-linecap="round"/>
          <!-- Vibrant Organic Stem -->
          <path class="garden-vine-path" d="M14 0 Q20 125, 9 250 T18 500" fill="none" stroke="url(#gardenVineGrad)" stroke-width="4.5" stroke-linecap="round"/>
          <!-- Glowing Vine Nodes -->
          <circle cx="16" cy="95" r="3.2" fill="#B8E986" stroke="#163D2A" stroke-width="0.8"/>
          <circle cx="10" cy="210" r="3.2" fill="#6FAF45" stroke="#163D2A" stroke-width="0.8"/>
          <circle cx="14" cy="335" r="3.2" fill="#B8E986" stroke="#163D2A" stroke-width="0.8"/>
          <circle cx="17" cy="440" r="3.2" fill="#6FAF45" stroke="#163D2A" stroke-width="0.8"/>
          <defs>
            <linearGradient id="gardenVineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#B8E986"/>
              <stop offset="30%" stop-color="#6FAF45"/>
              <stop offset="70%" stop-color="#163D2A"/>
              <stop offset="100%" stop-color="#B98245"/>
            </linearGradient>
          </defs>
        </svg>

        <!-- Decorative Leaves along the vine at 18%, 42%, 68%, 88% -->
        <div class="garden-deco-leaf deco-1" style="top: 18%;" data-side="left">
          <svg viewBox="0 0 22 22" width="20" height="20">
            <path d="M20 20 C11 17, 3 11, 3 3 C11 3, 17 11, 20 20" fill="#6FAF45" stroke="#163D2A" stroke-width="1.2"/>
            <path d="M20 20 L6 6" stroke="#DDEACB" stroke-width="1" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="garden-deco-leaf deco-2" style="top: 42%;" data-side="right">
          <svg viewBox="0 0 22 22" width="20" height="20">
            <path d="M3 20 C12 17, 20 11, 20 3 C12 3, 6 11, 3 20" fill="#B8E986" stroke="#163D2A" stroke-width="1.2"/>
            <path d="M3 20 L17 6" stroke="#FFF9EC" stroke-width="1" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="garden-deco-leaf deco-3" style="top: 68%;" data-side="left">
          <svg viewBox="0 0 22 22" width="18" height="18">
            <path d="M20 20 C11 17, 3 11, 3 3 C11 3, 17 11, 20 20" fill="#6FAF45" stroke="#163D2A" stroke-width="1.2"/>
            <path d="M20 20 L6 6" stroke="#DDEACB" stroke-width="1" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="garden-deco-leaf deco-4" style="top: 88%;" data-side="right">
          <svg viewBox="0 0 22 22" width="18" height="18">
            <path d="M3 20 C12 17, 20 11, 20 3 C12 3, 6 11, 3 20" fill="#DDEACB" stroke="#163D2A" stroke-width="1.2"/>
          </svg>
        </div>

        <!-- Trailing Spores Container -->
        <div class="garden-particles-layer" id="gardenParticlesLayer"></div>

        <!-- Large Draggable Botanical Leaf Thumb (54x74px) -->
        <div class="garden-leaf-thumb" id="gardenLeafThumb" title="Drag to Scroll" tabindex="0" role="slider" aria-orientation="vertical">
          <div class="garden-thumb-inner">
            <svg viewBox="0 0 52 74" class="garden-thumb-leaf-svg" style="overflow:visible;">
              <defs>
                <!-- Realistic Multi-Stop Chlorophyll Gradient -->
                <linearGradient id="leafRealBodyGrad" x1="0.15" y1="0.0" x2="0.85" y2="1.0">
                  <stop offset="0%" stop-color="#BAF268"/>
                  <stop offset="18%" stop-color="#84DB3A"/>
                  <stop offset="45%" stop-color="#49A429"/>
                  <stop offset="75%" stop-color="#236B27"/>
                  <stop offset="100%" stop-color="#123B17"/>
                </linearGradient>

                <!-- Sunlit Upper Leaf Blade Translucency -->
                <linearGradient id="leafSunlightGlow" x1="0" y1="0" x2="1" y2="0.8">
                  <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.55"/>
                  <stop offset="35%" stop-color="#CEFAA0" stop-opacity="0.30"/>
                  <stop offset="100%" stop-color="#236B27" stop-opacity="0"/>
                </linearGradient>

                <!-- Leaf Soft Shadow for 3D Depth -->
                <radialGradient id="leafDewShadow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="rgba(10,35,16,0.6)"/>
                  <stop offset="100%" stop-color="rgba(10,35,16,0)"/>
                </radialGradient>

                <!-- Dew Drop Refraction -->
                <linearGradient id="dewDropGrad" x1="0.2" y1="0.1" x2="0.8" y2="0.9">
                  <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
                  <stop offset="40%" stop-color="#E2FCD0" stop-opacity="0.75"/>
                  <stop offset="85%" stop-color="#559938" stop-opacity="0.6"/>
                  <stop offset="100%" stop-color="#19481E" stop-opacity="0.85"/>
                </linearGradient>

                <filter id="leafSoftBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.2"/>
                </filter>
              </defs>

              <!-- 1. Ambient Drop Shadow / 3D Grounding Layer -->
              <path d="M26 68 C25 60, 25 53, 26 47 C14 44, 4 33, 4 21 C4 9, 15 2, 27 1 C39 2, 49 11, 48 23 C48 35, 38 45, 27 48 C27 54, 28 61, 28 68 Z"
                    fill="rgba(10, 30, 16, 0.42)" transform="translate(1.5, 3.5)" filter="url(#leafSoftBlur)"/>

              <!-- 2. Organic Leaf Stem (Petiole) -->
              <path d="M26 72 C25 65, 25.5 58, 26 50" fill="none" stroke="#2D7A2E" stroke-width="3" stroke-linecap="round"/>
              <path d="M26.2 72 C25.3 65, 25.8 58, 26.2 50" fill="none" stroke="#8FE240" stroke-width="1.2" stroke-linecap="round"/>

              <!-- 3. Main Realistic Leaf Body (Natural asymmetrical botanical curve) -->
              <path class="leaf-blade-path"
                    d="M27 2 
                       C21 8, 5 16, 5 28 
                       C5 40, 15 49, 26 52 
                       C37 49, 47 38, 47 26 
                       C47 14, 33 6, 27 2 Z"
                    fill="url(#leafRealBodyGrad)"
                    stroke="#16431E"
                    stroke-width="1.2"/>

              <!-- 4. Sunlit Upper Hemisphere & Cellular Sheen Layer -->
              <path d="M27 3 
                       C21 9, 6 17, 6 28 
                       C6 38, 14 46, 26 50 
                       C25 36, 25 18, 27 3 Z"
                    fill="url(#leafSunlightGlow)"/>

              <!-- 5. Fine Leaf Margin Highlight (Wax Cuticle Edge) -->
              <path d="M26 3 C20 9, 7 17, 7 28 C7 36, 12 43, 20 48"
                    fill="none" stroke="rgba(255, 255, 255, 0.45)" stroke-width="0.8" stroke-linecap="round"/>

              <!-- 6. Realistic Primary Midrib Spine (Tapering & naturally curved) -->
              <path d="M26 51 C25.5 38, 25.8 20, 27 3"
                    fill="none" stroke="#133D19" stroke-width="2.2" stroke-linecap="round"/>
              <path d="M26 51 C25.5 38, 25.8 20, 27 3"
                    fill="none" stroke="#E5F9CB" stroke-width="1.2" stroke-linecap="round"/>

              <!-- 7. Delicate Curved Secondary Veins (Left Leaf Blade) -->
              <g stroke="#D4F3AF" stroke-width="0.75" stroke-linecap="round" fill="none" opacity="0.85">
                <path d="M26 44 C20 42, 13 41, 10 37"/>
                <path d="M26 36 C19 34, 12 31, 8 26"/>
                <path d="M26 27 C19 24, 13 21, 10 16"/>
                <path d="M26.5 18 C22 15, 17 13, 14 9"/>
                <path d="M27 10 C24 8, 21 7, 19 4"/>
              </g>

              <!-- 8. Delicate Curved Secondary Veins (Right Leaf Blade) -->
              <g stroke="#C6EFA0" stroke-width="0.75" stroke-linecap="round" fill="none" opacity="0.85">
                <path d="M26 44 C32 42, 39 40, 42 35"/>
                <path d="M26 35 C33 33, 40 29, 44 23"/>
                <path d="M26.2 26 C33 23, 39 19, 42 14"/>
                <path d="M26.5 17 C31 14, 36 12, 39 8"/>
                <path d="M27 9 C30 7, 33 6, 35 4"/>
              </g>

              <!-- 9. Soft Dorsal Reflection Glow Ridge -->
              <path d="M26 8 C23 18, 21 30, 23 44" fill="none" stroke="rgba(255, 255, 255, 0.4)" stroke-width="1.0" filter="url(#leafSoftBlur)"/>

              <!-- 10. Hyper-Realistic Dew Droplet with Refraction & Sun Sparkle -->
              <ellipse cx="17" cy="27" rx="3.4" ry="2.8" fill="rgba(10,35,16,0.38)" transform="translate(1, 1.5)"/>
              <ellipse cx="17" cy="27" rx="3.3" ry="2.7" fill="url(#dewDropGrad)"/>
              <!-- Droplet Specular Reflection -->
              <circle cx="16" cy="25.8" r="1.1" fill="#FFFFFF" opacity="0.95"/>
              <circle cx="18" cy="27.6" r="0.5" fill="#E4FCD0" opacity="0.8"/>
            </svg>

            <!-- Active Drag & Velocity Glow Aura -->
            <div class="garden-thumb-glow" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      <!-- Bottom Basket Cap: Handcrafted Woven Market Basket (50x50px) -->
      <div class="garden-bottom-basket" title="Fresh Harvest Basket" id="gardenBottomBasket">
        <div class="garden-basket-inner">
          <svg viewBox="0 0 44 44" class="garden-basket-svg">
            <!-- Glow background on bottom reached -->
            <circle cx="22" cy="25" r="19" fill="rgba(185, 130, 69, 0.25)" class="garden-basket-aura" />
            
            <!-- Basket Sturdy Handle -->
            <path d="M11 22 C11 8, 33 8, 33 22" fill="none" stroke="#B98245" stroke-width="3" stroke-linecap="round"/>
            <path d="M14 22 C14 11, 30 11, 30 22" fill="none" stroke="#875323" stroke-width="1.2"/>

            <!-- Fresh Harvest Vegetables inside basket -->
            <!-- Carrot -->
            <path class="harvest-crop crop-carrot" d="M13 16 L19 24 L16 25 Z" fill="#ea580c"/>
            <path d="M12 13 L14 16 L11 15" stroke="#6FAF45" stroke-width="1.8" stroke-linecap="round"/>
            <!-- Juicy Tomato -->
            <circle class="harvest-crop crop-tomato" cx="22" cy="19" r="4.6" fill="#dc2626"/>
            <path d="M20 15 L22 17 L24 15" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Apple / Green Herb -->
            <circle class="harvest-crop crop-herb" cx="29" cy="20" r="4" fill="#6FAF45"/>

            <!-- Woven Basket Base Body -->
            <path d="M7 22 L11 38 C12 41, 32 41, 33 38 L37 22 Z" fill="url(#gardenBasketGrad)" stroke="#673d16" stroke-width="1.8"/>
            
            <!-- Woven Lattice Lines -->
            <path d="M8 26 L36 26 M9 31 L35 31 M11 36 L33 36" stroke="#875323" stroke-width="1.2"/>
            <path d="M15 22 L17 38 M22 22 L22 39 M29 22 L27 38" stroke="#875323" stroke-width="1.2"/>
            <path d="M6 22 L38 22" stroke="#B98245" stroke-width="3" stroke-linecap="round"/>

            <defs>
              <linearGradient id="gardenBasketGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#e2ab69"/>
                <stop offset="50%" stop-color="#B98245"/>
                <stop offset="100%" stop-color="#875323"/>
              </linearGradient>
            </defs>
          </svg>

          <!-- Harvest Celebration Sparkles on reaching bottom -->
          <div class="harvest-sparkle-wrap" id="harvestSparkleWrap" aria-hidden="true">
            <span class="harvest-sparkle s-1">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#facc15" stroke="#facc15" stroke-width="1"><path d="M12 2l2.09 6.26L21 9l-5.46 4.73L17.18 21 12 17.27 6.82 21l1.64-7.27L3 9l6.91-.74z"/></svg>
            </span>
            <span class="harvest-sparkle s-2">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </span>
            <span class="harvest-sparkle s-3">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>
            </span>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.container);

    this.track = document.getElementById('gardenVineTrack');
    this.thumb = document.getElementById('gardenLeafThumb');
    this.topCap = document.getElementById('gardenTopBud');
    this.bottomBasket = document.getElementById('gardenBottomBasket');
    this.particlesContainer = document.getElementById('gardenParticlesLayer');
    this.decorativeLeaves = Array.from(this.container.querySelectorAll('.garden-deco-leaf'));
  }

  bindEvents() {
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    window.addEventListener('resize', () => {
      this.cacheMetrics();
      this.updatePosition();
    }, { passive: true });

    // Click on top bud -> scroll to top
    this.topCap?.addEventListener('click', () => {
      this.app?.audioManager?.playClick?.();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Click on bottom basket -> scroll to bottom
    this.bottomBasket?.addEventListener('click', () => {
      this.app?.audioManager?.playChime?.();
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    });

    // Click anywhere on vine track to jump scroll
    this.track?.addEventListener('click', (e) => {
      if (e.target.closest('#gardenLeafThumb')) return;
      const rect = this.track.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const pct = Math.max(0, Math.min(1, clickY / rect.height));
      const targetScroll = pct * this.cachedMaxScroll;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    });

    // Drag handling on leaf thumb
    this.thumb?.addEventListener('mousedown', (e) => this.onDragStart(e));
    this.thumb?.addEventListener('touchstart', (e) => this.onDragStart(e.touches[0]), { passive: false });

    window.addEventListener('mousemove', (e) => this.onDragMove(e), { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (this.isDragging) {
        e.preventDefault();
        this.onDragMove(e.touches[0]);
      }
    }, { passive: false });

    window.addEventListener('mouseup', () => this.onDragEnd());
    window.addEventListener('touchend', () => this.onDragEnd());

    // Keyboard accessibility
    this.thumb?.addEventListener('keydown', (e) => {
      const step = 80;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        window.scrollBy({ top: step, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        window.scrollBy({ top: -step, behavior: 'smooth' });
      } else if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      }
    });
  }

  handleScroll() {
    const now = Date.now();
    const currentScrollY = window.scrollY;
    const dt = Math.max(1, now - this.lastScrollTime);
    const dy = currentScrollY - this.lastScrollY;

    // Instant velocity in px/ms
    const rawVelocity = dy / dt;
    this.scrollVelocity = this.scrollVelocity * 0.7 + rawVelocity * 0.3;

    this.lastScrollY = currentScrollY;
    this.lastScrollTime = now;

    // Cap sway between -14deg and +14deg
    this.targetRotation = Math.max(-14, Math.min(14, this.scrollVelocity * 9));

    this.isScrolling = true;
    this.container?.classList.add('scrolling');

    if (Math.abs(this.scrollVelocity) > 1.2) {
      this.container?.classList.add('fast-scroll');
    } else {
      this.container?.classList.remove('fast-scroll');
    }

    // Spawn trailing shimmer dew particles (throttled to avoid DOM bloat)
    if (now - this.lastParticleTime > 150 && Math.abs(this.scrollVelocity) > 0.4) {
      this.lastParticleTime = now;
      this.spawnTrailSpore();
    }

    // Sway decorative leaves subtly
    this.swayDecorativeLeaves(this.scrollVelocity);

    // Check bottom harvest condition
    this.checkHarvestBottom();

    // Start physics loop if not already running
    this.startPhysicsLoop();

    // Settle debounce
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
      this.targetRotation = 0;
      this.scrollVelocity = 0;
      this.container?.classList.remove('scrolling', 'fast-scroll');
      this.settleBounce();
    }, 120);
  }

  startPhysicsLoop() {
    if (this.isPhysicsRunning) return;
    this.isPhysicsRunning = true;

    const loop = () => {
      // Lerp rotation for organic fluid movement
      this.currentRotation += (this.targetRotation - this.currentRotation) * 0.16;

      this.updatePosition();

      // Stop physics loop when motion has settled to save CPU
      if (!this.isScrolling && !this.isDragging && Math.abs(this.currentRotation - this.targetRotation) < 0.05) {
        this.currentRotation = 0;
        this.updatePosition();
        this.isPhysicsRunning = false;
        this.rafId = null;
        return;
      }

      this.rafId = requestAnimationFrame(loop);
    };

    this.rafId = requestAnimationFrame(loop);
  }

  updatePosition() {
    if (!this.track || !this.thumb) return;

    const scrollTop = window.scrollY;
    const scrollPct = Math.max(0, Math.min(1, scrollTop / (this.cachedMaxScroll || 1)));

    const trackHeight = this.cachedTrackHeight || this.track.clientHeight;
    const thumbHeight = this.cachedThumbHeight;
    const maxThumbTop = Math.max(0, trackHeight - thumbHeight);
    const thumbTop = scrollPct * maxThumbTop;

    this.thumb.style.transform = `translate3d(0, ${thumbTop.toFixed(1)}px, 0) rotate(${this.currentRotation.toFixed(2)}deg)`;

    const pctInt = Math.round(scrollPct * 100);
    this.thumb.setAttribute('aria-valuenow', pctInt);
  }

  swayDecorativeLeaves(velocity) {
    const angle = Math.max(-18, Math.min(18, velocity * 12));
    this.decorativeLeaves.forEach((leaf, idx) => {
      const isLeft = leaf.getAttribute('data-side') === 'left';
      const dir = isLeft ? -1 : 1;
      const stagger = 1 + idx * 0.15;
      leaf.style.transform = `rotate(${(angle * dir * stagger).toFixed(1)}deg)`;
    });
  }

  settleBounce() {
    this.decorativeLeaves.forEach((leaf) => {
      leaf.style.transform = `rotate(0deg)`;
    });

    if (this.thumb) {
      this.thumb.classList.add('settle-bounce');
      setTimeout(() => this.thumb?.classList.remove('settle-bounce'), 450);
    }
  }

  checkHarvestBottom() {
    const scrollTop = window.scrollY;
    const clientHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 40);

    if (isAtBottom) {
      if (!this.hasHarvested) {
        this.hasHarvested = true;
        this.bottomBasket?.classList.add('harvest-active');
        this.app?.audioManager?.playChime?.();
        this.app?.showToast?.('🧺 Reached the Harvest Floor! 100% Farm Fresh!');
      }
    } else {
      if (this.hasHarvested) {
        this.hasHarvested = false;
        this.bottomBasket?.classList.remove('harvest-active');
      }
    }
  }

  spawnTrailSpore() {
    if (!this.particlesContainer || !this.thumb) return;
    const thumbTop = parseFloat(this.thumb.style.transform.split('translate3d(0, ')[1] || '0');

    const spore = document.createElement('div');
    spore.className = 'garden-spore';

    const relY = thumbTop + 34;
    const relX = 14 + (Math.random() * 12 - 6);
    const size = Math.random() * 6 + 4;

    spore.style.cssText = `
      top: ${relY}px;
      left: ${relX}px;
      width: ${size}px;
      height: ${size}px;
      background: ${Math.random() > 0.4 ? '#B8E986' : '#FFF9EC'};
      box-shadow: 0 0 8px #B8E986;
    `;

    this.particlesContainer.appendChild(spore);
    setTimeout(() => spore.remove(), 550);
  }

  onDragStart(e) {
    this.isDragging = true;
    this.startY = e.clientY;
    this.startScrollTop = window.scrollY;
    this.container?.classList.add('dragging');
    document.body.classList.add('garden-scrollbar-dragging');
    this.app?.audioManager?.playClick?.();
    this.startPhysicsLoop();
  }

  onDragMove(e) {
    if (!this.isDragging || !this.track) return;
    const deltaY = e.clientY - this.startY;
    const trackHeight = this.cachedTrackHeight || this.track.clientHeight;
    const thumbHeight = this.cachedThumbHeight;
    const maxThumbTop = Math.max(1, trackHeight - thumbHeight);

    const scrollDelta = (deltaY / maxThumbTop) * this.cachedMaxScroll;
    window.scrollTo({
      top: this.startScrollTop + scrollDelta,
      behavior: 'auto'
    });
  }

  onDragEnd() {
    if (this.isDragging) {
      this.isDragging = false;
      this.container?.classList.remove('dragging');
      document.body.classList.remove('garden-scrollbar-dragging');
      this.settleBounce();
    }
  }

  destroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
    this.container?.remove();
  }
}


/* === [Module: components/cinematicHeroBg.js] === */
/**
 * FreshFind — Cinematic Farmers Market Hero Background Engine
 * Premium 15-second looping canvas animation
 * Scenes: Sunrise | Market Stalls | Macro Produce | Map Pins | Outro
 */
class CinematicHeroBg {
  constructor() {
    this.bgCanvas   = document.getElementById("cinematicHeroBgCanvas");
    this.cardCanvas = document.getElementById("heroHarvestCanvas");
    this.paused  = false;
    this.t       = 0;
    this.scene   = 0;
    this.SCENE_DUR  = 3;
    this.TOTAL_DUR  = 15;
    this.lastTs  = null;
    this.rafId   = null;
    this.pollen  = [];
    this.bokeh   = [];
    this.godRays = [];
    this.produce = [
      { emoji:"🍅", label:"Heirloom Tomato", x:0.25, y:0.45, r:72, color:"#e53935" },
      { emoji:"🥕", label:"Organic Carrot",  x:0.55, y:0.60, r:60, color:"#f57c00" },
      { emoji:"🍋", label:"Meyer Lemon",      x:0.75, y:0.35, r:65, color:"#f9a825" },
      { emoji:"🫑", label:"Bell Pepper",      x:0.40, y:0.70, r:58, color:"#2e7d32" },
      { emoji:"🍓", label:"Strawberry",       x:0.65, y:0.55, r:62, color:"#c62828" },
      { emoji:"🧅", label:"Sweet Onion",      x:0.20, y:0.65, r:55, color:"#bf360c" },
    ];
    this.stalls = [
      { x:0.08, w:0.20, color:"#5d4037", roofColor:"#8d6e63", shade:"#a1887f" },
      { x:0.30, w:0.22, color:"#4e342e", roofColor:"#795548", shade:"#8d6e63" },
      { x:0.54, w:0.20, color:"#37474f", roofColor:"#546e7a", shade:"#78909c" },
      { x:0.76, w:0.21, color:"#33691e", roofColor:"#558b2f", shade:"#7cb342" },
    ];
    this.mapPins = [
      { x:0.22, y:0.38, label:"Green Valley Market", open:true,  dist:"0.3 km", delay:0   },
      { x:0.55, y:0.52, label:"Sunrise Farmers Co.", open:true,  dist:"1.1 km", delay:0.6 },
      { x:0.74, y:0.30, label:"Herb Garden Stand",   open:false, dist:"2.4 km", delay:1.2 },
      { x:0.38, y:0.65, label:"Highland Fresh Farm", open:true,  dist:"3.7 km", delay:1.8 },
    ];
  }

  init() {
    // If canvases are not present in DOM, exit immediately to save 100% CPU/GPU
    if (!this.bgCanvas && !this.cardCanvas) {
      this.paused = true;
      return;
    }
    this._seed();
    this._resize();
    window.addEventListener("resize", () => this._resize(), { passive:true });
    document.getElementById("heroVideoPlayPauseBtn")?.addEventListener("click", () => {
      this.paused = !this.paused;
      const icon = document.getElementById("heroVideoPlayIcon");
      if (icon) icon.textContent = this.paused ? "▶ Play" : "⏸ Pause";
      if (!this.paused) this._loop(performance.now());
    });
    this._loop(performance.now());
  }

  _resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (this.bgCanvas) {
      this.bgCanvas.width  = window.innerWidth  * dpr;
      this.bgCanvas.height = window.innerHeight * dpr;
      this.bgCanvas.getContext("2d").scale(dpr, dpr);
    }
    if (this.cardCanvas) {
      const r = this.cardCanvas.getBoundingClientRect();
      this.cardCanvas.width  = (r.width  || 560) * dpr;
      this.cardCanvas.height = (r.height || 460) * dpr;
      this.cardCanvas.getContext("2d").scale(dpr, dpr);
    }
    this.W  = this.bgCanvas   ? this.bgCanvas.width   / dpr : window.innerWidth;
    this.H  = this.bgCanvas   ? this.bgCanvas.height  / dpr : window.innerHeight;
    this.CW = this.cardCanvas ? this.cardCanvas.width  / dpr : 560;
    this.CH = this.cardCanvas ? this.cardCanvas.height / dpr : 460;
  }

  _seed() {
    this.pollen  = Array.from({length:55}, () => ({
      x:Math.random(), y:Math.random(),
      r:Math.random()*2.5+0.8,
      vx:(Math.random()-0.5)*0.0006, vy:-(Math.random()*0.0005+0.0002),
      alpha:Math.random()*0.55+0.15, flicker:Math.random()*Math.PI*2
    }));
    this.bokeh   = Array.from({length:22}, () => ({
      x:Math.random(), y:Math.random(),
      r:Math.random()*55+20, alpha:Math.random()*0.07+0.02,
      color:Math.random()>0.5 ? "#a5d6a7" : "#fff9c4",
      speed:(Math.random()-0.5)*0.00015
    }));
    this.godRays = Array.from({length:7}, (_, i) => ({
      angle:-0.55+i*0.18+(Math.random()-0.5)*0.08,
      alpha:Math.random()*0.06+0.02, width:Math.random()*60+30
    }));
  }

  _loop(ts) {
    if (this.paused) return;
    if (this.lastTs === null) this.lastTs = ts;
    const dt = Math.min((ts - this.lastTs) / 1000, 0.05);
    this.lastTs = ts;
    this.t = (this.t + dt) % this.TOTAL_DUR;
    this.scene = Math.floor(this.t / this.SCENE_DUR);
    const sceneT = (this.t % this.SCENE_DUR) / this.SCENE_DUR;
    this._drawBg(this.t, this.scene, sceneT);
    this._drawCard(this.t, this.scene, sceneT);
    this._updateParticles(dt);
    this.rafId = requestAnimationFrame(ts2 => this._loop(ts2));
  }

  _drawBg(t, scene, sceneT) {
    const c = this.bgCanvas; if (!c) return;
    const ctx = c.getContext("2d");
    const W = this.W, H = this.H;
    ctx.clearRect(0,0,W,H);
    this._drawSky(ctx,W,H,scene,sceneT);
    if (scene===0) this._scene0(ctx,W,H,t,sceneT);
    if (scene===1) this._scene1(ctx,W,H,t,sceneT);
    if (scene===2) this._scene2(ctx,W,H,t,sceneT);
    if (scene===3) this._scene3(ctx,W,H,t,sceneT);
    if (scene===4) this._scene4(ctx,W,H,t,sceneT);
    this._godRays(ctx,W,H,t);
    this._pollenDraw(ctx,W,H);
    this._bokehDraw(ctx,W,H,t);
    this._vignette(ctx,W,H);
    this._grain(ctx,W,H,t);
  }

  _drawSky(ctx,W,H,scene,sceneT) {
    const s = [
      {top:"#1a0a00",mid:"#c25a00",bot:"#f4a435"},
      {top:"#0d2117",mid:"#1a4a2e",bot:"#c8e6c9"},
      {top:"#1b3326",mid:"#2e7d52",bot:"#e8f5e9"},
      {top:"#0a1628",mid:"#1565c0",bot:"#42a5f5"},
      {top:"#1a2e1e",mid:"#2d5a3d",bot:"#f1f8f3"},
    ][Math.min(scene,4)];
    const g = ctx.createLinearGradient(0,0,0,H);
    g.addColorStop(0,s.top); g.addColorStop(0.45,s.mid); g.addColorStop(1,s.bot);
    ctx.fillStyle = g; ctx.fillRect(0,0,W,H);
    const hg = ctx.createRadialGradient(W*.5,H*.65,0,W*.5,H*.65,W*.7);
    hg.addColorStop(0, scene===0?"rgba(255,160,30,0.45)":scene===3?"rgba(66,165,245,0.18)":"rgba(56,175,80,0.22)");
    hg.addColorStop(1,"rgba(0,0,0,0)");
    ctx.fillStyle=hg; ctx.fillRect(0,0,W,H);
  }

  _scene0(ctx,W,H,t,sT) {
    const hor = H*0.62;
    ["#1b4332","#2d6a4f","#40916c","#74c69d"].reverse().forEach((col,i) => {
      const yOff = hor - i*H*0.07;
      const par  = Math.sin(t*0.04+i*0.5)*8;
      ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(-20,H);
      for (let x=-20;x<=W+20;x+=18) {
        ctx.lineTo(x+par, yOff+Math.sin((x+t*12+i*60)*0.006)*28+Math.sin((x+t*8+i*80)*0.012)*14);
      }
      ctx.lineTo(W+20,H); ctx.closePath(); ctx.fill();
    });
    const sy=H*(0.65-sT*0.08), sx=W*.5;
    const sg=ctx.createRadialGradient(sx,sy,0,sx,sy,200);
    sg.addColorStop(0,"rgba(255,250,200,0.95)"); sg.addColorStop(0.1,"rgba(255,200,50,0.85)");
    sg.addColorStop(0.35,"rgba(255,130,20,0.45)"); sg.addColorStop(0.7,"rgba(255,100,0,0.12)"); sg.addColorStop(1,"rgba(0,0,0,0)");
    ctx.fillStyle=sg; ctx.beginPath(); ctx.arc(sx,sy,200,0,Math.PI*2); ctx.fill();
    const mist=ctx.createLinearGradient(0,hor-30,0,hor+60);
    mist.addColorStop(0,"rgba(255,255,255,0)"); mist.addColorStop(0.4,"rgba(255,252,240,0.28)"); mist.addColorStop(1,"rgba(255,255,255,0)");
    ctx.fillStyle=mist; ctx.fillRect(0,hor-30,W,90);
  }

  _scene1(ctx,W,H,t,sT) {
    const gy=H*0.72;
    ctx.fillStyle="#2d5a2e";
    for (let tx=0;tx<W;tx+=90) { ctx.beginPath(); ctx.ellipse(tx+45,H*0.25,37+Math.sin(tx*.05)*10,(H*0.28+Math.sin(tx*.04+t*.1)*20)/2,0,0,Math.PI*2); ctx.fill(); }
    const gg=ctx.createLinearGradient(0,gy,0,H);
    gg.addColorStop(0,"#8d6e63"); gg.addColorStop(1,"#5d4037");
    ctx.fillStyle=gg; ctx.fillRect(0,gy,W,H-gy);
    ctx.strokeStyle="rgba(0,0,0,0.12)"; ctx.lineWidth=1;
    for (let r=0;r<5;r++) for (let c=0;c<12;c++) ctx.strokeRect(c*(W/11)-(r%2)*(W/22), gy+r*28, W/11, 28);
    const ep=["🍅","🫑","🥕","🌽","🍋","🧅"];
    this.stalls.forEach((st,i) => {
      const x=st.x*W, sw=st.w*W, sH=H*0.38, sy=gy-sH, sw2=Math.sin(t*.3+i*1.2)*1.5;
      ctx.fillStyle=st.color; ctx.fillRect(x+sw2,sy,sw,sH);
      for (let s=0;s<6;s++) {
        ctx.fillStyle=s%2===0?st.roofColor:st.shade;
        const ax=x+(s*sw/6)+sw2;
        ctx.beginPath(); ctx.moveTo(ax,sy-18); ctx.lineTo(ax+sw/6,sy-18);
        ctx.lineTo(ax+sw/6+12,sy+10); ctx.lineTo(ax-12,sy+10); ctx.closePath(); ctx.fill();
      }
      ctx.font=`${22+Math.sin(t+i)*3|0}px serif`; ctx.textAlign="center";
      for (let p=0;p<3;p++) ctx.fillText(ep[(i*3+p)%ep.length], x+sw*(0.2+p*0.28)+sw2, sy+30+Math.sin(t*.5+p*1.4+i)*5);
      ctx.fillStyle=`rgba(255,230,120,${0.06+Math.sin(t*.8+i*.7)*.03})`;
      ctx.beginPath(); ctx.ellipse(x+sw*.5,gy+15,sw*.4,15,0,0,Math.PI*2); ctx.fill();
      ctx.fillStyle="#fff8e1"; ctx.fillRect(x+sw2+8,sy+10,sw-16,22);
      ctx.fillStyle="#4e342e"; ctx.font="bold 10px 'Plus Jakarta Sans',sans-serif";
      ctx.fillText(["Green Valley","Fresh Harvest","Herb Garden","Local Roots"][i], x+sw*.5+sw2, sy+25);
    });
    [0.18,0.42,0.62,0.84].forEach((px,i) => {
      this._person(ctx,px*W+Math.sin(t*.4+i*1.8)*12, gy, H*.16, i%2===0);
    });
  }

  _scene2(ctx,W,H,t,sT) {
    const tg=ctx.createLinearGradient(0,H*.3,0,H);
    tg.addColorStop(0,"#6d4c41"); tg.addColorStop(0.5,"#4e342e"); tg.addColorStop(1,"#3e2723");
    ctx.fillStyle=tg; ctx.fillRect(0,0,W,H);
    for (let r=0;r<8;r++) { ctx.strokeStyle="rgba(0,0,0,0.15)"; ctx.lineWidth=1.5; ctx.beginPath(); ctx.moveTo(0,H*(r/8)); ctx.lineTo(W,H*(r/8)); ctx.stroke(); }
    ctx.fillStyle="#fafafa"; ctx.fillRect(W*.08,H*.35,W*.84,H*.55);
    ctx.strokeStyle="#e0e0e0"; ctx.lineWidth=2; ctx.strokeRect(W*.08,H*.35,W*.84,H*.55);
    this.produce.forEach((p,i) => {
      const px=p.x*W, py=p.y*H, puls=Math.sin(t*.6+i*1.1)*4;
      const ap=Math.min((sT*6-i*.4),1); if (ap<=0) return;
      ctx.globalAlpha=ap;
      ctx.fillStyle="rgba(0,0,0,0.18)"; ctx.beginPath(); ctx.ellipse(px+4,py+p.r*.6+puls,p.r*.7,p.r*.18,0,0,Math.PI*2); ctx.fill();
      const gw=ctx.createRadialGradient(px-p.r*.25,py-p.r*.22,0,px,py,p.r*1.1);
      gw.addColorStop(0,p.color+"ff"); gw.addColorStop(0.7,p.color+"bb"); gw.addColorStop(1,p.color+"00");
      ctx.fillStyle=gw; ctx.beginPath(); ctx.arc(px,py+puls,p.r*1.12,0,Math.PI*2); ctx.fill();
      ctx.font=`${p.r*1.1|0}px serif`; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.fillText(p.emoji,px,py+puls);
      if (ap>0.6) {
        const la=(ap-0.6)/0.4; ctx.globalAlpha=la;
        const tw=ctx.measureText(p.label).width+24;
        ctx.fillStyle="rgba(255,255,255,0.92)"; this._rrect(ctx,px-tw/2,py+p.r+puls+10,tw,24,12); ctx.fill();
        ctx.fillStyle="#1b4332"; ctx.font="bold 11px 'Plus Jakarta Sans',sans-serif"; ctx.fillText(p.label,px,py+p.r+puls+22);
      }
      ctx.globalAlpha=1; ctx.textBaseline="alphabetic";
    });
    ["🌿","🌱","🍃","🌾"].forEach((h,i) => {
      ctx.font="28px serif"; ctx.textAlign="center"; ctx.globalAlpha=0.7+Math.sin(t+i)*.15;
      ctx.fillText(h, W*(0.1+i*0.22)+Math.sin(t*.3+i)*8, H*.88+Math.cos(t*.4+i)*4);
    });
    ctx.globalAlpha=1;
  }

  _scene3(ctx,W,H,t,sT) {
    const cg=ctx.createLinearGradient(0,0,0,H);
    cg.addColorStop(0,"#0a1628"); cg.addColorStop(0.5,"#0d3b2f"); cg.addColorStop(1,"#1b5e20");
    ctx.fillStyle=cg; ctx.fillRect(0,0,W,H);
    ctx.strokeStyle="rgba(100,180,120,0.14)"; ctx.lineWidth=1;
    for (let gx=0;gx<W;gx+=55) { ctx.beginPath(); ctx.moveTo(gx,0); ctx.lineTo(gx,H); ctx.stroke(); }
    for (let gy=0;gy<H;gy+=55) { ctx.beginPath(); ctx.moveTo(0,gy); ctx.lineTo(W,gy); ctx.stroke(); }
    for (let bx=0;bx<W;bx+=110) for (let by=0;by<H;by+=110) { ctx.fillStyle="rgba(22,90,50,0.07)"; ctx.fillRect(bx+8,by+8,94,94); }
    [0.15,0.5,0.8].forEach((px,i) => { ctx.fillStyle=`rgba(46,160,67,${0.12+Math.sin(t*.4+i)*.04})`; ctx.beginPath(); ctx.arc(px*W,(0.3+i*.22)*H,55+Math.sin(t*.3+i)*8,0,Math.PI*2); ctx.fill(); });
    this.mapPins.forEach((pin,i) => {
      const ap=Math.max(0,Math.min((sT-pin.delay/this.SCENE_DUR)*4,1)); if (ap<=0) return;
      const px=pin.x*W, py=pin.y*H, fl=Math.sin(t*.7+i*1.3)*6;
      ctx.globalAlpha=ap;
      const pulse=(t*.5+i*.25)%1;
      ctx.strokeStyle=pin.open?`rgba(76,175,80,${0.5-pulse*.5})`:`rgba(244,67,54,${0.4-pulse*.4})`; ctx.lineWidth=2;
      ctx.beginPath(); ctx.arc(px,py+fl,20+pulse*40,0,Math.PI*2); ctx.stroke();
      ctx.fillStyle=pin.open?"#4caf50":"#f44336";
      ctx.beginPath(); ctx.arc(px,py-20+fl,14,0,Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.moveTo(px-7,py-10+fl); ctx.lineTo(px+7,py-10+fl); ctx.lineTo(px,py+4+fl); ctx.closePath(); ctx.fill();
      ctx.font="13px serif"; ctx.textAlign="center"; ctx.fillText("🌿",px,py-13+fl);
      if (ap>0.5) {
        const ca=(ap-0.5)*2; ctx.globalAlpha=ca;
        const cw=175, ch=58, cx=Math.min(Math.max(px-87,10),W-185), cy=py-92+fl;
        ctx.fillStyle="rgba(255,255,255,0.96)"; this._rrect(ctx,cx,cy,cw,ch,10); ctx.fill();
        ctx.strokeStyle=pin.open?"#4caf50":"#f44336"; ctx.lineWidth=2; ctx.stroke();
        ctx.fillStyle="#1b4332"; ctx.font="bold 11px 'Plus Jakarta Sans',sans-serif"; ctx.textAlign="left"; ctx.fillText(pin.label,cx+10,cy+18);
        ctx.fillStyle=pin.open?"#2e7d32":"#c62828"; ctx.font="10px 'Plus Jakarta Sans',sans-serif";
        ctx.fillText(pin.open?"● Open Now":"○ Closed",cx+10,cy+34);
        ctx.fillStyle="#546e7a"; ctx.fillText("📍 "+pin.dist+" away",cx+10,cy+48);
      }
      ctx.globalAlpha=1;
    });
    const ba=Math.max(0,sT-.7)*3.3;
    if (ba>0) { ctx.globalAlpha=ba*.7; ctx.font=`bold ${W*.028|0}px 'Plus Jakarta Sans',sans-serif`; ctx.textAlign="center"; ctx.fillStyle="#a5d6a7"; ctx.fillText("FreshFind — Discover Nearby Markets",W/2,H*.92); ctx.globalAlpha=1; }
  }

  _scene4(ctx,W,H,t,sT) {
    const og=ctx.createLinearGradient(0,0,0,H);
    og.addColorStop(0,"#f1f8f3"); og.addColorStop(0.4,"#e8f5e9"); og.addColorStop(1,"#c8e6c9");
    ctx.fillStyle=og; ctx.fillRect(0,0,W,H);
    ctx.globalAlpha=0.06;
    for (let lx=0;lx<W;lx+=65) for (let ly=0;ly<H;ly+=65) { ctx.font="28px serif"; ctx.textAlign="center"; ctx.fillText("🌿",lx+32,ly+32+Math.sin(t*.2+lx*.01)*3); }
    ctx.globalAlpha=1;
    const cg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*.4);
    cg.addColorStop(0,"rgba(165,214,167,0.35)"); cg.addColorStop(1,"rgba(0,0,0,0)");
    ctx.fillStyle=cg; ctx.fillRect(0,0,W,H);
    ctx.strokeStyle="rgba(46,160,67,0.25)"; ctx.lineWidth=1;
    [0.45,0.58].forEach(y => { ctx.beginPath(); ctx.moveTo(W*.2,H*y); ctx.lineTo(W*.8,H*y); ctx.stroke(); });
    const fi=Math.min(sT*3,1); ctx.globalAlpha=fi;
    ctx.fillStyle="#1b4332"; ctx.font=`800 ${W*.065|0}px 'Plus Jakarta Sans',sans-serif`; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.fillText("FreshFind",W/2,H*.48);
    ctx.fillStyle="#2d6a4f"; ctx.font=`500 ${W*.022|0}px 'Plus Jakarta Sans',sans-serif`; ctx.fillText("Fresh All Along",W/2,H*.555);
    ctx.globalAlpha=1; ctx.textBaseline="alphabetic";
  }

  _drawCard(t,scene,sT) {
    const c=this.cardCanvas; if (!c) return;
    const ctx=c.getContext("2d"); const W=this.CW, H=this.CH;
    ctx.clearRect(0,0,W,H);
    const cs=(scene+1)%5;
    this._drawSky(ctx,W,H,cs,sT);
    if (cs===0) this._scene0(ctx,W,H,t+3,sT);
    if (cs===1) this._scene1(ctx,W,H,t+3,sT);
    if (cs===2) this._scene2(ctx,W,H,t+3,sT);
    if (cs===3) this._scene3(ctx,W,H,t+3,sT);
    if (cs===4) this._scene4(ctx,W,H,t+3,sT);
    this._bokehDraw(ctx,W,H,t+1.5);
    this._pollenDraw(ctx,W,H,0.6);
    this._vignette(ctx,W,H,0.6);
  }

  _person(ctx,x,y,h,fwd) {
    const w=h*.28, d=fwd?1:-1;
    ctx.fillStyle="rgba(30,20,10,0.65)";
    ctx.beginPath(); ctx.arc(x,y-h*.88,h*.1,0,Math.PI*2); ctx.fill();
    ctx.fillRect(x-w/2,y-h*.78,w,h*.45);
    ctx.fillRect(x-w/2-w*.55,y-h*.75,w*.5,h*.35);
    ctx.fillRect(x+w/2,y-h*.75,w*.5,h*.35);
    ctx.fillRect(x-w*.35,y-h*.33,w*.28,h*.33);
    ctx.fillRect(x+w*.07,y-h*.33,w*.28,h*.33);
    ctx.fillStyle="rgba(80,120,60,0.65)";
    ctx.fillRect(x+d*w*.6,y-h*.4,w*.32,h*.28);
  }

  _godRays(ctx,W,H,t) {
    ctx.save();
    this.godRays.forEach((ray,i) => {
      const a=ray.alpha*(0.7+Math.sin(t*.3+i)*.3);
      const sx=W*.5, sy=H*.05;
      const g=ctx.createLinearGradient(sx,sy,sx+Math.cos(ray.angle)*W,sy+Math.sin(ray.angle)*H*1.4);
      g.addColorStop(0,`rgba(255,230,120,${a})`); g.addColorStop(1,"rgba(255,230,120,0)");
      ctx.fillStyle=g; ctx.beginPath(); ctx.moveTo(sx,sy);
      ctx.lineTo(sx+Math.cos(ray.angle-.05)*W+ray.width,sy+Math.sin(ray.angle)*H*1.4);
      ctx.lineTo(sx+Math.cos(ray.angle+.05)*W+ray.width,sy+Math.sin(ray.angle)*H*1.4);
      ctx.closePath(); ctx.fill();
    });
    ctx.restore();
  }

  _pollenDraw(ctx,W,H,as=1) {
    this.pollen.forEach(p => {
      const a=p.alpha*as*(0.6+Math.sin(p.flicker)*.4);
      ctx.beginPath(); ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,240,150,${a})`; ctx.fill();
    });
  }

  _bokehDraw(ctx,W,H,t) {
    this.bokeh.forEach((b,i) => {
      const bx=((b.x+t*b.speed*.5+i*.12)%1.2-.1)*W, by=b.y*H;
      ctx.beginPath(); ctx.arc(bx,by,b.r,0,Math.PI*2);
      const g=ctx.createRadialGradient(bx,by,0,bx,by,b.r);
      const ah=Math.floor(b.alpha*255).toString(16).padStart(2,"0");
      g.addColorStop(0,b.color+ah); g.addColorStop(1,b.color+"00");
      ctx.fillStyle=g; ctx.fill();
    });
  }

  _vignette(ctx,W,H,s=1) {
    const g=ctx.createRadialGradient(W/2,H/2,H*.2,W/2,H/2,H*.85);
    g.addColorStop(0,"rgba(0,0,0,0)"); g.addColorStop(1,`rgba(0,0,0,${0.65*s})`);
    ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
  }

  _grain(ctx,W,H,t) {
    const seed=Math.floor(t*24);
    ctx.fillStyle="rgba(255,255,255,0.018)";
    for (let n=0;n<400;n++) { ctx.fillRect(((seed*1234+n*5678)%W+W)%W, ((seed*8765+n*4321)%H+H)%H, 1, 1); }
  }

  _updateParticles(dt) {
    this.pollen.forEach(p => {
      p.x=(p.x+p.vx+1)%1; p.y=(p.y+p.vy+1)%1; p.flicker+=0.04;
    });
  }

  _rrect(ctx,x,y,w,h,r) {
    ctx.beginPath();
    ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y); ctx.quadraticCurveTo(x+w,y,x+w,y+r);
    ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
    ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r);
    ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath();
  }

  destroy() { if (this.rafId) cancelAnimationFrame(this.rafId); }
}


/* === [Module: components/cinematicIntro.js] === */
// [import stripped]

/**
 * CinematicIntro & Fresh Food Opener Motion Engine
 * Inspired by Envato Elements "Fresh Food Cooking Show Intro with Textured Typography" (MULYKD4 / Pinterest)
 * Features:
 * - Dynamic tumbling fresh herb leaves (basil, mint, sage) with 3D rotation & vein highlights
 * - Translucent morning dew droplets & golden harvest pollen spores
 * - Interactive cursor magnetic webs & shockwave bursts
 * - Topic-tailored kinetic typography cycling through farm produce
 * - Smooth 3D parallax tilt with lerp damping for video card & produce badges
 * - Infinite seamless marquee ticker
 * - Automatic pause on scroll for 60fps performance
 */
class CinematicIntro {
  constructor(app) {
    this.app = app;
    this.heroSection = document.getElementById('home');
    this.canvas = document.getElementById('heroMotionCanvas');
    this.ctx = null;

    // 3D Video & Card elements
    this.hero3DStage = document.getElementById('hero3DStage');
    this.hero3DCard = document.getElementById('hero3DCard');
    this.heroBgVideo = document.getElementById('heroBgVideo');
    this.heroVideo = document.getElementById('heroHarvestVideo');
    this.heroVideoGlow = document.getElementById('heroVideoAmbientGlow');
    this.playPauseBtn = document.getElementById('heroVideoPlayPauseBtn');
    this.playIcon = document.getElementById('heroVideoPlayIcon');
    this.soundBtn = document.getElementById('heroVideoSoundBtn');
    this.soundIcon = document.getElementById('heroVideoSoundIcon');

    // Kinetic Typography element
    this.kineticWordEl = document.getElementById('heroKineticWord');
    this.kineticWords = [
      '100% ORGANIC CROPS',
      'CRISP ORCHARD APPLES',
      'HEIRLOOM CARROTS',
      'FARM-TO-TABLE FRESH',
      'ZERO FOOD MILES',
      'GENERATIONAL GROWERS',
      'RAW WILDFLOWER HONEY',
      'HARVESTED THIS MORNING'
    ];
    this.kineticIndex = 0;
    this.kineticTimer = null;

    // Canvas simulation state
    this.particles = [];
    this.sparkBursts = [];
    this.animFrameId = null;
    this.isCanvasActive = true;
    this.mouse = { x: -9999, y: -9999, isHovering: false, lastX: 0, lastY: 0, speed: 0 };

    // 3D Tilt lerp interpolation
    this.tiltTarget = { x: 0, y: 0 };
    this.tiltCurrent = { x: 0, y: 0 };
    this.tiltFrameId = null;

    // Scroll Parallax State
    this.scrollY = 0;
    this.scrollRAFId = null;
    this.heroBrandDisplay = null;
    this.heroContentCol = null;
  }

  init() {
    this.initMotionCanvas();
    this.initKineticTypography();
    this.initHeroVideo();
    this.setupHeroVideoControls();
    this.setupHero3DParallax();
    this.setupHeroScrollParallax();
    this.initHarvestTickerMarquee();
    this.setupVisibilityObserver();
  }

  /**
   * 1. FRESH FOOD MOTION CANVAS ENGINE
   * Renders floating herb leaves, dew drops, and golden pollen spores
   */
  initMotionCanvas() {
    if (!this.canvas || !this.heroSection) return;
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) return;

    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas(), { passive: true });

    // Seed dynamic fresh ingredients and particles (optimized for silky 60fps)
    const particleCount = Math.min(22, Math.floor((this.canvas.width * this.canvas.height) / 45000));
    this.particles = [];
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(this.createParticle());
    }

    // Mouse tracking with speed detection
    this.heroSection.addEventListener('mousemove', (e) => {
      const rect = this.heroSection.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      const dx = currentX - this.mouse.lastX;
      const dy = currentY - this.mouse.lastY;
      this.mouse.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 30);

      this.mouse.x = currentX;
      this.mouse.y = currentY;
      this.mouse.lastX = currentX;
      this.mouse.lastY = currentY;
      this.mouse.isHovering = true;
    }, { passive: true });

    this.heroSection.addEventListener('mouseleave', () => {
      this.mouse.x = -9999;
      this.mouse.y = -9999;
      this.mouse.isHovering = false;
      this.mouse.speed = 0;
    });

    // Tap/Click particle shockwave burst
    this.heroSection.addEventListener('click', (e) => {
      if (e.target.closest('button, a, select, input, .quick-find-bar, .hero-video-controls')) return;
      const rect = this.heroSection.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      this.spawnSparkBurst(clickX, clickY);
    });

    this.renderCanvas();
  }

  resizeCanvas() {
    if (!this.canvas || !this.heroSection) return;
    const rect = this.heroSection.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx?.scale(dpr, dpr);
    this.cssWidth = rect.width;
    this.cssHeight = rect.height;
  }

  createParticle(fromClick = false, clickX = 0, clickY = 0) {
    const types = ['herb_leaf', 'dew_drop', 'harvest_spore', 'citrus_mote'];
    const rand = Math.random();
    let type = 'harvest_spore';
    if (rand < 0.35) type = 'herb_leaf';
    else if (rand < 0.60) type = 'dew_drop';
    else if (rand < 0.85) type = 'citrus_mote';

    let colorBase = 'rgba(34, 197, 94, ';
    if (type === 'citrus_mote') colorBase = 'rgba(245, 158, 11, ';
    else if (type === 'dew_drop') colorBase = 'rgba(209, 250, 229, ';
    else if (type === 'harvest_spore') colorBase = 'rgba(251, 191, 36, ';

    const size = type === 'herb_leaf' ? Math.random() * 5 + 4 : Math.random() * 3 + 1.2;
    const baseAlpha = Math.random() * 0.5 + 0.3;

    return {
      type: type,
      x: fromClick ? clickX : Math.random() * (this.cssWidth || 800),
      y: fromClick ? clickY : Math.random() * (this.cssHeight || 600),
      radius: size,
      colorBase: colorBase,
      alpha: baseAlpha,
      baseAlpha: baseAlpha,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -(Math.random() * 0.7 + 0.25),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.04,
      scaleX: 1,
      scaleY: Math.random() * 0.4 + 0.8,
      wobbleSpeed: Math.random() * 0.03 + 0.015,
      wobbleOffset: Math.random() * Math.PI * 2,
      wobbleRadius: Math.random() * 2 + 0.8
    };
  }

  spawnSparkBurst(x, y) {
    audioManager?.playClick?.();
    const count = 16;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i + (Math.random() * 0.3);
      const speed = Math.random() * 4.2 + 2.2;
      this.sparkBursts.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 3.5 + 2,
        color: i % 2 === 0 ? 'rgba(250, 204, 21, ' : 'rgba(74, 222, 128, ',
        alpha: 1,
        life: 1,
        decay: Math.random() * 0.03 + 0.02
      });
    }
  }

  renderCanvas() {
    if (!this.isCanvasActive) return;

    const ctx = this.ctx;
    if (!ctx) return;

    ctx.clearRect(0, 0, this.cssWidth || 1000, this.cssHeight || 800);

    const now = performance.now() * 0.001;

    // 1. Draw connecting nutrient web filaments
    const maxDistance = 105;
    const pLen = this.particles.length;
    for (let i = 0; i < pLen; i++) {
      const p1 = this.particles[i];
      for (let j = i + 1; j < pLen; j++) {
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const lineAlpha = (1 - dist / maxDistance) * 0.12;
          ctx.strokeStyle = `rgba(34, 197, 94, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Connect to mouse pointer
      if (this.mouse.isHovering) {
        const mdx = p1.x - this.mouse.x;
        const mdy = p1.y - this.mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 145) {
          const mAlpha = (1 - mDist / 145) * 0.38;
          ctx.strokeStyle = `rgba(250, 204, 21, ${mAlpha})`;
          ctx.lineWidth = 1.3;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(this.mouse.x, this.mouse.y);
          ctx.stroke();

          // Smooth magnetic repulsion/attraction
          const force = (1 - mDist / 145) * 1.8;
          p1.x += (mdx / mDist) * force;
          p1.y += (mdy / mDist) * force;
        }
      }
    }

    // 2. Render & animate particles (Herb leaves, dew drops, spores)
    for (let i = 0; i < pLen; i++) {
      const p = this.particles[i];

      // Update position & rotation
      p.rotation += p.rotationSpeed;
      p.x += p.vx + Math.sin(now * p.wobbleSpeed * 60 + p.wobbleOffset) * (p.wobbleRadius * 0.45);
      p.y += p.vy;

      // Wrap boundaries
      if (p.y < -30) {
        p.y = (this.cssHeight || 700) + 20;
        p.x = Math.random() * (this.cssWidth || 900);
      }
      if (p.x < -30) p.x = (this.cssWidth || 900) + 20;
      if (p.x > (this.cssWidth || 900) + 30) p.x = -20;

      if (p.type === 'herb_leaf') {
        // Draw 3D tumbling fresh herb leaf
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(p.scaleX, p.scaleY);
        ctx.beginPath();
        ctx.moveTo(0, -p.radius * 2);
        ctx.quadraticCurveTo(p.radius * 1.5, -p.radius * 0.4, 0, p.radius * 2);
        ctx.quadraticCurveTo(-p.radius * 1.5, -p.radius * 0.4, 0, -p.radius * 2);
        ctx.fillStyle = `${p.colorBase}${p.alpha})`;
        ctx.shadowColor = p.colorBase + '0.7)';
        ctx.shadowBlur = 6;
        ctx.fill();

        // Delicate leaf vein spine
        ctx.strokeStyle = `rgba(255, 255, 255, ${p.alpha * 0.45})`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(0, -p.radius * 1.6);
        ctx.lineTo(0, p.radius * 1.6);
        ctx.stroke();
        ctx.restore();
      } else {
        // Glowing dew drop or golden pollen spore
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${p.alpha})`;
        ctx.shadowColor = p.colorBase + '0.85)';
        ctx.shadowBlur = p.type === 'citrus_mote' ? 9 : 6;
        ctx.fill();
      }
    }
    ctx.shadowBlur = 0;

    // 3. Render spark shockwave bursts
    for (let i = this.sparkBursts.length - 1; i >= 0; i--) {
      const s = this.sparkBursts[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vx *= 0.93;
      s.vy *= 0.93;
      s.life -= s.decay;

      if (s.life <= 0) {
        this.sparkBursts.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius * s.life, 0, Math.PI * 2);
      ctx.fillStyle = `${s.color}${s.life})`;
      ctx.shadowColor = s.color + '0.95)';
      ctx.shadowBlur = 12;
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    this.animFrameId = requestAnimationFrame(() => this.renderCanvas());
  }

  /**
   * 2. KINETIC TYPOGRAPHY CYCLER (Cooking Show Opener Textured Words)
   */
  initKineticTypography() {
    if (!this.kineticWordEl) return;

    this.kineticTimer = setInterval(() => {
      this.kineticWordEl.classList.add('flipping');

      setTimeout(() => {
        this.kineticIndex = (this.kineticIndex + 1) % this.kineticWords.length;
        this.kineticWordEl.textContent = this.kineticWords[this.kineticIndex];
        this.kineticWordEl.classList.remove('flipping');
        this.kineticWordEl.classList.add('entering');

        requestAnimationFrame(() => {
          setTimeout(() => {
            this.kineticWordEl.classList.remove('entering');
          }, 45);
        });
      }, 420);
    }, 3200);
  }

  /**
   * 3. VIDEO CONTROLS & AMBIENT GLOW
   */
  initHeroVideo() {
    const playSafe = (vid) => {
      if (!vid) return;
      vid.muted = true;
      const p = vid.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {});
      }
    };
    playSafe(this.heroBgVideo);
    playSafe(this.heroVideo);
  }

  setupHeroVideoControls() {
    this.playPauseBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      audioManager?.playClick?.();
      const isPaused = this.heroVideo ? this.heroVideo.paused : (this.heroBgVideo ? this.heroBgVideo.paused : false);

      if (isPaused) {
        this.heroVideo?.play()?.catch?.(() => {});
        this.heroBgVideo?.play()?.catch?.(() => {});
        if (this.playIcon) this.playIcon.textContent = '⏸ Pause';
        this.app?.showToast?.('Harvest Motion Reel Playing ▶');
      } else {
        this.heroVideo?.pause();
        this.heroBgVideo?.pause();
        if (this.playIcon) this.playIcon.textContent = '▶ Play';
        this.app?.showToast?.('Harvest Motion Reel Paused ⏸');
      }
    });

    this.soundBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      audioManager?.playClick?.();
      const currentMuted = this.heroVideo ? this.heroVideo.muted : true;
      const newMuted = !currentMuted;

      if (this.heroVideo) this.heroVideo.muted = newMuted;
      if (this.heroBgVideo) this.heroBgVideo.muted = newMuted;

      if (this.soundIcon) {
        this.soundIcon.textContent = newMuted ? '🔇 Mute' : '🔊 Sound On';
      }
      this.app?.showToast?.(newMuted ? 'Video Muted 🔇' : 'Ambient Harvest Sound Enabled 🔊');
    });
  }

  /**
   * 4. 3D CARD & FRESH INGREDIENTS PARALLAX TILT
   */
  setupHero3DParallax() {
    if (!this.heroSection || !this.hero3DCard) return;

    this.heroSection.addEventListener('mousemove', (e) => {
      const rect = this.hero3DCard.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - cardCenterX) / 20;
      const deltaY = (e.clientY - cardCenterY) / 20;

      this.tiltTarget.x = Math.max(-14, Math.min(14, deltaX));
      this.tiltTarget.y = Math.max(-14, Math.min(14, -deltaY));

      if (!this.tiltFrameId) {
        this.tiltFrameId = requestAnimationFrame(() => this.updateTilt());
      }
    }, { passive: true });

    this.heroSection.addEventListener('mouseleave', () => {
      this.tiltTarget.x = 0;
      this.tiltTarget.y = 0;
      if (!this.tiltFrameId) {
        this.tiltFrameId = requestAnimationFrame(() => this.updateTilt());
      }
    });
  }

  updateTilt() {
    this.tiltCurrent.x += (this.tiltTarget.x - this.tiltCurrent.x) * 0.1;
    this.tiltCurrent.y += (this.tiltTarget.y - this.tiltCurrent.y) * 0.1;

    if (this.hero3DCard) {
      this.hero3DCard.style.transform = `perspective(1100px) rotateX(${this.tiltCurrent.y.toFixed(2)}deg) rotateY(${this.tiltCurrent.x.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;
    }

    if (this.heroVideoGlow) {
      this.heroVideoGlow.style.transform = `translate3d(${-this.tiltCurrent.x * 2.8}px, ${-this.tiltCurrent.y * 2.8}px, 0)`;
    }

    const badges = this.heroSection.querySelectorAll('.hero-3d-badge');
    badges.forEach((b, idx) => {
      const depth = (idx % 2 === 0 ? 1 : -1) * 1.6;
      b.style.transform = `translate3d(${(-this.tiltCurrent.x * depth).toFixed(1)}px, ${(-this.tiltCurrent.y * depth).toFixed(1)}px, 25px)`;
    });

    const isClose = Math.abs(this.tiltTarget.x - this.tiltCurrent.x) < 0.05 && Math.abs(this.tiltTarget.y - this.tiltCurrent.y) < 0.05;
    if (!isClose) {
      this.tiltFrameId = requestAnimationFrame(() => this.updateTilt());
    } else {
      this.tiltFrameId = null;
    }
  }

  /**
   * 5. SCROLL-DRIVEN 3D PARALLAX (Fresh Find Brand Float + Stage Tilt + Badge Z-Depth)
   * Creates a premium cinematic depth experience on page scroll.
   */
  setupHeroScrollParallax() {
    if (!this.heroSection) return;

    // Cache DOM elements for performance
    this.heroBrandDisplay = this.heroSection.querySelector('.hero-brand-display');
    this.heroContentCol = this.heroSection.querySelector('.hero-content-col');
    this.heroTitleEl = this.heroSection.querySelector('.hero-title');

    let ticking = false;

    const onScroll = () => {
      this.scrollY = window.scrollY;
      if (!ticking) {
        ticking = true;
        this.scrollRAFId = requestAnimationFrame(() => {
          this._applyScrollParallax(this.scrollY);
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  _applyScrollParallax(scrolled) {
    if (!this.heroSection) return;

    const heroHeight = this.heroSection.offsetHeight;
    // Normalized 0→1 progress through hero section
    const progress = Math.min(scrolled / heroHeight, 1);

    // --- BRAND TITLE: Drift upward faster than page for depth illusion ---
    if (this.heroBrandDisplay) {
      const drift = scrolled * 0.28;
      const fadeOut = Math.max(0, 1 - progress * 2.2);
      this.heroBrandDisplay.style.transform = `translate3d(0, ${-drift}px, 0) scale(${1 + progress * 0.04})`;
      this.heroBrandDisplay.style.opacity = fadeOut.toString();
    }

    // --- HERO CONTENT COLUMN: Gentle upward drift with parallax ---
    if (this.heroContentCol) {
      const colDrift = scrolled * 0.18;
      this.heroContentCol.style.transform = `translate3d(0, ${-colDrift}px, 0)`;
    }

    // --- 3D STAGE: Dynamic perspective tilt on scroll ---
    if (this.hero3DStage) {
      const scrollTiltX = progress * 6;
      const scrollTiltY = progress * -4;
      // Only apply scroll tilt if mouse tilt is near zero (don't fight with mousemove)
      const isMouseIdle = Math.abs(this.tiltCurrent.x) < 1 && Math.abs(this.tiltCurrent.y) < 1;
      if (isMouseIdle) {
        this.hero3DStage.style.transform = `perspective(1400px) rotateX(${scrollTiltX}deg) rotateY(${scrollTiltY}deg) translateY(${scrolled * 0.12}px)`;
      }
    }

    // --- FLOATING BADGES: Multi-speed z-depth parallax ---
    const badges = this.heroSection.querySelectorAll('.hero-3d-badge');
    const speeds = [0.55, 0.15, 0.38, 0.22, 0.48, 0.30, 0.42, 0.18];
    badges.forEach((badge, i) => {
      const speed = speeds[i % speeds.length];
      const dir = i % 2 === 0 ? 1 : -1;
      const yShift = scrolled * speed * dir;
      const xShift = scrolled * (speed * 0.35) * (i % 3 === 0 ? 1 : -1);
      badge.style.transform = `translate3d(${xShift.toFixed(1)}px, ${yShift.toFixed(1)}px, 0)`;
      const fadeStart = 0.5;
      const badgeFade = Math.max(0, 1 - Math.max(0, progress - fadeStart) / (1 - fadeStart));
      badge.style.opacity = badgeFade.toString();
    });

    // --- AMBIENT GLOW: Counterparallax for depth ---
    const ambientGlow = this.heroSection.querySelector('.hero-ambient-aurora');
    if (ambientGlow) {
      ambientGlow.style.transform = `translate3d(0, ${scrolled * 0.35}px, 0) scale(${1 + progress * 0.15})`;
      ambientGlow.style.opacity = Math.max(0, 0.85 - progress * 0.9).toString();
    }
  }

  /**
   * 6. INFINITE SEAMLESS LIVE HARVEST MARQUEE TICKER
   */
  initHarvestTickerMarquee() {
    const track = document.getElementById('heroTickerTrack');
    if (!track) return;
    track.innerHTML += track.innerHTML;
  }

  /**
   * 6. SCROLL VISIBILITY OBSERVER (0% CPU when out of view)
   */
  setupVisibilityObserver() {
    if (!this.heroSection) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.isCanvasActive) {
            this.isCanvasActive = true;
            this.renderCanvas();
          }
          this.heroBgVideo?.play()?.catch?.(() => {});
          this.heroVideo?.play()?.catch?.(() => {});
        } else {
          this.isCanvasActive = false;
          if (this.animFrameId) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
          }
          this.heroBgVideo?.pause();
          this.heroVideo?.pause();
        }
      });
    }, { threshold: 0.05 });

    observer.observe(this.heroSection);
  }

  destroy() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    if (this.tiltFrameId) cancelAnimationFrame(this.tiltFrameId);
    if (this.scrollRAFId) cancelAnimationFrame(this.scrollRAFId);
    if (this.kineticTimer) clearInterval(this.kineticTimer);
  }
}


/* === [Module: components/header.js] === */
// [import stripped]

class Header {
  constructor(app) {
    this.app = app;
    this.clockEl = document.getElementById('liveClockText');
    this.themeToggleBtn = document.getElementById('themeToggleBtn');
    this.soundToggleBtn = document.getElementById('soundToggleBtn');
    this.mobileToggleBtn = document.getElementById('mobileMenuToggle');
    this.mainNav = document.getElementById('mainNav');
    this.bookmarkBadge = document.getElementById('headerBookmarkBadge');
    this.searchInput = document.getElementById('navSearchInput');
    this.searchBtn = document.getElementById('navSearchSubmitBtn');
    this.notifyBtn = document.getElementById('navNotifyBtn');
    this.cartBtn = document.getElementById('navCartBtn');
  }

  init() {
    this.startClock();
    this.setupThemeToggle();
    this.setupSoundToggle();
    this.setupMobileMenu();
    this.setupScrollEffect();
    this.setupSearch();
    this.setupActions();
    this.syncInitialBadge();
  }

  syncInitialBadge() {
    try {
      const saved = localStorage.getItem('freshfind_user_bookmarks');
      if (saved) {
        const data = JSON.parse(saved);
        const total = Object.keys(data.markets || {}).length + Object.keys(data.market || {}).length + Object.keys(data.produce || {}).length;
        this.updateBookmarkCount(total);
      } else {
        this.updateBookmarkCount(0);
      }
    } catch (e) {
      this.updateBookmarkCount(0);
    }
  }

  startClock() {
    const updateTime = () => {
      const els = document.querySelectorAll('#liveClockText, .live-clock-text');
      if (!els.length) return;
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const dayStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      els.forEach(el => {
        el.textContent = `${dayStr} • ${timeStr}`;
      });
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  setupThemeToggle() {
    if (!this.themeToggleBtn) return;
    const savedTheme = localStorage.getItem('freshfind_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcon(savedTheme);

    this.themeToggleBtn.addEventListener('click', () => {
      audioManager.playClick();
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('freshfind_theme', nextTheme);
      this.updateThemeIcon(nextTheme);
      this.app?.showToast(`Switched to ${nextTheme} mode`);
    });
  }

  updateThemeIcon(theme) {
    if (!this.themeToggleBtn) return;
    this.themeToggleBtn.innerHTML = theme === 'dark'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }

  setupSoundToggle() {
    if (!this.soundToggleBtn) return;
    this.updateSoundIcon(audioManager.isMuted());
    this.soundToggleBtn.addEventListener('click', () => {
      const isMuted = audioManager.toggleMute();
      this.updateSoundIcon(isMuted);
      if (!isMuted) audioManager.playChime();
      this.app?.showToast(isMuted ? 'Sound muted' : 'Sound enabled');
    });
  }

  updateSoundIcon(isMuted) {
    if (!this.soundToggleBtn) return;
    this.soundToggleBtn.innerHTML = isMuted
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
  }

  setupMobileMenu() {
    if (this.mobileToggleBtn && this.mainNav) {
      this.mobileToggleBtn.addEventListener('click', () => {
        audioManager.playClick();
        this.mainNav.classList.toggle('open');
      });

      // Close on link click
      this.mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          this.mainNav.classList.remove('open');
        });
      });
    }
  }

  setupScrollEffect() {
    const headerWrapper = document.querySelector('.site-header-wrapper') || document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        headerWrapper?.classList.add('scrolled');
      } else {
        headerWrapper?.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  setupSearch() {
    const handleSearch = () => {
      const q = this.searchInput?.value.trim();
      if (!q) return;
      audioManager.playClick();

      // If marketDirectory exists on the page
      if (this.app?.marketDirectory) {
        const dirEl = document.getElementById('directory');
        if (dirEl) dirEl.scrollIntoView({ behavior: 'smooth' });
        const dirSearch = document.getElementById('marketSearchInput');
        if (dirSearch) {
          dirSearch.value = q;
          this.app.marketDirectory.render();
        }
        this.app?.showToast(`Showing results for "${q}"`);
      } else {
        // Redirect to homepage directory with query
        window.location.href = `index.html#directory`;
      }
    };

    this.searchBtn?.addEventListener('click', handleSearch);
    this.searchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSearch();
    });
  }

  setupActions() {
    // Notification Bell trigger
    this.notifyBtn?.addEventListener('click', () => {
      audioManager.playChime();
      this.app?.showToast('All 8 local farmers markets open and operating on regular schedule!');
    });

    // Saved Bookmarks Button Trigger
    this.cartBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      audioManager.playClick();
      if (this.app?.bookmarks && document.getElementById('bookmarksDrawer')) {
        this.app.bookmarks.open();
      } else {
        window.location.href = 'index.html#open-bookmarks';
      }
    });
  }

  updateBookmarkCount(count) {
    document.querySelectorAll('#headerBookmarkBadge, .nav-cart-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  }
}


/* === [Module: components/marketDetail.js] === */
// [import stripped]
// [import stripped]

class MarketDetail {
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


/* === [Module: components/marketDirectory.js] === */
// [import stripped]
// [import stripped]

class MarketDirectory {
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


/* === [Module: components/produceGuide.js] === */
// [import stripped]
// [import stripped]

class ProduceGuide {
  constructor(app) {
    this.app = app;
    this.gridContainer = document.getElementById('produceGrid');
    this.categoryFiltersContainer = document.getElementById('produceCategoryFilters');
    this.seasonTabsContainer = document.getElementById('seasonTabsContainer');
    this.seasonCardContainer = document.getElementById('seasonShowcaseCard');

    this.activeCategory = 'all';
    this.activeSeason = 'Summer';
  }

  init() {
    this.setupCategoryFilters();
    this.setupSeasonTabs();
    this.renderProduce();
    this.renderSeasonCard();
  }

  setupCategoryFilters() {
    if (!this.categoryFiltersContainer) return;
    const categories = ['all', 'Fruits', 'Vegetables', 'Herbs', 'Dairy & Eggs', 'Honey & Preserves'];

    this.categoryFiltersContainer.innerHTML = categories.map(cat => `
      <button class="season-tab-btn ${cat === this.activeCategory ? 'active' : ''}" data-cat="${cat}">
        ${cat === 'all' ? '<svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg> All Produce' : cat}
      </button>
    `).join('');

    this.categoryFiltersContainer.querySelectorAll('.season-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        audioManager.playClick();
        this.activeCategory = e.currentTarget.getAttribute('data-cat');
        this.categoryFiltersContainer.querySelectorAll('.season-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.renderProduce();
      });
    });
  }

  setupSeasonTabs() {
    if (!this.seasonTabsContainer) return;
    const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];

    const seasonIcons = {
      Spring: '<svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/><path d="M12 17a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0v-1a4 4 0 0 0-4-4z"/><path d="M22 12a4 4 0 0 0-4-4h-1a4 4 0 0 0 0 8h1a4 4 0 0 0 4-4z"/><path d="M2 12a4 4 0 0 0 4-4h1a4 4 0 0 0 0 8H6a4 4 0 0 0-4-4z"/></svg>',
      Summer: '<svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
      Autumn: '<svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
      Winter: '<svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="4.93" y1="19.07" x2="19.07" y2="4.93"/></svg>'
    };

    this.seasonTabsContainer.innerHTML = seasons.map(s => `
      <button class="season-tab-btn ${s === this.activeSeason ? 'active' : ''}" data-season="${s}">
        <span>${seasonIcons[s]}</span> ${s}
      </button>
    `).join('');

    this.seasonTabsContainer.querySelectorAll('.season-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        audioManager.playClick();
        this.activeSeason = e.currentTarget.getAttribute('data-season');
        this.seasonTabsContainer.querySelectorAll('.season-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.renderSeasonCard();
      });
    });
  }

  renderSeasonCard() {
    if (!this.seasonCardContainer) return;
    const seasonal = dataService.getSeasonalData();
    if (!seasonal || !seasonal.seasons) return;

    const currentSeasonData = seasonal.seasons[this.activeSeason];
    const featuredProduce = dataService.getProduce().filter(p => currentSeasonData.featuredProduceIds.includes(p.id));

    this.seasonCardContainer.innerHTML = `
      <div class="season-highlight-info">
        <span class="season-period-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px; margin-right:4px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          ${currentSeasonData.period}
        </span>
        <h3>${currentSeasonData.name}</h3>
        <p style="font-size:1.05rem; margin-bottom:1.25rem;">${currentSeasonData.tagline}</p>
        
        <div class="season-quote-box">
          <div style="font-weight:700; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 1 5 5v2H7V7a5 5 0 0 1 5-5z"/><path d="M4 14h16v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7z"/></svg>
            Chef Suggestion:
          </div>
          <span style="font-style:italic;">"${currentSeasonData.chefTip}"</span>
        </div>

        <div style="font-size:0.88rem; color:var(--primary); font-weight:600; display:flex; align-items:center; gap:0.4rem;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          Eco-Basket Fact: ${currentSeasonData.ecoFact}
        </div>
      </div>

      <div>
        <h4 style="margin-bottom:1rem; font-size:1.1rem;">Top Peak In-Season Crops</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
          ${featuredProduce.map(p => `
            <div style="background:var(--bg-muted); border:1px solid var(--border-light); border-radius:var(--radius-md); padding:0.85rem; display:flex; align-items:center; gap:0.65rem; cursor:pointer;" class="quick-view-crop" data-id="${p.id}">
              <img src="${p.image}" alt="${p.name}" style="width:48px; height:48px; border-radius:var(--radius-sm); object-fit:cover;">
              <div>
                <h5 style="font-size:0.88rem; margin-bottom:0.15rem;">${p.name}</h5>
                <span style="font-size:0.72rem; color:var(--accent); font-weight:700;">${p.category}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.seasonCardContainer.querySelectorAll('.quick-view-crop').forEach(card => {
      card.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.openProduceModal(id);
      });
    });
  }

  renderProduce() {
    if (!this.gridContainer) return;
    let items = dataService.getProduce();

    if (this.activeCategory !== 'all') {
      items = items.filter(p => p.category === this.activeCategory);
    }

    this.gridContainer.innerHTML = items.map((p, idx) => {
      const isFav = this.app.isBookmarked('produce', p.id);
      const delayMs = idx * 60;
      return `
        <div class="produce-card" data-id="${p.id}" style="animation: revealCard 0.5s ${delayMs}ms cubic-bezier(0.16,1,0.3,1) both;">
          <div class="produce-img-wrap">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <span class="produce-category-badge">${p.category}</span>
            <button class="market-fav-btn ${isFav ? 'favorited' : ''}" data-type="produce" data-id="${p.id}" title="Save to Bookmarks" aria-label="Save">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>

          <div class="produce-card-body">
            <div class="produce-header-row">
              <h3 class="produce-title">${p.name}</h3>
              <span class="produce-season-pill">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" style="vertical-align:-2px; margin-right:3px;"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>
                ${p.season[0]}
              </span>
            </div>

            <p class="produce-desc">${p.description}</p>

            <div class="produce-markets-count" style="cursor:pointer;" data-id="${p.id}">
              <span>Found in ${p.availableMarkets.length} local markets</span> →
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.gridContainer.querySelectorAll('.produce-card, .produce-markets-count').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('.market-fav-btn')) return;
        const id = el.getAttribute('data-id') || el.closest('.produce-card').getAttribute('data-id');
        this.openProduceModal(id);
      });
    });

    this.gridContainer.querySelectorAll('.market-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        this.app.toggleBookmark('produce', id);
        this.renderProduce();
      });
    });

    // 3D tilt on produce cards
    this.gridContainer.querySelectorAll('.produce-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-10px) scale(1.025)`;
        card.style.transition = 'transform 0.1s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      });
    });
  }

  openProduceModal(produceId) {
    const p = dataService.getProduceById(produceId);
    if (!p) return;

    audioManager.playChime();
    const modal = document.getElementById('marketDetailModal');
    const content = document.getElementById('marketDetailContent');

    const availableMarketObjs = dataService.getMarkets().filter(m => p.availableMarkets.includes(m.id));

    content.innerHTML = `
      <div style="position:relative;">
        <img src="${p.image}" alt="${p.name}" style="width:100%; height:280px; object-fit:cover; border-radius:var(--radius-xl) var(--radius-xl) 0 0;">
      </div>
      <div style="padding: 2rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <h2 style="font-size:1.85rem; color:var(--text-main);">${p.name}</h2>
          <span style="font-weight:700; color:var(--accent); background:var(--bg-muted); padding:0.35rem 0.85rem; border-radius:var(--radius-full); font-size:0.85rem;">
            ${p.category}
          </span>
        </div>

        <p style="font-size:1.05rem; line-height:1.7; color:var(--text-muted); margin-bottom:1.5rem;">
          ${p.description}
        </p>

        <div style="background:var(--bg-subtle); border:1px solid var(--border-medium); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.5rem;">
          <h4 style="margin-bottom:0.4rem; color:var(--primary); display:flex; align-items:center; gap:6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            Nutritional Benefits
          </h4>
          <p style="font-size:0.92rem; color:var(--text-main); margin-bottom:0.75rem;">${p.nutrition}</p>
          <h4 style="margin-bottom:0.4rem; color:var(--primary); display:flex; align-items:center; gap:6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Storage Recommendation
          </h4>
          <p style="font-size:0.92rem; color:var(--text-main); margin:0;">${p.storageTip}</p>
        </div>

        <div style="margin-bottom:1.75rem;">
          <h4 style="margin-bottom:0.5rem; display:flex; align-items:center; gap:6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Peak Harvest Months
          </h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
            ${p.peakMonths.map(m => `
              <span style="background:var(--bg-muted); border:1px solid var(--border-light); padding:0.25rem 0.65rem; border-radius:var(--radius-full); font-size:0.82rem; font-weight:600;">
                ${m}
              </span>
            `).join('')}
          </div>
        </div>

        <div>
          <h4 style="margin-bottom:0.75rem; display:flex; align-items:center; gap:6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Where to Buy (${availableMarketObjs.length} Verified Markets)
          </h4>
          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            ${availableMarketObjs.map(m => `
              <div style="background:var(--bg-surface); border:1px solid var(--border-medium); border-radius:var(--radius-md); padding:0.85rem 1.25rem; display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <h5 style="font-size:0.98rem; margin-bottom:0.2rem;">${m.name}</h5>
                  <span style="font-size:0.82rem; color:var(--text-muted); display:flex; align-items:center; gap:4px;">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    ${m.area} (${m.days.join(', ')})
                  </span>
                </div>
                <button class="btn-primary direct-open-market-btn" data-id="${m.id}" style="padding:0.4rem 0.9rem; font-size:0.82rem;">
                  View Market →
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    content.querySelectorAll('.direct-open-market-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mId = e.currentTarget.getAttribute('data-id');
        this.app.openMarketDetail(mId);
      });
    });
  }
}


/* === [Module: components/chatbot.js] === */
// [import stripped]
// [import stripped]

class Chatbot {
  constructor(app) {
    this.app = app;
    this.launcherBtn = document.getElementById('chatbotLauncher');
    this.chatWindow = document.getElementById('chatbotWindow');
    this.closeBtn = document.getElementById('chatCloseBtn');
    this.clearBtn = document.getElementById('chatClearBtn');
    this.messagesContainer = document.getElementById('chatMessages');
    this.quickRepliesContainer = document.getElementById('chatQuickReplies');
    this.inputField = document.getElementById('chatInputField');
    this.sendBtn = document.getElementById('chatSendBtn');
    this.micBtn = document.getElementById('chatMicBtn');
    this.voiceToggleBtn = document.getElementById('chatVoiceToggleBtn');
    this.tooltipPill = document.getElementById('botTooltipPill');

    this.speechRecognition = null;
    this.speechSynth = window.speechSynthesis || null;
    this.isListening = false;
    this.voiceEnabled = true;
  }

  init() {
    this.setupListeners();
    this.setupSpeechRecognition();
    this.renderWelcome();
    this.setupTooltipPill();
  }

  setupTooltipPill() {
    // Show after 3 seconds on page, auto fade after 12 seconds
    if (this.tooltipPill) {
      setTimeout(() => {
        if (!this.chatWindow?.classList.contains('open')) {
          this.tooltipPill.style.opacity = '1';
        }
      }, 2500);

      setTimeout(() => {
        if (this.tooltipPill) this.tooltipPill.style.opacity = '0';
      }, 15000);
    }
  }

  setupListeners() {
    this.launcherBtn?.addEventListener('click', () => {
      audioManager.playClick();
      this.toggleWindow();
    });

    this.closeBtn?.addEventListener('click', () => {
      audioManager.playClick();
      this.closeWindow();
    });

    this.clearBtn?.addEventListener('click', () => {
      audioManager.playClick();
      this.renderWelcome();
    });

    this.voiceToggleBtn?.addEventListener('click', () => {
      audioManager.playClick();
      this.voiceEnabled = !this.voiceEnabled;
      if (this.voiceToggleBtn) {
        this.voiceToggleBtn.textContent = this.voiceEnabled ? '🔊' : '🔇';
        this.voiceToggleBtn.title = this.voiceEnabled ? 'Voice is ON' : 'Voice is MUTED';
      }
      if (!this.voiceEnabled && this.speechSynth) {
        this.speechSynth.cancel();
      }
      this.app.showToast(this.voiceEnabled ? 'FreshBot Voice Enabled 🔊' : 'FreshBot Voice Muted 🔇');
    });

    this.sendBtn?.addEventListener('click', () => this.handleUserSend());

    this.inputField?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.handleUserSend();
      }
    });

    this.micBtn?.addEventListener('click', () => this.toggleSpeechListening());
  }

  toggleWindow() {
    const isOpen = this.chatWindow.classList.toggle('open');
    if (isOpen) {
      audioManager.playChime();
      this.inputField?.focus();
      // Remove beacon and pill
      const beacon = this.launcherBtn?.querySelector('.chat-ping-beacon');
      if (beacon) beacon.style.display = 'none';
      if (this.tooltipPill) this.tooltipPill.style.display = 'none';
    }
  }

  closeWindow() {
    this.chatWindow.classList.remove('open');
  }

  setupSpeechRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      this.speechRecognition = new SpeechRec();
      this.speechRecognition.continuous = false;
      this.speechRecognition.interimResults = false;
      this.speechRecognition.lang = 'en-US';

      this.speechRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (this.inputField) {
          this.inputField.value = transcript;
          this.handleUserSend();
        }
      };

      this.speechRecognition.onerror = () => {
        this.isListening = false;
        this.micBtn?.classList.remove('listening');
      };

      this.speechRecognition.onend = () => {
        this.isListening = false;
        this.micBtn?.classList.remove('listening');
      };
    } else {
      if (this.micBtn) this.micBtn.style.display = 'none';
    }
  }

  toggleSpeechListening() {
    if (!this.speechRecognition) return;

    if (this.isListening) {
      this.speechRecognition.stop();
      this.isListening = false;
      this.micBtn?.classList.remove('listening');
    } else {
      audioManager.playClick();
      this.speechRecognition.start();
      this.isListening = true;
      this.micBtn?.classList.add('listening');
      this.app.showToast('Listening... Speak now 🎙️');
    }
  }

  speak(text) {
    if (!this.speechSynth || !this.voiceEnabled || audioManager.isMuted()) return;
    try {
      this.speechSynth.cancel();
      // Strip markdown asterisks and emojis for speech
      const clean = text.replace(/[*_#]/g, '').replace(/[\u{1F600}-\u{1F64F}]/gu, '');
      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.rate = 1.05;
      this.speechSynth.speak(utterance);
    } catch (e) {}
  }

  showTypingIndicator() {
    this.hideTypingIndicator();
    const ind = document.createElement('div');
    ind.id = 'chatTypingIndicator';
    ind.className = 'chat-bubble bot typing-indicator-bubble';
    ind.innerHTML = `
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
      <span class="typing-text">FreshBot is thinking...</span>
    `;
    this.messagesContainer.appendChild(ind);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  hideTypingIndicator() {
    const ind = document.getElementById('chatTypingIndicator');
    if (ind) ind.remove();
  }

  renderWelcome() {
    const data = dataService.getChatbotData();
    this.messagesContainer.innerHTML = '';

    const welcomeMsg = data?.welcomeMessage || "Hello! I am FreshBot, your intelligent farmers market guide 🌱. Ask me about nearby markets, seasonal produce, operating hours, or click one of the quick suggestions below:";
    this.appendMessage('bot', welcomeMsg);

    this.renderQuickReplies(data?.quickReplies || []);
  }

  renderQuickReplies(replies) {
    this.quickRepliesContainer.innerHTML = '';
    replies.forEach(r => {
      const btn = document.createElement('button');
      btn.className = 'chat-pill-btn';
      btn.textContent = r.label || r;
      btn.addEventListener('click', () => {
        audioManager.playClick();
        const text = r.query || r.label || r;
        this.processQuery(text);
      });
      this.quickRepliesContainer.appendChild(btn);
    });
  }

  handleUserSend() {
    const query = this.inputField?.value.trim();
    if (!query) return;

    this.inputField.value = '';
    this.processQuery(query);
  }

  processQuery(userQuery) {
    audioManager.playClick();
    this.appendMessage('user', userQuery);

    // Show realistic typing animation
    this.showTypingIndicator();

    setTimeout(() => {
      this.hideTypingIndicator();
      const responseObj = this.matchIntent(userQuery);
      this.appendMessage('bot', responseObj.response, responseObj.actionCard);
      this.speak(responseObj.response);
      audioManager.playChime();

      if (responseObj.quickReplies) {
        this.renderQuickReplies(responseObj.quickReplies);
      }

      // Execute associated action if present
      if (responseObj.action) {
        this.executeAction(responseObj.action, responseObj.relatedMarketId);
      }
    }, 650);
  }

  matchIntent(query) {
    const data = dataService.getChatbotData();
    if (!data) {
      return { response: "I'm having trouble accessing my database right now. Please try again later!" };
    }

    const lowerQuery = query.toLowerCase();
    let bestMatch = null;
    let maxScore = 0;

    for (const intent of data.intents) {
      let score = 0;
      for (const kw of intent.keywords) {
        if (lowerQuery.includes(kw.toLowerCase())) {
          score += kw.length;
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestMatch = intent;
      }
    }

    if (bestMatch && maxScore > 0) {
      let actionCard = null;
      if (bestMatch.relatedMarketId) {
        const m = dataService.getMarketById(bestMatch.relatedMarketId);
        if (m) {
          actionCard = {
            title: m.name,
            sub: `${m.area} • ${m.hours}`,
            btnText: 'Open Details',
            marketId: m.id
          };
        }
      }

      return {
        response: bestMatch.response,
        quickReplies: bestMatch.quickReplies || data.defaultQuickReplies,
        action: bestMatch.action,
        relatedMarketId: bestMatch.relatedMarketId,
        actionCard
      };
    }

    return {
      response: data.defaultResponse,
      quickReplies: data.defaultQuickReplies
    };
  }

  executeAction(action, marketId) {
    if (action === 'FILTER_OPEN_TODAY') {
      document.getElementById('filterOpenNow')?.classList.add('active');
      this.app.marketDirectory?.render();
      document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'NAVIGATE_PRODUCE_FRUITS' || action === 'NAVIGATE_PRODUCE_VEG' || action === 'NAVIGATE_PRODUCE_DAIRY') {
      document.getElementById('produce')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'OPEN_BOOKMARKS') {
      this.app.bookmarks?.open();
    } else if (action === 'OPEN_ECO_CALC') {
      document.getElementById('eco-calculator')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'NAVIGATE_CONTACT') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  appendMessage(sender, text, actionCard = null) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;

    // Safely format markdown bold and links
    let formattedText = (text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');

    // Enhance text with clickable section jump links if relevant pages are mentioned
    formattedText = formattedText
      .replace(/\[(.*?)\]\((#(.*?))\)/g, '<a href="$2" class="chat-section-link">$1</a>');

    if (sender === 'bot') {
      bubble.innerHTML = `
        <div style="display:flex; align-items:flex-start; gap:0.6rem;">
          <img src="assets/images/robot_avatar.png" alt="FreshBot AI" style="width:26px; height:26px; border-radius:50%; object-fit:cover; flex-shrink:0; margin-top:2px; border:1px solid rgba(74, 222, 128, 0.5);">
          <div style="flex:1;">${formattedText}</div>
        </div>
      `;
    } else {
      bubble.innerHTML = `<div>${formattedText}</div>`;
    }

    // Attach click events on in-chat section jump links
    bubble.querySelectorAll('.chat-section-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetEl = document.querySelector(href);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    if (actionCard) {
      const cardEl = document.createElement('div');
      cardEl.style.cssText = 'background:var(--bg-surface); border:1px solid var(--border-medium); border-radius:var(--radius-sm); padding:0.6rem 0.8rem; margin-top:0.5rem; font-size:0.85rem;';
      cardEl.innerHTML = `
        <div style="font-weight:700; color:var(--primary);">${actionCard.title}</div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.35rem;">${actionCard.sub}</div>
        <button class="btn-primary" style="padding:0.25rem 0.65rem; font-size:0.78rem; width:100%; justify-content:center;">${actionCard.btnText}</button>
      `;
      cardEl.querySelector('button').addEventListener('click', () => {
        this.app.openMarketDetail(actionCard.marketId);
      });
      bubble.appendChild(cardEl);
    }

    this.messagesContainer.appendChild(bubble);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }
}


/* === [Module: components/bookmarks.js] === */
// [import stripped]
// [import stripped]

class Bookmarks {
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


/* === [Module: components/ecoCalculator.js] === */
// [import stripped]

class EcoCalculator {
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


/* === [Module: components/contactAbout.js] === */
// [import stripped]

class ContactAbout {
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


/* === [Module: app.js] === */
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]
// [import stripped]

class FreshFindApp {
  constructor() {
    this.header = null;
    this.cinematicIntro = null;
    this.cinematicHeroBg = null;
    this.gardenScrollbar = null;
    this.marketDirectory = null;
    this.marketDetail = null;
    this.produceGuide = null;
    this.chatbot = null;
    this.bookmarks = null;
    this.ecoCalculator = null;
    this.contactAbout = null;
    this.visitorCounter = null;
    this.toastContainer = document.getElementById('toastContainer');
  }

  async init() {

    // 2. Geolocation (user-initiated only, no auto-popup overlay)
    // this.setupGeolocation();

    // 3. Load all JSON datasets (uses offline fallback if file:// protocol)
    try {
      await dataService.loadAll();
    } catch(e) { console.warn('DataService loadAll:', e); }

    // 4. Initialize components - each wrapped so one failure won't crash others
    try { this.header = new Header(this); this.header.init(); } catch(e) { console.warn('Header:', e); }
    try { this.visitorCounter = new VisitorCounter('visitorOdometerDigits'); this.visitorCounter.init(); } catch(e) { console.warn('VisitorCounter:', e); }
    try { this.marketDirectory = new MarketDirectory(this); this.marketDirectory.init(); } catch(e) { console.warn('MarketDirectory:', e); }
    try { this.marketDetail = new MarketDetail(this); this.marketDetail.init(); } catch(e) { console.warn('MarketDetail:', e); }
    try { this.produceGuide = new ProduceGuide(this); this.produceGuide.init(); } catch(e) { console.warn('ProduceGuide:', e); }
    try { this.chatbot = new Chatbot(this); this.chatbot.init(); } catch(e) { console.warn('Chatbot:', e); }
    try {
      this.bookmarks = new Bookmarks(this);
      this.bookmarks.init();
      if (window.location.hash === '#open-bookmarks' || window.location.hash === '#bookmarks') {
        setTimeout(() => this.bookmarks?.open(), 400);
      }
    } catch(e) { console.warn('Bookmarks:', e); }
    try { this.ecoCalculator = new EcoCalculator(this); this.ecoCalculator.init(); } catch(e) { console.warn('EcoCalculator:', e); }
    try { this.contactAbout = new ContactAbout(this); this.contactAbout.init(); } catch(e) { console.warn('ContactAbout:', e); }

    // 5. FreshFind Botanical Custom Cursor
    try {
      this.customCursor = new CustomCursor();
    } catch(e) { console.warn('CustomCursor:', e); }

    // 6. UI enhancements & VIP Card Motion (safe execution)
    try { this.setupAuthModal(); } catch(e) { console.warn('AuthModal:', e); }
    try { this.setupShareModal(); } catch(e) { console.warn('ShareModal:', e); }
    try { this.setupNavigation(); } catch(e) { console.warn('Navigation:', e); }
    try { this.setupScrollReveal(); } catch(e) { console.warn('ScrollReveal:', e); }
    try { this.setupParallaxScroll(); } catch(e) { console.warn('Parallax:', e); }
    try { this.setupScrollSpy(); } catch(e) { console.warn('ScrollSpy:', e); }
    try { this.setupHeroParticles(); } catch(e) { console.warn('HeroParticles:', e); }
    try { this.setupScrollProgress(); } catch(e) { console.warn('ScrollProgress:', e); }
    try { this.setupVIPCardEffects(); } catch(e) { console.warn('VIPCardEffects:', e); }
    try { this.setupGlobalCardDelegation(); } catch(e) { console.warn('CardDelegation:', e); }

    // 7. Living Garden Botanical Scrollbar
    try {
      this.gardenScrollbar = new GardenScrollbar(this);
      this.gardenScrollbar.init();
    } catch(e) { console.warn('GardenScrollbar:', e); }

    // 8. Cinematic Intro (runs after everything is ready)
    try {
      this.cinematicHeroBg = new CinematicHeroBg(this);
      this.cinematicHeroBg.init();
    } catch(e) { console.warn('CinematicHeroBg:', e); }
  }

  setupGeolocation() {
    if (typeof navigator !== 'undefined' && 'geolocation' in navigator) {
      try {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            if (typeof dataService !== 'undefined' && dataService) {
              dataService.userLocation = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
              };
            }
            if (this.marketDirectory && typeof this.marketDirectory.render === 'function') {
              this.marketDirectory.render();
            }
          },
          (err) => {
            console.log('Geolocation unavailable or denied:', err ? err.message : '');
          },
          { timeout: 8000, maximumAge: 600000 }
        );
      } catch (err) {
        console.warn('Geolocation error:', err);
      }
    }
  }

  openMarketDetail(marketId) {
    if (!marketId) return;
    if (this.marketDetail && typeof this.marketDetail.open === 'function') {
      this.marketDetail.open(marketId);
    } else {
      console.warn('MarketDetail component not initialized, retrying...');
      try {
        this.marketDetail = new MarketDetail(this);
        this.marketDetail.init();
        this.marketDetail.open(marketId);
      } catch(e) { console.error('Cannot open market detail:', e); }
    }
  }

  setupGlobalCardDelegation() {
    document.addEventListener('click', (e) => {
      // 1. Market card clicks
      const mktEl = e.target.closest('.view-market-detail-btn, .market-card, [data-action="open-market"]');
      if (mktEl && !e.target.closest('.market-fav-btn')) {
        const marketId = mktEl.getAttribute('data-id') || mktEl.closest('[data-id]')?.getAttribute('data-id');
        if (marketId) {
          this.openMarketDetail(marketId);
        }
      }

      // 2. Modal close button click delegation
      if (e.target.closest('#closeMarketDetailBtn, .modal-close-btn')) {
        this.marketDetail?.close();
      }
    });
  }

  setupNavigation() {
    // Smooth scrolling for all hash links with event delegation (100% click reliability)
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        try { audioManager.playClick(); } catch(err) {}
        const headerOffset = 90;
        const targetTop = targetSection.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0) - headerOffset;
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });
        document.querySelectorAll('.nav-item-pill, .nav-item-link').forEach(l => l.classList.remove('active'));
        const navMatch = document.querySelector(`.main-nav a[href="${href}"]`);
        if (navMatch) navMatch.classList.add('active');
      }
    });
  }

  setupAuthModal() {
    const authModal = document.getElementById('authModal');
    const authBtn = document.getElementById('authToggleBtn') || document.getElementById('navUserBtn');
    const closeBtn = document.getElementById('closeAuthBtn');
    const authTabs = document.querySelectorAll('.auth-tab-btn');
    const authForm = document.getElementById('authForm');
    const submitBtn = document.getElementById('authSubmitBtn');
    let currentMode = 'login';

    const openAuth = (e) => {
      if (e) e.preventDefault();
      audioManager.playClick();
      authModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeAuth = () => {
      audioManager.playClick();
      authModal?.classList.remove('active');
      document.body.style.overflow = '';
    };

    authBtn?.addEventListener('click', openAuth);
    document.getElementById('navUserBtn')?.addEventListener('click', openAuth);
    document.getElementById('authToggleBtn')?.addEventListener('click', openAuth);
    document.getElementById('footerOpenAuth')?.addEventListener('click', openAuth);

    closeBtn?.addEventListener('click', closeAuth);

    authModal?.addEventListener('click', (e) => {
      if (e.target === authModal) {
        closeAuth();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && authModal?.classList.contains('active')) {
        closeAuth();
      }
    });

    authTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        audioManager.playClick();
        currentMode = tab.getAttribute('data-mode');
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        if (submitBtn) {
          submitBtn.textContent = currentMode === 'login' ? 'Sign In to FreshFind' : 'Create Free Green Account';
        }
      });
    });

    authForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      audioManager.playChime();
      const email = document.getElementById('authEmail')?.value;
      this.showToast(`Welcome! Successfully logged in as ${email || 'Eco Shopper'} 🌱`);
      closeAuth();
      authForm.reset();
    });
  }

  setupShareModal() {
    const shareModal = document.getElementById('shareModal');
    const closeShareBtn = document.getElementById('closeShareModalBtn');

    closeShareBtn?.addEventListener('click', () => {
      audioManager.playClick();
      shareModal?.classList.remove('active');
    });

    shareModal?.addEventListener('click', (e) => {
      if (e.target === shareModal) {
        shareModal.classList.remove('active');
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && shareModal?.classList.contains('active')) {
        shareModal.classList.remove('active');
      }
    });

    document.getElementById('copyShareLinkBtn')?.addEventListener('click', () => {
      audioManager.playClick();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
      }
      this.showToast('Direct link copied to clipboard! 📋');
    });
  }


  openMarketDetail(marketId) {
    this.marketDetail.open(marketId);
  }

  toggleBookmark(type, id) {
    return this.bookmarks.toggle(type, id);
  }

  isBookmarked(type, id) {
    return this.bookmarks ? this.bookmarks.isBookmarked(type, id) : false;
  }

  updateBreadcrumbs(items) {
    const list = document.getElementById('breadcrumbList');
    if (!list) return;

    list.innerHTML = items.map((item, idx) => {
      if (item.active) {
        return `<li class="breadcrumb-item active">${item.label}</li>`;
      }
      return `
        <li class="breadcrumb-item">
          <a href="#" data-action="${item.action || ''}">${item.label}</a>
          <span style="opacity:0.4;">/</span>
        </li>
      `;
    }).join('');

    list.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const action = a.getAttribute('data-action');
        if (action === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (action === 'directory') {
          document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' });
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
    }, 3200);
  }

  /**
   * Scroll Reveal - high-performance IntersectionObserver with immediate viewport reveal
   */
  setupScrollReveal() {
    const selectors = '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, .reveal-3d, .section-tag';
    const elements = document.querySelectorAll(selectors);

    if (!elements.length) return;

    // Immediately reveal elements already near or above the viewport so they are never blank
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 80) {
        el.classList.add('revealed');
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.02,
      rootMargin: '120px 0px 80px 0px'
    });

    elements.forEach(el => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    });

    // Count-up animation for stat numbers
    const countEls = document.querySelectorAll('.count-num');
    if (countEls.length) {
      const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            const duration = 1600;
            const start = performance.now();
            const initial = 0;

            const step = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(initial + (target - initial) * eased);
              el.textContent = current.toLocaleString() + (target >= 100 && el.getAttribute('data-suffix') ? el.getAttribute('data-suffix') : '');
              if (progress < 1) requestAnimationFrame(step);
              else el.textContent = target.toLocaleString();
            };
            requestAnimationFrame(step);
            countObserver.unobserve(el);
          }
        });
      }, { threshold: 0.1 });

      countEls.forEach(el => countObserver.observe(el));
    }
  }

  /**
   * Lightweight 60fps Parallax via requestAnimationFrame
   */
  setupParallaxScroll() {
    const orb1 = document.querySelector('.bg-ambient-orb-1');
    const orb2 = document.querySelector('.bg-ambient-orb-2');
    const orb3 = document.querySelector('.bg-ambient-orb-3');
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          if (orb1) orb1.style.transform = `translate3d(0, ${scrolled * 0.06}px, 0)`;
          if (orb2) orb2.style.transform = `translate3d(0, -${scrolled * 0.04}px, 0)`;
          if (orb3) orb3.style.transform = `translate3d(0, ${scrolled * 0.03}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /**
   * ScrollSpy Active Nav Link Tracking
   */
  setupScrollSpy() {
    const sectionIds = ['home', 'directory', 'produce', 'eco-calculator', 'contact', 'about'];
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + 160;
      let activeId = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          activeId = id;
        }
      }

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${activeId}`) {
          link.classList.add('active');
        } else if (href && href.startsWith('#')) {
          link.classList.remove('active');
        }
      });
    }, { passive: true });
  }

  /**
   * Premium Hero Section — Entrance animations, mouse-parallax, floating particles & stat counters
   */
  setupHeroParticles() {
    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    // ── 1. ENTRANCE ANIMATION SEQUENCE ──────────────────────────────────────────
    const pill    = heroSection.querySelector('.ff-hero__badge');
    const h1      = heroSection.querySelector('.ff-hero__headline');
    const desc    = heroSection.querySelector('.ff-hero__desc');
    const btns    = heroSection.querySelector('.ff-hero__ctas');
    const props   = heroSection.querySelector('.ff-hero__features');
    const ribbon  = heroSection.querySelector('.ff-hero__ribbon');
    const cards   = heroSection.querySelector('.ff-hero__float-cards');

    // Entrance animations are handled smoothly by CSS (animations.css / components.css)

    // ── 2. MOUSE-TRACKING PARALLAX ON HERO IMAGE ────────────────────────────────
    const bgImg = heroSection.querySelector('.ff-hero__bg-img');
    if (bgImg) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width  - 0.5;   // -0.5 → 0.5
        const ny = (e.clientY - rect.top)  / rect.height - 0.5;
        const tx = nx * -14;  // max 14px shift
        const ty = ny * -8;
        bgImg.style.transition = 'transform 1.8s cubic-bezier(0.25,0.1,0.25,1)';
        bgImg.style.transform = `scale(1.06) translate(${tx}px, ${ty}px)`;
      }, { passive: true });
      heroSection.addEventListener('mouseleave', () => {
        bgImg.style.transition = 'transform 2.4s cubic-bezier(0.25,0.1,0.25,1)';
        bgImg.style.transform = 'scale(1.02) translate(0, 0)';
      }, { passive: true });
    }

    // ── 3. FLOATING POLLEN / DUST PARTICLES (Disabled to ensure 60fps stutter-free video playback) ──


    // ── 4. NOTIFY CARD DISMISS ─────────────────────────────────────────────────
    const notifyCard  = document.getElementById('heroNotifyCard');
    const notifyClose = document.getElementById('heroNotifyClose');
    if (notifyCard && notifyClose) {
      notifyClose.addEventListener('click', () => {
        notifyCard.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        notifyCard.style.opacity = '0';
        notifyCard.style.transform = 'translateY(-10px) scale(0.96)';
        setTimeout(() => notifyCard.style.display = 'none', 420);
      });
    }

    // ── 5. ANIMATED STAT COUNTERS IN RIBBON ─────────────────────────────────────
    const statTargets = [
      { id: 'statFarmersNum',   end: 500, suffix: '+' },
      { id: 'statMarketsNum',   end: 50,  suffix: '+' },
      { id: 'statCustomersNum', end: 10,  suffix: 'K+' },
    ];

    const animateCounter = (el, end, suffix) => {
      let start = 0;
      const dur2 = 1800;
      const step = 16;
      const steps = dur2 / step;
      const inc = end / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += inc;
        if (current >= end) {
          el.textContent = end + suffix;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current) + suffix;
        }
      }, step);
    };

    const ribbonObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statTargets.forEach(({ id, end, suffix }) => {
            const el2 = document.getElementById(id);
            if (el2) animateCounter(el2, end, suffix);
          });
          ribbonObs.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const ribbonEl = heroSection.querySelector('.hero-stats-ribbon') || heroSection.querySelector('.ff-hero__ribbon');
    if (ribbonEl) ribbonObs.observe(ribbonEl);
  }

  /**
   * Scroll progress indicator bar at top
   */
  setupScrollProgress() {
    const bar = document.createElement('div');
    bar.id = 'scrollProgressBar';
    bar.style.cssText = `
      position:fixed;
      top:0;
      left:0;
      height:3px;
      width:0%;
      background:linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 50%, var(--accent) 100%);
      z-index:99999;
      transition:width 0.1s ease;
      box-shadow:0 0 8px var(--primary-glow);
    `;
    document.body.appendChild(bar);

    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.min(100, (scrollTop / docHeight) * 100);
      bar.style.width = pct + '%';

      // Back to top button visibility
      if (backToTopBtn) {
        if (scrollTop > 400) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }
    }, { passive: true });

    backToTopBtn?.addEventListener('click', () => {
      audioManager.playClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /**
   * Interactive VIP Cards - Handled via 100% GPU-accelerated CSS for butter-smooth 60fps
   */
  setupVIPCardEffects() {
    // Pure CSS hardware acceleration used in components.css to ensure 0ms latency and 0% CPU overhead
  }
}

// Instantiate and start app safely whether DOM is ready or already loaded
function startFreshFindApp() {
  if (window.freshFindApp) return;
  const app = new FreshFindApp();
  window.freshFindApp = app;
  app.init().catch(err => console.error('FreshFind App failed to initialize:', err));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startFreshFindApp);
} else {
  startFreshFindApp();
}


  window.dataService = dataService;
  window.audioManager = audioManager;
})();
