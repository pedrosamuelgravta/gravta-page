import Lenis from "lenis";
import { MaskText } from "./MaskText";
import { useEffect, useMemo, useRef, useState } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useInView } from "framer-motion";

export function App() {
  const imageRef = useRef<SVGSVGElement>(null);
  const isImageInView = useInView(imageRef, { margin: "-25%", once: false });
  const [showFooter, setShowFooter] = useState(false);

  const videoSrc = useMemo(() => {
    return Math.random() > 0.5
      ? "public/gravta_main_panel_TEMP_01.mp4"
      : "public/gravta_main_panel_TEMP_02.mp4";
  }, []);

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

  return (
    <>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="grid grid-cols-9 gap-4 h-screen lg:mx-10 xl:mx-20 mx-4">
        {showFooter && <Navbar />}
        <section className="w-full h-screen col-span-full grid ">
          <svg
            width="580"
            height="100"
            viewBox="0 0 580 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full mt-30 row-start-2 row-end-2"
            ref={imageRef}
          >
            <path
              d="M278.6 100H299.9V66H287.9V33H276.9V0H222.9V33H211.9V66H199.9V100H221C223.3 100 225.3 98.4 225.9 96.2L228.1 87.6C229.2 83.1 233.2 80 237.8 80H261.6C266 80 269.9 82.9 271.2 87.1L274 96.4C274.6 98.5 276.6 100 278.8 100H278.6ZM240.8 44.1L244.7 32.4C245.4 30.4 247.3 29 249.4 29H250.2C252.4 29 254.3 30.4 254.9 32.4L258.8 44.1C260.7 49.9 256.4 55.9 250.3 55.9H249.3C243.2 55.9 238.8 49.9 240.8 44.1Z"
              fill="white"
            />
            <path
              d="M372.8 100V66H384.8V33H395.8V0H374.2C371.6 0 369.3 1.70001 368.5 4.20001L350.6 61.7C349.1 66.4 342.5 66.4 341.1 61.7L323.2 4.20001C322.4 1.70001 320.1 0 317.5 0H295.9V33H306.9V66H318.9V100H372.9H372.8Z"
              fill="white"
            />
            <path
              d="M189.8 100V66H179.8V50H193.8V16H179.8V0H109.8V100H135.8V78.8C135.8 73.4 140.2 69 145.7 69H146.3C149.7 69 152.8 70.9 154.3 74L165.8 97.7C166.5 99.1 167.9 100 169.4 100H189.9H189.8ZM166.8 34.5C166.8 40.9 161.7 46 155.3 46H140.8C138 46 135.8 43.8 135.8 41V28C135.8 25.2 138 23 140.8 23H155.3C161.7 23 166.8 28.1 166.8 34.5Z"
              fill="white"
            />
            <path
              d="M487.8 0H403.8V26H418.8C426.5 26 432.8 32.3 432.8 40V100H458.8V59H465.8V26H487.8V0Z"
              fill="white"
            />
            <path
              d="M42.9 43H99.9V84H88.9V100H21V90H10V78H0V28H9.90001V10H20.9V0.100037H88.9V16H99.9V36H88.9C73.9 36 72.9 26 51.9 26C30.9 26 27.9 34 27.9 50C27.9 66 38.9 75 51.9 75C64.9 75 70.7 71.4001 73.3 67.9001C75.9 64.4001 73.3 63 70.9 63H42.9V43Z"
              fill="white"
            />
            <path
              d="M42.9 43H99.9V84H88.9V100H21V90H10V78H0V28H9.90001V10H20.9V0.100037H88.9V16H99.9V36H88.9C73.9 36 72.9 26 51.9 26C30.9 26 27.9 34 27.9 50C27.9 66 38.9 75 51.9 75C64.9 75 70.7 71.4001 73.3 67.9001C75.9 64.4001 73.3 63 70.9 63H42.9V43Z"
              fill="white"
            />
            <path
              d="M558.6 100H579.9V66H567.9V33H556.9V0H502.9V33H491.9V66H479.9V100H501C503.3 100 505.3 98.4 505.9 96.2L508.1 87.6C509.2 83.1 513.2 80 517.8 80H541.6C546 80 549.9 82.9 551.2 87.1L554 96.4C554.6 98.5 556.6 100 558.8 100H558.6ZM520.8 44.1L524.7 32.4C525.4 30.4 527.3 29 529.4 29H530.2C532.4 29 534.3 30.4 534.9 32.4L538.8 44.1C540.7 49.9 536.4 55.9 530.3 55.9H529.3C523.2 55.9 518.8 49.9 520.8 44.1Z"
              fill="white"
            />
          </svg>
        </section>
        <section className="w-full h-full justify-end items-start col-span-full row-start-2 row-end-3 flex flex-col gap-20">
          <div className="flex flex-col items-center mt-[10rem] mb-[9rem]">
            <MaskText
              phrases={["Gravta is a new kind", "of advertising company"]}
              className="text-[5vw] max-sm:text-3xl"
            />
          </div>
        </section>
        <section className="w-full h-full col-span-full">
          <div className="flex flex-col gap-10 justify-start items-end my-30 max-sm:mt-0">
            <MaskText
              phrases={[
                "We are a video advertising studio",
                "that creates and produces unique ",
                "TV commercials at scale",
              ]}
              className="text-[3vw] max-sm:text-3xl"
            />
          </div>
        </section>
        <section className="w-full h-full col-span-full">
          <div className="flex flex-col gap-10 justify-start items-start my-30 max-sm:mt-0">
            <MaskText
              phrases={[
                "We leverage real-time insights to unlock multiple ",
                "audience segments and deliver targeted creative",
                "messages that continuously evolve",
              ]}
              className="text-[3vw] max-sm:text-3xl"
            />
          </div>
        </section>
        <section className="w-full h-full justify-end items-end col-span-full  flex flex-col gap-20">
          <div className="flex flex-col items-center my-30 max-sm:mt-0">
            <MaskText
              phrases={[
                "The rules of advertising were",
                "written before streaming",
                "before platforms, before AI",
              ]}
              className="text-[4vw] max-sm:text-3xl"
            />
          </div>
        </section>
        <section className="w-full h-full justify-center items-center col-start-2 col-end-9  max-sm:col-span-full flex flex-col gap-20">
          <div className="flex flex-row justify-between w-full items-center max-sm:items-start  my-30 max-sm:flex-col max-sm:my-10 max-sm:gap-10 max-sm:mt-0">
            <MaskText
              phrases={[
                "Gravta operates",
                "at the intersection",
                "of cinematography,",
                "advertising, and",
                "science, with a",
                "Human-AI workflow",
                "powered by two",
                "innovations",
              ]}
              className="text-[3vw] max-sm:text-4xl"
            />
            <div className="relative inline-block p-20">
              <MaskText
                phrases={[
                  "Neural network",
                  "platform that",
                  "continuously",
                  "identifies audience",
                  "segments and the",
                  "messages that",
                  "resonate with them.",
                ]}
                className="text-[2vw] max-sm:text-3xl"
              />

              <div className="absolute top-0 left-0 w-full h-full border border-white z-10"></div>
              <div
                className="absolute top-0 left-0 w-full h-full border border-white z-0 "
                style={{ transform: "translate(10px,10px)" }}
              ></div>
              <div
                className="absolute top-0 left-0 w-full h-full border border-white z-0"
                style={{ transform: "translate(20px,20px)" }}
              ></div>
            </div>
          </div>
        </section>
        <section className="w-full h-full justify-center items-center col-start-2 col-end-9 max-sm:col-span-full flex flex-col gap-20">
          <div className="flex flex-row justify-between w-full items-center  my-30 max-sm:my-0">
            <MaskText phrases={[]} className="text-[3vw]" />
            <div className="relative inline-block p-20">
              <MaskText
                phrases={[
                  "Neural network",
                  "platform that",
                  "continuously",
                  "identifies audience",
                  "segments and the",
                  "messages that",
                  "resonate with them.",
                ]}
                className="text-[2vw] max-sm:text-3xl"
              />

              <div className="absolute top-0 left-0 w-full h-full border border-white z-10"></div>
              <div
                className="absolute top-0 left-0 w-full h-full border border-white z-0 "
                style={{ transform: "translate(10px,10px)" }}
              ></div>
              <div
                className="absolute top-0 left-0 w-full h-full border border-white z-0"
                style={{ transform: "translate(20px,20px)" }}
              ></div>
            </div>
          </div>
        </section>
        <section className="w-full h-full col-span-full ">
          <div className="flex flex-col gap-10 justify-start items-end  my-30">
            <MaskText
              phrases={[
                "We don't just create ads —we",
                "scale storytelling, personalize",
                "impact, and optimize messaging",
                "based on data-driven insights.",
              ]}
              className="text-[4vw] max-sm:text-2xl"
            />
          </div>
        </section>
        <section className="w-full h-full col-span-full ">
          <div className="flex flex-col gap-10 justify-start items-start  my-30 max-sm:mt-0">
            <MaskText
              phrases={["We are The Growth Through-Creative Company®."]}
              className="text-[3vw] max-sm:text-2xl"
            />
          </div>
        </section>
        <section className="w-full h-full col-span-full ">
          <div className="flex flex-col gap-10 justify-start items-end  my-30 mb-80 max-sm:mt-0">
            <MaskText
              phrases={["Are you ready to grow your business?"]}
              className="text-[3vw] max-sm:text-2xl"
            />
          </div>
        </section>

        <footer className="fixed bottom-0 left-0 max-sm:px-0 lg:px-10 xl:px-20 px-10 w-full z-50">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
