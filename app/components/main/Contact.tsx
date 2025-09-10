"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe} from "react-icons/fa";
import { handlePhoneClick, handleEmailClick} from "@/constants"; 

export default function Contact() {
    return (
        <div  id="Contact">
            <h1 className="font-semibold text-white text-[50px] text-center">
                Contact {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    {" "}
                    Me{" "}
                </span>

            </h1>
            <section className="min-h-screen  text-white px-6 py-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                    {/* Infos de contact */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-1 bg-gradient-to-r to-purple-500  from-blue-500 mr-2" />
                            <p className="text-gray-50 uppercase tracking-widest">Contact Information</p>
                        </div>

                        <div className="space-y-4">
                            {/* Email */}
                            <div className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl">
                                <FaEnvelope className="text-blue-500 text-xl" />
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p className="text-gray-400">oumaimaoumita22@gmail.com</p>
                                </div>
                            </div>

                            {/* Téléphone */}
                            <div className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl">
                                <FaPhone className="text-blue-400 text-xl" />
                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <p className="text-gray-400">+212 6012692612</p>
                                </div>
                            </div>

                            {/* Emplacement */}
                            <div className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl">
                                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                                <div>
                                    <p className="font-semibold">Location</p>
                                    <p className="text-gray-400">Cassablanca, Maroc</p>
                                </div>
                            </div>

                            {/* Fuseau horaire */}
                            <div className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl">
                                <FaGlobe className="text-blue-500 text-xl" />
                                <div>
                                    <p className="font-semibold">Timezone</p>
                                    <p className="text-gray-400">GMT+1 (Casablanca)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="bg-gray-800 rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-1 bg-gradient-to-r to-purple-500  from-blue-500 mr-2" />
                            <p className="text-gray-50 uppercase tracking-widest">Send Message</p>
                        </div>

                        <form className="space-y-4">
                            {/* Nom + Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email * *"
                                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400"
                                />
                            </div>

                            {/* Sujet */}
                            <input
                                type="text"
                                placeholder="Subject *"
                                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400"
                            />

                            {/* Message */}
                            <textarea
                                rows={5}
                                placeholder="Your Message *"
                                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400"
                            ></textarea>

                            {/* Bouton */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-lg font-semibold transition"
                            >
                                ✉️ Envoyer un message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center justify-center text-white">
                <h1 className="text-3xl font-bold mb-4 ">Prefer a different approach?</h1>
                <p className="mb-6 text-gray-500">You can also reach out to me directly via email or schedule a call to discuss your project requirements.</p>
                <div className="flex space-x-4">
                    <button
                        onClick={handlePhoneClick}
                        className="flex items-center w-40 p-3 bg-gradient-to-r from-blue-500 to-purple-500  text-white rounded transition duration-300"
                    >
                        <FaPhone className="mr-2" /> Schedule Call
                    </button>
                    <button
                        onClick={handleEmailClick}
                        className="flex items-center w-40 p-3 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
                    >
                        <FaEnvelope className="mr-2" /> Email Directly
                    </button>
                </div>
            </div>
        </div>
    );
}
