let empForm = document.getElementById('empForm');
let empTbl = document.querySelector('#empTbl tbody');
let employees = [];
let editIndex = -1;


empForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dpt = document.getElementById('dpt').value;
    const gender = document.querySelector('input[type="radio"]:checked').value;

    let emp = { name, email, dpt, gender }
    console.log(editIndex);

    if (editIndex == -1) {
        employees.push(emp);
        console.log("new data");

    } else {
        employees[editIndex] = emp;
        editIndex = -1;
    }

    console.log(employees);
    renderEmpData();
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('dpt').value = ''
    document.querySelector('input[type="radio"]:checked').checked = false;
})

let renderEmpData = () => {
    empTbl.innerHTML = '';

    employees.map((value, index) => {
        let { name, email, dpt, gender } = value;
        let empRow = document.createElement('tr');
        empRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${dpt}</td>
        <td>${gender}</td>
        <td>
            <button onclick="deleteData(${index})">Delete</button>
            <button onclick="editData(${index})">Edit</button>
        </td>
       `
        empTbl.appendChild(empRow);
    })
    console.log(empTbl);
}


function deleteData(index) {
    employees.splice(index, 1);
    console.log(employees);
    renderEmpData();
}

function editData(index) {
    let emp = employees[index];
    console.log(emp);

    document.getElementById('name').value = emp.name;
    document.getElementById('email').value = emp.email;
    document.getElementById('dpt').value = emp.dpt;
    if (emp.gender == 'male') {
        document.querySelector('input[value="male"]').checked = true;
    } else {
        document.querySelector('input[value="female"]').checked = true;
    }
    editIndex = index;
}