import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/images/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/images/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/images/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/images/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/images/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    Image: "/images/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 15",
    Image: "/images/next.png",
    width: 80,
    height: 80,
  },

  {
    name: "Node js",
    Image: "/images/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/images/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    name: "SpringBoot",
    Image: "/images/Springboot.jpg",
    width: 80,
    height: 90,
  },
  {
    name: "Bootstrapt",
    Image: "/images/bootstrap.png",
    width: 90,
    height: 90,
  },
  {
    name: "Mysqlt",
    Image: "/images/Mysql.png",
    width: 100,
    height: 100,
  },
  {
    name: "GitHub",
    Image: "/images/github.png",
    width: 110,
    height: 110,
  },
  {
    name: "java",
    Image: "/images/java.png",
    width: 100,
    height: 100,
  },
  {
    name: "Postman",
    Image: "/images/postman.png",
    width: 80,
    height: 80,
  },
  {
    name: "VS Code",
    Image: "/images/vscode.png",
    width: 80,
    height: 80,
  },
  {
    name: "IntelliJ IDEA",
    Image: "/images/intellij.png",
    width: 120,
    height: 120,
  },
  {
    name: "Trello",
    Image: "/images/trello1.png",
    width: 80,
    height: 80,
  },


];

export const NavLinks = [
  {
    name: "Accueil",
    icon: RxHome,
    link: "Home", // correspond à id="Home"
  },
  {
    name: "Projets",
    icon: RxPerson,
    link: "Projects", // correspond à id="Projects"
  },
  {
    name: "À propos",
    icon: RxDashboard,
    link: "About", // correspond à id="About"
  },
  {
    name: "Contact",
    icon: RxClipboard,
    link: "Contact", // correspond à id="Contact"
  },
]
// constants/index.ts
export const projects = [
  {
    id: 1,
    title: "Parfume Luxury",
    description: "Développement d’un site e-commerce complet pour parfums, avec un front-end moderne en Next.js et un back-end en Node.js/Express utilisant MongoDB Atlas. Les utilisateurs peuvent parcourir les produits, effectuer des recherches, ajouter des articles au panier et choisir leur méthode de paiement (carte bancaire ou paiement à la livraison). Le site inclut un système d’authentification, un profil utilisateur avec historique des commandes et échanges de produits, un système de messagerie permettant aux utilisateurs d’envoyer des messages et à l’administrateur de les recevoir, ainsi qu’un tableau de bord administrateur pour gérer les produits, commandes et utilisateurs. De plus, les utilisateurs enregistrés reçoivent automatiquement des notifications par email en cas de nouvelles promotions ou articles, incluant le nom du produit et le lien vers l’article. L’ensemble est présenté dans une interface élégante, performante et responsive.",
    image: "/images/luxury.png",
    tags: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS", "Framer Motion", "React Slick"],
    github: "https://github.com/oumaimadahar/ParfumPfe",
    demo: "https://parfum-pfe.vercel.app/",
  },
  {
    id: 2,
    title: "Développement D'une Application De Films",
    description:
      "Création d'une application web de films entièrement responsive avec React et Tailwind CSS, intégrant l'API The Movie Database (TMDb). Les utilisateurs peuvent effectuer des recherches en temps réel, consulter les films populaires et accéder à des informations détaillées sur chaque film, y compris le genre, la note, la date de sortie, la langue et la popularité. L'interface s'adapte parfaitement aux mobiles, tablettes et ordinateurs, avec une expérience de recherche intuitive où le champ de saisie apparaît après avoir cliqué sur l'icône de recherche sur les petits écrans.",
    image: "/images/movie.jpg",
    tags: ["React", "Tailwind CSS", "API TMDb", "Recherche en temps réel"],
    github: "https://github.com/oumaimadahar/movie-website",
    demo: "https://movie-website-brown-eight.vercel.app/",
  },

  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Portfolio moderne et interactif présentant mes projets, compétences et expériences. Entièrement responsive, avec des animations fluides grâce à Framer Motion. Chaque projet inclut sa démo et son lien GitHub. Les visiteurs peuvent me contacter via un formulaire intégré et télécharger mon CV en un clic. Interface intuitive et adaptée à tous les appareils.",
    image: "/images/portfolio.jpg",
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: "https://github.com/oumaimadahar/Portfolio",
    demo: "https://ton-site.com",
  },

  {
    id: 4,
    title: "Création d'une calculatrice simple",
    description:
      "Cette application permet aux utilisateurs d'effectuer des opérations mathématiques de base avec une interface utilisateur élégante et responsive.",
    image: "/images/Calculator.jpg",
    tags: ['JavaScript', 'Tailwind CSS'],
    github: "https://github.com/oumaimadahar/Calculatricejs",
    demo: "https://calculatricejs-one.vercel.app/",
  },
  {
    id: 5,
    title: "Création d'une application météo",
    description: "Développement d'une application météo permettant aux utilisateurs de consulter les prévisions météorologiques en temps réel selon leur position géographique. L'application affiche également la météo détaillée pour toute la journée avec les différentes heures, le tout dans une interface élégante et entièrement responsive.",
    image: "/images/weatherapp.jpg",
    tags: ["React", "Tailwind CSS", "WeatherAPI"],
    github: "https://github.com/oumaimadahar/AppWeather",
    demo: "https://app-weather-kappa-red.vercel.app/",
  },

];
//  les certifications
export const certifications = [
  {
    id: 1,
    title: "Bootcamp en développement logiciel full-stack",
    institution: "GoMyCode",
    description:
    "Programme complet couvrant le développement Frontend et Backend, la gestion de bases de données et le déploiement d’applications web modernes. Le bootcamp intègre également des compétences en intelligence artificielle pour concevoir et développer des solutions innovantes.",
    image: "/images/gomycodeCertification.jpg",
    link: "https://diploma.gomycode.app/?id=31760724073264500",
  },
  {
    id: 2,
    title: "Java et Spring Boot",
    institution: "Ajincodew Academy",
    description:
      "Formation axée sur le développement backend avec Java et Spring Boot, couvrant les APIs REST, la gestion des bases de données et les bonnes pratiques de développement.",
    image: "/images/certificate_ajincodew.png",
    link: "/images/certificate_ajincodew.png",
  },
  {
    id: 3,
    title: "Découverte des métiers du développement",
    institution: "Simplon Maghreb",
    description:
      "Certification confirmant ma compréhension des fondamentaux du développement web et des différentes étapes de création d’un projet numérique.",
    image: "/images/SimplonCertification.jpg",
    link: "/images/SimplonCertification.jpg", 
  },

  {
    id: 4,
    title: "Bases de données et SQL pour la science des données",
    institution: "IBM",
    description:
      "Certification IBM couvrant les concepts fondamentaux du SQL, des jointures, et de la manipulation des données dans le contexte de la data science.",
    image: "/images/IBMCertification2.jpg",
    link: "/images/IBMCertification2.jpg",
  },
  {
  id: 5,
  title: "Introduction à HTML, CSS et JavaScript",
  institution: "IBM",
  description:
    "Formation d’introduction aux langages fondamentaux du développement web — HTML, CSS et JavaScript. Ce programme m’a permis d’acquérir une base solide en création de sites web interactifs et responsives.",
  image: "/images/IBMCertification.jpg",
  link:"/images/IBMCertification.jpg",
},
{
  id: 6,
  title: "Introduction à l’intelligence artificielle",
  institution: "DeepLearning.AI",
  description:
    "Présentation complète sur les concepts fondamentaux et les applications de l’intelligence artificielle, couvrant les bases du machine learning, du deep learning et leur impact sur le développement technologique moderne.",
  image: "/images/IACertification.jpg",
  link: "/images/IACertification.jpg",
},

];






// constants/contactConstants.js

export const handlePhoneClick = () => {
  // Remplacez le numéro par votre numéro WhatsApp
  window.open('https://wa.me/601269262', '_blank');
};

export const handleEmailClick = () => {
  // Remplacez l'adresse email par votre adresse
  window.location.href = 'mailto:oumaimaoumita22@gmail.com';
};
// constants/index.ts

export const handleBackToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};