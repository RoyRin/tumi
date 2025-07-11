'use client';

import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import Link from 'next/link';

export default function SustainabilityPage() {
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
              <span className="text-gray-900">Sustainability</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Sustainability</h1>
            <p className="text-lg text-gray-300">Our commitment to a better tomorrow</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Introduction */}
            <div className="text-center">
              <p className="text-xl text-gray-700 leading-relaxed">
                At TUMI, we believe that exceptional products and environmental responsibility 
                go hand in hand. We're committed to reducing our environmental impact while 
                creating products that last a lifetime.
              </p>
            </div>

            {/* Sustainable Materials */}
            <div>
              <h2 className="text-3xl font-light mb-6">Sustainable Materials</h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  We're continuously exploring and implementing sustainable materials across our 
                  product lines without compromising the quality and durability TUMI is known for.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6">
                    <h3 className="text-xl font-semibold mb-3">Recycled Materials</h3>
                    <p className="text-gray-600">
                      Select collections feature recycled nylon and polyester made from post-consumer 
                      plastic bottles, reducing waste and our reliance on virgin materials.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6">
                    <h3 className="text-xl font-semibold mb-3">Responsible Leather</h3>
                    <p className="text-gray-600">
                      Our leather products use hides from Leather Working Group certified tanneries 
                      that meet strict environmental and social responsibility standards.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6">
                    <h3 className="text-xl font-semibold mb-3">Solution-Dyed Fabrics</h3>
                    <p className="text-gray-600">
                      We use solution-dyed fabrics that require less water and energy in production 
                      while providing superior colorfastness.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6">
                    <h3 className="text-xl font-semibold mb-3">Sustainable Packaging</h3>
                    <p className="text-gray-600">
                      Our packaging uses recycled and recyclable materials, with reduced plastic 
                      usage and FSC-certified paper products.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Durability & Longevity */}
            <div>
              <h2 className="text-3xl font-light mb-6">Built to Last</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The most sustainable product is one that doesn't need to be replaced. TUMI 
                  products are engineered for exceptional durability, reducing the need for 
                  frequent replacements and minimizing waste.
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Rigorous testing ensures products withstand years of use</li>
                  <li>Comprehensive warranty coverage extends product life</li>
                  <li>Repair services keep products in use longer</li>
                  <li>Timeless designs that don't go out of style</li>
                </ul>
              </div>
            </div>

            {/* Manufacturing */}
            <div>
              <h2 className="text-3xl font-light mb-6">Responsible Manufacturing</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Energy Efficiency</h3>
                  <p className="text-gray-600">
                    Our manufacturing partners are implementing energy-efficient technologies 
                    and renewable energy sources to reduce carbon emissions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Water Conservation</h3>
                  <p className="text-gray-600">
                    Advanced water treatment and recycling systems minimize water usage and 
                    ensure clean water discharge from our facilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Waste Reduction</h3>
                  <p className="text-gray-600">
                    We work to minimize production waste through efficient cutting techniques 
                    and recycling programs for fabric scraps and materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Responsibility */}
            <div>
              <h2 className="text-3xl font-light mb-6">Social Responsibility</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our commitment extends beyond environmental sustainability to encompass fair 
                  labor practices and community support.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 list-disc ml-6">
                    <li>Fair wages and safe working conditions</li>
                    <li>Regular third-party factory audits</li>
                    <li>Investment in worker training and development</li>
                  </ul>
                  <ul className="space-y-2 list-disc ml-6">
                    <li>Support for local communities</li>
                    <li>Partnerships with environmental organizations</li>
                    <li>Employee volunteer programs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Goals */}
            <div className="bg-gray-50 p-12">
              <h2 className="text-3xl font-light mb-6 text-center">Our 2030 Goals</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div>
                  <h3 className="font-semibold mb-2">50% Sustainable Materials</h3>
                  <p className="text-gray-600">
                    Incorporate sustainable materials in at least half of our product line by 2030.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Carbon Neutral Operations</h3>
                  <p className="text-gray-600">
                    Achieve carbon neutrality across our direct operations and logistics.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Zero Waste to Landfill</h3>
                  <p className="text-gray-600">
                    Eliminate landfill waste from our manufacturing and distribution centers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">100% Sustainable Packaging</h3>
                  <p className="text-gray-600">
                    Convert all packaging to recycled, recyclable, or compostable materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-light mb-4">Join Us on This Journey</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Sustainability is a shared responsibility. By choosing TUMI, you're investing 
                in products designed to last and supporting our commitment to a better future.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      <TumiFooter />
    </div>
  );
}