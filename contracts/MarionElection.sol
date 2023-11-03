// SPDX-License-Identifier: Copywritten
pragma solidity >=0.4.22 <0.8.22;

contract MarionElection {
    address public block_votes_creator;
    mapping (string => uint) public marion_election_counts;
    event Voted(string voted_for); // Event when someone has voted for a candidate

    constructor() public {
        block_votes_creator = msg.sender;
    }

    function add_vote(string memory voted_for) public {
        require(msg.sender == block_votes_creator, "Only BlockVotez can cast votes!");
        marion_election_counts[voted_for] += 1;
        emit Voted(voted_for);
    }

    function get_vote_count(string memory candidate_name) public view returns (uint) {
        require(msg.sender == block_votes_creator, "Only BlockVotez can retrieve vote counts!");
        return marion_election_counts[candidate_name];
    }
}
