'use client';

import TumiHeader from '@/components/TumiHeader';
import TumiFooter from '@/components/TumiFooter';
import Link from 'next/link';

export default function AccessibilityPage() {
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
              <span className="text-gray-900">Accessibility</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-black text-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Accessibility</h1>
            <p className="text-lg text-gray-300">Our commitment to an inclusive experience</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-light mb-6">Our Accessibility Commitment</h2>
              <p className="text-gray-600 mb-4">
                At TUMI, we are committed to ensuring that our website is accessible to all customers, 
                including those with disabilities. We strive to provide an inclusive online experience 
                that allows everyone to shop with ease and confidence.
              </p>
              <p className="text-gray-600">
                We continuously work to improve the accessibility of our website in compliance with 
                the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
              </p>
            </div>

            {/* Accessibility Features */}
            <div>
              <h2 className="text-3xl font-light mb-6">Accessibility Features</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Navigation</h3>
                  <ul className="list-disc ml-6 space-y-2 text-gray-600">
                    <li>Consistent navigation structure throughout the site</li>
                    <li>Skip navigation links to jump to main content</li>
                    <li>Clear and descriptive page titles</li>
                    <li>Breadcrumb navigation for easy orientation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Visual Design</h3>
                  <ul className="list-disc ml-6 space-y-2 text-gray-600">
                    <li>High contrast between text and background colors</li>
                    <li>Resizable text without loss of functionality</li>
                    <li>Alternative text for all informative images</li>
                    <li>Clear focus indicators for keyboard navigation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Interaction</h3>
                  <ul className="list-disc ml-6 space-y-2 text-gray-600">
                    <li>All functionality available via keyboard</li>
                    <li>Clear and consistent form labels</li>
                    <li>Error messages that clearly explain issues</li>
                    <li>Sufficient time to complete actions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Content</h3>
                  <ul className="list-disc ml-6 space-y-2 text-gray-600">
                    <li>Clear and simple language</li>
                    <li>Properly structured headings</li>
                    <li>Descriptive link text</li>
                    <li>Captions and transcripts for video content</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Browser Compatibility */}
            <div>
              <h2 className="text-3xl font-light mb-6">Supported Technologies</h2>
              <div className="space-y-4 text-gray-600">
                <p>Our website is designed to work with:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
                  <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                  <li>Voice recognition software</li>
                  <li>Keyboard-only navigation</li>
                  <li>Browser zoom up to 200%</li>
                </ul>
              </div>
            </div>

            {/* Tips for Users */}
            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl font-light mb-6">Tips for Better Accessibility</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Customize Your Experience</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Use browser zoom (Ctrl/Cmd + or -) to adjust text size</li>
                    <li>• Enable high contrast mode in your operating system</li>
                    <li>• Use browser extensions for additional accessibility features</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Keyboard Navigation</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Tab key to move forward through links and forms</li>
                    <li>• Shift + Tab to move backward</li>
                    <li>• Enter or Space to activate buttons and links</li>
                    <li>• Escape to close pop-ups and modals</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Content */}
            <div>
              <h2 className="text-3xl font-light mb-6">Third-Party Content</h2>
              <p className="text-gray-600">
                While we strive to ensure all content on our website is accessible, we may occasionally 
                link to third-party websites or embed content that is not fully under our control. We 
                encourage these partners to provide accessible content but cannot guarantee their compliance.
              </p>
            </div>

            {/* Ongoing Efforts */}
            <div>
              <h2 className="text-3xl font-light mb-6">Continuous Improvement</h2>
              <p className="text-gray-600 mb-4">
                We are committed to maintaining and improving the accessibility of our website. Our efforts include:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li>Regular accessibility audits and testing</li>
                <li>Training for our development and content teams</li>
                <li>User feedback incorporation</li>
                <li>Staying current with accessibility standards and best practices</li>
              </ul>
            </div>

            {/* Feedback */}
            <div className="bg-black text-white p-8">
              <h2 className="text-2xl font-light mb-6">We Welcome Your Feedback</h2>
              <p className="mb-6">
                If you encounter any accessibility barriers or have suggestions for improvement, 
                please let us know. Your feedback helps us create a better experience for all customers.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Contact our Accessibility Team:</p>
                  <p>Email: <a href="mailto:accessibility@tumi.com" className="underline">accessibility@tumi.com</a></p>
                  <p>Phone: <a href="tel:1-800-781-8864" className="underline">1-800-781-8864</a></p>
                </div>
                <p className="text-sm text-gray-300">
                  When contacting us, please provide specific details about the issue and any assistive 
                  technology you were using.
                </p>
              </div>
            </div>

            {/* Alternative Options */}
            <div>
              <h2 className="text-3xl font-light mb-6">Alternative Shopping Options</h2>
              <p className="text-gray-600 mb-4">
                If you prefer, you can also shop with TUMI through these accessible alternatives:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li>Call our customer service team at 1-800-781-8864 to place an order by phone</li>
                <li>Visit one of our retail stores for in-person assistance</li>
                <li>Request a catalog in alternative formats</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <TumiFooter />
    </div>
  );
}