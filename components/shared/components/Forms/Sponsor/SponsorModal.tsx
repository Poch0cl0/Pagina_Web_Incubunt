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
  console.log("SponsorModal se está renderizando. isOpen:", isOpen);
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
      // Prepara los datos antes de enviar
      const cleanPhone = formData.celular.replace(/\D/g, "");
      const payload = {
        Nombres: formData.nombres.trim(),
        Apellidos: formData.apellidos.trim(),
        Email: formData.email.trim().toLowerCase(),
        Tipo_promocion: sponsorType,
        Empresa: formData.empresa.trim(),
        Celular: cleanPhone,
        Mensaje: formData.mensaje.trim(),
      };

      // Envía usando el servicio
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

      alert("Formulario enviado exitosamente");
      onClose();
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

  if (!isOpen) return null;

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
              onClick={() => {
                console.log("onClose del botón de cerrar ejecutado");
                onClose();
              }}
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
                  className="bg-white text-[#002B4F] px-20 py-3 rounded-[15px] text-sm font-medium hover:bg-[#f7bb52] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}
