from flask import Flask, request
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import bson.json_util as json_util
import os
from block_chain_test import return_contract

load_dotenv()

db_name = os.getenv("DB_NAME")
db_pass = os.getenv("DB_PASS")
client = MongoClient("mongodb://127.0.0.1:27017")
db = client.blockvotez
voters = db.voters
candidates = db.candidates

app = Flask(__name__, static_folder="./build", static_url_path="/")
CORS(app)


@app.get('/')
def index():
    return app.send_static_file('index.html')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.post('/cast-ballot')
async def cast_ballot():
    data = request.get_json()
    election_contract = return_contract()
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
    election_contract.functions.add_vote(data["voted_for"]).transact({'from': '0x40c91322719ccA2E3aea6b99639fEF3c0Fea4831'})
    fetched_candidates = list(candidates.find())
    return json_util.dumps(fetched_candidates), 200
