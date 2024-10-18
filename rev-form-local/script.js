let empForm = document.getElementById('empForm');
let empTbl = document.querySelector('#empTbl tbody');
let employees = JSON.parse(localStorage.getItem('userData')) || [];
let cart = JSON.parse(localStorage.getItem('cartData')) || [];
let editIndex = -1;

empForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dpt = document.getElementById('dpt').value;


    let emp = { name, email, dpt }
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
    localStorage.setItem('userData', JSON.stringify(employees));
})

let renderEmpData = () => {
    empTbl.innerHTML = '';

    employees.map((value, index) => {
        let { name, email, dpt } = value;
        let empRow = document.createElement('tr');
        empRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${dpt}</td>
        <td>
            <button onclick="deleteData(${index})">Delete</button>
            <button onclick="editData(${index})">Edit</button>
            <button onclick="cartData(${index})">AddToCart</button>
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
    localStorage.setItem('userData', JSON.stringify(employees));
}

function editData(index) {
    let emp = employees[index];
    console.log(emp);

    document.getElementById('name').value = emp.name;
    document.getElementById('email').value = emp.email;
    document.getElementById('dpt').value = emp.dpt;
    editIndex = index;
}

let cartData = (index) => {
    let data = employees[index];

    let newIndex = cart.findIndex((item) => {
        return item.name === data.name
    })
    console.log("newIndex" + newIndex);

    if (newIndex == -1) {
        data.quantity = 1;
        data.price = 10
        cart.push(data);
    }
    else {
        // data.quantity += 1;
        // cart[newIndex] = data;
        cart[newIndex].quantity += 1;
    }

    localStorage.setItem('cartData', JSON.stringify(cart));
}

renderEmpData();