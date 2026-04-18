from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():
    file = request.files['resume']

    if not file:
        return jsonify({"error": "No file"})

    # Fake AI scoring
    score = random.randint(40, 95)

    result = "Selected" if score > 60 else "Rejected"

    return jsonify({
        "score": score,
        "result": result
    })

if __name__ == "__main__":
    app.run(debug=True)