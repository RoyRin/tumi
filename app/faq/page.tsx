'use client';

import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import Link from 'next/link';
import { useState } from 'react';

export default function FAQPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const faqs = [
    {
      category: 'Orders & Shipping',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'Standard shipping takes 5-7 business days. Express shipping (2-3 days) and Next Day options are also available.'
        },
        {
          q: 'Do you ship internationally?',
          a: 'Yes, we ship to over 100 countries worldwide. International shipping rates and times vary by destination.'
        },
        {
          q: 'How can I track my order?',
          a: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account.'
        },
        {
          q: 'Can I change or cancel my order?',
          a: 'Orders can be modified or cancelled within 1 hour of placement. After that, please wait for delivery and use our return process.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 30-day return window from the date of delivery. Items must be unused and in original condition with tags attached.'
        },
        {
          q: 'How do I return an item?',
          a: 'Log into your account, select the order and items to return, print the prepaid label, and drop off at any authorized shipping location.'
        },
        {
          q: 'Are personalized items returnable?',
          a: 'Personalized and monogrammed items are final sale and cannot be returned or exchanged unless defective.'
        },
        {
          q: 'When will I receive my refund?',
          a: 'Refunds are processed within 5-7 business days of receiving your return. Allow 3-5 additional days for it to appear on your statement.'
        }
      ]
    },
    {
      category: 'Product Information',
      questions: [
        {
          q: 'What is TUMI Tracer®?',
          a: 'TUMI Tracer® is our exclusive product recovery program. Register your product to help recover it if lost or stolen.'
        },
        {
          q: 'What materials are TUMI products made from?',
          a: 'We use premium materials including ballistic nylon, leather, polycarbonate, and aluminum, depending on the collection.'
        },
        {
          q: 'Are TUMI products waterproof?',
          a: 'While many TUMI products are water-resistant, they are not fully waterproof. We recommend avoiding prolonged exposure to water.'
        },
        {
          q: 'How do I find the right size luggage?',
          a: 'Check our Size Guide for detailed dimensions and capacity information. Consider your typical trip length and airline restrictions.'
        }
      ]
    },
    {
      category: 'Warranty & Repairs',
      questions: [
        {
          q: 'What does the TUMI warranty cover?',
          a: 'Our limited warranty covers manufacturing defects in materials and workmanship. It does not cover normal wear and tear or damage from misuse.'
        },
        {
          q: 'How long is the warranty period?',
          a: 'Warranty periods vary by product category. Most luggage has a 5-year warranty, while leather goods typically have a 2-year warranty.'
        },
        {
          q: 'How do I get my TUMI product repaired?',
          a: 'Contact our customer service team for a repair assessment. We offer repair services for both warranty and non-warranty issues.'
        },
        {
          q: 'Do you use original parts for repairs?',
          a: 'Yes, all TUMI repairs are performed by authorized technicians using genuine TUMI parts to maintain quality and functionality.'
        }
      ]
    },
    {
      category: 'Account & Payment',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and TUMI gift cards.'
        },
        {
          q: 'Is my payment information secure?',
          a: 'Yes, we use industry-standard SSL encryption to protect your payment information. We never store your credit card details.'
        },
        {
          q: 'Do I need an account to place an order?',
          a: 'No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, and access order history.'
        },
        {
          q: 'How do I reset my password?',
          a: 'Click "Forgot Password" on the login page and enter your email. You\'ll receive instructions to reset your password.'
        }
      ]
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
              <span className="text-gray-900">FAQs</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-300">Find answers to common questions about TUMI products and services</p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-12">
              <input
                type="search"
                placeholder="Search FAQs..."
                className="w-full px-6 py-4 border border-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            {/* FAQ Sections */}
            <div className="space-y-8">
              {faqs.map((section) => (
                <div key={section.category} className="border-b border-gray-200 pb-8">
                  <h2 className="text-2xl font-light mb-6">{section.category}</h2>
                  
                  <div className="space-y-4">
                    {section.questions.map((item, index) => (
                      <div key={index} className="border border-gray-200">
                        <button
                          onClick={() => toggleSection(`${section.category}-${index}`)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                        >
                          <span className="font-medium">{item.q}</span>
                          <span className="text-2xl">
                            {openSection === `${section.category}-${index}` ? '−' : '+'}
                          </span>
                        </button>
                        
                        {openSection === `${section.category}-${index}` && (
                          <div className="px-6 py-4 bg-gray-50 text-gray-600">
                            {item.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gray-50 p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Our customer service team is here to help
              </p>
              <div className="space-y-2">
                <p>
                  <a href="tel:1-800-781-8864" className="text-black hover:underline font-medium">
                    1-800-781-8864
                  </a>
                </p>
                <p>
                  <a href="mailto:customerservice@tumi.com" className="text-black hover:underline">
                    customerservice@tumi.com
                  </a>
                </p>
                <p className="text-gray-600">
                  Monday - Friday: 9AM - 6PM EST
                </p>
              </div>
              <Link 
                href="/contact" 
                className="inline-block mt-6 bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <TumiFooter />
    </div>
  );
}