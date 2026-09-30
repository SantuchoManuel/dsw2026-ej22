const CLAVE_STORAGE = 'specialties';


function getSpecialties() {
    const data = localStorage.getItem(CLAVE_STORAGE);
    return data ? JSON.parse(data) : [];
}


function saveSpecialties(array) {
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(array));
}


function initSpecialties() {
    const data = localStorage.getItem(CLAVE_STORAGE);
    if (!data || JSON.parse(data).length === 0) {
        const datosIniciales = [
            {
                id: crypto.randomUUID(),
                name: "Cardiologia",
                description: "Estudio y tratamiento de trastornos del corazon y del sistema circulatorio.",
                status: "active"
            },
            {
                id: crypto.randomUUID(),
                name: "Neurologia",
                description: "Diagnostico y tratamiento de todas las categorías de afecciones cerebrales.",
                status: "active"
            },
            {
                id: crypto.randomUUID(),
                name: "Dermatologia",
                description: "Atencion integral de enfermedades de la piel, uñas y cabello.",
                status: "inactive"
            },
            {
                id: crypto.randomUUID(),
                name: "Pediatria",
                description: "Cuidado medico de lactantes, niños y adolescentes.",
                status: "active"
            }
        ];
        saveSpecialties(datosIniciales);
    }
}

function addSpecialty(name, description, status) {
    const specialties = getSpecialties();
    const nueva = {
        id: crypto.randomUUID(),
        name: name,
        description: description,
        status: status
    };
    specialties.push(nueva);
    saveSpecialties(specialties);
    return nueva;
}


initSpecialties();
