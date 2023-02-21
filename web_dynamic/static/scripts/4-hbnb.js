/*
    @dict: object in which we are adding the checked button
    description - waiting for the dom to be ready and listining for change event in the check input to see if the user has click on it.
    gets the filters applied to the place and render it in h4 tag sorted and saparated by comma
*/

$(document).ready(function() {
    const dict = {};
    $("input[type=checkbox]").click(function() {
        if (this.checked) {
            dict[this.dataset.name] = this.dataset.id
        }
        else {
            delete dict[this.dataset.name]
        }
        $(".amenities h4").text(Object.keys(dict).sort().join(', '));

    })
     /*
        description - add class available to the div if data is fetch or remove it  

     */
        $.get("http://0.0.0.0:5001/api/v1/status/", function(data, message) {
            if (data) {
                $("div#api_status").addClass('available')
            }
            else {
                $("div#api_status").removeClass("available")
            }
        })

        $.post(
            {
                url: "http://0.0.0.0:5001/api/v1/places_search/",
                data: JSON.stringify('{}'),
                headers: {
                    "Content-Type": "application.json"
                },

                success: function(data) {
                    data.forEach(function(place) {
                        $("section.places").append(`
                        <article>
                            <div class="title_box">
                            <h2>${place.name}</h2>
                                <div class="price_by_night">$${place.price_by_night}</div>
                            </div>
                            <div class="information">
                            <div class="max_guest">${place.max_guest} Guest${
                                        place.max_guest !== 1 ? "s" : ""
                                    }</div>
                            <div class="number_rooms">${place.number_rooms} Bedroom${
                                        place.number_rooms !== 1 ? "s" : ""
                                    }</div>
                            <div class="number_bathrooms">${place.number_bathrooms} Bathroom${
                                        place.number_bathrooms !== 1 ? "s" : ""
                                    }</div>
                            </div> 
                            <div class="description">
                            ${place.description}
                            </div>
                        
                    </article>`)
                    })
                }        
            });
            



    })

