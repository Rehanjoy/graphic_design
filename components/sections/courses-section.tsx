import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const courses = [
  {
    title: 'Designing a Low-Prototype in Figma',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d',
  },
  {
    title: 'Creative Thinking: Techniques and Tools',
    image: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d',
  },
];

export function CoursesSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">New Courses</h2>
      <div className="grid grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <Card
            key={index}
            className="bg-[#1A1A1A] border-gray-800 overflow-hidden group hover:border-gray-600 transition-all"
          >
            <div className="relative h-48">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <Button
                variant="ghost"
                className="mt-2 text-gray-400 hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}