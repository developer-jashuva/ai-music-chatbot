
# AI Music Chatbot

## 🎵 Overview
AI Music Chatbot is an intelligent chatbot that recommends songs based on the tone of the conversation. Built using the **MERN stack**, it leverages the **Google Gemini API** for mood analysis and fetches song recommendations accordingly.

## 🚀 Features
- **Conversational AI**: Detects user mood from text conversation.
- **Song Recommendations**: Suggests songs based on emotions detected.
- **Voice Input Support** (Planned): Allows users to interact via voice.
- **Dark Mode** (Planned): User-friendly dark theme for better UX.
- **Multilingual Support** (Planned): Supports multiple languages.
- **Spotify API Integration**: Fetches **Telugu songs by default**.

## 🛠️ Tech Stack
- **Frontend**: React.js (with plain HTML/CSS)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: Google Gemini API (for mood analysis)
- **Deployment**: Vercel

## 📂 Project Structure
```
📦 AI-Music-Chatbot
 ┣ 📂 client  # Frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📜 App.js
 ┃ ┃ ┣ 📜 index.js
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 styles
 ┣ 📂 server  # Backend
 ┃ ┣ 📂 routes
 ┃ ┣ 📜 server.js
 ┣ 📜 README.md
 ┣ 📜 package.json
```

## 🎯 How It Works
1. **User sends a message** ➝ Chatbot processes text.
2. **Google Gemini API analyzes the mood** of the text.
3. **Chatbot fetches song recommendations** based on mood.
4. **Displays song suggestions** to the user.

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/AI-Music-Chatbot.git
cd AI-Music-Chatbot
```
### 2️⃣ Install Dependencies
```sh
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```
### 3️⃣ Start the Application
```sh
# Run frontend
cd client
npm start

# Run backend
cd ../server
npm start
```
### 4️⃣ Open in Browser
Go to `http://localhost:3000/`

## 🌐 Deployment
The chatbot is deployed on **Vercel** and can be accessed here:
🔗 [Live Demo](https://ai-music-chatbot.vercel.app/)

## 🤝 Contribution
1. Fork the repo.
2. Create a new branch (`feature-xyz`).
3. Commit changes.
4. Push to your branch.
5. Open a Pull Request.

## 📜 License
This project is **open-source** and available under the **MIT License**.

---
💡 **Future Enhancements:**
- **Integration with YouTube Music & Apple Music**
- **Real-time chatbot improvements**
- **Emotion-based playlist creation**

🔹 **Developed by:** Developer-Jashuva 🚀

