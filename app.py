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

@app.route('/resume')
def resume():
    return render_template('resume.html')


if __name__ == '__main__':
    app.run(debug=True)