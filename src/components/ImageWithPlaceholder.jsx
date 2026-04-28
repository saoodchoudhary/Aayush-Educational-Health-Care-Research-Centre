import React, { useState } from 'react';
import { Image } from 'lucide-react';

/**
 * Renders an image with a graceful fallback placeholder if the image fails to load.
 * Accepts all standard <img> props plus `placeholderText` and `className`.
 */
export default function ImageWithPlaceholder({ src, alt, className = '', placeholderText = 'Image coming soon', ...props }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div className={`flex flex-col items-center justify-center bg-[#005D6B]/10 text-center p-4 ${className}`}>
                <Image className="w-10 h-10 text-[#005D6B]/30 mb-1.5" />
                <p className="text-[#005D6B]/50 text-xs font-medium leading-tight">{placeholderText}</p>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setFailed(true)}
            {...props}
        />
    );
}
