import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#003d47] text-slate-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/images/logo.png"
                                alt="Dr. Asif Azim"
                                className="h-12 w-auto"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <div>
                                <div className="text-white font-bold text-lg leading-tight">Dr. Asif Azim</div>
                                <div className="text-[#7ecdd5] text-sm">Aayush Educational &amp; Health Care Research Centre</div>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm">
                            Natural healing through Hijama, Cupping Therapy, Marma Therapy and more. Trusted by hundreds of patients across New Delhi.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/Services" className="hover:text-white transition-colors">Our Services</Link></li>
                            <li><Link to="/About" className="hover:text-white transition-colors">About Dr. Asif</Link></li>
                            <li><Link to="/Gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link to="/Contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <Phone className="w-4 h-4 text-[#7ecdd5] flex-shrink-0 mt-0.5" />
                                <a href="tel:+917903448270" className="hover:text-white transition-colors">+91 79034 48270</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-[#7ecdd5] flex-shrink-0 mt-0.5" />
                                <span>Ground Floor, i 14, Thokar No. 4,<br />Abul Fazal Enclave, Jamia Nagar,<br />Okhla, New Delhi – 110025</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Clock className="w-4 h-4 text-[#7ecdd5] flex-shrink-0 mt-0.5" />
                                <span>Mon–Sat: 2:30 pm – 9:00 pm</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm">
                    © {new Date().getFullYear()} Dr. Asif Azim – Aayush Educational &amp; Health Care Research Centre. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
