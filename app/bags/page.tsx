import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function BagsPage() {
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
          <span className="text-gray-900">Bags</span>
        </nav>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Bags</h1>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bagProducts.map((product, index) => (
            <Link key={index} href={`/product/bag-${index}`}>
              <div className="group cursor-pointer">
                <div className="relative bg-gray-50 rounded-lg overflow-hidden">
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-600 text-white z-10">
                      {product.badge}
                    </Badge>
                  )}
                  <Image
                    src={`/images/bag-${(index % 4) + 1}.jpg`}
                    alt={product.name}
                    width={250}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    {product.salePrice ? (
                      <>
                        <span className="text-lg font-bold text-red-600">${product.salePrice}</span>
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-gray-900">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}

const bagProducts = [
  { name: "Alpha 3 Expandable Organizer Laptop Brief", originalPrice: 595, salePrice: 297, badge: "50% OFF" },
  { name: "Marylou Crossbody", originalPrice: 295, salePrice: 147, badge: "50% OFF" },
  { name: "Tyler Crossbody", originalPrice: 295, salePrice: 147, badge: "50% OFF" },
  { name: "Harrison Seneca Slim Brief", originalPrice: 395, salePrice: 197, badge: "50% OFF" },
]
