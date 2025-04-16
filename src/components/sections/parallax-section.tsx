import { MaskText } from "../mask-text";

export function ParallaxSection() {
  return (
    <>
      <section className="w-full h-full col-start-2 col-end-9 max-sm:col-span-full">
        <div className="w-full mt-60 max-sm:mb-0 max-sm:mt-10 flex flex-col justify-evenly gap-10">
          <div className="self-center w-full">
            <MaskText
              phrases={[
                "Gravta operates at the intersection of advertising, cinematography and data science, with a Human-AI workflow powered by two innovations:",
              ]}
              className="text-[3vw] max-sm:text-[17px] text-white font-medium leading-[110%]"
            />
          </div>

          <aside className="flex flex-row max-sm:flex-col justify-center mt-30 max-sm:mt-5 gap-32 max-sm:gap-10 w-full">
            <div className="relative inline-block p-20 max-sm:p-10">
              <MaskText
                phrases={["AdNeura™"]}
                className="text-[2vw] font-bold max-sm:text-[17px] text-white leading-[110%] mb-3 pl-5"
                isCard={true}
              />
              <MaskText
                phrases={[
                  "Neural network platform ",
                  "that continuously",
                  "identifies audience",
                  "segments and the",
                  "messages that",
                  "resonate with them.",
                ]}
                className="text-[2vw] max-sm:text-[15px] text-white font-medium leading-[110%] pl-5"
              />
              <svg
                width="362"
                height="364"
                viewBox="0 0 362 364"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 w-full h-full z-0"
              >
                <mask id="path-1-inside-1_218_294" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H326.763V18.1532H344.009V36.307H361.255V363.07H34.4918V344.916H17.2461V326.763H0V0Z"
                  />
                </mask>
                <path
                  d="M326.763 0H327.763V-1H326.763V0ZM0 0V-1H-1V0H0ZM326.763 18.1532H325.763V19.1532H326.763V18.1532ZM344.009 18.1532H345.009V17.1532H344.009V18.1532ZM344.009 36.307H343.009V37.307H344.009V36.307ZM361.255 36.307H362.255V35.307H361.255V36.307ZM361.255 363.07V364.07H362.255V363.07H361.255ZM34.4918 363.07H33.4918V364.07H34.4918V363.07ZM34.4918 344.916H35.4918V343.916H34.4918V344.916ZM17.2461 344.916H16.2461V345.916H17.2461V344.916ZM17.2461 326.763H18.2461V325.763H17.2461V326.763ZM0 326.763H-1V327.763H0V326.763ZM326.763 -1H0V1H326.763V-1ZM327.763 18.1532V0H325.763V18.1532H327.763ZM344.009 17.1532H326.763V19.1532H344.009V17.1532ZM345.009 36.307V18.1532H343.009V36.307H345.009ZM344.009 37.307H361.255V35.307H344.009V37.307ZM360.255 36.307V363.07H362.255V36.307H360.255ZM361.255 362.07H34.4918V364.07H361.255V362.07ZM35.4918 363.07V344.916H33.4918V363.07H35.4918ZM17.2461 345.916H34.4918V343.916H17.2461V345.916ZM16.2461 326.763V344.916H18.2461V326.763H16.2461ZM0 327.763H17.2461V325.763H0V327.763ZM-1 0V326.763H1V0H-1Z"
                  fill="white"
                  mask="url(#path-1-inside-1_218_294)"
                />
              </svg>
              {/* <div className="absolute top-0 left-0 w-full h-full border border-white z-10"></div>
              <div
                className="absolute top-0 left-0 w-full h-full border border-white z-10"
                style={{ transform: "translate(10px,10px)" }}
              ></div>
              <div
                className="absolute top-0 left-0 w-full h-full border border-white z-10"
                style={{ transform: "translate(20px,20px)" }}
              ></div> */}
            </div>
            <div className="relative inline-block p-20 max-sm:p-10">
              <MaskText
                phrases={["AdFilms"]}
                className="text-[2vw] font-bold max-sm:text-[17px] text-white leading-[110%] mb-3 pl-5"
                isCard={true}
              />
              <MaskText
                phrases={[
                  "Scalable, personalized,",
                  "high-impact videos",
                  "that connect with",
                  "multiple audiences",
                  "at the same time.",
                ]}
                className="text-[2vw] max-sm:text-[15px] text-white font-medium leading-[110%] pl-5"
              />
              <svg
                width="362"
                height="364"
                viewBox="0 0 362 364"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 w-full h-full z-0"
              >
                <mask id="path-1-inside-1_218_294" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H326.763V18.1532H344.009V36.307H361.255V363.07H34.4918V344.916H17.2461V326.763H0V0Z"
                  />
                </mask>
                <path
                  d="M326.763 0H327.763V-1H326.763V0ZM0 0V-1H-1V0H0ZM326.763 18.1532H325.763V19.1532H326.763V18.1532ZM344.009 18.1532H345.009V17.1532H344.009V18.1532ZM344.009 36.307H343.009V37.307H344.009V36.307ZM361.255 36.307H362.255V35.307H361.255V36.307ZM361.255 363.07V364.07H362.255V363.07H361.255ZM34.4918 363.07H33.4918V364.07H34.4918V363.07ZM34.4918 344.916H35.4918V343.916H34.4918V344.916ZM17.2461 344.916H16.2461V345.916H17.2461V344.916ZM17.2461 326.763H18.2461V325.763H17.2461V326.763ZM0 326.763H-1V327.763H0V326.763ZM326.763 -1H0V1H326.763V-1ZM327.763 18.1532V0H325.763V18.1532H327.763ZM344.009 17.1532H326.763V19.1532H344.009V17.1532ZM345.009 36.307V18.1532H343.009V36.307H345.009ZM344.009 37.307H361.255V35.307H344.009V37.307ZM360.255 36.307V363.07H362.255V36.307H360.255ZM361.255 362.07H34.4918V364.07H361.255V362.07ZM35.4918 363.07V344.916H33.4918V363.07H35.4918ZM17.2461 345.916H34.4918V343.916H17.2461V345.916ZM16.2461 326.763V344.916H18.2461V326.763H16.2461ZM0 327.763H17.2461V325.763H0V327.763ZM-1 0V326.763H1V0H-1Z"
                  fill="white"
                  mask="url(#path-1-inside-1_218_294)"
                />
              </svg>
              {/* <div className="absolute top-0 left-0 w-full h-full border border-white z-10"></div>
              <div
                className="absolute top-0 left-0 w-full h-full border border-white z-10"
                style={{ transform: "translate(10px,10px)" }}
              ></div>
              <div
                className="absolute top-0 left-0 w-full h-full border border-white z-10"
                style={{ transform: "translate(20px,20px)" }}
              ></div> */}
            </div>
            {/* <div className="relative inline-block  max-sm:p-10">
              <MaskText
                phrases={["AdFilms"]}
                className="text-[2vw] font-bold max-sm:text-[17px] text-white leading-[110%] mb-3 pl-5"
                isCard={true}
              />
              <MaskText
                phrases={[
                  "Scalable, personalized,",
                  "high-impact videos",
                  "that connect with",
                  "multiple audiences",
                  "at the same time.",
                ]}
                className="text-[2vw] max-sm:text-[15px] text-white font-medium leading-[110%] pl-5"
              />
              <svg
                width="362"
                height="364"
                viewBox="0 0 362 364"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 w-full h-full z-0"
              >
                <mask id="path-1-inside-1_218_294" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H326.763V18.1532H344.009V36.307H361.255V363.07H34.4918V344.916H17.2461V326.763H0V0Z"
                  />
                </mask>
                <path
                  d="M326.763 0H327.763V-1H326.763V0ZM0 0V-1H-1V0H0ZM326.763 18.1532H325.763V19.1532H326.763V18.1532ZM344.009 18.1532H345.009V17.1532H344.009V18.1532ZM344.009 36.307H343.009V37.307H344.009V36.307ZM361.255 36.307H362.255V35.307H361.255V36.307ZM361.255 363.07V364.07H362.255V363.07H361.255ZM34.4918 363.07H33.4918V364.07H34.4918V363.07ZM34.4918 344.916H35.4918V343.916H34.4918V344.916ZM17.2461 344.916H16.2461V345.916H17.2461V344.916ZM17.2461 326.763H18.2461V325.763H17.2461V326.763ZM0 326.763H-1V327.763H0V326.763ZM326.763 -1H0V1H326.763V-1ZM327.763 18.1532V0H325.763V18.1532H327.763ZM344.009 17.1532H326.763V19.1532H344.009V17.1532ZM345.009 36.307V18.1532H343.009V36.307H345.009ZM344.009 37.307H361.255V35.307H344.009V37.307ZM360.255 36.307V363.07H362.255V36.307H360.255ZM361.255 362.07H34.4918V364.07H361.255V362.07ZM35.4918 363.07V344.916H33.4918V363.07H35.4918ZM17.2461 345.916H34.4918V343.916H17.2461V345.916ZM16.2461 326.763V344.916H18.2461V326.763H16.2461ZM0 327.763H17.2461V325.763H0V327.763ZM-1 0V326.763H1V0H-1Z"
                  fill="white"
                  mask="url(#path-1-inside-1_218_294)"
                />
              </svg>
            </div> */}
          </aside>
        </div>
      </section>
      <section className="w-full h-full col-start-5 col-end-10 max-sm:col-span-full">
        <div className="flex flex-col gap-10 justify-start items-end mt-60 max-sm:mt-20 max-sm:mb-0">
          <MaskText
            phrases={[
              "We don't just create ads —we scale storytelling, personalize impact, and optimize messaging based on data-driven insights.",
            ]}
            className="text-[3vw] max-sm:text-[21px] text-white font-medium leading-[110%] self-start mt-20 max-sm:mt-0"
          />
        </div>
      </section>
    </>
  );
}
