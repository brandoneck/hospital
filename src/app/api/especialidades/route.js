// app/api/doctores/route.js

export async function GET() {
    // Simulación de base de datos o datos estáticos
    const doctores = [
        { id: 1, nombre: 'Dermatología', description: 'Especialistas en el cuidado de la piel, cabello y uñas. Ofrecen diagnóstico y tratamiento de enfermedades cutáneas, manejo de alergias dermatológicas y procedimientos estéticos para mejorar la salud y apariencia de la piel.' },
        { id: 2, nombre: 'Cardiología', description: 'Expertos en el diagnóstico, prevención y tratamiento de enfermedades del corazón y del sistema circulatorio. Ayudan a mantener la salud cardiovascular mediante chequeos, estudios especializados y seguimiento de condiciones crónicas.' },
        { id: 3, nombre: 'Pediatría', description: 'Médicos dedicados al cuidado integral de niños y adolescentes. Brindan atención preventiva, seguimiento del crecimiento y desarrollo, vacunación y tratamiento de enfermedades comunes de la infancia.' },
    ];

    // Devuelve los datos como JSON
    return Response.json(doctores);
}