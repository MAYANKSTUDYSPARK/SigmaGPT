import fetch from "node-fetch";

export const chatWithAI = async (message) => {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "user", content: messages }
          ]
        })
      }
    );

    const data = await response.json();

    // 🔍 DEBUG
    console.log("API RESPONSE:", data);

    // 🛑 SAFE CHECK
    if (!data || !data.choices || data.choices.length === 0) {
      return "AI se response nahi mila";
    }

    return data.choices[0].message.content;

  } catch (error) {
    console.error("ERROR:", error);
    return "Server error";
  }
};

export default chatWithAI;
