'use client'

import { motion } from 'framer-motion'
import { Download, CheckCircle, Smartphone } from 'lucide-react'

export default function DownloadSection() {
    return (
        <section id="download" className="py-20 md:py-32 bg-gradient-to-br from-[#0C67AD] via-[#084B7A] to-[#0C67AD] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Smartphone className="w-6 h-6" />
                            <span className="text-sm font-semibold uppercase tracking-wide">
                                Disponible maintenant
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Téléchargez EssenceTogo
                            <span className="block text-[#FFC107]">gratuitement</span>
                        </h2>

                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Rejoignez des milliers d'utilisateurs qui trouvent facilement leur station-service au Togo.
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-4 mb-10">
                            {[
                                '✓ Gratuit à vie, aucun achat caché',
                                '✓ Fonctionne hors ligne',
                                '✓ Mises à jour régulières',
                                '✓ Support en français, anglais et éwé',
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle className="w-6 h-6 text-[#4CAF50] flex-shrink-0" />
                                    <span className="text-lg">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Download Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Google Play Button */}
                            <a
                                href="#"
                                className="group bg-white hover:bg-gray-100 text-gray-900 px-6 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-4"
                            >
                                <div className="bg-[#0C67AD] p-3 rounded-xl group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-gray-600">Télécharger sur</div>
                                    <div className="text-lg font-bold">Google Play</div>
                                </div>
                            </a>

                            {/* APK Direct Download (Optional) */}
                            <a
                                href="#"
                                className="group border-2 border-white hover:bg-white hover:text-[#0C67AD] px-6 py-4 rounded-2xl transition-all duration-300 flex items-center gap-3 justify-center"
                            >
                                <Download className="w-6 h-6" />
                                <span className="font-bold">Télécharger APK</span>
                            </a>
                        </div>

                        {/* Version Info */}
                        <div className="mt-6 text-sm text-blue-200">
                            Version 1.0.0 • Compatible Android 7.0+
                        </div>
                    </motion.div>

                    {/* Right Column - Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#FFC107] rounded-full blur-2xl opacity-50"></div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#4CAF50] rounded-full blur-2xl opacity-50"></div>

                            {/* Phone Mockup */}
                            <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl max-w-sm mx-auto">
                                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                                    <div className="aspect-[9/19.5] bg-gradient-to-br from-[#0C67AD] to-[#5A9BD4] flex flex-col items-center justify-center p-8">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-12 mb-6">
                                            <Download className="w-24 h-24 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-3 text-center">
                                            EssenceTogo
                                        </h3>
                                        <p className="text-white/90 text-center mb-6">
                                            Prêt à télécharger
                                        </p>
                                        <div className="bg-[#FFC107] text-gray-900 font-bold px-8 py-3 rounded-full">
                                            Installer
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 pt-12 border-t border-white/20"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '50+', label: 'Stations' },
                            { number: '100%', label: 'Gratuit' },
                            { number: '3', label: 'Langues' },
                            { number: '24/7', label: 'Disponible' },
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl md:text-5xl font-bold text-[#FFC107] mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-blue-100">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}