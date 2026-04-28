import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image, Upload } from 'lucide-react';

// ── Image paths — upload your photos to /public/images/gallery/ ───────────────
// Name them: photo1.jpg, photo2.jpg, ... photo12.jpg
// (or any of the suggested names below)
const galleryImages = [
    { src: '/images/gallery/clinic-1.jpg', caption: 'Clinic Front View' },
    { src: '/images/gallery/hijama-1.jpg', caption: 'Hijama Therapy Session' },
    { src: '/images/gallery/hijama-2.jpg', caption: 'Cupping Therapy' },
    { src: '/images/gallery/doctor-1.jpg', caption: 'Dr. Asif with Patient' },
    { src: '/images/gallery/head-cupping-1.jpg', caption: 'Head Cupping Therapy' },
    { src: '/images/gallery/steam-1.jpg', caption: 'Steam Bath Room' },
    { src: '/images/gallery/clinic-2.jpg', caption: 'Treatment Room' },
    { src: '/images/gallery/marma-1.jpg', caption: 'Marma Therapy Session' },
    { src: '/images/gallery/dry-cupping-1.jpg', caption: 'Dry Cupping' },
    { src: '/images/gallery/patient-1.jpg', caption: 'Patient Recovery' },
    { src: '/images/gallery/equipment-1.jpg', caption: 'Sterile Equipment' },
    { src: '/images/gallery/clinic-3.jpg', caption: 'Reception Area' },
];

function PlaceholderCard({ caption }) {
    return (
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#005D6B]/5 to-[#005D6B]/15 border-2 border-dashed border-[#005D6B]/20 flex flex-col items-center justify-center p-4 text-center">
            <Image className="w-10 h-10 text-[#005D6B]/30 mb-2" />
            <p className="text-[#005D6B]/50 text-xs font-medium">{caption}</p>
            <p className="text-slate-400 text-xs mt-1">Upload to<br />/public/images/gallery/</p>
        </div>
    );
}

export default function Gallery() {
    const [selected, setSelected] = useState(null);
    const [failedImages, setFailedImages] = useState(new Set());

    const handleImageError = (index) => {
        setFailedImages(prev => new Set([...prev, index]));
    };

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Page Header */}
            <div className="bg-[#005D6B] py-16 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Gallery</h1>
                        <p className="text-[#7ecdd5] text-lg">Clinic, treatments &amp; patient care at Aayush Health Care Research Centre</p>
                    </motion.div>
                </div>
            </div>

            {/* Upload instruction banner */}
            <div className="bg-amber-50 border-b border-amber-100 py-3 px-4">
                <div className="max-w-6xl mx-auto flex items-center gap-2 text-amber-700 text-sm justify-center">
                    <Upload className="w-4 h-4 flex-shrink-0" />
                    <span>To add photos: upload images to <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs font-mono">/public/images/gallery/</code> using the file names shown in each placeholder.</span>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.04 }}
                        >
                            {failedImages.has(index) ? (
                                <PlaceholderCard caption={img.caption} />
                            ) : (
                                <div
                                    className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative bg-[#005D6B]/10"
                                    onClick={() => setSelected(img)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.caption}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        onError={() => handleImageError(index)}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-end">
                                        <p className="text-white text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity">{img.caption}</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Image placeholder guide */}
                <div className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Upload className="w-5 h-5 text-[#005D6B]" />
                        How to Upload Gallery Photos
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <p className="text-slate-600 text-sm mb-3">Place your images in the <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">/public/images/gallery/</code> folder with these exact file names:</p>
                            <ul className="space-y-1">
                                {galleryImages.map((img) => (
                                    <li key={img.src} className="text-xs font-mono text-slate-500 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#005D6B]/40 flex-shrink-0" />
                                        {img.src.replace('/images/gallery/', '')}
                                        <span className="text-slate-400 font-sans">— {img.caption}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-slate-600 text-sm mb-3">Also upload these images to complete the website:</p>
                            <ul className="space-y-1">
                                {[
                                    { file: 'logo.png', desc: 'Clinic/Doctor logo' },
                                    { file: 'doctor.jpg', desc: 'Dr. Asif photo (portrait)' },
                                    { file: 'hero-bg.jpg', desc: 'Hero background image' },
                                    { file: 'services/hijama.jpg', desc: 'Hijama therapy image' },
                                    { file: 'services/dry-cupping.jpg', desc: 'Dry cupping image' },
                                    { file: 'services/head-cupping.jpg', desc: 'Head cupping image' },
                                    { file: 'services/knee-pain.jpg', desc: 'Knee pain treatment' },
                                    { file: 'services/marma-therapy.jpg', desc: 'Marma therapy image' },
                                    { file: 'services/steam-bath.jpg', desc: 'Steam bath image' },
                                    { file: 'services/fire-cupping.jpg', desc: 'Fire cupping image' },
                                ].map((item) => (
                                    <li key={item.file} className="text-xs font-mono text-slate-500 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                                        {item.file}
                                        <span className="text-slate-400 font-sans">— {item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/90"
                            onClick={() => setSelected(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative z-10 max-w-3xl w-full"
                        >
                            <img src={selected.src} alt={selected.caption} className="w-full rounded-2xl" />
                            <p className="text-white text-center mt-3 font-medium">{selected.caption}</p>
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-3 right-3 w-9 h-9 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
