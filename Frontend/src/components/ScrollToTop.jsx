import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [showArrow, setShowArrow] = useState(false);

    // Show arrow when user scrolls down 300px
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showArrow && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition"
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
