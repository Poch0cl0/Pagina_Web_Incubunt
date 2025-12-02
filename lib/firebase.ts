// lib/firebase.ts
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import "server-only"; // Evita que se importe en el cliente

// Parseo seguro de FIREBASE_KEY_JSON
function getServiceAccount() {
  try {
    return JSON.parse(process.env.FIREBASE_KEY_JSON || "");
  } catch {
    console.warn("⚠️ No se pudo parsear FIREBASE_KEY_JSON.");
    return null;
  }
}

if (!getApps().length) {
  const serviceAccount = getServiceAccount();

  if (!serviceAccount) {
    throw new Error(
      "❌ FIREBASE_KEY_JSON no existe o no es válido. Revisa tus environment variables."
    );
  }

  initializeApp({
    credential: cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DB_URL,
  });
}

const db = getDatabase();

// ----------------------
// Funciones públicas
// ----------------------

export async function guardarEnFirebase(nuevaFila: any, tableName: string) {
  if (!nuevaFila || typeof nuevaFila !== "object") {
    console.log("⚠️ No hay datos válidos para insertar");
    return;
  }

  try {
    await db.ref(tableName).push({
      ...nuevaFila,
      fecha: new Date().toISOString(),
    });

    console.log(`✔️ Fila guardada en ${tableName}`);
  } catch (error: any) {
    console.error("Error al guardar en Firebase:", error);
    throw error;
  }
}

export async function obtenerDeFirebase(tableName: string) {
  try {
    const snapshot = await db.ref(tableName).once("value");
    const data = snapshot.val();
    return data ? Object.values(data) : [];
  } catch (error: any) {
    console.error("Error al obtener de Firebase:", error.message);
    throw error;
  }
}
