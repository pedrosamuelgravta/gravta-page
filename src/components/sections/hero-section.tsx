import type { RefObject } from "react";
import { MaskText } from "../mask-text";

interface HeroSectionProps {
  logoRef: RefObject<SVGSVGElement | null>;
}

export function HeroSection({ logoRef }: HeroSectionProps) {
  return (
    <>
      <section className="w-full h-screen col-span-full grid">
        <svg
          width="580"
          height="100"
          viewBox="0 0 580 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full mt-10 max-sm:mt-20 row-start-2 row-end-2"
          ref={logoRef}
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
            phrases={["Gravta is a new kind", "of advertising company."]}
            className="text-[5vw] max-sm:text-3xl text-white font-medium leading-[110%]"
          />
        </div>
      </section>
    </>
  );
}
