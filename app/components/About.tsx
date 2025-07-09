
'use client';

import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = [
    { name: 'Frontend Development', level: 90, icon: 'ri-code-s-slash-line' },
    { name: 'Backend Development', level: 85, icon: 'ri-server-line' },
    { name: 'UI/UX Design', level: 80, icon: 'ri-palette-line' },
    { name: 'Mobile Development', level: 75, icon: 'ri-smartphone-line' }
  ];

  const achievements = [
    { number: '15+', label: 'Projects Completed', icon: 'ri-trophy-line' },
    { number: '2+', label: 'Years Experience', icon: 'ri-time-line' },
    { number: '10+', label: 'Technologies', icon: 'ri-tools-line' },
    { number: '100%', label: 'Dedication', icon: 'ri-heart-line' }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Photo Section */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative max-w-sm mx-auto">
              {/* Main photo container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl transform rotate-3 animate-pulse"></div>
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden transform -rotate-1 border-4 border-gray-800">
                  <img 
                    src="https://static.readdy.ai/image/d54788e5ac5506c98600adccade11a07/b4abe0d0c266ad7e36a1c8f6c7c7c759.jfif"
                    alt="R Rohith"
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-bounce flex items-center justify-center">
                <i className="ri-code-line text-white text-xl"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full animate-pulse flex items-center justify-center">
                <i className="ri-lightbulb-line text-white"></i>
              </div>
              
              {/* Status indicator */}
              <div className="absolute top-4 right-4 bg-green-500 rounded-full p-2 animate-ping">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-lg p-1 inline-block">
                <span className="text-purple-300 text-sm font-medium px-3 py-1">Full Stack Developer</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Crafting Digital Experiences with
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Passion</span>
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! I'm <span className="text-purple-400 font-semibold">R Rohith</span>, a passionate Computer Science Engineering student 
                who thrives on turning innovative ideas into reality. My journey in tech spans from web development 
                to blockchain technologies, always driven by curiosity and the desire to create meaningful solutions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my B.Tech while building real-world projects that solve actual problems. 
                I believe in clean code, user-centric design, and continuous learning. When I'm not coding, 
                you'll find me exploring new technologies or contributing to open-source projects.
              </p>

              {/* Skills Progress */}
              <div className="space-y-4 mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Technical Expertise</h4>
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <i className={`${skill.icon} text-purple-400`}></i>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 group">
              <div className="text-3xl text-purple-400 mb-3 group-hover:animate-bounce">
                <i className={achievement.icon}></i>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-400 text-sm">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl text-gray-300 mb-8">
            Let's build something amazing together!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer"
          >
            <i className="ri-message-line mr-2"></i>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
