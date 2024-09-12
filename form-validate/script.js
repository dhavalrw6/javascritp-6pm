document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let form = document.getElementById('form');
    let inputs = document.querySelectorAll('input, textarea, select');

    document.querySelectorAll('.error').forEach((span) => span.innerHTML = '')

    inputs.forEach((input) => {
        const name = input.name;
        const value = input.value.trim();
        const type = input.type;
        const tagName = input.tagName.toLowerCase();

        if (tagName == 'input' && (type == 'password' || type == 'text')) {
            if (value == '') {
                document.getElementById(`${name}-error`).innerHTML = `${name} is required.`
            }
        }

        if (type == "radio" && !document.querySelector('input[type="radio"]:checked')) {
            document.getElementById(`${name}-error`).innerHTML = `${name} is required.`
        }

        if (type == "checkbox" && !document.querySelector('input[type="checkbox"]:checked')) {
            document.getElementById(`${name}-error`).innerHTML = `${name} is required.`
        }

        if (tagName == "select" && value == '') {
            document.getElementById(`${name}-error`).innerHTML = `${name} is required.`
        }

        if (tagName == 'textarea' && value == '') {
            document.getElementById(`${name}-error`).innerHTML = `${name} is required.`
        }

        if (value != '' && name == 'email' && !/\S+@\S+\.\S+/.test(value)) {
            document.getElementById(`${name}-error`).innerHTML = `Invalid ${name}.`
        }

        if (value != '' && name == 'password' && !/^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(value)) {
            document.getElementById(`${name}-error`).innerHTML = `${name} must be at last 8 charecters.`
        }

    })


})