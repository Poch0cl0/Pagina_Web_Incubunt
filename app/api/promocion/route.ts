import { NextResponse } from "next/server";
import { guardarEnFirebase, obtenerDeFirebase } from "@/lib/firebase";
import { enviarCorreo } from "@/lib/mailer";

// POST /api/promocion
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Datos recibidos (Promocion):", body);

    await guardarEnFirebase(body, "promocion");

    await enviarCorreo(
      body.Email || body.email,
      "Interés por promocionar Incubunt",
      `<h2>Hola ${body.Nombres}!</h2>
       <p>Gracias por mostrar tu interés en la promoción de Incubunt. Nos comunicaremos contigo pronto.</p>`
    );

    return NextResponse.json({ success: true, message: "check" });
  } catch (error) {
    console.error("Error en promocion:", error);
    return NextResponse.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// GET /api/promocion
export async function GET() {
  try {
    const data = await obtenerDeFirebase("promocion");
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error al obtener promociones:", error);
    return NextResponse.json(
      { error: "Error al obtener promociones" },
      { status: 500 }
    );
  }
}