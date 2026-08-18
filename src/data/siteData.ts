import { CompanyDetails, DestinationItem, PackageItem, ServiceItem, StatItem, TestimonialItem } from '../types';

export const COMPANY_INFO: CompanyDetails = {
  name: "Excel Landsafe Travels and Tours Ltd",
  tagline: "Seamless Travels | Expert Visa Assistance | Luxury Tours",
  phone: "+234 818 268 1372",
  phoneRaw: "2348182681372",
  whatsapp: "+234 818 268 1372",
  whatsappRaw: "2348182681372",
  email: "info@excellandsafe.com.ng",
  instagramHandle: "@excellandsafe_travel",
  instagramUrl: "https://www.instagram.com/excellandsafe_travel",
  address: "Lagos, Nigeria",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM WAT"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "visa-assistance",
    title: "Expert Visa Assistance",
    tagline: "Hassle-free documentation and high-approval advisory",
    description: "End-to-end guidance for Schengen, UK, US, Canada, UAE, and Asian visa applications with thorough document vetting and appointment scheduling.",
    iconName: "passport",
    popular: true,
    features: [
      "Personalized Document Vetting & Review",
      "Priority Appointment Scheduling",
      "Proof of Itinerary & Hotel Reservation Support",
      "Interview Coaching & Guidance"
    ],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "luxury-tours",
    title: "Curated Luxury Tours",
    tagline: "Bespoke itineraries crafted for unforgettable journeys",
    description: "From tranquil beach retreats in the Maldives to cultural escapes in Europe, we curate custom private and group holiday experiences.",
    iconName: "compass",
    popular: true,
    features: [
      "Custom Private & Family Itineraries",
      "Luxury Resort & Villa Selections",
      "Guided Island & Cultural Excursions",
      "24/7 On-Ground Support"
    ],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "flights-hotels",
    title: "Flights & Hotel Booking",
    tagline: "Premium flight seats and handpicked luxury stays",
    description: "Access competitive rates on international airlines, business class upgrades, and vetted luxury hotels with complimentary perks.",
    iconName: "plane",
    features: [
      "Business & First Class Seat Rates",
      "Verified Hotel & Resort Bookings",
      "Flexible Change & Cancellation Policies",
      "Seamless Airport Transfers"
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mice-corporate-events",
    title: "MICE & Corporate Events",
    tagline: "Seamless corporate travel, conference & delegate logistics",
    description: "Tailored solutions for corporate conferences, group travel coordination, executive retreats, and event delegate support.",
    iconName: "mice",
    features: [
      "Conference & Meeting Logistics",
      "Group Travel & Flight Coordination",
      "Incentive Trip Planning & Retreats",
      "Event & Delegate Support"
    ],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
  }
];

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: "serengeti-tanzania",
    name: "Serengeti & Zanzibar",
    country: "Tanzania",
    tagline: "Great Migration savannah safaris, luxury tented camps, and turquoise spice island shores.",
    category: "Safari & Adventure",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
    highlightPrice: "East Africa Visa Package",
    popular: true
  },
  {
    id: "dubai-uae",
    name: "Dubai & Abu Dhabi",
    country: "United Arab Emirates",
    tagline: "Architectural wonders, desert safaris, and high-fashion shopping.",
    category: "City Break",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    highlightPrice: "Express UAE Visa + Hotel",
    popular: true
  },
  {
    id: "maldives-atoll",
    name: "North Malé Atoll",
    country: "Maldives",
    tagline: "Secluded overwater bungalows surrounded by crystal clear lagoon ocean.",
    category: "Luxury Resort",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
    highlightPrice: "All-Inclusive Villa Retreats",
    popular: true
  },
  {
    id: "marina-bay-singapore",
    name: "Marina Bay & Sentosa",
    country: "Singapore",
    tagline: "Futuristic architecture, Michelin-starred dining, and luxury island retreats.",
    category: "City Break",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=80",
    highlightPrice: "Singapore Express Visa + Hotel",
    popular: true
  },
  {
    id: "kigali-rwanda",
    name: "Volcanoes Sanctuary & Kigali",
    country: "Rwanda",
    tagline: "Misty rainforest trails, ultra-luxury eco-lodges, and rare mountain gorilla encounters.",
    category: "Safari & Adventure",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80",
    highlightPrice: "East Africa Visa Package"
  },
  {
    id: "paris-france",
    name: "Paris & French Riviera",
    country: "France",
    tagline: "Haute couture, Michelin gastronomy, and Côte d'Azur coastal glamour.",
    category: "Cultural Heritage",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    highlightPrice: "Schengen Visa Guidance"
  },
  {
    id: "cruise-escapes",
    name: "Mediterranean & Caribbean Cruise",
    country: "Global Voyages",
    tagline: "Ultra-luxury ocean suites, island hopping, and fine dining at sea.",
    category: "Cruise Voyage",
    image: "/images/cruise-aerial.jpg",
    highlightPrice: "Bespoke Cruise Package",
    popular: true
  }
];

