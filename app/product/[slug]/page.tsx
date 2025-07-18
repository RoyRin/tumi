"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { notFound } from "next/navigation"
import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import { ChevronLeft, ChevronRight, Minus, Plus, Heart, Share2 } from "lucide-react"
import { getProductBySlug, getProductsByCategory } from "@/lib/products"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    notFound()
  }

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [isExpanded, setIsExpanded] = useState(false)

  // Get related products from the same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.slug !== product.slug)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      <TumiHeader />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${product.category.toLowerCase()}`} className="hover:text-black transition-colors">
            {product.category}
          </Link>
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
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Navigation - only show if multiple images */}
            {product.images.length > 1 && (
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
            )}
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
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-light tracking-wider text-center mb-12">YOU MAY ALSO LIKE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.slug}
                  href={`/product/${relatedProduct.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-square relative">
                      {relatedProduct.discount && (
                        <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs tracking-wider z-10">
                          {relatedProduct.discount}% OFF
                        </span>
                      )}
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-600 tracking-wider mb-1">
                        {relatedProduct.collection.toUpperCase()}
                      </p>
                      <h3 className="text-sm font-light tracking-wide mb-2">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-light text-red-600">
                          ${relatedProduct.price}
                        </span>
                        {relatedProduct.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${relatedProduct.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <TumiFooter />
    </div>
  )
}