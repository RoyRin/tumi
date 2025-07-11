import Image from "next/image"
import Link from "next/link"
import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TumiHeader />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="/images/hero-main.jpg"
          alt="TUMI Holiday Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4">
            HOLIDAY SALE
          </h1>
          <p className="text-xl md:text-2xl tracking-wide mb-8">
            UP TO 50% OFF SELECT STYLES
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/sale"
              className="bg-white text-black px-8 py-3 text-sm tracking-wider hover:bg-gray-100 transition-colors"
            >
              SHOP SALE
            </Link>
            <Link
              href="/new-arrivals"
              className="border border-white text-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              NEW ARRIVALS
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center tracking-wider mb-12">
            SHOP BY CATEGORY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-light tracking-wider mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm tracking-wide opacity-90">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center tracking-wider mb-12">
            BEST SELLERS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square relative">
                    {product.discount && (
                      <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs tracking-wider z-10">
                        {product.discount}% OFF
                      </span>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium tracking-wide mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                      <span className="text-lg font-medium text-red-600">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/best-sellers"
              className="inline-block bg-black text-white px-8 py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors"
            >
              VIEW ALL BEST SELLERS
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-light tracking-wider mb-4">
                THE PERFECT GIFT
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover our curated selection of premium luggage and accessories. 
                From innovative carry-ons to sophisticated business bags, find the 
                perfect gift for every traveler on your list.
              </p>
              <Link
                href="/gift-guide"
                className="inline-block bg-black text-white px-8 py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors"
              >
                SHOP GIFT GUIDE
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/gift-guide.jpg"
                  alt="TUMI Gift Guide"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TumiFooter />
    </div>
  )
}

// Sample data
const categories = [
  {
    name: "LUGGAGE",
    description: "Travel in style",
    image: "/images/category-luggage.jpg",
    href: "/luggage",
  },
  {
    name: "BACKPACKS",
    description: "For work and play",
    image: "/images/category-backpacks.jpg",
    href: "/backpacks",
  },
  {
    name: "BAGS",
    description: "Everyday essentials",
    image: "/images/category-bags.jpg",
    href: "/bags",
  },
]

const bestSellers = [
  {
    id: 1,
    name: "Alpha 3 International Expandable Carry-On",
    slug: "alpha-3-international-carry-on",
    price: 397,
    originalPrice: 795,
    discount: 50,
    image: "/images/luggage-1.jpg",
  },
  {
    id: 2,
    name: "Voyageur Carson Backpack",
    slug: "voyageur-carson-backpack",
    price: 197,
    originalPrice: 395,
    discount: 50,
    image: "/images/backpack-1.jpg",
  },
  {
    id: 3,
    name: "Harrison Bradner Briefcase",
    slug: "harrison-bradner-briefcase",
    price: 297,
    originalPrice: 595,
    discount: 50,
    image: "/images/bag-1.jpg",
  },
  {
    id: 4,
    name: "19 Degree Aluminum Short Trip",
    slug: "19-degree-aluminum-short-trip",
    price: 647,
    originalPrice: 1295,
    discount: 50,
    image: "/images/luggage-3.jpg",
  },
]