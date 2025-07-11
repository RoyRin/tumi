'use client';

import TumiHeader from '@/components/TumiHeader';
import TumiFooter from '@/components/TumiFooter';
import Link from 'next/link';

export default function ContactPage() {
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
              <span className="text-gray-900">Contact Us</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Contact Us</h1>
            <p className="text-lg text-gray-300">We're here to help with any questions or concerns</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Customer Service</h3>
                  <p className="text-gray-600">Monday - Friday: 9AM - 6PM EST</p>
                  <p className="text-gray-600">Saturday - Sunday: 10AM - 5PM EST</p>
                  <p className="mt-2">
                    <a href="tel:1-800-781-8864" className="text-black hover:underline">1-800-781-8864</a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-600">
                    <a href="mailto:customerservice@tumi.com" className="text-black hover:underline">
                      customerservice@tumi.com
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Corporate Headquarters</h3>
                  <p className="text-gray-600">
                    TUMI, Inc.<br />
                    499 Thornall Street<br />
                    Edison, NJ 08837<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <TumiFooter />
    </div>
  );
}