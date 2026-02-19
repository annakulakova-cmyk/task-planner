function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    const userText = input.value.trim();

    if (userText === "") return;

    addMessage(userText, "user");
    input.value = "";

    setTimeout(() => {
        const botReply = generateReply(userText);
        addMessage(botReply, "bot");
    }, 500);
}

function addMessage(text, sender) {
    const chatBox = document.getElementById("chatBox");
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateReply(userText) {
    const text = userText.toLowerCase();

    if (text.includes("hello")) {
        return "Hi there!";
    } else if (text.includes("how are you")) {
        return "I'm just a simple bot, but I'm doing great!";
    } else if (text.includes("bye")) {
        return "Goodbye! Have a nice day!";
    } else {
        return "Sorry, I don't understand that.";
    }
}
