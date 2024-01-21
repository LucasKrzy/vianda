$('.nav-link').click(function(event) {
    event.preventDefault();
    $target = $($(this).attr('href'));
    $('html, body').animate({
        scrollTop: $target.offset().top - 70
    }, 500);
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 25) {
        $('nav').addClass('scrolled');
        $('nav-bar').addClass('scrolled');
    } else {
        $('nav').removeClass('scrolled');
        $('nav-bar').removeClass('scrolled');
    }
});