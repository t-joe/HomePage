$(document).ready(function () {
    var started = false;
    $("div.boundary").mouseenter(function(){
        if(started == true)
            lose();
    });

    $("div#start").click(function(){
        $("div.boundaryRed").removeClass("boundaryRed");
        started = true;
        $("#status").text("Started");
    });

    $("div#end").mouseenter(function(){
        if(started == true) {
            $("div#end").removeClass("boundaryRed");
            $("#status").text("You win. :)");
            started = false;
        }
    });
    $("#maze").mouseleave(function () {
        if(started == true)
            lose();
    });

    function lose() {
        $("div.boundary").addClass("boundaryRed");
        $("#status").text("Sorry, You lose. :(");
        started = false;
    }
});