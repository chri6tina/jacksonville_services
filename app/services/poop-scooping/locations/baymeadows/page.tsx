import Link from 'next/link'
import Image from 'next/image'
import { FaDog, FaHome, FaBuilding, FaTree, FaCalendarAlt, FaShieldAlt, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'Baymeadows Jacksonville Dog Poop Scooping Service | Pet Waste Removal Baymeadows',
  description: 'Professional dog poop scooping service in Baymeadows Jacksonville FL. Regular pet waste removal for homes, condos, and properties in Baymeadows area.',
  keywords: 'Baymeadows Jacksonville dog poop scooping, Baymeadows pet waste removal, Baymeadows dog waste cleanup, Baymeadows poop service, Baymeadows pet cleaning Jacksonville FL',
  openGraph: {
    title: 'Baymeadows Jacksonville Dog Poop Scooping Service | Pet Waste Removal Baymeadows',
    description: 'Professional dog poop scooping service in Baymeadows Jacksonville FL. Regular pet waste removal for homes, condos, and properties.',
    type: 'website',
    locale: 'en_US',
  },
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'home':
      return <FaHome className="w-8 h-8 text-white" />
    case 'building':
      return <FaBuilding className="w-8 h-8 text-white" />
    case 'tree':
      return <FaTree className="w-8 h-8 text-white" />
    case 'dog':
      return <FaDog className="w-8 h-8 text-white" />
    default:
      return <FaDog className="w-8 h-8 text-white" />
  }
}

export default function BaymeadowsPoopScooping() {
  const baymeadowsAreas = [
    'Baymeadows Way',
    'Baymeadows Road',
    'Gate Parkway',
    'Southside Boulevard',
    'Baymeadows Circle',
    'Baymeadows Business Park',
    'Baymeadows Town Center',
    'Baymeadows Golf Course'
  ]

  const services = [
    {
      title: 'Residential Home Service',
      description: 'Regular pet waste removal for Baymeadows Jacksonville single-family homes and residential properties',
      iconName: 'home',
      features: ['Backyard cleanup', 'Front yard maintenance', 'Pool area cleaning', 'Garden bed service']
    },
    {
      title: 'Baymeadows Condo Service',
      description: 'Professional pet waste removal for Baymeadows condominiums and townhome communities',
      iconName: 'building',
      features: ['Condo common areas', 'Townhome communities', 'HOA partnerships', 'Shared space maintenance']
    },
    {
      title: 'Baymeadows Park Service',
      description: 'Pet waste removal for Baymeadows parks, trails, and community recreational areas',
      iconName: 'tree',
      features: ['Community parks', 'Walking trails', 'Golf course areas', 'Recreation area cleanup']
    },
    {
      title: 'Business District Service',
      description: 'Specialized pet waste removal for Baymeadows business parks and commercial properties',
      iconName: 'dog',
      features: ['Business park service', 'Commercial property cleanup', 'Office complex maintenance', 'Retail area service']
    }
  ]

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <section className="bg-neutral-100 py-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary-600 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/poop-scooping" className="hover:text-primary-600 transition-colors">Poop Scooping Service</Link>
            <span>/</span>
            <span className="text-neutral-800 font-medium">Baymeadows</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Baymeadows Jacksonville dog poop scooping services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Baymeadows Jacksonville Dog Poop Scooping
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional pet waste removal service for Baymeadows Jacksonville homes, condos, and residential communities. 
            Keeping your Baymeadows neighborhood clean and sanitary.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">50+</div>
              <div className="text-neutral-200 drop-shadow-md">Baymeadows Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">100%</div>
              <div className="text-neutral-200 drop-shadow-md">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Eco-Friendly</div>
              <div className="text-neutral-200 drop-shadow-md">Disposal Methods</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact?service=poop-scooping&location=baymeadows"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request Baymeadows Quote
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

      {/* Baymeadows Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Baymeadows Jacksonville Pet Waste Removal Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Serving Baymeadows Jacksonville pet owners with specialized poop scooping services. From Baymeadows Way to business parks, 
              we keep your residential community clean and pet-friendly year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Baymeadows Areas Served */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Baymeadows Areas We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide comprehensive pet waste removal services throughout Baymeadows Jacksonville communities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {baymeadowsAreas.map((area, index) => (
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
              Baymeadows Pet Waste Removal Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  {renderIcon(service.iconName)}
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

      {/* Why Choose Us for Baymeadows */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Why Choose Us for Baymeadows Pet Waste Removal?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Baymeadows Community Expertise</h3>
                  <p className="text-neutral-600">We understand Baymeadows Jacksonville's residential and business community needs and work closely with local HOA boards and property managers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Business District Service</h3>
                  <p className="text-neutral-600">Specialized service for Baymeadows business parks and commercial properties with flexible scheduling.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Eco-Friendly Disposal</h3>
                  <p className="text-neutral-600">We use environmentally safe disposal methods that protect Baymeadows' beautiful residential and business environment.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Licensed & Insured</h3>
                  <p className="text-neutral-600">Fully licensed and insured for your peace of mind and protection in Baymeadows properties.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Pet-Safe Methods</h3>
                  <p className="text-neutral-600">All our cleaning products and methods are safe for pets, children, and the environment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Competitive Baymeadows Pricing</h3>
                  <p className="text-neutral-600">Transparent, competitive pricing with no hidden fees or surprise charges for Baymeadows services.</p>
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
            Ready to Keep Your Baymeadows Property Clean?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your Baymeadows pet waste removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=poop-scooping&location=baymeadows" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Baymeadows Quote
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
