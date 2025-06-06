import React from "react";
import { HeroSection } from "./components/sections/hero-section";
import { IntroSection } from "./components/sections/intro-section";
import { ParallaxSection } from "./components/sections/parallax-section";
import { ContactSection } from "./components/sections/contact-section";
// import Lenis from "lenis";

export const Content = ({
  logoRef,
}: {
  logoRef: React.RefObject<SVGSVGElement | null>;
}) => {
  // const scrollRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!scrollRef.current) return;

  //   const lenis = new Lenis({
  //     wrapper: scrollRef.current,
  //     duration: 1.2,
  //   });

  //   function resetLenisLimit() {
  //     lenis.resize();
  //   }

  //   window.addEventListener("load", resetLenisLimit);
  //   window.addEventListener("resize", resetLenisLimit);

  //   // exponha globalmente
  //   (window as any).lenis = lenis;

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => {
  //     window.removeEventListener("load", resetLenisLimit);
  //     window.removeEventListener("resize", resetLenisLimit);
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <div className="flex-grow h-full relative overflow-y-auto z-10">
      {/* <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto h-full max-sm:overflow-y-scroll mobile-hide-scrollbar"
      > */}
      <div className="grid grid-cols-9 max-sm:grid-cols-4 gap-4 gap-y-0  lg:mx-10 xl:mx-20 mx-6">
        <HeroSection logoRef={logoRef} />
        <IntroSection />
        <ParallaxSection />
        <ContactSection />
        <div className="w-full h-full col-span-full flex flex-col justify-center items-center gap-30 pb-60 max-md:h-full">
          <p className="text-[2vw] max-sm:text-low text-white">Follow Us</p>
          <a
            href="https://www.linkedin.com/company/gravtacreative"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin--v2 1.svg" className="cursor-pointer " />
          </a>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
