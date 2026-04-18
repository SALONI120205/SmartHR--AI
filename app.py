from flask import Flask, render_template, request, jsonify, send_from_directory
import os
import random

app = Flask(__name__)

# ---------------- CONFIG ---------------- #

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


# ---------------- MAIN ROUTES ---------------- #

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/employees")
def employees():
    return render_template("employees.html")


@app.route("/calendar")
def calendar():
    return render_template("calendar.html")


@app.route("/attendance")
def attendance():
    return render_template("attendance.html")


@app.route("/salary")
def salary():
    return render_template("salary.html")


@app.route("/meetings")
def meetings():
    return render_template("meetings.html")


@app.route("/resume")
def resume():
    return render_template("resume.html")


@app.route("/gallery")
def gallery():
    return render_template("gallery.html")


# ---------------- IMPORTANT FIX (FOR YOUR JS) ---------------- #
# This allows onclick="go('dashboard.html')" to work

@app.route("/<page>")
def load_html_page(page):
    try:
        return render_template(page)
    except:
        return "Page not found", 404


# ---------------- AI RESUME API ---------------- #

@app.route("/analyze", methods=["POST"])
def analyze():
    file = request.files.get("resume")

    if not file:
        return jsonify({"error": "No file uploaded"})

    filepath = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
    file.save(filepath)

    # Fake AI score
    score = random.randint(50, 95)
    result = "✅ Selected" if score > 65 else "❌ Rejected"

    return jsonify({
        "score": score,
        "result": result
    })


# ---------------- DOWNLOAD FILE ---------------- #

@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename)


# ---------------- RUN ---------------- #

if __name__ == "__main__":
    app.run(debug=True)