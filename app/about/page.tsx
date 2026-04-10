import { Users, Target, Heart, MapPin, Clock, Award } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering solutions that exceed expectations.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Honest communication and transparent processes build trust with our clients.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We believe the best results come from working closely with our clients as partners.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Reliability',
      description: 'Consistent delivery of quality work on time, every time.'
    }
  ]

  const team = [
    {
      name: 'Isuru Munasinghe',
      role: 'Founder & Lead Developer',
      bio: 'Specializing in Construction Tech and digital infrastructure solutions with a focus on Australian compliance.',
      expertise: ['Construction Tech', 'Flutter', 'Supabase', 'Next.js']
    },
    {
      name: 'Technical Partners',
      role: 'Specialized Experts',
      bio: 'Network of experienced professionals in web development, cloud architecture, and digital infrastructure.',
      expertise: ['Web Development', 'Cloud Solutions', 'API Design', 'System Architecture']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
        <div className="absolute inset-0 circuit-bg opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Stroophy Digital Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional digital infrastructure specialists based in Melbourne, delivering focused solutions for modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Professional Approach
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Stroophy Digital Services (SDS) was founded with a clear vision: to provide professional, 
                  focused digital solutions for businesses that need more than just generic services.
                </p>
                <p>
                  We specialize in Construction Tech and Digital Infrastructure - areas where we have deep 
                  expertise and can deliver exceptional results. Rather than claiming to do everything, 
                  we focus on what we do best.
                </p>
                <p>
                  Based in Melbourne, we understand the unique needs of Australian businesses and 
                  build solutions that work in our local context, with proper compliance and 
                  industry-specific requirements.
                </p>
                <div className="flex items-center mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Melbourne Based</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Serving Australian businesses with local expertise</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Focus Areas</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Construction Tech</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Specialized software solutions for the construction industry, including workforce management, 
                    procurement systems, and Australian compliance automation.
                  </p>
                </div>
                
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Digital Infrastructure</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Complete backend systems, APIs, cloud architecture, and scalable solutions for 
                    businesses needing robust digital foundations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A focused team of professionals dedicated to delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{member.role}</p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {member.bio}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with professional digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="/services" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}