/*global $, console, setTimeout */
(function () {
    'use strict';
    
    /* Turn out the background after 5 seconds */
    setTimeout(function () {
        $('.tile').css('background', '#eee');
        $('.guess').css('display', 'block');
    }, 3000);
}());