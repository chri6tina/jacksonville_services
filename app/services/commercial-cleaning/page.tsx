import Link from 'next/link'
import Image from 'next/image'
import { FaBroom, FaBuilding, FaHospital, FaIndustry, FaShieldAlt, FaClock, FaUsers, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'Commercial Cleaning Services Jacksonville FL | Professional Business Cleaning',
  description: 'Professional commercial cleaning services in Jacksonville, FL. Expert office cleaning, retail cleaning, industrial cleaning, and healthcare facility cleaning. Get your free commercial cleaning quote today.',
  keywords: 'commercial cleaning Jacksonville, office cleaning Jacksonville, retail cleaning Jacksonville, industrial cleaning Jacksonville, healthcare cleaning Jacksonville, commercial janitorial services Jacksonville, business cleaning Jacksonville FL',
  openGraph: {
    title: 'Commercial Cleaning Services Jacksonville FL | Professional Business Cleaning',
    description: 'Professional commercial cleaning services in Jacksonville, FL. Expert office cleaning, retail cleaning, industrial cleaning, and healthcare facility cleaning.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function CommercialCleaning() {
  const services = [
    {
      title: 'Office Building Cleaning',
      description: 'Comprehensive cleaning for corporate offices, law firms, and professional services',
      icon: FaBuilding,
      features: ['Daily janitorial services', 'Conference room cleaning', 'Break room maintenance', 'Reception area upkeep']
    },
    {
      title: 'Healthcare Facility Cleaning',
      description: 'Specialized cleaning for hospitals, clinics, and medical offices',
      icon: FaHospital,
      features: ['HIPAA compliant cleaning', 'Infection control protocols', 'Medical equipment cleaning', 'Sterile environment maintenance']
    },
    {
      title: 'Industrial Facility Cleaning',
      description: 'Heavy-duty cleaning for warehouses, manufacturing plants, and industrial spaces',
      icon: FaIndustry,
      features: ['Equipment cleaning', 'Floor maintenance', 'Safety compliance', 'Industrial waste management']
    },
    {
      title: 'Retail Space Cleaning',
      description: 'Professional cleaning for retail stores, shopping centers, and commercial spaces',
      icon: FaBroom,
      features: ['Sales floor cleaning', 'Fitting room maintenance', 'Display case cleaning', 'Customer area upkeep']
    }
  ]

  const benefits = [
    'Customized cleaning contracts for your business needs',
    'Bonded and insured cleaning professionals',
    'Flexible scheduling to minimize business disruption',
    'Eco-friendly cleaning products and practices',
    'Quality assurance and satisfaction guarantees',
    '24/7 emergency cleaning services available'
  ]

  const industries = [
    'Healthcare & Medical Facilities',
    'Corporate Offices & Law Firms',
    'Manufacturing & Industrial',
    'Retail & Shopping Centers',
    'Educational Institutions',
    'Financial Services',
    'Government Buildings',
    'Hotels & Hospitality'
  ]

  const serviceAreas = [
    'Downtown Jacksonville',
    'Riverside/Avondale',
    'San Marco',
    'Beaches',
    'Mandarin',
    'Orange Park',
    'Atlantic Beach',
    'Neptune Beach',
    'Ponte Vedra Beach',
    'St. Johns County'
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
            <span className="text-neutral-800 font-medium">Commercial Cleaning</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Jacksonville commercial cleaning services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Commercial Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional commercial cleaning solutions for businesses, corporations, and government facilities throughout Jacksonville, Florida. 
            Delivering enterprise-grade cleanliness and reliability.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">500+</div>
              <div className="text-neutral-200 drop-shadow-md">Commercial Clients</div>
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
              href="/contact?service=commercial-cleaning"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request Commercial Quote
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
              Comprehensive Commercial Cleaning Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From daily janitorial services to specialized facility cleaning, we provide comprehensive 
              cleaning solutions tailored to your industry and business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className="w-16 h-16 bg-primary-700 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
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
                Why Choose Jacksonville Services for Commercial Cleaning?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Enterprise-Grade Reliability</h3>
                    <p className="text-neutral-600">Trusted by Fortune 500 companies and government agencies for consistent, professional cleaning services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Customized Contract Solutions</h3>
                    <p className="text-neutral-600">Tailored cleaning programs designed specifically for your facility, schedule, and business requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Compliance & Safety</h3>
                    <p className="text-neutral-600">Full compliance with industry standards, safety protocols, and regulatory requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Specialized Cleaning Partners</h3>
                    <p className="text-neutral-600">Working with trusted local partners including <a href="https://www.jacksonvillehousecleaningservice.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-medium">Jacksonville House Cleaning Service</a> for residential cleaning and <a href="https://www.jacksonvillejunkremovals.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-medium">Jacksonville Junk Removals</a> for comprehensive cleanup services throughout Jacksonville.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Commercial Cleaning Benefits</h3>
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

      {/* Industries We Serve */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our commercial cleaning expertise spans across diverse industries, 
              providing specialized solutions for each sector's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
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

      {/* Jacksonville Areas Served */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Jacksonville Areas We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide specialized commercial cleaning services throughout Jacksonville's diverse business districts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/services/commercial-cleaning/locations/arlington" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Arlington</h3>
                <p className="text-neutral-600">Professional commercial cleaning services for Arlington's diverse business community</p>
              </div>
            </Link>

            <Link href="/services/commercial-cleaning/locations/downtown" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Downtown</h3>
                <p className="text-neutral-600">Urban commercial cleaning services for Downtown Jacksonville businesses</p>
              </div>
            </Link>

            <Link href="/services/commercial-cleaning/locations/riverside-avondale" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Riverside Avondale</h3>
                <p className="text-neutral-600">Historic district commercial cleaning services for Riverside and Avondale</p>
              </div>
            </Link>

            <Link href="/services/commercial-cleaning/locations/mandarin" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Mandarin</h3>
                <p className="text-neutral-600">Family-friendly commercial cleaning services for Mandarin businesses</p>
              </div>
            </Link>

            <Link href="/services/commercial-cleaning/locations/beaches" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Jacksonville Beaches</h3>
                <p className="text-neutral-600">Coastal commercial cleaning services for Jacksonville's beach areas</p>
              </div>
            </Link>

            <Link href="/services/commercial-cleaning/locations/san-marco" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">San Marco</h3>
                <p className="text-neutral-600">Historic district commercial cleaning services for San Marco businesses</p>
              </div>
            </Link>

            <Link href="/services/commercial-cleaning/locations/orange-park" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Orange Park</h3>
                <p className="text-neutral-600">Suburban commercial cleaning services for Orange Park businesses</p>
              </div>
            </Link>

            <Link href="/services/commercial-cleaning/locations/southside" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Southside</h3>
                <p className="text-neutral-600">Modern suburban commercial cleaning services for Southside businesses</p>
              </div>
            </Link>

            <Link href="/services/commercial-cleaning/locations/baymeadows" className="group">
              <div className="bg-neutral-50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 group-hover:bg-primary-50">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-700">Baymeadows</h3>
                <p className="text-neutral-600">Corporate commercial cleaning services for Baymeadows area</p>
              </div>
            </Link>

            <div className="bg-neutral-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">All Jacksonville Areas</h3>
              <p className="text-neutral-600">Comprehensive commercial cleaning services for all Jacksonville neighborhoods and communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Facility?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today to discuss your commercial cleaning needs and get a free, 
            no-obligation quote for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=commercial-cleaning" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Request Commercial Quote
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
