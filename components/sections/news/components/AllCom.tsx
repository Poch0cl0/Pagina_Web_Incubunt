"use client";
import { useRouter } from "next/navigation";
import { Footer } from "../../../shared/components/Footer/Footer";
import Navbar from "../../../shared/components/Navbar/Navbar";


const AllCom: React.FC = () => {
    const router = useRouter();

    return (
        <>
            <Navbar />
            <section className="relative max-w-[1600px] mx-auto bg-gray-50">
                <div className="absolute top-0 left-0 w-full h-[380px] bg-gradient-to-r from-amber-500 to-yellow-600 z-0" />
                <div className="relative z-10">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-4">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-[#1d1f20] text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1" >
                                <img src="/images/News/item-noticias.png" alt="Noticia" className="w-full h-48 object-cover" />
                                <div className="p-5">
                                    <p className="text-sm text-gray-400 mb-2">00/00/25</p>
                                    <h3 className="text-lg font-semibold mb-2">Título</h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        Contrary to popular belief, Lorem Ipsum is not simply random
                                        text. It has roots in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years old.
                                    </p>
                                    <button onClick={() => router.push("/newscomun")} className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full hover:bg-blue-100 transition flex items-center space-x-2">
                                        <span>Leer más</span>
                                        <img src="/icons/icon-arrow-right.svg" alt="Flecha" className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default AllCom;