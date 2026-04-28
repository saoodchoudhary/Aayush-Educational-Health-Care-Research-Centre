import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Contact() {
    const [form, setForm] = useState({ name: '', phone: '', treatment: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `New Appointment Request\n\nName: ${form.name}\nPhone: ${form.phone}\nTreatment: ${form.treatment}\nMessage: ${form.message}`;
        const waUrl = `https://wa.me/917903448270?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Page Header */}
            <div className="bg-[#005D6B] py-16 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contact & Book Appointment</h1>
                        <p className="text-[#7ecdd5] text-lg">Reach out by call, WhatsApp, or fill the form below</p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-[#005D6B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-[#005D6B]" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Call Us</p>
                                <a href="tel:+917903448270" className="text-[#005D6B] text-lg font-medium hover:underline">+91 79034 48270</a>
                                <p className="text-slate-500 text-sm mt-0.5">Available during clinic hours</p>
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
                                <p className="text-slate-500 text-sm mt-0.5">Fastest way to book</p>
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
                                    className="text-[#005D6B] text-sm font-medium hover:underline mt-1.5 inline-block"
                                >
                                    Open in Google Maps →
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-[#005D6B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Clock className="w-6 h-6 text-[#005D6B]" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Clinic Timings</p>
                                <div className="text-slate-600 text-sm space-y-0.5">
                                    <p>Monday – Saturday: 2:30 pm – 9:00 pm</p>
                                    <p className="text-slate-500">Sunday: By appointment only</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="rounded-2xl overflow-hidden h-52 border border-slate-100 shadow-sm mt-2">
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
                        </div>
                    </motion.div>

                    {/* Appointment Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Book an Appointment</h2>
                            <p className="text-slate-500 text-sm mb-6">Fill in your details — we'll send it to WhatsApp directly.</p>

                            {submitted ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-[#005D6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MessageCircle className="w-8 h-8 text-[#005D6B]" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Request Sent!</h3>
                                    <p className="text-slate-500 text-sm">Your WhatsApp message was opened. Dr. Asif will confirm your appointment shortly.</p>
                                    <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6 border-[#005D6B] text-[#005D6B]">
                                        Book Another
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#005D6B] focus:ring-1 focus:ring-[#005D6B] text-sm bg-white"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp Number *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#005D6B] focus:ring-1 focus:ring-[#005D6B] text-sm bg-white"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Treatment Required</label>
                                        <select
                                            value={form.treatment}
                                            onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#005D6B] focus:ring-1 focus:ring-[#005D6B] text-sm bg-white"
                                        >
                                            <option value="">Select treatment (optional)</option>
                                            <option>Hijama / Wet Cupping Therapy</option>
                                            <option>Dry & Dynamic Cupping</option>
                                            <option>Head Cupping (Hair & Scalp)</option>
                                            <option>Knee & Joint Pain Treatment</option>
                                            <option>Marma Therapy</option>
                                            <option>Steam Bath & Nadi Samvedna</option>
                                            <option>Fire Cupping Therapy</option>
                                            <option>General Consultation</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Problem / Message</label>
                                        <textarea
                                            rows={4}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#005D6B] focus:ring-1 focus:ring-[#005D6B] text-sm bg-white resize-none"
                                            placeholder="Briefly describe your health concern or any questions you have..."
                                        />
                                    </div>
                                    <Button type="submit" className="w-full h-12 bg-[#005D6B] hover:bg-[#004d59] text-white font-semibold">
                                        <Send className="w-4 h-4 mr-2" /> Send via WhatsApp
                                    </Button>
                                    <p className="text-xs text-slate-400 text-center">
                                        This will open WhatsApp with your details pre-filled.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
