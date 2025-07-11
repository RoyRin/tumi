import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function TumiFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-medium tracking-wider mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-black transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/size-guide" className="hover:text-black transition-colors">Size Guide</Link></li>
              <li><Link href="/care" className="hover:text-black transition-colors">Product Care</Link></li>
              <li><Link href="/faq" className="hover:text-black transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* About TUMI */}
          <div>
            <h3 className="text-sm font-medium tracking-wider mb-4">ABOUT TUMI</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-black transition-colors">Our Story</Link></li>
              <li><Link href="/sustainability" className="hover:text-black transition-colors">Sustainability</Link></li>
              <li><Link href="/careers" className="hover:text-black transition-colors">Careers</Link></li>
              <li><Link href="/press" className="hover:text-black transition-colors">Press</Link></li>
              <li><Link href="/stores" className="hover:text-black transition-colors">Store Locator</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-medium tracking-wider mb-4">LEGAL</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/accessibility" className="hover:text-black transition-colors">Accessibility</Link></li>
              <li><Link href="/cookies" className="hover:text-black transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium tracking-wider mb-4">STAY CONNECTED</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 text-sm tracking-wider hover:bg-gray-800 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 TUMI, Inc. All Rights Reserved
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <img src="/images/payment-visa.svg" alt="Visa" className="h-8" />
            <img src="/images/payment-mastercard.svg" alt="Mastercard" className="h-8" />
            <img src="/images/payment-amex.svg" alt="American Express" className="h-8" />
            <img src="/images/payment-paypal.svg" alt="PayPal" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  )
}