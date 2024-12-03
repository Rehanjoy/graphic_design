"use client"; // Mark this file as a client component

import { blogs } from "@/lib/blogData";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CoursesSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Recent Blogs</h2>
      <div className="grid grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <Card
            key={index}
            className="bg-[#1A1A1A] border-gray-800 overflow-hidden group hover:border-gray-600 transition-all"
          >
            <div className="relative h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <Link href={`/blogs/${blog.id}`}>
                <Button
                  variant="ghost"
                  className="mt-2 text-gray-400 hover:text-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
