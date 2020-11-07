# app.py

from flask import Flask 
from flask import request, render_template

app = Flask(__name__)

@app.route('/test-get-request-parameters')
def test_get_request_parameters():
    # 1. different function per endpoint 
    # 2. GET parameter to variable 
    # 3. respond to GET
    var = request.args.get('some_request_variable')
    return render_template('hello_world.html')

@app.route('/test-post-method',methods=['POST'])
def test_post_method():
    # 2. receive POST data 
    # 3. respond to POST
    print(request.get_json())
    return 'hello, world!'

@app.route('/test-get-or-post', methods=['GET','POST'])
def test_get_or_post():
    # 4. respond in JSON
    if request.method == 'POST':
        d = {'hello':'world'}
        return d # this will be JSON response
    return render_template('test.html')