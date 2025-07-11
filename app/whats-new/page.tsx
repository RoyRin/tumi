import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Footer } from "@/components/footer"

const newProducts = [
  { name: "New Alpha 3 Expandable Organizer Laptop Brief", price: 595 },
  { name: "New Merge Wheeled Duffel Packing Case", price: 795 },
  { name: "New Voyageur Carson Backpack", price: 395 },
  { name: "New Alpha Bravo Sheppard Deluxe Brief Pack", price: 495 },
  { name: "New Tegra-Lite Max International Expandable Carry-On", price: 695 },
  { name: "New 19 Degree Aluminum International Carry-On", price: 1295 },
]

export default function WhatsNewPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900">What's New</span>
        </nav>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">What's New</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Hide Filters</Button>
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newProducts.map((product, index) => (
            <div key={index} className="group">
              <div className="relative bg-gray-50 rounded-lg overflow-hidden">
                <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-600 text-white z-10">NEW</Badge>
                <Image
                  src={`/images/new-${(index % 6) + 1}.jpg`}
                  alt={product.name}
                  width={250}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
                <p className="text-lg font-bold text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
