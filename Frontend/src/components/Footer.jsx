import React from 'react'
import FooterImage from '../assets/FooterImage.png';

const FooterOptions = ["Preference Center", "Careers", "About Us", "Contact Us", "Locations", "Sitemap", "Privacy Statement", "Terms & Conditions", "Cookie Policy/Settings", "Accessibility Statement"] 

const Footer = () => {
  return (

      <div className=" relative w-full flex items-center justify-between bg-black text-white mt-20">
        <div className=" flex flex-col justify-center px-20 pb-18 max-w-3xl">
          <h3 className="text-white text-md md:text-4xl font-semibold mb-10 mt-12">Let there be change</h3>

          <div className="pt-12 ">
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 text-white gap-x-14 gap-y-1 [&>li]:cursor-pointer [&>li]:hover:underline [&>li]:hover:underline-offset-4">
              {FooterOptions.map((item, idx) => (
                <li key={idx}>
                  {item}
                </li>
              ))}
            </ul>

          </div>

          <h6 className='text-white pt-10 text-sm'>© 2025 Accenture. All Rights Reserved.</h6>
        </div>

        <img
          src={FooterImage}
          alt="Footer Image"
          className="w-[500px] h-[500px] object-cover pr-28 "
        />
        
      </div>

  )
}

export default Footer