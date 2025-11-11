// import Image from "next/image";
// import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { NavLinks } from "@/constants"; // adapte selon ton chemin

// const Navbar = () => {
//     return (
//         <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#1519274b] backdrop-blur-md z-50 px-10">
//             <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
//                 {/* Logo */}
//                 <a href="#Home" className="h-auto w-auto flex flex-row items-center">
//                     <Image
//                         src="/NavLogo.png"
//                         alt="logo"
//                         width={70}
//                         height={70}
//                         className="cursor-pointer hover:animate-slowspin"
//                     />
//                     <span className="font-bold ml-[10px] hidden md:block text-gray-300">
//                         CodeLogo
//                     </span>
//                 </a>

//                 {/* Liens dynamiques */}
//                 <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
//                     <div className="flex items-center justify-center gap-15 w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
//                         {NavLinks.map((nav) => (
//                             <a
//                                 key={nav.name}
//                                 href={`#${nav.link}`} // ancre vers la section
//                                 className="cursor-pointer hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:px-6 py-1 rounded-lg transition-all duration-300"
//                             >
//                                 {nav.name}
//                             </a>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Réseaux sociaux */}
//                 <div className="flex items-center gap-4">
//                     <a
//                         href="https://github.com/oumaimadahar"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-white hover:text-gray-300 transition duration-300"
//                     >
//                         <FaGithub size={30} />
//                     </a>
//                     <a
//                         href="https://www.linkedin.com/in/oumaima-dahar-06b642251/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-white hover:text-blue-200 transition duration-300"
//                     >
//                         <FaLinkedin size={30} />
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { NavLinks } from "@/constants";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#1519274b] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                {/* Logo */}
                <a href="#Home" className="h-auto w-auto flex flex-row items-center">
                    <Image
                        src="/images/NavLogo.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin"
                    />
                    <span className="font-bold ml-[10px] block text-gray-300">
                        Oumaima Dahar
                    </span>
                </a>

                {/* Liens dynamiques (desktop) */}
                <div className="hidden md:flex w-[550px] h-full flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-center gap-15 w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        {NavLinks.map((nav) => (
                            <a
                                key={nav.name}
                                href={`#${nav.link}`}
                                className="cursor-pointer hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:px-6 py-1 rounded-lg transition-all duration-300"
                            >
                                {nav.name}
                            </a>
                        ))}
                    </div>
                </div>


                {/* Réseaux sociaux (desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://github.com/oumaimadahar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white p-1 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
                    >
                        <FaGithub size={25} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/oumaima-dahar-06b642251/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white p-1 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
                    >
                        <FaLinkedin size={25} />
                    </a>
                </div>

                {/* Icône menu mobile */}
                <div
                    className="md:hidden text-white cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>

            {/* Menu mobile */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#030014f8] border-t border-[#7042f861] text-gray-200">
                    {NavLinks.map((nav) => (
                        <a
                            key={nav.name}
                            href={`#${nav.link}`}
                            onClick={() => setMenuOpen(false)}
                            className="cursor-pointer hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:px-6 py-1 rounded-lg transition-all duration-300"
                        >
                            {nav.name}
                        </a>
                    ))}
                    {/* Réseaux sociaux (mobile) */}
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://github.com/oumaimadahar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white p-1 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/oumaima-dahar-06b642251/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white p-1 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
