// // footer.tsx

// "use client"; // Assurez-vous que le composant est un Client Component

// import React from 'react';
// import { handleBackToTop } from '@/constants'; // Chemin d'importation correct
// import { FaArrowUp } from 'react-icons/fa'; // Importez l'icône de flèche

// const Footer = () => {
//   return (
//     <footer  className="bg-gray-800 text-white py-4 flex justify-between items-center px-6">
//       <div className="flex items-center">
//         <span>Made with <span className="text-red-500">❤️</span> by Oumaima Dahar</span>
//       </div>
//       <div className="text-sm text-gray-300">
//         <span>© 2025 All rights reserved</span>
//       </div>
//       <button
//         onClick={handleBackToTop}
//         className="flex items-center text-blue-400 hover:text-blue-300 ml-4"
//       >
//         <FaArrowUp className="mr-2" /> {/* Icône de flèche */}
//         Back to top
//       </button>
//     </footer>
//   );
// };

// export default Footer;
"use client";

import React from 'react';
import { handleBackToTop } from '@/constants';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
      {/* Auteur */}
      <div className="flex items-center justify-center sm:justify-start">
        <span>
          Fait avec <span className="text-red-500">❤️</span> par Oumaima Dahar
        </span>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-300 text-center">
        <span>© 2025 Tous droits réservés</span>
      </div>

      {/* Bouton Back to Top */}
      <button
        onClick={handleBackToTop}
        className="flex items-center justify-center text-blue-400 hover:text-blue-300 gap-2"
      >
        <FaArrowUp /> Haut de page
      </button>
    </footer>
  );
};

export default Footer;
