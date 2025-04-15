"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Lenis from "lenis";
import { useInView } from "framer-motion";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/sections/hero-section";
import { IntroSection } from "./components/sections/intro-section";
import { FeatureSection } from "./components/sections/feature-section";
import { ParallaxSection } from "./components/sections/parallax-section";
import { ContactSection } from "./components/sections/contact-section";

export default function HomePage() {
  const logoRef = useRef<SVGSVGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isLogoInView = useInView(logoRef, { margin: "-25%", once: false });
  const [showNavbar, setShowNavbar] = useState(false);
  const videoSrc = useMemo(() => {
    return Math.random() > 0.5
      ? "/gravta_main_panel_TEMP_01.mp4"
      : "/gravta_main_panel_TEMP_02.mp4";
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
    });

    // Make lenis available globally for the navbar
    (window as any).lenis = lenis;

    // Adjust body height to match content
    function updateBodyHeight() {
      if (contentRef.current) {
        const contentHeight = contentRef.current.getBoundingClientRect().height;
        document.body.style.height = `${contentHeight + 85}px`; // navbar + footer height
      }
    }

    updateBodyHeight();

    // Animation function for Lenis
    function raf(time: any) {
      lenis.raf(time);

      if (contentRef.current) {
        const scrollY = lenis.scroll;
        const windowHeight = window.innerHeight;
        const maxScroll =
          contentRef.current.getBoundingClientRect().height -
          (windowHeight - 85);
        const translateY = Math.min(scrollY, maxScroll);
        contentRef.current.style.transform = `translateY(-${translateY}px)`;
      }

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.addEventListener("resize", updateBodyHeight);

    return () => {
      window.removeEventListener("resize", updateBodyHeight);
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  useEffect(() => {
    setShowNavbar(!isLogoInView);
  }, [isLogoInView]);

  return (
    <main>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />

      {showNavbar && <Navbar />}

      <div className="fixed top-[55px] left-0 right-0 lg:mx-10 xl:mx-20 mx-4 max-h-[calc(100vh-85px)] overflow-hidden z-10">
        <div
          ref={contentRef}
          className="grid grid-cols-9 gap-4 will-change-transform"
        >
          <HeroSection logoRef={logoRef} />
          <IntroSection />
          <ParallaxSection />
          <FeatureSection />
          <ContactSection />
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 max-sm:px-0 lg:px-10 xl:px-20 px-10 w-full h-[30px] z-50 bg-transparent">
        <Footer />
      </footer>
    </main>
  );
}
