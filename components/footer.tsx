'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signed up with:', email);
    setEmail('');
  };

  const links = [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="relative bg-[#0D0D12] rounded-lg text-white py-16 overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D12] to-[#1C1C24] opacity-80 z-0"></div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] bg-purple-600 opacity-10 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-1/4 right-1/2 transform translate-x-1/2 w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] lg:w-[700px] lg:h-[700px] bg-pink-600 opacity-10 blur-3xl rounded-full z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <motion.h2
              className="text-xl sm:text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Stay Connected
            </motion.h2>
            <form onSubmit={handleSubmit} className="flex gap-2 items-center">
  {/* Input Field */}
  <div className="relative w-full">
    <Input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="bg-gray-800 border-gray-700 text-white w-full pl-4 pr-12 py-2 rounded-lg"
      required
    />
    {/* Icon inside Input Field */}
    
  </div>

  {/* Submit Button */}
  <Button
    type="submit"
    className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
  >
 
      <Send className="h-4 w-4" />
    
  </Button>
</form>

          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <motion.h2
              className="text-xl sm:text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Quick Links
            </motion.h2>
            <ul className="grid grid-cols-2 gap-2 md:gap-4">
              {links.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <motion.h2
              className="text-xl sm:text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect With Us
            </motion.h2>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-4">
            <motion.h2
              className="text-xl sm:text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our Location
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Palestine Hebron
            </motion.p>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
