function getServerResponse(inputText) {
    console.log('Processing - "' + inputText + '"');
    // TODO send user input off to server

    var dfd = $.Deferred();

    $.when($.post({
        url: 'api.php',
        data: {
            userInput: inputText
        }
    })).then(function(response) {
        console.log('Received response - "' + response.responseText + '"');
        dfd.resolve(response.responseText);
    });

    return dfd.promise();
}

function actOnSpeechRecognitionResult(text) {
    $.when(getServerResponse(text)).then(function(responseText) {
        $('#response_from_sdsrs').text(responseText);
    });
}
