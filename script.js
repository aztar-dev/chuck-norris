const jokeParagraph = document.querySelector(".joke-text");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const searchBtn = document.querySelector(".search-btn");
const categoriesMenu = document.querySelector("#categories");
let jokeIndex = 0;
let jokes = [];
let jokeID;

const init = async () => {
	prevBtn.setAttribute("disabled", "");
	await displayRandomJoke();
	await setCategories();
};

const displayRandomJoke = async () => {
	try {
		let newJoke = await getRandomJoke();
		jokeParagraph.textContent = newJoke.value;
		const newJokeDetails = {
			id: newJoke.id,
			url: newJoke.url,
			value: newJoke.value,
		};

		jokes.push(newJokeDetails);
		localStorage.setItem("jokes", JSON.stringify(jokes));

		return newJoke;
	} catch (error) {
		console.error("Une erreur s'est produite : ", error);
	}
};

const displayJokeByCategory = async (category) => {
	try {
		let newJoke = await getJokeByCategory(category);
		jokeParagraph.textContent = newJoke.value;
		const newJokeDetails = {
			id: newJoke.id,
			url: newJoke.url,
			value: newJoke.value,
		};

		jokes.push(newJokeDetails);
		localStorage.setItem("jokes", JSON.stringify(jokes));

		return newJoke;
	} catch (error) {
		console.error("Une erreur s'est produite : ", error);
	}
};

const setCategories = async () => {
	try {
		let categories = await getCategories();

		categories.forEach((category) => {
			const newOption = document.createElement("option");
			newOption.textContent = category;
			categoriesMenu.appendChild(newOption);
		});
	} catch (error) {
		console.error("Une erreur s'est produite : ", error);
	}
};

init();

//
//
// EVENT LISTENERS

nextBtn.addEventListener("click", async () => {
	if (jokeIndex === 0) {
		prevBtn.removeAttribute("disabled", "");
	}

	if (jokeIndex === jokes.length - 1) {
		// Générer une nouvelle blague (on est revenus à la dernière blague générée)
		await displayRandomJoke();
		jokeIndex += 1;
	} else {
		// Reparcourir les blagues déjà générées
		jokeIndex += 1;
		const viewJoke = await getJoke(jokes[jokeIndex].id);
		jokeParagraph.textContent = viewJoke.value;
	}
});

prevBtn.addEventListener("click", async () => {
	if (jokeIndex > 0) {
		jokeIndex -= 1;
		const viewJoke = await getJoke(jokes[jokeIndex].id);
		jokeParagraph.textContent = viewJoke.value;
	}

	if (jokeIndex === 0) {
		prevBtn.setAttribute("disabled", "");
	}
});

searchBtn.addEventListener("click", async () => {
	if (jokeIndex === 0) {
		prevBtn.removeAttribute("disabled", "");
	}

	if (jokeIndex !== jokes.length - 1) {
		// Nous replace à la fin du tableau pour regénérer une nouvelle blague
		jokeIndex = jokes.length - 1;
		await displayJokeByCategory(categoriesMenu.value);
		jokeIndex += 1;
	} else {
		// On est déjà à la fin du tableau
		await displayJokeByCategory(categoriesMenu.value);
		jokeIndex += 1;
	}
});
