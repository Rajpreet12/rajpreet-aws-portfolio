import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <Projects />
        <Blogs />
        <Certifications />
        <Experience />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
