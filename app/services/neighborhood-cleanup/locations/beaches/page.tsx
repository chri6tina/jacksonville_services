import Link from 'next/link'
import Image from 'next/image'
import { FaUsers, FaBuilding, FaTrash, FaWater, FaCalendarAlt, FaShieldAlt, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'Jacksonville Beaches Neighborhood Cleanup Services FL | HOA Cleaning Beaches',
  description: 'Professional neighborhood cleanup services in Jacksonville Beaches FL. HOA cleaning, community maintenance, and property management cleanup solutions in Beaches area.',
  keywords: 'Jacksonville Beaches neighborhood cleanup, Beaches HOA cleaning, Atlantic Beach cleanup, Neptune Beach cleanup, Jacksonville Beach community cleanup, Beaches property management cleaning FL',
  openGraph: {
    title: 'Jacksonville Beaches Neighborhood Cleanup Services FL | HOA Cleaning Beaches',
    description: 'Professional neighborhood cleanup services in Jacksonville Beaches FL. HOA cleaning, community maintenance, and property management cleanup solutions.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function BeachesNeighborhoodCleanup() {
  const beachesAreas = [
    'Atlantic Beach',
    'Neptune Beach',
    'Jacksonville Beach',
    'Ponte Vedra Beach',
    'Mayport',
    'Beaches Town Center',
    'Beach Haven',
    'Oceanfront Communities'
  ]

  const services = [
    {
      title: 'Beach Community Cleanup',
      description: 'Specialized cleanup services for Jacksonville Beaches coastal communities',
      icon: FaBuilding,
      features: ['Beach access maintenance', 'Coastal community areas', 'Beachfront properties', 'Marina area cleanup']
    },
    {
      title: 'Salt Air Maintenance',
      description: 'Professional maintenance services designed for coastal salt air conditions',
      icon: FaWater,
      features: ['Salt-resistant cleaning', 'Coastal equipment maintenance', 'Beach debris removal', 'Storm cleanup services']
    },
    {
      title: 'Tourist Season Services',
      description: 'Enhanced cleanup services during peak tourist seasons at the beaches',
      icon: FaCalendarAlt,
      features: ['High-season maintenance', 'Tourist area cleanup', 'Event cleanup services', 'Peak season scheduling']
    },
    {
      title: 'Beach Community Events',
      description: 'Cleanup services for beach community events and seasonal celebrations',
      icon: FaShieldAlt,
      features: ['Beach festival cleanup', 'Community event cleanup', 'Holiday celebration cleanup', 'Seasonal event services']
    }
  ]

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
            <Link href="/services/neighborhood-cleanup" className="hover:text-primary-600 transition-colors">Neighborhood Cleanup</Link>
            <span>/</span>
            <span className="text-neutral-800 font-medium">Beaches</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Jacksonville Beaches neighborhood cleanup services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Jacksonville Beaches Neighborhood Cleanup
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional neighborhood cleanup services for Jacksonville Beaches HOAs, property managers, and community organizations. 
            Keeping our beautiful beach communities clean and pristine.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">18+</div>
              <div className="text-neutral-200 drop-shadow-md">Beach Communities</div>
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
              href="/contact?service=neighborhood-cleanup&location=beaches"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request Beaches Quote
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

      {/* Beaches Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Jacksonville Beaches Neighborhood Cleanup Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Serving Jacksonville's beautiful beach communities with specialized coastal cleanup services. From Atlantic Beach 
              to Ponte Vedra Beach, we keep your beachside neighborhood looking pristine and welcoming year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Beaches Areas Served */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Jacksonville Beaches Areas We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide comprehensive neighborhood cleanup services throughout Jacksonville's beach communities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {beachesAreas.map((area, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-800">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Jacksonville Beaches Neighborhood Cleanup Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <FaCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Beaches */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Why Choose Us for Jacksonville Beaches Neighborhood Cleanup?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Coastal Community Expertise</h3>
                  <p className="text-neutral-600">We understand Jacksonville Beaches' unique coastal community needs and work closely with local HOA boards and property managers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Flexible Beach Scheduling</h3>
                  <p className="text-neutral-600">We work around Jacksonville Beaches community schedules, including early morning and weekend services when needed.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Comprehensive Coastal Solutions</h3>
                  <p className="text-neutral-600">From routine maintenance to emergency cleanup, we handle all aspects of Jacksonville Beaches neighborhood maintenance.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Licensed & Insured</h3>
                  <p className="text-neutral-600">Fully licensed and insured for your peace of mind and protection in Jacksonville Beaches communities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Eco-Friendly Coastal Practices</h3>
                  <p className="text-neutral-600">We use environmentally safe cleaning products and sustainable disposal methods throughout Jacksonville Beaches.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Competitive Beach Pricing</h3>
                  <p className="text-neutral-600">Transparent, competitive pricing with no hidden fees or surprise charges for Jacksonville Beaches services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Keep Your Jacksonville Beaches Neighborhood Clean?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your Jacksonville Beaches community's cleanup needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=neighborhood-cleanup&location=beaches" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Beaches Quote
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
