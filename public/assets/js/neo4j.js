$(document).ready(function(){
    $('#isotope').imagesLoaded(function($images){
        $(this).isotope({
            itemSelector : 'li',layoutMode:"masonry",
            masonry: {
                columnWidth:240
            }
        });
    });

});


function renderConsole(url) {
    $('#console').html('<a class="btn" href="'+url+'" target="_blank">Open in new Window</a><iframe width="800" height="400" src="'+url+'"/>');
}
