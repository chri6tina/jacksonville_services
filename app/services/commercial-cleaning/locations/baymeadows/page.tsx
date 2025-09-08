import Link from 'next/link'
import Image from 'next/image'
import { FaBroom, FaBuilding, FaHospital, FaIndustry, FaShieldAlt, FaClock, FaUsers, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'Baymeadows Commercial Cleaning Services Jacksonville FL | Office Cleaning Baymeadows',
  description: 'Corporate commercial cleaning services in Baymeadows Jacksonville FL. Specializing in corporate centers, medical facilities, and professional services. Serving Baymeadows since 2015.',
  keywords: 'Baymeadows commercial cleaning Jacksonville, Baymeadows office cleaning, corporate center cleaning, medical facility cleaning Jacksonville FL, Baymeadows professional services cleaning',
  openGraph: {
    title: 'Baymeadows Commercial Cleaning Services Jacksonville FL | Office Cleaning Baymeadows',
    description: 'Corporate commercial cleaning services in Baymeadows Jacksonville FL. Specializing in corporate centers, medical facilities, and professional services.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://jacksonvilleservices.com/services/commercial-cleaning/locations/baymeadows'
  }
}

export default function BaymeadowsCommercialCleaning() {
  const baymeadowsAreas = [
    'Baymeadows Business District',
    'Baymeadows Way',
    'Baymeadows Road',
    'Gate Parkway',
    'JTB Corridor',
    'Baymeadows Shopping',
    'Baymeadows Station',
    'Baymeadows Medical Center',
    'Baymeadows Corporate Center'
  ]

  const services = [
    {
      title: 'Office Building Cleaning',
      description: 'Comprehensive cleaning for Baymeadows corporate offices, law firms, and professional services',
      icon: FaBuilding,
      features: ['Daily janitorial services', 'Conference room cleaning', 'Break room maintenance', 'Reception area upkeep']
    },
    {
      title: 'Healthcare Facility Cleaning',
      description: 'Specialized cleaning for Baymeadows hospitals, clinics, and medical offices',
      icon: FaHospital,
      features: ['HIPAA compliant cleaning', 'Infection control protocols', 'Medical equipment cleaning', 'Sterile environment maintenance']
    },
    {
      title: 'Retail Space Cleaning',
      description: 'Professional cleaning for Baymeadows retail stores, shopping centers, and commercial spaces',
      icon: FaBroom,
      features: ['Sales floor cleaning', 'Fitting room maintenance', 'Display case cleaning', 'Customer area upkeep']
    },
    {
      title: 'Corporate Center Cleaning',
      description: 'Specialized cleaning for Baymeadows corporate centers and business parks',
      icon: FaIndustry,
      features: ['Lobby maintenance', 'Conference room cleaning', 'Common area upkeep', 'Executive suite cleaning']
    }
  ]

  const benefits = [
    'Customized cleaning contracts for Baymeadows businesses',
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
    'Corporate Centers',
    'Financial Services',
    'Technology Companies',
    'Government Buildings',
    'Educational Institutions'
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
            <span className="text-neutral-800 font-medium">Baymeadows</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Baymeadows commercial cleaning services Jacksonville"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Baymeadows Commercial Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional commercial cleaning services for Baymeadows businesses, corporations, and government facilities in Jacksonville, Florida. 
            Delivering enterprise-grade cleanliness and reliability in corporate communities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">85+</div>
              <div className="text-neutral-200 drop-shadow-md">Baymeadows Businesses</div>
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
              href="/contact?service=commercial-cleaning&location=baymeadows"
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
              Baymeadows Commercial Cleaning Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Serving Baymeadows' thriving corporate community with professional commercial cleaning solutions. From the Baymeadows Business District 
              to the Gate Parkway corridor, we keep your commercial space pristine and professional.
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
              We provide comprehensive commercial cleaning services throughout Baymeadows' business districts and commercial areas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
              Baymeadows Commercial Cleaning Services
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
              Industries We Serve in Baymeadows
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our commercial cleaning expertise spans across diverse industries in Baymeadows, 
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

      {/* Why Choose Us for Baymeadows */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Why Choose Us for Baymeadows Commercial Cleaning?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Corporate Business Expertise</h3>
                  <p className="text-neutral-600">We understand Baymeadows' corporate business environment and work closely with local companies and facility managers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Flexible Scheduling</h3>
                  <p className="text-neutral-600">We work around Baymeadows business schedules, including early morning, evening, and weekend services when needed.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Comprehensive Solutions</h3>
                  <p className="text-neutral-600">From routine maintenance to emergency cleanup, we handle all aspects of Baymeadows commercial facility maintenance.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Licensed & Insured</h3>
                  <p className="text-neutral-600">Fully licensed and insured for your peace of mind and protection in Baymeadows commercial facilities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Eco-Friendly Practices</h3>
                  <p className="text-neutral-600">We use environmentally safe cleaning products and sustainable disposal methods throughout Baymeadows.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Competitive Pricing</h3>
                  <p className="text-neutral-600">Transparent, competitive pricing with no hidden fees or surprise charges for Baymeadows commercial services.</p>
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
            Ready to Transform Your Baymeadows Facility?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your Baymeadows commercial cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=commercial-cleaning&location=baymeadows" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
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
