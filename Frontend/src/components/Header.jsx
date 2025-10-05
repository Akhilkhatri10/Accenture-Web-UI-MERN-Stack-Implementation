import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { MdOutlineSearch } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";

const capabilities = [
  "Cloud",
  "Customer Service",
  "Cybersecurity",
  "Data and Artificial Intelligence",
  "Digital Engineering and Manufacturing",
  "Learning",
  "Managed Services",
  "Marketing and Experience",
  "Metaverse",
  "Sales and Commerce",
  "Ecosystem Partners",
  "Emerging Technology",
  "Supply Chain",
  "Sustainability",
];

const industries = [
  "Aerospace and Defense",
  "Automotive",
  "Banking",
  "Capital Markets",
  "Chemicals",
  "Communications and Media",
  "Energy",
  "Health",
  "High Tech",
  "Industrial",
  "Life Sciences",
  "Natural Resources",
  "Public Service",
  "Private Equity",
  "Retail",
];


const linkedCapabilities = ["Cloud", "Cybersecurity", "Learning", "Managed Services"];
const linkedIndustries = ["Aerospace and Defense", "Automotive", "Banking"];


function Header() {
  const [country, setCountry] = useState("India");
  const [openMenu, setOpenMenu] = useState(false); // for what we do menu
  const [openMenu2, setOpenMenu2] = useState(false); // for who we are menu
  const [openMenu3, setOpenMenu3] = useState(false); // for careers menu

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // 🔑 reference to the dropdown container

  const countries = [
    { name: "Default", language: "English" },
    { name: "Argentina", language: "Spanish" },
    { name: "Australia", language: "English" },
    { name: "Austria", language: "German" },
    { name: "Belgium", language: "English" },
    { name: "Brazil", language: "Portuguese" },
    { name: "Bulgaria", language: "English" },
  ];

  // 🔑 Click outside handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // This function closes all menus by setting their state to false
  const closeAllMenus = () => {
    setOpenMenu(false);
    setOpenMenu2(false);
    setOpenMenu3(false);
  };



  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50">
      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link to="/"><div className="flex items-center space-x-2 pl-13 cursor-pointer max-w-fit group">
          <img
            src={logo}
            alt="Accenture Logo"
            className="w-8 h-8 transform transition-transform duration-500 group-hover:translate-x-16 group-hover:scale-50"
          />
          <span className="text-3xl font-bold text-white opacity-0 -translate-x-10 translate-y-8 group-hover:opacity-100 group-hover:-translate-x-10 group-hover:translate-y-5 transition-all duration-500">
            accenture
          </span>
        </div></Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-7">
          {/* What we do */}
          <div
            className="group flex items-center px-1 space-x-1 cursor-pointer hover:text-gray-400"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <button className="text-[14px] cursor-pointer">What we do</button>
            <RiArrowDropDownLine className="h-8 w-8" />
          </div>

          <div className="px-1 cursor-pointer hover:text-gray-400 ">
            <button className="text-[14px] cursor-pointer">What we think</button>
          </div>

          <div
            className="flex items-center space-x-1 px-1 cursor-pointer hover:text-gray-400"
            onClick={() => setOpenMenu2(!openMenu2)}
          >
            <button className="cursor-pointer text-[14px]">Who we are</button>
            <RiArrowDropDownLine className="h-8 w-8" />
          </div>

          <div
            className="flex items-center space-x-1 px-1 cursor-pointer hover:text-gray-400"
            onClick={() => setOpenMenu3(!openMenu3)}
          >
            <button className="cursor-pointer text-[14px]">Careers</button>
            <RiArrowDropDownLine className="h-8 w-8" />
          </div>
        </nav>


        {/* Right Side */}
        <div className="flex items-center gap-6">
        {/* Search Icon */}
        <MdOutlineSearch size={22} className="cursor-pointer hover:opacity-80" />

        {/* 🌐 Country Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 px-3 py-2 hover:opacity-80"
          >
            <CiGlobe size={20} />
            <span>India</span>
            <RiArrowDropDownLine size={22} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 max-h-72 overflow-y-auto rounded-md bg-black shadow-lg ring-1 ring-white ring-opacity-20 z-50">
              <ul className="py-2 text-sm text-gray-200">
                <li className="px-4 py-2 font-semibold border-b border-gray-700">
                  Default (English)
                </li>
                <li className="px-4 py-2 text-xs uppercase text-gray-400">
                  All Countries & Languages
                </li>
                {countries.slice(1).map((c, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-800"
                  >
                    {c.name}{" "}
                    <span className="text-gray-400">({c.language})</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      </div>

      {/* Mega Menu 1*/}
      <div
        className={`overflow-hidden pl-30 transition-all duration-500 ease-in-out bg-neutral-900 ${openMenu ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className='group space-x-3 flex items-center cursor-pointer mt-20 mb-15' >
          <a
            href=""
            className='text-white font-semibold text-3xl relative after:absolute after:left-0 after:-bottom-1
             after:h-[1px] after:w-0 after:bg-white 
             after:transition-all after:duration-500 
             group-hover:after:w-full'>What we do</a>
          <button className="cursor-pointer relative h-[30px] w-[30px] overflow-hidden bg-purple-600 px-2 text-white font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-purple-800 before:transition-all before:duration-500 group-hover:before:w-full">
            <span className="relative z-10 text-xl">&gt;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">

          {/* Capabilities */}
          <div className="pb-18 ">
            <h3 className="text-gray-400 text-sm mb-4">Capabilities</h3>
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 text-white gap-x-10 gap-y-1 [&>li]:cursor-pointer [&>li]:hover:underline [&>li]:hover:underline-offset-4">
              {capabilities.map((item, idx) => (
                <li key={idx}>
                  {linkedCapabilities.includes(item) ? (
                    <Link to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={closeAllMenus}>
                      {item}
                    </Link>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>

          </div>

          {/* Industries */}
          <div>
            <h3 className="text-gray-400 text-sm mb-3">Industries</h3>
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 text-white [&>li]:cursor-pointer [&>li]:hover:underline [&>li]:hover:underline-offset-4">
              {industries.map((item, idx) => (
                <li key={idx}>
                  {linkedIndustries.includes(item) ? (
                    <Link to={`/industries/${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={closeAllMenus}>
                      {item}
                    </Link>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/* Mega Menu 2*/}
      <div
        className={`overflow-hidden pl-30 transition-all duration-500 ease-in-out bg-neutral-900 ${openMenu2 ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className='group space-x-3 flex items-center cursor-pointer mt-20 mb-15' >
          <a href="" className='text-white font-semibold text-3xl relative after:absolute after:left-0 after:-bottom-1
             after:h-[1px] after:w-0 after:bg-white 
             after:transition-all after:duration-500 
             group-hover:after:w-full'>About Accenture</a>
          <button className="cursor-pointer relative h-[30px] w-[30px] overflow-hidden bg-purple-600 px-2 text-white font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-purple-800 before:transition-all before:duration-500 group-hover:before:w-full">
            <span className="relative z-10 text-xl">&gt;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 text-gray-300">


          <div className="pb-8 ">
            <h3 className="text-gray-400 text-sm mb-4">Our organization</h3>
            <ul className="space-y-2 grid grid-cols-1 text-white gap-x-10 gap-y-1 [&>li]:cursor-pointer [&>li]:hover:underline [&>li]:hover:underline-offset-4">
              <li>Awards and Recognition</li>
              <li>Corporate Sustainability</li>
              <li>Industry Analyst Recognition</li>
              <li>Leaders</li>
              <li>Locations</li>
            </ul>
          </div>


          <div>
            <h3 className="text-gray-400 text-sm mb-3">Media and Investors</h3>
            <ul className="space-y-2 grid grid-cols-1 text-white [&>li]:cursor-pointer [&>li]:hover:underline [&>li]:hover:underline-offset-4">
              <li>Media Relations</li>
              <li>Investor Relations</li>
              <li>Board of Directors</li>
            </ul>
          </div>


          <div>
            <h3 className="text-gray-400 text-sm mb-3">How we serve</h3>
            <ul className="space-y-2 grid grid-cols-1 text-white [&>li]:cursor-pointer [&>li]:hover:underline [&>li]:hover:underline-offset-4">
              <li>Strategy and Consulting</li>
              <li>Technology</li>
              <li>Operations</li>
              <li>Industry X</li>
              <li>Song</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Mega Menu 3*/}
      <div
        className={`overflow-hidden pb-10 pl-30 transition-all duration-500 ease-in-out bg-neutral-900 ${openMenu3 ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className='group space-x-3 flex items-center cursor-pointer mt-20 mb-15' >
          <a href="" className='text-white font-semibold text-3xl relative after:absolute after:left-0 after:-bottom-1
             after:h-[1px] after:w-0 after:bg-white 
             after:transition-all after:duration-500 
             group-hover:after:w-full'>Careers homepage</a>
          <button className="cursor-pointer relative h-[30px] w-[30px] overflow-hidden bg-purple-600 px-2 text-white font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-purple-800 before:transition-all before:duration-500 group-hover:before:w-full">
            <span className="relative z-10 text-xl">&gt;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 text-gray-300">


          <div className="pb-8 ">
            <h3 className="text-gray-400 text-sm mb-4">Find a job</h3>
            <ul className="space-y-2 grid grid-cols-1 text-white gap-x-10 gap-y-1 [&>li]:cursor-pointer [&>li]:hover:underline [&>li]:hover:underline-offset-4">
              <li>Search for jobs</li>
              <li>Career Areas</li>
            </ul>
          </div>


          <div>
            <h3 className="text-gray-400 text-sm mb-3">Life at Accenture</h3>
            <ul className="space-y-2 grid grid-cols-1 text-white [&>li]:cursor-pointer [&>li]:hover:underline [&>li]:hover:underline-offset-4">
              <li>Working here</li>
              <li>Benefits</li>
              <li>Work environment</li>
              <li>Careers Blog</li>
            </ul>
          </div>


          <div>
            <h3 className="text-gray-400 text-sm mb-3">How we hire</h3>
            <ul className="space-y-2 grid grid-cols-1 text-white [&>li]:cursor-pointer [&>li]:hover:underline [&>li]:hover:underline-offset-4">
              <li>Hiring Journey</li>
              <li>Pro tips</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;


