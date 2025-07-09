
'use client';

import { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    'Full Stack Developer',
    'UI/UX Designer', 
    'Blockchain Developer',
    'Mobile App Developer',
    'DevOps Engineer'
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const currentRoleText = roles[currentRole];
      if (displayText.length < currentRoleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentRole, isTyping, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <ParticleBackground />
      
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-purple-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-blue-500/20 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Greeting */}
            <div className="animate-fade-in-up">
              <span className="inline-block bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 text-purple-300 text-sm font-medium mb-6">
                👋 Hello, I'm
              </span>
            </div>

            {/* Name */}
            <div className="animate-fade-in-up animation-delay-300">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  R ROHITH
                </span>
              </h1>
            </div>

            {/* Dynamic Role */}
            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-mono text-green-400 h-16 flex items-center">
                <span className="text-purple-400 mr-2">{'>'}</span>
                <span className="min-w-0">{displayText}</span>
                <span className="animate-pulse ml-2 text-purple-400">|</span>
              </div>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up animation-delay-900">
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Passionate Computer Science student specializing in modern web technologies, 
                blockchain development, and creating innovative digital solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1000">
              <a
    href="/Rohith_Resume.pdf"
    download
    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 whitespace-nowrap cursor-pointer flex items-center justify-center"
  >
    <i className="ri-download-line mr-2"></i>
    Download Resume
  </a>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-purple-500 hover:bg-purple-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-eye-line mr-2"></i>
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 animate-fade-in-up animation-delay-1000">
              {[
                { icon: 'ri-github-line', href: '#', label: 'GitHub' },
                { icon: 'ri-linkedin-line', href: '#', label: 'LinkedIn' },
                { icon: 'ri-twitter-line', href: '#', label: 'Twitter' },
                { icon: 'ri-mail-line', href: 'mailto:vrohith17@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 cursor-pointer group"
                  title={social.label}
                >
                  <i className={`${social.icon} text-xl group-hover:animate-pulse`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="relative animate-fade-in-up animation-delay-600">
            <div className="relative max-w-md mx-auto">
              {/* Floating code blocks */}
              <div className="absolute -top-8 -left-8 bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 transform rotate-6 animate-float">
                <div className="text-green-400 font-mono text-sm">
                  <div className="text-blue-400">const</div>
                  <div className="text-white ml-2">skills = [</div>
                  <div className="text-yellow-400 ml-4">'React',</div>
                  <div className="text-yellow-400 ml-4">'Node.js',</div>
                  <div className="text-yellow-400 ml-4">'Web3'</div>
                  <div className="text-white ml-2">];</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-gray-900/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 transform -rotate-6 animate-float animation-delay-300">
                <div className="text-purple-400 font-mono text-sm">
                  <div className="text-green-400">// Always learning</div>
                  <div className="text-blue-400">import</div>
                  <div className="text-white ml-2">{'{ Innovation }'}</div>
                  <div className="text-gray-400">from 'passion';</div>
                </div>
              </div>

              {/* Central tech stack visualization */}
              <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                <div className="grid grid-cols-3 gap-6 mb-6">
                  {[
                    { icon: 'ri-reactjs-line', color: 'text-blue-400', name: 'React' },
                    { icon: 'ri-nodejs-line', color: 'text-green-400', name: 'Node.js' },
                    { icon: 'ri-database-2-line', color: 'text-purple-400', name: 'Database' },
                    { icon: 'ri-smartphone-line', color: 'text-pink-400', name: 'Mobile' },
                    { icon: 'ri-palette-line', color: 'text-yellow-400', name: 'Design' },
                    { icon: 'ri-cloud-line', color: 'text-indigo-400', name: 'Cloud' }
                  ].map((tech, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-12 h-12 ${tech.color} text-2xl flex items-center justify-center mx-auto mb-2 animate-bounce`} style={{animationDelay: `${index * 0.2}s`}}>
                        <i className={tech.icon}></i>
                      </div>
                      <span className="text-xs text-gray-400">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-400">10+</div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">2+</div>
                      <div className="text-xs text-gray-400">Years Exp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
