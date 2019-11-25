/**
 * This function checks that a specific input is not filled in
 * typically bots will automatically fill in all input fields 
 * on a contact form and spam it, in this case the function 
 * watches for the input form that is hidden to be filled in. 
 */
function formCheck() {
    let check = document.forms["main-body__contact__form"]["honey-pot"].value;

    if (check.length > 0) {
        alert("Bot Detected initiate self destruct sequence");
        return false;
    };
};

const optionsNav = $('.options');
const scrollBtn = $('.scroll-top');

 $(window).scroll(function() {

    if ($(window).scrollTop() > 300) {
      scrollBtn.addClass('scroll-top__show');
    } else {
      scrollBtn.removeClass('scroll-top__show');
    }

     scrollBtn.on('click', function(e) {
        e.preventDefault();
        $('body, body').animate({scrollTop:0}, '300');
    });

  });

//nav open button
$('.nav-button').on('click', function(e) {
    e.preventDefault();
    $('html').addClass('open-nav show-overlay');
});

//click to close
$('.overlay').on('click', function(){
    $('html').removeClass('open-nav show-overlay')
});

optionsNav.on('click', function(){
    $('.map__searcher__hide').removeClass('map__searcher__hide');
    $('.map__searcher__overlay').addClass('map__searcher__hide');
});

/**
 * This is the main function for the Hero panel of the website, sending a fetch request to a local JSON file
 * it then stores the data in response, a data attribute is passed into the for loop which then constructs a map 
 * marker based on the specified dataType.
 */
function initMap() {

    fetch("assets/data/markers.json")
        .then(response => response.json())
        .then(response => {

    const options = {
        zoom: 4,
        center: {lat:49.473925,lng:6.988208}
    };

    const map = new google.maps.Map(document.getElementById('map'), options);

        optionsNav.on("click", function(e){
            e.preventDefault();
            let dataType = $(this).attr('data-options');

            for(let i = 0;i < response[dataType].length;i++) {
                
                let location = response[dataType][i];
                let location_title = location.title;
                let location_content = location.content;

                    let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(location.lat, location.lng),
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: location.title,
                    content: location.content
                });

                if (marker.content){
                    let toolTip = new google.maps.InfoWindow({
                        content: marker.content,
                        title: marker.title
                    });

                    marker.addListener('click', function(){
                        toolTip.open(map, marker);
                    });
                };

                $(".iteration" + i).html("<h2>" + location_title + "</h2>" + location_content);
            }; 
        });
    });
};