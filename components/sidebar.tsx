'use client';

import { Home, Users, BookOpen, Calendar, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-16 min-h-screen bg-black border-r border-gray-800">
      <div className="flex flex-col items-center py-4 space-y-8">
        <Link href="/" className="p-2 rounded-lg hover:bg-gray-800">
          <Home className="w-6 h-6 text-gray-400" />
        </Link>
        <Link href="/community" className="p-2 rounded-lg hover:bg-gray-800">
          <Users className="w-6 h-6 text-gray-400" />
        </Link>
        <Link href="/courses" className="p-2 rounded-lg hover:bg-gray-800">
          <BookOpen className="w-6 h-6 text-gray-400" />
        </Link>
        <Link href="/events" className="p-2 rounded-lg hover:bg-gray-800">
          <Calendar className="w-6 h-6 text-gray-400" />
        </Link>
        <Link href="/settings" className="p-2 rounded-lg hover:bg-gray-800">
          <Settings className="w-6 h-6 text-gray-400" />
        </Link>
      </div>
    </div>
  );
}