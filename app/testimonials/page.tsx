import Link from 'next/link'
import { FaStar, FaQuoteLeft, FaPhone, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'Customer Testimonials - Jacksonville Services LLC',
  description: 'Read what our satisfied customers say about Jacksonville Services LLC. Real reviews from businesses and residents throughout Jacksonville, Florida.',
  keywords: 'Jacksonville Services reviews, customer testimonials, Jacksonville cleaning reviews, commercial services reviews, Florida service company testimonials',
  openGraph: {
    title: 'Customer Testimonials - Jacksonville Services LLC',
    description: 'Read what our satisfied customers say about Jacksonville Services LLC.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Downtown Law Firm',
      location: 'Downtown Jacksonville',
      service: 'Commercial Cleaning',
      rating: 5,
      text: 'Jacksonville Services has been handling our office cleaning for over two years. Their attention to detail and reliability is unmatched. Our office always looks pristine, and they work around our schedule perfectly.'
    },
    {
      name: 'Michael Chen',
      company: 'Mandarin Medical Center',
      location: 'Mandarin, Jacksonville',
      service: 'Commercial Cleaning',
      rating: 5,
      text: 'The healthcare cleaning services are exceptional. They understand our strict protocols and maintain the highest standards. Our patients and staff always comment on how clean our facility is.'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Riverside Retail',
      location: 'Riverside, Jacksonville',
      service: 'Junk Removal',
      rating: 5,
      text: 'When we needed to clear out our old inventory, Jacksonville Services made it look easy. Professional, efficient, and they recycled everything properly. Will definitely use them again.'
    },
    {
      name: 'David Thompson',
      company: 'Atlantic Beach Hotel',
      location: 'Atlantic Beach, FL',
      service: 'Power Washing',
      rating: 5,
      text: 'Our hotel exterior was looking tired and worn. Jacksonville Services transformed it completely. The power washing service was thorough, and our guests have noticed the difference.'
    },
    {
      name: 'Jennifer Williams',
      company: 'San Marco Office Building',
      location: 'San Marco, Jacksonville',
      service: 'Vending Machines',
      rating: 5,
      text: 'The vending machine service has been a huge hit with our employees. Fresh snacks, reliable machines, and great customer service. It\'s one less thing we have to worry about.'
    },
    {
      name: 'Robert Martinez',
      company: 'Orange Park Manufacturing',
      location: 'Orange Park, FL',
      service: 'Commercial Cleaning',
      rating: 5,
      text: 'Industrial cleaning is no easy task, but Jacksonville Services handles it perfectly. They understand our safety requirements and keep our facility spotless. Highly recommend their services.'
    }
  ]

  const stats = [
    { number: '200+', label: 'Happy Customers' },
    { number: '4.9', label: 'Average Rating' },
    { number: '98%', label: 'Customer Retention' },
    { number: '5+', label: 'Years of Service' }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Jacksonville testimonials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            What Our Customers Say
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Don't just take our word for it. Read what our satisfied customers throughout 
            Jacksonville have to say about our services.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{stat.number}</div>
                <div className="text-neutral-200 drop-shadow-md">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Customer Success Stories
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Real feedback from real customers who trust Jacksonville Services 
              for their commercial and residential needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-sm text-neutral-600 ml-2">
                    {testimonial.rating}.0/5.0
                  </span>
                </div>
                
                <div className="mb-6">
                  <FaQuoteLeft className="w-8 h-8 text-primary-200 mb-4" />
                  <p className="text-neutral-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                    <p className="text-sm text-primary-600">{testimonial.company}</p>
                    <p className="text-sm text-neutral-600">{testimonial.location}</p>
                    <p className="text-xs text-neutral-500 mt-1">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Why Customers Keep Coming Back
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our commitment to excellence and customer satisfaction has earned us 
              the trust of businesses and residents throughout Jacksonville.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaStar className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Consistent Quality</h3>
              <p className="text-neutral-600">
                Every service is delivered with the same high standards, ensuring 
                your satisfaction every time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaQuoteLeft className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Reliable Service</h3>
              <p className="text-neutral-600">
                You can count on us to be there when you need us, with flexible 
                scheduling and professional service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPhone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Local Expertise</h3>
              <p className="text-neutral-600">
                As Jacksonville natives, we understand local needs and provide 
                personalized service to our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Experience the Jacksonville Services difference for yourself. 
            Contact us today for your free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Quote
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