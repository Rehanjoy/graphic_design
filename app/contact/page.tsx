'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-black text-white p-1 md:p-8 ">
      <div className="max-w-6xl mx-auto  space-y-12  ">
        <section className="relative min-h-screen md:pt-20 text-white p-8">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D12] to-[#1C1C24] opacity-80 rounded-2xl z-0"></div>
          <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-purple-600 opacity-10 blur-3xl rounded-full z-0" />
          <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-pink-600 opacity-10 blur-3xl rounded-full z-0" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-bold bg-gradient-to-l from-purple-400 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Let's work together! Feel free to reach out for collaborations, inquiries, or just to say hello. We're
                here to help you bring your ideas to life.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-pink-500 w-6 h-6" />
                  <span className="text-gray-300 text-lg">info@Engineeringi.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-pink-500 w-6 h-6" />
                  <span className="text-gray-300 text-lg">+972598486982, +972597450543</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-pink-500 w-6 h-6" />
                  <span className="text-gray-300 text-lg">Isreal – Hebron</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center space-x-4 mt-8">
                {[
                  { Icon: Facebook, link: '#', color: 'bg-blue-600' },
                  { Icon: Instagram, link: '#', color: 'bg-pink-500' },
                  { Icon: Twitter, link: '#', color: 'bg-blue-400' }, // Replaced LinkedIn with Twitter
                ].map(({ Icon, link, color }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-gray-900/20 p-8 rounded-xl shadow-2xl backdrop-blur-lg"
            >
              <h2 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-pink-500">
                Contact Us
              </h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 p-4 block w-full bg-gray-800 text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 p-4 block w-full bg-gray-800 text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="mt-1 p-4 block w-full bg-gray-800 text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  ></textarea>
                </div>
                <div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-pink-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
