"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/shared/components/Navbar/Navbar";
import { Footer } from "@/components/shared/components/Footer/Footer";
import { newsService } from "@/services/newsService";
import type { NewsItem } from "@/types/database.types";

const NewsDetail: React.FC = () => {
    const params = useParams();
    const router = useRouter();
    const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNewsItem = async () => {
            if (!params.slug) return;

            try {
                const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
                const data = await newsService.getBySlug(slug);
                setNewsItem(data);
            } catch (error) {
                console.error("Error fetching news item:", error);
                // Optionally redirect to 404 or show error
            } finally {
                setLoading(false);
            }
        };
        fetchNewsItem();
    }, [params.slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!newsItem) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Noticia no encontrada</h1>
                <button
                    onClick={() => router.back()}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                    Regresar
                </button>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <section className="bg-white min-h-screen pt-24 pb-12">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <button
                        onClick={() => router.back()}
                        className="mb-8 flex items-center text-gray-600 hover:text-blue-600 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Volver
                    </button>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contenido Principal */}
                        <div className="lg:w-2/3">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                                {newsItem.title}
                            </h1>

                            <div className="flex items-center text-gray-500 mb-8 text-sm">
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium mr-4">
                                    {newsItem.category}
                                </span>
                                <span>{newsItem.date}</span>
                            </div>

                            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-8 rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={newsItem.image_url || "/images/placeholder.png"}
                                    alt={newsItem.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                {newsItem.content ? (
                                    <div dangerouslySetInnerHTML={{ __html: newsItem.content.replace(/\n/g, '<br />') }} />
                                ) : (
                                    <p>{newsItem.description}</p>
                                )}
                            </div>
                        </div>

                        {/* Sidebar (podría ser otras noticias o información extra) */}
                        <div className="lg:w-1/3 space-y-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Sobre esta sección</h3>
                                <p className="text-gray-600 mb-4">
                                    {newsItem.category === 'PROYECTOS'
                                        ? "En esta sección mostramos los proyectos destacados de nuestra comunidad, demostrando el impacto y la innovación de nuestros miembros."
                                        : "Mantente al día con las últimas novedades de nuestra comunidad universitaria."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default NewsDetail;
