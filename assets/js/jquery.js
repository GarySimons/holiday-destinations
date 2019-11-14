
//nav open button

$('.nav-button').on('click', function(e) {
    e.preventDefault();
    $('html').addClass('open-nav show-overlay');
});

//click to close

$('.overlay').on('click', function(){
    $('html').removeClass('open-nav show-overlay')
})