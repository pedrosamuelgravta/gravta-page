import { MaskText } from "../mask-text";

export function FeatureSection() {
  return (
    <>
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
    </>
  );
}
