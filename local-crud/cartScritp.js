let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartTbl = document.querySelector('.cartTbl tbody');
document.getElementById('count').textContent = cart.length || 0;
let showCartData = () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartTbl.innerHTML = '';

    cart.forEach((value, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${value.username}</td>
            <td>${value.email}</td>
            <td>${value.password}</td>
        `
        cartTbl.append(row);
    })

}

showCartData();