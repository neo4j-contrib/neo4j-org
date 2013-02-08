//Endpoints:
//POST https://script.google.com/a/macros/neopersistence.com/s/AKfycbyqIsN-_D94_406DM1qjSc5GyktWf6miAscmZ-hhVEvQ59QZQO2/exec?addRow=test&url=htp&logourl=img&language=DE
//POST https://script.google.com/a/macros/neopersistence.com/s/AKfycbyqIsN-_D94_406DM1qjSc5GyktWf6miAscmZ-hhVEvQ59QZQO2/exec?voteRow=10

function doPost(e) {
    Logger.log('Polls form submitted with vote for ' + Logger.log('Polls application reached, accessing with parameters = ' + e.parameter.voteRow));
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/a/neopersistence.com/spreadsheet/ccc?key=0AvhGAQ-et4qYdDV0dnVUQVhnU1hJTjhTeXFrbWlnR3c");
    var sheet = ss.getSheets()[0];
    Logger.log("sheet:"+sheet);
    if(e.parameter.voteRow!=undefined) {
        var cell=sheet.getRange(e.parameter.voteRow,2,1,1);
        Logger.log("sheet:"+cell);
        var new_votes=cell.getValue()+1;
        cell.setValue(new_votes);
    }

    if(e.parameter.addRow!=undefined) {
        var cells=sheet.getDataRange();
        Logger.log("adding row:"+row);
        var row = e.parameter.addRow;
        Logger.log("rows:"+cells.getNumRows());
        sheet.insertRowAfter(cells.getNumRows());
        Logger.log("rows:"+cells.getNumRows());
        sheet.getRange(cells.getNumRows()+1,1,1,1).setValue(row);
        sheet.getRange(cells.getNumRows()+1,2,1,1).setValue(1);
        sheet.getRange(cells.getNumRows()+1,3,1,1).setValue(e.parameter.url);
        sheet.getRange(cells.getNumRows()+1,4,1,1).setValue(e.parameter.logourl);
        sheet.getRange(cells.getNumRows()+1,5,1,1).setValue(e.parameter.language);

    }

    return "ok";
}
