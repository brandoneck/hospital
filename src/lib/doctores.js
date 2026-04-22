// src/lib/doctores.js

export async function getDoctores() {
  return [
    { id: 1, nombre: 'Dra. López', especialidad: 'Dermatóloga' },
    { id: 2, nombre: 'Dr. Hernández', especialidad: 'Cardiólogo' },
    { id: 3, nombre: 'Dra. Pérez', especialidad: 'Pediatra' },
  ];
}