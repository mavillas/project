//javascript

//call to jQuery ready function
//make sure html and css aare loaded

$(document).ready(function () {
    console.log("ready");
    alert('This is a prototype of the UC Davis Ridesharing app.')

    $('.button').click(function () {
        window.location.href = 'newDriver.html';
        return false;
    });

});