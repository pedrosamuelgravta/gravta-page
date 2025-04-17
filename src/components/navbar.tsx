import React from "react";

export function Navbar() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Scroll to form");
    const formElement = document.getElementById("form");
    if (formElement) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo("#form");
      } else {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full h-[110px] flex items-center justify-between z-20 text-white text-xl bg-transparent max-sm:px-6 lg:px-10 xl:px-20 px-10">
      <img
        src="/Gravta.png"
        alt="Gravta Logo"
        width={80}
        height={20}
        className="w-36 max-sm:w-33"
      />
      <button
        onClick={scrollToForm}
        className="border border-white px-4 py-2 text-[18px] cursor-pointer max-sm:text-[16px] max-sm:py-2"
      >
        Contact
      </button>
    </div>
  );
}
