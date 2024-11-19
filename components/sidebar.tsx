'use client';

import { useState } from 'react';
import { Home, Users, BookOpen, Calendar, Settings } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Home', Icon: Home },
    { href: '/community', label: 'Community', Icon: Users },
    { href: '/courses', label: 'Courses', Icon: BookOpen },
    { href: '/events', label: 'Events', Icon: Calendar },
    { href: '/settings', label: 'Settings', Icon: Settings },
  ];

  return (
    <div>

      {/* Sidebar */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0  bg-black flex flex-col py-6 transition-all duration-300 z-40 ${
          isHovered || isMobileOpen ? 'w-44 min-h-screen' : 'w-16 min-h-24 rounded-2xl '
        } ${isMobileOpen ? 'lg:hidden' : ''}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-start px-4 mb-20">
          <span
            className={`text-xl font-bold text-gray-200 transition-opacity duration-300 ${
              isHovered || isMobileOpen ? 'opacity-100' : 'opacity-0 invisible'
            }`}
          >
            MyApp
          </span>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-4">
          {menuItems.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center space-x-4 px-4 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg p-2 transition-all duration-300"
            >
              {/* Static Icon */}
              <div className="flex-shrink-0 w-6 h-6">
                <Icon className="w-6 h-6 text-gray-400 transition-colors duration-300" />
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
