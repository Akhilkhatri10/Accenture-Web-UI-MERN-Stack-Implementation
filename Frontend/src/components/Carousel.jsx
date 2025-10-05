import React from 'react';

const Carousel = ({ imageUrl, title, description }) => {
    return (
    
            <div className="flex bg-black text-white overflow-hidden max-w-7xl">
                {/* Image Section */}
                <img
                    src={imageUrl}
                    alt="carousel"
                    className="w-[572px] h-[372px] object-cover "
                />

                {/* Text Section */}
                <div className="flex flex-col justify-center p-16 gap-4 ">
                    <h3 className="text-2xl text-white font-semibold">{title}</h3>
                    <p className="text-md text-white leading-relaxed">{description}</p>

                    <div className='space-x-3 flex items-center cursor-pointer' >
                        <a href="" className='text-white font-semibold text-lg'>Read more</a>
                        <button className="cursor-pointer  relative h-[25px] w-[25px] overflow-hidden bg-purple-600  text-white font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-purple-800 before:transition-all before:duration-500 hover:before:w-full">
                            <span className="relative z-10 text-xl">&gt;</span>
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default Carousel;
