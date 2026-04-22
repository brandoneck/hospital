// src/lib/doctores.js

export async function getDoctores() {
  const res = await fetch("/api/doctores");

  if (!res.ok) {
    throw new Error("Error fetching doctores");
  }

  const data = await res.json();

  // 👇 aquí puedes transformar datos
  return data.map((doc) => ({
    ...doc,
    fullName: `${doc.nombre} ${doc.apellido}`,
  }));
}