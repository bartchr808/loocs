// scripts for site
$(document).ready(function () {
    setTimeout(function () {
        textAnimate();
    }, 700);
});


function textAnimate() {
    setTimeout(function () {
        $("#textChange").addClass("fadeOutUp");
    }, 800);
    setTimeout(function () {
        $("#textChange").removeClass("fadeOutUp"); //#1
    }, 1200); //+0.8seconds
    setTimeout(function () {
        $("#textChange").addClass("fadeInUp").text("HARDWORKING."); //#2 TEXT CHANGE
    }, 1201);
    setTimeout(function () {
        $("#textChange").removeClass("fadeInUp").addClass("fadeOutUp"); //#3
    }, 2600); //+1.4seconds
    setTimeout(function () {
        $("#textChange").removeClass("fadeOutUp"); //#1
    }, 3400); //+0.8seconds
    setTimeout(function () {
        $("#textChange").addClass("fadeInUp").text("GREGARIOUS."); //#2 TEXT CHANGE
    }, 3401);
    setTimeout(function () {
        $("#textChange").removeClass("fadeInUp").addClass("fadeOutUp"); //#3
    }, 4800); //+1.4seconds
    setTimeout(function () {
        $("#textChange").removeClass("fadeOutUp"); //#1
    }, 5600); //+0.8seconds
    setTimeout(function () {
        $("#textChange").addClass("fadeInUp").text("CLASS OF 2021."); //#2 TEXT CHANGE
    }, 5601);
}
