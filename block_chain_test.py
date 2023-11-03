from web3 import Web3
from pathlib import Path
import os
import json

my_path = os.path.expanduser('~/downloads/block-votez/build/contracts/MarionElection.json')
path = Path(my_path)
contents = path.read_text()
json_info = json.loads(contents)
abi = json_info["abi"]
contract_address = '0x6998715Cc1688b06bAf247B2354ae440DAe0Dd98'


def return_contract():
    # Http Provider

    web3 = Web3(Web3.HTTPProvider('http://127.0.0.1:7545'))
    marion_election_contract = web3.eth.contract(
        address=contract_address, abi=abi)
    return marion_election_contract
