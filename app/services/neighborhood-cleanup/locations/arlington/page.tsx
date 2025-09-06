import Link from 'next/link'
import Image from 'next/image'
import { FaUsers, FaBuilding, FaTrash, FaWater, FaCalendarAlt, FaShieldAlt, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'Arlington Neighborhood Cleanup Services Jacksonville FL | HOA Cleaning Arlington',
  description: 'Professional neighborhood cleanup services in Arlington, Jacksonville FL. HOA cleaning, community maintenance, and property management cleanup solutions in Arlington area.',
  keywords: 'Arlington neighborhood cleanup Jacksonville, Arlington HOA cleaning, Arlington community cleanup, Arlington property management cleaning, Arlington neighborhood maintenance Jacksonville FL',
  openGraph: {
    title: 'Arlington Neighborhood Cleanup Services Jacksonville FL | HOA Cleaning Arlington',
    description: 'Professional neighborhood cleanup services in Arlington, Jacksonville FL. HOA cleaning, community maintenance, and property management cleanup solutions.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function ArlingtonNeighborhoodCleanup() {
  const arlingtonAreas = [
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
      title: 'HOA Common Area Cleaning',
      description: 'Regular maintenance of Arlington HOA common areas, clubhouses, and recreational facilities',
      icon: FaBuilding,
      features: ['Clubhouse cleaning', 'Pool area maintenance', 'Playground upkeep', 'Community center cleaning']
    },
    {
      title: 'Landscape & Grounds Maintenance',
      description: 'Professional landscaping and grounds cleanup throughout Arlington neighborhoods',
      icon: FaCheckCircle,
      features: ['Leaf removal', 'Debris cleanup', 'Entrance maintenance', 'Common area landscaping']
    },
    {
      title: 'Event & Community Cleanup',
      description: 'Post-event cleanup services for Arlington community gatherings and special events',
      icon: FaCalendarAlt,
      features: ['Festival cleanup', 'Community event cleanup', 'Holiday decoration removal', 'Special event preparation']
    },
    {
      title: 'Power Washing Services',
      description: 'High-pressure cleaning of Arlington sidewalks, signs, and community structures',
      icon: FaWater,
      features: ['Sidewalk cleaning', 'Community sign cleaning', 'Playground equipment cleaning', 'Entrance way cleaning']
    }
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
            <Link href="/services/neighborhood-cleanup" className="hover:text-primary-600 transition-colors">Neighborhood Cleanup</Link>
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
            alt="Arlington neighborhood cleanup services Jacksonville"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Arlington Neighborhood Cleanup
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Professional neighborhood cleanup services for Arlington HOAs, property managers, and community organizations in Jacksonville, Florida. 
            Keeping Arlington communities clean and attractive.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">15+</div>
              <div className="text-neutral-200 drop-shadow-md">Arlington Communities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">100%</div>
              <div className="text-neutral-200 drop-shadow-md">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
              <div className="text-neutral-200 drop-shadow-md">Emergency Service</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact?service=neighborhood-cleanup&location=arlington"
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
              Arlington Neighborhood Cleanup Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Serving Arlington's diverse neighborhoods with professional cleanup services. From historic Arlington Heights 
              to modern Arlington Ridge, we keep your community looking pristine year-round.
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
              We provide comprehensive neighborhood cleanup services throughout Arlington's residential communities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              Arlington Neighborhood Cleanup Services
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

      {/* Why Choose Us for Arlington */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Why Choose Us for Arlington Neighborhood Cleanup?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Local Arlington Expertise</h3>
                  <p className="text-neutral-600">We understand Arlington's unique community needs and work closely with local HOA boards and property managers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Flexible Scheduling</h3>
                  <p className="text-neutral-600">We work around Arlington community schedules, including early morning and weekend services when needed.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Comprehensive Solutions</h3>
                  <p className="text-neutral-600">From routine maintenance to emergency cleanup, we handle all aspects of Arlington neighborhood maintenance.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Licensed & Insured</h3>
                  <p className="text-neutral-600">Fully licensed and insured for your peace of mind and protection in Arlington communities.</p>
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
                  <p className="text-neutral-600">Transparent, competitive pricing with no hidden fees or surprise charges for Arlington services.</p>
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
            Ready to Keep Your Arlington Neighborhood Clean?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your Arlington community's cleanup needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact?service=neighborhood-cleanup&location=arlington" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
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
