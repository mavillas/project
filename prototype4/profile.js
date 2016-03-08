//javascript

//call to jQuery ready function
//make sure html and css aare loaded

$(document).ready(function () {
    console.log("ready");
    
    $('.done').hide();
    
    
    $('#rider').click(function () {
        $('.done').show();
        $('.notdone').hide();
    });
    
    $('#driver').click(function () {
        $('.done').hide();
        $('.notdone').show();
    });


});