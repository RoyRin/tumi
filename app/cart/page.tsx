'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TumiHeader } from '@/components/tumi-header'
import { TumiFooter } from '@/components/tumi-footer'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'

interface CartItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  quantity: number
  image: string
  color: string
  collection: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Alpha 3 International Expandable Carry-On',
      price: 397,
      originalPrice: 795,
      quantity: 1,
      image: '/images/luggage-1.jpg',
      color: 'Black',
      collection: 'Alpha 3'
    },
    {
      id: '2',
      name: 'Voyageur Carson Backpack',
      price: 197,
      originalPrice: 395,
      quantity: 1,
      image: '/images/backpack-1.jpg',
      color: 'Navy',
      collection: 'Voyageur'
    }
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
      return
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const savings = cartItems.reduce((sum, item) => 
    sum + ((item.originalPrice || item.price) - item.price) * item.quantity, 0
  )
  const shipping = 0 // Free shipping
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <TumiHeader />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-light tracking-wider text-center mb-8">
            YOUR CART
          </h1>
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-gray-300" />
            <p className="text-lg mb-8 text-gray-600">Your cart is empty</p>
            <Link
              href="/sale"
              className="inline-block bg-black text-white px-8 py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
        <TumiFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <TumiHeader />

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">Cart</span>
        </nav>

        <h1 className="text-3xl font-light tracking-wider mb-8">
          YOUR CART ({cartItems.length} {cartItems.length === 1 ? 'ITEM' : 'ITEMS'})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-6">
                  <div className="flex gap-6">
                    <div className="relative w-32 h-32 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-xs text-gray-600 tracking-wider mb-1">
                            {item.collection.toUpperCase()}
                          </p>
                          <h3 className="text-lg mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-600 mb-4">Color: {item.color}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors h-fit"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 hover:border-black transition-colors flex items-center justify-center"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 hover:border-black transition-colors flex items-center justify-center"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-right">
                          {item.originalPrice && (
                            <p className="text-sm text-gray-500 line-through">
                              ${item.originalPrice * item.quantity}
                            </p>
                          )}
                          <p className="text-lg font-medium">
                            ${item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 sticky top-24">
              <h2 className="text-lg font-light tracking-wider mb-6">ORDER SUMMARY</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-red-600">
                    <span>Savings</span>
                    <span>-${savings.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 text-sm tracking-wider hover:bg-gray-800 transition-colors mb-4">
                PROCEED TO CHECKOUT
              </button>

              <Link
                href="/sale"
                className="block text-center text-sm underline hover:no-underline"
              >
                Continue Shopping
              </Link>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t border-gray-300">
                <details className="cursor-pointer">
                  <summary className="text-sm tracking-wider flex justify-between items-center">
                    PROMO CODE
                  </summary>
                  <div className="mt-4 flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-grow px-3 py-2 border border-gray-300 focus:border-black focus:outline-none"
                    />
                    <button className="px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors text-sm">
                      APPLY
                    </button>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-sm font-medium tracking-wider mb-2">FREE SHIPPING</h3>
            <p className="text-sm text-gray-600">On all orders</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-medium tracking-wider mb-2">SECURE CHECKOUT</h3>
            <p className="text-sm text-gray-600">SSL encrypted payment</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-medium tracking-wider mb-2">EASY RETURNS</h3>
            <p className="text-sm text-gray-600">30-day return policy</p>
          </div>
        </div>
      </div>

      <TumiFooter />
    </div>
  )
}