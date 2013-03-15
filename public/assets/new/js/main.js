
$(window).load(function() {
    resizeRelatedItems();
});

$(document).ready(function() {
  	enableBxSlider();

  	$('.badge .close').on('click', function(button) {
  		$('.badge').fadeOut();
  	});

});

/**
* Resize all related items to fit nicely in a row
*/
function resizeRelatedItems() {
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
}


/**
*	Some helpers for neo4j.org
*/
var nav = {


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
		$.each($('[data-src]'), function(i, tn) {
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
                            "z-index": 10000,
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

                    return false;
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

function enableBxSlider() {
	$('.bxslider').bxSlider({
		//captions: true,
		adaptiveHeight: true
	});
}
