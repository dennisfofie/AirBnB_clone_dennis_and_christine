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

    })

