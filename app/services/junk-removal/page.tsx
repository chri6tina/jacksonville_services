import Link from 'next/link'
import Image from 'next/image'
import { FaTrash, FaBuilding, FaIndustry, FaTruck, FaRecycle, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaShieldAlt } from 'react-icons/fa'

export const metadata = {
  title: 'Commercial Junk Removal Jacksonville FL | Business & Industrial Cleanup',
  description: 'Professional commercial junk removal services in Jacksonville, FL. Expert business cleanup, industrial waste removal, construction debris removal, and facility clearing. Get your free commercial junk removal quote today.',
  keywords: 'commercial junk removal Jacksonville, business junk removal Jacksonville, industrial waste removal Jacksonville, construction debris removal Jacksonville, facility cleanup Jacksonville, commercial waste removal Jacksonville FL',
  openGraph: {
    title: 'Commercial Junk Removal Jacksonville FL | Business & Industrial Cleanup',
    description: 'Professional commercial junk removal services in Jacksonville, FL. Expert business cleanup, industrial waste removal, construction debris removal, and facility clearing.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function CommercialJunkRemoval() {
  const services = [
    {
      title: 'Office & Business Cleanup',
      description: 'Complete facility clearing for offices, retail spaces, and commercial buildings',
      icon: FaBuilding,
      features: ['Office furniture removal', 'Equipment disposal', 'Retail space clearing', 'Storage facility cleanup']
    },
    {
      title: 'Industrial Waste Removal',
      description: 'Heavy-duty waste removal for manufacturing plants and industrial facilities',
      icon: FaIndustry,
      features: ['Manufacturing equipment', 'Industrial materials', 'Hazardous waste disposal', 'Warehouse clearing']
    },
    {
      title: 'Construction Debris Removal',
      description: 'Comprehensive cleanup for construction sites and renovation projects',
      icon: FaTrash,
      features: ['Construction materials', 'Demolition debris', 'Renovation waste', 'Site cleanup']
    },
    {
      title: 'Facility Relocation Services',
      description: 'Complete facility clearing and preparation for business relocations',
      icon: FaTruck,
      features: ['Complete facility clearing', 'Equipment relocation', 'Storage preparation', 'Move-out services']
    }
  ]

  const benefits = [
    'Same-day service available for urgent cleanup needs',
    'Licensed and insured waste removal professionals',
    'Environmentally responsible disposal and recycling',
    'No hidden fees or charges - transparent pricing',
    'Commercial and industrial waste expertise',
    'Flexible scheduling to minimize business disruption'
  ]

  const industries = [
    'Manufacturing & Industrial',
    'Office Buildings & Corporate',
    'Retail & Shopping Centers',
    'Construction & Development',
    'Healthcare Facilities',
    'Educational Institutions',
    'Government Buildings',
    'Warehouses & Distribution'
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

  const wasteTypes = [
    'Office Furniture & Equipment',
    'Industrial Machinery',
    'Construction Materials',
    'Retail Displays & Fixtures',
    'Electronics & Appliances',
    'Manufacturing Waste',
    'Warehouse Inventory',
    'Facility Infrastructure'
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
            <span className="text-neutral-800 font-medium">Commercial Junk Removal</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Jacksonville commercial junk removal services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Commercial Junk Removal
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional commercial junk removal and waste management services for businesses, 
            corporations, and industrial facilities throughout Jacksonville, Florida.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Same Day</div>
              <div className="text-neutral-200 drop-shadow-md">Service Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">100%</div>
              <div className="text-neutral-200 drop-shadow-md">Licensed & Insured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
              <div className="text-neutral-200 drop-shadow-md">Emergency Service</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact?service=junk-removal"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request Junk Removal Quote
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
              Comprehensive Commercial Junk Removal Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From office cleanouts to industrial waste removal, we provide comprehensive 
              junk removal services tailored to your business and facility requirements.
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
                Why Choose Jacksonville Services for Commercial Junk Removal?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Enterprise-Grade Equipment</h3>
                    <p className="text-neutral-600">State-of-the-art trucks and equipment designed to handle large-scale commercial and industrial waste removal projects.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Licensed & Insured Professionals</h3>
                    <p className="text-neutral-600">Fully licensed, bonded, and insured waste removal professionals with extensive commercial experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Environmental Responsibility</h3>
                    <p className="text-neutral-600">Committed to responsible waste disposal and recycling, minimizing environmental impact while maximizing efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Commercial Junk Removal Benefits</h3>
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
              Our commercial junk removal expertise spans across diverse industries, 
              providing specialized solutions for each sector's unique waste management needs.
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

      {/* Types of Waste We Handle */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Types of Commercial Waste We Handle
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From office furniture to industrial machinery, we handle all types of 
              commercial and industrial waste with professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {wasteTypes.map((wasteType, index) => (
              <div
                key={wasteType}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaTrash className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-800">{wasteType}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We proudly serve Jacksonville and surrounding areas with reliable, 
              professional commercial junk removal services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {serviceAreas.map((area, index) => (
              <div
                key={area}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-800">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Clear Your Facility?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today to discuss your commercial junk removal needs and get a free, 
            no-obligation quote for your facility cleanup project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=junk-removal" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Request Junk Removal Quote
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
