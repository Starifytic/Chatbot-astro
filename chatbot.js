// Function to generate bot response
function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hi") || input.includes("hello")) {
        return "Hello there!";
    } else if (input.includes("bye")) {
        return "Goodbye!";
    } else if (input.includes("office") || input.includes("location")) {
        return "The office is in UCP-037, Bengal Ambuja, City Center, Opposite to Hotel Banerjee Inn Durgapur, West Bengal";
    } else if (input.includes("fees") || input.includes("consultation charge")) {
        return "The fees is 1,000 and it is valid for 1 month";
    } else if (input.includes("what information do you need for a consultation?") || input.includes("information for a consultation?")) {
        return " Usually date of birth, time of birth, and place of birth. If exact birth time is not known, other methods like palmistry, numerology, or Prashna (horary astrology) can be used.";
    } else if (input.includes("how accurate are astrology predictions?") || input.includes("accuracy") ) {
        return " Accuracy depends on correct birth details and interpretation. Astrology gives guidance and tendencies, not fixed guarantees.";
    } else {
        return "Sorry, I don't understand.";
    }
}

// Add message to chat
function addMessage(sender, message) {
    const chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<div class="${sender}">${sender === "user" ? "You" : "Bot"}: ${message}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight; // auto scroll
}

// Handle user input
document.getElementById("sendBtn").addEventListener("click", () => {
    const userInput = document.getElementById("userInput");
    const userText = userInput.value.trim();

    if (userText !== "") {
        addMessage("user", userText);
        let botResponse = getBotResponse(userText);
        addMessage("bot", botResponse);
    }

    userInput.value = "";
});

// Allow pressing Enter key
document.getElementById("userInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        document.getElementById("sendBtn").click();
    }
});
