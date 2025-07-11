import Image from "next/image"
import Link from "next/link"
import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import { Filter, ChevronDown } from "lucide-react"

const accessoryProducts = [
  {
    id: 1,
    name: "3-in-1 Foldable Magnetic Wireless Charger",
    slug: "3-in-1-wireless-charger",
    collection: "Electronics",
    price: 97,
    originalPrice: 195,
    discount: 50,
    image: "/images/wireless-charger.svg",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Tyler Crossbody",
    slug: "tyler-crossbody",
    collection: "Wallets",
    price: 147,
    originalPrice: 295,
    discount: 50,
    image: "/images/tyler-crossbody.svg",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 3,
    name: "Nassau SLG Wallet",
    slug: "nassau-slg-wallet",
    collection: "Wallets",
    price: 97,
    originalPrice: 195,
    discount: 50,
    image: "/images/nassau-wallet.svg",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 4,
    name: "Universal Travel Adapter",
    slug: "travel-adapter",
    collection: "Electronics",
    price: 47,
    originalPrice: 95,
    discount: 50,
    image: "/images/travel-adapter.svg",
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 5,
    name: "Alpha SLG Card Case",
    slug: "alpha-slg-card-case",
    collection: "Wallets",
    price: 65,
    originalPrice: 125,
    discount: 48,
    image: "/images/card-case.svg",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 6,
    name: "Premium Luggage Tag Set",
    slug: "luggage-tag-set",
    collection: "Travel",
    price: 45,
    originalPrice: 85,
    discount: 47,
    image: "/images/luggage-tag-set.svg",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 7,
    name: "Tech Pouch Organizer",
    slug: "tech-pouch-organizer",
    collection: "Electronics",
    price: 75,
    originalPrice: 145,
    discount: 48,
    image: "/images/tech-pouch.svg",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 8,
    name: "RFID Passport Cover",
    slug: "rfid-passport-cover",
    collection: "Travel",
    price: 55,
    originalPrice: 105,
    discount: 48,
    image: "/images/passport-cover.svg",
    isNew: false,
    isBestSeller: false,
  },
]

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <TumiHeader />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/accessory-hero.svg"
          alt="TUMI Accessories Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-light tracking-wider mb-4">ACCESSORIES</h1>
            <p className="text-xl tracking-wide">Essential travel companions</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">Accessories</span>
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
            <span className="text-sm text-gray-600">{accessoryProducts.length} Products</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <button className="flex items-center space-x-2 text-sm tracking-wider border-b border-black pb-1">
              <span>FEATURED</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessoryProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs tracking-wider z-10">
                    {product.discount}% OFF
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs tracking-wider z-10">
                    NEW
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="absolute top-14 left-4 bg-gray-800 text-white px-3 py-1 text-xs tracking-wider z-10">
                    BEST SELLER
                  </span>
                )}
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
                  <span className="text-lg font-light text-red-600">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
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

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wider text-center mb-12">SHOP BY CATEGORY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-8 mb-4">
                <h3 className="text-lg font-light tracking-wider">ELECTRONICS</h3>
              </div>
              <p className="text-sm text-gray-600">
                Chargers, adapters, and tech organizers for the modern traveler
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-8 mb-4">
                <h3 className="text-lg font-light tracking-wider">WALLETS</h3>
              </div>
              <p className="text-sm text-gray-600">
                Premium leather wallets and card cases with RFID protection
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-8 mb-4">
                <h3 className="text-lg font-light tracking-wider">TRAVEL</h3>
              </div>
              <p className="text-sm text-gray-600">
                Essential accessories for comfortable and organized travel
              </p>
            </div>
          </div>
        </div>
      </section>

      <TumiFooter />
    </div>
  )
}