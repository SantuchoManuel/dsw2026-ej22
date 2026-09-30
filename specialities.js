document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.getElementById('table-specialities');
    const form = document.querySelector('form');
    const searchInput = document.getElementById('name');

    function renderTable(lista) {
        
        tbody.innerHTML = '';

        lista.forEach(speciality => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.innerText = speciality.name;
            const td2 = document.createElement('td');
            td2.innerText = speciality.description;
            const td3 = document.createElement('td');
            td3.innerText = speciality.status === 'inactive' ? 'Inactivo' : 'Activo';
            const td4 = document.createElement('td');
            const btnAccion = document.createElement('button');
            btnAccion.innerText = 'Editar';
            td4.appendChild(btnAccion);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbody.appendChild(tr);
        });
    }

    let specialities = typeof getSpecialties === 'function' 
        ? getSpecialties() 
        : JSON.parse(localStorage.getItem('specialties')) || [];

    renderTable(specialities);

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const busqueda = searchInput.value.toLowerCase().trim();
        const datosActuales = typeof getSpecialties === 'function'
            ? getSpecialties()
            : JSON.parse(localStorage.getItem('specialties')) || [];
        const filtradas = datosActuales.filter(speciality => {
            return speciality.name.toLowerCase().includes(busqueda);
        });
        renderTable(filtradas);
    });
});

