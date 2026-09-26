document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('specialityForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que la página recargue

            
            const name = document.getElementById('name').value.trim();
            const description = document.getElementById('description').value.trim();
            const status = document.getElementById('status').value;

            if (!name || !description) {
                alert("Por favor complete todos los campos requeridos.");
                return;
            }

            
            let specialities = [];
            const storedSpecialities = localStorage.getItem('specialties');
            if (storedSpecialities) {
                specialities = JSON.parse(storedSpecialities);
            }

            
            const newSpeciality = {
                id: 'GUID-' + (new Date().getTime()), // ID simple basado en timestamp
                name: name,
                description: description,
                status: status
            };

            
            specialities.push(newSpeciality);
            localStorage.setItem('specialties', JSON.stringify(specialities));

            alert("Especialidad creada con éxito.");

            
            window.location.href = 'specialities.html';
        });
    }


    const logoutButton = document.getElementById('logout');
    if(logoutButton){
        logoutButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    const expandButton = document.getElementById('expand');
    const navexpanded = document.getElementById('sidebar');
    if(expandButton && navexpanded){
        expandButton.addEventListener('click', () => {
            if (window.innerWidth < 600) {
                navexpanded.classList.toggle('expanded');
            }
        });
    }
});