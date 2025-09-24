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
        return "The fee is 1,000 and it is valid for 1 month";
    } else if (input.includes("what information do you need for a consultation?") || input.includes("information for a consultation?")) {
        return " Usually date of birth, time of birth, and place of birth. If exact birth time is not known, other methods like palmistry, numerology, or Prashna (horary astrology) can be used.";
    } else if (input.includes("how accurate are astrology predictions?") || input.includes("accuracy") ) {
        return " Accuracy depends on correct birth details and interpretation. Astrology gives guidance and tendencies, not fixed guarantees.";
    } else if (input.includes("how long does astrology predictions take?") || input.includes("how long it takes?") ) {
        return " Typically 20 to 60 minutes depending on the depth (basic reading, detailed life chart, relationship, career, etc.).";
    } else if (input.includes("do we get any gemstones?")|| input.includes("what gemstone should I use?")) {
        return "Yes, Gemstones are sold here. The gemstone to be prescribed depends on your horoscope.";
    } else if (input.includes("can astrology change my future?")|| input.includes("will astrology change my future?")) {
        return "Astrology shows possible paths and timing. Remedies (gemstones, mantras, rituals, lifestyle changes) can help improve outcomes, but free will and actions also matter.";
    } else if(input.includes("is my information kept private?")){
        return "Yes, your information is 100% confidential and is maintained. Your details and chart are not shared with anyone.";
    } else if(input.includes("Can I consult online or only in person?")){
        return "Both options are available (phone, WhatsApp, Zoom, or in-office).";
    }else if(input.includes("How often should I consult an astrologer?")){
        return "Once for a detailed life reading, and then whenever you face major decisions or challenges (career, marriage, business, health).";
     } else if(input.includes("What are the office timings?")|| input.includes("timings?")){
        return"The timings are as follows: 1. Day Timings are from 10:30 am to 1 pm, 2. Evening timings are from 6 pm to 9 pm 3. Sundays are off.";
    } else {
        return "Sorry, I don't understand. Please get in touch with Shastri Ji at mobile no 9609604638";
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


