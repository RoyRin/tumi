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
              <li><Link href="/product-care" className="hover:text-black transition-colors">Product Care</Link></li>
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
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Visa */}
            <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="#F6F6F6"/>
              <path d="M20.5 11L18 21H15.5L18 11H20.5Z" fill="#00579F"/>
              <path d="M30 11L27.5 17.5L26.5 12.5C26.3 11.7 25.8 11 25 11H22V11.5L23 12C23.5 12.2 23.8 12.5 24 13L25.5 21H28L32.5 11H30Z" fill="#00579F"/>
              <path d="M35 11C34.5 11 34 11.2 33.8 11.7L29.5 21H32L32.5 19.5H35.5L35.8 21H38L36 11H35ZM33.5 17.5L34.5 14L35 17.5H33.5Z" fill="#00579F"/>
              <path d="M13.5 11L11 14.5L10.5 12C10.3 11.2 9.8 11 9 11H5V11.3C6 11.5 7 11.8 8 12.3C8.5 12.5 8.7 12.8 8.8 13.3L10.5 21H13L17.5 11H15Z" fill="#00579F"/>
            </svg>
            
            {/* Mastercard */}
            <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="#F6F6F6"/>
              <circle cx="19" cy="16" r="7" fill="#EB001B"/>
              <circle cx="29" cy="16" r="7" fill="#F79E1B"/>
              <path d="M24 11C25.7 12.5 26.5 14.2 26.5 16C26.5 17.8 25.7 19.5 24 21C22.3 19.5 21.5 17.8 21.5 16C21.5 14.2 22.3 12.5 24 11Z" fill="#FF5F00"/>
            </svg>
            
            {/* American Express */}
            <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="#006FCF"/>
              <path d="M12 13H10L9 15L8 13H6L8 17L6 21H8L9 19L10 21H12L10 17L12 13Z" fill="white"/>
              <path d="M13 13V21H15V18H16C17.5 18 18.5 17 18.5 15.5C18.5 14 17.5 13 16 13H13ZM15 15H16C16.5 15 16.5 15.5 16.5 15.5C16.5 15.5 16.5 16 16 16H15V15Z" fill="white"/>
              <path d="M19 13V21H21V18H22L23 21H25L24 17.5C24.5 17.3 25 16.7 25 15.5C25 14 24 13 22.5 13H19ZM21 15H22.5C23 15 23 15.5 23 15.5C23 15.5 23 16 22.5 16H21V15Z" fill="white"/>
              <path d="M26 13V21H32V19H28V18H31V16H28V15H32V13H26Z" fill="white"/>
              <path d="M33 19V21H35C36.5 21 38 20.3 38 18.5C38 17.3 37.3 16.5 36.5 16.3C37 16 37.5 15.5 37.5 14.5C37.5 13 36.3 13 35 13H33V15H35C35.5 15 35.5 15 35.5 15.3C35.5 15.5 35.5 15.7 35 15.7H33V17H35.5C36 17 36 17.3 36 17.5C36 17.7 36 18 35.5 18H33V19Z" fill="white"/>
            </svg>
            
            {/* PayPal */}
            <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="#F6F6F6"/>
              <path d="M17.5 9H13C12.7 9 12.5 9.2 12.5 9.5L11 20.5C11 20.7 11.1 20.8 11.3 20.8H13.3C13.5 20.8 13.7 20.7 13.7 20.5L14.2 17.5C14.2 17.3 14.4 17.1 14.7 17.1H16C19 17.1 20.8 15.6 21.3 12.7C21.5 11.6 21.3 10.7 20.8 10C20.2 9.3 19.1 9 17.5 9Z" fill="#003087"/>
              <path d="M18 12C17.8 13.3 16.8 13.3 15.8 13.3H15.3L15.6 11.5C15.6 11.4 15.7 11.3 15.8 11.3H16C16.5 11.3 17 11.3 17.3 11.5C17.5 11.7 17.5 11.8 17.5 12H18Z" fill="#003087"/>
              <path d="M26.5 12H24.5C24.4 12 24.3 12.1 24.3 12.2L23.5 17.3L23.4 17.6C23.4 17.7 23.5 17.8 23.6 17.8H24.5C24.7 17.8 24.8 17.7 24.8 17.5L25 16.4L25 16.3C25 16.1 25.1 16 25.3 16H25.8C27.3 16 28.3 15.4 28.5 13.8C28.6 13.2 28.5 12.7 28.2 12.4C28 12.1 27.3 12 26.5 12Z" fill="#009CDE"/>
              <path d="M26.8 13.8C26.7 14.5 26.2 14.5 25.6 14.5H25.3L25.5 13.4C25.5 13.3 25.6 13.3 25.7 13.3H25.8C26.1 13.3 26.4 13.3 26.5 13.4C26.7 13.5 26.8 13.6 26.8 13.8Z" fill="#009CDE"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}