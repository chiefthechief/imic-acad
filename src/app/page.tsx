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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurStory />
        <AcademicProgrammes />
        <StatsBanner />
        <CampusLife />
        <Admissions />
        <Testimonials />
        <NewsEvents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
