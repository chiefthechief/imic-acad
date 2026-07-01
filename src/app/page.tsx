import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import AcademicProgrammes from "@/components/AcademicProgrammes";
import StatsBanner from "@/components/StatsBanner";
import CampusLife from "@/components/CampusLife";
import Admissions from "@/components/Admissions";
import Testimonials from "@/components/Testimonials";
import NewsEvents from "@/components/NewsEvents";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RevealOnScroll>
          <OurStory />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <AcademicProgrammes />
        </RevealOnScroll>
        <RevealOnScroll delay={150}>
          <StatsBanner />
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <CampusLife />
        </RevealOnScroll>
        <RevealOnScroll delay={250}>
          <Admissions />
        </RevealOnScroll>
        <RevealOnScroll delay={300}>
          <Testimonials />
        </RevealOnScroll>
        <RevealOnScroll delay={350}>
          <NewsEvents />
        </RevealOnScroll>
        <RevealOnScroll delay={400}>
          <Contact />
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  );
}
