import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import { Content } from "./Content";

// import ReactGA from "react-ga4";

export default function HomePage() {
  const logoRef = useRef<SVGSVGElement>(null);
  const isLogoInView = useInView(logoRef, { margin: "-10%", once: false });
  const [showNavbar, setShowNavbar] = useState(false);
  const videoOptions = [
    "/[BIG PANEL] Blue and Gray_SPECSOK-lowBR.mp4",
    "/[BIG PANEL] Model 29_SPECSOK-lowBR.mp4",
    "/[BIG PANEL] Model 30_SPECSOK-lowBR.mp4",
    "/[BIG PANEL] Red and Gray Square_SPECSOK-lowBR.mp4",
    "/[BIG PANELS] Model 32_SPECSOK-lowBR.mp4",
    "/[BIG PANELS] Model 38_SPECSOK-lowBR.mp4",
    "/[BIG PANELS] Model 39_SPECSOK-lowBR.mp4",
  ];
  const videoSrc = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * videoOptions.length);
    return videoOptions[randomIndex];
  }, []);

  useEffect(() => {
    setShowNavbar(!isLogoInView);
  }, [isLogoInView]);

  return (
    <main className="relative h-screen flex flex-col overflow-hidden">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
      />
      <div className=" min-h-[110px]">{showNavbar && <Navbar />}</div>
      <Content logoRef={logoRef} />
      <footer className="max-sm:px-0 lg:px-10 xl:px-20 px-10 w-full z-50 bg-transparent">
        <Footer />
      </footer>
    </main>
  );
}
