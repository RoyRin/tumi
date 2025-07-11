import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X, ShoppingCart } from "lucide-react"

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cart Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <Link href="/">
            <X className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
          </Link>
        </div>

        {/* Empty Cart */}
        <div className="flex flex-col items-center justify-center py-16">
          <div className="mb-8">
            <ShoppingCart className="w-24 h-24 text-gray-400 stroke-1" />
          </div>
          <h2 className="text-2xl font-medium text-gray-600 mb-8">Your Shopping Cart is Empty</h2>

          <div className="space-y-4">
            <Link href="/">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">Continue Shopping</Button>
            </Link>
          </div>
        </div>

        {/* Cart would show items here when not empty */}
        <div className="hidden">
          <div className="space-y-4">{/* Cart items would go here */}</div>

          <div className="border-t pt-6 mt-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Subtotal:</span>
              <span className="text-2xl font-bold">$0.00</span>
            </div>
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
