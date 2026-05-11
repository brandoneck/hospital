import { getDoctores } from "@/lib/doctores";
import { Container } from "@mui/material";

type Doctor = {
  id: number;
  nombre: string;
  especialidad: string;
};

export default async function StaffPage() {
  const data: Doctor[] = await getDoctores();

  return (
    <Container maxWidth="lg">
      <h1 className="text-2xl font-bold mb-4">Nuestros Doctores</h1>
      <ul className="space-y-2">
        {data.map((doc) => (
          <li key={doc.id} className="border p-3 rounded-lg">
            <strong>{doc.nombre}</strong> — {doc.especialidad}
          </li>
        ))}
      </ul>
    </Container>
  );
}