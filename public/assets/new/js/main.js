//var online_course="ue6dqk";
var online_course="dbld7j";
//var apiUrl = "https://stack.versal.com/api2";
var apiUrl = "http://stagingstack.versal.com/api2";


$(window).load(function() {
    resizeRelatedItems();
    resizeFeaturedItems();
});

$(document).ready(function() {
  	enableBxSlider();

  	$('.badge .close').on('click', function(button) {
  		$('.badge').fadeOut();
  	});

	$('#mobileMenu').on('click', function(){
		var self = $(this);
		$('#mobileNav').slideToggle('fast');
		self.toggleClass('active');
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
//			console.log(item);
			maxHeight = Math.max(maxHeight, $(item).height());
//			console.log(maxHeight);
		});
		$('.item', row).height(maxHeight);
		maxHeight = 0;
	});
}

function resizeFeaturedItems() {
	$.each($('div.featured .slide'), function(i, r) {
		var featured = $(this);
        var padding = featured.outerHeight() - featured.height();
		var height1 = featured.find(".text").children().outerHeight();
		var height2 = featured.find(".image").outerHeight();
        var height = Math.max(height1,height2) + padding;
		featured.css({"min-height":height});
//        console.log("text",height1,"image",height2,"result",height);
	});
}


/**
 *    Some helpers for neo4j.org
 */
var nav = {


    /**
     * Activate an item in the main menu
     */
    activateMain: function (category) {
        var rightAlign = { learn: "18.5em", java: "18.5em", develop: "15.5em", participate: "12em", install: "7.1em", download: "7.1em" };
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
     *    Initialize all thumbnails
     */
    initThumbnails: function () {
        $.each($('[data-src]'), function (i, tn) {
            var thumbnail = $(tn);
            var src = thumbnail.attr('data-src');

            if (src) {
                thumbnail.on('click', function () {

                    var url = src.indexOf("?") != -1 ? src : src + "?autoplay=1";
                    $.blockUI({
                        message: '<iframe src="' + url + '" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
                        css: {
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
                    $(document).keyup(function (e) {
                        e.preventDefault();
                        if (e.keyCode == 27) {
                            $.unblockUI({
                                fadeOut: 25
                            });
                        }
                    });

                    // Click outside dialog to close
                    $(document).on('mouseup', function (e) {
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
};


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

$(document).ready(function(){
    $(".lightbox").each(function() {
        var lb=$(this);
        var url=lb.attr("src");
        if (url==null) {
            console.log("No URL");
            console.log(lb);
        }
        lightbox(lb.attr("id"),url);
    });
    $("a[href^=http]").attr("target","_blank").click(function() {
		_gaq.push(['_trackEvent','outbound-neo4j',$(this).attr("href")]);
	});
    $("a.like").click(function(){
        var like = $(this);
        _gaq.push(['_trackEvent','neo4j-like-content',like.attr("data-like")]);
        like.css({fontSize: "1.5em"});
        like.animate({fontSize: "1em"},250);
        return false;
    });
    setTimeout(function(){
        $("iframe.newsletter").attr("src","http://info.neotechnology.com/2012Newsletters_NewsletterSubscriptioniframe.html");
    },100);

    $("#course_login").submit(function() {
        var email=$(this).find("input[name=email]").val();
        if (!email) return false;
        console.log(email);
        $.ajax("/api/versal",{
            data: JSON.stringify({email:email}),
            contentType: "application/json",
            accepts: "text",
            type: "post",
            error : function(error) {
                console.log("Error registering "+email+" for course",error);
                _kmq.push(['identify', email ]);
                _kmq.push(['record', 'neo4j-course-login-error', {email:email,data:error,course:online_course}]);
            },
            success: function(sessionId) {
                $("#course_login").hide();
                var player = $("#online_course_player");
                player.html('').show();
                _kmq.push(['identify', email ]);
                _kmq.push(['record', 'neo4j-course-login', {email:email,data:sessionId,course:online_course}]);
                _gaq.push(['_trackEvent','neo4j-course-login',email,online_course,sessionId]);

//                vs.onReady({ container: '#online_course_player', courseId: online_course, sessionId: sessionId });
                var origin = apiUrl.split('/').slice(0, -1).join('/');
                console.log("origin",origin);
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = origin + '/player2/scripts/versal.js';
                console.log(script);
                player[0].appendChild(script);
                window.addEventListener('message', function (e) {
                    console.log("message-event",e);
                    if (e.origin == origin && JSON.parse(e.data).event == 'player:ready') {
                        e.source.postMessage(JSON.stringify({
                            event: 'player:launch',
                            api: apiUrl,
                            course: online_course,
                            sid: sessionId
                        }), origin);
                    }
                });
            }
        });
        return false;
    });
});

function log(action, data) {
    data["action"]=action;
    $.ajax("/api/log", {type: "post", contentType:"application/json", global: false, data: JSON ? JSON.stringify(data) : data.toString() });
}

function renderConsole(url) {
    $('#console').html('<a class="btn" href="'+url+'" target="_blank">Open in new Window</a><iframe width="800" height="400" scrolling="yes" src="'+url+'"></iframe>');
}

function lightbox(id, url) {
    // console.log("Handling lightbox "+id+" "+url)

    var lightbox = $('#' + id);
    var iframe=lightbox.find(".lightbox-content iframe");
    if (lightbox.find(".lightbox-content .lightbox-header").length==0) {
        iframe.before('<div class="lightbox-header"> <button type="button" class="close" data-dismiss="lightbox" aria-hidden="true">&times;</button> </div>');
    }
    lightbox.on('show', function () {
        if (url.indexOf("?")==-1) url += "?badge=0&title=0&portrait=0&autoplay=1&rel=0&byline=0";
        iframe.attr("src",url).attr("height",$(window).height() / 1.2).attr("width",$(window).width() / 1.2);
    }).on('hide', function () {
        iframe.removeAttr("src");
    });
}



// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