export const COMPANY_STATS: StatItem[] = [
  {
    value: "500+",
    label: "Trips Seamlessly Curated",
    subtext: "From corporate missions to luxury honeymoons"
  },
  {
    value: "98%",
    label: "Visa Advisory Success",
    subtext: "Rigorously vetted application files"
  },
  {
    value: "24/7",
    label: "Dedicated Support",
    subtext: "Personal travel manager on call"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Verified Client",
    roleOrLocation: "Lagos, Nigeria",
    quote: "I just got back from my trip, and I can't thank you enough. Everything was perfectly arranged, and it was such a smooth and enjoyable experience. I'll gladly recommend your services to anyone who loves traveling.",
    rating: 5,
    serviceUsed: "Vacation Package"
  },
  {
    id: "test-2",
    clientName: "Verified Client",
    roleOrLocation: "Abuja, Nigeria",
    quote: "I really appreciate how seamless everything was from start to finish. Please keep me updated on future promos and offers. I definitely look forward to traveling with you again.",
    rating: 5,
    serviceUsed: "Travel Planning"
  },
  {
    id: "test-3",
    clientName: "Verified Client",
    roleOrLocation: "Port Harcourt, Nigeria",
    quote: "Thank you for all your support — I really appreciate it! You made my travel experience smooth and stress free.",
    rating: 5,
    serviceUsed: "Visa Assistance"
  },
  {
    id: "test-4",
    clientName: "Verified Client",
    roleOrLocation: "Ibadan, Nigeria",
    quote: "Thank you so much! You honestly deserve an award for being the most patient and reliable travel agent. You do such a great job. I'm super impressed.",
    rating: 5,
    serviceUsed: "Custom Tour Itinerary"
  },
  {
    id: "test-5",
    clientName: "Verified Client",
    roleOrLocation: "Enugu, Nigeria",
    quote: "Thanks for your excellent customer delivery service which you have personally demonstrated to me. May your coast continue to enlarge and your enterprises continue to thrive.",
    rating: 5,
    serviceUsed: "Flight & Logistics Support"
  },
  {
    id: "test-6",
    clientName: "Verified Client",
    roleOrLocation: "Lagos, Nigeria",
    quote: "Thank you for everything, we had a wonderful trip. I truly appreciate your consistent follow-up throughout. You're an amazing travel agent, and I pray your business continues to grow. I've already been recommending you to others. Keep up the great work.",
    rating: 5,
    serviceUsed: "Group Tour Package"
  }
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: "zanzibar-summer-escape",
    title: "Zanzibar Summer Island Escape",
    destination: "Tanzania",
    category: "Island & Beach Experience",
    duration: "7 Nights / 8 Days",
    dateRange: "10th – 17th August, 2026",
    priceDouble: "$2,500",
    priceSingle: "$2,700",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80",
    inclusions: [
      "Return economy flight tickets",
      "7 nights luxury accommodation",
      "Airport pick up & drop off",
      "Daily gourmet breakfast",
      "Stone Town & Spice Tour",
      "Safari Blue Tour & Prison Island",
      "Lunch at The Rock Restaurant",
      "Snorkeling adventure",
      "Tanzania Visa & Travel Insurance"
    ],
    popular: true
  },
  {
    id: "doha-meets-kigali",
    title: "Doha Meets Kigali Dual City Tour",
    destination: "Qatar & Rwanda",
    category: "Multi-City Experience",
    duration: "7 Nights / 8 Days",
    dateRange: "10th – 17th August, 2026",
    priceDouble: "$2,100",
    priceSingle: "$2,700",
    image: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=1000&q=80",
    inclusions: [
      "Return economy flight tickets",
      "3 nights Kigali + 4 nights Doha",
      "Dual-city airport transfers",
      "Daily gourmet breakfast",
      "Dhow Sunset Cruise (Doha)",
      "Quest Theme Park experience",
      "Kigali Genocide Memorial visit",
      "Ziplining, horse riding & quad biking",
      "Qatar Visa processing"
    ],
    finePrint: "Family package rate available on request",
    popular: true
  },
  {
    id: "singapore-city-lights",
    title: "Singapore: City Lights & Island Life",
    destination: "Singapore",
    category: "Urban & Island Discovery",
    duration: "6 Nights / 7 Days",
    dateRange: "24th – 30th June, 2026",
    priceDouble: "$1,020",
    priceSingle: "$1,850",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=80",
    inclusions: [
      "6 nights premium accommodation",
      "Airport pick up & drop off",
      "Daily breakfast buffet",
      "Comprehensive Singapore City Tour",
      "Sentosa Island Cable Car experience",
      "Madame Tussauds + Scentopia entry",
      "Singapore e-Visa processing"
    ],
    popular: true
  },
  {
    id: "zanzibar-dream-holidays",
    title: "Zanzibar Dream Holiday Retreat",
    destination: "Tanzania",
    category: "4-Star Beach Retreat",
    duration: "4 Nights / 5 Days",
    dateRange: "16th – 20th August, 2026",
    priceDouble: "$799",
    priceSingle: "$1,099",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80",
    inclusions: [
      "4 nights in a 4-star beach hotel",
      "Daily breakfast included",
      "Airport pick up & drop off",
      "Zanzibar City & Spice Tour",
      "Prison Island & Mnemba Island trip",
      "Tanzania Visa assistance",
      "Comprehensive Travel Insurance"
    ]
  },
  {
    id: "kigali-hidden-gem",
    title: "Kigali: Africa's Hidden Gem",
    destination: "Rwanda",
    category: "Culture & Eco-Adventure",
    duration: "5 Nights / 6 Days",
    dateRange: "12th – 17th August, 2026",
    priceDouble: "$1,700",
    priceSingle: "$2,250",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80",
    inclusions: [
      "Return economy flight tickets",
      "5 nights luxury accommodation",
      "Airport pick up & drop off",
      "Daily gourmet breakfast",
      "Guided Kigali City Tour",
      "Kigali Genocide Memorial visit",
      "Ziplining, horse riding & quad biking"
    ]
  },
  {
    id: "doha-singapore-reimagined",
    title: "Doha & Singapore Reimagined",
    destination: "Qatar & Singapore",
    category: "Twin-Country Luxury Tour",
    duration: "7 Nights / 8 Days",
    dateRange: "10th – 17th August, 2026",
    priceDouble: "$1,350",
    priceSingle: "$2,050",
    image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=1000&q=80",
    inclusions: [
      "3 nights Doha + 4 nights Singapore",
      "Dual-city airport transfers",
      "Daily breakfast buffet",
      "Dhow Sunset Cruise (Doha)",
      "Singapore City Tour & Gardens by the Bay",
      "Sentosa Island (Cable car, Wings of Time & Scentopia)",
      "Qatar Visa & Singapore e-Visa"
    ],
    finePrint: "Family package rate available on request"
  }
];

