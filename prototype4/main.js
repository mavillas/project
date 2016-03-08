//javascript

//call to jQuery ready function
//make sure html and css aare loaded

$(document).ready(function () {
    console.log("ready");
    alert('This is a prototype of the UC Davis Ridesharing app. At this time it is more of a click-through than a fully functioning application, so some features may not work (e.g. some buttons will not be clickable and data entered will not necessarily translate to the next page).')

    $('.button').click(function () {
        window.location.href = 'newDriver.html';
        return false;
    });

});