import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Minus, Plus, Eye, Package, User, DollarSign, Gift } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/whats-new" className="hover:text-gray-700">
            WHAT'S NEW-Shop by Category-New Luggage
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Continental Dual Access Expandable Carry-On 56 cm</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src="/images/luggage-2.jpg"
                alt="Continental Dual Access Expandable Carry-On 56 cm"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Continental Dual Access Expandable Carry-On 56 cm
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-red-600">$ 298.50</span>
                <span className="text-xl text-gray-500 line-through">$ 995.00</span>
                <Badge className="bg-red-600 hover:bg-red-600 text-white">Save $ 696.50</Badge>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <Package className="w-4 h-4 text-gray-600" />
                <span className="font-medium">only 29 left in stock</span>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <Eye className="w-4 h-4 text-gray-600" />
                <span>17 people are viewing this right now</span>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <User className="w-4 h-4 text-gray-600" />
                <span>H****g in New York, 🇺🇸 United States bought this (49 Minutes ago)</span>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <DollarSign className="w-4 h-4 text-gray-600" />
                <span>323 people has purchased this in 7 days</span>
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Color</h3>
              <div className="flex space-x-3">
                <button className="px-4 py-2 border-2 border-gray-900 text-gray-900 rounded-md font-medium">
                  Navy
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:border-gray-900">
                  Black
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Quantity</h3>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button className="p-2 hover:bg-gray-50">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center py-2">1</span>
                <button className="p-2 hover:bg-gray-50">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button
                variant="outline"
                className="flex-1 py-3 text-lg font-medium border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
              >
                ADD TO CART
              </Button>
              <Button className="flex-1 py-3 text-lg font-medium bg-gray-900 hover:bg-gray-800">BUY IT NOW</Button>
            </div>

            {/* Gift Offer */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
              <Gift className="w-5 h-5 text-red-600" />
              <div className="flex-1">
                <span className="text-red-600 font-medium">Add $ 500.00 to get 1 free gift(s)</span>
                <Link href="#" className="text-red-600 underline ml-2">
                  View the gift offer {">>"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