export const COMPANY_ABOUT_STORY = {
  headline: "Your Journey, Our Commitment!",
  subheading: "A premier Nigerian travel management advisory founded on excellence, safety, and bespoke global experiences.",
  paragraphs: [
    "Excel Landsafe Travel and Tours Ltd. is a dynamic and innovative travel and tourism management company dedicated to providing a comprehensive array of travel services tailored to cater to the diverse needs and preferences of its clients. Our company prioritizes safety and commitment to excellence at every stage of its customers' trips, ensuring peace of mind and value for money.",
    "Additionally, it specializes in the packaging of unique and immersive travel experiences that showcase the excellence, culture, and diversity of destinations around the world. With a strong commitment to customer satisfaction and safety, we ensure that every journey is well-planned, hassle-free, and enriching."
  ]
};

export const COMPANY_MISSION_VISION = {
  mission: {
    title: "Our Mission",
    statement: "To provide unparalleled adventures and seamless experiences fuelled by our unwavering commitment to exceed expectations, ensuring your journey is not just a trip but a cherished commitment to your travel dreams."
  },
  vision: {
    title: "Our Vision",
    statement: "To be an epitome of excellence in the travel industry, where every journey we curate not only exceeds expectations but also becomes a testament to our unwavering commitment to delivering unparalleled and seamless experiences."
  }
};

export interface CoreValueItem {
  id: string;
  title: string;
  description: string;
}

export const COMPANY_CORE_VALUES: CoreValueItem[] = [
  {
    id: "excellence",
    title: "Commitment to Excellence",
    description: "Delivering world-class travel standards, rigorous visa vetting, and flawless execution on every single journey."
  },
  {
    id: "customer-centric",
    title: "Customer-Centric Approach",
    description: "Putting your personal comfort, safety, and distinct travel preferences at the center of every itinerary we craft."
  },
  {
    id: "learning-growth",
    title: "Continuous Learning & Growth",
    description: "Staying at the forefront of global embassy regulations, international immigration laws, and luxury hospitality trends."
  },
  {
    id: "integrity",
    title: "Integrity & Transparency",
    description: "Zero hidden charges, straightforward counsel, and trustworthy guidance from consultation to your safe arrival home."
  },
  {
    id: "team-spirit",
    title: "Team Spirit",
    description: "A passionate, dedicated unit of visa consultants and travel managers working collaboratively to exceed your expectations."
  }
];

export interface LeadershipItem {
  name: string;
  role: string;
  credentials?: string;
}

export const COMPANY_LEADERSHIP: LeadershipItem[] = [
  {
    name: "Oluwayomi Elizabeth Dada",
    role: "Managing Director",
    credentials: "Executive Travel Management & Tour Operations"
  },
  {
    name: "Babatunde Leo Dada",
    role: "Managing Partner",
    credentials: "Strategic Advisory & Corporate Partnerships"
  }
];

export const COMPANY_CREDENTIALS_STRIP = {
  founded: "Founded in 2011 · Over a Decade of Operational Excellence",
  address: "60 Allen Avenue, by Adeboye Sholanke Entrance Gate, Ikeja, Lagos, Nigeria",
  accreditations: "CAC Registered · Proud NANTA Member"
};

