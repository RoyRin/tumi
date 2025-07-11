"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, User, ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"

export function TumiHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-black text-white text-center py-2 text-xs tracking-wider">
        <p>FREE SHIPPING ON ALL ORDERS</p>
      </div>

      {/* Main Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-light tracking-[0.3em]">TUMI</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/whats-new" className="text-sm tracking-wider text-gray-700 hover:text-black transition-colors">
                WHAT'S NEW
              </Link>
              <Link href="/luggage" className="text-sm tracking-wider text-gray-700 hover:text-black transition-colors">
                LUGGAGE
              </Link>
              <Link href="/backpacks" className="text-sm tracking-wider text-gray-700 hover:text-black transition-colors">
                BACKPACKS
              </Link>
              <Link href="/bags" className="text-sm tracking-wider text-gray-700 hover:text-black transition-colors">
                BAGS
              </Link>
              <Link href="/accessories" className="text-sm tracking-wider text-gray-700 hover:text-black transition-colors">
                ACCESSORIES
              </Link>
              <Link href="/sale" className="text-sm tracking-wider text-red-600 hover:text-red-700 transition-colors font-medium">
                SALE
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <Link href="/account" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="w-5 h-5 text-gray-700" />
              </Link>
              <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingBag className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 p-4">
            <div className="container mx-auto">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  autoFocus
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/whats-new" className="block text-sm tracking-wider text-gray-700 hover:text-black transition-colors">
                WHAT'S NEW
              </Link>
              <Link href="/luggage" className="block text-sm tracking-wider text-gray-700 hover:text-black transition-colors">
                LUGGAGE
              </Link>
              <Link href="/backpacks" className="block text-sm tracking-wider text-gray-700 hover:text-black transition-colors">
                BACKPACKS
              </Link>
              <Link href="/bags" className="block text-sm tracking-wider text-gray-700 hover:text-black transition-colors">
                BAGS
              </Link>
              <Link href="/accessories" className="block text-sm tracking-wider text-gray-700 hover:text-black transition-colors">
                ACCESSORIES
              </Link>
              <Link href="/sale" className="block text-sm tracking-wider text-red-600 hover:text-red-700 transition-colors font-medium">
                SALE
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}