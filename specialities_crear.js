document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('specialityForm');
    const errores = document.getElementById('errores');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita recargar la pagina

        const name = document.getElementById('name').value.trim();
        const description = document.getElementById('description').value.trim();
        const status = document.getElementById('status').value;

        let mensajes = [];

        if (!name) {
            mensajes.push("El Nombre es obligatorio.");
        } else if (name.length > 15) {
            mensajes.push("El Nombre no debe superar los 15 caracteres.");
        }

        if (!description) {
            mensajes.push("La Descripción es obligatoria.");
        } else if (description.length > 100) {
            mensajes.push("La Descripción no debe superar los 100 caracteres.");
        }

        if (mensajes.length > 0) {
            errores.innerText = mensajes.join(" | ");
        } else {
            errores.innerText = "";

            const nuevoObjeto = addSpecialty(name, description, status);
            console.log("Especialidad creada:", nuevoObjeto);
            alert("Especialidad guardada con éxito.");
            window.location.href = 'specialities.html';
        }
    });
});
