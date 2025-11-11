// import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { HiDownload } from "react-icons/hi";


// export default function About() {
//     return (
//         <div id="About">
//             <div className="flex flex-col items-center gap-4">
//                 <h1 className="font-semibold text-white text-[50px]">
//                     About {" "}
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//                         {" "}
//                         Me{" "}
//                     </span>

//                 </h1>
//                 <p className="text-gray-400 text-[20px] w-180 text-center">
//                    A passionate self-taught web developer specializing in building full-stack applications that are clean,responsive, and efficient.
//                 </p>
//             </div>

//             <section className="min-h-screen flex items-center justify-center  text-white px-6 py-16">

//                 <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//                     {/* Image */}
//                     <div className="relative">
//                         <img
//                             src="/images/profile.jpg" // change avec ton image
//                             alt="Profile"
//                             className="rounded-2xl shadow-lg w-full object-cover"
//                         />

//                     </div>

//                     {/* Texte */}
//                     <div>
//                         <div className="flex items-center mb-4">
//                             <div className="w-16 h-1 bg-gradient-to-r to-purple-500  from-blue-500 mr-2" />
//                             <p className="text-gray-50 uppercase tracking-widest">Who I Am</p>
//                         </div>





//                         <h1 className="text-3xl md:text-4xl font-bold mb-3">Oumaima Dahar</h1>
//                         <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600 font-semibold mb-6">Full-Stack Developer</h2>
//                         <p className="text-gray-300 leading-relaxed mb-6 text-justify">

//                         </p>


//                         {/* Infos */}
//                         <div className="flex flex-wrap gap-6 text-gray-400 mb-6">
//                             <div className="flex justify-center items-center gap-2 mb-4">
//                                 <FaMapMarkerAlt size={15} className="text-gray-500" />
//                                 <span className="text-gray-500">Morocco</span>
//                             </div>
//                             <div className="flex justify-center items-center gap-2 mb-4">
//                                 <FaEnvelope size={15} className="text-gray-500" />
//                                 <span className="text-gray-500">Available for remote work</span>
//                             </div>
//                         </div>

//                         {/* Boutons avec icônes */}
//                         <div className="flex gap-4">
//                             <a
//                                 href="https://github.com/oumaimadahar"
//                                 target="_blank"
//                                 className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2"
//                             >
//                                 <FaGithub className="text-xl" /> GitHub
//                             </a>
//                             <a
//                                 href="https://www.linkedin.com/in/oumaima-dahar-06b642251/"
//                                 target="_blank"
//                                 className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-2"
//                             >
//                                 <FaLinkedin className="text-xl" /> LinkedIn
//                             </a>
//                             <a
//                                 href="/resume.pdf"
//                                 target="_blank"
//                                 className="px-5 py-2  bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center gap-2"
//                             >
//                                 <HiDownload className="text-xl" /> Resume
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function About() {
    return (
        <div id="About" className="px-4 sm:px-6 lg:px-12 py-10">
            {/* Titre principal */}
            <div className="flex flex-col items-center gap-4 text-center mb-10">
                <h1 className="font-semibold text-white text-4xl sm:text-5xl">
                    À Propos {" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        De Moi
                    </span>
                </h1>
                <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl">
                    Développeuse web full-stack passionnée, spécialisée dans la création d’applications web modernes, réactives et performantes grâce aux technologies actuelles.
                </p>
            </div>

            {/* Section principale */}
            <section className="min-h-screen flex items-center justify-center text-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-0">
                    {/* Image à gauche */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/images/profile.jpeg"
                            alt="Profile"
                            className="rounded-2xl shadow-lg w-64 sm:w-80 md:w-[90%] object-cover"
                        />
                    </div>

                    {/* Texte à droite */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start mb-4">
                            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
                            <p className="text-gray-50 uppercase tracking-widest text-sm sm:text-base">
                                Profil
                            </p>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                            Oumaima Dahar
                        </h1>
                        <h2 className="text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-600 font-semibold mb-6">
                            Développeuse Full-Stack
                        </h2>

                        <p className="text-gray-300 leading-relaxed mb-6 text-justify text-sm sm:text-base">
                            Je crée des applications web performantes et intuitives, combinant design élégant et fonctionnalités robustes. Mon expertise couvre le front-end avec{" "}
                            <span className="text-white font-medium">HTML</span>,{" "}
                            <span className="text-white font-medium">CSS</span>,{" "}
                            <span className="text-white font-medium">JavaScript</span>,{" "}
                            <span className="text-white font-medium">React</span> et{" "}
                            <span className="text-white font-medium">Next.js</span>, ainsi que le back-end avec{" "}
                            <span className="text-white font-medium">Node.js</span>,{" "}
                            <span className="text-white font-medium">Express</span> et{" "}
                            <span className="text-white font-medium">Java & Spring Boot</span>.
                            Originaire du Maroc, j’ai obtenu un baccalauréat scientifique en 2019, puis une licence en mécanique de
                            l’énergie avant de poursuivre un master professionnel en génie logiciel et applications web à la{" "}
                            <span className="text-white font-medium">FST Settat</span>. Mon parcours s’est enrichi
                            de plusieurs formations spécialisées, notamment chez{" "}
                            <span className="text-white font-medium">Simplon Maghreb</span>,{" "}
                            <span className="text-white font-medium">Ajincode Academy</span> et{" "}
                            <span className="text-white font-medium">GoMyCode</span>, où j’ai renforcé mes compétences
                            en développement full-stack. Curieuse, rigoureuse et toujours prête à apprendre, j’aime collaborer sur des projets ambitieux et contribuer
                            à la création de solutions performantes, élégantes et durables. Actuellement, je suis à la recherche d’un stage ou d’une opportunité
                            professionnelle pour mettre mes compétences en pratique et continuer à évoluer dans le domaine du développement web.
                        </p>


                        {/* Infos */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 text-gray-400 mb-6">
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                                <FaMapMarkerAlt size={15} className="text-gray-500" />
                                <span className="text-gray-500 text-sm sm:text-base">Morocco , Cassablanca</span>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                                <FaEnvelope size={15} className="text-gray-500" />
                                <span className="text-gray-500 text-sm sm:text-base">Disponible immédiatement</span>
                            </div>
                        </div>

                        {/* Boutons */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                            <a
                                href="https://github.com/oumaimadahar"
                                target="_blank"
                                className="px-4 sm:px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2 text-sm sm:text-base"
                            >
                                <FaGithub className="text-lg" /> GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/oumaima-dahar-06b642251/"
                                target="_blank"
                                className="px-4 sm:px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-2 text-sm sm:text-base"
                            >
                                <FaLinkedin className="text-lg" /> LinkedIn
                            </a>
                            <a
                                href="/oumaima daharCV2.pdf"
                                download="oumaima daharCV2.pdf"  // nom du fichier téléchargé
                                className="px-4 sm:px-5 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center gap-2 text-sm sm:text-base"
                            >
                                <HiDownload className="text-lg" />Télécharger CV
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
