
import React, { useState } from "react";

import "./Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { sender: "User", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);
//https://ai-music-chatbot-backend.onrender.com
//http://localhost:5000
    try {
      const response = await fetch("https://ai-music-chatbot-backend.onrender.com/analyze-mood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      
      const botMessage = {
        sender: "Bot",
        text: `Detected Mood: ${data.mood}`,
      };

      let songMessages = [];
      if (Array.isArray(data.songs) && data.songs.length > 0) {
        const validSongs = data.songs.filter((song) => song !== null && song.external_urls);

        if (validSongs.length > 0) {
          songMessages = validSongs.map((song) => ({
            sender: "Bot",
            text: `🎵 ${song.name} - ${song.description ? song.description.split(".")[0] : "Unknown Artist"}`,
            link: song.external_urls.spotify,
            image: song.images && song.images.length > 0 ? song.images[0].url : "https://via.placeholder.com/50"
          }));
        } else {
          songMessages.push({ sender: "Bot", text: "No valid song recommendations found." });
        }
      } else {
        songMessages.push({ sender: "Bot", text: "No song recommendations found for this mood." });
      }

      setMessages((prev) => [...prev, botMessage, ...songMessages]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { sender: "Bot", text: "Sorry, something went wrong. Try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
  
      <main className="main-content">
        <div className="chatbot-box">
          <h2 className="chatbot-title">Chat with AI 🎵 <br /> <span> (send your thoughts and get music)</span> </h2>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "User" ? "user-message" : "bot-message"}>
                <strong>{msg.sender}:</strong> {msg.text}
                {msg.link && (
                  <div className="song-recommendation">
                    <img src={msg.image} alt="Song Cover" className="song-image" /> <br/>
                    <a href={msg.link} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
                  </div>
                )}
              </div>
            ))}
            {loading && <p className="loading">Fetching songs...</p>}
          </div>
          <div className="chatbot-input-container">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage} disabled={loading}>Send</button>
          </div>
        </div>
      </main>
    
    </div>
  );
}

export default Chatbot;

