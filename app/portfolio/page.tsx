import { Building2, Code2, Cloud, Wrench, ExternalLink, Github, Calendar } from 'lucide-react'

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Construction Management App',
      category: 'Construction Tech',
      icon: <Building2 className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      description: 'A comprehensive construction management application for Australian businesses, featuring workforce tracking, procurement, and compliance automation.',
      features: [
        'GPS geofencing for worksite validation',
        'BOM Weather API integration',
        'Purchase order management',
        'Delivery docket OCR processing',
        'SOP Act compliance automation'
      ],
      technologies: ['Flutter', 'Supabase', 'Next.js', 'BOM API', 'Google Maps'],
      status: 'In Development',
      timeline: 'Q2 2026',
      link: '#'
    },
    {
      id: 2,
      title: 'Stroophy Digital Services Website',
      category: 'Web Development',
      icon: <Code2 className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      description: 'Professional website for Stroophy Digital Services featuring dark/light themes, responsive design, and comprehensive service information.',
      features: [
        'Dark/Light theme toggle',
        'Mobile-responsive design',
        'Service portfolio showcase',
        'Contact form with validation',
        'Performance optimized'
      ],
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'],
      status: 'Live',
      timeline: 'April 2026',
      link: 'https://stroophydigital.vercel.app'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Migration',
      category: 'Cloud Solutions',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      description: 'Migration of legacy systems to modern cloud infrastructure with improved scalability, security, and cost optimization.',
      features: [
        'AWS infrastructure setup',
        'Cost optimization strategies',
        'Security configuration',
        'Monitoring and alerting',
        'Disaster recovery planning'
      ],
      technologies: ['AWS', 'Terraform', 'Docker', 'PostgreSQL', 'Redis'],
      status: 'Completed',
      timeline: 'Q1 2026',
      link: '#'
    },
    {
      id: 4,
      title: 'Digital Infrastructure Platform',
      category: 'Digital Infrastructure',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      description: 'Scalable backend platform with API management, database architecture, and real-time data processing capabilities.',
      features: [
        'RESTful API design',
        'Database optimization',
        'Real-time notifications',
        'Microservices architecture',
        'System monitoring'
      ],
      technologies: ['Node.js', 'PostgreSQL', 'GraphQL', 'WebSockets', 'Redis'],
      status: 'In Development',
      timeline: 'Q3 2026',
      link: '#'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: 4 },
    { id: 'construction', name: 'Construction Tech', count: 1 },
    { id: 'web', name: 'Web Development', count: 1 },
    { id: 'cloud', name: 'Cloud Solutions', count: 1 },
    { id: 'infrastructure', name: 'Digital Infrastructure', count: 1 }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
        <div className="absolute inset-0 circuit-bg opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Showcasing our professional work and specialized projects in digital infrastructure and construction tech.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
              >
                {category.name}
                <span className="ml-2 px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <div className="text-white">
                          {project.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-white/80">{project.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-300' :
                        project.status === 'Completed' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.timeline}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      {project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </a>
                      )}
                      <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <Github className="w-4 h-4 mr-2" />
                        Case Study
                      </button>
                    </div>
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
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help bring your digital vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
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

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Project Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We discuss your project requirements, goals, and constraints.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Planning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We create a detailed project plan with timelines and deliverables.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We build your solution with regular updates and feedback sessions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We deploy your solution and provide training and support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}