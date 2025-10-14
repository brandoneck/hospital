// app/api/doctores/route.js

export async function GET() {
  // Simulación de base de datos o datos estáticos
  const doctores = [
    { id: 1, nombre: 'Dra. López', especialidad: 'Dermatóloga' },
    { id: 2, nombre: 'Dr. Hernández', especialidad: 'Cardiólogo' },
    { id: 3, nombre: 'Dra. Pérez', especialidad: 'Pediatra' },
  ];

  // Devuelve los datos como JSON
  return Response.json(doctores);
}