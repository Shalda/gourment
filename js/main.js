$(function () {
    'use strict';
    //slow scroll
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate(
            {
                scrollTop: $(target).offset().top
            }, 800
        )
    });
//sticky menu
    var offset = $('#header_top').offset();
    $(window).scroll(function () {
        if ($(window).scrollTop() > offset.top) {
            $('#header_top').fadeIn(2000).addClass('fixedNav');
        } else {
            $('#header_top').removeClass('fixedNav');
        }
    })
});

