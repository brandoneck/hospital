"use client";
import { useEffect, useState } from "react";
import { getDoctores } from "@/lib/doctores";

type Doctor = {
  id: number;
  nombre: string;
  especialidad: string;
};

export default function StaffPage() {
  const [data, setData] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getDoctores()
      .then(setData)
      .catch(() => setError("Error al cargar doctores"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Nuestros Doctores</h1>
      <ul className="space-y-2">
        {data.map((doc) => (
          <li key={doc.id} className="border p-3 rounded-lg">
            <strong>{doc.nombre}</strong> — {doc.especialidad}
          </li>
        ))}
      </ul>
    </div>
  );
}