import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Search, User, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function HomePage() {
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
              <div className="text-2xl font-bold tracking-wider">TUMI</div>
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

      {/* Hero Section */}
      <section className="relative h-96 bg-gray-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">UP TO 80% OFF</h1>
          <p className="text-xl mb-2">NOW ARRIVING: OUR 50TH ANNIVERSARY</p>
          <p className="text-lg">Made for You Since 1975</p>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Bestsellers</h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link key={index} href={`/product/continental-dual-access-carry-on-${index + 1}`}>
              <div className="group cursor-pointer">
                <div className="relative bg-gray-50 rounded-lg overflow-hidden">
                  <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-600 text-white z-10">50% OFF</Badge>
                  <Image
                    src={`/images/luggage-${(index % 4) + 1}.jpg`}
                    alt={product.name}
                    width={250}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className="text-lg font-bold text-red-600">${product.salePrice}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    Save ${product.originalPrice - product.salePrice}
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 bg-transparent">
            View More
          </Button>
        </div>
      </section>

      {/* Text Columns With Images */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Text Columns With Images</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/images/lifestyle-1.jpg"
                alt="Shop Luggage"
                width={300}
                height={400}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">Shop Luggage</h3>
            </div>
            <div className="text-center">
              <Image
                src="/images/lifestyle-2.jpg"
                alt="Shop Backpacks"
                width={300}
                height={400}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">Shop Backpacks</h3>
            </div>
            <div className="text-center">
              <Image
                src="/images/lifestyle-3.jpg"
                alt="Shop Accessories"
                width={300}
                height={400}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">Shop Accessories</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Shop New Arrivals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop New Arrivals</h2>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">Shop Now</Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to our newsletter</h2>
          <p className="text-gray-600 mb-8">Join our Friends and Family Mailing List</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Email" className="flex-1 px-4 py-3 border border-gray-300 rounded-md" />
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

const products = [
  {
    name: "Continental Dual Access Expandable Carry-On 56 cm",
    originalPrice: 695,
    salePrice: 347,
  },
  {
    name: "Aero International Expandable Carry-On 56 cm",
    originalPrice: 645,
    salePrice: 322,
  },
  {
    name: "Extended Trip Expandable Checked Luggage 79.5 cm",
    originalPrice: 795,
    salePrice: 397,
  },
  {
    name: "International Front Pocket Expandable Carry-On 56 cm",
    originalPrice: 745,
    salePrice: 372,
  },
  {
    name: "Brief Pack",
    originalPrice: 395,
    salePrice: 197,
  },
  {
    name: "Continental Dual Access Expandable Carry-On 56 cm",
    originalPrice: 695,
    salePrice: 347,
  },
  {
    name: "International Dual Access Expandable Carry-On 56 cm",
    originalPrice: 745,
    salePrice: 372,
  },
  {
    name: "Short Trip Expandable Checked Luggage 66 cm",
    originalPrice: 695,
    salePrice: 347,
  },
  {
    name: "International Carry-On 56 cm",
    originalPrice: 595,
    salePrice: 297,
  },
  {
    name: "International Carry-On 56 cm",
    originalPrice: 595,
    salePrice: 297,
  },
  {
    name: "Marylou Crossbody",
    originalPrice: 295,
    salePrice: 147,
  },
  {
    name: "3-in-1 Foldable Magnetic Wireless Charger",
    originalPrice: 195,
    salePrice: 97,
  },
  {
    name: "International Carry-On 56 cm",
    originalPrice: 595,
    salePrice: 297,
  },
  {
    name: "TUMI Brief Pack",
    originalPrice: 395,
    salePrice: 197,
  },
  {
    name: "Extended Trip Wheeled Garment Bag 61 cm",
    originalPrice: 795,
    salePrice: 397,
  },
  {
    name: "Tyler Crossbody",
    originalPrice: 295,
    salePrice: 147,
  },
]
