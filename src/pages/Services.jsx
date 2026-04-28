import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, Phone, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { AnimatePresence } from 'framer-motion';

// Images go in /public/images/services/
const services = [
    {
        id: 'hijama-cupping',
        title: 'Hijama / Wet Cupping Therapy',
        image: '/images/services/hijama.jpg',
        tag: 'Most Popular',
        description: "Hijama (wet cupping) is a powerful prophetic and traditional healing therapy. Small incisions are made and cups are placed to draw out stagnant blood and toxins, dramatically improving circulation and promoting natural healing. Dr. Asif uses sterile, single-use equipment for every session.",
        conditions: ['Chronic Pain & Migraines', 'Fatigue & Low Energy', 'High Blood Pressure', 'Digestive Issues', 'Skin Conditions', 'General Detoxification'],
        benefits: [
            'Removes toxins and stagnant blood from body',
            'Relieves chronic pain, migraines and headaches',
            'Boosts immune system and energy levels',
            'Improves blood circulation throughout the body',
            'Sterile single-use equipment — 100% safe',
            'Quick relief — many patients feel better after 1 session',
        ],
    },
    {
        id: 'dry-cupping',
        title: 'Dry & Dynamic Cupping',
        image: '/images/services/dry-cupping.jpg',
        tag: 'Non-Invasive',
        description: "Dry and dynamic cupping are completely non-invasive cupping methods. In dry cupping, cups are placed stationary to create therapeutic suction. In dynamic cupping, cups are moved across the skin to loosen fascia and muscle tissue. Ideal for first-time patients and those with muscle tension.",
        conditions: ['Back & Shoulder Pain', 'Muscle Tension & Stiffness', 'Sports Recovery', 'Sciatica', 'Neck Pain', 'Postural Issues'],
        benefits: [
            'Completely non-invasive — no incisions',
            'Relieves deep muscle tension and back pain',
            'Ideal for sports recovery and stiffness',
            'Suitable for all ages including children',
            'Can be combined with Hijama for better results',
            'Relaxing and deeply therapeutic',
        ],
    },
    {
        id: 'head-cupping',
        title: 'Head Cupping (Scalp & Hair)',
        image: '/images/services/head-cupping.jpg',
        tag: 'Hair Specialist',
        description: "Head cupping performed without penetration stimulates blood flow to the scalp, nourishes hair follicles, and clears toxin buildup that causes hair loss and scalp conditions. Multiple patients have reported visibly stronger, denser hair growth after just a few sessions with Dr. Asif.",
        conditions: ['Hair Fall & Thinning', 'Dandruff & Scalp Issues', 'Migraines & Headaches', 'Mental Stress & Anxiety', 'Poor Sleep', 'Sinusitis'],
        benefits: [
            'Stimulates blood flow to hair follicles',
            'Controls hair fall and promotes new growth',
            'Treats dandruff and scalp conditions naturally',
            'Relieves migraines and headaches',
            'Performed without penetration — 100% safe',
            'Patients report stronger, denser hair in weeks',
        ],
    },
    {
        id: 'knee-joint-pain',
        title: 'Knee & Joint Pain Treatment',
        image: '/images/services/knee-pain.jpg',
        tag: 'Pain Relief',
        description: "Dr. Asif has helped hundreds of patients find lasting relief from knee pain, back pain, lower back pain, and joint disorders. Using targeted cupping, marma therapy, and herbal applications, the treatment addresses inflammation and root causes rather than just masking pain with medication.",
        conditions: ['Knee Pain', 'Back Pain', 'Lower Back Pain', 'Joint Inflammation', 'Arthritis Pain', 'Sciatica'],
        benefits: [
            'Targets root cause of pain, not just symptoms',
            'Reduces joint inflammation naturally',
            'Improves mobility and range of motion',
            'Drug-free, non-surgical treatment',
            'Personalised plan based on your condition',
            'Proven results — hundreds of satisfied patients',
        ],
    },
    {
        id: 'marma-therapy',
        title: 'Marma Therapy',
        image: '/images/services/marma-therapy.jpg',
        tag: 'Ayurvedic',
        description: "Marma Therapy is an ancient Ayurvedic healing practice that works on 107 vital energy points in the body. Stimulating these points releases blocked prana (life force), relieving chronic stress, anxiety, and pain at the deepest level. Combined with cupping, it produces remarkable results for overall wellbeing.",
        conditions: ['Chronic Stress & Anxiety', 'Mental Fatigue', 'Chronic Pain', 'Sleep Disorders', 'Emotional Imbalance', 'Digestive Issues'],
        benefits: [
            'Releases deep-seated stress and anxiety',
            'Balances life energy (prana) flow in the body',
            'Improves sleep quality and mental clarity',
            'Relieves chronic pain at the energy level',
            'Supports emotional and psychological balance',
            'Complements cupping therapy for full healing',
        ],
    },
    {
        id: 'steam-nadi',
        title: 'Steam Bath & Nadi Samvedna',
        image: '/images/services/steam-bath.jpg',
        tag: 'Detox',
        description: "Steam bath therapy opens pores and eliminates toxins through sweat, deeply relaxing muscles and joints. Nadi Samvedna (pulse diagnosis & nerve stimulation) identifies energy blockages in the body. Together, these therapies form a powerful detox and rejuvenation protocol that prepares the body for deeper healing.",
        conditions: ['Toxin Accumulation', 'Skin Conditions', 'Respiratory Issues', 'Muscle Soreness', 'Joint Stiffness', 'Stress & Tension'],
        benefits: [
            'Deep detoxification through therapeutic sweat',
            'Opens pores and improves skin health',
            'Relieves muscle soreness and joint stiffness',
            'Calms the nervous system and reduces stress',
            'Enhances the effectiveness of cupping sessions',
            'Improves breathing and respiratory function',
        ],
    },
    {
        id: 'fire-cupping',
        title: 'Fire Cupping Therapy',
        image: '/images/services/fire-cupping.jpg',
        tag: 'Traditional',
        description: "Fire cupping is a traditional form of cupping therapy where a flame is briefly placed inside a glass cup to create suction as it is placed on the skin. This ancient technique provides deep therapeutic suction and warmth that penetrates tissue more effectively than mechanical cups in certain conditions.",
        conditions: ['Deep Muscle Pain', 'Cold & Flu Recovery', 'Respiratory Conditions', 'Joint Stiffness', 'Digestive Weakness', 'Fatigue'],
        benefits: [
            'Deep therapeutic warmth and suction',
            'Effective for cold, flu and respiratory issues',
            'Promotes deep muscle relaxation',
            'Traditional technique with centuries of proven use',
            'Performed by experienced practitioner',
            'Combines well with Hijama for full detox',
        ],
    },
];

