import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Star, MapPin, Phone, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const credentials = [
    { icon: BookOpen, title: 'Ayush Practitioner', desc: 'Trained in traditional Ayush medicine with specialisation in cupping therapies and natural healing.' },
    { icon: Heart, title: 'Health Consultant', desc: 'Provides personalised health consultations addressing physical, mental and emotional wellbeing.' },
    { icon: Award, title: '4.9★ Rated on Google', desc: 'Consistently rated 4.9 out of 5 by patients on Google — one of the highest-rated natural health clinics in South Delhi.' },
    { icon: Star, title: 'Specialist in Hijama', desc: 'Expert in Hijama (wet cupping), dry cupping, dynamic cupping, fire cupping and head cupping therapies.' },
];

const therapies = [
    'Hijama / Wet Cupping Therapy',
    'Dry & Dynamic Cupping',
    'Head Cupping (Scalp & Hair)',
    'Fire Cupping Therapy',
    'Marma Therapy',
    'Steam Bath & Nadi Samvedna',
    'Knee & Joint Pain Treatment',
    'Back Pain Treatment',
];

export default function About() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Page Header */}
            <div className="bg-[#005D6B] py-16 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">About Dr. Asif Azim</h1>
                        <p className="text-[#7ecdd5] text-lg">
                            Natural Healer · Health Consultant · Aayush Practitioner
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Doctor Profile Section */}
            <section className="py-16 lg:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Doctor Photo */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center lg:justify-start"
                        >
                            <div className="relative">
                                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden bg-[#005D6B]/10 border-4 border-[#005D6B]/20 shadow-xl">
                                    <img
                                        src="/images/doctor.jpg"
                                        alt="Dr. Asif Azim"
                                        className="w-full h-full object-cover object-top"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center p-6 text-center"><svg class="w-24 h-24 text-[#005D6B]/30 mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg><p class="text-[#005D6B]/50 text-sm">Upload doctor.jpg to<br/>/public/images/</p></div>`;
                                        }}
                                    />
                                </div>
                                {/* Rating badge */}
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="font-bold text-slate-900 text-sm">4.9</span>
                                    <span className="text-slate-500 text-xs">(46+)</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bio Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-5"
                        >
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Dr. Asif Azim</h2>
                                <p className="text-[#005D6B] font-semibold text-lg mb-4">Health Consultant & Natural Healer</p>
                                <div className="w-16 h-1 bg-[#005D6B] rounded-full mb-6" />
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                Dr. Asif Azim is the founder and lead practitioner at <strong>Aayush Educational &amp; Health Care Research Centre</strong> (दर.आसिफ अज़ीम आयुष एजुकेशनल &amp; हेल्थ केयर रिसर्च सेंटर), located in Jamia Nagar, Okhla, New Delhi.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                With years of dedicated practice in traditional Ayush medicine, Dr. Asif specialises in Hijama (wet cupping), various cupping modalities, Marma Therapy, and other natural healing practices. His approach is holistic — addressing not just the physical symptoms but the mental and emotional dimensions of health as well.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Patients across New Delhi have experienced significant relief from chronic pain, hair loss, fatigue, stress, and many other conditions under his care. He is known for his thorough consultations, compassionate manner, and genuinely caring approach to every patient — often offering dua (prayers) alongside medical treatment.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 pt-3">
                                <Button asChild className="bg-[#005D6B] hover:bg-[#004d59] text-white font-semibold h-12">
                                    <a href="https://wa.me/917903448270?text=I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
                                        <Calendar className="w-4 h-4 mr-2" /> Book Appointment
                                    </a>
                                </Button>
                                <Button asChild variant="outline" className="border-[#005D6B] text-[#005D6B] hover:bg-[#005D6B]/5 h-12">
                                    <a href="tel:+917903448270">
                                        <Phone className="w-4 h-4 mr-2" /> Call: +91 79034 48270
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Credentials */}
            <section className="bg-slate-50 py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Credentials & Expertise</h2>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {credentials.map((cred, index) => (
                            <motion.div
                                key={cred.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center"
                            >
                                <div className="w-14 h-14 bg-[#005D6B]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <cred.icon className="w-7 h-7 text-[#005D6B]" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{cred.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{cred.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Therapies List */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Therapies Offered</h2>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                        {therapies.map((therapy, i) => (
                            <motion.div
                                key={therapy}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-sm"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#005D6B] flex-shrink-0" />
                                <span className="text-slate-700 text-sm font-medium">{therapy}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clinic Info */}
            <section className="bg-[#005D6B] py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">Visit the Clinic</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-8 text-[#7ecdd5]">
                        <div className="flex items-start gap-2 justify-center sm:justify-start">
                            <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <div className="text-left">
                                <p className="text-sm">Ground Floor, i 14, Thokar No. 4,</p>
                                <p className="text-sm">Abul Fazal Enclave, Jamia Nagar, Okhla,</p>
                                <p className="text-sm">New Delhi – 110025</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 justify-center sm:justify-start">
                                <Phone className="w-5 h-5 flex-shrink-0" />
                                <a href="tel:+917903448270" className="text-sm hover:text-white transition-colors">+91 79034 48270</a>
                            </div>
                            <p className="text-sm">Mon–Sat: 2:30 pm – 9:00 pm</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
