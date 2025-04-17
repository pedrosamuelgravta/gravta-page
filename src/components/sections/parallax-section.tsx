import { MaskText } from "../mask-text";

export function ParallaxSection() {
  return (
    <>
      <section className="w-full h-full col-start-2 col-end-9 max-sm:col-span-full">
        <div className="w-full mt-60 max-sm:mb-0 max-md:mt-20 flex flex-row max-sm:flex-col justify-evenly gap-10">
          <div className="self-start w-full sticky max-sm:relative top-[25%]">
            <MaskText
              phrases={[
                "Our Human-AI workflow operates at the intersection of cinematography, data science, and advertising — powered by two innovations:",
              ]}
              className="text-[3vw] max-sm:text-low text-white font-medium leading-[110%]"
            />
          </div>

          <aside className="flex flex-col justify-center items-center h-full mt-90 max-lg:mt-5 max-md:mt-5 gap-80 max-sm:gap-10 w-full">
            <div className="relative ">
              <img
                src="/Group55.svg"
                alt=""
                className="w-[30rem] max-sm:w-[18rem]"
              />
            </div>
            <div className="relative max-md:px-0 ">
              <img
                src="/Group57.svg"
                alt=""
                className="w-[30rem] max-sm:w-[18rem]"
              />
            </div>
          </aside>
        </div>
      </section>
      <section className="w-full h-full col-start-4 col-end-10 max-sm:col-start-2 max-sm:col-end-5">
        <div className="flex flex-col gap-10 justify-start items-end mt-60 max-sm:mt-20 max-sm:mb-0">
          <MaskText
            phrases={[
              "We don't just create ads —we scale storytelling, personalize impact, and optimize messaging based on data-driven insights.",
            ]}
            className="text-[4vw] max-sm:text-high text-white font-medium leading-[110%] self-start mt-20 max-sm:mt-0"
          />
        </div>
      </section>
    </>
  );
}
