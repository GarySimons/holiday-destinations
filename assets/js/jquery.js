//jquery goes here


//nav open button

$('.nav-button').on('click', function(e) {
    e.preventDefault();
    $('html').addClass('open-nav show-overlay');
});