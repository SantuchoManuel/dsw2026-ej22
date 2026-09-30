document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('specialityForm');
    const errores = document.getElementById('errores');
    const expandButton = document.getElementById('expand');
    const sidebar = document.getElementById('sidebar');
    const logoutButton = document.getElementById('logout');

    if (expandButton && sidebar) {
        expandButton.addEventListener('click', function () {
            if (window.innerWidth < 600) {
                sidebar.classList.toggle('expanded');
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

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
