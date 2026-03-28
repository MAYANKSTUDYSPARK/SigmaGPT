import fetch from "node-fetch";

export const chatWithAI = async (message) => {
        const option = {
                method: "POST",
                headers: {
                        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                        "Content-Type": "application/json"
                },
                body: JSON.stringify({
                        model: "llama3-70b-8192",
                        messages: [
                                { role: "user", content: message }
                        ]
                })
        };
        
        const response = await fetch(
                "https://api.groq.com/openai/v1/chat/completions",
                option
        );
        
        const data = await response.json();
        return data.choices[0].message.content;
};
export default chatWithAI;
