import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { HowItWorks } from "@/components/HowItWorks";
import { ValueProps } from "@/components/ValueProps";
import { DataSection } from "@/components/DataSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function LiidiaPage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        {/* <TrustStrip />
        <HowItWorks />
        <ValueProps />
        <DataSection />
        <FAQ />
        <FinalCTA /> */}
      </main>
      <Footer />
    </>
  );
}
