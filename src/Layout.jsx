import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
