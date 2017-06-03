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

function speakText(text) {
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}

function actOnSpeechRecognitionResult(text) {
    $.when(getServerResponse(text)).then(function(responseText) {
        // Display text output
        $('#response_from_sdsrs').text(responseText);

        // Read text out load
        speakText(responseText);
    });
}
