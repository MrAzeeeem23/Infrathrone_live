import LetterGlitch from "@/components/backgrounds/LetterGlitch";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/Header/NavBar";
import AboutUs from "./AboutUs";
import CalltoAction from "./CalltoAction";
import Features from "./Features";
import HeroSection from "./HeroSection";
import ProgramDetails from "./ProgramDetails";
import WhyJoin from "./WhyJoin";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-30 opacity-30">
        <LetterGlitch
          glitchColors={["#823111", "#fa4902"]}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      <NavBar />
      <HeroSection />
      <AboutUs />
      <Features />
      <WhyJoin />
      <ProgramDetails />
      <CalltoAction />
      <Footer />
    </div>
  );
}
