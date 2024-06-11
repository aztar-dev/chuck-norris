const jokeParagraph = document.querySelector(".joke-text");
const nextBtn = document.querySelector(".next-btn");
let jokeID;

const init = async () => {
	await displayJoke();
};

const displayJoke = async () => {
	try {
		let newJoke = await getRandomJoke();
		jokeID = newJoke.id;
		jokeParagraph.textContent = newJoke.value;

		console.log(newJoke);
	} catch (error) {
		console.error("Une erreur s'est produite : ", error);
	}
};

init();

nextBtn.addEventListener("click", () => {
	console.log(jokeID);
});
