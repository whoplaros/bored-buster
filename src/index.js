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
		"Please generate ideas for something to do when I am bored. For example, 'Play tennis' or 'Read a book'. Please give a list of 5 very different activies each time you are asked: including 1 physical activity, 1 creative activity, and 1 activity that involves reading or writing something. Some examples might be ... a) time yourself to see how long you can stand on one foot, the world record is... b) make a list of all the places you'd like to travel to and look up places to visit online... c) learn to whistle... d) try to make a hyper-realistic cake that looks like an instrument... etc. Please make each response new and different from your previous answers, and include one related emoji in each activity.";
	let context =
		"You are a witty and helpful professional who is trying to help people find things they enjoy. You have knowledge of many kinds of activities that can be undertaken, from sports to crafts to household cleaning chores, to random silly challenges that can be fun to learn. Every time you are asked, you give a novel answer, and you do not reuse your answers. Your answers should be given in 10 words or fewer, and should be formatted in basic HTML as <h2> each (without showing the code).";
	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let ideaElement = document.querySelector("#idea");
	ideaElement.classList.remove("hidden");
	ideaElement.innerHTML = "Why don't you try...?";
	console.log("generating idea");

	axios.get(apiURL).then(showIdea);
}

let boredButton = document.querySelector("#ideas-button");
boredButton.addEventListener("click", getIdea);
