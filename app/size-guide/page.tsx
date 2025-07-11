'use client';

import TumiHeader from '@/components/TumiHeader';
import TumiFooter from '@/components/TumiFooter';
import Link from 'next/link';

export default function SizeGuidePage() {
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
              <span className="text-gray-900">Size Guide</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Size Guide</h1>
            <p className="text-lg text-gray-300">Find the perfect fit for your travel needs</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Luggage Sizes */}
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8">Luggage Sizes</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-4">Size</th>
                      <th className="text-left py-4 px-4">Dimensions (H x W x D)</th>
                      <th className="text-left py-4 px-4">Capacity</th>
                      <th className="text-left py-4 px-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-semibold">Carry-On</td>
                      <td className="py-4 px-4">22" x 14" x 9"</td>
                      <td className="py-4 px-4">35-45L</td>
                      <td className="py-4 px-4">1-3 day trips, overhead compartment</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-semibold">Medium</td>
                      <td className="py-4 px-4">26" x 17" x 11"</td>
                      <td className="py-4 px-4">60-75L</td>
                      <td className="py-4 px-4">4-7 day trips, checked luggage</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-semibold">Large</td>
                      <td className="py-4 px-4">30" x 20" x 12"</td>
                      <td className="py-4 px-4">90-110L</td>
                      <td className="py-4 px-4">7+ day trips, extended travel</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-semibold">Extra Large</td>
                      <td className="py-4 px-4">32" x 22" x 14"</td>
                      <td className="py-4 px-4">120L+</td>
                      <td className="py-4 px-4">Long trips, multiple travelers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Backpack Sizes */}
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8">Backpack Sizes</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-4">Size</th>
                      <th className="text-left py-4 px-4">Dimensions (H x W x D)</th>
                      <th className="text-left py-4 px-4">Laptop Size</th>
                      <th className="text-left py-4 px-4">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-semibold">Compact</td>
                      <td className="py-4 px-4">15" x 11" x 6"</td>
                      <td className="py-4 px-4">Up to 13"</td>
                      <td className="py-4 px-4">Daily commute, light carry</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-semibold">Standard</td>
                      <td className="py-4 px-4">17" x 12" x 7"</td>
                      <td className="py-4 px-4">Up to 15"</td>
                      <td className="py-4 px-4">Work, school, day trips</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-semibold">Large</td>
                      <td className="py-4 px-4">19" x 13" x 8"</td>
                      <td className="py-4 px-4">Up to 17"</td>
                      <td className="py-4 px-4">Business travel, overnight trips</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-semibold">Travel</td>
                      <td className="py-4 px-4">21" x 14" x 9"</td>
                      <td className="py-4 px-4">Up to 17"</td>
                      <td className="py-4 px-4">Multi-day trips, carry-on compatible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Airline Restrictions */}
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8">Airline Carry-On Restrictions</h2>
              
              <div className="bg-gray-50 p-8 rounded">
                <p className="text-gray-600 mb-6">
                  Most airlines have similar carry-on size restrictions, but it's always best to check 
                  with your specific airline before traveling.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Domestic Airlines (US)</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Most airlines: 22" x 14" x 9"</li>
                      <li>• Personal item: 18" x 14" x 8"</li>
                      <li>• Weight limit: Usually none for carry-on</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">International Airlines</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Size varies by airline and region</li>
                      <li>• Weight limit: Often 7-10kg (15-22lbs)</li>
                      <li>• Always verify before travel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div>
              <h2 className="text-3xl font-light mb-8">Choosing the Right Size</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Consider Your Trip Length</h3>
                  <p className="text-gray-600">
                    Match your luggage size to your trip duration. A good rule of thumb is one 
                    week of clothing fits comfortably in a carry-on size case.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Think About Weight</h3>
                  <p className="text-gray-600">
                    Remember that larger bags can become heavy when fully packed. Consider the 
                    weight of the empty bag plus your belongings.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Storage Space</h3>
                  <p className="text-gray-600">
                    Consider where you'll store your luggage at home. Our cases are designed to 
                    nest inside each other for efficient storage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <TumiFooter />
    </div>
  );
}