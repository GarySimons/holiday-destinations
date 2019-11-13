//form validation 

function formCheck() {
    let check = document.forms["main-body__contact__form"]["honey-pot"].value;

    if (check.length > 0) {
        alert("Bot Detected initiate self destruct sequence");
        return false;
    }
}

// Google Maps API
// https://developers.google.com/maps/documentation/javascript/adding-a-google-map - documentation
// https://maps.googleapis.com/maps/api/js?key=AIzaSyDZiJgFymn04HyksKtcoqVf1LlJdY2cAGQ&callback=initMap

function initMap() {

    const options = {
        zoom: 4,
        center: {lat:49.473925,lng:6.988208}
    }

    const map = new google.maps.Map(document.getElementById('map'), options);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           const response = JSON.parse(xhttp.responseText);

        console.log(response.uk);
        console.log(response.usa);
        console.log(response.au);

            $(".options").each(function(){
              $(this).on("click", function(){
                  let dataType = $(this).attr('data-options');

                    console.log(dataType);

                    for(var i = 0;i < response[dataType].length;i++) {
                        
                        var index = response[dataType][i];

                            let marker = new google.maps.Marker({
                            position: new google.maps.LatLng(index.lat, index.lng),
                            map: map,
                            title: index.content
                        });
                    }; 
                });
            });
        };
    };

    xhttp.open("GET", "assets/data/markers.json", true);
    xhttp.send();

}

