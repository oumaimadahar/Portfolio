import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Footer from "./components/main/Footer";
import HeroContent from "./components/main/Hero";
import Navbar from "./components/main/Navbar";
import Projects from "./components/main/Project";
import Page from "./components/main/Skils";
import Certifications from "./components/main/Certifications";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Navbar/>
       
        <HeroContent/>
        <Page/>
        <About/>
        <Projects/>
        <Certifications/>
        <Contact/>
       <Footer/>
        

      </div>
    </main>
  );
}
