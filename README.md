# 🤖 AI-ChatBot  

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://react.dev/)  
[![Vite](https://img.shields.io/badge/Bundler-Vite-purple?logo=vite)](https://vitejs.dev/)  
[![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)  
[![Python](https://img.shields.io/badge/Backend-Python-yellow?logo=python)](https://www.python.org/)  
[![Flask](https://img.shields.io/badge/API-Flask-000000?logo=flask)](https://flask.palletsprojects.com/)  
[![Gemini](https://img.shields.io/badge/AI-Gemini%20Flash%202.0-4285F4?logo=google)](https://ai.google.dev/gemini-api)  

An AI-powered chatbot with a **React (Vite) frontend** and a **Python Flask backend**, powered by **Google Gemini Flash 2.0 API**.  
The project is modular, scalable, and built for real-world deployment.  

---

## 📂 Project Structure  

```sh
AI-ChatBot/
│── frontend/ # React + Vite frontend (UI)
│ ├── src/
│ ├── package.json
│ └── vite.config.js
│
│── backend/ # Python backend (Flask API + Gemini)
│ ├── app.py
│ ├── requirements.txt
│ └── .env
│
│── .gitignore
│── README.md
```
---

## 🚀 Features  

- 🤖 Conversational AI powered by **Gemini Flash 2.0 API**  
- 🌐 **Frontend:** React + Vite + TailwindCSS  
- ⚡ **Backend:** Python Flask REST API  
- 🔗 Secure communication between frontend & backend  
- 🔒 API key management via `.env`  
- 📦 Easy local development and deployment  

---

## 🛠️ Tech Stack  

**Frontend**  
- ⚛️ React (Vite)  
- 🎨 Tailwind CSS  

**Backend**  
- 🐍 Python  
- 🧩 Flask  
- 🔮 Gemini Flash 2.0 API  

**Others**  
- 📦 Node.js & npm  
- 🛡️ Virtual Environment (venv)  

---

## ⚙️ Setup & Installation  

### 1️⃣ Clone the Repository 

```sh
git clone https://github.com/OmkarYelsange/AI-ChatBot.git
cd AI-ChatBot
```

### 2️⃣ Frontend Setup
```sh
cd frontend
npm install
npm run dev
```
👉 Frontend runs at: http://localhost:5173/

### 3️⃣ Backend Setup
```sh
cd backend
python -m venv venv

# Activate Virtual Environment
venv\Scripts\activate     # On Windows
source venv/bin/activate  # On Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Run server
python app.py
```
👉 Backend runs at: http://localhost:5000/

### 📡 API Endpoints

Method	Endpoint	Description
- POST	/chat	Send a user query to Gemini 
- GET	/health	Check backend server status

### 📜 Environment Variables
Create a .env file inside backend/ with the following:

env
```sh
GEMINI_API_KEY=your_gemini_api_key_here
```
--- 

### 📸 Screenshots
Coming Soon ...

---

### 🤝 Contributing
Contributions are welcome! 🚀

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---

### 📄 License
This project is licensed under the MIT License.

---

### 👨‍💻 Author
Omkar Yelsange

🌐 [[ LinkedIn ]:( https://www.linkedin.com/in/omkar-yelsange )]
💻 [[ GitHub ]:( https://github.com/OmkarYelsange )]




