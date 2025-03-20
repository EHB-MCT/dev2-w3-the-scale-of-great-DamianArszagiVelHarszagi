import { getAdjectives } from "./data.js";

let adjectives;
let sortDirection = "up";

function init() {
	//TODO 1: Data ophalen via getAdjectives
	let data = getAdjectives();
	// console.log(JSON.parse(data));
	//TODO 2: Data parsen
	adjectives = JSON.parse(data);
	//TODO 3: Call render functie
	render();
	//TODO 4: Call addSortEvents
	addSortEvents();
}

function addSortEvents() {}

function addVoteEvents() {
	//Add eventListeners to all upVote and downVote buttons
	const upVoteButtons = document.querySelectorAll(".upvote-button");
	upVoteButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			console.log(this.value);
			upVote(this.value);
		});
	});
}

function sort() {}

function render() {
	//TODO 3.1: Create empty string variable
	let htmlString = "";
	//TODO 3.2: Add HTML string for each adjective in adjectives
	adjectives.forEach(function (adjectives) {
		//conditionele opmaak
		let scoreClass = "bad";
		if (adjectives.score >= 6) {
			scoreClass = "good";
		}

		//Html string
		htmlString += `<div class="word-item">
            <span class="word-score bad">4</span>
            <span>ok</span>
            <div class="vote-buttons">
                <button value="ok" class="upvote-button">👍</button>
                <button value="ok" class="downvote-button">👎</button>
            </div>
        </div>`;
	});
	//TODO 3.3: Add HTML string to #container
	document.querySelector("#container").innerHTML = htmlString;
}

function upVote(target) {}

function downVote(target) {}

function updateScore(word, scoreChange) {
	const foundIndex = adjectives.findIndex(function (item, index) {
		if (item.word == word) {
			return true;
		}
	});

	if (foundIndex != null) {
		let newScore = adjectives[foundIndex]["score"] + scoreChange;
		adjectives[foundIndex]["score"] = Math.round(newScore * 100) / 100;
	}
}

init();
