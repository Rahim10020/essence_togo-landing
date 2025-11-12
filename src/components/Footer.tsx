'use client'

import { MapPin, Mail, Github, Twitter, Facebook, Phone } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-[#0C67AD] p-2 rounded-lg">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white">EssenceTogo</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                            L'application mobile qui vous guide vers les stations-service les plus proches au Togo.
                            Simple, rapide et gratuit.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-[#0C67AD] p-3 rounded-lg transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-[#0C67AD] p-3 rounded-lg transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/Rahim10020/essence-togo"
                                className="bg-gray-800 hover:bg-[#0C67AD] p-3 rounded-lg transition-colors duration-300"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Liens rapides</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#features" className="hover:text-[#0C67AD] transition-colors duration-300">
                                    Fonctionnalités
                                </a>
                            </li>
                            <li>
                                <a href="#download" className="hover:text-[#0C67AD] transition-colors duration-300">
                                    Télécharger
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Légal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="hover:text-[#0C67AD] transition-colors duration-300">
                                    Politique de confidentialité
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#0C67AD] transition-colors duration-300">
                                    Conditions d'utilisation
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <a href="tel:+228 91 79 61 15" className="hover:text-[#0C67AD] transition-colors duration-300">
                                        +228 91 79 61 15
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <Mail className="w-4 h-4" />
                                    <a href="mailto:rahim100codeur@gmail.com" className="hover:text-[#0C67AD] transition-colors">
                                        rahim100codeur@gmail.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="">
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            © {currentYear} EssenceTogo. Tous droits réservés. 🇹🇬
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}