import { Building2, Code2, Cloud, Wrench, CheckCircle, Users, Target, Zap, Shield, Clock } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      id: 'construction',
      title: 'Construction Tech Solutions',
      icon: <Building2 className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      description: 'Industry-specific software solutions for the construction industry, built with modern technology and Australian compliance in mind.',
      features: [
        'Workforce Management with GPS geofencing',
        'BOM Weather API integration',
        'Purchase Order & Budget Management',
        'Delivery Docket OCR processing',
        'SOP Act compliance automation',
        'Fatigue management systems'
      ],
      technologies: ['Flutter', 'Supabase', 'Next.js', 'BOM API', 'Google Maps API'],
      pricing: 'Custom project-based pricing',
      cta: '/contact?service=construction'
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: <Code2 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies and best practices.',
      features: [
        'Next.js 15 with TypeScript',
        'Tailwind CSS for styling',
        'Mobile-first responsive design',
        'SEO optimization',
        'Performance optimization',
        'Accessibility compliance'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      pricing: 'From $2,000 - $10,000+',
      cta: '/contact?service=web'
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      description: 'Cloud infrastructure setup, optimization, and management across AWS, Azure, and Google Cloud platforms.',
      features: [
        'Cloud migration strategy',
        'Infrastructure as Code (IaC)',
        'Cost optimization',
        'Security configuration',
        'Monitoring & alerting',
        'Disaster recovery'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Docker'],
      pricing: 'From $1,000/month managed',
      cta: '/contact?service=cloud'
    },
    {
      id: 'infrastructure',
      title: 'Digital Infrastructure',
      icon: <Wrench className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      description: 'Complete backend systems, APIs, databases, and scalable architecture for business applications.',
      features: [
        'API design & development',
        'Database architecture',
        'System scalability planning',
        'Microservices architecture',
        'Real-time data processing',
        'Integration with existing systems'
      ],
      technologies: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'WebSockets'],
      pricing: 'From $5,000 - $25,000+',
      cta: '/contact?service=infrastructure'
    }
  ]

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Focused Solutions',
      description: 'We specialize in areas where we deliver exceptional results, not generic one-size-fits-all approaches.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure reliable, production-ready solutions.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Timely Delivery',
      description: 'Clear timelines and regular updates keep your project on track and within schedule.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative Approach',
      description: 'We work closely with you throughout the process, ensuring the final product meets your exact needs.'
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional digital solutions tailored to your business needs. We focus on delivering real value through specialized expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                id={service.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                    {service.pricing}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={service.cta}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Discuss {service.title.split(' ')[0]}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our approach focuses on delivering real value through professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with professional digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a 
              href="tel:+61400000000" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}