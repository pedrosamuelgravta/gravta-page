import Lenis from "lenis";
import { useEffect } from "react";
import "lenis/dist/lenis.css";

export function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="grid grid-cols-9 gap-4 h-screen mx-20">
      <section className="w-full h-screen items-end col-span-full ">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1000 1000"
        >
          <path d="M488.8,549.8h21.3v-34h-12v-33h-11v-33h-54v33h-11v33h-12v34h21.1c2.3,0,4.3-1.6,4.9-3.8l2.2-8.6c1.1-4.5,5.1-7.6,9.7-7.6h23.8c4.4,0,8.3,2.9,9.6,7.1l2.8,9.3c.6,2.1,2.6,3.6,4.8,3.6ZM451,493.9l3.9-11.7c.7-2,2.6-3.4,4.7-3.4h.8c2.2,0,4.1,1.4,4.7,3.4l3.9,11.7c1.9,5.8-2.4,11.8-8.5,11.8h-1c-6.1,0-10.5-6-8.5-11.8Z" />
          <path d="M583,549.8v-34h12v-33h11v-33h-21.6c-2.6,0-4.9,1.7-5.7,4.2l-17.9,57.5c-1.5,4.7-8.1,4.7-9.5,0l-17.9-57.5c-.8-2.5-3.1-4.2-5.7-4.2h-21.6v33h11v33h12v34h54Z" />
          <path d="M400,549.8v-34h-10v-16h14v-34h-14v-16h-70v100h26v-21.2c0-5.4,4.4-9.8,9.9-9.8h.6c3.4,0,6.5,1.9,8,5l11.5,23.7c.7,1.4,2.1,2.3,3.6,2.3h20.5ZM377,484.3h0c0,6.4-5.1,11.5-11.5,11.5h-14.5c-2.8,0-5-2.2-5-5v-13c0-2.8,2.2-5,5-5h14.5c6.4,0,11.5,5.1,11.5,11.5Z" />
          <path d="M698,449.8h-84v26h15c7.7,0,14,6.3,14,14v60h26v-41h7v-33h22v-26Z" />
          <path d="M253.1,492.8h57v41h-11s0,16,0,16h-67.9v-10c0,0-11,0-11,0v-12h-10v-50s9.9,0,9.9,0v-18s11,0,11,0v-9.9h68s0,15.9,0,15.9h11c0,0,0,20,0,20h-11c-15,0-16-10-37-10s-24,8-24,24,11,25,24,25,18.8-3.6,21.4-7.1,0-4.9-2.4-4.9h-28s0-20,0-20Z" />
          <path d="M768.8,549.8h21.3v-34h-12v-33h-11v-33h-54v33h-11v33h-12v34h21.1c2.3,0,4.3-1.6,4.9-3.8l2.2-8.6c1.1-4.5,5.1-7.6,9.7-7.6h23.8c4.4,0,8.3,2.9,9.6,7.1l2.8,9.3c.6,2.1,2.6,3.6,4.8,3.6ZM731,493.9l3.9-11.7c.7-2,2.6-3.4,4.7-3.4h.8c2.2,0,4.1,1.4,4.7,3.4l3.9,11.7c1.9,5.8-2.4,11.8-8.5,11.8h-1c-6.1,0-10.5-6-8.5-11.8Z" />
        </svg>
      </section>
      <section className="w-full h-screen grid-cols-subgrid col-span-full grid grid-rows-12">
        <div className=" bg-gray-200 h-44 w-full col-start-3 col-end-8 mt-20 self-start"></div>
        <div className=" bg-gray-200 h-44 w-full col-start-5 col-end-9 row-start-8"></div>
      </section>
      <section className="w-full h-full grid-cols-subgrid col-span-full grid grid-rows-12">
        <div className="col-start-2 col-end-6 row-span-full flex flex-col gap-20 justify-center items-center mb-20">
          <div className=" bg-gray-200 h-44 w-full"></div>
          <div className=" bg-gray-200 h-44 w-full"></div>
          <div className=" bg-gray-200 h-44 w-full"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
