import { MaskText } from "./MaskText";

export const ParallaxSection = () => {
  return (
    <section className="w-full min-h-screen col-span-full max-sm:col-span-full">
      <div className="w-full my-30 max-sm:my-10 max-sm:mt-0 flex flex-col  gap-10 lg:gap-0">
        {/* Container com efeito sticky */}
        <div className="self-start w-full">
          <MaskText
            phrases={[
              "Gravta operates at the intersection of cinematography, of cinematography, advertising, and science, with a Human-AI workflow powered by two innovations",
            ]}
            className="text-[2vw] max-sm:text-4xl text-white font-medium leading-[110%]"
          />
        </div>

        <aside className="flex flex-col lg:flex-row gap-32 mt-29 justify-center">
          <div className="relative inline-block p-20 ">
            <MaskText
              phrases={["AdNeura™"]}
              className="text-[2vw] font-bold max-sm:text-3xl text-white leading-[110%] mb-3"
              isCard={true}
            />
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
              className="text-[2vw] max-sm:text-3xl text-white font-medium leading-[110%]"
            />
            <div className="absolute top-0 left-0 w-full h-full border border-white z-10"></div>
            <div
              className="absolute top-0 left-0 w-full h-full border border-white z-0"
              style={{ transform: "translate(10px,10px)" }}
            ></div>
            <div
              className="absolute top-0 left-0 w-full h-full border border-white z-0"
              style={{ transform: "translate(20px,20px)" }}
            ></div>
          </div>
          <div className="relative inline-block p-20 ">
            <MaskText
              phrases={["AdFilms"]}
              className="text-[2vw] font-bold max-sm:text-3xl text-white leading-[110%] mb-3"
              isCard={true}
            />
            <MaskText
              phrases={[
                "Scalable,",
                "personalized, high-",
                "continuously",
                "impact videos that",
                "connect with",
                "multiple audiences",
                "at the same time.",
              ]}
              className="text-[2vw] max-sm:text-3xl text-white font-medium leading-[110%]"
            />
            <div className="absolute top-0 left-0 w-full h-full border border-white z-10"></div>
            <div
              className="absolute top-0 left-0 w-full h-full border border-white z-0"
              style={{ transform: "translate(10px,10px)" }}
            ></div>
            <div
              className="absolute top-0 left-0 w-full h-full border border-white z-0"
              style={{ transform: "translate(20px,20px)" }}
            ></div>
          </div>
        </aside>
      </div>
    </section>
  );
};
