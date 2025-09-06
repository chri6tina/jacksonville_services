import Link from 'next/link'
import Image from 'next/image'
import { FaUsers, FaBuilding, FaTrash, FaWater, FaCalendarAlt, FaShieldAlt, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'Neighborhood Cleanup Services Jacksonville FL | Community Cleanup Solutions',
  description: 'Professional neighborhood cleanup services in Jacksonville, FL. HOA cleaning, community maintenance, and property management cleanup solutions. Get your free neighborhood cleanup quote today.',
  keywords: 'neighborhood cleanup Jacksonville, HOA cleaning Jacksonville, community cleanup Jacksonville, property management cleaning Jacksonville, neighborhood maintenance Jacksonville FL',
  openGraph: {
    title: 'Neighborhood Cleanup Services Jacksonville FL | Community Cleanup Solutions',
    description: 'Professional neighborhood cleanup services in Jacksonville, FL. HOA cleaning, community maintenance, and property management cleanup solutions.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function NeighborhoodCleanupPage() {
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <section className="bg-neutral-100 py-4">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-neutral-800 font-medium">Neighborhood Cleanup</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Jacksonville neighborhood cleanup services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Neighborhood Cleanup Services
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional community cleanup services for HOAs, property managers, and neighborhood associations throughout Jacksonville, Florida. 
            Keeping communities clean and attractive.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">50+</div>
              <div className="text-neutral-200 drop-shadow-md">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">100%</div>
              <div className="text-neutral-200 drop-shadow-md">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
              <div className="text-neutral-200 drop-shadow-md">Emergency Service</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact?service=neighborhood-cleanup"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request Neighborhood Quote
            </Link>
            <Link
              href="tel:+19044563851"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Call Now: (904) 456-3851
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Comprehensive Neighborhood Cleanup Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Keep your community looking pristine with our specialized neighborhood cleanup services. 
              We work with HOAs, property management companies, and community organizations to maintain 
              clean, attractive neighborhoods throughout Jacksonville.
            </p>
          </div>
        </div>
      </section>

      {/* Jacksonville Areas Served */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Jacksonville Neighborhoods We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide specialized neighborhood cleanup services throughout Jacksonville's diverse communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/services/neighborhood-cleanup/locations/arlington" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Arlington</h3>
                <p className="text-neutral-600">Professional cleanup services for Arlington's diverse residential communities</p>
              </div>
            </Link>

            <Link href="/services/neighborhood-cleanup/locations/downtown" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Downtown</h3>
                <p className="text-neutral-600">Urban community cleanup services for Downtown Jacksonville neighborhoods</p>
              </div>
            </Link>

            <Link href="/services/neighborhood-cleanup/locations/riverside-avondale" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Riverside Avondale</h3>
                <p className="text-neutral-600">Historic district cleanup services for Riverside and Avondale communities</p>
              </div>
            </Link>

            <Link href="/services/neighborhood-cleanup/locations/mandarin" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Mandarin</h3>
                <p className="text-neutral-600">Family-friendly cleanup services for Mandarin's suburban communities</p>
              </div>
            </Link>

            <Link href="/services/neighborhood-cleanup/locations/beaches" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Jacksonville Beaches</h3>
                <p className="text-neutral-600">Coastal community cleanup services for Jacksonville's beach areas</p>
              </div>
            </Link>

            <Link href="/services/neighborhood-cleanup/locations/san-marco" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">San Marco</h3>
                <p className="text-neutral-600">Historic district cleanup services for San Marco's charming neighborhoods</p>
              </div>
            </Link>

            <Link href="/services/neighborhood-cleanup/locations/orange-park" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Orange Park</h3>
                <p className="text-neutral-600">Suburban community cleanup services for Orange Park neighborhoods</p>
              </div>
            </Link>

            <Link href="/services/neighborhood-cleanup/locations/southside" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Southside</h3>
                <p className="text-neutral-600">Modern suburban cleanup services for Southside communities</p>
              </div>
            </Link>

            <Link href="/services/neighborhood-cleanup/locations/baymeadows" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Baymeadows</h3>
                <p className="text-neutral-600">Corporate community cleanup services for Baymeadows area</p>
              </div>
            </Link>

            <div className="bg-neutral-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">All Jacksonville Areas</h3>
              <p className="text-neutral-600">Comprehensive cleanup services for all Jacksonville neighborhoods and communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Neighborhood Cleanup Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <FaBuilding className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Common Area Maintenance</h3>
              <p className="text-neutral-600">
                Regular cleaning and maintenance of community common areas including clubhouses, 
                pools, playgrounds, and recreational facilities.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <FaCheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Landscape Cleanup</h3>
              <p className="text-neutral-600">
                Debris removal, leaf cleanup, and general landscape maintenance to keep 
                neighborhood entrances and common areas looking pristine.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <FaTrash className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Trash & Debris Removal</h3>
              <p className="text-neutral-600">
                Comprehensive trash collection and debris removal from common areas, 
                including bulk item disposal and recycling services.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <FaCalendarAlt className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Event Cleanup</h3>
              <p className="text-neutral-600">
                Post-event cleanup services for community gatherings, festivals, 
                and special events to restore areas to pristine condition.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <FaWater className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Power Washing</h3>
              <p className="text-neutral-600">
                High-pressure cleaning of sidewalks, community signs, playground equipment, 
                and other hard surfaces throughout the neighborhood.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <FaShieldAlt className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Scheduled Maintenance</h3>
              <p className="text-neutral-600">
                Regular scheduled maintenance programs tailored to your community's 
                specific needs and budget requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Why Choose Our Neighborhood Cleanup Services?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Community-Focused</h3>
                  <p className="text-neutral-600">We understand the unique needs of Jacksonville neighborhoods and work closely with HOA boards and property managers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Flexible Scheduling</h3>
                  <p className="text-neutral-600">We work around your community's schedule, including early morning and weekend services when needed.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Comprehensive Solutions</h3>
                  <p className="text-neutral-600">From routine maintenance to emergency cleanup, we handle all aspects of neighborhood maintenance.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Licensed & Insured</h3>
                  <p className="text-neutral-600">Fully licensed and insured for your peace of mind and protection.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Eco-Friendly Practices</h3>
                  <p className="text-neutral-600">We use environmentally safe cleaning products and sustainable disposal methods.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Competitive Pricing</h3>
                  <p className="text-neutral-600">Transparent, competitive pricing with no hidden fees or surprise charges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Neighborhood Cleanup Process
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Assessment</h3>
              <p className="text-neutral-600">We evaluate your community's specific cleanup needs and create a customized plan.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Planning</h3>
              <p className="text-neutral-600">We develop a detailed schedule and coordinate with your HOA or property management team.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Execution</h3>
              <p className="text-neutral-600">Our professional team performs the cleanup work efficiently and thoroughly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Follow-up</h3>
              <p className="text-neutral-600">We ensure your satisfaction and schedule ongoing maintenance as needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Keep Your Neighborhood Clean?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your community's cleanup needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=neighborhood-cleanup" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Quote
            </Link>
            <Link href="tel:+19044563851" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Call Now: (904) 456-3851
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-neutral-200">
            <div className="flex items-center space-x-2">
              <FaPhone className="w-5 h-5" />
              <span>(904) 456-3851</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="w-5 h-5" />
              <span>support@jacksonvilleservices.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
