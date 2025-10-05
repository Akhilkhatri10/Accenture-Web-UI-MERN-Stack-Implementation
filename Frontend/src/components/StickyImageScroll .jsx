import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image18 from "../assets/image18.webp";

const StickyImageScroll = () => {
    const ref = useRef(null);

    // Track scroll progress inside this section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    // Image shrinks from 100% -> 50%
    const imageWidth = useTransform(
        scrollYProgress,
        [0, 0.3, 0.6],
        ["100%", "100%", "50%"]
    );

    // Right content (existing one)
    const rightOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const rightY = useTransform(scrollYProgress, [0.6, 0.8], ["100%", "0%"]);

    // New "Join us at the heart of change." text
    // Appear *after* image settles (~0.65 onwards)
    const joinOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
    const joinX = useTransform(scrollYProgress, [0.65, 0.85], ["-100%", "0%"]);

    return (
        <section ref={ref} className="relative h-[300vh] bg-black">
            {/* Sticky container */}
            <div className="sticky top-[20vh] h-[80vh] flex flex-col">
                <div className="flex flex-1">
                    {/* Left Image */}
                    <motion.div
                        style={{ width: imageWidth }}
                        className="h-full bg-cover bg-center flex-shrink-0"
                    >
                        <img
                            src={image18}
                            alt="demo"
                            className="h-full w-full object-cover"
                        />
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        style={{ opacity: rightOpacity, y: rightY }}
                        className="h-full w-1/2 flex items-center justify-center bg-black shadow-lg p-10"
                    >
                        <div className="space-y-5 max-w-md ml-40 mt-20">
                            <h5 className="text-white font-semibold">CAREERS</h5>
                            <h1 className="text-[42px] font-semibold text-white leading-tight">
                                Grow your career at the heart of change
                            </h1>
                            <p
                                style={{ fontFamily: "'Merriweather', serif", fontWeight: 300 }}
                                className="text-white text-xl"
                            >
                                It's your time to shine. Bring your <br />ingenuity, curiosity and big ideas.
                            </p>
                            <div className="space-x-3 flex items-center cursor-pointer">
                                <a href="#" className="text-white font-semibold text-lg">
                                    Join us
                                </a>
                                <button className="cursor-pointer relative h-[25px] w-[25px] overflow-hidden bg-purple-600 text-white font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-purple-800 before:transition-all before:duration-300 hover:before:w-full">
                                    <span className="relative z-10 text-xl">&gt;</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* New line below the image */}
                <motion.div
                    style={{ opacity: joinOpacity, x: joinX }}
                    className="flex justify-start pl-20 max-w-2xl"
                >
                    <h2 className="text-purple-900 text-7xl font-bold "
                        style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>
                        Join us at the heart of change.
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default StickyImageScroll;

