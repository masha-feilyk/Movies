$(document).ready(function () {
    $('.js-gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'gallery-dots',
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            var text = $(slider.$slides[i]).data('text');
            return '<a class="gallery-dots__link"><img class="gallery-dots__img" src="' + thumb + '"><span class="gallery-dots__text">' + text + '</span></a>';
        },
    });
});