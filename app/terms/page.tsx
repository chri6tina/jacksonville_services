export const metadata = {
  title: 'Terms of Service - Jacksonville Services LLC',
  description: 'Terms of service for Jacksonville Services LLC website and services.',
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <p className="text-neutral-600 mb-6">
              These Terms of Service ("Terms") govern your use of the Jacksonville Services LLC website 
              and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Services
            </h2>
            <p className="text-neutral-600 mb-6">
              Jacksonville Services LLC provides vending machine services, house cleaning, junk removal, 
              and power washing services in Jacksonville, Florida and surrounding areas.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Service Agreements
            </h2>
            <p className="text-neutral-600 mb-6">
              All services are provided subject to separate service agreements. These Terms do not 
              modify or supersede any specific service agreements you may have with us.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Website Use
            </h2>
            <p className="text-neutral-600 mb-6">
              You may use our website for lawful purposes only. You agree not to use the website 
              in any way that violates any applicable federal, state, local, or international law or regulation.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Intellectual Property
            </h2>
            <p className="text-neutral-600 mb-6">
              The content on this website, including text, graphics, logos, and images, is the property 
              of Jacksonville Services LLC and is protected by copyright and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-neutral-600 mb-6">
              Jacksonville Services LLC shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages arising out of or relating to your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Changes to Terms
            </h2>
            <p className="text-neutral-600 mb-6">
              We reserve the right to modify these Terms at any time. We will notify users of any 
              material changes by posting the new Terms on this page.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">
              Contact Information
            </h2>
            <p className="text-neutral-600 mb-6">
              If you have any questions about these Terms of Service, please contact us at:
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

