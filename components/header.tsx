import Link from "next/link"
import { ChevronDown, Search, User, ShoppingCart } from "lucide-react"

export function Header() {
  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-gray-100 text-center py-2 text-sm text-gray-600">
        Minimum order of $100 required during the promotion period.
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold tracking-wider">TUMI</Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/whats-new" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  <span>WHAT'S NEW</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <Link href="/luggage" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  <span>LUGGAGE</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <Link href="/backpacks" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  <span>BACKPACKS</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <Link href="/bags" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  <span>BAGS</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <Link href="/accessories" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  <span>ACCESSORIES</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <Link href="/more" className="text-gray-700 hover:text-gray-900">
                  More Links
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                <span>USD</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <Search className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
              <Link href="/login">
                <User className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
              </Link>
              <Link href="/cart">
                <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}