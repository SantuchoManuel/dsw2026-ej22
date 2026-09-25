let specialities = []

fetch('specialties.json')
.then(Response => Response.json())
.then(Data => {
    specialities = Data
    const tbody = document.getElementById('table-specialities');
    Data.forEach( speciality => {
        const tr = document.createElement ('tr');
        const td1 = document.createElement ('td');
        const td2 = document.createElement ('td');

        td1.innerText = speciality.name
        td2.innerText = speciality.description
        
        tr.appendChild(td1)
        tr.appendChild(td2)
        tbody.appendChild(tr)
    });
})
.catch(error => console.error(error))

/*Modificaion para ordenar el boton de busqueda en tabla*/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;

       /* La tabla se filtra a nivel de JS, no debe cargar nuevamente el archivo json.*/
        const filteredSpecialities = specialities.filter(speciality => {
            return speciality.name
            .toLowerCase()
            .includes(name.toLowerCase());
        });

        const tbody = document.getElementById('table-specialities');
        tbody.innerHTML = '';

        filteredSpecialities.forEach(speciality => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            td1.innerText = speciality.name;
            td2.innerText = speciality.description;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody.appendChild(tr);
        });
    });
});


//
      /* 
        // Aquí puedes agregar la lógica para validar el usuario y la contraseña
        if(name ===) {
            // Redirigir a la página de productos o dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
            */