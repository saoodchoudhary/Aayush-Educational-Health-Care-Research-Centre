import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Star, Users, Leaf, Clock } from 'lucide-react';

const reasons = [
    {
        icon: Heart,
        title: 'Holistic Natural Healing',
        description: "Dr. Asif Azim specialises in natural therapies that address the root cause of illness — not just the symptoms. Every treatment plan is personalised to the patient's needs."
    },
    {
        icon: ShieldCheck,
        title: 'Safe & Hygienic Practices',
        description: "The clinic maintains the highest standards of hygiene. All cupping equipment is single-use or thoroughly sterilised, ensuring complete safety for every patient."
    },
    {
        icon: Star,
        title: '4.9 ★ Rated by Patients',
        description: "With 46+ Google reviews averaging 4.9 stars, our patients consistently report significant relief and long-lasting results after treatment."
    },
    {
        icon: Users,
        title: 'Personal Doctor Attention',
        description: "Dr. Asif personally attends every patient — listening carefully, explaining thoroughly, and building a care plan that truly works for you."
    },
    {
        icon: Leaf,
        title: 'Ayush & Evidence-Based Care',
        description: "Treatments are rooted in classical Ayush medicine and validated through clinical experience — combining traditional wisdom with modern understanding of the body."
    },
    {
        icon: Clock,
        title: 'Convenient Timings',
        description: "Evening clinic hours (2:30 pm – 9:00 pm) make it easy for working professionals and students to get treatment without disrupting their day."
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why Choose Dr. Asif Azim?</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Hundreds of patients have experienced lasting relief through our natural therapies. Here's what sets us apart.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="flex gap-4"
                        >
                            <div className="w-12 h-12 bg-[#005D6B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <item.icon className="w-6 h-6 text-[#005D6B]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
