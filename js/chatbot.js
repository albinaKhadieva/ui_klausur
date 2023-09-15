// HTML-Elemente auswählen
const chatContainer = document.getElementById("chat-container");
const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Event-Handler für den Senden-Button hinzufügen
sendButton.addEventListener("click", function() {
    sendMessage();
});

// Funktion, um eine Nachricht zu senden und auf die Nachricht des Benutzers zu antworten
function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    // Nachricht des Benutzers anzeigen
    displayMessage("user", userMessage);

    // Hier kannst du die Logik des Chatbots hinzufügen und auf die Benutzeranfragen antworten
    // Zum Beispiel kannst du eine einfache Antwort generieren:
    const botResponse = generateResponse(userMessage);

    // Antwort des Chatbots anzeigen
    displayMessage("bot", botResponse);

    // Eingabefeld leeren
    userInput.value = "";
}

// Funktion, um eine Nachricht im Chat anzuzeigen
function displayMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
}

// ...
function generateResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("hallo") || lowerCaseMessage.includes("hi")) {
        return "Hallo! Möchten Sie über das Wetter, Roboter oder das Universum plaudern?";
    } else if (lowerCaseMessage.includes("wie geht es dir")) {
        return "Ich habe keinen Körper, aber ich bin in bester Stimmung!";
    } else if (lowerCaseMessage.includes("öffne die Website")) {
        return "Oh, du bist so witzig! Ich kann leider keine Websites öffnen, aber ich kann versuchen, deine Fragen zu beantworten.";
    } else if (lowerCaseMessage.includes("danke")) {
        return "Keine Ursache! Kann ich dir eine witzige Tatsache über Gänseblümchen erzählen?";
    } else if (lowerCaseMessage.includes("was ist der Sinn des Lebens")) {
        return "Der Sinn des Lebens ist 42, zumindest laut Douglas Adams' 'Per Anhalter durch die Galaxis.' Oder wir könnten über Schokolade sprechen, das ist auch ziemlich bedeutungsvoll.";
    } else if (lowerCaseMessage.includes("pizza")) {
        return "Pizza ist großartig! Welche Art von Belag bevorzugen Sie? Ich bin ein Fan von 'Alles, was du im Kühlschrank findest.'";
    } else if (lowerCaseMessage.includes("liebst du mich?")) {
        return "Ich bin ein Bot, ich habe kein Herz, aber ich mag Ihre Gesellschaft!";
    } else {
        return "Ich bin ein bisschen durcheinandergekommen. Bitte stellen Sie eine klare Frage, und ich werde mein Bestes tun, um zu antworten!";
    }
}
// ...
