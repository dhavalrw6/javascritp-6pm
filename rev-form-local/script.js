let empForm = document.getElementById('empForm');
let empTbl = document.querySelector('#empTbl tbody');
let employees = [];


empForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dpt = document.getElementById('dpt').value;
    const gender = document.querySelector('input[type="radio"]:checked').value;

    let emp = { name, email, dpt, gender }

    employees.push(emp);

    console.log(employees);
    renderEmpData();
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
       `
        empTbl.appendChild(empRow);
    })
    console.log(empTbl);
}