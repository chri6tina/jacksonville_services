import Link from 'next/link'
import Image from 'next/image'
import { FaBroom, FaBuilding, FaHospital, FaIndustry, FaShieldAlt, FaClock, FaUsers, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'Arlington Commercial Cleaning Services Jacksonville FL | Office Cleaning Arlington',
  description: 'Expert commercial cleaning services in Arlington, Jacksonville FL. Specializing in office buildings, medical facilities, and retail spaces. Trusted by 50+ Arlington businesses. Free quotes available.',
  keywords: 'Arlington commercial cleaning Jacksonville, Arlington office cleaning, Arlington medical facility cleaning, Arlington retail cleaning, Arlington business cleaning Jacksonville FL, Arlington janitorial services',
  openGraph: {
    title: 'Arlington Commercial Cleaning Services Jacksonville FL | Office Cleaning Arlington',
    description: 'Expert commercial cleaning services in Arlington, Jacksonville FL. Specializing in office buildings, medical facilities, and retail spaces. Trusted by 50+ Arlington businesses.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://jacksonvilleservices.com/services/commercial-cleaning/locations/arlington'
  }
}

export default function ArlingtonCommercialCleaning() {
  const arlingtonAreas = [
    'Arlington Business District',
    'Arlington Heights',
    'Arlington Manor',
    'Arlington Gardens',
    'Arlington Ridge',
    'Arlington Woods',
    'Arlington Forest',
    'Arlington Hills',
    'Arlington Park'
  ]

  const services = [
    {
      title: 'Medical Facility Cleaning',
      description: 'Specialized HIPAA-compliant cleaning for Arlington\'s growing medical district, including Arlington Medical Center and surrounding clinics',
      icon: FaHospital,
      features: ['HIPAA compliant protocols', 'Medical equipment sanitization', 'Infection control standards', 'Sterile environment maintenance', 'Biohazard waste handling']
    },
    {
      title: 'Corporate Office Cleaning',
      description: 'Professional office cleaning for Arlington\'s business district, serving law firms, insurance companies, and professional services',
      icon: FaBuilding,
      features: ['Daily janitorial services', 'Executive suite cleaning', 'Conference room maintenance', 'Break room sanitization', 'Reception area upkeep']
    },
    {
      title: 'Retail & Shopping Center Cleaning',
      description: 'Comprehensive cleaning for Arlington\'s retail spaces, including Arlington Square and local shopping centers',
      icon: FaBroom,
      features: ['Sales floor maintenance', 'Fitting room sanitization', 'Display case cleaning', 'Customer area upkeep', 'Restroom sanitization']
    },
    {
      title: 'Educational Facility Cleaning',
      description: 'Specialized cleaning for Arlington\'s schools and educational institutions, ensuring safe learning environments',
      icon: FaIndustry,
      features: ['Classroom sanitization', 'Cafeteria cleaning', 'Library maintenance', 'Administrative office cleaning', 'Playground equipment sanitization']
    }
  ]

  const benefits = [
    'Serving Arlington since 2018 with 50+ satisfied business clients',
    'Specialized expertise in Arlington\'s medical and professional districts',
    'Flexible scheduling around Arlington business hours and traffic patterns',
    'Eco-friendly cleaning products safe for Arlington\'s family-friendly environment',
    '100% satisfaction guarantee with Arlington-specific quality standards',
    '24/7 emergency cleaning services for Arlington businesses'
  ]

  const localTestimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      business: 'Arlington Medical Center',
      quote: 'Jacksonville Services has been cleaning our medical facility for 3 years. Their HIPAA compliance and attention to detail in our sterile environments is exceptional.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      business: 'Arlington Law Group',
      quote: 'Professional, reliable, and thorough. They understand the unique needs of our law firm and maintain our office to the highest standards.',
      rating: 5
    },
    {
      name: 'Jennifer Rodriguez',
      business: 'Arlington Square Management',
      quote: 'Our retail tenants consistently praise the cleanliness of common areas. Jacksonville Services keeps our shopping center spotless.',
      rating: 5
    }
  ]

  const localStats = {
    businessesServed: '50+',
    yearsInArlington: '6+',
    satisfactionRate: '100%',
    emergencyResponse: '30 min'
  }

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jacksonville Services - Arlington Commercial Cleaning",
    "description": "Professional commercial cleaning services in Arlington, Jacksonville FL. Specializing in medical facilities, corporate offices, and retail spaces.",
    "url": "https://jacksonvilleservices.com/services/commercial-cleaning/locations/arlington",
    "telephone": "+19044563851",
    "email": "support@jacksonvilleservices.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Arlington",
      "addressLocality": "Jacksonville",
      "addressRegion": "FL",
      "postalCode": "32211",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.3322",
      "longitude": "-81.6557"
    },
    "areaServed": [
      "Arlington Heights",
      "Arlington Manor", 
      "Arlington Gardens",
      "Arlington Ridge",
      "Arlington Woods",
      "Arlington Forest",
      "Arlington Hills",
      "Arlington Park"
    ],
    "serviceType": "Commercial Cleaning Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Arlington Commercial Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medical Facility Cleaning",
            "description": "HIPAA-compliant cleaning for Arlington medical facilities"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Office Cleaning",
            "description": "Professional office cleaning for Arlington businesses"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50"
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
            <span className="text-neutral-800 font-medium">Arlington</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Arlington commercial cleaning services Jacksonville"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Arlington Commercial Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional commercial cleaning services for Arlington businesses, corporations, and government facilities in Jacksonville, Florida. 
            Delivering enterprise-grade cleanliness and reliability.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{localStats.businessesServed}</div>
              <div className="text-neutral-200 drop-shadow-md">Arlington Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{localStats.yearsInArlington}</div>
              <div className="text-neutral-200 drop-shadow-md">Years in Arlington</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{localStats.satisfactionRate}</div>
              <div className="text-neutral-200 drop-shadow-md">Satisfaction Rate</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact?service=commercial-cleaning&location=arlington"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request Arlington Quote
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

      {/* Arlington Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Arlington Commercial Cleaning Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Serving Arlington's diverse business community with professional commercial cleaning solutions. From the Arlington Business District 
              to industrial facilities, we keep your commercial space pristine and professional.
            </p>
          </div>
        </div>
      </section>

      {/* Arlington Areas Served */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Arlington Areas We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide comprehensive commercial cleaning services throughout Arlington's business districts and commercial areas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {arlingtonAreas.map((area, index) => (
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
              Arlington Commercial Cleaning Services
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
              Industries We Serve in Arlington
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our commercial cleaning expertise spans across diverse industries in Arlington, 
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

      {/* Arlington Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              What Arlington Businesses Say About Us
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hear from our satisfied Arlington clients about their experience with our commercial cleaning services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {localTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaCheckCircle key={i} className="w-5 h-5 text-primary-600 mr-1" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-600">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Arlington */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Why Choose Us for Arlington Commercial Cleaning?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Local Arlington Expertise</h3>
                  <p className="text-neutral-600">We understand Arlington's business landscape and work closely with local companies and facility managers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Flexible Scheduling</h3>
                  <p className="text-neutral-600">We work around Arlington business schedules, including early morning, evening, and weekend services when needed.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Comprehensive Solutions</h3>
                  <p className="text-neutral-600">From routine maintenance to emergency cleanup, we handle all aspects of Arlington commercial facility maintenance.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Licensed & Insured</h3>
                  <p className="text-neutral-600">Fully licensed and insured for your peace of mind and protection in Arlington commercial facilities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Eco-Friendly Practices</h3>
                  <p className="text-neutral-600">We use environmentally safe cleaning products and sustainable disposal methods throughout Arlington.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Competitive Pricing</h3>
                  <p className="text-neutral-600">Transparent, competitive pricing with no hidden fees or surprise charges for Arlington commercial services.</p>
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
            Ready to Transform Your Arlington Facility?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your Arlington commercial cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=commercial-cleaning&location=arlington" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Arlington Quote
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
