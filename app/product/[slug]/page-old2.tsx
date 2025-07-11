"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import { ChevronLeft, ChevronRight, Minus, Plus, Heart, Share2 } from "lucide-react"

// Product data
const productData: Record<string, any> = {
  "alpha-3-international-carry-on": {
    name: "Alpha 3 International Expandable Carry-On",
    collection: "Alpha 3",
    price: 397,
    originalPrice: 795,
    discount: 50,
    images: ["/images/luggage-1.jpg", "/images/luggage-2.jpg", "/images/luggage-3.jpg", "/images/luggage-4.jpg"],
    colors: ["Black", "Navy", "Anthracite"],
    features: [
      "Dual-access main compartment",
      "Expandable by 2 inches",
      "4-wheel spinner system",
      "USB power port",
      "TSA-approved locks",
      "Leather trim details"
    ],
    dimensions: "22\" x 14\" x 9\" (expanded: 11\")",
    weight: "8.6 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0117398D3",
    description: "The Alpha 3 International Expandable Carry-On is designed for the modern traveler who demands both style and functionality. Crafted from TUMI's patented ballistic nylon, this carry-on offers exceptional durability while maintaining a sophisticated appearance."
  },
  "voyageur-carson-backpack": {
    name: "Voyageur Carson Backpack",
    collection: "Voyageur",
    price: 197,
    originalPrice: 395,
    discount: 50,
    images: ["/images/backpack-1.jpg", "/images/backpack-2.jpg", "/images/backpack-3.jpg", "/images/backpack-4.jpg"],
    colors: ["Black", "Mink", "Navy"],
    features: [
      "Fits up to 15\" laptop",
      "Multiple organizational pockets",
      "Padded shoulder straps",
      "Water-resistant fabric",
      "Add-a-bag sleeve",
      "RFID blocking pocket"
    ],
    dimensions: "16.5\" x 12\" x 6.5\"",
    weight: "2.2 lbs",
    warranty: "5 Year Limited Warranty",
    sku: "0109635MNK",
    description: "The Voyageur Carson Backpack combines sophisticated style with practical functionality. Perfect for business or leisure travel, this lightweight backpack features premium materials and thoughtful organization."
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug] || productData["alpha-3-international-carry-on"]
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <TumiHeader />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/luggage" className="hover:text-black transition-colors">Luggage</Link>
          <span>/</span>
          <Link href={`/collections/${product.collection.toLowerCase().replace(' ', '-')}`} className="hover:text-black transition-colors">
            {product.collection}
          </Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square relative bg-gray-50 rounded-lg overflow-hidden">
              {product.discount && (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs tracking-wider z-10">
                  {product.discount}% OFF
                </span>
              )}
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex space-x-2">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <p className="text-sm text-gray-600 tracking-wider mb-2">{product.collection.toUpperCase()}</p>
              <h1 className="text-3xl font-light tracking-wide mb-4">{product.name}</h1>
              <p className="text-sm text-gray-600 mb-4">SKU: {product.sku}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-light text-red-600">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-red-600 text-white px-2 py-1 text-xs tracking-wider">
                      SAVE ${product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium tracking-wider mb-3">COLOR: {selectedColor}</h3>
              <div className="flex space-x-3">
                {product.colors.map((color: string) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border text-sm tracking-wide transition-colors ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium tracking-wider mb-3">QUANTITY</h3>
              <div className="flex items-center border border-gray-300 w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full bg-black text-white py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors">
                ADD TO CART
              </button>
              <div className="flex space-x-3">
                <button className="flex-1 border border-gray-300 py-3 text-sm tracking-wider hover:border-black transition-colors flex items-center justify-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>ADD TO WISHLIST</span>
                </button>
                <button className="p-3 border border-gray-300 hover:border-black transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="border-t pt-6 space-y-4">
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-2">DESCRIPTION</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium tracking-wider border-t"
                >
                  <span>FEATURES & SPECIFICATIONS</span>
                  {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>
                {isExpanded && (
                  <div className="pt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.map((feature: string, index: number) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Dimensions:</span>
                        <p className="text-gray-600">{product.dimensions}</p>
                      </div>
                      <div>
                        <span className="font-medium">Weight:</span>
                        <p className="text-gray-600">{product.weight}</p>
                      </div>
                      <div className="col-span-2">
                        <span className="font-medium">Warranty:</span>
                        <p className="text-gray-600">{product.warranty}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="border-t pt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs font-medium tracking-wider">FREE SHIPPING</p>
                <p className="text-xs text-gray-600">On all orders</p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-wider">5 YEAR WARRANTY</p>
                <p className="text-xs text-gray-600">Register online</p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-wider">EASY RETURNS</p>
                <p className="text-xs text-gray-600">30 day policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light tracking-wider text-center mb-12">YOU MAY ALSO LIKE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Add related products here */}
          </div>
        </div>
      </section>

      <TumiFooter />
    </div>
  )
}