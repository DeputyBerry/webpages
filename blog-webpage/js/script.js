

new Glide('.glide', {
    type: 'carousel',
    autoplay: 3500, 
    perView: 4,
    gap: 20,
    breakpoints: {
        1200: {
            perView: 3
        },
        768: {
            perView: 2
        },
        576: {
            perView: 1
        }
    }
}).mount();

document.querySelector('.move-up').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});