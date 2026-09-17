let specialities = []

fetch('specialties.json')
.then(Response => Response.json())
.then(Data => {
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