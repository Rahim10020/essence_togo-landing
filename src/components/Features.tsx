'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Star, History, Search, Wifi, Globe, Heart } from 'lucide-react'

const features = [
    {
        icon: MapPin,
        title: 'Localisation en temps réel',
        description: 'Trouvez les stations les plus proches de votre position actuelle avec calcul de distance précis.',
        color: 'bg-blue-500',
    },
    {
        icon: Navigation,
        title: 'Navigation intégrée',
        description: 'Lancez votre GPS directement depuis l\'app pour vous rendre à la station choisie.',
        color: 'bg-red-500',
    },
    {
        icon: Star,
        title: 'Favoris',
        description: 'Sauvegardez vos stations préférées pour y accéder rapidement.',
        color: 'bg-yellow-500',
    },
    {
        icon: History,
        title: 'Historique',
        description: 'Consultez l\'historique de vos stations visitées récemment.',
        color: 'bg-purple-500',
    },
    {
        icon: Search,
        title: 'Recherche avancée',
        description: 'Filtrez et recherchez des stations par nom ou adresse facilement.',
        color: 'bg-green-500',
    },
    {
        icon: Wifi,
        title: 'Mode hors ligne',
        description: 'Accédez aux données en cache même sans connexion internet.',
        color: 'bg-indigo-500',
    },
    {
        icon: Globe,
        title: 'Multilingue',
        description: 'Interface disponible en Français, English et Eʋegbe.',
        color: 'bg-pink-500',
    },
    {
        icon: Heart,
        title: '100% Gratuit',
        description: 'Aucun abonnement, aucun achat intégré. Totalement gratuit.',
        color: 'bg-rose-500',
    },
]

export default function Features() {
    return (
        <section id="features" className="py-20 md:py-32 bg-white">
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
                        Fonctionnalités <span className="text-[#0C67AD]">puissantes</span>
                    </h2>
                    <p className="section-subtitle">
                        Tout ce dont vous avez besoin pour trouver votre station-service au Togo
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#0C67AD]/20">
                                {/* Icon */}
                                <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <a href="#download" className="btn-primary inline-flex items-center gap-2">
                        Commencer maintenant
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}