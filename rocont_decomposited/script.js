
const DropdownButton = document.querySelector('.dropdown-button');
const DropdownMenu = document.querySelector('.dropdown-content');
const ServiceItems = document.querySelectorAll('.ServicesBlock_item');
const InfoTitle = document.querySelector('.info-title');
const ServicesTrack = document.querySelector('.slider-track');
const ServicesItems = document.querySelectorAll('.slider-item');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

let element;
const offset = 50;
let isDropdownOpen = false;
let currentSlide = 0;
let visibleSlides = 1;
let itemWidth = ServicesItems[0].offsetWidth + 8;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let dragging = false;
let isTransitioning = false;
const tabletMediaQuery = window.matchMedia('(min-width: 480px)')

function getVisibleSlides() {
    if (window.innerWidth >= 790) return 4;
    if (window.innerWidth >= 540) return 3;
    return 2;
}

function setupInfiniteSlider() {
    // Удаляем старые клоны, если есть
    document.querySelectorAll('.slider-item.clone').forEach(el => el.remove());

    // Получаем актуальный список элементов
    const items = Array.from(document.querySelectorAll('.slider-item:not(.clone)'));
    visibleSlides = getVisibleSlides();
    itemWidth = items[0].offsetWidth + 8;

    // Клонируем последние N в начало
    for (let i = items.length - visibleSlides; i < items.length; i++) {
        const clone = items[i].cloneNode(true);
        clone.classList.add('clone');
        clone.setAttribute('data-bg', items[i].getAttribute('data-bg'));
        ServicesTrack.insertBefore(clone, items[0]);
    }
    // Клонируем первые N в конец
    for (let i = 0; i < visibleSlides; i++) {
        const clone = items[i].cloneNode(true);
        clone.classList.add('clone');
        clone.setAttribute('data-bg', items[i].getAttribute('data-bg'));
        ServicesTrack.appendChild(clone);
    }
    // Сдвигаем трек на N элементов вперёд
    ServicesTrack.style.transition = 'none';
    currentSlide = visibleSlides;
    ServicesTrack.style.transform = `translateX(-${itemWidth * currentSlide}px)`;
}

function goToSlide(slide, withTransition = true) {
    if (withTransition) {
        ServicesTrack.style.transition = 'transform 0.3s';
    } else {
        ServicesTrack.style.transition = 'none';
    }
    ServicesTrack.style.transform = `translateX(-${itemWidth * slide}px)`;
}

function handleTransitionEnd() {
    const items = Array.from(document.querySelectorAll('.slider-item:not(.clone)'));
    const totalSlides = items.length;
    // Если на клоне первого (в конец)
    if (currentSlide >= totalSlides + visibleSlides) {
        currentSlide = visibleSlides;
        goToSlide(currentSlide, false);
    } else if (currentSlide < visibleSlides) { // если на клоне последнего (в начало)
        currentSlide = totalSlides + visibleSlides - 1;
        goToSlide(currentSlide, false);
    }
    isTransitioning = false;
}

window.addEventListener('resize', () => {
    setupInfiniteSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    setupInfiniteSlider();

    if (tabletMediaQuery.matches) {
        InfoTitle.textContent = "Просто потому что можем"
    }


    if (DropdownButton && DropdownMenu) {
        DropdownButton.addEventListener('click', function () {
            if (!isDropdownOpen) {
                DropdownMenu.classList.add('open');
                DropdownButton.classList.add('open');
                isDropdownOpen = true;
            } else {
                DropdownMenu.classList.remove('open');
                DropdownButton.classList.remove('open');
                isDropdownOpen = false;
            }
            console.log(window.pageYOffset);
        });
    }



    btnNext.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;
        currentSlide++;
        goToSlide(currentSlide);
    });

    btnPrev.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;
        currentSlide--;
        goToSlide(currentSlide);
    });

    ServicesTrack.addEventListener('touchstart', touchStart);
    ServicesTrack.addEventListener('touchmove', touchMove);
    ServicesTrack.addEventListener('touchend', touchEnd);
    ServicesTrack.addEventListener('transitionend', handleTransitionEnd);

    function touchStart(e) {
        dragging = true;
        startX = e.touches[0].clientX;
        prevTranslate = -itemWidth * currentSlide;
        ServicesTrack.style.transition = 'none';
    }

    function touchMove(e) {
        if (!dragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        currentTranslate = prevTranslate + diff;
        ServicesTrack.style.transform = `translateX(${currentTranslate}px)`;
    }

    function touchEnd(e) {
        dragging = false;
        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -itemWidth / 4) {
            if (!isTransitioning) {
                isTransitioning = true;
                currentSlide++;
                goToSlide(currentSlide);
            }
        } else if (movedBy > itemWidth / 4) {
            if (!isTransitioning) {
                isTransitioning = true;
                currentSlide--;
                goToSlide(currentSlide);
            }
        } else {
            goToSlide(currentSlide);
        }
    }

});
