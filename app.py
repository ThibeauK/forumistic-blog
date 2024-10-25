from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow all domains to make requests to this server

comments = []

@app.route('/')
def home():
    return "Welcome to My Blog API!"

@app.route('/get_comments', methods=['GET'])
def get_comments():
    return jsonify(comments)

@app.route('/add_comment', methods=['POST'])
def add_comment():
    data = request.get_json()
    username = data.get('username')
    comment = data.get('comment')
    if username and comment:
        comments.append({'username': username, 'comment': comment})
        return jsonify({'message': 'Comment added successfully'}), 200
    return jsonify({'message': 'Invalid input'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
