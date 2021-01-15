const nextCarrouselButton = document.getElementById('next');
const previousCarrouselButton = document.getElementById('previous');

nextCarrouselButton.onclick = () => {
    var leftCarrousel = document.getElementById('carrousel').scrollLeft;
    var increase = leftCarrousel += 330;
    document.getElementById('carrousel').scrollTo({
        left: increase,
        behavior: 'smooth'
    });
};

previousCarrouselButton.onclick = () => {
    var leftCarrousel = document.getElementById('carrousel').scrollLeft;
    var increase = leftCarrousel -= 330;
    document.getElementById('carrousel').scrollTo({
        left: increase,
        behavior: 'smooth'
    });
};

