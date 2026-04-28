import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ExternalLink, X } from 'lucide-react';

const reviews = [
    {
        name: "Matloob Ahmad",
        rating: 5,
        text: "Excellent service with full customer satisfaction and got better results particularly in Hijama therapy, personally experienced. Highly recommend Dr. Asif Azim for natural healing treatments.",
        avatar: "M"
    },
    {
        name: "Mohd Fahim",
        rating: 5,
        text: "Jaitpur Branch mein Maine doctor Asif ke clinic par treatment liya hai. Steam bath, nadi samvedna, cupping therapy, hijama, dry cupping, dynamic cupping — mujhe bahut achcha result mila hai. Aap log bhi aayein aur yahan ka ilaaj karvayen. Shukriya Dr. Asif!",
        avatar: "F"
    },
    {
        name: "Ashhar Alam",
        rating: 5,
        text: "Best clinic for hijama. I am currently taking hijama sessions for hair and I get the result — my hair became stronger and denser than earlier. Highly recommend!",
        avatar: "A"
    },
    {
        name: "sadaf khan",
        rating: 5,
        text: "I had a wonderful experience with Dr. Asif Azim at Aayush Educational & Health Care Research Centre. His fire cupping therapy gave me quick relief after just one session. What touched me most was that Dr. Azim also offered prayers (dua) for my quick recovery, which made me feel truly cared for. I highly recommend this clinic to anyone seeking natural and holistic treatment.",
        avatar: "S"
    },
    {
        name: "KHURSHID ANWER",
        rating: 5,
        text: "Great experience. Dr. Asif has good knowledge. Dr. Asif will explain to you very well about physical and mental health. The clinic is hygienic. Must visit for cupping therapy.",
        avatar: "K"
    },
    {
        name: "Aamir Farhaan",
        rating: 5,
        text: "Dr. Asif Azim is a great doctor! From his excellent treatment, curiosity, investigative mind and ability to connect — he's very understanding and listens to your deep concerns. Especially hijama & Marma therapy — after that feel like mind has freed from pain, stress, anxiety. I highly recommend him to everyone. A BIG Thank you to Dr. Asif sir.",
        avatar: "A"
    },
    {
        name: "Rubab Alam",
        rating: 5,
        text: "Well services — head cupping therapy without penetration and benefit with head cupping therapy: migraine, dandruff, hair fall control natural healing. Thanks Dr. Asif Azim.",
        avatar: "R"
    },
    {
        name: "Abdul kalam",
        rating: 5,
        text: "Maine knee ka treatment liya — mujhe bahut fayda hua, alhamdulillah. Main kaafi time se knee ko lekar pareshan tha. Allah pak ki rahmat mein ab kaafi behtar aaram mahsoos kar raha hoon. Shukriya Dr. Asif!",
        avatar: "A"
    },
];

export default function GoogleReviews() {
    const [selected, setSelected] = useState(null);

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
                    <span className="text-slate-600 font-medium">Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#005D6B] text-[#005D6B]" />
                        ))}
                    </div>
                    <span className="font-bold text-slate-900">4.9</span>
                    <span className="text-slate-500 text-sm">(46 reviews)</span>
                </div>
                <a
                    href="https://www.google.com/maps/place/Dr.Asif+Azim+Aayush+Educational+%26+Health+Care+Research+Centre/@28.5541265,77.2952263,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#005D6B] hover:underline flex items-center gap-1 text-sm font-medium"
                >
                    View all on Google <ExternalLink className="w-3 h-3" />
                </a>
            </div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.07 }}
                        onClick={() => setSelected(review)}
                        className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 cursor-pointer hover:shadow-md hover:border-[#005D6B]/20 transition-all duration-200"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-[#005D6B] flex items-center justify-center text-white font-medium flex-shrink-0">
                                {review.avatar}
                            </div>
                            <p className="font-medium text-slate-900 text-sm">{review.name}</p>
                        </div>
                        <div className="flex mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-[#005D6B] text-[#005D6B]" />
                            ))}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">"{review.text}"</p>
                        <p className="text-xs text-[#005D6B] font-medium mt-2">Read more →</p>
                    </motion.div>
                ))}
            </div>

            {/* Full Review Modal */}
            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelected(null)} />
                        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 z-10">
                            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">
                                <X className="w-4 h-4 text-slate-600" />
                            </button>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-[#005D6B] flex items-center justify-center text-white font-semibold text-lg">
                                    {selected.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">{selected.name}</p>
                                    <div className="flex mt-0.5">
                                        {[...Array(selected.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-[#005D6B] text-[#005D6B]" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-700 leading-relaxed">"{selected.text}"</p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
