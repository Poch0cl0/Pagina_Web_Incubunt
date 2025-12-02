import React from "react";
import NewsItem from "./components/NewsItem";

const News: React.FC = () => {
    return (
        <section className="max-w-8xl pl-4 md:flex md:gap-8">

            <div className="md:w-1/2 flex flex-col md:justify-center md:items-start text-center md:text-left">
                <header className="flex justify-center md:justify-start">
                    <img
                        src="/logos/logo-color.svg"
                        alt="Logotipo del grupo universitario"
                        className="w-48 h-auto mb-6 md:mb-8"
                        loading="lazy"
                    />
                </header>
                <article className="mt-4 md:mt-0">
                    <h1 className="text-4xl font-bold text-[#0A4472] mb-4">Noticias</h1>
                    <p className="text-lg max-w-md md:max-w-sm">
                        Descubre lo más reciente de nuestro grupo: proyectos innovadores,
                        reconocimientos, colaboraciones y eventos que marcan nuestra
                        trayectoria universitaria.
                    </p>
                </article>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2 lg:w-full hidden md:flex md:flex-col">
                <NewsItem />
                <NewsItem category="PROYECTOS" />
            </div>

        </section>
    );
};

export default News;
