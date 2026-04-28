import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Visit Us / Book Appointment</h2>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">Call, WhatsApp, or walk in. Dr. Asif is ready to help you on your healing journey.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-[#005D6B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-[#005D6B]" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Call Us</p>
                                <a href="tel:+917903448270" className="text-[#005D6B] text-lg font-medium hover:underline">+91 79034 48270</a>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-[#005D6B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MessageCircle className="w-6 h-6 text-[#005D6B]" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">WhatsApp</p>
                                <a
                                    href="https://wa.me/917903448270?text=I%20want%20to%20book%20an%20appointment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#005D6B] font-medium hover:underline"
                                >
                                    Chat on WhatsApp →
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-[#005D6B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-[#005D6B]" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Clinic Address</p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Ground Floor, i 14, Thokar No. 4,<br />
                                    Abul Fazal Enclave Part 1,<br />
                                    Jamia Nagar, Okhla,<br />
                                    New Delhi – 110025
                                </p>
                                <a
                                    href="https://www.google.com/maps/place/Dr.Asif+Azim+Aayush+Educational+%26+Health+Care+Research+Centre/@28.5541265,77.2952263,17z"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#005D6B] text-sm font-medium hover:underline mt-1 inline-block"
                                >
                                    Get Directions →
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-[#005D6B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Clock className="w-6 h-6 text-[#005D6B]" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Clinic Timings</p>
                                <p className="text-slate-600 text-sm">Monday – Saturday: 2:30 pm – 9:00 pm</p>
                                <p className="text-slate-500 text-xs mt-0.5">Sunday: By appointment only</p>
                            </div>
                        </div>

                        {/* Book CTA */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button asChild className="bg-[#005D6B] hover:bg-[#004d59] text-white font-semibold flex-1 h-12">
                                <a href="https://wa.me/917903448270?text=I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
                                    <Calendar className="w-4 h-4 mr-2" /> Book via WhatsApp
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="border-[#005D6B] text-[#005D6B] hover:bg-[#005D6B]/5 flex-1 h-12">
                                <a href="tel:+917903448270">
                                    <Phone className="w-4 h-4 mr-2" /> Call Now
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Google Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-[420px]"
                    >
                        <iframe
                            title="Dr. Asif Azim Clinic Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1!2d77.2952263!3d28.5541265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5985a962795%3A0xeaa422751ff48bc4!2sDr.Asif%20Azim%20Aayush%20Educational%20%26%20Health%20Care%20Research%20Centre!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
