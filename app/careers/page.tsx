'use client';

import TumiHeader from '@/components/TumiHeader';
import TumiFooter from '@/components/TumiFooter';
import Link from 'next/link';

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior Product Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time'
    },
    {
      title: 'E-commerce Manager',
      department: 'Digital',
      location: 'Edison, NJ',
      type: 'Full-time'
    },
    {
      title: 'Retail Store Manager',
      department: 'Retail',
      location: 'Los Angeles, CA',
      type: 'Full-time'
    },
    {
      title: 'Supply Chain Analyst',
      department: 'Operations',
      location: 'Edison, NJ',
      type: 'Full-time'
    },
    {
      title: 'Marketing Coordinator',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time'
    },
    {
      title: 'Customer Service Representative',
      department: 'Customer Experience',
      location: 'Remote',
      type: 'Full-time'
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
              <span className="text-gray-900">Careers</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Careers at TUMI</h1>
            <p className="text-lg text-gray-300">Join us in creating exceptional travel experiences</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Introduction */}
            <div className="text-center">
              <p className="text-xl text-gray-700 leading-relaxed">
                At TUMI, we're more than a luxury travel brand – we're innovators, creators, 
                and problem-solvers dedicated to enhancing the journey for travelers worldwide. 
                Join our team and help shape the future of travel.
              </p>
            </div>

            {/* Why TUMI */}
            <div>
              <h2 className="text-3xl font-light mb-8 text-center">Why TUMI?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-3">Innovation Culture</h3>
                  <p className="text-gray-600">
                    Work with cutting-edge materials and technologies to create products that 
                    redefine travel excellence.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
                  <p className="text-gray-600">
                    Be part of a brand that touches lives in over 75 countries, with opportunities 
                    for international collaboration.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
                  <p className="text-gray-600">
                    Develop your skills with mentorship programs, training opportunities, and 
                    clear advancement paths.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 p-12">
              <h2 className="text-3xl font-light mb-8 text-center">Benefits & Perks</h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Comprehensive health, dental, and vision insurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>401(k) retirement plan with company matching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Generous paid time off and holidays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Employee discount on TUMI products</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Professional development programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Flexible work arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Wellness programs and gym reimbursement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Travel opportunities and experiences</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Open Positions */}
            <div>
              <h2 className="text-3xl font-light mb-8">Open Positions</h2>
              <div className="space-y-4">
                {openPositions.map((position, index) => (
                  <div key={index} className="border border-gray-200 p-6 hover:border-black transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>{position.department}</p>
                          <p>{position.location} • {position.type}</p>
                        </div>
                      </div>
                      <button className="mt-4 md:mt-0 bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Culture */}
            <div>
              <h2 className="text-3xl font-light mb-8">Our Culture</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Diversity & Inclusion</h3>
                  <p className="text-gray-600">
                    We celebrate diversity in all its forms and are committed to creating an 
                    inclusive environment where everyone can thrive. Our global perspective 
                    enriches our creativity and innovation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                  <p className="text-gray-600">
                    We understand that life happens outside of work. Our flexible policies and 
                    supportive culture ensure you can excel in your career while maintaining 
                    personal well-being.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                  <p className="text-gray-600">
                    Stay at the forefront of your field with access to training programs, 
                    industry conferences, and mentorship opportunities that foster professional 
                    growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
                  <p className="text-gray-600">
                    Work alongside passionate professionals who share your commitment to 
                    excellence. Our collaborative environment encourages innovation and 
                    creative problem-solving.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center bg-gray-50 p-12">
              <h3 className="text-2xl font-light mb-4">Ready to Join Us?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore all our open positions and submit your application. We're always 
                looking for talented individuals who share our passion for excellence and innovation.
              </p>
              <div className="space-y-4">
                <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors">
                  View All Positions
                </button>
                <p className="text-gray-600">
                  Questions? Email us at <a href="mailto:careers@tumi.com" className="text-black hover:underline">careers@tumi.com</a>
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