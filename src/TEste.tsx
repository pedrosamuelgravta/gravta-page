import Lenis from "lenis";
import { MaskText } from "./MaskText";
import { useEffect, useMemo, useRef, useState } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useInView } from "framer-motion";
import { ParallaxSection } from "./ParallaxSection";

export function App() {
  const imageRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null); // Referência para o conteúdo que rola
  const isImageInView = useInView(imageRef, { margin: "-25%", once: false });
  const [showFooter, setShowFooter] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    companyName: "",
    jobTitle: "",
    workEmail: "",
  });

  const videoSrc = useMemo(() => {
    return Math.random() > 0.5
      ? "/gravta_main_panel_TEMP_01.mp4"
      : "/gravta_main_panel_TEMP_02.mp4";
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Scroll suave
    });

    // Ajusta a altura do body para corresponder ao conteúdo
    function updateBodyHeight() {
      if (contentRef.current) {
        const contentHeight = contentRef.current.getBoundingClientRect().height;
        document.body.style.height = `${contentHeight + 85}px`; // 120px = navbar + footer
      }
    }

    // Inicializa a altura
    updateBodyHeight();

    // Função de animação do Lenis
    function raf(time: any) {
      lenis.raf(time);
      // Move o conteúdo com base no scroll do Lenis
      if (contentRef.current) {
        const scrollY = lenis.scroll; // Usa a posição de scroll do Lenis
        const windowHeight = window.innerHeight;
        const maxScroll =
          contentRef.current.getBoundingClientRect().height -
          (windowHeight - 85); // Limita o scroll
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
    };
  }, []);

  useEffect(() => {
    setShowFooter(!isImageInView);
  }, [isImageInView]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const fullName = formData.get("fullName")?.toString().trim() || "";
    const companyName = formData.get("companyName")?.toString().trim() || "";
    const jobTitle = formData.get("jobTitle")?.toString().trim() || "";
    const workEmail = formData.get("workEmail")?.toString().trim() || "";

    const errors: {
      fullName: string;
      companyName: string;
      jobTitle: string;
      workEmail: string;
    } = {
      fullName: "",
      companyName: "",
      jobTitle: "",
      workEmail: "",
    };

    if (!fullName) errors.fullName = "Full name is required.";
    if (!companyName) errors.companyName = "Company name is required.";
    if (!jobTitle) errors.jobTitle = "Job title is required.";
    if (!workEmail) {
      errors.workEmail = "Work email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(workEmail)) {
        errors.workEmail = "Please enter a valid email.";
      }
    }

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) return;

    const data = { fullName, companyName, jobTitle, workEmail };

    try {
      const response = await fetch("https://lpforms.gravta.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        setFormErrors((prev) => ({
          ...prev,
          workEmail: result.message || "Submission error.",
        }));
      }
    } catch (error) {
      setFormErrors((prev) => ({
        ...prev,
        workEmail: "An error occurred while sending. Please try again later.",
      }));
    }
  };

  return (
    <main>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />

      {showFooter && <Navbar />}
      <div className="fixed top-[55px] left-0 right-0 lg:mx-10 xl:mx-20 mx-4 max-h-[calc(100vh-85px)] overflow-hidden z-10">
        <div
          ref={contentRef}
          className="grid grid-cols-9 gap-4 will-change-transform"
        >
          <section className="w-full h-screen col-span-full grid">
            <svg
              width="580"
              height="100"
              viewBox="0 0 580 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full mt-10 max-sm:mt-20 row-start-2 row-end-2"
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
                className="text-[5vw] max-sm:text-3xl text-white font-medium leading-[110%]"
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
                className="text-[3vw] max-sm:text-3xl text-white font-medium leading-[110%]"
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
                className="text-[3vw] max-sm:text-3xl text-white font-medium leading-[110%]"
              />
            </div>
          </section>
          <section className="w-full h-full justify-end items-end col-span-full flex flex-col gap-20">
            <div className="flex flex-col items-center my-30 max-sm:mt-0">
              <MaskText
                phrases={[
                  "The rules of advertising were",
                  "written before streaming",
                  "before platforms, before AI",
                ]}
                className="text-[4vw] max-sm:text-3xl text-white font-medium leading-[110%]"
              />
            </div>
          </section>
          <ParallaxSection />
          <section className="w-full h-full col-span-full">
            <div className="flex flex-col gap-10 justify-start items-end my-30">
              <MaskText
                phrases={[
                  "We don't just create ads —we",
                  "scale storytelling, personalize",
                  "impact, and optimize messaging",
                  "based on data-driven insights.",
                ]}
                className="text-[4vw] max-sm:text-2xl text-white font-medium leading-[110%]"
              />
            </div>
          </section>
          <section className="w-full h-full col-span-full">
            <div className="flex flex-col gap-10 justify-start items-start my-30 max-sm:mt-0">
              <MaskText
                phrases={["We are The Growth Through-Creative Company®."]}
                className="text-[3vw] max-sm:text-2xl text-white font-medium leading-[110%]"
              />
            </div>
          </section>
          <section className="w-full h-full col-span-full">
            <div className="flex flex-col gap-10 justify-start items-end my-20 mb-10 max-sm:mt-0">
              <MaskText
                phrases={["Are you ready to grow your business?"]}
                className="text-[3vw] max-sm:text-2xl text-white font-medium leading-[110%]"
              />
            </div>
          </section>
          <section className="w-full h-full col-span-full" id="form">
            <div className="flex flex-col gap-10 justify-start items-end max-sm:my-0">
              <div className="relative inline-block p-20 max-sm:px-0  text-black">
                <div className="bg-white w-full h-full p-4 z-4 relative">
                  {formSubmitted ? (
                    <MaskText
                      phrases={[""]}
                      className="text-[20px] font-normal max-sm:text-lg leading-[110%] mb-2 mt-1"
                    />
                  ) : (
                    <MaskText
                      phrases={["Find out how Gravta can help your company."]}
                      className="text-[20px] font-normal max-sm:text-lg leading-[110%] mb-2 mt-1"
                    />
                  )}
                  {!formSubmitted ? (
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-bold"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          className={`w-full border p-2 ${
                            formErrors.fullName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Your name"
                        />
                        {formErrors.fullName && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.fullName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="companyName"
                          className="block text-sm font-bold"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          className={`w-full border p-2 ${
                            formErrors.companyName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Company"
                        />
                        {formErrors.companyName && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.companyName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="jobTitle"
                          className="block text-sm font-bold"
                        >
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          className={`w-full border p-2 ${
                            formErrors.jobTitle
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Your role"
                        />
                        {formErrors.jobTitle && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.jobTitle}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="workEmail"
                          className="block text-sm font-bold"
                        >
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="workEmail"
                          name="workEmail"
                          className={`w-full border p-2 mb-1 ${
                            formErrors.workEmail
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="your@email.com"
                        />
                        {formErrors.workEmail && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.workEmail}
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="bg-[#2C2C2C] text-white py-2 px-4 mb-1 hover:bg-[#1A1A1A] transition duration-300 ease-in-out cursor-pointer"
                      >
                        Submit
                      </button>
                    </form>
                  ) : (
                    <p className="text-black text-xl font-normal my-14">
                      Thanks! We got your message and will reply shortly.
                    </p>
                  )}

                  <div
                    className="absolute top-0 left-0  w-full h-full bg-white z-[-1] p-4"
                    style={{ transform: "translate(20px,-20px)" }}
                  ></div>
                  <div
                    className="absolute top-0 left-0  w-full h-full bg-white z-[-1] p-4"
                    style={{ transform: "translate(-20px,20px)" }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer
        className="fixed bottom-0 left-0 max-sm:px-0 lg:px-10 xl:px-20 px-10 
                          w-full h-[30px] z-50 bg-transparent"
      >
        <Footer />
      </footer>
    </main>
  );
}

export default App;
