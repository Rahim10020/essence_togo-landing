'use client'

import { motion } from 'framer-motion'
import { Smartphone } from 'lucide-react'

const screenshots = [
    {
        title: 'Accueil',
        description: 'Stations triées par distance',
        color: 'from-blue-500 to-blue-600',
    },
    {
        title: 'Recherche',
        description: 'Filtrage intelligent',
        color: 'from-green-500 to-green-600',
    },
    {
        title: 'Favoris',
        description: 'Vos stations préférées',
        color: 'from-yellow-500 to-yellow-600',
    },
    {
        title: 'Détails',
        description: 'Infos complètes + navigation',
        color: 'from-red-500 to-red-600',
    },
]

export default function Screenshots() {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Découvrez l'<span className="text-[#0C67AD]">interface</span>
                    </h2>
                    <p className="section-subtitle">
                        Une application moderne et intuitive conçue pour vous
                    </p>
                </motion.div>

                {/* Screenshots Carousel */}
                <div className="relative">
                    <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                        {screenshots.map((screen, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex-shrink-0 snap-center"
                            >
                                <div className="relative group">
                                    {/* Phone Frame */}
                                    <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl w-[280px] group-hover:shadow-3xl transition-shadow duration-300">
                                        <div className="bg-white rounded-[2.5rem] overflow-hidden">
                                            {/* Screen Content Placeholder */}
                                            <div className={`aspect-[9/19.5] bg-gradient-to-br ${screen.color} p-8 flex flex-col items-center justify-center relative`}>
                                                {/* Top Bar */}
                                                <div className="absolute top-0 left-0 right-0 h-12 bg-black/10 backdrop-blur-sm flex items-center justify-between px-6">
                                                    <div className="text-white text-xs font-semibold">9:41</div>
                                                    <div className="flex gap-1">
                                                        <div className="w-4 h-4 bg-white/30 rounded"></div>
                                                        <div className="w-4 h-4 bg-white/30 rounded"></div>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="mt-16 text-center">
                                                    <Smartphone className="w-20 h-20 text-white/90 mx-auto mb-4" />
                                                    <h3 className="text-white font-bold text-xl mb-2">
                                                        {screen.title}
                                                    </h3>
                                                    <p className="text-white/80 text-sm">
                                                        {screen.description}
                                                    </p>
                                                </div>

                                                {/* Bottom placeholder elements */}
                                                <div className="absolute bottom-8 left-0 right-0 px-8">
                                                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl h-16 mb-4"></div>
                                                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl h-16"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Label */}
                                    <div className="mt-4 text-center">
                                        <div className="inline-block bg-gray-100 px-4 py-2 rounded-full">
                                            <span className="text-sm font-medium text-gray-700">
                                                {screen.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Scroll Hint */}
                    <div className="text-center mt-8 md:hidden">
                        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                            <span>←</span>
                            Faites défiler pour voir plus
                            <span>→</span>
                        </p>
                    </div>
                </div>

                {/* Features Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 grid md:grid-cols-3 gap-8"
                >
                    {[
                        { emoji: '🎨', title: 'Design moderne', text: 'Interface claire et élégante' },
                        { emoji: '⚡', title: 'Ultra rapide', text: 'Performance optimale' },
                        { emoji: '🌍', title: 'Adapté au Togo', text: 'Conçu pour les Togolais' },
                    ].map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl mb-3">{item.emoji}</div>
                            <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    )
}