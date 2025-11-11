// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
// import Image from "next/image";
// import { HiDownload } from "react-icons/hi";

// const HeroContent = () => {
//     return (
//         <motion.div
//          id="Home"
//             initial="hidden"
//             animate="visible"
//             className="flex flex-row items-center justify-center px-20 mt-35 w-full z-[20]"
//         >
//             <div className="h-full w-full flex flex-col gap-4 justify-center m-auto text-start">
//                 <motion.a
//                     variants={slideInFromLeft(0.2)}
//                     className="py-2 text-center text-white cursor-pointer rounded-lg border border-gray-400 bg-transparent hover:bg-gray-800 transition duration-300 max-w-[250px] flex items-center justify-center"
//                 >
//                     <span className="mr-2">⭐</span> Fullstack Developer Portfolio
//                 </motion.a>
//                 <motion.div
//                     variants={slideInFromLeft(0.5)}
//                     className="flex flex-col gap-0 mt-2 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
//                 >
//                     <span>
//                         Hi, I'm
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Oumaima </span>
//                         Full-Stack Developer
//                     </span>
//                 </motion.div>

//                 <motion.p
//                     variants={slideInFromLeft(0.8)}
//                     className="text-lg text-gray-400 max-w-[600px] mt-1"
//                 >
//                     I'm a Full-Stack developer passionate about creating innovative web applications using React, Next.js, Tailwind CSS, Node.js, and MongoDB. My goal is to turn my ideas into effective and functional solutions while staying updated with the latest technological advancements.
//                 </motion.p>

//                 <div className="flex gap-4">


//                     <motion.a
//                         variants={slideInFromLeft(1.2)}
//                         className="py-2 px-4 text-center text-white cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 max-w-[200px] flex items-center justify-center"
//                     >
//                         <span className="mr-2">📁</span> View My Work
//                     </motion.a>
//                     <motion.a
//                         variants={slideInFromLeft(1)}
//                         className="py-2 px-4 text-white cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center max-w-[200px]"
//                     >
//                           Resume Download <HiDownload className="text-xl ml-2" />

//                     </motion.a>
//                 </div>



//             </div>

//             <motion.div
//                 variants={slideInFromRight(0.8)}
//                 className="w-full h-full flex justify-center items-center"
//             >
//                 <Image
//                     src="/mainIconsdark.svg"
//                     alt="work icons"
//                     height={650}
//                     width={650}
//                 />
//             </motion.div>
//         </motion.div>
//     );
// };

// export default HeroContent;
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { handleEmailClick} from "@/constants"; 

const HeroContent = () => {
  const titles = ["Développeuse Full-Stack", "Ingénieure Logiciel", "Développeuse Web"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      id="Home"
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-28 md:mt-36 w-full z-[20] gap-10 md:gap-0"
    >
      {/* Texte */}
      <div className="h-full w-full flex flex-col gap-4 justify-center text-start">
        <motion.a
          variants={slideInFromLeft(0.2)}
          href=""
          className="py-2 text-center text-white cursor-pointer rounded-lg border border-gray-400 bg-transparent hover:bg-gray-800 transition duration-300 max-w-[280px] flex items-center justify-center"
        >
          <span className="mr-2">⭐</span> Portfolio Développeuse Full-Stack
        </motion.a>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-0 mt-2 text-5xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
        >
          <span>
            Bonjour, je suis
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Oumaima,{" "}
            </span>
            <motion.span
              key={currentTitle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            >
              {titles[currentTitle]}
            </motion.span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 max-w-full md:max-w-[600px] mt-1 leading-relaxed text-justify"
        >
          Développeuse web full-stack, passionnée par la création d’applications performantes et intuitives.Je mets à profit {" "}
          <span className="text-white font-medium">ma curiosité</span>,{" "}
          <span className="text-white font-medium">ma créativité</span>,{" "}
          <span className="text-white font-medium">mon sens des responsabilités</span>,{" "}
          <span className="text-white font-medium">mon esprit d’équipe</span> et{" "}
          <span className="text-white font-medium">mon adaptabilité</span>.pour relever des défis techniques et collaborer efficacement.

        </motion.p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <motion.button
            variants={slideInFromLeft(1.2)}
            onClick={handleEmailClick}
            className="py-2 px-4 text-center text-white cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 max-w-full sm:max-w-[250px] flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <span className="mr-2">📩</span> Me Contacter
          </motion.button>



          <motion.a
            variants={slideInFromLeft(1)}
            href="/oumaima daharCV2.pdf"
            download="oumaima daharCV2.pdf"
            className="py-2 px-4 text-white cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 max-w-full sm:max-w-[250px] flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <HiDownload className="text-xl mr-2" />
            Télécharger CV
          </motion.a>
        </div>
      </div>

      {/* Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-auto h-full flex justify-center items-center"
      >
        <Image
          src="/images/mainIconsdark.svg"
          alt="work icons"
          width={400}
          height={400}
          className="md:w-[650px] md:h-[650px] w-[300px] h-[300px] object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
