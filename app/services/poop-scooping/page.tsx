import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaDog, FaHome, FaBuilding, FaTree, FaRecycle, FaClock, FaShieldAlt, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, IconType } from 'react-icons/fa'

export const metadata = {
  title: 'Poop Scooping Service Jacksonville FL | Professional Pet Waste Removal',
  description: 'Professional dog waste removal service in Jacksonville, FL. Regular scheduled cleanups for residential yards, commercial properties, and dog parks. Eco-friendly disposal methods.',
  keywords: 'poop scooping Jacksonville, dog waste removal Jacksonville, pet waste cleanup Jacksonville, yard cleaning Jacksonville, dog park maintenance Jacksonville, residential poop scooping Jacksonville FL',
  openGraph: {
    title: 'Poop Scooping Service Jacksonville FL | Professional Pet Waste Removal',
    description: 'Professional dog waste removal service in Jacksonville, FL. Regular scheduled cleanups for residential yards, commercial properties, and dog parks.',
    type: 'website',
    locale: 'en_US',
  },
}

interface Service {
  title: string
  description: string
  iconName: string
  features: string[]
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'home':
      return <FaHome className="w-8 h-8 text-white" />
    case 'building':
      return <FaBuilding className="w-8 h-8 text-white" />
    case 'park':
      return <FaTree className="w-8 h-8 text-white" />
    case 'dog':
      return <FaDog className="w-8 h-8 text-white" />
    default:
      return <FaDog className="w-8 h-8 text-white" />
  }
}

export default function PoopScooping() {
  const services: Service[] = [
    {
      title: 'Residential Yard Cleaning',
      description: 'Regular scheduled cleanups for residential properties and private yards',
      iconName: 'home',
      features: ['Weekly or bi-weekly service', 'Complete yard coverage', 'Pet-safe disposal', 'Flexible scheduling']
    },
    {
      title: 'Commercial Property Service',
      description: 'Professional pet waste removal for apartment complexes and commercial properties',
      iconName: 'building',
      features: ['HOA partnerships', 'Property management contracts', 'Regular maintenance schedules', 'Bulk service discounts']
    },
    {
      title: 'Dog Park Maintenance',
      description: 'Specialized cleaning for public and private dog parks and pet areas',
      iconName: 'park',
      features: ['Daily maintenance options', 'Sanitization services', 'Equipment cleaning', 'Community partnerships']
    },
    {
      title: 'One-Time Cleanup',
      description: 'Deep cleaning services for properties that need immediate attention',
      iconName: 'dog',
      features: ['Emergency cleanup', 'Move-in/move-out service', 'Event preparation', 'Seasonal deep cleaning']
    }
  ]

  const benefits = [
    'Eco-friendly disposal methods that protect the environment',
    'Flexible scheduling to fit your lifestyle and needs',
    'Professional, reliable service you can count on',
    'Pet-safe cleaning products and practices',
    'Affordable pricing with no hidden fees',
    'Satisfaction guaranteed on every service'
  ]

  const serviceTypes = [
    'Residential Properties',
    'Apartment Complexes',
    'Dog Parks & Pet Areas',
    'Commercial Properties',
    'HOA Communities',
    'Property Management',
    'Veterinary Clinics',
    'Pet Daycare Centers'
  ]

  const serviceAreas = [
    { name: 'Downtown Jacksonville', href: '/services/poop-scooping/locations/downtown' },
    { name: 'Riverside/Avondale', href: '/services/poop-scooping/locations/riverside-avondale' },
    { name: 'San Marco', href: '/services/poop-scooping/locations/san-marco' },
    { name: 'Beaches', href: '/services/poop-scooping/locations/beaches' },
    { name: 'Mandarin', href: '/services/poop-scooping/locations/mandarin' },
    { name: 'Orange Park', href: '/services/poop-scooping/locations/orange-park' },
    { name: 'Southside', href: '/services/poop-scooping/locations/southside' },
    { name: 'Baymeadows', href: '/services/poop-scooping/locations/baymeadows' },
    { name: 'Arlington', href: '/services/poop-scooping/locations/arlington' }
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
            <span className="text-neutral-800 font-medium">Poop Scooping Service</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Jacksonville poop scooping services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Poop Scooping Service
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional pet waste removal service for residential yards, commercial properties, 
            and dog parks throughout Jacksonville, Florida. Keep your property clean and sanitary.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">100+</div>
              <div className="text-neutral-200 drop-shadow-md">Happy Pet Owners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Eco-Friendly</div>
              <div className="text-neutral-200 drop-shadow-md">Disposal Methods</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">100%</div>
              <div className="text-neutral-200 drop-shadow-md">Satisfaction Rate</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact?service=poop-scooping"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request Poop Scooping Quote
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
              Professional Pet Waste Removal Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From residential yards to commercial properties and dog parks, we provide comprehensive 
              pet waste removal services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className="w-16 h-16 bg-primary-700 rounded-lg flex items-center justify-center mb-6">
                  {renderIcon(service.iconName)}
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-neutral-700">
                      <FaCheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                Why Choose Jacksonville Services for Pet Waste Removal?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Eco-Friendly Disposal</h3>
                    <p className="text-neutral-600">We use environmentally responsible disposal methods that protect local waterways and soil health.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Flexible Scheduling</h3>
                    <p className="text-neutral-600">Choose from weekly, bi-weekly, or monthly service schedules that fit your lifestyle and budget.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Pet-Safe Practices</h3>
                    <p className="text-neutral-600">All our cleaning products and methods are safe for pets, children, and the environment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Reliable Service</h3>
                    <p className="text-neutral-600">Consistent, dependable service you can count on, with satisfaction guaranteed on every visit.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Service Benefits</h3>
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <FaCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <span className="text-neutral-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Service Types
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide professional pet waste removal services for various property types 
              and community needs throughout Jacksonville.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceTypes.map((type, index) => (
              <div
                key={type}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaDog className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-800">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We proudly serve Jacksonville and surrounding areas with reliable, 
              professional pet waste removal services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Link
                key={area.name}
                href={area.href}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-primary-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors">{area.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Keep Your Property Clean?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today to discuss your pet waste removal needs and get a free, 
            no-obligation quote for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=poop-scooping" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Request Poop Scooping Quote
            </Link>
            <Link href="tel:+19044563851" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Call Now: (904) 456-3851
            </Link>
          </div>
          
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
  )
}
