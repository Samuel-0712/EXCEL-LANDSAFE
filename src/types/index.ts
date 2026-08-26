export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'passport' | 'compass' | 'plane' | 'concierge' | 'mice';
  features: string[];
  image: string;
  popular?: boolean;
}

export interface DestinationItem {
  id: string;
  name: string;
  country: string;
  tagline: string;
  category: 'Luxury Resort' | 'Cultural Heritage' | 'City Break' | 'Safari & Adventure' | 'Visa Hotspot' | 'Cruise Voyage';
  image: string;
  highlightPrice?: string;
  popular?: boolean;
  featuredInHero?: boolean;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrLocation: string;
  quote: string;
  rating: number;
  serviceUsed: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceOfInterest: string;
  destination?: string;
  travelDate?: string;
  message: string;
}

export interface CompanyDetails {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  address: string;
  hours: string;
}

export interface PackageItem {
  id: string;
  title: string;
  destination: string;
  category: string;
  duration: string;
  dateRange: string;
  priceDouble: string;
  priceSingle?: string;
  image: string;
  inclusions: string[];
  finePrint?: string;
  popular?: boolean;
}

export interface LeadershipProfile {
  name: string;
  role: string;
  photo: string;
  pullQuote: string;
  bio: string[];
}
