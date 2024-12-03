import { blogs } from "@/lib/blogData";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function BlogPage() {
  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

  return (
    <section className="relative rounded-xl bg-[#0D0D12] flex items-center justify-center p-6 overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D12] to-[#1C1C24] opacity-80 z-0"></div>
      <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-purple-600 opacity-10 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-pink-600 opacity-10 blur-3xl rounded-full z-0" />
      <div className="container relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text">
            Blog Articles
          </h2>
        </div>

        {/* Carousel Layout */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {blogs.slice(0, ITEMS_PER_PAGE).map((blog) => (
              <CarouselItem key={blog.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-gray-800/50 rounded-xl overflow-hidden">
                <Link
                  href={`/blog/${blog.id}`}
                  className="bg-gray-800/50 rounded-xl overflow-hidden cursor-pointer"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={`${blog.title} preview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {blog.date} • {blog.author}
                    </p>
                  </div>
                </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 border-0 bg-gray-800 hover:bg-pink-500" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 border-0 bg-gray-800 hover:bg-pink-500" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
