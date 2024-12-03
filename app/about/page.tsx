"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const services = [
    "Brand Identity",
    "Web Design",
    "Print Design",
    "Packaging Design",
    "UI/UX Design",
    "Illustration",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white p-1 md:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="relative min-h-screen rounded-xl bg-[#0D0D12] flex items-center justify-center p-6 overflow-hidden">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D12] to-[#1C1C24] opacity-80 z-0"></div>
          <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-purple-600 opacity-10 blur-3xl rounded-full z-0" />
          <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-pink-600 opacity-10 blur-3xl rounded-full z-0" />

          <div className="relative z-10 max-w-6xl mx-auto text-left space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl md:mt-10 mx-auto">
                Transforming Ideas into{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
                  Stunning Designs
                </span>
              </h1>

              {/* About Us Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="max-w-4xl mx-auto text-lg text-gray-300 mb-8"
              >
                <p className="mb-4">
                  Welcome to our creative hub, where artistry meets innovation.
                  At [Your Studio Name], we specialize in designing experiences
                  that captivate, inspire, and deliver meaningful impact. With a
                  commitment to excellence, we turn your ideas into
                  extraordinary visual narratives.
                </p>
                <p>
                  Whether it’s branding, web design, or digital illustration, we
                  offer comprehensive design services tailored to your needs.
                  With over a decade of experience and a passion for creativity,
                  we’re here to help you stand out in a competitive world.
                </p>
              </motion.div>

              {/* Professional Designer Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="mt-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 relative"
              >
                {/* Services Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 relative z-10 md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/4 text-center md:text-left">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
                    ✨ Jane
                    <br /> Doe ✨
                  </span>
                </h2>

                {/* Designer Image */}
                <div className="md:w-1/2 relative z-0">
                  <Image
                    src="https://res.cloudinary.com/dg2pzsxp0/image/upload/v1732197027/Untitled_design_19_yovwd2.png"
                    alt="Jane Doe, Lead Designer"
                    width={400}
                    height={400}
                    className="opacity-50"
                  />
                </div>

                {/* Designer Info */}
                <div className="md:w-1/2 text-left relative">
                  <h3 className="text-2xl font-semibold mb-4 text-pink-400">
                    Jane Doe
                  </h3>
                  <p className="text-gray-300 mb-6">
                    With over 15 years of experience in the design industry,
                    Jane has collaborated with global brands and startups alike.
                    Her keen eye for detail and ability to translate complex
                    ideas into compelling visuals have made her a leader in the
                    field.
                  </p>

                  <div className="flex items-center space-x-4">
                    {[
                      { label: "Designs", value: "5k+" },
                      { label: "Clients", value: "2.3k+" },
                      { label: "Projects", value: "17k+" },
                      { label: "Awards", value: "50+" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 1, opacity: 0.8 }}
                        whileHover={{ scale: 1.2, opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="relative w-14 h-14 rounded-full bg-black/20 border-2 border-pink-400 shadow-lg flex items-center justify-center"
                      >
                        <span className="text-sm font-bold text-white">
                          {item.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="py-20 max-w-4xl mx-auto"
              >
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                  Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-800/20 border-gray-800 p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl"
                    >
                      <h3 className="text-xl font-semibold mb-2">{service}</h3>
                      <p className="text-gray-400">
                        Empower your brand with expert {service.toLowerCase()}{" "}
                        solutions.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
