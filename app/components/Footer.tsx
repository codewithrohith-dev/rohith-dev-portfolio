
'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: 'ri-github-line', label: 'GitHub', link: '#' },
    { icon: 'ri-linkedin-line', label: 'LinkedIn', link: '#' },
    { icon: 'ri-twitter-line', label: 'Twitter', link: '#' },
    { icon: 'ri-instagram-line', label: 'Instagram', link: '#' },
    { icon: 'ri-dribbble-line', label: 'Dribbble', link: '#' }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">R ROHITH</h3>
              <p className="text-blue-400 font-mono mb-4">Full Stack Developer</p>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Passionate about creating innovative digital solutions and bringing ideas to life through clean, 
                efficient code and beautiful user experiences.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-400">
                <i className="ri-mail-line text-blue-400"></i>
                <a href="mailto:vrohith17@gmail.com" className="hover:text-blue-400 transition-colors cursor-pointer">
                  vrohith17@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <i className="ri-phone-line text-blue-400"></i>
                <a href="tel:+919392759434" className="hover:text-blue-400 transition-colors cursor-pointer">
                  +91 9392759434
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <i className="ri-map-pin-line text-blue-400"></i>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  title={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Available for</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Freelance Projects
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Full-time Opportunities
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  Consultations
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm" suppressHydrationWarning>
              © {currentYear} R ROHITH. All rights reserved. Built with ❤️ and lots of ☕
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-gray-500 text-xs">
                Made with Next.js & Tailwind CSS
              </div>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 cursor-pointer"
                title="Back to top"
              >
                <i className="ri-arrow-up-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
