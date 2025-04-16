"use client";

import type React from "react";

import { useState } from "react";
import { MaskText } from "../mask-text";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    companyName: "",
    jobTitle: "",
    workEmail: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const fullName = formData.get("fullName")?.toString().trim() || "";
    const companyName = formData.get("companyName")?.toString().trim() || "";
    const jobTitle = formData.get("jobTitle")?.toString().trim() || "";
    const workEmail = formData.get("workEmail")?.toString().trim() || "";

    const errors = {
      fullName: "",
      companyName: "",
      jobTitle: "",
      workEmail: "",
    };

    // Validation
    if (!fullName) errors.fullName = "Full name is required.";
    if (!companyName) errors.companyName = "Company name is required.";
    if (!jobTitle) errors.jobTitle = "Job title is required.";

    if (!workEmail) {
      errors.workEmail = "Work email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(workEmail)) {
        errors.workEmail = "Please enter a valid email.";
      }
    }

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) return;

    const data = { fullName, companyName, jobTitle, workEmail };

    try {
      const response = await fetch("https://form.gravta.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        setFormErrors((prev) => ({
          ...prev,
          workEmail: result.message || "Submission error.",
        }));
      }
    } catch (error) {
      setFormErrors((prev) => ({
        ...prev,
        workEmail: "An error occurred while sending. Please try again later.",
      }));
    }
  };

  return (
    <section className="w-full col-span-full" id="form">
      <div className="flex flex-row max-md:flex-col justify-around items-start mt-30 max-md:justify-start mb-60 max-md:mb-10 max-md:mt-5 h-full">
        <MaskText
          phrases={["We are re-imagining", "video advertising."]}
          className="text-[3vw] max-sm:text-[25px] text-white font-medium leading-[110%] self-start max-sm:mt-5"
        />
        <div className="relative inline-block max-md:pt-15 max-sm:pb-15 text-black max-md:self-center">
          <div className="bg-white w-[25rem] max-sm:w-full h-full p-4 z-4 relative">
            {formSubmitted ? (
              <MaskText
                phrases={[""]}
                className="text-[20px] font-normal max-sm:text-lg leading-[110%] mb-2 mt-1"
              />
            ) : (
              <MaskText
                phrases={["Find out how."]}
                className="text-[20px] font-normal max-sm:text-[15px] leading-[110%] mb-2 mt-1"
              />
            )}

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={`w-full border p-2 ${
                      formErrors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your name"
                  />
                  {formErrors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-semibold"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className={`w-full border p-2 ${
                      formErrors.companyName
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Company"
                  />
                  {formErrors.companyName && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.companyName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-semibold"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    className={`w-full border p-2 ${
                      formErrors.jobTitle ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your role"
                  />
                  {formErrors.jobTitle && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.jobTitle}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="workEmail"
                    className="block text-sm font-semibold"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    className={`w-full border p-2 mb-1 ${
                      formErrors.workEmail
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="your@email.com"
                  />
                  {formErrors.workEmail && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.workEmail}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-[#2C2C2C] text-white py-2 px-4 mb-1 hover:bg-[#1A1A1A] transition duration-300 ease-in-out cursor-pointer"
                >
                  Submit
                </button>
              </form>
            ) : (
              <p className="text-black text-xl font-normal my-14">
                Thanks! We got your message and will reply shortly.
              </p>
            )}

            <div
              className="absolute top-0 left-0 w-full h-full bg-white z-[-1] p-4"
              style={{ transform: "translate(20px,-20px)" }}
            ></div>
            <div
              className="absolute top-0 left-0 w-full h-full bg-white z-[-1] p-4"
              style={{ transform: "translate(-20px,20px)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
