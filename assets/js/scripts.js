//form validation 

function formCheck() {
    let check = document.forms["main-body__contact__form"]["honey-pot"].value;

    if (check.length > 0) {
        alert("Bot Detected initiate self destruct sequence");
        return false;
    };
};


//nav open button

$('.nav-button').on('click', function(e) {
    e.preventDefault();
    $('html').addClass('open-nav show-overlay');
});

//click to close

$('.overlay').on('click', function(){
    $('html').removeClass('open-nav show-overlay')
})

// Google Maps API
// https://developers.google.com/maps/documentation/javascript/adding-a-google-map - documentation
// https://maps.googleapis.com/maps/api/js?key=AIzaSyCEwy3EIAwPBRcIbRPSHTUDgyAGRinxBUY&callback=initMap

function initMap() {

    // default load pos for map

    const options = {
        zoom: 4,
        center: {lat:49.473925,lng:6.988208}
    };

    const map = new google.maps.Map(document.getElementById('map'), options);

    // send request to JSON object locally
    // XMLHttpRequest code from w3schools.com

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           const response = JSON.parse(xhttp.responseText);

           // get data attribute from user input and store it

            $(".options").each(function(){
              $(this).on("click", function(e){
                  e.preventDefault();
                  let dataType = $(this).attr('data-options');

                //   marker.setMap(null);

                    // loop through the object specifically the array that has been selected

                    for(let i = 0;i < response[dataType].length;i++) {

                        // grab the current iteration and store it in index
                        
                        let index = response[dataType][i];

                        // construct the map markers

                            let marker = new google.maps.Marker({
                            position: new google.maps.LatLng(index.lat, index.lng),
                            map: map,
                            animation: google.maps.Animation.DROP,
                            title: index.title,
                            content: index.content
                        });

                        // if the data has content allow a click to open info

                        if (marker.content){
                            let toolTip = new google.maps.InfoWindow({
                                content: marker.content,
                                title: marker.title
                            });

                            marker.addListener('click', function(){
                                toolTip.open(map, marker);
                            });
                        };
                    }; 
                });
            });
        };
    };

    xhttp.open("GET", "assets/data/markers.json", true);
    xhttp.send();

};

