from flask import Flask, Response, request, make_response, send_from_directory, redirect, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def index():
  return redirect('/index.html')

@app.route('/<path:path>')
def pwa(path):
  return send_from_directory('../kasse/dist',path)

@app.before_request
def optionRequestCors():
    if request.method == "OPTIONS":
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization")
        response.headers.add('Access-Control-Allow-Methods', "DELETE, PATCH, POST, PUT, GET, OPTIONS")
        return response

@app.after_request
def normalRequestCors(response):
    if not request.method == "OPTIONS":
        response.headers.add("Access-Control-Allow-Origin", "*")
    return response
