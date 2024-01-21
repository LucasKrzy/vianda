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
$('.navbar-toggler').click(function() {
    if ($('#basic-navbar-nav').hasClass('show') && $(document).scrollTop() < 25) { // Se a classe 'scrolled' já estiver presente
        $('nav').removeClass('scrolled');
        $('.navbar').removeClass('scrolled');
    } else { // Se a classe 'scrolled' não estiver presente
        $('nav').addClass('scrolled');
        $('.navbar').addClass('scrolled');
    }
});