from flask import Flask, render_template, request,redirect,session ,send_from_directory

app = Flask(__name__)
app.secret_key = "secret123"

# LOGIN PAGE
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # simple demo login
        if username == "admin" and password == "1234":
            session['user'] = username
            return redirect('/dashboard')
        else:
            return "Invalid Credentials ❌"

    return render_template('login.html')


@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect('/')
# 👇 THIS LINE MAKES JS WORK
@app.route('/js/<path:filename>')
def serve_js(filename):
    return send_from_directory('js', filename)


@app.route('/')
def home():
    if 'user' not in session:
     return redirect('/')
    return render_template('index.html')

@app.route('/employees')
def employees():
    if 'user' not in session:
     return redirect('/')
    return render_template('employees.html')

@app.route('/dashboard')
def dashboard():
    if 'user' not in session:
     return redirect('/')
    return render_template('dashboard.html')

@app.route('/calendar')
def calendar():
    if 'user' not in session:
     return redirect('/')
    return render_template('calendar.html')

@app.route('/attendance')
def attendance():
    if 'user' not in session:
     return redirect('/')
    return render_template('attendance.html')

@app.route('/salary')
def salary():
    if 'user' not in session:
     return redirect('/')
    return render_template('salary.html')

@app.route('/meetings')
def meetings():
    if 'user' not in session:
     return redirect('/')
    return render_template('meetings.html')

@app.route('/resume')
def resume():
    if 'user' not in session:
     return redirect('/')
    return render_template('resume.html')


@app.route('/gallery')
def gallery():
    if 'user' not in session:
     return redirect('/')
    return render_template('gallery.html')

if __name__ == '__main__':
    app.run(debug=True)