import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: "What is Hijama / Cupping Therapy?",
        a: "Hijama (wet cupping) is a traditional healing method in which small cups are placed on the skin to create suction, drawing out toxins and improving blood circulation. It is effective for pain relief, fatigue, and various chronic conditions. Dry cupping and dynamic cupping are non-invasive variants that are also offered at the clinic."
    },
    {
        q: "Is cupping therapy painful?",
        a: "Most patients find cupping therapy comfortable. You may feel a mild pulling sensation during the session. Any discomfort is minimal and temporary. Dr. Asif explains every step of the procedure before starting, ensuring you feel relaxed and informed throughout."
    },
    {
        q: "What conditions can be treated at this clinic?",
        a: "The clinic treats a wide range of conditions using natural therapies, including knee pain, back pain, lower back pain, migraines, hair fall, dandruff, skin issues, fatigue, stress, anxiety, and general wellbeing. Each patient receives a personalised treatment plan."
    },
    {
        q: "How many sessions will I need?",
        a: "The number of sessions depends on the condition and its severity. Many patients report significant improvement within 1–3 sessions. Dr. Asif will advise you on the recommended course of treatment after an initial consultation."
    },
    {
        q: "What is Head Cupping and how does it help hair fall?",
        a: "Head cupping (without penetration) improves blood circulation to the scalp, stimulates hair follicles, and helps reduce dandruff and hair fall. Multiple patients have reported stronger, denser hair after regular sessions."
    },
    {
        q: "What is Marma Therapy?",
        a: "Marma Therapy is an ancient Ayurvedic treatment that works on specific vital energy points in the body. It is effective for relieving stress, anxiety, chronic pain, and improving overall physical and mental wellbeing."
    },
    {
        q: "What are the clinic timings and location?",
        a: "The clinic is open Monday to Saturday from 2:30 pm to 9:00 pm. It is located at Ground Floor, i 14, Thokar No. 4, Abul Fazal Enclave Part 1, Jamia Nagar, Okhla, New Delhi – 110025. You can call or WhatsApp +91 79034 48270 to book an appointment."
    },
    {
        q: "Is the clinic hygienic and safe?",
        a: "Absolutely. The clinic maintains strict hygiene standards. All cupping instruments are either single-use or thoroughly sterilised before every session. Patient safety and comfort are the top priority."
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-20 lg:py-28 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
                    <p className="text-slate-500 text-lg">Everything you need to know before your first appointment.</p>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left"
                            >
                                <span className="font-semibold text-slate-900 text-sm pr-4">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-[#005D6B] flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
