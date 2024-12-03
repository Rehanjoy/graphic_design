'use client';

import { useState } from 'react';
import { Home, Folder, User, MessageCircle, FileText } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Home', Icon: Home }, // Home icon
    { href: '/service', label: 'Serivices', Icon: Folder }, // Folder icon for Projects
    { href: '/blog', label: 'Blogs', Icon: FileText }, // FileText icon for Blogs
    { href: '/contact', label: 'Contact Us', Icon: MessageCircle }, // Message icon for Contact Us
    { href: '/about', label: 'About Us', Icon: User }, // User icon for About Us
  ];

  return (
    <div>

      {/* Sidebar */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0  bg-black/30 flex flex-col py-6 transition-all duration-300 z-40 ${
          isHovered || isMobileOpen ? 'w-44 min-h-screen' : 'w-16 min-h-10 rounded-2xl '
        } ${isMobileOpen ? 'lg:hidden' : ''}`}
      >
        {/* Sidebar Header */}
        <div className="relative flex items-center justify-start px-4 mb-20">
  {/* Background Blur */}
  <div className="absolute inset-0 bg-pink-500/70 rounded-full blur-md"></div>

  {/* Logo Image */}
  <Image
    src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1732211763/Creative_Color_Brushstroke_Lettering_Logo_1_jkd2kk.png" // Replace with your logo path
    alt="MyApp Logo"
    width={isHovered || isMobileOpen ? 180 : 0} // Dynamically adjust width
    height={100} // Adjust height as needed
    className={`relative transition-opacity duration-300 rounded-full ${
      isHovered || isMobileOpen ? 'opacity-100' : 'opacity-0 invisible'
    }`}
  />
</div>


        {/* Menu Items */}
        <div className="flex flex-col space-y-4">
          {menuItems.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center space-x-4 px-4 text-gray-400 hover:text-white hover:bg-pink-500/80 rounded-lg p-2 transition-all duration-300"
            >
              {/* Static Icon */}
              <div className="flex-shrink-0 w-6 h-6">
                <Icon className="w-6 h-6 text-gray-100 transition-colors duration-300" />
              </div>
              {/* Expandable Text */}
              <span
                className={`text-sm font-medium transition-opacity duration-300 ${
                  isHovered || isMobileOpen ? 'opacity-100' : 'opacity-0 invisible'
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

     
      </motion.div>

      {/* Overlay for Mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}
    </div>
  );
}
