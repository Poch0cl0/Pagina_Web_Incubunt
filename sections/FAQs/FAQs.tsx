import { DropDownQuestion } from "./components/DropDownQuestion";
import { questionsData } from "./data/questions";

const FAQs = () => {
  return (
    <section className="flex items-center bg-gradient-to-r from-[#002B4F] via-[#04477e] to-[#0452c0] text-white py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row lg:items-start space-y-12 lg:space-y-0 lg:space-x-20">
        {/* Sección izquierda */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="bg-[#FFB025] text-[#353535] text-xl font-bold uppercase px-6 py-3 rounded-md mb-6 w-fit">
            Preguntas frecuentes
          </h1>

          <h2
            className="mb-6 text-[30px] sm:text-[50px] lg:text-[64px] leading-[98%] font-bold text-transparent text-center lg:text-left"
            style={{
              transform: "rotate(0.159deg)",
              fontFamily: "Montserrat",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#FFF",
            }}
          >
            <span className="lg:hidden">Tienes preguntas?</span>
            <span className="hidden lg:inline">
              Tienes<br />preguntas?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white max-w-md">
            Encuentra aquí las respuestas a las dudas más comunes sobre nuestra organización
          </p>
        </div>

        {/* Sección derecha */}
        <div className="w-full lg:w-2/3">
          <DropDownQuestion data={questionsData} />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
