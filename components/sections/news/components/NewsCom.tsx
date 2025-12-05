"use client";
import Navbar from "../../../shared/components/Navbar/Navbar";
import { Footer } from "../../../shared/components/Footer/Footer";
import { useRouter } from "next/navigation";

const NewsCom: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <section className="max-w-[1600px]">
        {/* Cabecera */}
        <div className=" bg-gradient-to-r from-amber-500 to-yellow-600 ">
          <div className="flex justify-between items-center mb-10 text-white border-b border-white">
            <div className="flex items-center space-x-3 px-6">
              <img width="50" height="50" src="https://img.icons8.com/stickers/50/crowd.png" alt="crowd" />
              <h1 className="text-3xl font-bold">Comunidad</h1>
            </div>

            <button onClick={() => router.back()} className="bg-black text-white font-semibold px-16 py-6 hover:bg-blue-100 transition flex items-center gap-2">
              Noticias.
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 px-8">
          {/* Texto */}

          <div className="lg:w-1/2">
            <p className="text-black text-sm mb-2 font-bold ">12/10/2025</p>
            <h1 className="text-6xl font-extrabold text-black mb-4 leading-tight">
              What is Lorem Ipsum?
            </h1>
            <p className="italic text-gray-500 mb-6">
              From its medieval origins to the digital era, learn everything there is to know
              about the ubiquitous lorem ipsum passage.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, numquam atque! Assumenda natus molestias necessitatibus
              soluta sed a, veniam autem vel molestiae reiciendis eligendi dolorem hic, asperiores quam iure quasi?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure quas debitis totam tempore ipsam itaque quasi aliquam cumque,
              architecto veritatis blanditiis repellendus, optio odit dicta culpa id molestiae porro!
            </p>
          </div>

          {/* Imagen */}
          <div className="lg:w-1/2 flex justify-center rounded-2xl">
            <img src="/images/News/item-noticias.png" alt="Evento" className=" w-full h-auto shadow-md rounded-xl" />
          </div>
        </div>

        {/* Noticias relacionadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 py-4">
          {[1, 2].map((item) => (
            <div key={item} className="bg-[#1d1f20] text-white rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 hover:shadow-xl">
              <div className="">
                <img src="/images/News/item-noticias.png" alt="Noticia" className="rounded-l-2xl w-full" />
              </div>
              <div className=" px-6 py-8">
                <p className="text-sm text-gray-400 mb-2">09/10/2025</p>
                <h3 className="text-3xl font-bold mb-2">Título</h3>
                <p className="text-gray-300 mb-4">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature...
                </p>
                <button className="bg-white hover:bg-cyan-100 text-blue-500 transition-all px-4 py-1 rounded-full self-start">
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default NewsCom;









// import type { NewsItemProps } from "../interfaces/NewsProps";


// const NewsItem: React.FC<NewsItemProps> = ({
//   category = "NOTICIAS",
//   date = "00/00/202X",
//   title = "Título de noticia",
//   description = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
//   onReadMore,

// }) => {
//   return (
//     <div className="relative text-white overflow-hidden w-full max-w-sm lg:max-w-none p-6 md:p-8">

//       <div className="absolute inset-0 z-0">
//         <div className="w-full h-full bg-[url('/images/News/news-background.jpg')] bg-cover bg-center"></div>
//         <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
//       </div>

//       <div className="relative z-10 flex flex-col gap-4">
//         <div className="flex items-center justify-between">
//           <span className="bg-[#0A4472] text-white text-[0.7rem] md:text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wide">
//             {category}
//           </span>
//           <span className="text-gray-300 text-sm md:text-base">{date}</span>
//         </div>

//         <h2 className="text-2xl md:text-3xl font-bold leading-snug">{title}</h2>

//         <p className="text-gray-200 text-sm md:text-base leading-relaxed">
//           {description}
//         </p>

//         <button
//           onClick={onReadMore}
//           className="mt-4 self-start inline-flex items-center gap-2 bg-[#0A4472] hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition-colors duration-200"
//         >
//           Leer más
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;
