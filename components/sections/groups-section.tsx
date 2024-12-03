"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function GroupsSection() {
  const groups = [
    {
      title: "Research & Development",
      // posts: 0,
      // members: 1,
      image:
        "https://res.cloudinary.com/dspndkatf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1731318826/online_ranchi_pzcm2m.webp",
    },
    {
      title: "Injection moulding",
      // posts: 0,
      // members: 3,
      image:
        "https://res.cloudinary.com/dspndkatf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1731318826/online_ranchi_pzcm2m.webp",
    },
    {
      title: "CNC milling",
      // posts: 0,
      // members: 3,
      image:
        "https://res.cloudinary.com/dspndkatf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1731318826/online_ranchi_pzcm2m.webp",
    },
    {
      title: "3d Printing",
      // posts: 0,
      // members: 1,
      image:
        "https://res.cloudinary.com/dspndkatf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1731318826/online_ranchi_pzcm2m.webp",
    },
    {
      title: "3d Design",
      // posts: 0,
      // members: 3,
      image:
        "https://res.cloudinary.com/dspndkatf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1731318826/online_ranchi_pzcm2m.webp",
    },
    {
      title: "Graphic Design",
      // posts: 0,
      // members: 3,
      image:
        "https://res.cloudinary.com/dspndkatf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1731318826/online_ranchi_pzcm2m.webp",
    },
  ];

  return (
    <section className="bg-[#0D0D12] rounded-xl py-16 px-2 md:px-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Services
          </h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {groups.map((group, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-800/50 rounded-xl overflow-hidden"
                >
                  <div className="p-4">
                    {/* <Badge className="bg-pink-500 hover:bg-pink-600 mb-4">
                      PUBLIC GROUP
                    </Badge> */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {group.title}
                    </h3>
                    {/* <p className="text-gray-400">
                      {group.posts} Posts • {group.members} Member
                      {group.members !== 1 ? "s" : ""}
                    </p> */}
                  </div>
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={group.image}
                      alt={`${group.title} preview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 border-0 bg-gray-800 hover:bg-pink-500" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 border-0 bg-gray-800 hover:bg-pink-500" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
