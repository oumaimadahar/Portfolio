"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";

const HeroContent = () => {
    return (
        <motion.div
         id="Home"
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-35 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-4 justify-center m-auto text-start">
                <motion.a
                    variants={slideInFromLeft(0.2)}
                    className="py-2 text-center text-white cursor-pointer rounded-lg border border-gray-400 bg-transparent hover:bg-gray-800 transition duration-300 max-w-[250px] flex items-center justify-center"
                >
                    <span className="mr-2">⭐</span> Fullstack Developer Portfolio
                </motion.a>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-0 mt-2 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Hi, I'm
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Oumaima </span>
                        Full-Stack Developer
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 max-w-[600px] mt-1"
                >
                    I'm a Full-Stack developer passionate about creating innovative web applications using React, Next.js, Tailwind CSS, Node.js, and MongoDB. My goal is to turn my ideas into effective and functional solutions while staying updated with the latest technological advancements.
                </motion.p>

                <div className="flex gap-4">


                    <motion.a
                        variants={slideInFromLeft(1.2)}
                        className="py-2 px-4 text-center text-white cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 max-w-[200px] flex items-center justify-center"
                    >
                        <span className="mr-2">📁</span> View My Work
                    </motion.a>
                    <motion.a
                        variants={slideInFromLeft(1)}
                        className="py-2 px-4 text-white cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center max-w-[200px]"
                    >
                          Resume Download <HiDownload className="text-xl ml-2" />
                        
                    </motion.a>
                </div>

               

            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;