from flask import Flask, render_template, redirect, session, url_for, request

app = Flask(__name__)
app.config['SECRET_KEY'] = 'fd7a9fh342w9fh78fghdsgodsfy8fhdfso'


@app.route('/')
def home():

    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
