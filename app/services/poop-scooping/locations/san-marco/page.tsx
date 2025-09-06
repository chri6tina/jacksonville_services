import Link from 'next/link'
import Image from 'next/image'
import { FaDog, FaHome, FaBuilding, FaTree, FaCalendarAlt, FaShieldAlt, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'San Marco Jacksonville Dog Poop Scooping Service | Pet Waste Removal San Marco',
  description: 'Professional dog poop scooping service in San Marco Jacksonville FL. Regular pet waste removal for homes, condos, and properties in San Marco area.',
  keywords: 'San Marco Jacksonville dog poop scooping, San Marco pet waste removal, San Marco dog waste cleanup, San Marco poop service, San Marco pet cleaning Jacksonville FL',
  openGraph: {
    title: 'San Marco Jacksonville Dog Poop Scooping Service | Pet Waste Removal San Marco',
    description: 'Professional dog poop scooping service in San Marco Jacksonville FL. Regular pet waste removal for homes, condos, and properties.',
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

export default function SanMarcoPoopScooping() {
  const sanMarcoAreas = [
    'San Marco Square',
    'San Marco Boulevard',
    'Hendricks Avenue',
    'Atlantic Boulevard',
    'San Marco Place',
    'San Marco Park',
    'San Marco Historic District',
    'San Marco Waterfront'
  ]

  const services = [
    {
      title: 'Residential Home Service',
      description: 'Regular pet waste removal for San Marco Jacksonville single-family homes and residential properties',
      iconName: 'home',
      features: ['Backyard cleanup', 'Front yard maintenance', 'Pool area cleaning', 'Garden bed service']
    },
    {
      title: 'San Marco Condo Service',
      description: 'Professional pet waste removal for San Marco condominiums and townhome communities',
      iconName: 'building',
      features: ['Condo common areas', 'Townhome communities', 'HOA partnerships', 'Shared space maintenance']
    },
    {
      title: 'San Marco Park Service',
      description: 'Pet waste removal for San Marco parks, trails, and community recreational areas',
      iconName: 'tree',
      features: ['San Marco Park maintenance', 'Walking trails', 'Community areas', 'Recreation area cleanup']
    },
    {
      title: 'Historic District Service',
      description: 'Specialized pet waste removal for San Marco historic district and waterfront properties',
      iconName: 'dog',
      features: ['Historic home service', 'Waterfront properties', 'Heritage site maintenance', 'Period-appropriate cleaning']
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
            <span className="text-neutral-800 font-medium">San Marco</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="San Marco Jacksonville dog poop scooping services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            San Marco Jacksonville Dog Poop Scooping
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional pet waste removal service for San Marco Jacksonville homes, condos, and residential communities. 
            Keeping your San Marco neighborhood clean and sanitary.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">45+</div>
              <div className="text-neutral-200 drop-shadow-md">San Marco Properties</div>
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
              href="/contact?service=poop-scooping&location=san-marco"
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
              San Marco Jacksonville Pet Waste Removal Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Serving San Marco Jacksonville pet owners with specialized poop scooping services. From San Marco Square to the waterfront, 
              we keep your residential community clean and pet-friendly year-round.
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
              We provide comprehensive pet waste removal services throughout San Marco Jacksonville communities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              San Marco Pet Waste Removal Services
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

      {/* Why Choose Us for San Marco */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Why Choose Us for San Marco Pet Waste Removal?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">San Marco Community Expertise</h3>
                  <p className="text-neutral-600">We understand San Marco Jacksonville's residential community needs and work closely with local HOA boards and property managers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Historic District Service</h3>
                  <p className="text-neutral-600">Specialized service for San Marco's historic district and waterfront properties with preservation-friendly methods.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Eco-Friendly Disposal</h3>
                  <p className="text-neutral-600">We use environmentally safe disposal methods that protect San Marco's beautiful residential environment.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Licensed & Insured</h3>
                  <p className="text-neutral-600">Fully licensed and insured for your peace of mind and protection in San Marco properties.</p>
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
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Competitive San Marco Pricing</h3>
                  <p className="text-neutral-600">Transparent, competitive pricing with no hidden fees or surprise charges for San Marco services.</p>
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
            Ready to Keep Your San Marco Property Clean?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your San Marco pet waste removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=poop-scooping&location=san-marco" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
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
