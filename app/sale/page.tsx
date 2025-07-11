import Image from "next/image"
import Link from "next/link"
import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import { Filter, ChevronDown } from "lucide-react"

const saleProducts = [
  {
    id: 1,
    name: "Alpha 3 International Expandable Carry-On",
    slug: "alpha-3-international-carry-on",
    category: "Luggage",
    collection: "Alpha 3",
    price: 397,
    originalPrice: 795,
    discount: 50,
    image: "/images/luggage-1.jpg",
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Voyageur Carson Backpack",
    slug: "voyageur-carson-backpack",
    category: "Backpacks",
    collection: "Voyageur",
    price: 197,
    originalPrice: 395,
    discount: 50,
    image: "/images/backpack-1.jpg",
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Harrison Bradner Briefcase",
    slug: "harrison-bradner-briefcase",
    category: "Bags",
    collection: "Harrison",
    price: 297,
    originalPrice: 595,
    discount: 50,
    image: "/images/bag-1.jpg",
    isBestSeller: false,
  },
  {
    id: 4,
    name: "19 Degree Aluminum Short Trip",
    slug: "19-degree-aluminum-short-trip",
    category: "Luggage",
    collection: "19 Degree",
    price: 647,
    originalPrice: 1295,
    discount: 50,
    image: "/images/luggage-3.jpg",
    isBestSeller: false,
  },
  {
    id: 5,
    name: "Alpha Bravo Navigation Backpack",
    slug: "alpha-bravo-navigation-backpack",
    category: "Backpacks",
    collection: "Alpha Bravo",
    price: 247,
    originalPrice: 495,
    discount: 50,
    image: "/images/backpack-2.jpg",
    isBestSeller: false,
  },
  {
    id: 6,
    name: "Voyageur Joanne Laptop Carrier",
    slug: "voyageur-joanne-laptop-carrier",
    category: "Bags",
    collection: "Voyageur",
    price: 172,
    originalPrice: 345,
    discount: 50,
    image: "/images/bag-2.jpg",
    isBestSeller: false,
  },
  {
    id: 7,
    name: "Tegra-Lite Max Medium Trip",
    slug: "tegra-lite-max-medium-trip",
    category: "Luggage",
    collection: "Tegra-Lite",
    price: 447,
    originalPrice: 895,
    discount: 50,
    image: "/images/luggage-4.jpg",
    isBestSeller: false,
  },
  {
    id: 8,
    name: "3-in-1 Foldable Wireless Charger",
    slug: "3-in-1-wireless-charger",
    category: "Accessories",
    collection: "Electronics",
    price: 97,
    originalPrice: 195,
    discount: 50,
    image: "/images/accessory-1.jpg",
    isBestSeller: true,
  },
  {
    id: 9,
    name: "Nassau SLG Wallet",
    slug: "nassau-slg-wallet",
    category: "Accessories",
    collection: "Wallets",
    price: 97,
    originalPrice: 195,
    discount: 50,
    image: "/images/accessory-3.jpg",
    isBestSeller: false,
  },
  {
    id: 10,
    name: "Merge Wheeled Duffel",
    slug: "merge-wheeled-duffel",
    category: "Luggage",
    collection: "Merge",
    price: 372,
    originalPrice: 745,
    discount: 50,
    image: "/images/luggage-1.jpg",
    isBestSeller: false,
  },
  {
    id: 11,
    name: "Alpha 3 Organizer Brief",
    slug: "alpha-3-organizer-brief",
    category: "Bags",
    collection: "Alpha 3",
    price: 297,
    originalPrice: 595,
    discount: 50,
    image: "/images/bag-3.jpg",
    isBestSeller: true,
  },
  {
    id: 12,
    name: "Voyageur Celina Backpack",
    slug: "voyageur-celina-backpack",
    category: "Backpacks",
    collection: "Voyageur",
    price: 222,
    originalPrice: 445,
    discount: 50,
    image: "/images/backpack-4.jpg",
    isBestSeller: false,
  },
]

export default function SalePage() {
  return (
    <div className="min-h-screen bg-white">
      <TumiHeader />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/sale-hero.jpg"
          alt="TUMI Sale"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg text-white">
              <h1 className="text-6xl md:text-7xl font-light tracking-wider mb-4">SALE</h1>
              <p className="text-2xl tracking-wide mb-6">UP TO 50% OFF</p>
              <p className="text-lg mb-8">
                Limited time only. Shop our selection of premium luggage, bags, and accessories at exceptional prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#all-sale"
                  className="bg-white text-black px-6 py-3 text-sm tracking-wider hover:bg-gray-100 transition-colors"
                >
                  SHOP ALL SALE
                </Link>
                <Link
                  href="/luggage"
                  className="border border-white text-white px-6 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-colors"
                >
                  SHOP BY CATEGORY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sale Info Bar */}
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm tracking-wider">
            FINAL SALE: No returns or exchanges on sale items | Free shipping on all orders
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">Sale</span>
        </nav>
      </div>

      {/* Filter Bar */}
      <div className="container mx-auto px-4 pb-8" id="all-sale">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-sm tracking-wider hover:text-gray-600 transition-colors">
              <Filter className="w-4 h-4" />
              <span>FILTER</span>
            </button>
            <span className="text-sm text-gray-600">{saleProducts.length} Products</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <button className="flex items-center space-x-2 text-sm tracking-wider border-b border-black pb-1">
              <span>BEST DISCOUNT</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          <button className="px-4 py-2 text-sm tracking-wider bg-black text-white">ALL</button>
          <button className="px-4 py-2 text-sm tracking-wider border border-gray-300 hover:border-black transition-colors">LUGGAGE</button>
          <button className="px-4 py-2 text-sm tracking-wider border border-gray-300 hover:border-black transition-colors">BACKPACKS</button>
          <button className="px-4 py-2 text-sm tracking-wider border border-gray-300 hover:border-black transition-colors">BAGS</button>
          <button className="px-4 py-2 text-sm tracking-wider border border-gray-300 hover:border-black transition-colors">ACCESSORIES</button>
        </div>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs tracking-wider z-10">
                  {product.discount}% OFF
                </span>
                {product.isBestSeller && (
                  <span className="absolute top-14 left-4 bg-gray-800 text-white px-3 py-1 text-xs tracking-wider z-10">
                    BEST SELLER
                  </span>
                )}
                <span className="absolute top-4 right-4 bg-white text-black px-3 py-1 text-xs tracking-wider z-10 border">
                  {product.category.toUpperCase()}
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
                  <span className="text-lg font-medium text-red-600">${product.price}</span>
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="text-xs text-red-600 font-medium">
                    Save ${product.originalPrice - product.price}
                  </span>
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

      {/* Sale Terms */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-6 text-center">SALE TERMS & CONDITIONS</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                • All sale items are final sale and cannot be returned or exchanged
              </p>
              <p>
                • Sale prices are valid for a limited time only
              </p>
              <p>
                • Cannot be combined with other offers or promotions
              </p>
              <p>
                • Free shipping applies to all sale orders
              </p>
              <p>
                • While supplies last - quantities are limited
              </p>
            </div>
          </div>
        </div>
      </section>

      <TumiFooter />
    </div>
  )
}