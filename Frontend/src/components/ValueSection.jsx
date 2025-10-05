import React from 'react'

const ValueSection = () => {
    return (
        <div className='max-w-7xl mx-auto px-6 py-12 space-y-6 text-white text-center flex flex-col items-center'>
            <h1 className='text-[110px] font-semibold mb-2'>360° VALUE</h1>

            <p className='text-3xl max-w-3xl font-serif'>Every day, we embrace change and create value for all our stakeholders around the world.</p>

            <div className='space-x-3 flex items-center cursor-pointer' >
                <a href="" className='text-white font-semibold text-lg'>See the report</a>
                <button className="cursor-pointer relative h-[30px] w-[30px] overflow-hidden bg-purple-600 px-2 text-white font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-purple-800 before:transition-all before:duration-500 hover:before:w-full">
                    <span className="relative z-10 text-xl">&gt;</span>
                </button>
            </div>
        </div>
    )
}

export default ValueSection