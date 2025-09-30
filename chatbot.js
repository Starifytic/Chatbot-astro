const OPENAI_KEY = "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"; // Only for demo/personal use

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function showTyping() {
    const chatbox = document.getElementById("chatbox");
    const div = document.createElement("div");
    div.classList.add("message", "bot");
    div.id = "typingIndicator";
    div.textContent = "Bot is typing...";
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function hideTyping() {
    const div = document.getElementById("typingIndicator");
    if (div) div.remove();
}

function addMessage(sender, msg) {
    const chatbox = document.getElementById("chatbox");
    const div = document.createElement("div");
    div.classList.add("message", sender);
    div.textContent = msg;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

async function fetchAIResponse(prompt) {
    try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 150
            })
        });
        const data = await res.json();
        return data.choices[0].message.content;
    } catch {
        return "AI is unavailable right now.";
    }
}

async function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hi") || input.includes("hello")) return "Hello there!";
    if (input.includes("bye")) return "Goodbye!";
    if (input.includes("office") || input.includes("location")) return "The office is in UCP-037, Bengal Ambuja, City Center, Opposite to Hotel Banerjee Inn Durgapur, West Bengal";
    if (input.includes("fees") || input.includes("consultation charge")) return "The fee is 1,000 and it is valid for 1 month";
    if (input.includes("gemstone")) return "Yes, Gemstones are sold here. The gemstone to be prescribed depends on your horoscope.";
    if (input.includes("private")) return "Your information is 100% confidential.";
    if (input.includes("timings") || input.includes("consult")) return "Day: 10:30-1pm, Evening: 6-9pm, Sundays off.";

    showTyping();
    await sleep(1200);
    const answer = await fetchAIResponse(input);
    hideTyping();
    return answer;
}

document.getElementById("sendBtn").addEventListener("click", async () => {
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (!text) return;

    addMessage("user", "You: " + text);
    const reply = await getBotResponse(text);
    await sleep(400);
    addMessage("bot", "Bot: " + reply);

    input.value = "";
    input.focus();
});

document.getElementById("userInput").addEventListener("keypress", e => {
    if (e.key === "Enter") document.getElementById("sendBtn").click();
});
