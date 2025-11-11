"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe} from "react-icons/fa";
import { handlePhoneClick, handleEmailClick} from "@/constants"; 

export default function Contact() {
    return (
        <div  id="Contact">
            <h1 className="font-semibold text-white text-[50px] text-center">
                Contact{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    {" "}
                    Moi{" "}
                </span>

            </h1>
            <section className="min-h-screen  text-white px-6 py-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                    {/* Infos de contact */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-1 bg-gradient-to-r to-purple-500  from-blue-500 mr-2" />
                            <p className="text-gray-50 uppercase tracking-widest">Informations de contact</p>
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
                                    <p className="font-semibold">Téléphone</p>
                                    <p className="text-gray-400">+212 6012692612</p>
                                </div>
                            </div>

                            {/* Emplacement */}
                            <div className="flex items-center gap-4 p-6 bg-gray-800 rounded-xl">
                                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                                <div>
                                    <p className="font-semibold">Emplacement</p>
                                    <p className="text-gray-400">Casablanca, Maroc</p>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="bg-gray-800 rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-1 bg-gradient-to-r to-purple-500  from-blue-500 mr-2" />
                            <p className="text-gray-50 uppercase tracking-widest">Envoyer un message</p>
                        </div>

                        <form className="space-y-4">
                            {/* Nom + Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                     placeholder="Votre nom *"
                                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Votre email *"
                                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400"
                                />
                            </div>

                            {/* Sujet */}
                            <input
                                type="text"
                                placeholder="Sujet *"
                                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400"
                            />

                            {/* Message */}
                            <textarea
                                rows={5}
                                 placeholder="Votre message *"
                                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-green-400"
                            ></textarea>

                            {/* Bouton */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-lg font-semibold transition"
                            >
                                ✉️ Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
           <div className="flex flex-col items-center justify-center text-white px-4 md:px-0">
  <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 text-center">
    Vous préférez une autre méthode ?
  </h1>
  <p className="mb-6 text-gray-500 text-center text-sm sm:text-base md:text-base">
    Vous pouvez également me contacter directement par email ou programmer un appel pour discuter de votre projet.
  </p>
  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full sm:w-auto justify-center">
    <button
      onClick={handlePhoneClick}
      className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded transition duration-300 text-center"
    >
      <FaPhone /> Programmer un appel
    </button>
    <button
      onClick={handleEmailClick}
      className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300 text-center"
    >
      <FaEnvelope /> Envoyer un email
    </button>
  </div>
</div>

        </div>
    );
}
