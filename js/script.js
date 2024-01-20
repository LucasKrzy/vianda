var logo = $('.navbar-brand img');

function trocarImagem() {
    var srcAtual = logo.attr('src');
    var srcAlternativo = logo.data('alt');
    logo.attr('src', srcAlternativo);
    logo.data('alt', srcAtual);
}

$(window).scroll(function() {
    if ($(document).scrollTop() > 25) {
        $('nav').addClass('scrolled');
        $('nav-bar').addClass('scrolled');
        trocarImagem();
    } else {
        $('nav').removeClass('scrolled');
        $('nav-bar').removeClass('scrolled');
        trocarImagem();
    }
});