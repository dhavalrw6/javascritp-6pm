// let text = document.getElementById('text');

// let btn = document.getElementById('btn');

// btn.addEventListener('click', (e) => {
//     text.innerHTML += "<strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ipsum.</strong>"
// })

let num = 1;
document.querySelector("#title").addEventListener('click', (e) => {
    e.target.style.fontSize = "50px";
    e.target.style.backgroundColor = "red";
    let content = document.getElementById('content');
    let bool = true;
    if (num == 1) {
        content.style.display = "block";
        num = 0
    }
    else {
        content.style.display = "none";
        num = 1
    }
})