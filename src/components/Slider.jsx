import React, { useEffect, useRef, useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

const Slider = ({ slides }) => {
    const trackRef = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [visibleSlides, setVisibleSlides] = useState(1);
    const [itemWidth, setItemWidth] = useState(0);


    // Кол-во видимых слайдов
    const getVisibleSlides = useCallback(() => {
        if (window.innerWidth >= 790) return 4;
        if (window.innerWidth >= 540) return 3;
        return 2;
    }, []);

    // Обновление размеров
    const updateSizes = useCallback(() => {
        setVisibleSlides(getVisibleSlides());
        if (trackRef.current?.firstChild) {
            setItemWidth(trackRef.current.firstChild.offsetWidth + 8);
        }
    }, [getVisibleSlides]);

    useEffect(() => {
        updateSizes();
        window.addEventListener("resize", updateSizes);
        return () => window.removeEventListener("resize", updateSizes);
    }, [updateSizes]);

    // Дублируем массив слайдов
    const extendedSlides = [
        ...slides.slice(-visibleSlides),
        ...slides,
        ...slides.slice(0, visibleSlides),
    ];

    // Переход к слайду
    const goToSlide = useCallback(
        (index, withTransition = true) => {
            if (!trackRef.current) return;
            trackRef.current.style.transition = withTransition ? "transform 0.3s" : "none";
            trackRef.current.style.transform = `translateX(-${itemWidth * index}px)`;
        },
        [itemWidth]
    );

    // При изменении visibleSlides ставим первый реальный слайд
    useEffect(() => {
        setCurrentSlide(visibleSlides);
    }, [visibleSlides]);

    // Сдвигаем трек при изменении currentSlide
    useEffect(() => {
        console.log(currentSlide);
        goToSlide(currentSlide);
    }, [currentSlide, goToSlide]);

    // transitionend
    useEffect(() => {
        if (!trackRef.current) return;

        const handleTransitionEnd = () => {
            if (currentSlide >= slides.length + visibleSlides) {
                setIsTransitioning(false);
                setCurrentSlide(visibleSlides);
                goToSlide(visibleSlides, false);
            } else if (currentSlide < visibleSlides) {
                setIsTransitioning(false);
                setCurrentSlide(slides.length + visibleSlides - 1);
                goToSlide(slides.length + visibleSlides - 1, false);
            } else {
                setIsTransitioning(false);
            }
        };

        const el = trackRef.current;
        el.addEventListener("transitionend", handleTransitionEnd);
        return () => el.removeEventListener("transitionend", handleTransitionEnd);
    }, [currentSlide, slides.length, visibleSlides, goToSlide]);

    // Кнопки
    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev - 1);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (isTransitioning) return;
            setIsTransitioning(true);
            setCurrentSlide((prev) => prev + 1);
        },
        onSwipedRight: () => {
            if (isTransitioning) return;
            setIsTransitioning(true);
            setCurrentSlide((prev) => prev - 1);
        },
        trackMouse: false,
        preventDefaultTouchmoveEvent: true,
    });

    return (
        <div className="tiles center">
            <div className="tiles-info">
                <h2 className="tiles-info-title">Это — не совсем то, что вы думаете</h2>
                <div className="tiles-buttons">
                    <button onClick={handlePrev} className="tiles-button prev">
                        <img
                            className="icon-default"
                            src="/img/arrow__icon-big.green-prev.svg"
                            alt=""
                        />
                    </button>
                    <button onClick={handleNext} className="tiles-button next">
                        <img
                            className="icon-default"
                            src="/img/arrow__icon-big.green.svg"
                            alt=""
                        />
                    </button>
                </div>
            </div>

            <div {...handlers} className="slider">
                <div ref={trackRef} className="slider-track">
                    {extendedSlides.map((slide, idx) => (
                        <div
                            key={idx}
                            className={`slider-item ${slide.gradient ? "gradient" : ""}`}
                            data-bg={slide.bg}
                        >
                            <h3 className="slider-item-title">{slide.title}</h3>
                            <p className="slider-item-text">{slide.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
