from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

# 👇 THIS LINE MAKES JS WORK
@app.route('/js/<path:filename>')
def serve_js(filename):
    return send_from_directory('js', filename)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/employees')
def employees():
    return render_template('employees.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/calendar')
def calendar():
    return render_template('calendar.html')

@app.route('/attendance')
def attendance():
    return render_template('attendance.html')

@app.route('/salary')
def salary():
    return render_template('salary.html')

@app.route('/meetings')
def meetings():
    return render_template('meetings.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')


@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

if __name__ == '__main__':
    app.run(debug=True)