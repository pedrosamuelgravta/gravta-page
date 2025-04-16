"use client";

import type React from "react";

export function Navbar() {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById("form");
    if (formElement) {
      // If using Lenis globally, we can access it through window
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo("#form");
      } else {
        // Fallback to regular scrolling
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-[110px] 
      flex items-center justify-between z-50 
      text-white text-xl bg-transparent
      max-sm:px-6 lg:px-10 xl:px-20 px-10 "
    >
      <img
        src="/Gravta.png"
        alt="Gravta Logo"
        width={80}
        height={20}
        className="w-36 max-sm:w-20"
      />
      <button
        onClick={scrollToForm}
        className="border border-white px-4 py-2 text-[18px] cursor-pointer max-sm:text-[12px] max-sm:px-2 max-sm:py-1"
      >
        Contact
      </button>
    </div>
  );
}
