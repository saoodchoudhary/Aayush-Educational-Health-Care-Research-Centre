import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/Services' },
    { label: 'About Us', href: '/About' },
    { label: 'Gallery', href: '/Gallery' },
    { label: 'Contact', href: '/Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#003d47]/98 shadow-lg' : 'bg-[#003d47]/95'} backdrop-blur-sm`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 min-w-0">
                        <img
                            src="/images/logo.png"
                            alt="Dr. Asif Azim"
                            className="h-12 w-auto rounded-full flex-shrink-0"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <div className="block">
                            <div className="text-white font-bold text-base leading-tight">Dr. Asif Azim</div>
                            <div className="text-[#7ecdd5] text-xs leading-tight">Aayush Health Care Research Centre</div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-[#7ecdd5]' : 'text-white/80 hover:text-white'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a href="tel:+917903448270" className="flex items-center gap-2 text-[#7ecdd5] text-sm font-medium hover:text-white transition-colors">
                            <Phone className="w-4 h-4" /> +91 79034 48270
                        </a>
                        <Button asChild className="bg-[#005D6B] hover:bg-[#004d59] text-white font-semibold px-5">
                            <a href="https://wa.me/917903448270?text=I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
                                <Calendar className="w-4 h-4 mr-2" /> Book Appointment
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-[#003d47]/98 backdrop-blur-sm border-t border-white/10">
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`block py-2 text-sm font-medium ${location.pathname === link.href ? 'text-[#7ecdd5]' : 'text-white/80'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 flex flex-col gap-3">
                            <a href="tel:+917903448270" className="flex items-center gap-2 text-[#7ecdd5] font-medium">
                                <Phone className="w-4 h-4" /> +91 79034 48270
                            </a>
                            <Button asChild className="bg-[#005D6B] hover:bg-[#004d59] text-white font-semibold w-full">
                                <a href="https://wa.me/917903448270?text=I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer">
                                    <Calendar className="w-4 h-4 mr-2" /> Book Appointment
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
