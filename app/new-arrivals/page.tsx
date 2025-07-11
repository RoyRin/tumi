import Image from "next/image"
import Link from "next/link"
import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import { Filter, ChevronDown } from "lucide-react"
import { getAllProducts } from "@/lib/products"

export default function NewArrivalsPage() {
  // Get all products that are marked as new
  const newProducts = getAllProducts().filter(product => product.isNew)
  
  // Also include some recent products even if not marked as new
  const additionalProducts = getAllProducts()
    .filter(p => !p.isNew)
    .slice(0, 4)
  
  const allNewArrivals = [...newProducts, ...additionalProducts]

  return (
    <div className="min-h-screen bg-white">
      <TumiHeader />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/new-arrivals-hero.jpg"
          alt="TUMI New Arrivals"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg text-white">
              <h1 className="text-6xl md:text-7xl font-light tracking-wider mb-4">NEW ARRIVALS</h1>
              <p className="text-2xl tracking-wide mb-6">Discover the Latest</p>
              <p className="text-lg mb-8">
                Explore our newest collections featuring innovative designs and premium materials crafted for the modern traveler.
              </p>
              <Link
                href="#all-products"
                className="inline-block bg-white text-black px-8 py-3 text-sm tracking-wider hover:bg-gray-100 transition-colors"
              >
                SHOP NEW ARRIVALS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bar */}
      <div className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm tracking-wider">
            <span>✓ FREE SHIPPING</span>
            <span>✓ LIFETIME WARRANTY</span>
            <span>✓ COMPLIMENTARY MONOGRAMMING</span>
            <span>✓ EXCLUSIVE DESIGNS</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">New Arrivals</span>
        </nav>
      </div>

      {/* Filter Bar */}
      <div className="container mx-auto px-4 pb-8" id="all-products">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-sm tracking-wider hover:text-gray-600 transition-colors">
              <Filter className="w-4 h-4" />
              <span>FILTER</span>
            </button>
            <span className="text-sm text-gray-600">{allNewArrivals.length} Products</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <button className="flex items-center space-x-2 text-sm tracking-wider border-b border-black pb-1">
              <span>NEWEST FIRST</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allNewArrivals.map((product, index) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs tracking-wider z-10">
                  NEW
                </span>
                {index < 3 && (
                  <span className="absolute top-4 right-4 bg-gold text-black px-3 py-1 text-xs tracking-wider z-10 border border-black">
                    JUST DROPPED
                  </span>
                )}
                <Image
                  src={product.images[0]}
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
                  <span className="text-lg font-light">${product.originalPrice || product.price}</span>
                </div>
                <p className="text-xs text-gray-600">Available in {product.colors.length} colors</p>
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

      {/* Collections Showcase */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-wider text-center mb-12">FEATURED COLLECTIONS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/collections/alpha-3" className="group">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <Image
                  src="/images/luggage-1.jpg"
                  alt="Alpha 3 Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-light tracking-wider mb-2">ALPHA 3</h3>
                  <p className="text-sm">Business & Travel Excellence</p>
                </div>
              </div>
            </Link>

            <Link href="/collections/19-degree" className="group">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <Image
                  src="/images/luggage-3.jpg"
                  alt="19 Degree Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-light tracking-wider mb-2">19 DEGREE</h3>
                  <p className="text-sm">Aluminum Innovation</p>
                </div>
              </div>
            </Link>

            <Link href="/collections/voyageur" className="group">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <Image
                  src="/images/backpack-1.jpg"
                  alt="Voyageur Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-light tracking-wider mb-2">VOYAGEUR</h3>
                  <p className="text-sm">Women's Luxury Travel</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-wider mb-4">BE THE FIRST TO KNOW</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive access to new arrivals, limited editions, and special offers.
          </p>
          <Link
            href="/account/register"
            className="inline-block bg-black text-white px-8 py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors"
          >
            SIGN UP NOW
          </Link>
        </div>
      </section>

      <TumiFooter />
    </div>
  )
}