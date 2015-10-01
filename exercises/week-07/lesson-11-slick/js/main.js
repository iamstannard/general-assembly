/*global document, $ */
/* Even though we have our script placed at the bottom of the page we should wait until the document is ready i.e.
 ** completely loaded before creating the carousel.  The primary reason? In this case - to ensure our images have loaded.
 */
(function () {
    'use strict';
    $(document).ready(function () {

        /* This is where we initialise our carousel */
        $('.carousel').slick({
            centerMode: true,
            displayArrows: true,
            slidesToShow: 5
        });

        /* We need to place this variable outside of the click 
         ** handler to member the value between clicks */
        var isFiltered = false;

        /* Togglable filter for sports category */
        $('#filter-by-sport').click(function (e) {
            e.preventDefault();
            /* Make a jQuery element out of the event target */
            var el = $(e.target);
            if (isFiltered === false) {
                $('#filter-carousel').slick('slickFilter', '[data-category="sport"]');
                el.addClass('active');
                el.text('Filtered by Sport');
                isFiltered = true;
            } else {
                $('#filter-carousel').slick('slickUnfilter');
                el.removeClass('active');
                el.text('Filter by Sport');
                isFiltered = false;
            }
        });
    });
}());