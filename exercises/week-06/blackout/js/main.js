/*global $, body,  console*/

(function () {
    'use strict';

    /* Your JavaScript starts here */

    //jQuery is already on the page so you can use it to your advantage

    function switchLights() {
        $('body').toggleClass('dark');
        $('h1,p').toggleClass('light');
    }

    $('#light-switch').click(switchLights);

    /* Your JavaScript ends here */

}());