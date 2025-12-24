import { NewsItem, Award, FAQ } from "@/types/database.types";

export const MOCK_NEWS: NewsItem[] = [
    {
        id_news: 1,
        title: "Lanzamiento de INCUBUNT 2025",
        slug: "lanzamiento-incubunt-2025",
        description: "Iniciamos un nuevo año con grandes proyectos y metas para nuestra comunidad emprendedora.",
        content: "<p>Contenido detallado sobre el lanzamiento...</p>",
        image_url: "/images/News/item-noticias.png",
        date: "2025-01-01",
        category: "NOTICIAS",
        created_at: new Date().toISOString()
    },
    {
        id_news: 2,
        title: "Proyecto de Impacto Social",
        slug: "proyecto-impacto-social",
        description: "Estudiantes desarrollan solución innovadora para comunidades locales.",
        content: "<p>Detalles del proyecto...</p>",
        image_url: "/images/News/item-noticias.png",
        date: "2025-02-15",
        category: "PROYECTOS",
        created_at: new Date().toISOString()
    },
    {
        id_news: 3,
        title: "Reunión de Comunidad",
        slug: "reunion-comunidad-marzo",
        description: "Gran encuentro de miembros de la comunidad INCUBUNT.",
        content: "<p>Resumen de la reunión...</p>",
        image_url: "/images/News/item-noticias.png",
        date: "2025-03-10",
        category: "COMUNIDAD",
        created_at: new Date().toISOString()
    }
];

export const MOCK_AWARDS: Award[] = [
    {
        id_award: 1,
        title: "Reconocimiento a la Innovación",
        description: "Premio otorgado por la excelencia en desarrollo tecnológico.",
        image_url: "/images/Premios/premio1.png",
        year: 2024,
        created_at: new Date().toISOString()
    },
    {
        id_award: 2,
        title: "Mejor Incubadora Universitaria",
        description: "Galardón recibido por el impacto en el ecosistema emprendedor.",
        image_url: "/images/Premios/premio2.png",
        year: 2023,
        created_at: new Date().toISOString()
    },
    {
        id_award: 3,
        title: "Premio a la Sostenibilidad",
        description: "Reconocimiento por proyectos enfocados en el desarrollo sostenible.",
        image_url: "/images/Premios/premio3.png",
        year: 2022,
        created_at: new Date().toISOString()
    }
];

export const MOCK_FAQS: FAQ[] = [
    {
        id_faq: 1,
        question: "¿Cómo puedo unirme a INCUBUNT?",
        answer: "Puedes postular en nuestras convocatorias anuales o contactarnos directamente para más información.",
        order_num: 1,
        created_at: new Date().toISOString()
    },
    {
        id_faq: 2,
        question: "¿Qué tipo de proyectos apoyan?",
        answer: "Apoyamos proyectos de base tecnológica, social y emprendimientos tradicionales con potencial de escalabilidad.",
        order_num: 2,
        created_at: new Date().toISOString()
    },
    {
        id_faq: 3,
        question: "¿Tienen costo los programas?",
        answer: "La mayoría de nuestros programas para estudiantes de la universidad son gratuitos.",
        order_num: 3,
        created_at: new Date().toISOString()
    }
];
