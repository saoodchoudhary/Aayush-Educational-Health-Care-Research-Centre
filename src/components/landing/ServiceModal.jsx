import React from 'react';
import { X, Phone, Check, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceModal({ service, onClose }) {
    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
                >
                    {/* Header Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                        <img
                            src={service.heroImage}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.style.background = '#005D6B';
                            }}
                        />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute inset-0 flex items-end p-6">
                            <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-5">
                        {/* Description */}
                        <p className="text-slate-600 text-base leading-relaxed">{service.description}</p>

                        {/* Bullets */}
                        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                            <p className="font-semibold text-slate-900 mb-3">Benefits & what it treats:</p>
                            <ul className="space-y-2.5">
                                {service.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#005D6B]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-[#005D6B]" />
                                        </div>
                                        <span className="text-slate-700 text-sm">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button asChild className="flex-1 h-12 bg-[#005D6B] hover:bg-[#004d59] text-white font-semibold">
                                <a href="https://wa.me/917903448270?text=I%20want%20to%20book%20an%20appointment%20for%20" target="_blank" rel="noopener noreferrer">
                                    <Calendar className="w-4 h-4 mr-2" /> Book Appointment
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="flex-1 h-12 border-slate-300 text-slate-700 hover:border-[#005D6B] hover:text-[#005D6B]">
                                <a href="tel:+917903448270">
                                    <Phone className="w-4 h-4 mr-2" /> +91 79034 48270
                                </a>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
