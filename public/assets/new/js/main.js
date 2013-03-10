
$(window).load(function() {
    nav.resizeRelatedItems();
    enableSlider();
});


/**
*	Some helpers for neo4j.org
*/
var nav = {

	/**
	* Resize all related items to fit nicely in a row
	*/
	resizeRelatedItems : function() {
		$.each($('.related .row'), function(i, r) {
			var row = $(this);
			var maxHeight = 0;
			$.each($('.item', row), function(j, item) {
				console.log(item);
				maxHeight = Math.max(maxHeight, $(item).height());
				console.log(maxHeight);
			});
			$('.item', row).height(maxHeight);
			maxHeight = 0;
		});
	},


	/**
	* Activate an item in the main menu
	*/
	activateMain : function(category) {
        var rightAlign = { learn: "14em", java: "14em", develop: "11em", participate: "7em", install: "2.5em", download: "2.5em" };
        if (rightAlign[category]) {
			var mainNav = $('#mainNav');
			$('a', mainNav).removeClass('active');
	        $('.' + category + ' a', mainNav).addClass('active');
			$('#activePointer').css({
	              right: rightAlign[category]
	         }).show();
		}
	},

	/**
	*	Initialize all thumbnails
	*/
	initThumbnails : function() {
		$.each($('.thumbnail'), function(i, tn) {
			var thumbnail = $(tn);
			var src = thumbnail.attr('data-src');

			if (src) {
				thumbnail.on('click', function() {

					$.blockUI({
						message: '<iframe src="' + src + '?autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
						css : {
							position: 'fixed',
							width: '80%',
							height: '90%',
							left: '10%',
							top: '5%',
							border: 'none',
							backgroundColor: 'transparent'
						},
						fadeIn: 25
					});

					// Close modal dialog with ESC key
					$(document).keyup(function(e) {
						e.preventDefault();
				        if (e.keyCode == 27) {
				            $.unblockUI({
				            	fadeOut: 25
				            });
				        }
				    }); 

					// Click outside dialog to close
					$(document).on('mouseup', function(e) {
						e.preventDefault();
			            $.unblockUI({
			            	fadeOut: 25
			            });
				    }); 

				})
			}
		});
	}
}


function getTextWidth(text, fs, fw) {
    $('body').append('<span id="test_width_item" style="font-size:'+fs+';font-weight:' + fw + ';position:absolute;visibility:hidden;padding:0;border:1px solid red;overflow:hidden">' + text + '</span>');
    var span = $('#test_width_item', $('body'));
    var w = span.width();
    span.remove();
    return w;
}

function enableSlider() {

    $('#featured_slider').bjqs({
        // width and height need to be provided to enforce consistency
        // if responsive is set to true, these values act as maximum dimensions
        width : 960,
        height : 480,
        
        // animation values
        animtype : 'slide', // accepts 'fade' or 'slide'
        animduration : 450, // how fast the animation are
        animspeed : 5000, // the delay between each slide
        automatic : false, // automatic
        
        // control and marker configuration
        showcontrols : true, // show next and prev controls
        centercontrols : true, // center controls verically
        nexttext : '<i class="slider icon-forward"></i>', // Text for 'next' button (can use HTML)
        prevtext : '<i class="slider icon-backward"></i>', // Text for 'previous' button (can use HTML)
        showmarkers : true, // Show individual slide markers
        centermarkers : true, // Center markers horizontally
        
        // interaction values
        keyboardnav : true, // enable keyboard navigation
        hoverpause : true, // pause the slider on hover
        
        // presentational options
        usecaptions : false, // show captions for images using the image title tag
        //randomstart : true, // start slider at random slide
        responsive : true // enable responsive capabilities (beta)
    });

    var featured = $('div.featured');

    console.log(featured);

     var maxHeight = 0, maxWidth = 0;
     $.each(featured, function(i, item) {

	// 	maxWidth = Math.max($(this).width());
     	maxHeight = Math.max(maxHeight, $(this).height());
     	console.log(maxWidth, maxHeight);

     });

     var offset = 20;

     featured.height(maxHeight);

	//$('#featured_slider').width(maxWidth);
	$('#featured_slider').height(maxHeight+offset);

 //    $('.bjqs').width(maxWidth);
     $('.bjqs').height(maxHeight+offset);

 //    $('.bjqs-wrapper').width(maxWidth);
     $('.bjqs-wrapper').height(maxHeight+offset);

 //    $('.bjqs-slide').width(maxWidth);
     $('.bjqs-slide').height(maxHeight+offset);

    // $('.bjqs-markers.h-centered .active-marker a').remove();

}

