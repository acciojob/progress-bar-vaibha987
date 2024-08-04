let activeCircle = 1;
const totalCircles = 5;

const circles = Array.from(document.querySelectorAll('.circle'));
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

nextButton.addEventListener('click', () => {
    circles[activeCircle - 1].classList.remove('active');
    activeCircle += 1;
    circles[activeCircle - 1].classList.add('active');

    prevButton.disabled = false;

    if (activeCircle === totalCircles) {
        nextButton.disabled = true;
    }
});

prevButton.addEventListener('click', () => {
    circles[activeCircle - 1].classList.remove('active');
    activeCircle -= 1;
    circles[activeCircle - 1].classList.add('active');

    nextButton.disabled = false;

    if (activeCircle === 1) {
        prevButton.disabled = true;
    }
});