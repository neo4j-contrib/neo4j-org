/* ===================================================
 * bootstrap-iso.js v2.1.0
 * http://pknopf.com/blog/jquery-isotope-with-responsive-twitter-bootstrap
 * ========================================================== */


$(function () {

    var $isocontainer = $('#isotope');

    // get the column width per unit.
    // an item may be multiple units tall or wide, but we need to figuire out the unit dynamically on resize
    function getUnitWidth() {
        var width;
        if ($(".visible-phone").is(":visible")) {
            width = $isocontainer.width() / 2;
        } else if ($(".visible-tablet").is(":visible")) {
            width = $isocontainer.width() / 3;
        } else {
            width = $isocontainer.width() / 5;
        }
        return width;
    }

    // set all the widths to the elements
    function setWidths() {
        var unitWidth = getUnitWidth() - 20; // adjust for padding. for padding:0, make this 1
        $isocontainer.children(":not(.width2)").css({ width: unitWidth });
        $isocontainer.children(".width2").css({ width: (unitWidth * 2) });
    }

    if ($isocontainer) {

        // set the widths on page load
        setWidths();

        // initialize Isotope
        $isocontainer.isotope({
            itemSelector: 'li',
            resizable: false, // disable normal resizing
            // set columnWidth to a percentage of isocontainer width
            masonry: { columnWidth: getUnitWidth() }
        });

        // update columnWidth on window resize
        $(window).smartresize(function () {
            // set the widths on resize
            setWidths();
            // reinit isotop
            $isocontainer.isotope({
                // update columnWidth to a percentage of isocontainer width
                masonry: { columnWidth: getUnitWidth() }
            });
        });
    }
    
});

