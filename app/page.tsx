import Navbar from "@/components/shared/components/Navbar/Navbar";
import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { MisionVisionValores } from "@/components/sections/identity/MisionVisionValores";
import { Awards } from "@/components/sections/awards/Awards";
import { VolunteersTeam as Volunteers } from "@/components/sections/volunteers/Volunteers";
import { Contact } from "@/components/sections/contact/Contact";
import { News } from "@/components/sections/news/News";
import { FAQs } from "@/components/sections/faqs/FAQs";
import { Footer } from "@/components/shared/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MisionVisionValores />
      <Awards />
      <Volunteers />
      <Contact />
      <News />
      <FAQs />
      <Footer />
    </>
  );
}
