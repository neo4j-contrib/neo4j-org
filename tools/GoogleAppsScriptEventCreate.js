function onOpen() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var menuEntries = [{name:"Create all events",functionName:"createAllEvents"}];
    ss.addMenu("Events", menuEntries);
}


function createAllEvents() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var data =sheet.getDataRange().getValues();
    var labels = data[0];
    Logger.log('Labels %s, length=%s', labels, data.length);
    for(var i=1;i<data.length;i++) {
        var row =data[i];
        var title = row[1];
        Logger.log(row);
        if(!row[0] && title!=null && title.length > 0) {
            Logger.log("creating event for title '%s'", title);
            createEvent(title, row[2], row[3], row[4], row[5], row[6], row[7]);
            sheet.getRange(i+1,1,1,1).setValue(new Date());

        }
    }
}

function createEvent(eventTitle, eventStartTime, description, summary, location, image, url) {
    //Get the calendar
    var cal = CalendarApp.getCalendarsByName('alerts-test')[0];//Change the calendar name
    //var eventTitle = row[3];
    //var eventStartTimeDay = row[4];
    //var eventDuration = row[3];
    //var time = eventTime.split(':');
    //  var hour = time[0];
    //  var min = time[1];
    var eventEndTime = new Date(eventStartTime.valueOf()+3*60*60*1000);
    //Create the events
    cal.createEvent(eventTitle, eventStartTime,eventEndTime ,{description:"Description:"+description + "\n"+
        "Location:"+location + "\n"+
        "Image:"+image.toString() + "\n"+
        "Url:"+url.toString()});
}