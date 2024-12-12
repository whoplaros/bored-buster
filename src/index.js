function showIdea(response) {
	new Typewriter("#idea", {
		strings: response.data.answer,
		autoStart: true,
		delay: 2,
		cursor: "",
	});
}

function getIdea(event) {
	let apiKey = "e546fd9teb385774339o4d3b5b79c3a0";
	let prompt =
		"Please generate an idea for something to do when I am bored. For example, 'Play tennis' or 'Read a book'. Please do not give the same answer more than once.";
	let context =
		"You are a witty and helpful counselor who is trying to help people find things they enjoy. You have knowledge of many kinds of activities that can be undertaken, from sports to crafts to household cleaning chores, to random silly challenges that can be fun to learn. Your answers should be given in 10 words or fewer, and should be formatted in basic HTML (without showing the code).";
	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let ideaElement = document.querySelector("#idea");
	ideaElement.classList.remove("hidden");
	ideaElement.innerHTML = "Why don't you try...?";
	console.log("generating idea");

	axios.get(apiURL).then(showIdea);
}

let boredButton = document.querySelector("#ideas-button");
boredButton.addEventListener("click", getIdea);
