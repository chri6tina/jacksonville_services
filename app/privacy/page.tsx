export const metadata = {
  title: 'Privacy Policy - Jacksonville Services LLC',
  description: 'Privacy policy for Jacksonville Services LLC website and services.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <p className="text-neutral-600 mb-6">
              Jacksonville Services LLC ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you 
              visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-neutral-600 mb-6">
              We collect information you provide directly to us, such as when you fill out our contact form, 
              request a quote, or communicate with us. This may include your name, email address, phone number, 
              and any other information you choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-neutral-600 mb-6">
              We use the information we collect to provide our services, respond to your inquiries, 
              send you information about our services, and improve our website and services.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Information Sharing
            </h2>
            <p className="text-neutral-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Data Security
            </h2>
            <p className="text-neutral-600 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <p className="text-neutral-700">
                <strong>Jacksonville Services LLC</strong><br />
                Email: support@jacksonvilleservices.com<br />
                Phone: (904) 555-0123<br />
                Address: 123 Main Street, Jacksonville, FL 32202
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

