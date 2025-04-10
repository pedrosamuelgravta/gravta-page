import Lenis from "lenis";
import { MaskText } from "./MaskText";
import { useEffect, useRef, useState } from "react";
import { Footer } from "./Footer";
import { useInView } from "framer-motion";

export function App() {
  const imageRef = useRef<HTMLImageElement>(null);
  const isImageInView = useInView(imageRef, { margin: "-20%", once: false });
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // scroll mais longo e suave
    });
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    setShowFooter(!isImageInView);
  }, [isImageInView]);
  console.log("showFooter:", showFooter);
  return (
    <div className="grid grid-cols-9 gap-4 h-screen lg:mx-10 xl:mx-12">
      <section className="w-full h-screen justify-end items-end col-span-full row-start-1 row-end-2 flex flex-col gap-20 ">
        <img
          src="/Gravta-Horizontal.png"
          alt=""
          className="mb-20"
          ref={imageRef}
        />
      </section>
      <section className="w-full h-full justify-end items-start col-span-full row-start-2 row-end-3 flex flex-col gap-20">
        <div className="flex flex-col items-center my-30">
          <MaskText
            phrases={["Gravta is a new kind", "of advertising company"]}
            size="5vw"
          />
        </div>
      </section>
      <section className="w-full h-full col-span-full">
        <div className="flex flex-col gap-10 justify-start items-end mb-20">
          <MaskText
            phrases={[
              "We are a video advertising studio",
              "that creates and produces unique ",
              "TV commercials at scale",
            ]}
            size="3vw"
          />
          <MaskText
            phrases={[
              "We leverage real-time insights to unlock multiple ",
              "audience segments and deliver targeted creative",
              "messages that continuously evolve",
            ]}
            size="3vw"
          />
        </div>
      </section>
      <section className="w-full h-full justify-end items-start col-span-full  flex flex-col gap-20">
        <div className="flex flex-col items-center my-30">
          <MaskText
            phrases={[
              "The rules of advertising were",
              "written before streaming",
              "before platforms, before AI",
            ]}
            size="4vw"
          />
        </div>
      </section>
      <footer className="fixed bottom-0 left-0 lg:px-10 xl:px-12 w-full z-50">
        <Footer show={showFooter} />
      </footer>
    </div>
  );
}

export default App;
