import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 15",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    name: "SpringBoot",
    Image: "/Springboot.jpg",
    width: 80,
    height: 90,
  },
  {
    name: "Bootstrapt",
    Image: "/bootstrap.png",
    width: 90,
    height: 90,
  },
  {
    name: "Mysqlt",
    Image: "/Mysql.png",
    width: 100,
    height: 100,
  },
  {
    name: "git",
    Image: "/git.png",
    width: 80,
    height: 80,
  },
  {
    name: "java",
    Image: "/java.webp",
    width: 100,
    height: 100,
  },
  
];

export const NavLinks = [
  {
    name: "Home",
    icon: RxHome,
    link: "Home", // correspond à id="Home"
  },
  {
    name: "Projects",
    icon: RxPerson,
    link: "Projects", // correspond à id="Projects"
  },
  {
    name: "About",
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
    title: "Weather Application Creation",
    description: "Developed a weather application.This application allows users to check real-time weather forecasts, providing a responsive and elegant user interface.",
    image: "/weatherapp.jpg",
    tags: ["React", "Tailwind CSS", "WeatherAPI"],
    github: "https://github.com/oumaimadahar/AppWeather",
    demo: "https://ton-site.com",
  },
  {
    id: 2,
    title: "Development of a Movie Application",
    description:
      "Created a movie application where users can perform filtered searches and view trending films. Users can select a movie to access all necessary information, including genre, type, and other relevant details.",
    image: "/movie.jpg",
    tags: ["React", "Tailwind CSS", "MovieAPI"],
    github: "https://github.com/oumaimadahar/movie-website",
    demo: "https://ton-site.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      'My personal portfolio website showcasing my projects and skills.',
    image: "/portfolio.jpg",
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: "https://github.com/oumaimadahar/Portfolio",
    demo: "https://ton-site.com",
  },
  {
    id: 4,
    title: "Creation of a Simple Calculator",
    description:
      'This application allows users to perform basic mathematical operations with a sleek and responsive user interface.',
    image: "/Calculator.jpg",
    tags: ['Javascript', 'Tailwind CSS'],
    github: "https://github.com/oumaimadahar/Calculatricejs",
    demo: "https://ton-site.com",
  },
  {
    id: 5,
    title: "Create a Dice Game Application",
    description:'This project creates an interface that displays a randomly generated die face (1 to 6) with each button click, shows the number of attempts, and displays a message if the value matches a hidden target.',
       image: "/facette.jpg",
    tags: ['React'],
    github: "https://github.com/oumaimadahar/Jouer-Facette",
    demo: "https://ton-site.com",
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