function ServiceAccordion({ service, index }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
        >
            {/* Image + Title row */}
            <div
                className="flex items-center gap-4 p-5 cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(!open)}
            >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-[#005D6B]/10">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                        }}
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-bold text-slate-900 text-base sm:text-lg">{service.title}</h3>
                        <span className="text-xs font-semibold bg-[#005D6B]/10 text-[#005D6B] px-2 py-0.5 rounded-full">{service.tag}</span>
                    </div>
                    <p className="text-slate-500 text-sm line-clamp-2">{service.description}</p>
                </div>
                <ChevronDown className={`w-5 h-5 text-[#005D6B] flex-shrink-0 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </div>

            {/* Expanded content */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-6 border-t border-slate-100 pt-5">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Conditions treated */}
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Conditions Treated</h4>
                                    <ul className="space-y-1.5">
                                        {service.conditions.map((c) => (
                                            <li key={c} className="flex items-center gap-2 text-sm text-slate-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#005D6B] flex-shrink-0" />
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Benefits */}
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Key Benefits</h4>
                                    <ul className="space-y-2">
                                        {service.benefits.map((b) => (
                                            <li key={b} className="flex items-start gap-2">
                                                <div className="w-5 h-5 rounded-full bg-[#005D6B]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 text-[#005D6B]" />
                                                </div>
                                                <span className="text-slate-700 text-sm">{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-5">
                                <Button asChild className="flex-1 bg-[#005D6B] hover:bg-[#004d59] text-white font-semibold">
                                    <a href={`https://wa.me/917903448270?text=I%20want%20to%20book%20a%20session%20for%20${encodeURIComponent(service.title)}`} target="_blank" rel="noopener noreferrer">
                                        <Calendar className="w-4 h-4 mr-2" /> Book This Treatment
                                    </a>
                                </Button>
                                <Button asChild variant="outline" className="flex-1 border-slate-200 hover:border-[#005D6B] text-slate-700">
                                    <a href="tel:+917903448270">
                                        <Phone className="w-4 h-4 mr-2" /> Call for Info
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function Services() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Page Header */}
            <div className="bg-[#005D6B] py-16 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Treatments & Therapies</h1>
                        <p className="text-[#7ecdd5] text-lg max-w-2xl mx-auto">
                            Dr. Asif Azim offers a range of natural, Ayush-approved healing therapies at Aayush Educational &amp; Health Care Research Centre.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Services List */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-4">
                {services.map((service, index) => (
                    <ServiceAccordion key={service.id} service={service} index={index} />
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="bg-slate-50 py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Not sure which treatment is right for you?</h2>
                    <p className="text-slate-500 mb-8">Call or WhatsApp Dr. Asif Azim for a free consultation. He will guide you to the most suitable therapy for your condition.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild className="h-12 px-8 bg-[#005D6B] hover:bg-[#004d59] text-white font-semibold">
                            <a href="https://wa.me/917903448270?text=I%20need%20advice%20on%20which%20treatment%20is%20right%20for%20me" target="_blank" rel="noopener noreferrer">
                                WhatsApp for Free Advice
                            </a>
                        </Button>
                        <Button asChild variant="outline" className="h-12 px-8 border-[#005D6B] text-[#005D6B] hover:bg-[#005D6B]/5">
                            <a href="tel:+917903448270">+91 79034 48270</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
