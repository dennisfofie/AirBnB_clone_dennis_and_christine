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
    })