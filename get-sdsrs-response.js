function getServerResponse(inputText) {
    var userInput = $('#results').text();
    // TODO send user input off to server

    var responseText = "This is a sample response. Yo yo yo!";
    return responseText;
}

function actOnSpeechRecognitionResult(text) {
    var response = getServerResponse(text);
    console.log(response);
}
