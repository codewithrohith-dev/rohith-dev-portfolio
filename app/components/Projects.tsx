'use client';

import { useState, useEffect, useRef } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Blockchain Medical Record System',
      description: 'Decentralized system for secure storage and management of medical records using Ethereum, IPFS, and Solidity. Ensures transparency, access control, and patient data integrity.',
      image: '/assets/blockchain-thumbnail.png',
      tech: ['Solidity', 'IPFS', 'Ethereum', 'ReactJS', 'MetaMask'],
      category: 'Blockchain',
      githubUrl: 'https://github.com/codewithrohith-dev/blockchain-health-records',
      features: ['Decentralized Storage', 'Smart Contracts', 'User Authentication', 'Audit Trail']
    },
    {
      id: 2,
      title: 'Fake News Detection using BERT',
      description: 'A machine learning model using BERT to classify news articles as real or fake, improving digital media trust and awareness through NLP-based classification.',
      image: '/assets/fakenews-thumbnail.png',
      tech: ['Python', 'BERT', 'NLP', 'Sklearn', 'Flask'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/codewithrohith-dev/fake-news-detection',
      features: ['BERT Model', 'NLP Pipeline', 'Web Interface', 'Real-time Prediction']
    }
  ];

  const ProjectModal = ({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
          
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <i className="ri-check-line text-green-400"></i>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gray-800 text-blue-400 rounded-lg text-sm font-medium border border-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer">
              <i className="ri-github-line"></i>
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my latest work - each project solves real-world problems using modern technologies and creative thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-4xl animate-bounce">
                    <i className="ri-eye-line"></i>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-800 text-blue-400 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors flex items-center gap-1 cursor-pointer">
                    <i className="ri-arrow-right-line"></i>
                    View Details
                  </button>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 cursor-pointer">
                    <i className="ri-github-line text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="https://github.com/codewithrohith-dev" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto whitespace-nowrap cursor-pointer">
            <i className="ri-github-line"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={projects.find(p => p.id === selectedProject)!} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
