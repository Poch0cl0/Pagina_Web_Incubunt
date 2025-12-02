interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal = ({ isOpen, onClose }: VolunteerModalProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log('Datos del voluntario:', data);
    alert('¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4 transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-b from-[#0063B5]/90 to-[#002B4F]/90 text-white rounded-[25px] shadow-2xl w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl max-h-[90vh] flex-shrink-0 transform transition-all duration-300 ease-in-out scale-100 opacity-100 border border-white/20 overflow-y-auto"
        style={{
          boxShadow: '0 30px 20px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(50px)',
          borderRadius: '25px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fondo difuminado */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/recurso1.png')",
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            opacity: 0.1,
            zIndex: 1,
            backgroundRepeat: 'no-repeat',
            height: '100%',
          }}
        />

        <div className="relative z-10 h-full flex flex-col p-8 md:p-12 lg:p-16 xl:p-20">
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 lg:top-10 lg:right-10 p-2 z-20 text-white hover:text-gray-800"
            aria-label="Cerrar modal"
            style={{
              width: '29px',
              height: '29px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <mask id="mask0_2758_1782" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
                <rect width="29" height="29" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_2758_1782)">
                <path
                  d="M7.73317 22.9582L6.0415 21.2665L12.8082 14.4998L6.0415 7.73317L7.73317 6.0415L14.4998 12.8082L21.2665 6.0415L22.9582 7.73317L16.1915 14.4998L22.9582 21.2665L21.2665 22.9582L14.4998 16.1915L7.73317 22.9582Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>

          <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold" style={{
            color: "#FFF",
            fontFamily: "Space Grotesk",
            fontSize: "24px",
            fontWeight: "400",
            lineHeight: "28px"
          }}>
            Sé voluntario
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-white opacity-75 mb-8 italic" style={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontStyle: "italic",
            fontWeight: "400",
            lineHeight: "28px"
          }}>
            “Somos estudiantes apasionados. Buscamos más miembros para
            impulsar proyectos, <br />aprender y crecer juntos.”
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Campos originales */}
              {[
                { id: 'nombres', label: 'Nombres', type: 'text', placeholder: 'Nombres' },
                { id: 'apellidos', label: 'Apellidos', type: 'text', placeholder: 'Apellidos' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'tu@correo.com' },
                { id: 'celular', label: 'Celular', type: 'tel', placeholder: '+51 987 654 321' },
                { id: 'universidad', label: 'Universidad', type: 'text', placeholder: 'Universidad' },
                { id: 'ciclo', label: 'Ciclo', type: 'text', placeholder: 'VIII' },
                { id: 'carrera', label: 'Carrera', type: 'text', placeholder: 'Ingeniería Industrial' },
                { id: 'areaInteres', label: 'Área de interés', type: 'text', placeholder: 'PMO' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="text-white">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.id}
                    id={field.id}
                    placeholder={field.placeholder}
                    className="w-full p-3 bg-white/10 text-white border border-white/30 rounded-md"
                  />
                </div>
              ))}
            </div>

            {/* Botón enviar */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="py-3 px-12 bg-white text-black font-bold text-base rounded-full border-2 hover:bg-[#f7bb52] transition duration-200 cursor-pointer"
                style={{
                  borderColor: '#002B4F',
                }}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
