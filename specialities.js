let specialities = [];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Intentar obtener las especialidades del LocalStorage
    const storedSpecialities = localStorage.getItem('specialties');

    if (storedSpecialities) {
        // Si ya existen, las cargamos en el array y renderizamos
        specialities = JSON.parse(storedSpecialities);
        renderTable(specialities);
    } else {
        // Si no existen (es la primera vez), cargamos del JSON inicial
        fetch('specialties.json')
            .then(Response => Response.json())
            .then(Data => {
                specialities = Data;
                // Guardamos los datos iniciales en LocalStorage
                localStorage.setItem('specialties', JSON.stringify(specialities));
                renderTable(specialities);
            })
            .catch(error => console.error('Error cargando specialties.json:', error));
    }

    // 2. Configurar la búsqueda (filtro local sin recargar datos)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nameToSearch = document.getElementById('name').value.toLowerCase();
            
            const filteredSpecialities = specialities.filter(speciality => {
                return speciality.name.toLowerCase().includes(nameToSearch);
            });

            renderTable(filteredSpecialities);
        });
    }

    // Configurar menú de sidebar (si está en el dashboard)
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

// Función centralizada para renderizar la tabla
function renderTable(data) {
    const tbody = document.getElementById('table-specialities');
    if (!tbody) return;
    
    tbody.innerHTML = ''; // Limpiar la tabla antes de agregar

    data.forEach(speciality => {
        const tr = document.createElement('tr');
        
        const tdName = document.createElement('td');
        tdName.innerText = speciality.name;
        
        const tdDesc = document.createElement('td');
        tdDesc.innerText = speciality.description;
        
        // Columna de Estado
        const tdStatus = document.createElement('td');
        tdStatus.innerText = speciality.status === 'inactive' ? 'Inactivo' : 'Activo';
        
        // Columna de Acciones (Botones de ejemplo)
        const tdActions = document.createElement('td');
        tdActions.innerHTML = `<button style="background:none;border:none;color:blue;cursor:pointer;">Ver/Editar</button>`;
        
        tr.appendChild(tdName);
        tr.appendChild(tdDesc);
        tr.appendChild(tdStatus);
        tr.appendChild(tdActions);
        
        tbody.appendChild(tr);
    });

    // Actualizar el pie de página de la tabla
    const pageInfo = document.getElementById('page-info');
    if (pageInfo) {
        pageInfo.innerText = `Mostrando ${data.length} resultados`;
    }
}