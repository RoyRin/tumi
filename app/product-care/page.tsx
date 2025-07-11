'use client';

import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import Link from 'next/link';

export default function ProductCarePage() {
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
              <span className="text-gray-900">Product Care</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Product Care</h1>
            <p className="text-lg text-gray-300">Keep your TUMI products looking their best</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* General Care */}
            <div>
              <h2 className="text-3xl font-light mb-6">General Care Guidelines</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  TUMI products are designed to withstand the rigors of travel and daily use. 
                  With proper care, your TUMI will maintain its appearance and functionality for years to come.
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Store in a cool, dry place when not in use</li>
                  <li>Avoid exposure to extreme temperatures</li>
                  <li>Keep away from sharp objects that could cause damage</li>
                  <li>Empty all pockets and compartments before storage</li>
                  <li>Use protective covers during long-term storage</li>
                </ul>
              </div>
            </div>

            {/* Material-Specific Care */}
            <div>
              <h2 className="text-3xl font-light mb-6">Care by Material</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Ballistic Nylon</h3>
                  <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                    <li>Wipe clean with a damp cloth</li>
                    <li>Use mild soap solution for stubborn stains</li>
                    <li>Allow to air dry completely</li>
                    <li>Avoid harsh chemicals or abrasive cleaners</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Leather</h3>
                  <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                    <li>Clean with a soft, dry cloth</li>
                    <li>Apply leather conditioner periodically</li>
                    <li>Avoid water and moisture exposure</li>
                    <li>Store in breathable dust bag</li>
                    <li>Professional cleaning recommended for deep stains</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Polycarbonate Hard Cases</h3>
                  <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                    <li>Clean with mild soap and water</li>
                    <li>Use soft cloth to avoid scratching</li>
                    <li>Polish with microfiber cloth for shine</li>
                    <li>Avoid dropping or impact damage</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Canvas & Fabric</h3>
                  <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                    <li>Spot clean with fabric cleaner</li>
                    <li>Use soft-bristled brush for dirt removal</li>
                    <li>Test cleaning products on hidden area first</li>
                    <li>Allow to dry naturally</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Component Care */}
            <div>
              <h2 className="text-3xl font-light mb-6">Component Care</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Wheels</h3>
                  <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                    <li>Remove debris from wheel wells regularly</li>
                    <li>Wipe wheels clean after each trip</li>
                    <li>Check for smooth rotation periodically</li>
                    <li>Lubricate if necessary with silicone spray</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Zippers</h3>
                  <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                    <li>Keep zipper tracks clean and free of debris</li>
                    <li>Use zipper lubricant if sticking occurs</li>
                    <li>Avoid overpacking to reduce zipper stress</li>
                    <li>Close zippers completely when storing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Handles & Telescoping Systems</h3>
                  <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                    <li>Wipe down handles regularly</li>
                    <li>Ensure telescoping handle moves smoothly</li>
                    <li>Avoid forcing if resistance is felt</li>
                    <li>Store with handle fully retracted</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Warranty & Repair */}
            <div>
              <h2 className="text-3xl font-light mb-6">Warranty & Repair Services</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  TUMI offers comprehensive warranty coverage and repair services to keep your 
                  products in perfect condition.
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Limited warranty covers manufacturing defects</li>
                  <li>TUMI Tracer® registration provides additional benefits</li>
                  <li>Repair services available for damage not covered by warranty</li>
                  <li>Original parts used for all repairs</li>
                  <li>Contact customer service for repair assessment</li>
                </ul>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gray-50 p-8 rounded">
              <h3 className="text-xl font-semibold mb-4">Pro Care Tips</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>Travel Tip:</strong> Use luggage covers or protective wrapping during air travel 
                  to prevent scratches and scuffs
                </li>
                <li>
                  <strong>Storage Tip:</strong> Stuff bags with tissue paper to maintain shape during 
                  long-term storage
                </li>
                <li>
                  <strong>Cleaning Tip:</strong> Address stains and spills immediately for best results
                </li>
                <li>
                  <strong>Maintenance Tip:</strong> Perform regular inspections to catch issues early
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <TumiFooter />
    </div>
  );
}