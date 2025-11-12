'use client'

import { motion } from 'framer-motion'
import { Download, MapPin, Navigation } from 'lucide-react'

const steps = [
    {
        number: '01',
        icon: Download,
        title: 'Téléchargez l\'app',
        description: 'Téléchargez EssenceTogo gratuitement depuis le Google Play Store.',
    },
    {
        number: '02',
        icon: MapPin,
        title: 'Activez la localisation',
        description: 'Autorisez l\'accès à votre position pour trouver les stations proches.',
    },
    {
        number: '03',
        icon: Navigation,
        title: 'Naviguez facilement',
        description: 'Choisissez votre station et lancez la navigation directement.',
    },
]

export default function HowItWorks() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
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
                        Comment ça <span className="text-[#0C67AD]">fonctionne ?</span>
                    </h2>
                    <p className="section-subtitle">
                        Trois étapes simples pour trouver votre station-service
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Lines (hidden on mobile) */}
                    <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0C67AD]/30 to-transparent"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative z-10">
                                {/* Step Number */}
                                <div className="absolute -top-6 left-8 bg-gradient-to-br from-[#0C67AD] to-[#084B7A] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div className="bg-gradient-to-br from-[#0C67AD]/10 to-[#5A9BD4]/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mt-4 mx-auto">
                                    <step.icon className="w-10 h-10 text-[#0C67AD]" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0C67AD]/10 to-[#5A9BD4]/10 px-6 py-3 rounded-full">
                        <span className="text-2xl">⚡</span>
                        <span className="text-gray-700 font-medium">
                            C'est aussi simple que ça !
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}