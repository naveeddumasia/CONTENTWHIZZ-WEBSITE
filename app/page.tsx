import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <Services />
        <Stats />
        <About />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
