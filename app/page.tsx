import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Work />
        <Stats />
        <About />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
