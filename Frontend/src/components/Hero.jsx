import React from 'react'

const Hero = () => {
    return (
        <div className="relative w-full flex items-center justify-center bg-black text-white px-6 py-10 mt-15">
            <div className='flex-1'>
                <video
                    className="w-full h-auto object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/accenture_video.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="flex-1 flex flex-col justify-center px-16 py-5">
                <h1 className="text-white text-4xl md:text-5xl font-semibold mb-10">
                    Reinvention isn't optional <br /> —it's how leaders stay ahead.
                </h1>

                <p className="mb-7 text-lg max-w-lg ">
                    Across industries, organizations are rethinking how they grow, compete, and lead. As the Official Business and Technology Consulting Sponsor of the NFL, we're helping one of the world's most iconic sports leagues keep moving the game forward.
                </p>

                <button className=" cursor-pointer relative h-[50px] w-32 overflow-hidden bg-purple-600 px-3 text-white font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-purple-800 before:transition-all before:duration-500 hover:before:w-full">
                    <span className="relative z-10">Learn more</span>
                </button>

            </div>
        </div>
    )
}

export default Hero