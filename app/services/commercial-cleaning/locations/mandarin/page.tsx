import Link from 'next/link'
import Image from 'next/image'
import { FaBroom, FaBuilding, FaHospital, FaIndustry, FaShieldAlt, FaClock, FaUsers, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'Mandarin Commercial Cleaning Services Jacksonville FL | Office Cleaning Mandarin',
  description: 'Family-focused commercial cleaning services in Mandarin Jacksonville FL. Specializing in medical facilities, schools, and family-friendly businesses. Serving Mandarin since 2017.',
  keywords: 'Mandarin commercial cleaning Jacksonville, Mandarin office cleaning, Mandarin medical cleaning, Mandarin school cleaning Jacksonville FL, Mandarin family business cleaning',
  openGraph: {
    title: 'Mandarin Commercial Cleaning Services Jacksonville FL | Office Cleaning Mandarin',
    description: 'Family-focused commercial cleaning services in Mandarin Jacksonville FL. Specializing in medical facilities, schools, and family-friendly businesses.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://jacksonvilleservices.com/services/commercial-cleaning/locations/mandarin'
  }
}

export default function MandarinCommercialCleaning() {
  const mandarinAreas = [
    'Mandarin Business District',
    'Mandarin Shopping Center',
    'San Jose Boulevard',
    'Loretto Road',
    'Mandarin Station',
    'Mandarin Gardens',
    'Mandarin Lakes',
    'Mandarin Oaks',
    'Mandarin Park'
  ]

  const services = [
    {
      title: 'Office Building Cleaning',
      description: 'Comprehensive cleaning for Mandarin corporate offices, law firms, and professional services',
      icon: FaBuilding,
      features: ['Daily janitorial services', 'Conference room cleaning', 'Break room maintenance', 'Reception area upkeep']
    },
    {
      title: 'Healthcare Facility Cleaning',
      description: 'Specialized cleaning for Mandarin hospitals, clinics, and medical offices',
      icon: FaHospital,
      features: ['HIPAA compliant cleaning', 'Infection control protocols', 'Medical equipment cleaning', 'Sterile environment maintenance']
    },
    {
      title: 'Retail Space Cleaning',
      description: 'Professional cleaning for Mandarin retail stores, shopping centers, and commercial spaces',
      icon: FaBroom,
      features: ['Sales floor cleaning', 'Fitting room maintenance', 'Display case cleaning', 'Customer area upkeep']
    },
    {
      title: 'Educational Facility Cleaning',
      description: 'Specialized cleaning for Mandarin schools, educational centers, and training facilities',
      icon: FaIndustry,
      features: ['Classroom cleaning', 'Cafeteria maintenance', 'Library upkeep', 'Administrative office cleaning']
    }
  ]

  const benefits = [
    'Customized cleaning contracts for Mandarin businesses',
    'Bonded and insured cleaning professionals',
    'Flexible scheduling to minimize business disruption',
    'Eco-friendly cleaning products and practices',
    'Quality assurance and satisfaction guarantees',
    '24/7 emergency cleaning services available'
  ]

  const industries = [
    'Healthcare & Medical',
    'Professional Services',
    'Retail & Shopping',
    'Educational Institutions',
    'Financial Services',
    'Real Estate',
    'Government Buildings',
    'Community Centers'
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
            <Link href="/services/commercial-cleaning" className="hover:text-primary-600 transition-colors">Commercial Cleaning</Link>
            <span>/</span>
            <span className="text-neutral-800 font-medium">Mandarin</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Mandarin commercial cleaning services Jacksonville"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Mandarin Commercial Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional commercial cleaning services for Mandarin businesses, corporations, and government facilities in Jacksonville, Florida. 
            Delivering enterprise-grade cleanliness and reliability in family-friendly communities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">60+</div>
              <div className="text-neutral-200 drop-shadow-md">Mandarin Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
              <div className="text-neutral-200 drop-shadow-md">Service Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">100%</div>
              <div className="text-neutral-200 drop-shadow-md">Satisfaction Rate</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact?service=commercial-cleaning&location=mandarin"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request Mandarin Quote
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

      {/* Mandarin Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Mandarin Commercial Cleaning Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Serving Mandarin's thriving business community with professional commercial cleaning solutions. From the Mandarin Business District 
              to family-friendly shopping centers, we keep your commercial space pristine and professional.
            </p>
          </div>
        </div>
      </section>

      {/* Mandarin Areas Served */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Mandarin Areas We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide comprehensive commercial cleaning services throughout Mandarin's business districts and commercial areas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {mandarinAreas.map((area, index) => (
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
              Mandarin Commercial Cleaning Services
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

      {/* Industries We Serve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Industries We Serve in Mandarin
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our commercial cleaning expertise spans across diverse industries in Mandarin, 
              providing specialized solutions for each sector's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="bg-neutral-50 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaBuilding className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-800">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Mandarin */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Why Choose Us for Mandarin Commercial Cleaning?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Family-Friendly Community Focus</h3>
                  <p className="text-neutral-600">We understand Mandarin's family-oriented business community and work closely with local businesses and facility managers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Flexible Scheduling</h3>
                  <p className="text-neutral-600">We work around Mandarin business schedules, including early morning, evening, and weekend services when needed.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Comprehensive Solutions</h3>
                  <p className="text-neutral-600">From routine maintenance to emergency cleanup, we handle all aspects of Mandarin commercial facility maintenance.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Licensed & Insured</h3>
                  <p className="text-neutral-600">Fully licensed and insured for your peace of mind and protection in Mandarin commercial facilities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Eco-Friendly Practices</h3>
                  <p className="text-neutral-600">We use environmentally safe cleaning products and sustainable disposal methods throughout Mandarin.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Competitive Pricing</h3>
                  <p className="text-neutral-600">Transparent, competitive pricing with no hidden fees or surprise charges for Mandarin commercial services.</p>
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
            Ready to Transform Your Mandarin Facility?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your Mandarin commercial cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=commercial-cleaning&location=mandarin" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Mandarin Quote
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
