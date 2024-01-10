$(window).scroll(function() {
    if ($(document).scrollTop() > 25) {
        $('nav').addClass('scrolled');
        $('nav-bar').addClass('scrolled');
    } else {
        $('nav').removeClass('scrolled');
        $('nav-bar').removeClass('scrolled');
    }
});
/*$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('nav.navbar').addClass('scrolled');
    });

    $('#basic-navbar-nav').on('hidden.bs.collapse', function () {
        $('nav.navbar').removeClass('scrolled');
    });
});*/
