'use strict';
(function () {
    AOS.init();
    $(".buttonMore").on('click', function () {
        $('html,body').animate({
            scrollTop: $("section").offset().top
        }, 1000)
    })
    $('.content').on('focus', function () {
        console.log('test')
    })

})();

