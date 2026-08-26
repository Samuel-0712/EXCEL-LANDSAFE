import { CompanyDetails, DestinationItem, PackageItem, ServiceItem, StatItem, TestimonialItem, LeadershipProfile } from '../types';

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
  linkedinUrl: "https://www.linkedin.com/company/excel-landsafe-travel-and-tours/",
  address: "Lagos, Nigeria",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM WAT"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "visa-assistance",
    title: "Expert Visa Assistance",
    tagline: "Hassle-Free Visa Consultation",
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
    tagline: "Tailored itineraries crafted for unforgettable journeys",
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
    highlightPrice: "Curated Cruise Package",
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
  subheading: "A premier Nigerian travel management advisory founded on excellence, safety, and personalized global experiences.",
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

export const COMPANY_LEADERSHIP_PROFILES: LeadershipProfile[] = [
  {
    name: "Oluwayomi Dada",
    role: "Managing Director",
    photo: "/images/leadership-oluwayomi-dada.png",
    pullQuote: "Her strategic direction has not only expanded the company's market footprint but has also positioned it as a forward-thinking player in a rapidly changing industry.",
    bio: [
      "Oluwayomi Dada is a visionary business leader and Managing Director of Excel Landsafe Travel & Tours Ltd., bringing over two decades of strategic leadership, operational excellence, and innovation to the travel and tourism industry. With more than 24 years of professional experience spanning travel, tourism, and hospitality, she has built a strong reputation for transforming customer experiences and driving sustainable business growth.",
      "Under her leadership, Excel Landsafe Travel & Tours Ltd. has evolved into a trusted and dynamic travel brand known for its commitment to excellence, reliability, and client satisfaction. Her strategic direction has not only expanded the company's market footprint but has also positioned it as a forward-thinking player in a rapidly changing industry.",
      "Oluwayomi's educational background reflects her dedication to continuous learning and professional development. She holds a Bachelor's degree in Business Administration from Caleb University, Imota, Lagos State, and a Master's degree in Entrepreneurship from Nexford University, Washington. Complementing her formal education are globally recognized certifications in travel management, including IATA Foundation and IATA Management Level qualifications, which further demonstrate her deep industry knowledge and operational expertise.",
      "In her pursuit of leadership excellence, Oluwayomi has completed executive education programs from top-tier institutions, including the Management Acceleration Program at Lagos Business School and Managing the Company of the Future from the University of London. These programs have sharpened her strategic insight and enhanced her ability to lead organizations in today's fast-paced, technology-driven environment.",
      "Oluwayomi's leadership is distinguished by her focus on strategic foresight, innovation, and team empowerment. She cultivates a high-performance culture built on collaboration, adaptability, and a relentless commitment to continuous improvement. Her hands-on approach to leadership ensures that every aspect of the business aligns with the company's mission to deliver high-quality, personalized travel experiences to individual and corporate clients.",
      "Throughout her career, she has successfully led complex projects, developed high-performing teams, and navigated the business through various industry shifts. Her strong understanding of both local and international markets gives her a unique advantage in crafting tailored travel solutions that exceed client expectations.",
      "As a recognized leader in her field, Oluwayomi Dada continues to influence and advance the future of travel and tourism across Nigeria and beyond. Her strategic vision and unwavering commitment to excellence remain key drivers behind Excel Landsafe's continued growth and its reputation for transformative ideas and forward-thinking strategies."
    ]
  },
  {
    name: "Babatunde Leo Dada",
    role: "Managing Partner",
    photo: "/images/leadership-babatunde-dada.png",
    pullQuote: "Known for his integrity, experience, and unwavering dedication, Babatunde Dada plays a vital role in sustaining the company's reputation for quality service and dependable travel solutions.",
    bio: [
      "Babatunde Leo Dada serves as the Managing Partner of Excel Landsafe Travels & Tours Ltd., bringing over 25 years of extensive experience in the travel and tourism industry. His deep industry insight, operational expertise, and strategic support have been instrumental in driving the company's growth and long-term success.",
      "He holds a Bachelor's degree in Biblical Studies and Pastoral Theology as well as a Master's degree in Leadership from Life Theological Seminary, Ikorodu. In addition to his academic achievements, Babatunde has earned several professional certifications, including a Nigerian Airways Certification and a Diploma in Risk Management, further solidifying his diverse skill set and leadership capacity.",
      "Babatunde's professional journey is marked by a consistent track record of excellence and reliability. His comprehensive understanding of travel operations, combined with a commitment to ethical leadership and sound decision-making, has made him a respected figure within the industry. His contributions continue to provide strong strategic direction and operational backing to Excel Landsafe Travels & Tours Ltd.",
      "Known for his integrity, experience, and unwavering dedication, Babatunde Dada plays a vital role in sustaining the company's reputation for quality service and dependable travel solutions."
    ]
  }
];

export const COMPANY_CREDENTIALS_STRIP = {
  founded: "Founded in 2011 · Over a Decade of Operational Excellence",
  address: "60 Allen Avenue, by Adeboye Sholanke Entrance Gate, Ikeja, Lagos, Nigeria",
  accreditations: "CAC Registered · Proud NANTA Member"
};

