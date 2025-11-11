// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { SkillData } from "@/constants";
// import Image from "next/image";
// import { Autoplay } from "swiper/modules";

// const Page = () => {
//   return (
//     <div

//       className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
//     >
//       <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
//         <div className="flex flex-col items-center gap-4">
//           <h1 className="font-semibold text-white text-[50px]">
//             Skills{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//               {" "}
//               &{" "}
//             </span>
//             Technologies
//           </h1>
//           <p className="text-gray-400 text-[20px]">
//             Using the latest tech this world has to offer
//           </p>
//         </div>
//         <Swiper
//           slidesPerView={5}
//           loop={true}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//           }}
//           speed={5000}
//           modules={[Autoplay]}
//           className="max-w-[80%]"
//         >
//           {SkillData.map((skill, index) => (
//             <SwiperSlide key={index}>
//               <Image
//                 src={skill.Image}
//                 alt={skill.name}
//                 width={skill.width}
//                 height={skill.height}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <Swiper
//           slidesPerView={5}
//           loop={true}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//             reverseDirection: true
//           }}
//           speed={5000}
//           modules={[Autoplay]}
//           className="max-w-[80%]"
//         >
//           {SkillData.map((skill, index) => (
//             <SwiperSlide key={index}>
//               <Image
//                 src={skill.Image}
//                 alt={skill.name}
//                 width={skill.width}
//                 height={skill.height}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div className=" w-screen flex items-center justify-center bg-cover bg-center">
      <div className="flex flex-col gap-10 max-w-[80%] text-center items-center">
        {/* Titre */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">

           Compétences{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              &{" "}
            </span>
            Technologies
          </h1>
          
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl">Création de solutions full-stack performantes et réactives, avec une maîtrise constante des technologies modernes et un apprentissage continu.</p>
         
        </div>

        {/* Premier Swiper */}
        <Swiper
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {SkillData.map((skill, index) => (
            // <SwiperSlide key={index} className="flex justify-center">
            //   <Image
            //     src={skill.Image}
            //     alt={skill.name}
            //     width={skill.width}
            //     height={skill.height}
            //   />
            // </SwiperSlide>
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-[100px]">
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={50}   // largeur uniforme
                  height={50}  // hauteur uniforme
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Deuxième Swiper */}
        <Swiper
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {SkillData.map((skill, index) => (
            // <SwiperSlide key={index} className="flex justify-center">
            //   <Image
            //     src={skill.Image}
            //     alt={skill.name}
            //     width={skill.width}
            //     height={skill.height}
            //   />
            // </SwiperSlide>
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-[100px]">
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={50}   // largeur uniforme
                  height={50}  // hauteur uniforme
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
