import Image from "next/image"
import Link from "next/link"
import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import { Filter, ChevronDown } from "lucide-react"

const newProducts = [
  {
    id: 1,
    name: "Alpha 3 Organizer Brief",
    slug: "alpha-3-organizer-brief",
    collection: "Alpha 3",
    price: 595,
    originalPrice: null,
    discount: null,
    image: "/images/new-1.jpg",
    isNew: true,
    isBestSeller: false,
    releaseDate: "January 2025",
  },
  {
    id: 2,
    name: "Merge Wheeled Duffel Packing Case",
    slug: "merge-wheeled-duffel",
    collection: "Merge",
    price: 795,
    originalPrice: null,
    discount: null,
    image: "/images/new-2.jpg",
    isNew: true,
    isBestSeller: false,
    releaseDate: "January 2025",
  },
  {
    id: 3,
    name: "Voyageur Carson Backpack",
    slug: "voyageur-carson-backpack",
    collection: "Voyageur",
    price: 395,
    originalPrice: null,
    discount: null,
    image: "/images/new-3.jpg",
    isNew: true,
    isBestSeller: true,
    releaseDate: "December 2024",
  },
  {
    id: 4,
    name: "Alpha Bravo Sheppard Deluxe Brief Pack",
    slug: "alpha-bravo-sheppard-brief-pack",
    collection: "Alpha Bravo",
    price: 495,
    originalPrice: null,
    discount: null,
    image: "/images/new-4.jpg",
    isNew: true,
    isBestSeller: false,
    releaseDate: "December 2024",
  },
  {
    id: 5,
    name: "Tegra-Lite Max Medium Trip Expandable Packing Case",
    slug: "tegra-lite-max-medium-trip",
    collection: "Tegra-Lite",
    price: 695,
    originalPrice: null,
    discount: null,
    image: "/images/new-5.jpg",
    isNew: true,
    isBestSeller: true,
    releaseDate: "November 2024",
  },
  {
    id: 6,
    name: "19 Degree Aluminum Short Trip Packing Case",
    slug: "19-degree-aluminum-short-trip",
    collection: "19 Degree",
    price: 1295,
    originalPrice: null,
    discount: null,
    image: "/images/new-6.jpg",
    isNew: true,
    isBestSeller: false,
    releaseDate: "November 2024",
  },
  {
    id: 7,
    name: "Harrison Bradner Briefcase",
    slug: "harrison-bradner-briefcase",
    collection: "Harrison",
    price: 525,
    originalPrice: null,
    discount: null,
    image: "/images/bag-1.jpg",
    isNew: true,
    isBestSeller: false,
    releaseDate: "October 2024",
  },
  {
    id: 8,
    name: "3-in-1 Foldable Magnetic Wireless Charger",
    slug: "3-in-1-wireless-charger",
    collection: "Accessories",
    price: 165,
    originalPrice: null,
    discount: null,
    image: "/images/accessory-1.jpg",
    isNew: true,
    isBestSeller: false,
    releaseDate: "October 2024",
  },
]

export default function WhatsNewPage() {
  return (
    <div className="min-h-screen bg-white">
      <TumiHeader />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/whats-new-hero.svg"
          alt="TUMI New Arrivals"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-light tracking-wider mb-4">WHAT'S NEW</h1>
            <p className="text-xl tracking-wide">Discover our latest innovations</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">What's New</span>
        </nav>
      </div>

      {/* Filter Bar */}
      <div className="container mx-auto px-4 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-sm tracking-wider hover:text-gray-600 transition-colors">
              <Filter className="w-4 h-4" />
              <span>FILTER</span>
            </button>
            <span className="text-sm text-gray-600">{newProducts.length} Products</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <button className="flex items-center space-x-2 text-sm tracking-wider border-b border-black pb-1">
              <span>NEWEST</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                <span className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 text-xs tracking-wider z-10">
                  NEW ARRIVAL
                </span>
                {product.isBestSeller && (
                  <span className="absolute top-14 left-4 bg-gray-800 text-white px-3 py-1 text-xs tracking-wider z-10">
                    BEST SELLER
                  </span>
                )}
                <span className="absolute bottom-4 right-4 bg-white bg-opacity-90 text-black px-3 py-1 text-xs tracking-wider z-10">
                  {product.releaseDate}
                </span>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-gray-600 tracking-wider">{product.collection.toUpperCase()}</p>
                <h3 className="text-sm font-light tracking-wide group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-light">${product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="border border-black px-8 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-colors">
            LOAD MORE
          </button>
        </div>
      </section>

      {/* Information Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light tracking-wider mb-6">INNOVATION MEETS STYLE</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Explore our newest arrivals featuring cutting-edge design and technology. Each piece 
              represents our commitment to continuous innovation, combining premium materials with 
              thoughtful functionality to create products that redefine modern travel.
            </p>
            <Link
              href="/collections"
              className="inline-block bg-black text-white px-8 py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors"
            >
              EXPLORE ALL COLLECTIONS
            </Link>
          </div>
        </div>
      </section>

      <TumiFooter />
    </div>
  )
}
