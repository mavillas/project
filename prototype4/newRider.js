//javascript

//call to jQuery ready function
//make sure html and css aare loaded

$(document).ready(function () {
    console.log("ready");
    
    $('.button').click(function () {
        window.location.href = 'rideList.html';
        return false;
    });
    
    $('#driver').click(function () {
        window.location.href = 'newDriver.html';
        return false;
    });

    $('.datepicker').pickadate();


});