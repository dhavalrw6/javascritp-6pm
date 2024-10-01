let currentSlide = 0;

function showSlide(index) {
    let slides = document.querySelectorAll('.slide');

    if (index >= slides.length) {
        currentSlide = 0
    }
    else if (index < 0) {
        currentSlide = slides.length - 1;
    }
    else {
        currentSlide = index
    }

    const sliderContainer = document.querySelector('.slides');
    const offset = -currentSlide * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;

}

function changeSlide(direction) {
    showSlide(currentSlide + direction)
}

setInterval(() => {
    changeSlide(1);
}, 2000)