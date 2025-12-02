import { NextResponse } from "next/server";
import { guardarEnFirebase, obtenerDeFirebase } from "@/lib/firebase";
import { enviarCorreo } from "@/lib/mailer";

// POST /api/voluntario
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Datos recibidos (Voluntario):", body);

    await guardarEnFirebase(body, "voluntario");

    await enviarCorreo(
      body.Email || body.email,
      "Interés por formar parte de Incubunt",
      `<h2>Hola ${body.Nombres}!</h2>
       <p>Gracias por mostrar tu interés en el voluntariado de Incubunt. Nos comunicaremos contigo pronto.</p>`
    );

    return NextResponse.json({ success: true, message: "check" });
  } catch (error) {
    console.error("Error en voluntario:", error);
    return NextResponse.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// GET /api/voluntario
export async function GET() {
  try {
    const data = await obtenerDeFirebase("voluntario");
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error al obtener voluntarios:", error);
    return NextResponse.json(
      { error: "Error al obtener voluntarios" },
      { status: 500 }
    );
  }
}