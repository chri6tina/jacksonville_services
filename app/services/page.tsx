import Image from 'next/image'
import Link from 'next/link'
import { FaCog, FaBroom, FaTrash, FaWater, FaUsers, FaCheck, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'


export const metadata = {
  title: 'Our Services - Jacksonville Services LLC',
  description: 'Comprehensive service solutions including vending machines, commercial cleaning, junk removal, power washing, and neighborhood cleanup in Jacksonville, Florida.',
}

export default function Services() {
  const services = [
    {
      id: 'vending',
      icon: FaCog,
      title: 'Vending Machines',
      subtitle: 'Smart Solutions for Your Business',
      description: 'We provide comprehensive vending machine services for offices, schools, hospitals, and public spaces throughout Jacksonville. Our smart vending solutions keep your team and customers satisfied with fresh snacks, beverages, and essential items.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        '24/7 access to snacks and beverages',
        'Smart inventory management systems',
        'Regular restocking and maintenance',
        'Cashless payment options',
        'Custom branding opportunities',
        'Energy-efficient machines'
      ],
      cta: 'Request Vending Quote',
      ctaHref: '/contact?service=vending'
    },
    {
      id: 'commercial-cleaning',
      icon: FaBroom,
      title: 'Commercial Cleaning',
      subtitle: 'Professional Business Cleaning Solutions',
      description: 'Our commercial cleaning service delivers exceptional results for offices, retail spaces, and industrial facilities throughout Jacksonville. We offer regular maintenance cleaning, deep cleaning, and specialized cleaning programs to maintain your business\'s professional appearance.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      benefits: [
        'Customized cleaning contracts',
        'Eco-friendly cleaning products',
        'Bonded and insured cleaning teams',
        'Flexible scheduling for business hours',
        'Satisfaction guaranteed',
        'Specialized facility cleaning'
      ],
      cta: 'Request Commercial Cleaning Quote',
      ctaHref: '/contact?service=commercial-cleaning'
    },
    {
      id: 'junk-removal',
      icon: FaTrash,
      title: 'Commercial Junk Removal',
      subtitle: 'Fast and Reliable Business Cleanup',
      description: 'Need to clear out unwanted items from your business? Our commercial junk removal service handles everything from office furniture and equipment to construction debris and warehouse waste. We\'re committed to responsible disposal and recycling whenever possible.',
      image: 'https://images.unsplash.com/photo-1581578731548-cf97c149e39e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        'Same-day service available',
        'Full-service removal and cleanup',
        'Responsible disposal practices',
        'No hidden fees or charges',
        'Commercial and industrial service',
        'Construction debris removal'
      ],
      cta: 'Request Junk Removal Quote',
      ctaHref: '/contact?service=junk-removal'
    },
    {
      id: 'power-washing',
      icon: FaWater,
      title: 'Commercial Power Washing',
      subtitle: 'Restore Your Business Property\'s Appeal',
      description: 'Transform your business property\'s appearance with our professional commercial power washing service. We clean parking lots, sidewalks, building exteriors, and commercial structures using the latest equipment and eco-friendly cleaning solutions.',
      image: 'https://images.unsplash.com/photo-1581578731548-cf97c149e39e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        'High-pressure cleaning technology',
        'Safe for all surface types',
        'Eco-friendly cleaning solutions',
        'Commercial and industrial service',
        'Scheduled maintenance contracts',
        'Immediate visual results'
      ],
      cta: 'Request Power Washing Quote',
      ctaHref: '/contact?service=power-washing'
    },
    {
      id: 'neighborhood-cleanup',
      icon: FaUsers,
      title: 'Neighborhood Cleanup',
      subtitle: 'Community-Focused Cleanup Solutions',
      description: 'Keep your community looking pristine with our specialized neighborhood cleanup services. We work with HOAs, property management companies, and community organizations to maintain clean, attractive neighborhoods throughout Jacksonville.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      benefits: [
        'Common area maintenance',
        'Landscape cleanup services',
        'Trash and debris removal',
        'Event cleanup services',
        'Scheduled maintenance programs',
        'HOA and property manager partnerships'
      ],
      cta: 'Request Neighborhood Cleanup Quote',
      ctaHref: '/contact?service=neighborhood-cleanup'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Jacksonville skyline"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Our Services
          </h1>

                           <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                   From professional commercial cleaning to vending solutions and neighborhood cleanup, we provide comprehensive service solutions 
                   to meet all your business and community needs in Jacksonville, Florida.
                 </p>

                    {/* Service Count */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">5</div>
              <div className="text-neutral-200 drop-shadow-md">Service Divisions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">200+</div>
              <div className="text-neutral-200 drop-shadow-md">Corporate Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">5+</div>
              <div className="text-neutral-200 drop-shadow-md">Years Experience</div>
            </div>
          </div>



          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 mx-auto" style={{ maxWidth: 'fit-content' }}>
            <Link
              href="/contact"
              className="bg-white text-primary-700 hover:bg-blue-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#vending"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-custom">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="mb-24 last:mb-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
              }`}>
                {/* Content */}
                <div
                  className={index % 2 === 0 ? '' : 'lg:col-start-2'}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <Link href={`/services/${service.id}`} className="hover:text-primary-600 transition-colors">
                      <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
                        {service.title}
                      </h2>
                    </Link>
                  </div>
                  <p className="text-xl text-primary-600 font-semibold mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-lg text-neutral-600 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-4">Key Benefits:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-3">
                          <FaCheck className="w-5 h-5 text-coastal-600 flex-shrink-0" />
                          <span className="text-neutral-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={service.ctaHref} className="btn-primary text-center">
                      {service.cta}
                    </Link>
                    <Link href={`/services/${service.id}`} className="btn-outline text-center">
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={index % 2 === 0 ? 'lg:col-start-2' : ''}
                >
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-xl"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              We proudly serve Jacksonville and surrounding areas with reliable, professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Downtown Jacksonville',
              'Riverside/Avondale',
              'San Marco',
              'Beaches',
              'Mandarin',
              'Orange Park',
              'Atlantic Beach',
              'Neptune Beach'
            ].map((area, index) => (
              <div
                key={area}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today to discuss your service needs and get a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Quote
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Service
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-neutral-200">
            <div className="flex items-center space-x-2">
              <FaPhone className="w-5 h-5" />
              <span>(904) 555-0123</span>
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
