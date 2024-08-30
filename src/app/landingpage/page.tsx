'use client';

import FeaturesSection from "@/component/featurecard";
import Footer from "@/component/footer";
import Header from "@/component/header";
import HeroSection from "@/component/herosection";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
