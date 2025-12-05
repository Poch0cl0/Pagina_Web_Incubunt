"use client";
import { useState } from "react";
import { RadioButton } from "../components/RadioButton";
import { FormInput } from "../components/FormInput";
import { FormTextarea } from "../components/FormTextarea";
import { useEffect, useRef } from "react";
import type { SponsorModalProps, FormErrors } from "./interfaces/SponsorModalProps";
import { validateSponsorForm } from "./utils/sponsorValidation";
import { sendSponsorData } from "@/services/sponsorService";
import { handleFormInputChange } from "./utils/handleInputChange";

export function SponsorModal({ isOpen, onClose }: SponsorModalProps) {
  const [sponsorType, setSponsorType] = useState("Auspiciador");
  const [formData, setFormData] = useState({
    empresa: "",
    nombres: "",
    apellidos: "",
    email: "",
    celular: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = validateSponsorForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const cleanPhone = formData.celular.replace(/\D/g, "");
      const payload = {
        Nombres: formData.nombres.trim(),
        Apellidos: formData.apellidos.trim(),
        Email: formData.email.trim().toLowerCase(),
        Tipo_promocion: sponsorType as "Auspiciador" | "Sponsor",
        Empresa: formData.empresa.trim(),
        Celular: cleanPhone,
        Mensaje: formData.mensaje.trim(),
      };

      const data = await sendSponsorData(payload);
      console.log("Respuesta del servidor:", data);

      // Limpia el formulario
      setFormData({
        empresa: "",
        nombres: "",
        apellidos: "",
        email: "",
        celular: "",
        mensaje: "",
      });
      setSponsorType("Auspiciador");
      setErrors({});

      // Mostrar mensaje de éxito bonito
      setShowSuccess(true);

      // Cerrar automáticamente después de 3 segundos
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);

    } catch (error) {
      console.error("Error al enviar:", error);
      setErrors((prev) => ({
        ...prev,
        mensaje: "Error al enviar el formulario. Por favor, intenta nuevamente.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    handleFormInputChange(field, value, formData, setFormData, errors, setErrors);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  // Resetear showSuccess cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setShowSuccess(false);
    }
  }, [isOpen]);

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
              {/* Ícono de check animado */}
              <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 animate-[bounceIn_0.5s_ease-out]">
                <svg 
                  className="w-10 h-10 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>

              {/* Título */}
              <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                ¡Mensaje enviado!
              </h2>

              {/* Descripción */}
              <p className="text-white/80 text-sm md:text-base mb-2 max-w-xs">
                Gracias por tu interés en ser parte de INCUBUNT.
              </p>
              <p className="text-white/60 text-xs md:text-sm mb-6 max-w-xs">
                Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo muy pronto.
              </p>

              {/* Barra de progreso animada */}
              <div className="w-full max-w-xs h-1 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-[#f7bb52] rounded-full animate-[progressBar_3s_linear]"
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
            <div className="absolute top-4 left-4 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-[#f7bb52] rounded-full animate-ping" style={{ animationDelay: '150ms' }} />
            <div className="absolute bottom-6 left-8 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '300ms' }} />
            <div className="absolute bottom-10 right-6 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping" style={{ animationDelay: '450ms' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4 transition-opacity duration-300 ease-in-out"
      onClick={handleBackdropClick}
      onKeyDown={handleEscapeKey}
      tabIndex={0}
    >
      <div
        className="relative w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl max-h-[90vh] flex-shrink-0 transform transition-all duration-300 ease-in-out scale-100 opacity-100"
        style={{
          boxShadow: "0 30px 20px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Contenedor con bordes redondeados y control de overflow */}
        <div className="relative bg-gradient-to-b from-[#0063B5]/90 to-[#002B4F]/90 text-white rounded-[25px] shadow-2xl border border-white/20 overflow-hidden">
          {/* Fondo difuminado */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/recurso1.png')",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              opacity: 0.1,
              zIndex: 1,
              backgroundRepeat: "no-repeat",
              height: "100%",
            }}
          />

          {/* Contenido con scroll interno */}
          <div className="relative z-10 max-h-[100vh] overflow-y-auto p-4 md:p-8 lg:p-12 xl:p-[72px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Botón de cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-8 md:right-8 lg:top-10 lg:right-10 z-10 hover:scale-110 transition-transform cursor-pointer"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <path
                  d="M7.73317 22.9582L6.0415 21.2665L12.8082 14.4998L6.0415 7.73317L7.73317 6.0415L14.4998 12.8082L21.2665 6.0415L22.9582 7.73317L16.1915 14.4998L22.9582 21.2665L21.2665 22.9582L14.4998 16.1915L7.73317 22.9582Z"
                  fill="white"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-8 text-left">
              <h1 className="text-white text-xl md:text-2xl font-bold mb-2">
                Ponte en contacto con nosotros
              </h1>
              <p className="text-white/60 text-xs md:text-sm italic">
                "Sea parte de Incubunt y conecte su marca con futuros profesionales".
              </p>
            </div>

            {/* Radio buttons */}
            <div className="flex gap-6 mb-8">
              <RadioButton
                label="Auspiciador"
                value="Auspiciador"
                selectedValue={sponsorType}
                onChange={setSponsorType}
              />
              <RadioButton
                label="Sponsor"
                value="Sponsor"
                selectedValue={sponsorType}
                onChange={setSponsorType}
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company section */}
              <div className="text-left">
                <h3 className="text-white text-sm font-medium mb-3">Empresa</h3>

                <FormInput
                  label=""
                  placeholder="Empresa"
                  value={formData.empresa}
                  onChange={(value) => handleInputChange("empresa", value)}
                  className="w-full md:max-w-[392px]"
                  error={errors.empresa}
                  required
                />

                <p className="text-white/60 text-xs italic mt-2">
                  Ingresar los datos correspondientes del representante.
                </p>
              </div>

              {/* Personal info section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="block text-white text-sm font-medium mb-3">
                    Nombres *
                  </label>
                  <FormInput
                    label=""
                    placeholder="Nombres"
                    value={formData.nombres}
                    onChange={(value) => handleInputChange("nombres", value)}
                    error={errors.nombres}
                    required
                  />
                </div>

                <div className="text-left">
                  <label className="block text-white text-sm font-medium mb-3">
                    Apellidos *
                  </label>
                  <FormInput
                    label=""
                    placeholder="Apellidos"
                    value={formData.apellidos}
                    onChange={(value) => handleInputChange("apellidos", value)}
                    error={errors.apellidos}
                    required
                  />
                </div>
              </div>

              {/* Contact info section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="block text-white text-sm font-medium mb-3">
                    Email *
                  </label>
                  <FormInput
                    label=""
                    placeholder="tu@empresa.com"
                    type="email"
                    value={formData.email}
                    onChange={(value) => handleInputChange("email", value)}
                    error={errors.email}
                    required
                  />
                </div>

                <div className="text-left">
                  <label className="block text-white text-sm font-medium mb-3">
                    Celular *
                  </label>
                  <FormInput
                    label=""
                    placeholder="900000000"
                    type="tel"
                    value={formData.celular}
                    onChange={(value) => handleInputChange("celular", value)}
                    error={errors.celular}
                    required
                  />
                  <p className="text-white/60 text-xs mt-1">
                    Formato: 9 dígitos comenzando con 9
                  </p>
                </div>
              </div>

              {/* Message section */}
              <div className="text-left">
                <label className="block text-white text-sm font-medium mb-3">
                  Mensaje *
                </label>
                <FormTextarea
                  label=""
                  placeholder="Déjanos un mensaje"
                  value={formData.mensaje}
                  onChange={(value) => handleInputChange("mensaje", value)}
                  error={errors.mensaje}
                  required
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-[#002B4F] px-20 py-3 rounded-[15px] text-sm font-medium hover:bg-[#f7bb52] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transform hover:scale-105 active:scale-95"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Enviando...
                    </span>
                  ) : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
