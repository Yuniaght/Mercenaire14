"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const detailCards = document.querySelectorAll('.detailcard');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const allDetailCards = Array.from(document.querySelectorAll('.detailcard'));
                const index = allDetailCards.indexOf(entry.target);
                let delayClass = '';
                if (index >= 0 && index <= 5) {
                    delayClass = 'animate__delay-' + index + 's';
                } else if (index > 5) {
                    delayClass = 'animate__delay-5s';
                }
                if (window.innerWidth >= 968) {
                    console.log(window.innerWidth);
                    entry.target.classList.add('animate__animated', 'animate__flipInX');
                    if (delayClass) {
                        entry.target.classList.add(delayClass);
                    }
                } else {
                    entry.target.classList.add('animate__animated', 'animate__flipInX');
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);


    detailCards.forEach(card => {
        observer.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const memberCards = document.querySelectorAll('.member'); 

    const observerOptions = {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__bounceInLeft');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    memberCards.forEach(card => {
        observer.observe(card);
    });
});