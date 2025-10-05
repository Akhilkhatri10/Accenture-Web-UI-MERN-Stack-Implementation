import React from 'react'
import image9 from '../assets/image9.jpg';


const AIsection = () => {
    return (
        <div className='flex items-center justify-center px-24 py-12 space-y-12 mt-10 '>
            <div>
                <img src={image9} alt="julie sweet image" className='w-[500px]' />
            </div>

            <div className='space-y-6 max-w-[500px] mx-auto pb-7'>
                <p className='text-white font-semibold text-2xl'>"AI is only a technology. The value comes from reinvention of how we work, our workforces and the tools we use… We are making sure that we are leading the way with our own reinvention."</p>

                <h4 className='text-white text-md'>Julie Sweet, quoted in Fortune, August/September 2025</h4>

                <div className='space-x-3 flex items-center cursor-pointer' >
                    <a href="" className='text-white font-semibold text-lg'>Read more</a>
                    <button className="cursor-pointer relative h-[30px] w-[30px] overflow-hidden bg-purple-600 px-2 text-white font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-purple-800 before:transition-all before:duration-500 hover:before:w-full">
                        <span className="relative z-10 text-xl">&gt;</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AIsection