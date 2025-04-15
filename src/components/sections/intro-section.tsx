import { MaskText } from "../mask-text";

export function IntroSection() {
  return (
    <>
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
    </>
  );
}
