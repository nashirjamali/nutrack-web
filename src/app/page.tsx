'use client';

import FeaturesSection from "@/component/featurecard";
import Footer from "@/component/footer";
import Header from "@/component/header";
import HeroSection from "@/component/herosection";
import {initSatellite} from '@junobuild/core-peer';
import {useEffect} from 'react';

export default function Home() {
  useEffect(() => {
    (async () =>
      await initSatellite({
        workers: {
          auth: true
        }
      }))();
  }, []);
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
