'use client';

import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import Link from 'next/link';
import { useState } from 'react';

export default function StoresPage() {
  const [searchLocation, setSearchLocation] = useState('');
  
  const featuredStores = [
    {
      name: 'TUMI Flagship - Fifth Avenue',
      address: '520 Fifth Avenue',
      city: 'New York, NY 10036',
      phone: '(212) 555-0100',
      hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-7PM',
      type: 'Flagship'
    },
    {
      name: 'TUMI Beverly Hills',
      address: '301 N Rodeo Drive',
      city: 'Beverly Hills, CA 90210',
      phone: '(310) 555-0200',
      hours: 'Mon-Sat: 10AM-7PM, Sun: 12PM-6PM',
      type: 'Store'
    },
    {
      name: 'TUMI Chicago - Michigan Avenue',
      address: '645 N Michigan Avenue',
      city: 'Chicago, IL 60611',
      phone: '(312) 555-0300',
      hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
      type: 'Store'
    },
    {
      name: 'TUMI Miami Design District',
      address: '151 NE 41st Street',
      city: 'Miami, FL 33137',
      phone: '(305) 555-0400',
      hours: 'Mon-Sat: 11AM-8PM, Sun: 12PM-6PM',
      type: 'Store'
    },
    {
      name: 'TUMI San Francisco Union Square',
      address: '188 Grant Avenue',
      city: 'San Francisco, CA 94108',
      phone: '(415) 555-0500',
      hours: 'Mon-Sat: 10AM-7PM, Sun: 11AM-6PM',
      type: 'Store'
    },
    {
      name: 'TUMI Boston - Newbury Street',
      address: '115 Newbury Street',
      city: 'Boston, MA 02116',
      phone: '(617) 555-0600',
      hours: 'Mon-Sat: 10AM-7PM, Sun: 12PM-6PM',
      type: 'Store'
    }
  ];

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
              <span className="text-gray-900">Store Locator</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Store Locator</h1>
            <p className="text-lg text-gray-300">Find a TUMI store near you</p>
          </div>
        </section>

        {/* Store Locator */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-12 max-w-2xl mx-auto">
              <form className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter city, state, or zip code"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
                >
                  Search
                </button>
              </form>
              <div className="mt-4 text-center">
                <button className="text-black hover:underline">Use My Location</button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mb-12 bg-gray-200 h-96 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map</p>
            </div>

            {/* Featured Stores */}
            <div>
              <h2 className="text-3xl font-light mb-8">Featured Stores</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredStores.map((store, index) => (
                  <div key={index} className="border border-gray-200 p-6 hover:border-black transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{store.name}</h3>
                      <span className="text-xs bg-gray-100 px-2 py-1">{store.type}</span>
                    </div>
                    <address className="text-gray-600 not-italic mb-4">
                      {store.address}<br />
                      {store.city}
                    </address>
                    <p className="text-gray-600 mb-2">
                      <a href={`tel:${store.phone}`} className="hover:underline">{store.phone}</a>
                    </p>
                    <p className="text-sm text-gray-500 mb-4">{store.hours}</p>
                    <div className="flex gap-2">
                      <button className="text-sm text-black hover:underline">Get Directions</button>
                      <span className="text-gray-400">|</span>
                      <button className="text-sm text-black hover:underline">Store Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Store Types */}
            <div className="mt-16 bg-gray-50 p-8">
              <h2 className="text-2xl font-light mb-6 text-center">Where to Find TUMI</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">TUMI Stores</h3>
                  <p className="text-gray-600 text-sm">
                    Experience our full collection in our branded retail locations with 
                    expert staff and personalization services.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Department Stores</h3>
                  <p className="text-gray-600 text-sm">
                    Find TUMI in premium department stores including Nordstrom, Saks Fifth Avenue, 
                    and Bloomingdale's.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Authorized Retailers</h3>
                  <p className="text-gray-600 text-sm">
                    Shop TUMI at select specialty retailers and travel stores for convenient 
                    access to our products.
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mt-16">
              <h2 className="text-2xl font-light mb-6 text-center">In-Store Services</h2>
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
                  <h4 className="font-semibold mb-1">Personalization</h4>
                  <p className="text-sm text-gray-600">Monogramming and custom services</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
                  <h4 className="font-semibold mb-1">Repairs</h4>
                  <p className="text-sm text-gray-600">Expert repair services available</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
                  <h4 className="font-semibold mb-1">Gift Services</h4>
                  <p className="text-sm text-gray-600">Complimentary gift wrapping</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
                  <h4 className="font-semibold mb-1">Product Experts</h4>
                  <p className="text-sm text-gray-600">Knowledgeable staff assistance</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-4">
                Can't find a store near you? Shop online with free shipping on orders over $150.
              </p>
              <Link 
                href="/luggage" 
                className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
              >
                Shop Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      <TumiFooter />
    </div>
  );
}