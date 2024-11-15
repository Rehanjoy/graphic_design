'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Timeline() {
    const stats = [
        { number: '01', text: '20+ EXPERIENCE', color: '#FFD700' },
        { number: '02', text: '150+ PROJECTS', color: '#FFD700' },
        { number: '03', text: '135+  MEMBERS', color: '#FFD700' }
    ]

    return (
        <section className="bg-[#0D0D12]  rounded-xl min-h-screen">
            
            <div className="container mx-auto px-2 md:px-10 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                WE BUILD A STABLE CODE USING <br/> 
                                <span className="bg-pink-500 text-black p-[1px]">
                                
                                IN-HOUSE SOLUTIONS
                        </span>{' '}
                            </motion.h1>
                            <motion.p
                                className="text-gray-400 text-lg max-w-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Developing digital products since 2010. We help bring ideas to
                                life and create digital products that work.
                            </motion.p>
                        </div>

                        {/* Stats Section */}
                        <div className="space-y-8">
                            {stats.map((stat, index) => (
                                <motion.span
                                    key={stat.text}
                                    className="flex items-center gap-4 group px-2 bg-slate-50" // Added `group` here
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                >
                                    <div className="flex items-center justify-center space-x-4  group">
                                        {/* Large Number and Overlay Text Container */}
                                        <div className="relative inline-flex  space-y-8 items-center justify-center">
                                            {/* Large Number Background */}
                                            <span
                                                className="text-[120px] font-bold text-[#0D0D12] opacity-30 transition-all duration-300 ease-in-out group-hover:text-pink-500 group-hover:opacity-100"
                                                style={{
                                                    position: 'absolute',
                                                    zIndex: 1, // Place this behind the text
                                                }}
                                            >
                                                {stat.number}
                                            </span>

                                            {/* Overlay Text */}
                                            <span className="relative z-10 px-4 py-1 font-semibold text-gray-500 text-sm inline-block transition-colors duration-300 ease-in-out group-hover:bg-[#fbfbf8]  group-hover:border group-hover:text-black">
                                                {stat.text}
                                            </span>
                                        </div>
                                        <div>
                                            <h1 className='text-2xl text-gray-500 group-hover:text-pink-500'>sdasfsadfdasd sadasdasd</h1>
                                        </div>
                                    </div>


                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <motion.div
                        className="relative h-[600px]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Image
                            src="/placeholder.svg"
                            alt="Team collaboration"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
