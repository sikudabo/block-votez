from flask import Flask, request
from flask_cors import CORS
from pymongo import MongoClient
import bson.json_util as json_util

client = MongoClient("localhost", 27017)
db = client.blockvotez
voters = db.voters
candidates = db.candidates

app = Flask(__name__, static_folder="./build", static_url_path="/")
CORS(app)


@app.get('/')
def index():
    return app.send_static_file('index.html')


@app.post('/cast-ballot')
async def cast_ballot():
    data = request.get_json()
    voter = {
        "first_name": data["first_name"],
        "last_name": data["last_name"],
        "age": int(data["age"]),
        "gender": data["gender"],
        "income": data["income"],
        "race": data["race"],
        "email": data["email"],
        "voted_for": data["voted_for"],
    }
    voters.insert_one(voter)
    candidates.update_one({"candidate_name": data["voted_for"]},
                          {"$inc": {"votes": 1}})
    fetched_candidates = list(candidates.find())
    return json_util.dumps(fetched_candidates), 200
