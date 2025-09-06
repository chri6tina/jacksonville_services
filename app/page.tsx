import Image from 'next/image'
import Link from 'next/link'
import { FaCog, FaBroom, FaTrash, FaWater } from 'react-icons/fa'

export default function Home() {
  const services = [
            {
          icon: FaBroom,
          title: 'Professional Commercial Cleaning',
          description: 'Expert commercial cleaning for offices, retail spaces, and industrial facilities. We maintain your business\'s professional appearance with reliable, consistent service.',
          href: '/services#commercial-cleaning',
          color: 'bg-emerald-600'
        },
        {
          icon: FaTrash,
          title: 'Junk Removal',
          description: 'Fast and reliable junk removal services. We handle everything from furniture to construction debris with professional efficiency and proper disposal.',
          href: '/services#junk-removal',
          color: 'bg-orange-600'
        },
        {
          icon: FaWater,
          title: 'Power Washing',
          description: 'Professional exterior cleaning and pressure washing services. Restore your property\'s curb appeal with our advanced equipment and expertise.',
          href: '/services#power-washing',
          color: 'bg-cyan-600'
        },
        {
          icon: FaCog,
          title: 'Vending Machines',
          description: 'Smart vending solutions for offices, schools, and public spaces. Our machines are stocked with fresh snacks and beverages, maintained regularly.',
          href: '/services#vending',
          color: 'bg-blue-600'
        }
  ]

  return (
    <div>
      {/* Hero Section */}
      {/* Hero Section with Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/jacksonville hero skyline.png"
            alt="Jacksonville hero skyline"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Jacksonville's Premier Commercial Service Partner
          </h1>
          
                           <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                   Professional commercial services for businesses, corporations, and government contracts.
                   From commercial cleaning to vending solutions, we deliver enterprise-grade reliability.
                 </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 mx-auto" style={{ maxWidth: 'fit-content' }}>
            <Link
              href="/contact"
              className="bg-white text-primary-700 hover:bg-blue-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Request Commercial Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Enterprise Services
            </Link>
          </div>

                             {/* Stats */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                     <div className="text-center">
                       <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">5+</div>
                                            <div className="text-neutral-200 drop-shadow-md">Years in Business</div>
                   </div>
                   <div className="text-center">
                     <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">200+</div>
                     <div className="text-neutral-200 drop-shadow-md">Corporate Clients</div>
                   </div>
                   <div className="text-center">
                     <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">4</div>
                     <div className="text-neutral-200 drop-shadow-md">Service Divisions</div>
                     </div>
                   </div>
        </div>


      </section>

      {/* Services Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Comprehensive Service Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              As your local umbrella company, we manage multiple specialized brands to provide 
              you with reliable, professional services across all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center flex flex-col h-full"
              >
                                       <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 flex-shrink-0`}>
                         <service.icon className="w-8 h-8 text-white" />
                       </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3 flex-shrink-0">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <Link 
                  href={service.href}
                  className="btn-outline w-full mt-auto"
                >
                  Learn More
                </Link>
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
                Why Choose Jacksonville Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Local Expertise</h3>
                    <p className="text-neutral-600">Born and raised in Jacksonville, we know our community and understand local needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">One Company, Multiple Services</h3>
                    <p className="text-neutral-600">Deal with one trusted company for all your service needs, simplifying your life.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Quality Guaranteed</h3>
                    <p className="text-neutral-600">We stand behind our work with satisfaction guarantees and exceptional customer service.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="/homepageservices1.png"
                  alt="Jacksonville Services professional team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">5+</div>
                    <div className="text-sm text-neutral-600">Years of Experience</div>
                  </div>
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
            Ready to Get Started?
          </h2>
                           <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
                   Contact us today for a free consultation and quote. Our team is ready to help
                   you with all your service needs in Jacksonville.
                 </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-700 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Request Service
            </Link>
            <Link href="tel:+19044563851" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Call Now: (904) 456-3851
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
