import React from 'react'

const Card = ({ title, description, imageUrl, hoverText }) => {
    return (
        <div className="relative min-h-[450px] w-full text-white flex flex-col overflow-hidden group cursor-pointer">

            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:top-full group-hover:left-full group-hover:blur-lg bg-no-repeat"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>

            {/* Black overlay to show when image hides */}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

            {/* Content */}
            <div className="relative z-10 p-6">
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-xl font-semibold mt-4">{description}</p>

                {/* Sample Text (hidden initially, comes from right → left) */}
                <p className="mt-6 opacity-0 transform translate-x-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    {hoverText}
                </p>
            </div>

            {/* Expand Text at Bottom-Right */}
            <div className="absolute bottom-0 right-0 p-8 opacity-0 transform translate-y-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="relative text-white font-semibold cursor-pointer">
                    <span className="relative after:absolute after:left-0 after:bottom-[-10px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Expand
                    </span>
                    &nbsp;&gt;
                </span>
            </div>


        </div>
    )
}

export default Card
