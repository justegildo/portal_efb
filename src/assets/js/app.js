$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
         $('#navbar').addClass('fixed-top');
        } else {
         $('#navbar').removeClass('fixed-top');
        }
    });
});