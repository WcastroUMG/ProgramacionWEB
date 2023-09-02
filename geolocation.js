document.addEventListener("DOMContentLoaded", function() {

    const countryElement = document.getElementById("country");

   
    function getCountryFromGeolocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                
                const apiURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

                fetch(apiURL)
                    .then(response => response.json())
                    .then(data => {
                        const country = data.address.country;
                        countryElement.textContent = country;
                    })
                    .catch(error => {
                        console.error("Error fetching geolocation data:", error);
                        countryElement.textContent = "No disponible";
                    });
            });
        } else {
            countryElement.textContent = "No disponible";
        }
    }

   
    getCountryFromGeolocation();

});
