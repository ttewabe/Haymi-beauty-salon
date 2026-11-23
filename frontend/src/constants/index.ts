import Images from '../component/Image';

export const slides = [
  {
    id: 1,
    image: Images.heroLeft,
    titleLine1: 'Passion • Reliability • Service',
    title: 'HAVE PERFECT\nHAIR DAYS',
    description: 'Haymi Salon is your trusted destination for hair and beauty services.',
    cta: 'LEARN MORE',
    phone: 'CALL US (945) 426-0210',
  },
  {
    id: 2,
    image: Images.heroRight,
    titleLine1: 'Passion • Reliability • Service',
    title: 'LET YOUR HAIR DO THE TALKING ',
    description: 'Expert styling and beauty services designed just for you.',
    cta: 'LEARN MORE',
    phone: 'CALL US (945) 426-0210',
  },
  {
    id: 3,
    image: Images.heroRight1,
    titleLine1: 'Passion • Reliability • Service',
    title: 'YOUR HAIR IS YOUR BEST ACCESSORY',
    description: 'We create beautiful hair that fits your style and personality.',
    cta: 'LEARN MORE',
    phone: 'CALL US (945) 426-0210',
  },
];

/* ------------------------------ Services List ----------------------------- */
export const services = [
  { id: 1, img: Images.haircut3, title: 'Haircuts & Trims', category: 'Haircuts & Trims' },
  { id: 2, img: Images.shampoo1, title: 'Shampoo & Blow-Dry', category: 'Shampoo & Blow-Dry' },
  { id: 3, img: Images.eyebrow1, title: 'Styling and updos', category: 'Styling & Updos' },
  {
    id: 4,
    img: Images.service4,
    title: 'Coloring and Chemical Treatments',
    category: 'Coloring and Chemical Treatments',
  },
  {
    id: 5,
    img: Images.service5,
    title: 'Braids, Wedding & Party',
    category: 'Braids, Wedding & Party',
  },
  { id: 6, img: Images.lounge2, title: 'Lounge', category: 'Lounge' },
];

/* ---------------------------- Customer Reviews ---------------------------- */
export const reviews = [
  {
    id: 1,
    name: 'Melat Belay',
    date: '10/14/2025',
    text: 'I wanted a fresh change and decided to try Haymi Salon. I’m so glad I did. The experience was comfortable, and I loved my new look.',
  },
  {
    id: 2,
    name: 'Helen Gaddissa',
    date: '07/11/2025',
    text: 'Amazing salon with excellent service. The stylist was very skilled and professional. Highly recommended.',
  },
  {
    id: 3,
    name: 'Shegit Shewa',
    date: '07/10/2025',
    text: 'I was looking for a salon that understands curly hair, and Haymi Salon exceeded my expectations. I felt well taken care of and loved the results.',
  },
  {
    id: 4,
    name: 'Vince Galati',
    date: '02/02/2025',
    text: 'Haymanot is the best! My hair always looks great after she works her magic.',
  },
  {
    id: 5,
    name: 'Alem Alma',
    date: '12/14/2024',
    text: 'I’ve been here several times, and I always leave happy. The stylists are friendly, skilled, and really know their work.',
  },
  {
    id: 6,
    name: 'Sosi Nigussa',
    date: '12/04/2024',
    text: 'I had a wonderful first visit. Haymanot fixed a bad haircut from another salon and explained everything clearly. She gave great advice, and I felt confident and happy when I left.',
  },
  {
    id: 7,
    name: 'Justin B',
    date: '10/09/2024',
    text: 'A clean, modern salon with welcoming staff. A great place for anyone looking for quality hair care, no matter the style.',
  },
  {
    id: 8,
    name: 'Ayene Adugna',
    date: '02/18/2024',
    text: 'Haymanot is amazing! She always makes my hair look beautiful. She is kind, professional, and always makes time for her clients.',
  },
];

/* ------------------------------- Nav Links -------------------------------- */
export const navLinks = [
  { id: 4, href: '/gallery', label: 'Gallery' },
  { id: 2, href: '#services', label: 'Services' },
  { id: 3, href: '#pricing', label: 'Pricing' },
  { id: 6, href: '#contacts', label: 'Contact Us' },
];

// constants/index.ts
export interface MenuItem {
  category: string;
  services: Array<{
    name: string;
    price: string;
  }>;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    category: 'CUTTING',
    services: [
      { name: "Women's wash", price: '$30 & up' },
      { name: "Women's cut", price: '$50 & up' },
      { name: "Women's style", price: '$50 & up' },
      { name: "Children's cut (under 13 years)", price: '$15 & up' },
    ],
  },
  {
    category: 'HAIR TREATMENTS',
    services: [
      { name: 'Hair treatments', price: '$50 & up' },
      { name: 'Formal style', price: '$50 & up' },
    ],
  },
  {
    category: 'BRAID',
    services: [
      { name: 'Simple braid', price: '$50 & up' },
      { name: 'Cornrow braid', price: '$60 & up' },
      { name: 'Box braid', price: '$120 & up' },
      { name: 'Twist braid', price: '$100 & up' },
    ],
  },
  {
    category: 'WEDDING & PARTY STYLE',
    services: [{ name: 'Bridal hair styling', price: 'By Consultation' }],
  },
  {
    category: 'HAIR EXTENSION',
    services: [{ name: 'Human hair extension', price: 'By Consultation' }],
  },
  {
    category: 'COLORING',
    services: [{ name: 'Color ', price: '$70 & up' }],
  },
];

export const contactInfo = {
  phone: '+1 (945) 426-0210',
  email: 'info@haymi.com',
  address: 'Lavon, Texas, USA',
};

export const categories = [
  {
    name: 'Haircuts & Trims',
    images: [Images.haircut3, Images.haircut5, Images.haircut6, Images.haircut7],
  },
  {
    name: 'Shampoo & Blow-Dry',
    images: [Images.shampoo1, Images.shampoo2, Images.shampoo3],
  },
  {
    name: 'Styling & Updos',
    images: [Images.eyebrow1, Images.eyebrow2, Images.eyebrow8, Images.eyebrow13],
  },
  {
    name: 'Coloring and Chemical Treatments',
    images: [Images.haircolor1, Images.haircolor2, Images.haircolor3, Images.haircolor4],
  },
  {
    name: 'Braids, Wedding & Party',
    images: [Images.braid1, Images.braid2, Images.braid3, Images.braid4],
  },
  {
    name: 'Lounge',
    images: [Images.lounge2, Images.lounge3],
  },
];
