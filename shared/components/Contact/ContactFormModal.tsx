"use client";

import { useState } from "react";

interface Props {
    type: "promocion" | "voluntario";
    onClose: () => void;
}

function ContactFormModal({ type, onClose }: Props) {
    // Campos dinámicos por tipo
    const initialData =
        type === "promocion"
            ? {
                Nombres: "",
                Apellidos: "",
                Email: "",
                Tipo_promocion: "",
                Empresa: "",
                Mensaje: "",
            }
            : {
                Nombres: "",
                Apellidos: "",
                Email: "",
                Celular: "",
                Universidad: "",
                Ciclo: "",
                Carrera: "",
                Area: "",
            };

    const [formData, setFormData] = useState(initialData);
    const [message, setMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const endpoint =
                type === "promocion"
                    ? "http://localhost:4000/api/promocion"
                    : "http://localhost:4000/api/voluntario";

            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log("Respuesta backend:", data);

            setMessage(data.message || "Formulario enviado con éxito ✅");
        } catch (error) {
            console.error("Error al enviar:", error);
            setMessage("Error al enviar el formulario");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">
                    {type === "promocion"
                        ? "Formulario de Promoción"
                        : "Formulario de Voluntario"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Campos comunes */}
                    <label>Nombres:</label>
                    <input
                        type="text"
                        name="Nombres"
                        value={formData.Nombres}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                    <label>Apellidos:</label>
                    <input
                        type="text"
                        name="Apellidos"
                        value={formData.Apellidos}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        name="Email"
                        placeholder="example@gmail.com"
                        value={formData.Email}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />

                    {/* Campos para promoción */}
                    {type === "promocion" && (
                        <>
                            <label>Selecciona su asunto de promoción:</label>
                            <select
                                name="Tipo_promocion"
                                value={formData.Tipo_promocion}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Seleccione...</option>
                                <option value="Auspiciador">Auspiciador</option>
                                <option value="Sponsor">Sponsor</option>
                            </select>

                            <label>Empresa:</label>
                            <input
                                name="Empresa"
                                type="text"
                                value={formData.Empresa}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />

                            <label>Mensaje para INCUBUNT:</label>
                            <textarea
                                name="Mensaje"
                                placeholder="Déjanos un mensaje para INCUBUNT"
                                value={formData.Mensaje}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </>
                    )}

                    {/* Campos para voluntario */}
                    {type === "voluntario" && (
                        <>
                            <label>Celular:</label>
                            <input
                                name="Celular"
                                type="number"
                                placeholder="+51 987 654 321"
                                value={formData.Celular}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />

                            <label>Universidad:</label>
                            <input
                                name="Universidad"
                                type="text"
                                placeholder="Universidad"
                                value={formData.Universidad}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />

                            <label>Ciclo:</label>
                            <input
                                name="Ciclo"
                                type="text"
                                placeholder="VII"
                                value={formData.Ciclo}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />

                            <label>Carrera:</label>
                            <input
                                name="Carrera"
                                type="text"
                                placeholder="Ingeniería industrial"
                                value={formData.Carrera}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />

                            <label>Area de preferencia:</label>
                            <select
                                name="Area"
                                value={formData.Area}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Seleccione...</option>
                                <option value="PMO">PMO</option>
                                <option value="MKT">MKT</option>
                                <option value="LOGISTICA">LOGISTICA</option>
                                <option value="SIGE">SIGE</option>
                                <option value="GTH">GTH</option>
                                <option value="TI">TI</option>
                            </select>
                        </>
                    )}

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                    >
                        Enviar
                    </button>
                </form>

                {message && <p className="mt-3 text-sm text-green-700">{message}</p>}

                <button
                    onClick={onClose}
                    className="mt-4 text-gray-500 hover:underline"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}

export default ContactFormModal;
