import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Store Information */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-wider mb-6">TUMI</div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/images/store-front.png"
                alt="TUMI Store"
                width={300}
                height={200}
                className="w-full h-32 object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2">TUMI Store - Norman Y. Mineta San Jose International Airport</h3>
              <Link href="#" className="text-blue-400 hover:text-blue-300 underline text-sm">
                change
              </Link>
              <p className="text-sm text-gray-300 mt-2">1701 Airport Blvd.</p>
              <p className="text-sm text-gray-300">Terminal B near gate 18.. San Jose 95110</p>
              <p className="text-sm text-gray-300 mt-2">408-441-2664</p>
            </div>
            <Button
              variant="outline"
              className="w-full bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              Store Hours And Services
            </Button>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Service & Repairs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Product Info and Warranty
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Airline Carry-On Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Replacement Parts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Setting Your TUMI Lock
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Make an In-Store Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account & About TUMI */}
          <div>
            <h3 className="font-semibold text-lg mb-4">My Account</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Track Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Register Your TUMI
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-lg mb-4">About TUMI</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  TUMI Difference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  TUMI Sport
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  TUMI | McLaren
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Corporate Gifts & Incentives
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Get On The List & Social */}
          <div>
            <div className="flex justify-end space-x-4 mb-6">
              <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              <div className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v2.44a4.83 4.83 0 01-3.77 4.25 4.83 4.83 0 013.77 4.25V15h2.08v-2.06a4.83 4.83 0 013.77-4.25z" />
                </svg>
              </div>
              <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              <div className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-4">Get On The List</h3>
            <p className="text-sm text-gray-300 mb-4">
              Sign up to receive notifications about new arrivals, exclusive offers and much more.
            </p>
            <div className="flex mb-6">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-gray-600 text-white placeholder-gray-400 rounded-r-none"
              />
              <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-l-none px-4">→</Button>
            </div>

            <h3 className="font-semibold text-lg mb-4">Register your TUMI</h3>
            <p className="text-sm text-gray-300 mb-4">
              Our TUMI Tracer® product recovery program helps reunite customers with their lost luggage and bags.
            </p>
            <div className="flex">
              <Input
                type="text"
                placeholder="Enter your 20-digit tracer number"
                className="bg-transparent border-gray-600 text-white placeholder-gray-400 rounded-r-none"
              />
              <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-l-none px-4">→</Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center space-x-4 text-xs text-gray-400">
              <span>© 2025 TUMI, Inc.</span>
              <span>|</span>
              <Link href="#" className="hover:text-white">
                TUMI Canada, ULC
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white">
                Terms & Conditions
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white">
                Transparency in Supply Chain Act
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white">
                Web Accessibility Statement
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white">
                Modern Slavery Statement
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white">
                Do Not Share Or Sell My Personal Information
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white">
                Sitemap
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-400">Ship to:</span>
              <span className="text-white font-medium">United States</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
