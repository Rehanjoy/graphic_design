'use client';

import { motion } from 'framer-motion';

export function Project() {
    const stats = [
        { number: '230+', label: 'Events', color: 'bg-[#FF8FB1]' },
        { number: '50+', label: 'Workshops', color: 'bg-[#B5B1FF]' },
        { number: '39K+', label: 'Users', color: 'bg-[#FFD84D]' },
        { number: '4.9', label: 'Rating', color: 'bg-white' }
    ];

    return (
        <section className="relative min-h-screen rounded-xl bg-[#0D0D12] flex items-center justify-center p-6 overflow-hidden">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D12] to-[#1C1C24] opacity-80 z-0"></div>
            <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-purple-600 opacity-10 blur-3xl rounded-full z-0" />
            <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-pink-600 opacity-10 blur-3xl rounded-full z-0" />

            <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="space-y-6"
                >
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
                        Join the Ultimate{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
                            Community
                        </span>{' '}
                        for Designers and Creatives
                    </h1>

                    <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ rotate: 0 }}
                                whileHover={{ rotate: 360, scale: 1.1 }} // Smooth rotation and scale on hover
                                transition={{
                                    duration: 1.2,
                                    ease: 'easeInOut',
                                }}
                                className={`relative ${stat.color} rounded-2xl p-1 aspect-square w-36 shadow-lg overflow-hidden cursor-pointer`}
                            >
                                {/* Inner Content Wrapper (Static Text) */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-4xl md:text-5xl font-bold text-black">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-black/70 font-medium mt-2">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>

                                {/* Rotating Layer with Subtle Gradient */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-transparent to-transparent opacity-20"
                                    style={{ zIndex: -1 }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{
                                        duration: 1.2,
                                        ease: 'easeInOut',
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
