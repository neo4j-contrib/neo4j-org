//Endpoints:
//POST https://script.google.com/a/macros/neopersistence.com/s/AKfycbyqIsN-_D94_406DM1qjSc5GyktWf6miAscmZ-hhVEvQ59QZQO2/exec?addRow=test&url=htp&logourl=img&language=DE
//POST https://script.google.com/a/macros/neopersistence.com/s/AKfycbyqIsN-_D94_406DM1qjSc5GyktWf6miAscmZ-hhVEvQ59QZQO2/exec?voteRow=10

function doPost(e) {
    try {
        Logger.log(new Date() + 'Polls form submitted');
        var ss = SpreadsheetApp.openByUrl("https://docs.google.com/a/neopersistence.com/spreadsheet/ccc?key=0AvhGAQ-et4qYdDV0dnVUQVhnU1hJTjhTeXFrbWlnR3c");
        var sheet = ss.getSheets()[0];
        Logger.log("sheet:"+sheet+ " voteRow" + e.parameter.voteRow);
        if(e.parameter.voteRow!=undefined) {
            var cell=sheet.getRange(e.parameter.voteRow,2,1,1);
            Logger.log("sheet:"+cell);
            var new_votes=cell.getValue()+1;
            cell.setValue(new_votes);
        }
        var addRow = e.parameter.addRow;
        Logger.log("sheet:"+sheet+ " addRow" + addRow);
        if(addRow) {
            var nrOfRows = sheet.getDataRange().getNumRows();
            Logger.log("adding row:"+e.parameter.addRow+" "+ nrOfRows);
            var i = nrOfRows+1;
            sheet.insertRowAfter(nrOfRows);
            sheet.getRange(i,1,1,1).setValue(e.parameter.addRow);
            sheet.getRange(i,2,1,1).setValue(1);
            sheet.getRange(i,3,1,1).setValue(e.parameter.url);
            sheet.getRange(i,4,1,1).setValue(e.parameter.logourl);
            sheet.getRange(i,5,1,1).setValue(e.parameter.language);
            return Logger.getLog();

        }
    } catch (e) {
        Logger.log(e);
    }
}

function testPost() {
    return doPost({parameter:{addRow:"test"}});
}
       