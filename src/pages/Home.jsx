import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Star, Calendar, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ServicesGrid from '@/components/landing/ServiceSection';
import AboutSection from '@/components/landing/AboutSection';
import FaqSection from '@/components/landing/FaqSection';
import ContactSection from '@/components/landing/ContactSection';
import GoogleReviews from '@/components/landing/GoogleReviews';

// ── Medical Services ──────────────────────────────────────────────────────────
// Images should be placed in /public/images/services/
const services = [
    {
        id: 'hijama-cupping',
        title: 'Hijama / Wet Cupping Therapy',
        heroImage: '/images/services/hijama.jpg',
        description: "Hijama (wet cupping) is a powerful prophetic and traditional healing therapy that draws out stagnant blood and toxins from the body through controlled suction. Highly effective for chronic pain, fatigue, high blood pressure, and immune support. Dr. Asif uses sterile single-use equipment to ensure complete safety.",
        bullets: [
            'Relieves chronic pain, migraines and headaches',
            'Improves blood circulation and lymphatic drainage',
            'Boosts immune system and energy levels',
            'Effective for skin conditions and detoxification',
            'Sterile, single-use equipment — 100% safe',
        ],
    },
    {
        id: 'dry-cupping',
        title: 'Dry & Dynamic Cupping',
        heroImage: '/images/services/dry-cupping.jpg',
        description: "Dry and dynamic cupping are non-invasive forms of cupping therapy that use suction without incision. The cups are moved across the skin (dynamic) or kept stationary (dry) to relax muscles, improve blood flow, and treat localised pain and stiffness. Ideal for first-time patients.",
        bullets: [
            'No incision — completely non-invasive',
            'Relieves muscle tension and back pain',
            'Ideal for sports recovery and stiffness',
            'Suitable for all ages including children',
            'Can be combined with other therapies',
        ],
    },
    {
        id: 'head-cupping',
        title: 'Head Cupping (Scalp & Hair)',
        heroImage: '/images/services/head-cupping.jpg',
        description: "Head cupping stimulates blood flow to the scalp, nourishes hair follicles, and removes toxin build-up that contributes to hair loss, dandruff, and scalp conditions. Performed without penetration, this therapy is safe and deeply relaxing. Patients report stronger, denser hair after regular sessions.",
        bullets: [
            'Stimulates hair follicles and promotes hair growth',
            'Controls hair fall and strengthens existing hair',
            'Treats dandruff and scalp conditions',
            'Relieves migraines and headaches',
            'No incision — performed without penetration',
        ],
    },
    {
        id: 'knee-joint-pain',
        title: 'Knee & Joint Pain Treatment',
        heroImage: '/images/services/knee-pain.jpg',
        description: "Dr. Asif Azim has helped hundreds of patients find relief from knee pain, back pain, and joint disorders through targeted natural therapies. Using a combination of cupping, marma therapy, and herbal applications, the treatment addresses the root cause of pain for long-lasting results.",
        bullets: [
            'Effective for knee pain, back pain & lower back pain',
            'Reduces inflammation and joint stiffness',
            'Improves mobility and range of motion',
            'Non-surgical, drug-free natural healing',
            'Personalised treatment plan for each patient',
        ],
    },
    {
        id: 'marma-therapy',
        title: 'Marma Therapy',
        heroImage: '/images/services/marma-therapy.jpg',
        description: "Marma Therapy is an ancient Ayurvedic healing technique that works on 107 vital energy points distributed throughout the body. Stimulating these points releases blocked prana (life energy), relieving stress, anxiety, chronic pain, and supporting mental and physical wellbeing.",
        bullets: [
            'Releases stress, anxiety and mental tension',
            'Relieves chronic pain at the energy level',
            'Improves sleep quality and overall vitality',
            'Balances physical and emotional health',
            'Complementary to cupping and other therapies',
        ],
    },
    {
        id: 'steam-nadi',
        title: 'Steam Bath & Nadi Samvedna',
        heroImage: '/images/services/steam-bath.jpg',
        description: "Steam bath therapy opens pores, eliminates toxins through sweat, and deeply relaxes muscles. Combined with Nadi Samvedna (pulse diagnosis & nerve stimulation), it forms a powerful detox and rejuvenation protocol that prepares the body for deeper healing therapies.",
        bullets: [
            'Deep detoxification through sweat',
            'Relieves muscle soreness and joint stiffness',
            'Improves skin texture and complexion',
            'Enhances the effectiveness of cupping sessions',
            'Calms the nervous system and reduces stress',
        ],
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* ── Hero ──────────────────────────────────────────────────────── */}
            <section className="relative flex items-center overflow-hidden min-h-[92vh]">
                {/* Hero Background */}
                <div className="absolute inset-0 bg-[#003d47]">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Dr. Asif Azim Clinic"
                        className="w-full h-full object-cover object-center opacity-30"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#003d47]/80 via-[#005D6B]/60 to-[#003d47]/80" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24 w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Hero Content */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 text-center lg:text-left"
                        >
                            {/* Rating Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-white text-sm font-medium">4.9 · 46+ Happy Patients</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg tracking-tight">
                                Dr. Asif Azim
                            </h1>
                            <p className="text-[#7ecdd5] text-xl sm:text-2xl font-medium mb-4">
                                Aayush Educational &amp; Health Care Research Centre
                            </p>
                            <p className="text-white/80 text-lg mb-8 max-w-xl">
                                Natural healing through Hijama, Cupping Therapy, Marma Therapy &amp; more. Trusted by hundreds across New Delhi.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mb-10">
                                {[
                                    { icon: MapPin, text: 'Jamia Nagar, Okhla, New Delhi' },
                                    { icon: Star, text: 'Health Consultant & Natural Healer' },
                                    { icon: Phone, text: '+91 79034 48270' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.text}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="flex items-center gap-2"
                                    >
                                        <item.icon className="w-4 h-4 text-[#7ecdd5] flex-shrink-0" />
                                        <span className="text-white/90 font-medium text-sm">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <Button asChild className="h-14 px-7 bg-[#005D6B] hover:bg-[#004d59] text-white font-semibold text-base shadow-lg border border-[#7ecdd5]/30">
                                    <a href="https://wa.me/917903448270?text=I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
                                        <Calendar className="w-4 h-4 mr-2" /> Book Appointment
                                    </a>
                                </Button>
                                <a href="tel:+917903448270" className="h-14 px-7 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md flex items-center justify-center gap-2 text-base font-semibold transition-all">
                                    <Phone className="w-4 h-4" /> +91 79034 48270
                                </a>
                            </div>
                        </motion.div>

                        {/* Doctor Photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#7ecdd5]/50 shadow-2xl bg-[#005D6B]/30"
                        >
                            <img
                                src="/images/doctor.jpg"
                                alt="Dr. Asif Azim"
                                className="w-full h-full object-cover object-top"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center"><svg class="w-32 h-32 text-[#7ecdd5]/50" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg><p class="text-[#7ecdd5]/70 text-sm mt-2">Upload doctor.jpg<br/>to /public/images/</p></div>`;
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Stats Bar ─────────────────────────────────────────────────── */}
            <section className="bg-[#005D6B] py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                        {[
                            { number: '4.9★', label: 'Google Rating' },
                            { number: '46+', label: 'Patient Reviews' },
                            { number: '6+', label: 'Therapies Offered' },
                            { number: '4+', label: 'Years Experience' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-white text-2xl sm:text-3xl font-bold mb-1">{stat.number}</div>
                                <div className="text-[#7ecdd5] text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Google Reviews ─────────────────────────────────────────────── */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <GoogleReviews />
                </div>
            </section>

            {/* ── All Service Sections ───────────────────────────────────────── */}
            <ServicesGrid services={services} />

            {/* ── About / Why Choose ──────────────────────────────────────────── */}
            <AboutSection />

            {/* ── FAQ ────────────────────────────────────────────────────────── */}
            <FaqSection />

            {/* ── Contact / Map ───────────────────────────────────────────────── */}
            <ContactSection />

            {/* ── Final CTA ──────────────────────────────────────────────────── */}
            <section className="py-20 lg:py-28 bg-[#005D6B] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                            Start Your Healing Journey Today
                        </h2>
                        <p className="text-[#7ecdd5] text-lg mb-10 max-w-2xl mx-auto">
                            Book your appointment with Dr. Asif Azim and experience the power of natural healing. Call us or reach out on WhatsApp.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="h-14 px-8 bg-white text-[#005D6B] hover:bg-slate-100 text-lg font-semibold shadow-lg">
                                <a href="https://wa.me/917903448270?text=I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
                                </a>
                            </Button>
                            <a href="tel:+917903448270" className="h-14 px-8 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md flex items-center justify-center gap-2 text-lg font-semibold transition-all">
                                <Phone className="w-5 h-5" /> +91 79034 48270
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

