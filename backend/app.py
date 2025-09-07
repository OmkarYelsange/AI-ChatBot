import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai

# Load env
load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")
HOST = os.getenv("HOST", "127.0.0.1")
PORT = int(os.getenv("PORT", "5000"))

if not API_KEY:
    raise RuntimeError("GEMINI_API_KEY missing in .env")

# Configure Gemini
genai.configure(api_key=API_KEY)

# Choose a fast model
model = genai.GenerativeModel(
    model_name="gemini-2.0-flash",
    generation_config={
        "temperature": 0.3,
        "top_p": 0.9,
        "max_output_tokens": 512
    }
)
# keep a lightweight chat session
chat = model.start_chat()

# Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.get("/health")
def health():
    return jsonify({"ok": True})

@app.post("/chat")
def chat_route():
    data = request.get_json(silent=True) or {}
    user_input = data.get("message", "").strip()
    if not user_input:
        return jsonify({"error": "No message provided"}), 400
    try:
        # NOTE: for even snappier UX, keep replies concise
        response = chat.send_message(user_input)
        text = (response.text or "").strip()
        return jsonify({"reply": text})
    except Exception as e:
        return jsonify({"error": f"{type(e).__name__}: {str(e)}"}), 500

if __name__ == "__main__":
    # Debug for local dev; remove or set False in prod
    app.run(host=HOST, port=PORT, debug=True)
