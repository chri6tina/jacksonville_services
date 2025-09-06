import Link from 'next/link'
import Image from 'next/image'
import { FaCog, FaBuilding, FaHospital, FaIndustry, FaShieldAlt, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLeaf, FaCreditCard } from 'react-icons/fa'

export const metadata = {
  title: 'Vending Machine Services Jacksonville FL | Smart Business Vending Solutions',
  description: 'Professional vending machine services in Jacksonville, FL. Smart vending solutions for offices, schools, hospitals, and businesses. Inventory management, maintenance, and cashless payment options. Get your free vending service quote today.',
  keywords: 'vending machine services Jacksonville, smart vending Jacksonville, office vending Jacksonville, school vending Jacksonville, hospital vending Jacksonville, business vending Jacksonville FL, vending machine maintenance Jacksonville',
  openGraph: {
    title: 'Vending Machine Services Jacksonville FL | Smart Business Vending Solutions',
    description: 'Professional vending machine services in Jacksonville, FL. Smart vending solutions for offices, schools, hospitals, and businesses.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function VendingMachines() {
  const services = [
    {
      title: 'Smart Vending Solutions',
      description: 'Advanced vending machines with inventory management and cashless payment options',
      icon: FaCog,
      features: ['Smart inventory tracking', 'Cashless payment systems', 'Real-time monitoring', 'Automated restocking alerts']
    },
    {
      title: 'Office & Corporate Vending',
      description: 'Professional vending services for corporate offices and business facilities',
      icon: FaBuilding,
      features: ['Break room solutions', 'Healthy snack options', 'Beverage machines', 'Employee satisfaction programs']
    },
    {
      title: 'Healthcare Facility Vending',
      description: 'Specialized vending for hospitals, clinics, and medical facilities',
      icon: FaHospital,
      features: ['24/7 availability', 'Medical staff support', 'Patient family convenience', 'Sanitary vending solutions']
    },
    {
      title: 'Educational Institution Vending',
      description: 'Vending services designed for schools, colleges, and universities',
      icon: FaIndustry,
      features: ['Student-friendly options', 'Educational facility support', 'Campus convenience', 'Healthy alternatives']
    }
  ]

  const benefits = [
    'Customized vending contracts for your business needs',
    'Smart inventory management and monitoring systems',
    'Cashless payment options including credit cards and mobile payments',
    'Regular maintenance and restocking services',
    'Flexible product selection and customization',
    '24/7 customer support and emergency service'
  ]

  const industries = [
    'Corporate Offices',
    'Healthcare Facilities',
    'Educational Institutions',
    'Manufacturing & Industrial',
    'Retail & Shopping Centers',
    'Government Buildings',
    'Hotels & Hospitality',
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

  const vendingTypes = [
    'Snack Vending Machines',
    'Beverage Vending Machines',
    'Combination Machines',
    'Healthy Food Options',
    'Specialty Product Machines',
    'Micro-Market Solutions',
    'Smart Fridge Systems',
    'Custom Branded Machines'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Jacksonville vending machine services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Smart Vending Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional vending machine services for businesses, corporations, and institutions 
            throughout Jacksonville, Florida. Smart solutions for modern workplaces.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Smart</div>
              <div className="text-neutral-200 drop-shadow-md">Technology</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
              <div className="text-neutral-200 drop-shadow-md">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">100%</div>
              <div className="text-neutral-200 drop-shadow-md">Reliability</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact?service=vending"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request Vending Quote
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
              Comprehensive Vending Machine Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From smart vending technology to traditional machines, we provide comprehensive 
              vending solutions tailored to your business and facility requirements.
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
                Why Choose Jacksonville Services for Vending Solutions?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Smart Technology Integration</h3>
                    <p className="text-neutral-600">Advanced vending machines with real-time monitoring, inventory management, and cashless payment systems for modern businesses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Specialized Vending Expertise</h3>
                    <p className="text-neutral-600">Partnering with <a href="https://jacksonvillevendingmachines.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-medium">Jacksonville Vending Machines</a> for comprehensive vending solutions including micro-markets, smart vending technology, and specialized services throughout Jacksonville and surrounding areas.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Customized Business Solutions</h3>
                    <p className="text-neutral-600">Tailored vending programs designed specifically for your facility, staff preferences, and business requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Professional Service & Support</h3>
                    <p className="text-neutral-600">Licensed and insured vending professionals with extensive commercial experience and 24/7 customer support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Vending Service Benefits</h3>
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
              Our vending machine expertise spans across diverse industries, 
              providing specialized solutions for each sector's unique needs.
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

      {/* Types of Vending Machines */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Types of Vending Machines
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From traditional snack machines to smart micro-markets, we offer 
              a wide range of vending solutions for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {vendingTypes.map((vendingType, index) => (
              <div
                key={vendingType}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaCog className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-800">{vendingType}</h3>
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
              professional vending machine services.
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
            Ready to Upgrade Your Vending Experience?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today to discuss your vending machine needs and get a free, 
            no-obligation quote for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=vending" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Request Vending Quote
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

