export async function sendSponsorData(data: any) {
    const response = await fetch("http://localhost:4000/api/promocion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Error en el envío");
    }

    return response.json();
}


