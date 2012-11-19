$(document).ready(function(){
    renderConsole("http://console.neo4j.org");
    $('#isotope').imagesLoaded(function($images){
        $(this).isotope({
            itemSelector : '.item'
        });
    });
});


function renderConsole(url) {
    console.log('hej',$('#console'));
    $('#console').html('<a class="btn" href="'+url+'" target="_blank">Open in new Window</a><iframe  width="800" height="400" src="'+url+'"/>');
}