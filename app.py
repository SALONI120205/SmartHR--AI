from flask import Flask, render_template, request, jsonify, send_from_directory
import os
import random

app = Flask(__name__)

# Folder for resume uploads
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


# ---------------- ROUTES ---------------- #

# Home Page
@app.route("/")
def home():
    return render_template("index.html")


# Dashboard
@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


# Employees Page
@app.route("/employees")
def employees():
    return render_template("employees.html")


# Resume Page
@app.route("/resume")
def resume_page():
    return render_template("resume.html")


# Attendance
@app.route("/attendance")
def attendance():
    return render_template("attendance.html")


# Salary
@app.route("/salary")
def salary():
    return render_template("salary.html")


# Meetings
@app.route("/meetings")
def meetings():
    return render_template("meetings.html")


# Gallery
@app.route("/gallery")
def gallery():
    return render_template("gallery.html")


# ---------------- AI RESUME API ---------------- #

@app.route("/analyze", methods=["POST"])
def analyze():
    file = request.files.get("resume")

    if not file:
        return jsonify({"error": "No file uploaded"})

    filepath = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
    file.save(filepath)

    # Fake AI Score
    score = random.randint(50, 95)
    result = "✅ Selected" if score > 65 else "❌ Rejected"

    return jsonify({
        "score": score,
        "result": result
    })


# Download uploaded files
@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename)


# ---------------- RUN ---------------- #

if __name__ == "__main__":
    app.run(debug=True)