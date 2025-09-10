import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";


export default function About() {
    return (
        <div id="About">
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-semibold text-white text-[50px]">
                    About {" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                        Me{" "}
                    </span>
                   
                </h1>
                <p className="text-gray-400 text-[20px] w-180 text-center">
                   A passionate self-taught web developer specializing in building full-stack applications that are clean,responsive, and efficient.
                </p>
            </div>

            <section className="min-h-screen flex items-center justify-center  text-white px-6 py-16">

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/profile.jpg" // change avec ton image
                            alt="Profile"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />
                        
                    </div>

                    {/* Texte */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-1 bg-gradient-to-r to-purple-500  from-blue-500 mr-2" />
                            <p className="text-gray-50 uppercase tracking-widest">Who I Am</p>
                        </div>





                        <h1 className="text-3xl md:text-4xl font-bold mb-3">Oumaima Dahar</h1>
                        <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600 font-semibold mb-6">Full-Stack Developer</h2>
                        <p className="text-gray-300 leading-relaxed mb-6 text-justify">
                            I am a passionate self-taught developer from Morocco. I obtained my high school diploma in 2019 in physical sciences, followed by a bachelor's degree in energy mechanics.
                             Subsequently, I pursued a professional master's degree at FST Settat in software engineering and web applications.
                              My journey also included training at Simplon, where I learned the basics of web development. 
                              I then completed a training program with Ajincode Academy in Java and Spring Boot.
                               Currently, I specialize in full-stack Java development with GomuCode, focusing on creating clean, responsive, and efficient applications.
                        </p>
                        

                        {/* Infos */}
                        <div className="flex flex-wrap gap-6 text-gray-400 mb-6">
                            <div className="flex justify-center items-center gap-2 mb-4">
                                <FaMapMarkerAlt size={15} className="text-gray-500" />
                                <span className="text-gray-500">Morocco</span>
                            </div>
                            <div className="flex justify-center items-center gap-2 mb-4">
                                <FaEnvelope size={15} className="text-gray-500" />
                                <span className="text-gray-500">Available for remote work</span>
                            </div>
                        </div>

                        {/* Boutons avec icônes */}
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/oumaimadahar"
                                target="_blank"
                                className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2"
                            >
                                <FaGithub className="text-xl" /> GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/oumaima-dahar-06b642251/"
                                target="_blank"
                                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-2"
                            >
                                <FaLinkedin className="text-xl" /> LinkedIn
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="px-5 py-2  bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center gap-2"
                            >
                                <HiDownload className="text-xl" /> Resume
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
