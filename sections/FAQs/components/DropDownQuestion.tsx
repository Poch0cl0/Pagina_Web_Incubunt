"use client";

import { useState, useRef, useEffect } from "react";

export const DropDownQuestion = ({
  data,
}: {
  data: Array<{ question: string; answer: string }>;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Actualizar alturas cuando cambia openIndex
  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openIndex === index) {
          ref.style.maxHeight = ref.scrollHeight + "px";
          ref.style.opacity = "1";
        } else {
          ref.style.maxHeight = "0px";
          ref.style.opacity = "0";
        }
      }
    });
  }, [openIndex]);

  return (
    <div className="w-full space-y-2 md:px-10">
      {data.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="w-full">
            <button
              onClick={() => toggle(index)}
              className={`w-full flex justify-between items-center px-8 py-4 transition-all duration-300 ease-in-out cursor-pointer
                ${isOpen
                  ? "bg-white text-[#0063B5] font-extrabold rounded-t-2xl"
                  : "bg-[#25272C] text-white rounded-2xl"
                }`}
            >
              <span className="text-lg font-medium text-left flex-1">
                {item.question}
              </span>
              <span className="ml-4 text-lg shrink-0">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Contenido del acordeón con ref */}
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: "0px",
                opacity: "0",
              }}
            >
              <div className="bg-white text-[#25272C] px-8 py-4 rounded-b-2xl">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};