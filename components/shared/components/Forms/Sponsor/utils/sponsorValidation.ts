import type { FormErrors } from "../interfaces/SponsorModalProps";

export const validateSponsorForm = (formData: any): FormErrors => {
    const newErrors: FormErrors = {};

    // Required field validations
    if (!formData.empresa.trim()) {
        newErrors.empresa = "El campo empresa es requerido";
    }

    if (!formData.nombres.trim()) {
        newErrors.nombres = "El campo nombres es requerido";
    }

    if (!formData.apellidos.trim()) {
        newErrors.apellidos = "El campo apellidos es requerido";
    }

    if (!formData.email.trim()) {
        newErrors.email = "El campo email es requerido";
    } else {
        // Email format validation - more comprehensive regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Por favor ingresa un email válido";
        }
    }

    // Celular is required and must be validated
    if (!formData.celular.trim()) {
        newErrors.celular = "El campo celular es requerido";
    } else {
        // Remove all non-digit characters
        const cleanPhone = formData.celular.replace(/\D/g, "");

        // Accept formats: 9 digits starting with 9
        if (cleanPhone.length !== 9 || !cleanPhone.startsWith("9")) {
            newErrors.celular =
                "Ingresa un número válido de Perú (debe comenzar con 9 y tener 9 dígitos)";
        }
    }

    // Mensaje is required
    if (!formData.mensaje.trim()) {
        newErrors.mensaje = "El campo mensaje es requerido";
    }

    return newErrors;
};