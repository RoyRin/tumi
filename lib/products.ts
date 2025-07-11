export type Product = {
  id: string
  slug: string
  name: string
  collection: string
  category: string
  price: number
  originalPrice: number
  discount: number
  images: string[]
  colors: string[]
  features: string[]
  dimensions: string
  weight: string
  warranty: string
  sku: string
  description: string
  isNew?: boolean
  isBestSeller?: boolean
}

export const products: Record<string, Product> = {
  // Luggage Products
  "alpha-3-international-carry-on": {
    id: "alpha-3-international-carry-on",
    slug: "alpha-3-international-carry-on",
    name: "Alpha 3 International Expandable Carry-On",
    collection: "Alpha 3",
    category: "Luggage",
    price: 397,
    originalPrice: 795,
    discount: 50,
    images: ["/images/luggage-1.jpg"],
    colors: ["Black", "Navy", "Anthracite"],
    features: [
      "Dual-access main compartment",
      "Expandable by 2 inches",
      "4-wheel spinner system",
      "USB power port",
      "TSA-approved locks",
      "Leather trim details"
    ],
    dimensions: "22\" x 14\" x 9\" (expanded: 11\")",
    weight: "8.6 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0117398D3",
    description: "The Alpha 3 International Expandable Carry-On is designed for the modern traveler who demands both style and functionality.",
    isBestSeller: true
  },
  "19-degree-aluminum-short-trip": {
    id: "19-degree-aluminum-short-trip",
    slug: "19-degree-aluminum-short-trip",
    name: "19 Degree Aluminum Short Trip Packing Case",
    collection: "19 Degree",
    category: "Luggage",
    price: 647,
    originalPrice: 1295,
    discount: 50,
    images: ["/images/luggage-3.jpg"],
    colors: ["Silver", "Matte Black", "Texture Silver"],
    features: [
      "Aluminum shell construction",
      "Multi-stage telescoping handle",
      "Dual spinner wheels",
      "TSA-approved locks",
      "Interior compression system",
      "Leather accents"
    ],
    dimensions: "26\" x 18\" x 11\"",
    weight: "11.2 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "036860MS",
    description: "The iconic 19 Degree Aluminum collection combines striking design with uncompromising durability.",
    isBestSeller: false
  },
  "tegra-lite-max-medium-trip": {
    id: "tegra-lite-max-medium-trip",
    slug: "tegra-lite-max-medium-trip",
    name: "Tegra-Lite Max Medium Trip Expandable Packing Case",
    collection: "Tegra-Lite",
    category: "Luggage",
    price: 447,
    originalPrice: 895,
    discount: 50,
    images: ["/images/luggage-4.jpg"],
    colors: ["Black Graphite", "Baltic"],
    features: [
      "Tegris® thermoplastic composite shell",
      "Ultra-lightweight construction",
      "Expandable main compartment",
      "4-wheel spinner system",
      "3-stage telescoping handle",
      "TSA-approved locks"
    ],
    dimensions: "27.5\" x 19.5\" x 11.5\" (expanded: 13.5\")",
    weight: "9.1 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0288773D",
    description: "Revolutionary Tegra-Lite Max offers maximum durability at minimum weight for effortless travel.",
    isNew: true
  },
  "voyageur-tres-leger-carry-on": {
    id: "voyageur-tres-leger-carry-on",
    slug: "voyageur-tres-leger-carry-on",
    name: "Voyageur Tres Leger International Carry-On",
    collection: "Voyageur",
    category: "Luggage",
    price: 322,
    originalPrice: 645,
    discount: 50,
    images: ["/images/new-2.jpg"],
    colors: ["Black", "Mink"],
    features: [
      "Lightweight nylon construction",
      "4-wheel spinner system",
      "Expandable main compartment",
      "Multiple pockets for organization",
      "Add-a-bag sleeve",
      "Water-resistant coating"
    ],
    dimensions: "21.75\" x 15.75\" x 9\" (expanded: 10.5\")",
    weight: "6.2 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0135521MNK",
    description: "The Voyageur Tres Leger combines ultra-lightweight design with the sophisticated style of our women's collection.",
    isBestSeller: true
  },
  "alpha-3-extended-trip": {
    id: "alpha-3-extended-trip",
    slug: "alpha-3-extended-trip",
    name: "Alpha 3 Extended Trip Expandable 4 Wheeled Packing Case",
    collection: "Alpha 3",
    category: "Luggage",
    price: 497,
    originalPrice: 995,
    discount: 50,
    images: ["/images/new-1.jpg"],
    colors: ["Black", "Navy"],
    features: [
      "Extended capacity for long trips",
      "Dual-access main compartment",
      "Expandable by 2 inches",
      "4-wheel spinner system",
      "Garment sleeve included",
      "Multiple organizational pockets"
    ],
    dimensions: "29\" x 20.5\" x 12.5\" (expanded: 14.5\")",
    weight: "12.8 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0117377D3",
    description: "The ultimate packing solution for extended travel, offering maximum capacity and organization.",
    isBestSeller: false
  },
  "merge-wheeled-duffel": {
    id: "merge-wheeled-duffel",
    slug: "merge-wheeled-duffel",
    name: "Merge Wheeled Duffel Packing Case",
    collection: "Merge",
    category: "Luggage",
    price: 372,
    originalPrice: 745,
    discount: 50,
    images: ["/images/luggage-2.jpg"],
    colors: ["Black", "Grey Highlands Print"],
    features: [
      "Duffel and wheeled luggage hybrid",
      "Removable backpack straps",
      "Water-resistant fabric",
      "Compression straps",
      "Multiple carry options",
      "External pockets"
    ],
    dimensions: "24\" x 14\" x 12\"",
    weight: "7.4 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0205173GHP",
    description: "Versatile wheeled duffel that adapts to any journey with multiple carry options.",
    isNew: true
  },

  // Backpack Products
  "voyageur-carson-backpack": {
    id: "voyageur-carson-backpack",
    slug: "voyageur-carson-backpack",
    name: "Voyageur Carson Backpack",
    collection: "Voyageur",
    category: "Backpacks",
    price: 197,
    originalPrice: 395,
    discount: 50,
    images: ["/images/backpack-1.jpg"],
    colors: ["Black", "Mink", "Navy"],
    features: [
      "Fits up to 15\" laptop",
      "Multiple organizational pockets",
      "Padded shoulder straps",
      "Water-resistant fabric",
      "Add-a-bag sleeve",
      "RFID blocking pocket"
    ],
    dimensions: "16.5\" x 12\" x 6.5\"",
    weight: "2.2 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0109635MNK",
    description: "The Voyageur Carson Backpack combines sophisticated style with practical functionality.",
    isBestSeller: true
  },
  "alpha-bravo-navigation-backpack": {
    id: "alpha-bravo-navigation-backpack",
    slug: "alpha-bravo-navigation-backpack",
    name: "Alpha Bravo Navigation Backpack",
    collection: "Alpha Bravo",
    category: "Backpacks",
    price: 247,
    originalPrice: 495,
    discount: 50,
    images: ["/images/backpack-2.jpg"],
    colors: ["Black", "Navy", "Graphite"],
    features: [
      "Fits up to 15\" laptop",
      "Ballistic nylon construction",
      "Waterproof rain cover included",
      "Side access laptop compartment",
      "Multiple organizational pockets",
      "Padded back panel"
    ],
    dimensions: "17\" x 12.5\" x 7.5\"",
    weight: "3.1 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0232793NVY",
    description: "Military-inspired design meets modern functionality in this versatile everyday backpack.",
    isBestSeller: false
  },
  "alpha-bravo-sheppard-brief-pack": {
    id: "alpha-bravo-sheppard-brief-pack",
    slug: "alpha-bravo-sheppard-brief-pack",
    name: "Alpha Bravo Sheppard Deluxe Brief Pack",
    collection: "Alpha Bravo",
    category: "Backpacks",
    price: 272,
    originalPrice: 545,
    discount: 50,
    images: ["/images/backpack-3.jpg"],
    colors: ["Black", "Navy"],
    features: [
      "Converts from briefcase to backpack",
      "Fits up to 15\" laptop",
      "Ballistic nylon construction",
      "Multiple carrying options",
      "Organizational pockets",
      "Leather trim details"
    ],
    dimensions: "16\" x 11.75\" x 6.5\"",
    weight: "3.4 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0232789D3",
    description: "The ultimate 3-way business companion that adapts to your carrying needs.",
    isNew: true
  },
  "voyageur-celina-backpack": {
    id: "voyageur-celina-backpack",
    slug: "voyageur-celina-backpack",
    name: "Voyageur Celina Backpack",
    collection: "Voyageur",
    category: "Backpacks",
    price: 222,
    originalPrice: 445,
    discount: 50,
    images: ["/images/backpack-4.jpg"],
    colors: ["Black", "Cordovan"],
    features: [
      "Convertible backpack/tote design",
      "Fits up to 13\" laptop",
      "Lightweight construction",
      "Multiple pockets",
      "Adjustable straps",
      "Water-resistant fabric"
    ],
    dimensions: "14.5\" x 11.5\" x 5.5\"",
    weight: "1.8 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0196308CRD",
    description: "Versatile convertible design transitions seamlessly from backpack to tote.",
    isBestSeller: false
  },
  "merge-brief-pack": {
    id: "merge-brief-pack",
    slug: "merge-brief-pack",
    name: "Merge Brief Pack",
    collection: "Merge",
    category: "Backpacks",
    price: 197,
    originalPrice: 395,
    discount: 50,
    images: ["/images/new-3.jpg"],
    colors: ["Black", "Grey Highlands Print"],
    features: [
      "3-way carry design",
      "Fits up to 15\" laptop",
      "Water-resistant materials",
      "Quick-access pockets",
      "Compression straps",
      "Trolley sleeve"
    ],
    dimensions: "16.5\" x 11.5\" x 6\"",
    weight: "2.6 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0205176GHP",
    description: "Modern brief pack designed for the contemporary professional.",
    isNew: false
  },

  // Bags Products
  "harrison-bradner-briefcase": {
    id: "harrison-bradner-briefcase",
    slug: "harrison-bradner-briefcase",
    name: "Harrison Bradner Briefcase",
    collection: "Harrison",
    category: "Bags",
    price: 297,
    originalPrice: 595,
    discount: 50,
    images: ["/images/bag-1.jpg"],
    colors: ["Black", "Brown"],
    features: [
      "Full-grain leather construction",
      "Fits up to 15\" laptop",
      "Multiple organizational pockets",
      "Removable shoulder strap",
      "Leather-lined interior",
      "Brass hardware"
    ],
    dimensions: "16\" x 11.5\" x 4.5\"",
    weight: "3.8 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "063013BRN",
    description: "Timeless leather briefcase crafted with meticulous attention to detail.",
    isBestSeller: false
  },
  "voyageur-joanne-laptop-carrier": {
    id: "voyageur-joanne-laptop-carrier",
    slug: "voyageur-joanne-laptop-carrier",
    name: "Voyageur Joanne Laptop Carrier",
    collection: "Voyageur",
    category: "Bags",
    price: 172,
    originalPrice: 345,
    discount: 50,
    images: ["/images/bag-2.jpg"],
    colors: ["Black", "Mink"],
    features: [
      "Fits up to 14\" laptop",
      "Lightweight nylon construction",
      "Multiple pockets",
      "Adjustable shoulder strap",
      "Trolley sleeve",
      "RFID blocking pocket"
    ],
    dimensions: "15\" x 10.5\" x 2.5\"",
    weight: "1.4 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0196301MNK",
    description: "Sleek and sophisticated laptop carrier perfect for the modern professional woman.",
    isBestSeller: false
  },
  "alpha-3-organizer-brief": {
    id: "alpha-3-organizer-brief",
    slug: "alpha-3-organizer-brief",
    name: "Alpha 3 Organizer Brief",
    collection: "Alpha 3",
    category: "Bags",
    price: 297,
    originalPrice: 595,
    discount: 50,
    images: ["/images/bag-3.jpg"],
    colors: ["Black", "Anthracite"],
    features: [
      "Ballistic nylon construction",
      "Fits up to 15\" laptop",
      "Expandable main compartment",
      "File divider section",
      "Multiple pockets",
      "Leather trim"
    ],
    dimensions: "16.5\" x 12\" x 5\" (expanded: 7\")",
    weight: "3.2 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0117341D3",
    description: "The ultimate organizer briefcase with exceptional storage and organization.",
    isBestSeller: true
  },
  "harrison-sycamore-slim-brief": {
    id: "harrison-sycamore-slim-brief",
    slug: "harrison-sycamore-slim-brief",
    name: "Harrison Sycamore Slim Brief",
    collection: "Harrison",
    category: "Bags",
    price: 247,
    originalPrice: 495,
    discount: 50,
    images: ["/images/bag-4.jpg"],
    colors: ["Black", "Dark Brown"],
    features: [
      "Slim profile design",
      "Premium leather construction",
      "Fits up to 14\" laptop",
      "Interior organization",
      "Detachable shoulder strap",
      "Signature Harrison lining"
    ],
    dimensions: "15\" x 10.5\" x 2\"",
    weight: "2.6 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "063020DBR",
    description: "Refined slim briefcase for the discerning professional.",
    isNew: true
  },
  "voyageur-sheryl-tote": {
    id: "voyageur-sheryl-tote",
    slug: "voyageur-sheryl-tote",
    name: "Voyageur Sheryl Business Tote",
    collection: "Voyageur",
    category: "Bags",
    price: 222,
    originalPrice: 445,
    discount: 50,
    images: ["/images/new-4.jpg"],
    colors: ["Black", "Mink", "Cordovan"],
    features: [
      "Fits up to 15\" laptop",
      "Zip-top closure",
      "Multiple pockets",
      "Trolley sleeve",
      "Leather trim details",
      "Water-resistant fabric"
    ],
    dimensions: "16.5\" x 12.5\" x 5.5\"",
    weight: "2.0 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0196302MNK",
    description: "Sophisticated business tote designed for the professional woman.",
    isBestSeller: true
  },

  // Accessories Products
  "3-in-1-wireless-charger": {
    id: "3-in-1-wireless-charger",
    slug: "3-in-1-wireless-charger",
    name: "3-in-1 Foldable Magnetic Wireless Charger",
    collection: "Electronics",
    category: "Accessories",
    price: 97,
    originalPrice: 195,
    discount: 50,
    images: ["/images/accessory-1.jpg"],
    colors: ["Black"],
    features: [
      "Charges phone, watch, and earbuds simultaneously",
      "Foldable compact design",
      "Magnetic alignment",
      "Fast charging capability",
      "Travel-friendly",
      "LED indicator"
    ],
    dimensions: "3.5\" x 3.5\" x 0.5\" (folded)",
    weight: "0.5 lbs",
    warranty: "2 Year Limited Warranty",
    sku: "0145378D",
    description: "Innovative 3-in-1 charging solution for all your devices.",
    isBestSeller: true
  },
  "tyler-crossbody": {
    id: "tyler-crossbody",
    slug: "tyler-crossbody",
    name: "Tyler Crossbody",
    collection: "Wallets",
    category: "Accessories",
    price: 147,
    originalPrice: 295,
    discount: 50,
    images: ["/images/accessory-2.jpg"],
    colors: ["Black", "Brown"],
    features: [
      "Premium leather construction",
      "Adjustable crossbody strap",
      "Multiple card slots",
      "Zip pocket",
      "RFID protection",
      "Phone pocket"
    ],
    dimensions: "7.5\" x 4.5\" x 1\"",
    weight: "0.4 lbs",
    warranty: "2 Year Limited Warranty",
    sku: "0126108D",
    description: "Versatile crossbody wallet for hands-free convenience.",
    isBestSeller: false
  },
  "nassau-slg-wallet": {
    id: "nassau-slg-wallet",
    slug: "nassau-slg-wallet",
    name: "Nassau SLG Wallet",
    collection: "Wallets",
    category: "Accessories",
    price: 97,
    originalPrice: 195,
    discount: 50,
    images: ["/images/accessory-3.jpg"],
    colors: ["Black", "Navy"],
    features: [
      "Textured leather",
      "8 card slots",
      "Bill compartment",
      "ID window",
      "RFID protection",
      "Slim profile"
    ],
    dimensions: "4.25\" x 3.5\" x 0.5\"",
    weight: "0.2 lbs",
    warranty: "2 Year Limited Warranty",
    sku: "0126103D",
    description: "Classic bifold wallet with modern protection features.",
    isBestSeller: false
  },
  "travel-adapter": {
    id: "travel-adapter",
    slug: "travel-adapter",
    name: "Universal Travel Adapter",
    collection: "Electronics",
    category: "Accessories",
    price: 47,
    originalPrice: 95,
    discount: 50,
    images: ["/images/accessory-4.jpg"],
    colors: ["Black"],
    features: [
      "Works in 150+ countries",
      "4 USB ports",
      "1 USB-C port",
      "Surge protection",
      "Compact design",
      "Safety certified"
    ],
    dimensions: "3\" x 2\" x 2\"",
    weight: "0.3 lbs",
    warranty: "2 Year Limited Warranty",
    sku: "0145372D",
    description: "Essential travel adapter for global connectivity.",
    isNew: true
  },
  "travel-neck-pillow": {
    id: "travel-neck-pillow",
    slug: "travel-neck-pillow",
    name: "Memory Foam Travel Neck Pillow",
    collection: "Travel",
    category: "Accessories",
    price: 47,
    originalPrice: 95,
    discount: 50,
    images: ["/images/new-5.jpg"],
    colors: ["Black", "Grey"],
    features: [
      "Memory foam construction",
      "Removable washable cover",
      "Adjustable closure",
      "Compact storage bag",
      "Ergonomic design",
      "Machine washable"
    ],
    dimensions: "12\" x 11\" x 4\"",
    weight: "0.6 lbs",
    warranty: "1 Year Limited Warranty",
    sku: "0145555D",
    description: "Premium comfort for long-haul travel.",
    isBestSeller: true
  }
}

export function getProductBySlug(slug: string): Product | undefined {
  return products[slug]
}

export function getAllProducts(): Product[] {
  return Object.values(products)
}

export function getProductsByCategory(category: string): Product[] {
  return Object.values(products).filter(product => product.category === category)
}

export function getProductsByCollection(collection: string): Product[] {
  return Object.values(products).filter(product => product.collection === collection)
}