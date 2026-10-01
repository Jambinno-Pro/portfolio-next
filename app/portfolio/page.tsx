import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Resume from "@/components/portfolio/Resume";
import Journey from "@/components/portfolio/Journey";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import CaseStudies from "@/components/portfolio/CaseStudies";
import RepositoryFeed from "@/components/portfolio/RepositoryFeed";
import Hobbies from "@/components/portfolio/Hobbies";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Portfolio() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
    >
      <Navbar />

      {/* Compact Portfolio Hero */}
      <Hero />

      {/* Portfolio Content */}
      <About />

      {/* Dynamic Backend Resume / CV */}
      <Resume />

      <Journey />
      <Experience />
      <Education />
      <Skills />
      <CaseStudies />
      <RepositoryFeed />
      <Hobbies />
      <Contact />

      <Footer />
    </main>
  );
}
