import Navbar from "@/shared/components/Navbar/Navbar";
import { Hero } from "@/sections/Hero/Hero";
import { About } from "@/sections/About/About";
import MisionVisionValores from "@/sections/Identity/MisionVisionValores";
import { Awards } from "@/sections/Awards/Awards";
import { ContactUs } from "@/sections/ContactUs/ContactUs";
import FAQs from "@/sections/FAQs/FAQs";
import { Footer } from "@/shared/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MisionVisionValores />
      <Awards />
      <ContactUs />
      <FAQs />
      <Footer />
    </>
  );
}