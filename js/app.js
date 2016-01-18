/*jslint browser: true*/
/*global $, jQuery, alert*/

/*Key Concepts to remember: 1. For every action, there is an unaction. 2. For every show, there is a hide.*/

$('.ryu-action').hide();
$(document).ready(function () {
    $('.ryu-action').hide();
    $('.ryu-still').show();
    $('.ryu-container').mouseenter(function () {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    });
    $('.ryu-container').mouseleave(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });
    $('.ryu-container').mousedown(function () {
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
    });
    $('.ryu-container').mouseup(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });
    $(document).keydown(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-action').hide();
            $('.ryu-cool').show();
        }
    });
    $(document).keyup(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });
});
