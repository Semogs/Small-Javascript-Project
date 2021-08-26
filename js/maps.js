const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const mapImg = document.querySelectorAll('.map-img');
let currentlySelected = 0;

prevBtn.addEventListener('click', function () {
    mapImg[currentlySelected].classList.remove("active");
    currentlySelected--;
    mapImg[currentlySelected].classList.add("active")
    nextBtn.disabled = false

    if (currentlySelected === 0) {
        prevBtn.disabled = true
    }
})

nextBtn.addEventListener('click', function () {
    mapImg[currentlySelected].classList.remove("active");
    currentlySelected++;
    mapImg[currentlySelected].classList.add("active")
    prevBtn.disabled = false

    if (mapImg.length === currentlySelected + 1) {
        nextBtn.disabled = true
    }
})