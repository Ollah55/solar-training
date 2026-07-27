import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CareerOpportunities from "./components/CareerOpportunities/Careeropportunities";
import WhyBuiltRight from "./components/WhyBuiltRight/WhyBuiltRight";
import Curriculum from "./components/Curriculum/Curriculum";
import WhoShouldAttend from "./components/WhoShouldAttend/WhoShouldAttend";
import Gallery from "./components/Gallery/Gallery";
import Certification from "./components/Certification/Certification";
import Journey from "./components/Journey/Journey";
import FAQ from "./components/FAQ/FAQ";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import WhatsappFloat from "./components/WhatsappFloat/WhatsappFloat";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CareerOpportunities />
      <WhyBuiltRight />
      <Curriculum />
      <WhoShouldAttend />
      <Gallery />
      <Certification />
      <Journey />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsappFloat />
    </>
  );
}

export default App;