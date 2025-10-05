import React from 'react'
import News from './News'
import Marquee from "react-fast-marquee";


const news = [
    {
        date: "April 1, 2025",
        title: "Accenture and Schaeffler Pave the Way for Industrial Humanoid Robots with NVIDIA and Microsoft Technologies"
    },

    {
        date: "May 13, 2025",
        title: "Telstra and Accenture Launch Silicon Valley Hub to Rapidly Advance Benefits of AI for Telstra Customers and People"
    },

    {
        date: "June 11, 2025",
        title: "Accenture Launches Distiller Agentic AI Framework to Accelerate Scalable Industry AI Solutions"
    },

    {
        date: "June 20, 2025",
        title: "Accenture Reports Third-Quarter Fiscal 2025 Results"
    },

    {
        date: "June 20, 2025",
        title: "Accenture Changes Growth Model to Reinvent Itself for the Age of AI"
    },

    {
        date: "August 13, 2025",
        title: "Qatar Airways and Accenture Embark on AI-Powered Partnership to Set New Benchmark in Aviation Excellence"
    }
]


const NewsData = () => {

    return (
        <div>
            <h1 className='text-4xl font-semibold text-white ml-20 mt-80'>Accenture news</h1>
            <Marquee gradient={false} speed={50} pauseOnHover={true} className='mt-30 '>
                {news.map((singleNews, index) => (
                    <News key={index} {...singleNews} />
                ))}
            </Marquee>
        </div>
    );
}

export default NewsData




// -------------------------------------------------------------


// import React, { useState } from 'react';
// import News from './News';
// import Marquee from "react-fast-marquee";

// const news = [
//     { date: "April 1, 2025", title: "Accenture and Schaeffler Pave the Way for Industrial Humanoid Robots with NVIDIA and Microsoft Technologies" },
//     { date: "May 13, 2025", title: "Telstra and Accenture Launch Silicon Valley Hub to Rapidly Advance Benefits of AI for Telstra Customers and People" },
//     { date: "June 11, 2025", title: "Accenture Launches Distiller Agentic AI Framework to Accelerate Scalable Industry AI Solutions" },
//     { date: "June 20, 2025", title: "Accenture Reports Third-Quarter Fiscal 2025 Results" },
//     { date: "June 20, 2025", title: "Accenture Changes Growth Model to Reinvent Itself for the Age of AI" },
//     { date: "August 13, 2025", title: "Qatar Airways and Accenture Embark on AI-Powered Partnership to Set New Benchmark in Aviation Excellence" }
// ];

// const NewsData = () => {
//     const [isPaused, setIsPaused] = useState(false);
//     const [direction, setDirection] = useState('right'); // can be 'left' or 'right'

//     return (
//         <div>
//             <h1 className='text-4xl font-semibold text-white ml-20 mt-40'>Accenture news</h1>

//             {/* Control Buttons */}
//             <div className='flex items-center justify-center space-x-4 mt-6'>
//                 <button 
//                     onClick={() => setIsPaused(!isPaused)} 
//                     className='bg-gray-800 text-white p-2 rounded'>
//                     {isPaused ? '▶' : '⏸'}
//                 </button>

//                 <button 
//                     onClick={() => setDirection('left')} 
//                     className='bg-gray-800 text-white p-2 rounded'>
//                     ←
//                 </button>

//                 <button 
//                     onClick={() => setDirection('right')} 
//                     className='bg-gray-800 text-white p-2 rounded'>
//                     →
//                 </button>
//             </div>

//             <Marquee 
//                 gradient={false}
//                 speed={50}
//                 pauseOnHover={false} 
//                 play={!isPaused}
//                 direction={direction}
//                 className='mt-10'
//             >
//                 {news.map((singleNews, index) => (
//                     <News key={index} {...singleNews} />
//                 ))}
//             </Marquee>
//         </div>
//     );
// };

// export default NewsData;
