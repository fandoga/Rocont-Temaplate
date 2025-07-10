
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
let visibleSlides = 2;
let itemWidth = ServicesItems[0].offsetWidth + 8;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let dragging = false;
const tabletMediaQuery = window.matchMedia('(min-width: 480px)')

document.addEventListener("DOMContentLoaded", function () {

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

    function toggleButtonIcons(button, showActive) {
        const defaultIcon = button.querySelector('.icon-default');
        const activeIcon = button.querySelector('.icon-active');
        if (showActive) {
            defaultIcon.style.display = 'none';
            activeIcon.style.display = 'block';
        } else {
            defaultIcon.style.display = 'block';
            activeIcon.style.display = 'none';
        }
    }

    function updateButtonStates() {
        // Для prev
        toggleButtonIcons(btnPrev, currentSlide === 0);
        // Для next
        toggleButtonIcons(btnNext, currentSlide >= ServicesItems.length - visibleSlides);
    }

    btnNext.addEventListener('click', () => {
        if (currentSlide < ServicesItems.length - visibleSlides) {
            currentSlide++;
            ServicesTrack.style.transform = `translateX(-${itemWidth * currentSlide}px)`;
            updateButtonStates();
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            ServicesTrack.style.transform = `translateX(-${itemWidth * currentSlide}px)`;
            updateButtonStates();
        }
    });

    ServicesTrack.addEventListener('touchstart', touchStart);
    ServicesTrack.addEventListener('touchmove', touchMove);
    ServicesTrack.addEventListener('touchend', touchEnd);

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
        ServicesTrack.style.transition = 'transform 0.3s';
        const movedBy = currentTranslate - prevTranslate;

        // Если сдвиг больше половины ширины слайда — листаем
        if (movedBy < -itemWidth / 2 && currentSlide < ServicesItems.length - visibleSlides) {
            currentSlide++;
        } else if (movedBy > itemWidth / 2 && currentSlide > 0) {
            currentSlide--;
        }
        ServicesTrack.style.transform = `translateX(-${itemWidth * currentSlide}px)`;

    }

});
