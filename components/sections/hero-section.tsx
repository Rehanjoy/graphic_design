"use client";
import { Card } from '@/components/ui/card';

import { motion } from "framer-motion";
import Image from 'next/image';
const stats = [
  { number: '39K+', label: 'Members' },
  { number: '230+', label: 'Resources' },
  { number: '50+', label: 'Groups' },
  { number: '4.9', label: 'Rating' },
];

export function HeroSection() {
  return (
    <>
    <section className="bg-[#0D0D12] rounded-xl min-h-4xl flex items-center">
       
      <div className="container px-2 md:px-10  mx-auto  py-12  relative">
                    {/* Background Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D12] to-[#1C1C24] opacity-80 z-0"></div>
            <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-purple-600 opacity-10 blur-3xl rounded-full z-0" />
            <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-pink-600 opacity-10 blur-3xl rounded-full z-0" />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="max-w-2xl z-20 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Elevate Your{" "}
              <motion.span
                className="block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Design Game and
              </motion.span>
              <motion.span
                className="text-pink-500 block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Connect with
                <br className="hidden md:block" />
                Like-Minded
                <br className="hidden md:block" />
                Professionals
              </motion.span>
              <motion.span
                className="block mt-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Design Lab
              </motion.span>
            </h1>
          </motion.div>

          {/* Circular Images */}
          <motion.div
            className="relative h-[300px] sm:h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Main Circle */}
            <motion.div
              className="absolute z-10 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-[#FFD84D] rounded-full w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-center">
                <div className="text-3xl sm:text-5xl font-bold">17K+</div>
                <div className="text-sm sm:text-lg">professionals</div>
              </div>
            </motion.div>

            {/* Decorative Circles */}
            <motion.div
              className="absolute z-20 top-0 right-[30%] bg-pink-400 rounded-full w-16 h-16 sm:w-24 sm:h-24 overflow-hidden"
              animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917427/SuperKombat-1-phm57xzdb0yx507weubwlwr2t3plzics4jpyjw8lao_jrydkl.png"
                alt="Decorative dog with glasses"
                width={96}
                height={96}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute top-[30%] right-0 bg-orange-400 rounded-full w-20 h-20 sm:w-32 sm:h-32 overflow-hidden"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917427/twofour54-2-phm57xzdb0yx507weubwlwr2t3plzics4jpyjw8lao_mpnoea.png"
                alt="Decorative dog with glasses"
                width={128}
                height={128}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-[70%] left-[20%] bg-purple-400 rounded-full w-20 h-20 sm:w-28 sm:h-28 overflow-hidden"
              animate={{ x: [0, -10, 10, 0], y: [0, 10, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917425/admedia_logo_NEW-1-1-phm57x1j46xmte99kbxa1ezm7pu8rt91sf2h2m9zgw_1_mosvo5.png"
                alt="Decorative dog portrait"
                width={112}
                height={112}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute z-20 bottom-[10%] right-[20%] bg-blue-400 rounded-full w-16 h-16 sm:w-24 sm:h-24 overflow-hidden"
              animate={{ scale: [1, 0.9, 1], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917425/adss-2-phm57x1j46xmte99kbxa1ezm7pu8rt91sf2h2m9zgw_kltnqv.png"
                alt="Decorative dog with cool style"
                width={96}
                height={96}
                className=" object-contain"
              />
            </motion.div>
            <motion.div
              className="absolute z-20 bottom-0 right-[50%] bg-lime-400 rounded-full w-14 h-14 sm:w-20 sm:h-20 overflow-hidden"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1724917426/rotana-2-phm57xzdb0yx507weubwlwr2t3plzics4jpyjw8lao_yzsp3t.png"
                alt="Decorative dog portrait"
                width={80}
                height={80}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-gray-800 p-6">
            <h3 className="text-2xl  font-bold">{stat.number}</h3>
            <p className="text-gray-200">{stat.label}</p>
          </Card>
        ))}
      </div>
    </>
  );
}