'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Star } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0C67AD] to-[#084B7A] text-white pb-24 md:pb-32">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative flex min-h-[calc(100vh-6rem)] items-center">
                <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                                🇹🇬 Disponible au Togo
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Trouvez votre
                            <span className="block text-[#FFC107]">station-service</span>
                            en un clic
                        </h1>

                        <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                            L'application mobile qui vous guide vers les stations-service les plus proches au Togo.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">

                            <a href="#download" className="btn-primary inline-flex items-center justify-center gap-2 group">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z" />
                                </svg>
                                Télécharger sur Android
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>


                            <a href="#features" className="btn-secondary inline-flex items-center justify-center gap-2">
                                En savoir plus
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
                            <div>
                                <div className="text-3xl font-bold text-[#FFC107]">50+</div>
                                <div className="text-blue-100">Stations</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#FFC107]">3</div>
                                <div className="text-blue-100">Langues</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#FFC107]">100%</div>
                                <div className="text-blue-100">Gratuit</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative mx-auto w-full max-w-sm">
                            {/* Floating Icons */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-8 -left-8 bg-white p-4 rounded-2xl shadow-2xl"
                            >
                                <MapPin className="w-8 h-8 text-[#0C67AD]" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-2xl"
                            >
                                <Navigation className="w-8 h-8 text-[#F54107]" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                                className="absolute top-1/2 -right-4 bg-[#FFC107] p-4 rounded-2xl shadow-2xl"
                            >
                                <Star className="w-8 h-8 text-white" fill="white" />
                            </motion.div>

                            {/* Phone Frame */}
                            <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                                    <div className="aspect-[9/17.5] bg-gradient-to-b from-[#0C67AD] to-[#5A9BD4] flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-6">
                                                <MapPin className="w-20 h-20 mx-auto text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                EssenceTogo
                                            </h3>
                                            <p className="text-white/80 text-sm">
                                                Votre guide des stations
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white" />
                </svg>
            </div>
        </section>
    )
}