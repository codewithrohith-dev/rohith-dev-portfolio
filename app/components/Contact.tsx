'use client';

import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_0yl7fmg',
        'template_shekabg',
        formRef.current!,
        'mwtlHppYOTWa99OXw'
      );

      console.log('Email successfully sent:', result.text);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('✅ Message sent successfully!');
    } catch (error) {
      console.error('Email send failed:', error);
      alert('❌ Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      label: 'Email',
      value: 'vrohith17@gmail.com',
      link: 'mailto:vrohith17@gmail.com'
    },
    {
      icon: 'ri-phone-line',
      label: 'Phone',
      value: '+91 9392759434',
      link: 'tel:+919392759434'
    },
    {
      icon: 'ri-map-pin-line',
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: 'ri-github-line', label: 'GitHub', link: '#' },
    { icon: 'ri-linkedin-line', label: 'LinkedIn', link: '#' },
    { icon: 'ri-twitter-line', label: 'Twitter', link: '#' },
    { icon: 'ri-instagram-line', label: 'Instagram', link: '#' }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ready to start your next project? Let's collaborate and create something amazing together. 
            I'm always excited to work on new challenges and innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects, or just having a chat about technology. 
                  Drop me a message and I'll get back to you as soon as possible!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.label}</h4>
                      <a 
                        href={info.link} 
                        className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer"
                      title={social.label}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white text-sm transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white text-sm transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white text-sm transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white text-sm transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
