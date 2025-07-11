'use client';

import TumiHeader from '@/components/TumiHeader';
import TumiFooter from '@/components/TumiFooter';
import Link from 'next/link';

export default function TermsPage() {
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
              <span className="text-gray-900">Terms & Conditions</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-300">Last updated: January 11, 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto prose prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-light mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing or using the TUMI website (the "Site"), you agree to be bound by these 
                  Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not 
                  use our Site or purchase our products.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">2. Use of the Site</h2>
                <div className="space-y-4 text-gray-600">
                  <p>You may use the Site for lawful purposes only. You agree not to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Transmit any harmful or malicious code</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use automated means to access the Site without permission</li>
                    <li>Engage in any activity that disrupts or interferes with the Site</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">3. Account Registration</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    To access certain features, you may need to create an account. You agree to:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized use</li>
                    <li>Be responsible for all activities under your account</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">4. Product Information and Pricing</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We strive to provide accurate product descriptions and pricing. However:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Prices are subject to change without notice</li>
                    <li>We reserve the right to correct any errors in pricing or product information</li>
                    <li>We may limit quantities available for purchase</li>
                    <li>All prices are in U.S. dollars unless otherwise stated</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">5. Orders and Payment</h2>
                <div className="space-y-4 text-gray-600">
                  <p>By placing an order, you represent that:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>You are authorized to use the payment method provided</li>
                    <li>All information provided is accurate and complete</li>
                    <li>You are at least 18 years old or have parental consent</li>
                  </ul>
                  <p className="mt-4">
                    We reserve the right to refuse or cancel any order for any reason, including 
                    suspected fraud or unauthorized transactions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">6. Shipping and Delivery</h2>
                <p className="text-gray-600">
                  Shipping times and costs vary based on location and selected shipping method. 
                  Risk of loss and title for products pass to you upon delivery to the carrier. 
                  For detailed information, please see our <Link href="/shipping" className="text-black hover:underline">Shipping Policy</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">7. Returns and Refunds</h2>
                <p className="text-gray-600">
                  We offer a 30-day return policy for most items. Products must be unused and in 
                  original condition. Personalized items are final sale. For complete details, 
                  please see our <Link href="/shipping" className="text-black hover:underline">Return Policy</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">8. Intellectual Property</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    All content on the Site, including text, graphics, logos, images, and software, 
                    is the property of TUMI or its licensors and is protected by intellectual property laws.
                  </p>
                  <p>You may not:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Copy, modify, or distribute any content without permission</li>
                    <li>Use our trademarks without written consent</li>
                    <li>Remove any copyright or proprietary notices</li>
                    <li>Create derivative works based on our content</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">9. Limited Warranty and Disclaimer</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    TUMI products are covered by our limited warranty against defects in materials 
                    and workmanship. THE SITE AND PRODUCTS ARE PROVIDED "AS IS" WITHOUT WARRANTIES 
                    OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                  </p>
                  <p>
                    TO THE FULLEST EXTENT PERMITTED BY LAW, TUMI DISCLAIMS ALL WARRANTIES, INCLUDING 
                    BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
                    PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-600">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, TUMI SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED 
                  TO YOUR USE OF THE SITE OR PRODUCTS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">11. Indemnification</h2>
                <p className="text-gray-600">
                  You agree to indemnify and hold harmless TUMI, its affiliates, and their respective 
                  officers, directors, employees, and agents from any claims, losses, or damages arising 
                  from your use of the Site or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">12. Governing Law</h2>
                <p className="text-gray-600">
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  State of New Jersey, without regard to its conflict of law provisions. Any disputes 
                  shall be resolved in the courts of New Jersey.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">13. Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these Terms at any time. Changes will be effective 
                  immediately upon posting. Your continued use of the Site constitutes acceptance of 
                  the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">14. Contact Information</h2>
                <div className="text-gray-600">
                  <p className="mb-4">If you have questions about these Terms, please contact us:</p>
                  <address className="not-italic space-y-2">
                    <p>Email: <a href="mailto:legal@tumi.com" className="text-black hover:underline">legal@tumi.com</a></p>
                    <p>Phone: <a href="tel:1-800-781-8864" className="text-black hover:underline">1-800-781-8864</a></p>
                    <p>
                      Mail: TUMI, Inc.<br />
                      Attn: Legal Department<br />
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