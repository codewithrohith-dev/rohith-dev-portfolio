'use client';

import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');
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

  const skillCategories = {
    frontend: [
      { name: 'React', level: 95, icon: 'ri-reactjs-line', color: 'from-blue-400 to-blue-600' },
      { name: 'Next.js', level: 90, icon: 'ri-window-line', color: 'from-gray-400 to-gray-600' },
      { name: 'TypeScript', level: 88, icon: 'ri-code-s-slash-line', color: 'from-blue-500 to-blue-700' },
      { name: 'Tailwind CSS', level: 92, icon: 'ri-css3-line', color: 'from-cyan-400 to-cyan-600' },
      { name: 'Vue.js', level: 85, icon: 'ri-vuejs-line', color: 'from-green-400 to-green-600' },
      { name: 'SASS/SCSS', level: 87, icon: 'ri-file-code-line', color: 'from-pink-400 to-pink-600' }
    ],
    backend: [
      { name: 'Node.js', level: 90, icon: 'ri-nodejs-line', color: 'from-green-500 to-green-700' },
      { name: 'Python', level: 88, icon: 'ri-code-line', color: 'from-yellow-400 to-yellow-600' },
      { name: 'MongoDB', level: 85, icon: 'ri-database-2-line', color: 'from-green-600 to-green-800' },
      { name: 'PostgreSQL', level: 82, icon: 'ri-database-line', color: 'from-blue-500 to-blue-700' },
      { name: 'Express.js', level: 90, icon: 'ri-server-line', color: 'from-gray-500 to-gray-700' },
      { name: 'GraphQL', level: 78, icon: 'ri-share-circle-line', color: 'from-pink-500 to-pink-700' }
    ],
    tools: [
      { name: 'Git', level: 95, icon: 'ri-git-branch-line', color: 'from-orange-400 to-orange-600' },
      { name: 'Docker', level: 80, icon: 'ri-container-line', color: 'from-blue-400 to-blue-600' },
      { name: 'AWS', level: 75, icon: 'ri-cloud-line', color: 'from-yellow-500 to-yellow-700' },
      { name: 'Figma', level: 88, icon: 'ri-pencil-ruler-2-line', color: 'from-purple-400 to-purple-600' },
      { name: 'VS Code', level: 98, icon: 'ri-code-s-slash-line', color: 'from-blue-500 to-blue-700' },
      { name: 'Postman', level: 85, icon: 'ri-send-plane-line', color: 'from-orange-500 to-orange-700' }
    ]
  };

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: 'ri-palette-line' },
    { key: 'backend', label: 'Backend', icon: 'ri-server-line' },
    { key: 'tools', label: 'Tools & Others', icon: 'ri-tools-line' }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <i className={category.icon}></i>
              {category.label}
            </button>
          ))}
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-xl`}>
                  <i className={skill.icon}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{skill.name}</h3>
                  <p className="text-sm text-gray-400">{skill.level}% Proficiency</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute right-0 -top-6 text-xs text-gray-400 font-mono">
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Always Learning</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and methodologies 
              to stay ahead of the curve and deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AI/ML', 'Web3', 'Blockchain', 'Cloud Computing', 'DevOps', 'Mobile Development'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30 animate-pulse"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}