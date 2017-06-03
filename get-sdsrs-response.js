function getServerResponse(inputText) {
    console.log('Processing - "' + inputText + '"');
    // TODO send user input off to server

    var responseText = "This is a sample response. Yo yo yo!";

    console.log('Received response - "' + responseText + '"');
    return responseText;
}

function actOnSpeechRecognitionResult(text) {
    var response = getServerResponse(text);

    $('#response_from_sdsrs').text(response);
}
