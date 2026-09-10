import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Marquee from "@/components/marquee";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Experience />
      <Projects />
      <About />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}