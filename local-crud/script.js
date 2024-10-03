let users = JSON.parse(localStorage.getItem('users')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let form = document.querySelector('form');
let userTbl = document.querySelector('.userTbl tbody');
let editIndex = -1;
let btnUser = document.querySelector('.btn-user');

document.getElementById('count').textContent = cart.length || 0;

btnUser.textContent = "Add New User";


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let user = {
        username: username,
        password: password,
        email: email
    }

    if (editIndex == -1) {
        users.push(user);
    }
    else {
        users[editIndex] = user
        editIndex = -1;
        btnUser.textContent = "Add New User";
    }

    document.getElementById('username').value = ''
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
    localStorage.setItem('users', JSON.stringify(users));
    renderUserTable();
})


let renderUserTable = () => {
    users = JSON.parse(localStorage.getItem('users')) || [];

    userTbl.innerHTML = ''

    users.forEach((user, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>
                <button class="btn btn-warning" onclick="editUser(${index})">Edit</button>
                <button class="btn btn-danger" onclick="deleteUser(${index})">Delete</button>
                <button class="btn btn-primary" onclick="AddToCart(${index})">Add To Cart</button>
            </td>
        `
        userTbl.appendChild(row);
    })
}


let deleteUser = (index) => {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    renderUserTable();
}

let editUser = (index) => {
    let { username, email, password } = users[index];

    document.getElementById('username').value = username;
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;
    editIndex = index;
    btnUser.textContent = "Update User"
}

let AddToCart = (index) => {
    let cartData = users[index];
    cart.push(cartData);
    document.getElementById('count').textContent = cart.length || 0;
    //showCartData();
    localStorage.setItem('cart', JSON.stringify(cart));
}


renderUserTable();