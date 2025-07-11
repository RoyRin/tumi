import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ChevronDown, Search, User, ShoppingCart } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Promotional Banner */}
      <div className="bg-gray-100 text-center py-2 text-sm text-gray-600">
        Minimum order of $100 required during the promotion period.
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold tracking-wider">
                TUMI
              </Link>
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
              <User className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
              <Link href="/cart">
                <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Log In</h1>
          </div>

          <form className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-4 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-4 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <Button className="w-full py-4 text-lg font-medium bg-gray-900 hover:bg-gray-800 text-white">
              CONFIRM
            </Button>
          </form>

          <div className="flex justify-between text-sm">
            <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
              Reset Password
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
              Create Account
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-md flex items-center justify-center">
              <span className="font-bold text-lg">G</span>
            </button>
            <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center">
              <span className="font-bold text-lg">f</span>
            </button>
            <button className="w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-md flex items-center justify-center">
              <span className="font-bold text-lg">t</span>
            </button>
            <button className="w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-md flex items-center justify-center">
              <span className="font-bold text-lg">in</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
