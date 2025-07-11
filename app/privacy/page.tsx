'use client';

import { TumiHeader } from "@/components/tumi-header"
import { TumiFooter } from "@/components/tumi-footer"
import Link from 'next/link';

export default function PrivacyPage() {
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
              <span className="text-gray-900">Privacy Policy</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-300">Last updated: January 11, 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto prose prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-light mb-4">Introduction</h2>
                <p className="text-gray-600 mb-4">
                  TUMI, Inc. ("TUMI," "we," "us," or "our") respects your privacy and is committed to 
                  protecting your personal information. This Privacy Policy describes how we collect, 
                  use, and share information about you when you visit our website, make a purchase, 
                  or interact with us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">Information We Collect</h2>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Personal Information</h3>
                    <p>When you interact with us, we may collect:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Name and contact information (email, phone, address)</li>
                      <li>Payment information</li>
                      <li>Purchase history and preferences</li>
                      <li>Account credentials</li>
                      <li>TUMI Tracer® registration information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Automatically Collected Information</h3>
                    <p>We automatically collect certain information when you visit our website:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>IP address and device information</li>
                      <li>Browser type and language</li>
                      <li>Pages visited and time spent</li>
                      <li>Referring website</li>
                      <li>Location data</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use your information to:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-600">
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer service and support</li>
                  <li>Send order confirmations and updates</li>
                  <li>Personalize your shopping experience</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Improve our products and services</li>
                  <li>Prevent fraud and enhance security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">How We Share Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell or rent your personal information. We may share your information with:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-600">
                  <li><strong>Service Providers:</strong> Companies that help us operate our business 
                      (e.g., payment processors, shipping companies)</li>
                  <li><strong>Business Partners:</strong> Carefully selected partners for co-branded 
                      offerings or services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or 
                      sale of assets</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">Your Choices and Rights</h2>
                <div className="space-y-4 text-gray-600">
                  <p>You have certain rights regarding your personal information:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Access:</strong> Request a copy of your personal information</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong>Do Not Sell:</strong> Opt-out of the sale of personal information 
                        (though we do not sell personal information)</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at privacy@tumi.com or call 1-800-781-8864.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar technologies to enhance your experience, analyze usage, 
                  and deliver targeted advertising. You can manage cookie preferences through your 
                  browser settings. For more information, see our <Link href="/cookies" className="text-black hover:underline">Cookie Policy</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or 
                  destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">Children's Privacy</h2>
                <p className="text-gray-600">
                  Our website is not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If we learn we have collected 
                  such information, we will promptly delete it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">International Data Transfers</h2>
                <p className="text-gray-600">
                  Your information may be transferred to and processed in countries other than your 
                  own. We ensure appropriate safeguards are in place to protect your information in 
                  accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  material changes by posting the new policy on this page and updating the "Last 
                  updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">Contact Us</h2>
                <div className="text-gray-600">
                  <p className="mb-4">If you have questions about this Privacy Policy, please contact us:</p>
                  <address className="not-italic space-y-2">
                    <p><strong>TUMI Privacy Team</strong></p>
                    <p>Email: <a href="mailto:privacy@tumi.com" className="text-black hover:underline">privacy@tumi.com</a></p>
                    <p>Phone: <a href="tel:1-800-781-8864" className="text-black hover:underline">1-800-781-8864</a></p>
                    <p>
                      Mail: TUMI, Inc.<br />
                      Attn: Privacy Team<br />
                      499 Thornall Street<br />
                      Edison, NJ 08837
                    </p>
                  </address>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <TumiFooter />
    </div>
  );
}