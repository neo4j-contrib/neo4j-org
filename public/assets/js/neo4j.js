$(document).ready(function(){
    $('#isotope').imagesLoaded(function($images){
        $(this).isotope({
            itemSelector : 'li',layoutMode:"masonry",
            masonry: {
                columnWidth:240
            }
        });
    });
    $(".lightbox").each(function() {
        var lb=$(this);
        var url=lb.attr("src");
        if (url==null) {
            console.log("No URL");
            console.log(lb);
        }
        lightbox(lb.attr("id"),url);
    });
});


function renderConsole(url) {
    $('#console').html('<a class="btn" href="'+url+'" target="_blank">Open in new Window</a><iframe width="800" height="400" src="'+url+'"/>');
}

function lightbox(id, url) {
    console.log("Handling lightbox "+id+" "+url)

    var lightbox = $('#' + id);
    var iframe=lightbox.find(".lightbox-content iframe");
    if (lightbox.find(".lightbox-content .lightbox-header").length==0) {
        iframe.before('<div class="lightbox-header"> <button type="button" class="close" data-dismiss="lightbox" aria-hidden="true">&times;</button> </div>');
    }
    lightbox.on('show', function () {
        url+="?badge=0&title=0&portrait=0&autoplay=1&rel=0";
        iframe.attr("src",url);
    }).on('hide', function () {
        iframe.removeAttr("src");
    });
}

