import Image from 'next/image'
import Link from 'next/link'
import { FaHeart, FaHandshake, FaLightbulb, FaUsers, FaAward, FaPhone, FaEnvelope, FaBookOpen } from 'react-icons/fa'


export const metadata = {
  title: 'About Us - Jacksonville Services LLC',
  description: 'Learn about Jacksonville Services LLC, a local family-owned umbrella company supporting multiple specialized brands in Jacksonville, Florida.',
}

export default function About() {
  const values = [
    {
      icon: FaHeart,
      title: 'Community First',
      description: 'We\'re committed to serving our Jacksonville community with integrity and care.'
    },
    {
      icon: FaHandshake,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through consistent, dependable service delivery.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Continuously improving our services with modern technology and best practices.'
    },
    {
      icon: FaUsers,
      title: 'Team Excellence',
      description: 'Our dedicated team of professionals ensures exceptional results every time.'
    }
  ]

  const team = [
               {
             name: 'Christina Shumpert',
             position: 'Founder & CEO',
             bio: 'A Jacksonville native with over 5 years of experience in service management. Christina\'s vision of creating a one-stop service company has made Jacksonville Services the trusted partner for local businesses and residents.',
             image: '/christina-shumpert.jpeg'
           },
    {
      name: 'Baylee Shumpert',
      position: 'Operations Director',
      bio: 'Baylee oversees all daily operations, ensuring quality control and customer satisfaction across all service lines. Her attention to detail and process optimization keeps our services running smoothly.',
      image: '/Baylee Shumpert.jpeg'
    },
    {
      name: 'Loren Brophy',
      position: 'Project Manager',
      bio: 'Loren excels in project management, coordinating complex service operations and ensuring seamless delivery across all our divisions. Her strategic planning and team coordination skills guarantee exceptional results and customer satisfaction.',
      image: '/lorenbrophy (1).png'
    }
  ]

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started as a small cleaning service in Jacksonville' },
    { year: '2020', title: 'Service Expansion', description: 'Added vending machine services to our portfolio' },
    { year: '2021', title: 'Growth Phase', description: 'Expanded to include junk removal services' },
    { year: '2022', title: 'Power Washing', description: 'Launched professional power washing division' },
    { year: '2024', title: 'Community Leader', description: 'Recognized as Jacksonville\'s premier service company' }
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
            About Jacksonville Services
          </h1>

                           <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                   A local, family-owned umbrella company supporting multiple specialized brands
                   to serve our Jacksonville community with excellence and integrity.
                 </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">5+</div>
                                   <div className="text-neutral-200 drop-shadow-md">Years of Excellence</div>
                   </div>
                   <div className="text-center">
                     <div className="text-3xl font-bold text-white mb-2 drop-shadow-md">200+</div>
                     <div className="text-neutral-200 drop-shadow-md">Corporate Clients</div>
                   </div>
                   <div className="text-center">
                     <div className="text-3xl font-bold text-white mb-2 drop-shadow-md">4</div>
                     <div className="text-neutral-200 drop-shadow-md">Service Divisions</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 mx-auto" style={{ maxWidth: 'fit-content' }}>
            <Link
              href="/contact"
              className="bg-white text-primary-700 hover:bg-blue-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Contact Our Team
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

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-neutral-600">
                <p>
                  Jacksonville Services LLC was founded in 2019 by Christina Shumpert, a Jacksonville native 
                  who recognized the need for reliable, professional services in our growing community. 
                  What started as a small cleaning service has evolved into a comprehensive umbrella company 
                  managing multiple specialized brands.
                </p>
                <p>
                  Our journey began with a simple mission: to provide exceptional service while building 
                  lasting relationships with our neighbors. Over the years, we've expanded our offerings 
                  to include vending machines, house cleaning, junk removal, and power washing services.
                </p>
                <p>
                  Today, we're proud to serve Jacksonville and surrounding areas with the same dedication 
                  and personal touch that started it all. We remain family-owned and community-focused, 
                  committed to making Jacksonville a better place to live and work.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center">
                <FaBookOpen className="w-16 h-16 text-primary-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              
              
              
              
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">Our Mission</h3>
              <p className="text-lg text-neutral-600">
                To provide exceptional, reliable services that enhance the quality of life for our 
                Jacksonville community while building lasting relationships based on trust, integrity, 
                and outstanding customer service.
              </p>
            </div>

            <div
              
              
              
              
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">Our Vision</h3>
              <p className="text-lg text-neutral-600">
                To be Jacksonville\'s most trusted and preferred service partner, known for excellence, 
                innovation, and unwavering commitment to our community\'s success and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships with customers, 
              employees, and our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                
                
                
                
                className="text-center"
              >
                                 <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The dedicated professionals who lead Jacksonville Services and ensure we deliver 
              exceptional service to our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                
                
                
                
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={member.name === 'Loren Brophy' ? "object-cover object-top" : "object-cover"}
                    style={member.name === 'Loren Brophy' ? { objectPosition: '50% 20%' } : {}}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-neutral-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Key milestones in our company\'s growth and development over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  
                  
                  
                  
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  
                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Join the thousands of satisfied customers who trust Jacksonville Services for their 
            service needs. Contact our team today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="bg-white text-primary-700 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Contact Our Team
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View Our Services
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
              <span>info@jacksonvilleservices.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
