import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function LuggagePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900">Luggage</span>
        </nav>

        <div className="flex">
          {/* Sidebar Filters */}
          <div className="w-64 pr-8">
            <div className="space-y-6">
              <div>
                <button className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-4">
                  Construction Type
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-700">Hardsided (94)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-700">Softsided (49)</span>
                  </label>
                </div>
              </div>

              <div>
                <button className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-4">
                  Luggage Size
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div>
                <button className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-4">
                  Color
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div>
                <button className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-4">
                  Material
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div>
                <button className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-4">
                  Collection
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Luggage</h1>
              <div className="flex items-center space-x-4">
                <Button variant="outline">Hide Filters</Button>
                <select className="border border-gray-300 rounded-md px-3 py-2">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Sellers</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {luggageProducts.map((product, index) => (
                <Link key={index} href={`/product/luggage-${index}`}>
                  <div className="group cursor-pointer">
                    <div className="relative bg-gray-50 rounded-lg overflow-hidden">
                      {product.badge && (
                        <Badge
                          className={`absolute top-3 left-3 z-10 ${
                            product.badge === "BESTSELLER"
                              ? "bg-blue-600 hover:bg-blue-600"
                              : "bg-red-600 hover:bg-red-600"
                          } text-white`}
                        >
                          {product.badge}
                        </Badge>
                      )}
                      <Image
                        src={`/images/luggage-${(index % 4) + 1}.jpg`}
                        alt={product.name}
                        width={250}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-gray-500 mb-1">{product.collection}</p>
                      <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        {product.salePrice ? (
                          <>
                            <span className="text-lg font-bold text-red-600">${product.salePrice}</span>
                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                          </>
                        ) : (
                          <span className="text-lg font-bold text-gray-900">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex space-x-1">
                        {product.colors.map((color, colorIndex) => (
                          <div key={colorIndex} className={`w-4 h-4 rounded-full border border-gray-300 ${color}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

const luggageProducts = [
  {
    name: "International Expandable 4 Wheeled Carry-On",
    collection: "ALPHA",
    originalPrice: 895,
    badge: null,
    colors: ["bg-black", "bg-gray-600", "bg-blue-900"],
  },
  {
    name: "Continental Dual Access 4 Wheeled Carry-On",
    collection: "ALPHA",
    originalPrice: 1050,
    badge: "BESTSELLER",
    colors: ["bg-black", "bg-gray-600", "bg-blue-900", "bg-brown-600"],
  },
  {
    name: "Continental Dual Access 4 Wheeled Carry-On",
    collection: "ALPHA",
    originalPrice: 1095,
    salePrice: 765,
    badge: "30% OFF",
    colors: ["bg-black", "bg-gray-600", "bg-blue-900", "bg-brown-600"],
  },
]
