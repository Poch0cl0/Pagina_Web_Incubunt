"use client";

import React from "react";
import type { NewsItemProps } from "../interfaces/NewsProps";

const NewsItem: React.FC<NewsItemProps> = ({
  category = "NOTICIAS",
  date = "00/00/202X",
  title = "Título de noticia",
  description = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  onReadMore,
}) => {
  return (
    <div className="relative text-white overflow-hidden w-full max-w-sm lg:max-w-none p-6 md:p-8">

      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/images/News/news-background.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="bg-[#0A4472] text-white text-[0.7rem] md:text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wide">
            {category}
          </span>
          <span className="text-gray-300 text-sm md:text-base">{date}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold leading-snug">{title}</h2>

        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        <button
          onClick={onReadMore}
          className="mt-4 self-start inline-flex items-center gap-2 bg-[#0A4472] hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition-colors duration-200"
        >
          Leer más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
