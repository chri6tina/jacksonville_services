import Link from 'next/link'
import Image from 'next/image'
import { FaWater, FaBuilding, FaIndustry, FaTruck, FaShieldAlt, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLeaf } from 'react-icons/fa'

export const metadata = {
  title: 'Commercial Power Washing Jacksonville FL | Business & Industrial Pressure Washing',
  description: 'Professional commercial power washing services in Jacksonville, FL. Expert building cleaning, parking lot cleaning, industrial pressure washing, and facility maintenance. Get your free commercial power washing quote today.',
  keywords: 'commercial power washing Jacksonville, business pressure washing Jacksonville, industrial power washing Jacksonville, building cleaning Jacksonville, parking lot cleaning Jacksonville, commercial pressure washing Jacksonville FL',
  openGraph: {
    title: 'Commercial Power Washing Jacksonville FL | Business & Industrial Pressure Washing',
    description: 'Professional commercial power washing services in Jacksonville, FL. Expert building cleaning, parking lot cleaning, industrial pressure washing, and facility maintenance.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function CommercialPowerWashing() {
  const services = [
    {
      title: 'Building Exterior Cleaning',
      description: 'Professional cleaning for commercial buildings, offices, and retail facilities',
      icon: FaBuilding,
      features: ['Building facades', 'Windows and glass', 'Awnings and signage', 'Exterior walls']
    },
    {
      title: 'Parking Lot & Driveway Cleaning',
      description: 'Heavy-duty cleaning for parking lots, driveways, and commercial entrances',
      icon: FaWater,
      features: ['Oil stain removal', 'Gum removal', 'Graffiti removal', 'Surface restoration']
    },
    {
      title: 'Industrial Equipment Cleaning',
      description: 'Specialized cleaning for manufacturing equipment and industrial facilities',
      icon: FaIndustry,
      features: ['Machinery cleaning', 'Equipment maintenance', 'Safety compliance', 'Industrial surfaces']
    },
    {
      title: 'Facility Maintenance Programs',
      description: 'Scheduled maintenance cleaning for ongoing facility upkeep',
      icon: FaTruck,
      features: ['Regular maintenance', 'Seasonal cleaning', 'Preventive care', 'Quality assurance']
    }
  ]

  const benefits = [
    'Advanced pressure washing technology for superior results',
    'Eco-friendly cleaning solutions and practices',
    'Licensed and insured power washing professionals',
    'Flexible scheduling to minimize business disruption',
    'Comprehensive facility maintenance programs',
    'Immediate visual results and long-lasting cleanliness'
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

  const surfaces = [
    'Commercial Buildings',
    'Parking Lots & Driveways',
    'Industrial Equipment',
    'Retail Storefronts',
    'Medical Facilities',
    'Educational Buildings',
    'Government Facilities',
    'Warehouse Exteriors'
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
            <span className="text-neutral-800 font-medium">Commercial Power Washing</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Jacksonville commercial power washing services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Commercial Power Washing
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional commercial power washing and pressure cleaning services for businesses, 
            corporations, and industrial facilities throughout Jacksonville, Florida.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Advanced</div>
              <div className="text-neutral-200 drop-shadow-md">Technology</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Eco-Friendly</div>
              <div className="text-neutral-200 drop-shadow-md">Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Immediate</div>
              <div className="text-neutral-200 drop-shadow-md">Results</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact?service=power-washing"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request Power Washing Quote
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
              Comprehensive Commercial Power Washing Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From building exteriors to parking lots, we provide comprehensive 
              power washing services tailored to your facility and business requirements.
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
                Why Choose Jacksonville Services for Commercial Power Washing?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Advanced Technology</h3>
                    <p className="text-neutral-600">State-of-the-art pressure washing equipment designed for commercial and industrial applications with superior results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Eco-Friendly Solutions</h3>
                    <p className="text-neutral-600">Environmentally responsible cleaning products and practices that protect your facility and the environment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Professional Expertise</h3>
                    <p className="text-neutral-600">Licensed and insured power washing professionals with extensive commercial and industrial experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Commercial Power Washing Benefits</h3>
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
              Our commercial power washing expertise spans across diverse industries, 
              providing specialized solutions for each sector's unique cleaning requirements.
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

      {/* Surfaces We Clean */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Surfaces We Clean
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From commercial buildings to industrial equipment, we clean all types of 
              surfaces with professional power washing expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {surfaces.map((surface, index) => (
              <div
                key={surface}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaWater className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-800">{surface}</h3>
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
              professional commercial power washing services.
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
            Ready to Restore Your Facility's Appeal?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today to discuss your commercial power washing needs and get a free, 
            no-obligation quote for your facility restoration project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=power-washing" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Request Power Washing Quote
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
              <span>info@jacksonvilleservices.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
