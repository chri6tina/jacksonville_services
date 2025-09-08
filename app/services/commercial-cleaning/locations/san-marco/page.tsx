import Link from 'next/link'
import Image from 'next/image'
import { FaBroom, FaBuilding, FaHospital, FaIndustry, FaShieldAlt, FaClock, FaUsers, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'San Marco Commercial Cleaning Services Jacksonville FL | Office Cleaning San Marco',
  description: 'Historic district commercial cleaning services in San Marco Jacksonville FL. Specializing in historic buildings, art galleries, and cultural venues. Preserving San Marco\'s charm.',
  keywords: 'San Marco commercial cleaning Jacksonville, San Marco office cleaning, historic building cleaning, art gallery cleaning Jacksonville FL, San Marco cultural venue cleaning',
  openGraph: {
    title: 'San Marco Commercial Cleaning Services Jacksonville FL | Office Cleaning San Marco',
    description: 'Historic district commercial cleaning services in San Marco Jacksonville FL. Specializing in historic buildings, art galleries, and cultural venues.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://jacksonvilleservices.com/services/commercial-cleaning/locations/san-marco'
  }
}

export default function SanMarcoCommercialCleaning() {
  const sanMarcoAreas = [
    'San Marco Square',
    'San Marco Boulevard',
    'Hendricks Avenue',
    'Atlantic Boulevard',
    'San Marco Business District',
    'San Marco Historic District',
    'San Marco Arts District',
    'San Marco Park',
    'San Marco Station'
  ]

  const services = [
    {
      title: 'Office Building Cleaning',
      description: 'Comprehensive cleaning for San Marco corporate offices, law firms, and professional services',
      icon: FaBuilding,
      features: ['Daily janitorial services', 'Conference room cleaning', 'Break room maintenance', 'Reception area upkeep']
    },
    {
      title: 'Retail Space Cleaning',
      description: 'Professional cleaning for San Marco retail stores, boutiques, and commercial spaces',
      icon: FaBroom,
      features: ['Sales floor cleaning', 'Fitting room maintenance', 'Display case cleaning', 'Customer area upkeep']
    },
    {
      title: 'Healthcare Facility Cleaning',
      description: 'Specialized cleaning for San Marco hospitals, clinics, and medical offices',
      icon: FaHospital,
      features: ['HIPAA compliant cleaning', 'Infection control protocols', 'Medical equipment cleaning', 'Sterile environment maintenance']
    },
    {
      title: 'Restaurant & Hospitality Cleaning',
      description: 'Specialized cleaning for San Marco restaurants, cafes, and hospitality venues',
      icon: FaIndustry,
      features: ['Kitchen deep cleaning', 'Dining area maintenance', 'Health code compliance', 'Equipment sanitization']
    }
  ]

  const benefits = [
    'Customized cleaning contracts for San Marco businesses',
    'Bonded and insured cleaning professionals',
    'Flexible scheduling to minimize business disruption',
    'Eco-friendly cleaning products and practices',
    'Quality assurance and satisfaction guarantees',
    '24/7 emergency cleaning services available'
  ]

  const industries = [
    'Professional Services',
    'Retail & Boutiques',
    'Healthcare & Medical',
    'Restaurants & Cafes',
    'Art Galleries',
    'Legal Services',
    'Real Estate',
    'Entertainment Venues'
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
            <span className="text-neutral-800 font-medium">San Marco</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="San Marco commercial cleaning services Jacksonville"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            San Marco Commercial Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional commercial cleaning services for San Marco businesses, boutiques, and professional services in Jacksonville, Florida. 
            Delivering enterprise-grade cleanliness and reliability in historic districts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">65+</div>
              <div className="text-neutral-200 drop-shadow-md">San Marco Businesses</div>
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
              href="/contact?service=commercial-cleaning&location=san-marco"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request San Marco Quote
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

      {/* San Marco Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              San Marco Commercial Cleaning Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Serving San Marco's vibrant business community with professional commercial cleaning solutions. From the historic San Marco Square 
              to the trendy Arts District, we keep your commercial space pristine and professional.
            </p>
          </div>
        </div>
      </section>

      {/* San Marco Areas Served */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              San Marco Areas We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide comprehensive commercial cleaning services throughout San Marco's business districts and commercial areas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {sanMarcoAreas.map((area, index) => (
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
              San Marco Commercial Cleaning Services
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
              Industries We Serve in San Marco
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our commercial cleaning expertise spans across diverse industries in San Marco, 
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

      {/* Why Choose Us for San Marco */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Why Choose Us for San Marco Commercial Cleaning?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Historic District Expertise</h3>
                  <p className="text-neutral-600">We understand San Marco's unique historic character and work closely with local businesses and property managers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Flexible Scheduling</h3>
                  <p className="text-neutral-600">We work around San Marco business schedules, including early morning, evening, and weekend services when needed.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Comprehensive Solutions</h3>
                  <p className="text-neutral-600">From routine maintenance to emergency cleanup, we handle all aspects of San Marco commercial facility maintenance.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Licensed & Insured</h3>
                  <p className="text-neutral-600">Fully licensed and insured for your peace of mind and protection in San Marco commercial facilities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Eco-Friendly Practices</h3>
                  <p className="text-neutral-600">We use environmentally safe cleaning products and sustainable disposal methods throughout San Marco.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Competitive Pricing</h3>
                  <p className="text-neutral-600">Transparent, competitive pricing with no hidden fees or surprise charges for San Marco commercial services.</p>
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
            Ready to Transform Your San Marco Facility?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your San Marco commercial cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=commercial-cleaning&location=san-marco" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get San Marco Quote
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
