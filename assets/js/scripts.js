const optionsNav = $('.options');
const scrollBtn = $('.scroll-top');

 $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      scrollBtn.addClass('scroll-top__show');
    } else {
      scrollBtn.removeClass('scroll-top__show');
    }
  });

//nav open button
$('.nav-button').on('click', function(e) {
    e.preventDefault();
    $('html').addClass('open-nav show-overlay');
});

//click to close
$('.overlay, .mobile-nav').on('click', function(){
    $('html').removeClass('open-nav show-overlay')
});

optionsNav.on('click', function(){
    $('#location-stage').removeClass('map__searcher__hide');
    $('.map__searcher').addClass('map__searcher__scroll');
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

        optionsNav.on("click", function(){
            $('.map__title').addClass('move');
            let dataType = $(this).attr('data-options');

            for(let i = 0;i < response[dataType].length;i++) {
                
                let location = response[dataType][i];
                let locationTitle = location.title;
                let locationContent = location.content;

                    let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(location.lat, location.lng),
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: location.title,
                    content: location.content
                });

                const setPos = map.setCenter(marker.getPosition())

                if (marker.content){
                    let toolTip = new google.maps.InfoWindow({
                        content: marker.content,
                        title: marker.title
                    });

                    marker.addListener('click', function(){
                        toolTip.open(map, marker);
                    });
                };

                let destinationInfo = `
                <div>
                    <h2>${locationTitle}</h2>
                    <p>${locationContent}</p>
                </div>
                `;
                $(".locationDetails" + i).html(destinationInfo);
            }; 
        });
    });
};

/**
 * This function checks that a specific input is not filled in
 * typically bots will automatically fill in all input fields 
 * on a contact form and spam it, in this case the function 
 * watches for the input form that is hidden to be filled in. 
 */
$('#contact-form').on("submit", function(){
  let check = document.forms["main-body__contact__form"]["honey-pot"].value;

    if (check.length > 0) {
        alert("Bot Detected initiate self destruct sequence");
        return false;
    };  
});