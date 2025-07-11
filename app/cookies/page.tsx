'use client';

import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import Link from 'next/link';

export default function CookiesPage() {
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
              <span className="text-gray-900">Cookie Policy</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-300">Last updated: January 11, 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-light mb-6">What Are Cookies?</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                understanding how you use our site, and showing you relevant content and advertisements.
              </p>
              <p className="text-gray-600">
                This Cookie Policy explains what cookies are, how we use them, and how you can manage 
                your cookie preferences.
              </p>
            </div>

            {/* Types of Cookies */}
            <div>
              <h2 className="text-3xl font-light mb-6">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6">
                  <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
                  <p className="text-gray-600 mb-3">
                    These cookies are necessary for the website to function properly and cannot be 
                    disabled. They are usually set in response to your actions, such as setting 
                    privacy preferences, logging in, or filling forms.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Examples:</strong> Session cookies, security cookies, load balancing cookies
                  </p>
                </div>

                <div className="bg-gray-50 p-6">
                  <h3 className="text-xl font-semibold mb-3">Performance Cookies</h3>
                  <p className="text-gray-600 mb-3">
                    These cookies help us understand how visitors interact with our website by 
                    collecting anonymous information about page visits, traffic sources, and user 
                    behavior.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Examples:</strong> Google Analytics, site performance monitoring
                  </p>
                </div>

                <div className="bg-gray-50 p-6">
                  <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
                  <p className="text-gray-600 mb-3">
                    These cookies enable enhanced functionality and personalization, such as 
                    remembering your language preference, location, or recently viewed products.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Examples:</strong> Language preferences, recently viewed items, wishlist
                  </p>
                </div>

                <div className="bg-gray-50 p-6">
                  <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
                  <p className="text-gray-600 mb-3">
                    These cookies track your browsing habits to deliver advertisements relevant 
                    to you and your interests. They may be set by our advertising partners.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Examples:</strong> Retargeting cookies, social media cookies, advertising network cookies
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie Details Table */}
            <div>
              <h2 className="text-3xl font-light mb-6">Specific Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4">Cookie Name</th>
                      <th className="text-left py-3 px-4">Type</th>
                      <th className="text-left py-3 px-4">Purpose</th>
                      <th className="text-left py-3 px-4">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">TUMI_SESSION</td>
                      <td className="py-3 px-4">Essential</td>
                      <td className="py-3 px-4">Maintains user session</td>
                      <td className="py-3 px-4">Session</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">_ga</td>
                      <td className="py-3 px-4">Performance</td>
                      <td className="py-3 px-4">Google Analytics tracking</td>
                      <td className="py-3 px-4">2 years</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">TUMI_LANG</td>
                      <td className="py-3 px-4">Functional</td>
                      <td className="py-3 px-4">Language preference</td>
                      <td className="py-3 px-4">1 year</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">TUMI_CART</td>
                      <td className="py-3 px-4">Functional</td>
                      <td className="py-3 px-4">Shopping cart items</td>
                      <td className="py-3 px-4">30 days</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">fbp</td>
                      <td className="py-3 px-4">Marketing</td>
                      <td className="py-3 px-4">Facebook advertising</td>
                      <td className="py-3 px-4">90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Managing Cookies */}
            <div>
              <h2 className="text-3xl font-light mb-6">How to Manage Cookies</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Cookie Settings</h3>
                  <p className="text-gray-600 mb-4">
                    You can manage your cookie preferences at any time by clicking the "Cookie Settings" 
                    button at the bottom of any page. This allows you to accept or reject different 
                    categories of cookies.
                  </p>
                  <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                    Manage Cookie Settings
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Browser Settings</h3>
                  <p className="text-gray-600 mb-4">
                    Most web browsers allow you to control cookies through their settings. You can 
                    set your browser to:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-600">
                    <li>Notify you when cookies are being set</li>
                    <li>Block all cookies</li>
                    <li>Block third-party cookies only</li>
                    <li>Delete all cookies when you close your browser</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Opt-Out Links</h3>
                  <p className="text-gray-600 mb-4">
                    You can opt out of specific third-party cookies:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a>
                    </li>
                    <li>
                      • Facebook: <a href="https://www.facebook.com/help/568137493302217" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">Facebook Ads Settings</a>
                    </li>
                    <li>
                      • General advertising: <a href="http://www.aboutads.info/choices/" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact of Disabling Cookies */}
            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl font-light mb-4">Impact of Disabling Cookies</h2>
              <p className="text-gray-600 mb-4">
                Please note that if you disable or reject cookies, some features of our website may 
                not function properly:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li>You may not be able to add items to your shopping cart or complete purchases</li>
                <li>Your language and currency preferences may not be saved</li>
                <li>You may see less relevant advertisements</li>
                <li>Some interactive features may not work as intended</li>
                <li>You may need to re-enter information more frequently</li>
              </ul>
            </div>

            {/* Third-Party Cookies */}
            <div>
              <h2 className="text-3xl font-light mb-6">Third-Party Cookies</h2>
              <p className="text-gray-600 mb-4">
                Some cookies on our site are set by third parties. These include:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li>Analytics providers to help us understand site usage</li>
                <li>Advertising networks to show relevant ads</li>
                <li>Social media platforms for sharing functionality</li>
                <li>Payment processors for secure transactions</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We do not control these third-party cookies. Please refer to the relevant third 
                party's privacy policy for more information.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-3xl font-light mb-6">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for legal reasons. We will indicate the date of the last update at the top of this 
                page. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="text-center bg-black text-white p-8">
              <h2 className="text-2xl font-light mb-4">Questions About Cookies?</h2>
              <p className="mb-6">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-2">
                <p>Email: <a href="mailto:privacy@tumi.com" className="underline">privacy@tumi.com</a></p>
                <p>Phone: <a href="tel:1-800-781-8864" className="underline">1-800-781-8864</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <TumiFooter />
    </div>
  );
}