let activeCircle = 0;
const circles = document.querySelectorAll('.circle');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

nextButton.addEventListener('click', () => {
    circles[activeCircle].classList.remove('active');
    activeCircle++;
    circles[activeCircle].classList.add('active');
    prevButton.disabled = false;
    if (activeCircle === circles.length - 1) {
        nextButton.disabled = true;
    }
});

prevButton.addEventListener('click', () => {
    circles[activeCircle].classList.remove('active');
    activeCircle--;
    circles[activeCircle].classList.add('active');
    nextButton.disabled = false;
    if (activeCircle === 0) {
        prevButton.disabled = true;
    }
});