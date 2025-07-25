import Image from "next/image"
import Link from "next/link"
import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import { Filter, ChevronDown } from "lucide-react"

const bagProducts = [
  {
    id: 1,
    name: "Alpha 3 Organizer Brief",
    slug: "alpha-3-organizer-brief",
    collection: "Alpha 3",
    price: 297,
    originalPrice: 595,
    discount: 50,
    image: "/images/bag-3.jpg",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Voyageur Joanne Laptop Carrier",
    slug: "voyageur-joanne-laptop-carrier",
    collection: "Voyageur",
    price: 172,
    originalPrice: 345,
    discount: 50,
    image: "/images/bag-2.jpg",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 3,
    name: "Harrison Bradner Briefcase",
    slug: "harrison-bradner-briefcase",
    collection: "Harrison",
    price: 297,
    originalPrice: 595,
    discount: 50,
    image: "/images/bag-1.jpg",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 4,
    name: "Harrison Sycamore Slim Brief",
    slug: "harrison-sycamore-slim-brief",
    collection: "Harrison",
    price: 247,
    originalPrice: 495,
    discount: 50,
    image: "/images/bag-4.jpg",
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 5,
    name: "Voyageur Sheryl Business Tote",
    slug: "voyageur-sheryl-tote",
    collection: "Voyageur",
    price: 222,
    originalPrice: 445,
    discount: 50,
    image: "/images/new-4.jpg",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 6,
    name: "Tyler Crossbody",
    slug: "tyler-crossbody",
    collection: "Wallets",
    price: 147,
    originalPrice: 295,
    discount: 50,
    image: "/images/accessory-2.jpg",
    isNew: false,
    isBestSeller: false,
  },
]

export default function BagsPage() {
  return (
    <div className="min-h-screen bg-white">
      <TumiHeader />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/bag-hero.svg"
          alt="TUMI Bag Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-light tracking-wider mb-4">BAGS</h1>
            <p className="text-xl tracking-wide">Sophisticated design meets everyday functionality</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">Bags</span>
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
            <span className="text-sm text-gray-600">{bagProducts.length} Products</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bagProducts.map((product) => (
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

      {/* Information Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light tracking-wider mb-6">ELEGANT VERSATILITY</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our bag collection offers the perfect balance of style and practicality. From 
              professional briefcases to chic crossbodies, each design features thoughtful 
              organization and premium materials to elevate your everyday carry.
            </p>
            <Link
              href="/bag-guide"
              className="inline-block bg-black text-white px-8 py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors"
            >
              BAG BUYING GUIDE
            </Link>
          </div>
        </div>
      </section>

      <TumiFooter />
    </div>
  )
}