function doPost(e) {
    if (e.parameter.hasOwnProperty('callback')) {
        var callback = e.parameter.callback;
        var output = JSON.stringify({ message: "Success" }); // Adjust as needed
        var jsonResponse = callback + '(' + output + ')';
        return ContentService.createTextOutput(jsonResponse).setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    try {
        var ss = SpreadsheetApp.openById("1_7GGyPG8UE7-_DhEu3wnFOHNud7KMw7WmaSpYIahgwU");
        var sheet = ss.getSheetByName("Patient data"); 
        var data = JSON.parse(e.postData.contents);

        var rowData = [
            data.telephone,
            data.firstName,
            data.lastName,
            data.dateOfBirth,
            data.idNumber,
            data.address,
            data.county,
            data.subCounty,
            data.email,
            data.gender,
            data.maritalStatus,
            data.kinName,
            data.kinDateOfBirth,
            data.kinIdNumber,
            data.kinGender,
            data.relationship,
            data.kinTelephone
        ];

        sheet.appendRow(rowData);

        return ContentService.createTextOutput("Success");
    } catch (error) {
        return ContentService.createTextOutput("Error: " + error.message);
    }
}
