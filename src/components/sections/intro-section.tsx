import { MaskText } from "../mask-text";

export function IntroSection() {
  return (
    <>
      <section className="h-full col-start-5 col-end-10 max-sm:col-start-2 max-sm:col-end-5">
        <div className="flex flex-col gap-10 justify-start items-end mt-30 max-sm:mt-10 max-sm:mb-0">
          <MaskText
            phrases={[
              "We are a video advertising studio that creates and produces unique TV commercials at scale.",
            ]}
            className="text-[3vw] max-sm:text-low text-white font-medium leading-[110%]"
          />
        </div>
      </section>

      <section className="w-full h-full col-start-1 col-end-9 max-sm:col-start-1 max-sm:col-end-4">
        <div className="flex flex-col gap-10 justify-start items-start mt-60 max-sm:mt-20 max-sm:mb-0">
          <MaskText
            phrases={[
              "We leverage real-time insights and AI to unlock multiple audience segments and deliver targeted creative messages that continuously evolve.",
            ]}
            className="text-[4vw] max-sm:text-high text-white font-medium leading-[110%]"
          />
        </div>
      </section>

      <section className="w-full h-full justify-end items-end col-start-3 col-end-10 flex flex-col gap-20 max-sm:col-start-2 max-sm:col-end-5">
        <div className="flex flex-col items-center mt-30 max-sm:mt-10 max-sm:mb-0">
          <MaskText
            phrases={[
              "The rules of advertising were written before streaming, before platforms, before AI.",
            ]}
            className="text-[4vw] max-sm:text-high text-white font-medium leading-[110%]"
          />
        </div>
      </section>
    </>
  );
}
