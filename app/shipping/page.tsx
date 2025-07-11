'use client';

import TumiHeader from '@/components/TumiHeader';
import TumiFooter from '@/components/TumiFooter';
import Link from 'next/link';

export default function ShippingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TumiHeader />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-3 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900">Shipping & Returns</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Shipping & Returns</h1>
            <p className="text-lg text-gray-300">Free shipping on orders over $150</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Shipping Information */}
            <div>
              <h2 className="text-3xl font-light mb-6">Shipping Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Standard Shipping</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Free on orders over $150</li>
                    <li>• $10 flat rate for orders under $150</li>
                    <li>• Delivery within 5-7 business days</li>
                    <li>• Available to all 50 states</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Express Shipping</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• $25 flat rate</li>
                    <li>• Delivery within 2-3 business days</li>
                    <li>• Order by 12 PM EST for same-day processing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Next Day Shipping</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• $35 flat rate</li>
                    <li>• Order by 12 PM EST for next business day delivery</li>
                    <li>• Not available for PO Boxes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">International Shipping</h3>
                  <p className="text-gray-600">
                    We ship to over 100 countries worldwide. International shipping rates and delivery 
                    times vary by destination. All international orders may be subject to import duties 
                    and taxes, which are the responsibility of the recipient.
                  </p>
                </div>
              </div>
            </div>

            {/* Returns Information */}
            <div>
              <h2 className="text-3xl font-light mb-6">Returns & Exchanges</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Return Policy</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 30-day return window from date of delivery</li>
                    <li>• Items must be unused and in original condition</li>
                    <li>• Original tags and packaging must be included</li>
                    <li>• Personalized items are final sale</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">How to Return</h3>
                  <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                    <li>Log into your account and locate your order</li>
                    <li>Select the items you wish to return</li>
                    <li>Print the prepaid return label</li>
                    <li>Pack items securely in original packaging</li>
                    <li>Drop off at any authorized shipping location</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Refunds</h3>
                  <p className="text-gray-600">
                    Refunds are processed within 5-7 business days of receiving your return. 
                    You will receive an email confirmation once your refund has been issued. 
                    Please allow 3-5 additional business days for the refund to appear on your statement.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Exchanges</h3>
                  <p className="text-gray-600">
                    For fastest service, we recommend returning your original item and placing a 
                    new order for the desired item. This ensures you receive your new item as 
                    quickly as possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Our customer service team is here to assist you with any shipping or return questions.
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Phone:</strong> <a href="tel:1-800-781-8864" className="text-black hover:underline">1-800-781-8864</a>
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:customerservice@tumi.com" className="text-black hover:underline">customerservice@tumi.com</a>
                </p>
                <p>
                  <strong>Hours:</strong> Monday - Friday: 9AM - 6PM EST
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <TumiFooter />
    </div>
  );
}