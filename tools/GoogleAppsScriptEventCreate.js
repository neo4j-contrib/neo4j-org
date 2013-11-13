function onOpen() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var menuEntries = [{name:"Create all events",functionName:"createAllEvents"}];
    ss.addMenu("Events", menuEntries);
}


//Created(0) Entered(1) Author(2)   Title(3)        Start(5)    Duration(6)      Url(8)    Description(11) Language(12)    Type(13)    Area(14)    City(15)    Location(16)    Presenter(17)   Twitter(18) Portrait(19)    Company(20) Bio(21) Group(22)   Meetup(23)    Image(25) Timezone(26)

function createAllEvents() {
    var sheet = SpreadsheetApp.getActiveSheet();
    Logger.log(sheet);
    var data =sheet.getDataRange().getValues();
    var labels = data[0];
//    Logger.log('Labels %s, length=%s', labels, data.length);
    for(var i=1;i<data.length;i++) {
        var row =data[i];
//        Logger.log(row);
        var item={};
        for(var col=1;col<28;col++) {
            if (labels[col] && labels[col].length>0) {
                item[labels[col]]=row[col];
            }
        }
//        Logger.log(item);
        if(!row[0] && item['Title']!=null && item['Title'].length > 0) {
            Logger.log("creating event for title '%s'", data['Title']);
            createEvent(item.Title, item.Start, item);
            sheet.getRange(i+1,1,1,1).setValue(new Date());
        }
    }
}

function wrap(prefix,value,suffix) {
    var str="";
    if (value) {
        if (prefix) str=prefix;
        str+=value.toString();
        if (suffix) str+=suffix;
    }
    return str;
}

// todo rather have a <span id="Title"> around it
function renderDescription(data,start) {
    var str="";
    str += "Title: <a target='_blank' href='"+data['Url']+"'>"+wrap(data['Type']," - ")+data['Title']+wrap(" - ",data['City'])+"</a>\n\n<br/>";
    str += "Start: "+start+"\n\n<br/>"; // .format("dddd, mmmm dS, yyyy, h:MM:ss TT")
    str += "Location: "+data['Location']+"\n\n<br/>";
    str += "<img src='"+data['Image']+"'/>\n\n<br/>";
    str += "Description: "+data['Abstract']+"\n\n<br/>";
    str += "Presenter: <a target='_blank' href='http://twitter.com/"+data['Twitter']+"'>"+data['Presenter']+wrap(" - ",data['Company'])+"</a>\n\n<br/>";
    str += wrap("<a target='_blank' href='http://twitter.com/"+data['Twitter']+"'><img src='",data['Portrait'],"'/></a>\n\n<br/>");
    str += wrap("",data['Bio'],"\n\n<br/>");
    if (data['Meetup']) {
        str+=wrap("<iframe width='300' height='300' src='http://meetup.com/",data['Group'] + "/events/" + data['Meetup'],"'></iframe>")
    }
    /*
     for (var k in data) {
     if (data.hasOwnProperty(k) && data[k]) {
     str += k+": "+data[k].toString()+"\n\n";
     }
     }
     Logger.log(str);
     */
    return str;
}

function createTimezoneDate(start, timezone) {
    var lookups = { PT : "PDT", ET: "EDT",MT: "MDT", CT: "CDT", CEST: "GMT+0200", CET: "GMT+0100",BST:"GMT+0100",AEST:"GMT+1000",IST:"GMT+0530"}
    if (timezone.match(/^GMT[+-]\d$/)) {
        timezone = timezone.replace(/^(GMT[+-])(\d)$/,"$10$200");
    } else
    if (timezone.match(/^GMT[+-]\d\d$/)) {
        timezone += "00";
    } else {
        timezone = lookups[timezone] || timezone;
    }
    var timeString = start.toDateString()+" "+start.toTimeString().replace(/ .+$/," "+timezone);
    var startTz = new Date(timeString);
    Logger.log("start %s timeString %s startTz %s TZ #%s#",start,timeString,startTz,timezone);
    return isNaN(startTz) ? start : startTz;
}

function createEvent(title, start, data) {
    //Get the calendar
    var cal = CalendarApp.getCalendarsByName('Neo4j Events')[0];//Change the calendar name
    var startTz = createTimezoneDate(start,data.Timezone);
    var end = new Date(startTz.valueOf()+parseInt(data['Duration']||1)*60*60*1000);
    //Create the events
    var desc=renderDescription(data,startTz);
    var initials={ED: "ehren.duisberg@neotechnology.com", EL: "edward.lombardo@neopersistence.com",
        DM: "Dirk.moeller@neotechnology.com", DAX: "dax.schumann@neotechnology.com", RVB: "rik@neotechnology.com",
        AV: "arturas.verbickas@neotechnology.com", ML: "mike.linetsky@neopersistence.com", CF: "cedric.fauvet@neotechnology.com",
        RB: "ruma.bose@neotechnology.com",MH: "michael@neotechnology.com",AH: "adam.herzog@neotechnology.com", NB: "naveena.bereny@neopersistence.com"};
    var guests = data.Invite.split(/[, ]+/).map(function(i) {
        return i.match(/@/) ? i : initials[i];
    }).join(',');
    var options = {location: data['Location'], description:desc, guests: guests,sendInvites:true };
    Logger.log("creating event for title '%s %s (%s) %s %s \n=====\n\n\n%s'", title,start,startTz,end,guests,desc);
    var event = cal.createEvent(wrap(data['Type']," - ")+title+wrap(" - ",data['City']), startTz,end ,options);
    Logger.log("creating event for title '%s'", event);
}