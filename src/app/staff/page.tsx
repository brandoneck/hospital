'use client';
import { useEffect, useState } from 'react';

export default function staffPage() {
  const [doctores, setDoctores] = useState([]);

  useEffect(() => {
    fetch('/api/doctores')
      .then(res => res.json())
      .then(setDoctores);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Nuestros Doctores</h1>
      <ul className="space-y-2">
        {doctores.map(doc => (
          <li key={doc.id} className="border p-3 rounded-lg">
            <strong>{doc.nombre}</strong> — {doc.especialidad}
          </li>
        ))}
      </ul>
    </div>
  );
}