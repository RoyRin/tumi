'use client';

import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import Link from 'next/link';

export default function PressPage() {
  const pressReleases = [
    {
      date: 'January 15, 2025',
      title: 'TUMI Launches Revolutionary Sustainable Luggage Collection',
      excerpt: 'New collection features innovative recycled materials without compromising durability or style.'
    },
    {
      date: 'December 2, 2024',
      title: 'TUMI Opens Flagship Store in Tokyo',
      excerpt: 'Expansion continues in Asia-Pacific with new 5,000 square foot retail location in Ginza.'
    },
    {
      date: 'October 18, 2024',
      title: 'TUMI Partners with Leading Fashion Designer for Limited Edition',
      excerpt: 'Exclusive collaboration brings high fashion aesthetics to functional travel gear.'
    },
    {
      date: 'September 5, 2024',
      title: 'TUMI Wins Red Dot Design Award for Innovation',
      excerpt: 'Latest smart luggage collection recognized for outstanding design and technology integration.'
    }
  ];

  const mediaContacts = [
    {
      region: 'North America',
      name: 'Sarah Johnson',
      email: 'sjohnson@tumi.com',
      phone: '+1 (212) 555-0123'
    },
    {
      region: 'Europe',
      name: 'Michael Schmidt',
      email: 'mschmidt@tumi.com',
      phone: '+44 20 7555 0456'
    },
    {
      region: 'Asia Pacific',
      name: 'Lisa Chen',
      email: 'lchen@tumi.com',
      phone: '+65 6555 0789'
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
              <span className="text-gray-900">Press</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Press Center</h1>
            <p className="text-lg text-gray-300">Latest news and media resources from TUMI</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Latest Press Releases */}
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8">Latest Press Releases</h2>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <p className="text-sm text-gray-500 mb-2">{release.date}</p>
                    <h3 className="text-xl font-semibold mb-2 hover:underline cursor-pointer">
                      {release.title}
                    </h3>
                    <p className="text-gray-600">{release.excerpt}</p>
                    <a href="#" className="text-black hover:underline mt-2 inline-block">
                      Read More →
                    </a>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                View All Press Releases
              </button>
            </div>

            {/* Brand Assets */}
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8">Brand Assets</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-200 p-6 text-center hover:border-black transition-colors">
                  <div className="w-16 h-16 bg-gray-200 mx-auto mb-4"></div>
                  <h3 className="font-semibold mb-2">Logo Package</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Official TUMI logos in various formats
                  </p>
                  <button className="text-black hover:underline">Download</button>
                </div>
                
                <div className="border border-gray-200 p-6 text-center hover:border-black transition-colors">
                  <div className="w-16 h-16 bg-gray-200 mx-auto mb-4"></div>
                  <h3 className="font-semibold mb-2">Product Images</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    High-resolution product photography
                  </p>
                  <button className="text-black hover:underline">Request Access</button>
                </div>
                
                <div className="border border-gray-200 p-6 text-center hover:border-black transition-colors">
                  <div className="w-16 h-16 bg-gray-200 mx-auto mb-4"></div>
                  <h3 className="font-semibold mb-2">Brand Guidelines</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete brand usage guidelines
                  </p>
                  <button className="text-black hover:underline">View PDF</button>
                </div>
              </div>
            </div>

            {/* Company Facts */}
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8">Company Facts</h2>
              <div className="bg-gray-50 p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">About TUMI</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Founded in 1975 by Charlie Clifford</li>
                      <li>• Named after a Peruvian ceremonial knife</li>
                      <li>• Pioneered use of ballistic nylon in luggage</li>
                      <li>• Part of Samsonite International S.A. since 2016</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Key Statistics</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Available in 75+ countries worldwide</li>
                      <li>• 300+ retail locations globally</li>
                      <li>• 30+ quality tests for each product</li>
                      <li>• 1,000+ employees worldwide</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Contacts */}
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8">Media Contacts</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {mediaContacts.map((contact, index) => (
                  <div key={index} className="bg-gray-50 p-6">
                    <h3 className="font-semibold mb-2">{contact.region}</h3>
                    <p className="text-gray-600 mb-1">{contact.name}</p>
                    <p className="text-gray-600 mb-1">
                      <a href={`mailto:${contact.email}`} className="hover:underline">
                        {contact.email}
                      </a>
                    </p>
                    <p className="text-gray-600">{contact.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Press Kit */}
            <div className="text-center bg-black text-white p-12">
              <h2 className="text-3xl font-light mb-4">Download Press Kit</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get instant access to our complete press kit including high-resolution images, 
                logos, fact sheets, and recent press releases.
              </p>
              <div className="space-x-4">
                <button className="bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors">
                  Download Press Kit
                </button>
                <button className="border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors">
                  Request Interview
                </button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-light mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to receive the latest TUMI news and press releases
              </p>
              <form className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
                >
                  Subscribe
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