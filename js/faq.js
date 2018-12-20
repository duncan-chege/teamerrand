$(function () {


    $('#accordion').find('.accordion-toggle').click(function () {
        $(this).next().slideToggle(300);
        $('.accordion-content').not($(this).next()).slideUp(300);
    });

});

