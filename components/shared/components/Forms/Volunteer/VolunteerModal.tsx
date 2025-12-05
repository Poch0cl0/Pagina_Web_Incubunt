"use client";
import { useState, useEffect } from "react";
import { sendVolunteerData } from "@/services/volunteerService";

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AREAS_INTERES = ['PMO', 'MKT', 'LOGISTICA', 'SIGE', 'GTH', 'TI'] as const;

export const VolunteerModal = ({ isOpen, onClose }: VolunteerModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Resetear showSuccess cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setShowSuccess(false);
      setError(null);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const areaInteres = formData.get('areaInteres') as typeof AREAS_INTERES[number];

    // Validar área de interés
    if (!AREAS_INTERES.includes(areaInteres)) {
      setError('Por favor selecciona un área de interés válida');
      setIsSubmitting(false);
      return;
    }

    try {
      await sendVolunteerData({
        nombres: formData.get('nombres') as string,
        apellidos: formData.get('apellidos') as string,
        email: formData.get('email') as string,
        celular: formData.get('celular') as string,
        universidad: formData.get('universidad') as string,
        ciclo: formData.get('ciclo') as string,
        carrera: formData.get('carrera') as string,
        areaInteres: areaInteres,
      });

      // Mostrar mensaje de éxito bonito
      setShowSuccess(true);
      
      // Cerrar automáticamente después de 3 segundos
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);

    } catch (err) {
      console.error('Error:', err);
      setError('Hubo un error al enviar tu solicitud. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // Mostrar mensaje de éxito
  if (showSuccess) {
    return (
      <div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4 transition-opacity duration-300 ease-in-out"
        onClick={() => {
          setShowSuccess(false);
          onClose();
        }}
      >
        <div
          className="relative w-full max-w-md transform transition-all duration-500 ease-out animate-[scaleIn_0.3s_ease-out]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative bg-gradient-to-b from-[#0063B5]/95 to-[#002B4F]/95 text-white rounded-[25px] shadow-2xl border border-white/20 overflow-hidden p-8 md:p-12">
            {/* Fondo decorativo */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "url('/images/recurso1.png')",
                backgroundPosition: "50%",
                backgroundSize: "cover",
              }}
            />
            
            {/* Contenido de éxito */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Ícono de corazón/manos animado */}
              <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#f7bb52] to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30 animate-[bounceIn_0.5s_ease-out]">
                <svg 
                  className="w-10 h-10 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>

              {/* Título */}
              <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-[#f7bb52] bg-clip-text text-transparent">
                ¡Bienvenido al equipo!
              </h2>

              {/* Descripción */}
              <p className="text-white/80 text-sm md:text-base mb-2 max-w-xs">
                Gracias por querer ser parte de INCUBUNT.
              </p>
              <p className="text-white/60 text-xs md:text-sm mb-6 max-w-xs">
                Revisaremos tu solicitud y nos pondremos en contacto contigo muy pronto.
              </p>

              {/* Barra de progreso animada */}
              <div className="w-full max-w-xs h-1 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#f7bb52] to-orange-400 rounded-full animate-[progressBar_3s_linear]"
                  style={{ transformOrigin: 'left' }}
                />
              </div>
              
              <p className="text-white/50 text-xs mt-3">
                Cerrando automáticamente...
              </p>

              {/* Botón para cerrar manualmente */}
              <button
                onClick={() => {
                  setShowSuccess(false);
                  onClose();
                }}
                className="mt-6 px-8 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                Cerrar ahora
              </button>
            </div>

            {/* Partículas decorativas */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-[#f7bb52] rounded-full animate-ping" />
            <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '150ms' }} />
            <div className="absolute bottom-6 left-8 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '300ms' }} />
            <div className="absolute bottom-10 right-6 w-1.5 h-1.5 bg-[#f7bb52] rounded-full animate-ping" style={{ animationDelay: '450ms' }} />
          </div>
        </div>
      </div>
    );
  }

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
            className="absolute top-4 right-4 md:top-8 md:right-8 lg:top-10 lg:right-10 p-2 z-20 text-white hover:text-gray-300 hover:scale-110 transition-all"
            aria-label="Cerrar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <path
                d="M7.73317 22.9582L6.0415 21.2665L12.8082 14.4998L6.0415 7.73317L7.73317 6.0415L14.4998 12.8082L21.2665 6.0415L22.9582 7.73317L16.1915 14.4998L22.9582 21.2665L21.2665 22.9582L14.4998 16.1915L7.73317 22.9582Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold">Sé voluntario</h2>
          <p className="text-base md:text-lg lg:text-xl text-white opacity-75 mb-8 italic">
            "Somos estudiantes apasionados. Buscamos más miembros para impulsar proyectos, aprender y crecer juntos."
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-md text-red-200 animate-[shake_0.5s_ease-in-out]">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 'nombres', label: 'Nombres', type: 'text', placeholder: 'Nombres', required: true },
                { id: 'apellidos', label: 'Apellidos', type: 'text', placeholder: 'Apellidos', required: true },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'tu@correo.com', required: true },
                { id: 'celular', label: 'Celular', type: 'tel', placeholder: '+51 987 654 321' },
                { id: 'universidad', label: 'Universidad', type: 'text', placeholder: 'Universidad' },
                { id: 'ciclo', label: 'Ciclo', type: 'text', placeholder: 'VIII' },
                { id: 'carrera', label: 'Carrera', type: 'text', placeholder: 'Ingeniería Industrial' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="text-white block mb-2">
                    {field.label} {field.required && <span className="text-[#f7bb52]">*</span>}
                  </label>
                  <input
                    type={field.type}
                    name={field.id}
                    id={field.id}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full p-3 bg-white/10 text-white border border-white/30 rounded-md placeholder:text-white/50 focus:outline-none focus:border-[#f7bb52] focus:ring-1 focus:ring-[#f7bb52] transition-all"
                  />
                </div>
              ))}
              
              {/* Campo Área de interés como select */}
              <div>
                <label htmlFor="areaInteres" className="text-white block mb-2">
                  Área de interés <span className="text-[#f7bb52]">*</span>
                </label>
                <select
                  name="areaInteres"
                  id="areaInteres"
                  required
                  className="w-full p-3 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:border-[#f7bb52] focus:ring-1 focus:ring-[#f7bb52] transition-all"
                >
                  <option value="" className="bg-[#002B4F]">Selecciona un área</option>
                  {AREAS_INTERES.map((area) => (
                    <option key={area} value={area} className="bg-[#002B4F]">{area}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-3 px-12 bg-white text-[#002B4F] font-bold text-base rounded-full border-2 border-transparent hover:bg-[#f7bb52] hover:text-white transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#002B4F] transform hover:scale-105 active:scale-95"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Enviando...
                  </span>
                ) : 'Enviar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
