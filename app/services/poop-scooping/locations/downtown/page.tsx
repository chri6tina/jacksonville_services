import Link from 'next/link'
import Image from 'next/image'
import { FaDog, FaHome, FaBuilding, FaTree, FaCalendarAlt, FaShieldAlt, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'Downtown Jacksonville Dog Poop Scooping Service | Pet Waste Removal Downtown',
  description: 'Professional dog poop scooping service in Downtown Jacksonville FL. Regular pet waste removal for apartments, condos, and urban properties in Downtown area.',
  keywords: 'Downtown Jacksonville dog poop scooping, Downtown pet waste removal, Downtown dog waste cleanup, Downtown apartment poop service, Downtown condo pet cleaning Jacksonville FL',
  openGraph: {
    title: 'Downtown Jacksonville Dog Poop Scooping Service | Pet Waste Removal Downtown',
    description: 'Professional dog poop scooping service in Downtown Jacksonville FL. Regular pet waste removal for apartments, condos, and urban properties.',
    type: 'website',
    locale: 'en_US',
  },
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'home':
      return <FaHome className="w-8 h-8 text-white" />
    case 'building':
      return <FaBuilding className="w-8 h-8 text-white" />
    case 'tree':
      return <FaTree className="w-8 h-8 text-white" />
    case 'dog':
      return <FaDog className="w-8 h-8 text-white" />
    default:
      return <FaDog className="w-8 h-8 text-white" />
  }
}

export default function DowntownPoopScooping() {
  const downtownAreas = [
    'Brooklyn',
    'LaVilla',
    'Springfield',
    'Eastside',
    'Downtown Core',
    'Southbank',
    'Riverside Arts Market',
    'Hemming Park District'
  ]

  const services = [
    {
      title: 'Urban Apartment Complex Service',
      description: 'Regular pet waste removal for Downtown Jacksonville apartment buildings and condominiums',
      iconName: 'building',
      features: ['High-rise pet areas', 'Rooftop dog runs', 'Common area cleanup', 'Elevator-friendly service']
    },
    {
      title: 'Downtown Dog Park Maintenance',
      description: 'Professional cleaning and maintenance for Downtown dog parks and pet exercise areas',
      iconName: 'tree',
      features: ['Daily park maintenance', 'Sanitization services', 'Equipment cleaning', 'Community partnerships']
    },
    {
      title: 'Historic District Pet Service',
      description: 'Gentle, preservation-focused pet waste removal for Downtown\'s historic residential areas',
      iconName: 'home',
      features: ['Historic building cleanup', 'Preservation-friendly methods', 'Heritage site maintenance', 'Period-appropriate service']
    },
    {
      title: 'Commercial Property Pet Service',
      description: 'Pet waste removal for Downtown\'s mixed-use properties and commercial buildings',
      iconName: 'dog',
      features: ['Mixed-use property cleaning', 'Retail area pet cleanup', 'Office building service', 'Public plaza maintenance']
    }
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
            <Link href="/services/poop-scooping" className="hover:text-primary-600 transition-colors">Poop Scooping Service</Link>
            <span>/</span>
            <span className="text-neutral-800 font-medium">Downtown</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Downtown Jacksonville dog poop scooping services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Downtown Jacksonville Dog Poop Scooping
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional pet waste removal service for Downtown Jacksonville apartments, condos, and urban properties. 
            Keeping your Downtown community clean and sanitary.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">50+</div>
              <div className="text-neutral-200 drop-shadow-md">Downtown Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">100%</div>
              <div className="text-neutral-200 drop-shadow-md">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Eco-Friendly</div>
              <div className="text-neutral-200 drop-shadow-md">Disposal Methods</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact?service=poop-scooping&location=downtown"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request Downtown Quote
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

      {/* Downtown Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Downtown Jacksonville Pet Waste Removal Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Serving Downtown Jacksonville's urban pet owners with specialized poop scooping services. From high-rise apartments 
              to historic condos, we keep your Downtown property clean and pet-friendly year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Downtown Areas Served */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Downtown Areas We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide comprehensive pet waste removal services throughout Downtown Jacksonville's residential communities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {downtownAreas.map((area, index) => (
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
              Downtown Pet Waste Removal Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  {renderIcon(service.iconName)}
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

      {/* Why Choose Us for Downtown */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Why Choose Us for Downtown Pet Waste Removal?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Urban Pet Expertise</h3>
                  <p className="text-neutral-600">We understand Downtown Jacksonville's unique urban pet needs and work closely with property managers and HOA boards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Flexible Urban Scheduling</h3>
                  <p className="text-neutral-600">We work around Downtown schedules, including early morning and weekend services when needed.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Eco-Friendly Urban Disposal</h3>
                  <p className="text-neutral-600">We use environmentally safe disposal methods that protect Downtown's urban environment.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Licensed & Insured</h3>
                  <p className="text-neutral-600">Fully licensed and insured for your peace of mind and protection in Downtown properties.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Pet-Safe Methods</h3>
                  <p className="text-neutral-600">All our cleaning products and methods are safe for pets, children, and the environment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Competitive Downtown Pricing</h3>
                  <p className="text-neutral-600">Transparent, competitive pricing with no hidden fees or surprise charges for Downtown services.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Trusted Local Partnership</h3>
                  <p className="text-neutral-600">Working with trusted local partners including <a href="https://www.poopscoopjax.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-medium">Poop Rescue</a> for comprehensive pet waste removal services throughout Downtown Jacksonville.</p>
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
            Ready to Keep Your Downtown Property Clean?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your Downtown pet waste removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=poop-scooping&location=downtown" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Downtown Quote
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
