"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Lenis from "lenis";
import { useInView } from "framer-motion";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/sections/hero-section";
import { IntroSection } from "./components/sections/intro-section";
import { ParallaxSection } from "./components/sections/parallax-section";
import { ContactSection } from "./components/sections/contact-section";

export default function HomePage() {
  const logoRef = useRef<SVGSVGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isLogoInView = useInView(logoRef, { margin: "-25%", once: false });
  const [showNavbar, setShowNavbar] = useState(false);
  const videoOptions = [
    "/[BIG PANEL] Blue and Gray_SPECSOK.mp4",
    "/[BIG PANEL] Blue Gray and Purple Stack_SPECSOK.mp4",
    "/[BIG PANEL] Model 28_SPECSOK.mp4",
    "/[BIG PANEL] Model 29_SPECSOK.mp4",
    "/[BIG PANELS] Model 32_SPECSOK.mp4",
    "/[BIG PANELS] Model 33_SPECSOK.mp4",
    "/[BIG PANELS] Model 39_SPECSOK.mp4",
  ];
  const videoSrc = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * videoOptions.length);
    return videoOptions[randomIndex];
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
        const contentHeight = contentRef.current.scrollHeight;
        document.body.style.height = `${contentHeight + 140}px`; // navbar + footer height
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
          (windowHeight - 140);
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
    window.dispatchEvent(new Event("resize"));
  }, []);

  useEffect(() => {
    setShowNavbar(!isLogoInView);
  }, [isLogoInView]);

  return (
    <main className="relative w-full h-screen overflow-hidden ">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />

      {showNavbar && <Navbar />}

      <div className="fixed top-[110px] left-0 right-0 max-h-[calc(100vh-140px)] overflow-hidden z-10 lg:mx-10 xl:mx-20 mx-6">
        <div
          ref={contentRef}
          className="grid md:grid-cols-9 grid-cols-4 gap-4 gap-y-0  will-change-transform"
        >
          <HeroSection logoRef={logoRef} />
          <IntroSection />
          <ParallaxSection />
          <ContactSection />
          <div className="w-full h-screen col-span-full max-md:h-full"></div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 max-sm:px-0 lg:px-10 xl:px-20 px-10 w-full h-[30px] z-50 bg-transparent">
        <Footer />
      </footer>
    </main>
  );
}
