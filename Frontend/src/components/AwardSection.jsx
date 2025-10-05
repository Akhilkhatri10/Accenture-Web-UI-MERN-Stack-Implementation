import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";


const AwardSection = () => {
    return (
        <div className="relative h-[400vh]">
            {/* div1 (Sticky container) */}
            <div className="sticky top-0 h-screen flex items-center justify-center bg-black">
                <h1 className="text-8xl font-semibold text-white text-center max-w-7xl">
                    Global recognition and awards
                </h1>
            </div>

            {/* div2 */}
            <div
                className="group relative ml-20 w-[500px] h-[350px] overflow-hidden"
                style={{ backgroundImage: `url(${p3})` }}
            >
                {/* Heading */}
                <h2 className="absolute bottom-10 left-10 text-2xl text-white font-semibold transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0"
                style={{ fontFamily: "'Merriweather', serif", fontWeight: 300 }}
                >
                    A Leader in Reinvention
                </h2>

                {/* Hidden content */}
                <div className="absolute inset-0 flex flex-col items-start justify-start p-8 opacity-0 translate-y-full transition-all duration-500 delay-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-blue-700">
                    <p className="text-white text-md">
                        <span className="font-semibold">
                            Our Chair and CEO, Julie Sweet, is No. 11 on Fortune's 2025 Most Powerful People in Business; one of the TIME100 Most Influential People of 2024; and received the Anti-Defamation League's highest honor, the Courage Against Hate Award.
                        </span>
                        <br /><br />
                        Every day, Julie and our people demonstrate why Accenture is our clients' reinvention partner of choice, with innovation and people at the center.
                    </p>

                    <div className="absolute bottom-6 right-6 text-white font-semibold cursor-pointer after:absolute after:left-0 after:bottom-[-6px] after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        See related awards &gt;
                    </div>
                </div>
            </div>


            {/* div3 */}
            <div
                className="group relative ml-[580px] mt-20 w-[500px] h-[350px] overflow-hidden"
                style={{ backgroundImage: `url(${p1})` }}
            >
                <h2 className="absolute bottom-10 left-40 -translate-x-1/2 text-2xl text-white font-semibold transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0"
                style={{ fontFamily: "'Merriweather', serif", fontWeight: 300 }}
                >
                    A Great Place to Work
                </h2>

                <div className="absolute inset-0 flex flex-col items-start justify-start p-8 opacity-0 translate-y-full transition-all duration-500 delay-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-[#E61531]">
                    <p className="text-white text-md">
                        <span className="font-semibold">
                            Ranked No. 6 on the Great Place To Work® World's Best Workplaces™ list.
                        </span>
                        <br /><br />
                        This recognition is based on feedback from our people—measuring their level of trust, pride and camaraderie at work.
                    </p>

                    <div className="absolute bottom-6 right-6 text-white font-semibold cursor-pointer after:absolute after:left-0 after:bottom-[-6px] after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        See related awards &gt;
                    </div>
                </div>
            </div>

            {/* div4 */}
            <div
                className="group relative ml-[330px] mt-20 w-[500px] h-[350px] overflow-hidden"
                style={{ backgroundImage: `url(${p2})` }}
            >
                <h2 className="absolute bottom-10 left-42 -translate-x-1/2 text-2xl text-white font-semibold transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0"
                style={{ fontFamily: "'Merriweather', serif", fontWeight: 300 }}
                >
                    A Top Consulting Firm
                </h2>
                <div className="absolute inset-0 flex flex-col items-start justify-start p-8 opacity-0 translate-y-full transition-all duration-500 delay-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-purple-950 ">
                    <p className="text-white text-md">
                        <span className="font-semibold">
                            Earned a top spot among the World's Best Management Consulting Firms.
                        </span>
                        <br /><br />
                        Forbes recognized Accenture as one of the most recommended management consulting firms by consultants and clients, across industries and functional areas, around the world.
                    </p>

                    <div className="absolute bottom-6 right-6 text-white font-semibold cursor-pointer after:absolute after:left-0 after:bottom-[-6px] after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        See related awards &gt;
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwardSection;
