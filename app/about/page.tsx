'use client';

import TumiHeader from '@/components/TumiHeader';
import TumiFooter from '@/components/TumiFooter';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
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
              <span className="text-gray-900">Our Story</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Our Story</h1>
            <p className="text-lg text-gray-300">Crafting exceptional travel experiences since 1975</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Introduction */}
            <div className="text-center">
              <p className="text-xl text-gray-700 leading-relaxed">
                For nearly five decades, TUMI has been creating world-class business, travel, 
                and performance luxury essentials, designed to upgrade, uncomplicate, and 
                beautify all aspects of life on the move.
              </p>
            </div>

            {/* History */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-light mb-6">The Beginning</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 1975 by Charlie Clifford, TUMI takes its name from a Peruvian icon 
                  known to its founder from his Peace Corps days in South America. During the 
                  1980s, TUMI's innovative introduction of soft, ultra-functional, black-on-black 
                  ballistic nylon travel bags catapulted the company to its current leadership position.
                </p>
                <p className="text-gray-600">
                  The name TUMI itself comes from a Peruvian ceremonial knife used for sacrifices. 
                  The company's distinctive logo is derived from this same icon, representing 
                  strength, quality, and heritage.
                </p>
              </div>
              <div className="bg-gray-100 h-96 flex items-center justify-center">
                <p className="text-gray-500">Heritage Image</p>
              </div>
            </div>

            {/* Innovation */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 h-96 flex items-center justify-center order-2 md:order-1">
                <p className="text-gray-500">Innovation Image</p>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-light mb-6">Innovation & Craftsmanship</h2>
                <p className="text-gray-600 mb-4">
                  TUMI has built its reputation through continuous innovation and uncompromising 
                  commitment to quality. From the revolutionary ballistic nylon fabric to patented 
                  expansion systems and the exclusive TUMI Tracer® product recovery program, 
                  we've consistently pushed the boundaries of what travel gear can be.
                </p>
                <p className="text-gray-600">
                  Our products undergo rigorous testing, including 30 different quality tests, 
                  to ensure they meet the highest standards of durability and functionality. 
                  This dedication to excellence has made TUMI the brand of choice for discerning 
                  travelers worldwide.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-light mb-8 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">Quality</h3>
                  <p className="text-gray-600">
                    We never compromise on materials or craftsmanship. Every TUMI product is 
                    built to perform flawlessly trip after trip, year after year.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously evolve our designs and features to meet the changing needs 
                    of modern travelers, always staying ahead of the curve.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">Service</h3>
                  <p className="text-gray-600">
                    Our commitment extends beyond the sale. We provide exceptional customer 
                    service and comprehensive warranty coverage for peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Global Presence */}
            <div className="bg-gray-50 p-12 text-center">
              <h2 className="text-3xl font-light mb-6">Global Presence</h2>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                Today, TUMI is sold in over 75 countries through our own stores, premium 
                department stores, and specialty retailers. Our global footprint includes 
                over 300 retail locations worldwide, bringing our exceptional products to 
                travelers everywhere.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div>
                  <p className="text-3xl font-light">75+</p>
                  <p className="text-gray-600">Countries</p>
                </div>
                <div>
                  <p className="text-3xl font-light">300+</p>
                  <p className="text-gray-600">Stores</p>
                </div>
                <div>
                  <p className="text-3xl font-light">45+</p>
                  <p className="text-gray-600">Years</p>
                </div>
                <div>
                  <p className="text-3xl font-light">30+</p>
                  <p className="text-gray-600">Quality Tests</p>
                </div>
              </div>
            </div>

            {/* Future */}
            <div className="text-center">
              <h2 className="text-3xl font-light mb-6">Looking Forward</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                As we continue to evolve, our commitment remains unchanged: to create products 
                that enhance the journey for travelers around the world. We're dedicated to 
                sustainable practices, innovative materials, and designs that reflect the needs 
                of modern life on the move. The journey continues, and we're honored to be 
                part of yours.
              </p>
            </div>
          </div>
        </section>
      </main>

      <TumiFooter />
    </div>
  );
}