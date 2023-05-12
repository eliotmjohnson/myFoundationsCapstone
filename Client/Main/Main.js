// Elements

const mainHeader = document.querySelector(".main-header");
const headerArrow = document.querySelector(".header-arrow");
const headerTitleTwo = document.querySelector(".header-title-two");
const madlibSelector = document.querySelector(".selectors");
const previewBtns = document.querySelectorAll(
	".madlib-outline-selection-buttons"
);
const btnsSection = document.querySelector(".selectors>section");
const madlibPreview = document.querySelector(".madlib-preview");
const getMadlibing = document.querySelector(".get-madlibing");
const madlibMain = document.querySelector(".madlib-main-screen");
const madlibWordInput = document.querySelector(".madlib-main-screen input");
const madlibWordForm = document.querySelector(".madlib-main-screen>form");
const blackBackground = document.querySelector(".semi-black-background");
const startOver = document.querySelector(".start-over");
const backButton = document.querySelector(".back-button");
const nextButton = document.querySelector("#next-button");
const saveButton = document.querySelector(".save-madlib");
const nameInput = document.querySelector(".author-name");
const saveForm = document.querySelector(".save-form");
const currentWord = document.querySelector(".current-word");
const arrayLength = document.querySelector(".array-length");

// Other Variables

let x = 0;
let placeholderArr = [];
let userWordArr = [];
let newContent;
let madlibTopic;
let badWords;

// Profanity Checker

const getBadWords = () => {
	axios
		.get("/api/bad_words")
		.then((res) => {
			badWords = res.data;
		})
		.catch((error) => console.log(error));
};

getBadWords();

// Header Animation

const headerDropdown = () => {
	if (
		headerArrow.innerHTML.includes("Start Here") ||
		headerArrow.innerHTML.includes("Change MadLib")
	) {
		headerArrow.classList.add("header-arrow-active");
		mainHeader.classList.add("active");

		headerTitleTwo.style.transitionDelay = ".1s";
		headerTitleTwo.classList.add("yikes");

		madlibSelector.style.transition = "opacity 1s .5s";
		madlibSelector.classList.add("yikes");

		btnsSection.style.transition = "visibility 0s 0s";
		btnsSection.style.visibility = "visible";

		madlibPreview.classList.add("yikes");
	}

	if (headerArrow.innerHTML.includes("Change MadLib")) {
		getMadlibing.style.transition = "opacity 1s .5s, visibility 0s 0s";
		getMadlibing.style.visibility = "visible";
		getMadlibing.classList.add("yikes");

		if (madlibPreview.classList.contains("madlib-preview-movement")) {
			madlibPreview.classList.add("madlib-preview-movement-reverse");
			madlibPreview.classList.remove("madlib-preview-movement");
		}

		madlibMain.style.transitionDelay = "0s";
		madlibMain.style.left = "-30rem";

		madlibPreview.classList.remove("completed-madlib-preview");

		madlibWordInput.value = "";

		x = 0;
		userWordArr = [];
	}
};

headerArrow.addEventListener("click", headerDropdown);

// Display MadLib Previews

const getMadlibPreview = (e) => {
	e.preventDefault();

	let buttonText = e.target.textContent;
	madlibTopic = buttonText;

	axios
		.get(`/api/madlib/${buttonText}`)
		.then((res) => {
			let madlibContent = res.data[0].madlib_content;
			newContent = madlibContent.replaceAll("  ", "<br><br>");
			newContent = newContent.replace("[", "(").replace("]", ")");

			madlibPreview.id = `${buttonText}`;
			madlibPreview.innerHTML = newContent;

			if (newContent.length > 1350) {
				madlibPreview.style.fontSize = ".8rem";
			} else if (
				newContent.includes("SpongeBob") ||
				newContent.includes("Trip to Disney World") ||
				newContent.includes("The Avengers")
			) {
				madlibPreview.style.fontSize = ".95rem";
			} else if (newContent.length > 1110) {
				madlibPreview.style.fontSize = ".9rem";
			} else {
				madlibPreview.style.fontSize = "1rem";
			}

			getMadlibing.style.transition = "opacity 1s, visibility 0s 0s";
			getMadlibing.style.visibility = "visible";
			getMadlibing.classList.add("yikes");

			madlibPreview.style.opacity = "1";
			madlibPreview.style.scale = "1";
		})
		.catch((error) => console.log(error));
};

const firstButtonSet = previewBtns[0].children;
const secondButtonSet = previewBtns[1].children;

for (let i = 0; i < firstButtonSet.length; i++) {
	firstButtonSet[i].addEventListener("click", getMadlibPreview);
	secondButtonSet[i].addEventListener("click", getMadlibPreview);
}

// Moving MadLib to Main Section

const moveMadlib = (e) => {
	e.preventDefault();

	nameInput.value = "";
	saveForm.classList.remove("author-name-active");
	saveButton.classList.remove("save-madlib-active");
	headerArrow.parentNode.classList.remove("active");

	headerArrow.classList.remove("header-arrow-active");
	headerArrow.innerHTML = "Change MadLib<br>&#8964";

	if (madlibPreview.classList.contains("madlib-preview-movement-reverse")) {
		madlibPreview.classList.remove("madlib-preview-movement-reverse");
		madlibPreview.classList.add("madlib-preview-movement");
	} else madlibPreview.classList.add("madlib-preview-movement");

	headerTitleTwo.classList.remove("yikes");
	headerTitleTwo.style.transitionDelay = ".4s";

	madlibSelector.style.transition = "opacity .2s 0s";
	madlibSelector.classList.remove("yikes");

	btnsSection.style.transition = "visibility 0s .2s";
	btnsSection.style.visibility = "hidden";

	getMadlibing.style.transition = "opacity .1s, visibility 0s .1s";
	getMadlibing.classList.remove("yikes");
	getMadlibing.style.visibility = "hidden";

	madlibMain.style.transitionDelay = "1.5s";
	madlibMain.style.left = "50%";

	nextButton.textContent = "Next!";
};

getMadlibing.addEventListener("click", moveMadlib);

// Word Input Handling

const getPlaceHolders = () => {
	let madlibName = madlibPreview.id;

	axios
		.get(`/api/prompts/${madlibName}`)
		.then((res) => {
			let placeHolder = res.data[0].madlib_word_types;
			placeholderArr = placeHolder.split(",");

			currentWord.innerHTML = x + 1;
			arrayLength.innerHTML = placeholderArr.length;
			madlibWordInput.placeholder = `${placeholderArr[0].toUpperCase()}`;
		})
		.catch((error) => console.log(error));
};

const incrementWord = () => {
	x++;
	currentWord.innerHTML = x + 1;
};

const handleInput = (e) => {
	e.preventDefault();

	if (madlibWordInput.value !== "") {
		const text = madlibWordInput.value;

		if (badWords.includes(text)) {
			alert("That word is not allowed, please choose another one.");
		} else {
			userWordArr.splice(x, 1, text);

			setNextPlaceholder();

			if (userWordArr[x] === undefined) {
				madlibWordInput.value = "";
			} else {
				madlibWordInput.value = userWordArr[x];
			}
		}
	} else {
		alert("Ah, ah , ah. You need to actually put something in the text box.");
	}
};

const computeMadLib = () => {
	let madlibText = madlibPreview.innerHTML;

	for (let i = 0; i < placeholderArr.length; i++) {
		madlibText = madlibText.replace(
			`(${placeholderArr[i]})`,
			`<strong>${userWordArr[i]}</strong>`
		);
	}

	madlibMain.style.left = "-30rem";
	madlibMain.style.transitionDelay = "0s";

	displayCompletedMadlib(madlibText);
};

const goBackAPlaceholder = (e) => {
	e.preventDefault();

	if (x > 0) {
		madlibWordInput.value = "";

		x -= 2;

		incrementWord();

		if (nextButton.textContent === "Click to see your completed MadLib!!") {
			nextButton.textContent = "Next!";
		}

		madlibWordInput.value = userWordArr[x];
		madlibWordInput.placeholder = `${placeholderArr[x].toUpperCase()}`;
	} else alert("There's nothing over there silly!");
};

const setNextPlaceholder = () => {
	if (nextButton.textContent === "Click to see your completed MadLib!!") {
		computeMadLib();
	} else {
		incrementWord();

		madlibWordInput.placeholder = `${placeholderArr[x].toUpperCase()}`;

		if (x === placeholderArr.length - 1) {
			nextButton.textContent = "Click to see your completed MadLib!!";
		}
	}
};

const displayCompletedMadlib = (completedMadlib) => {
	madlibPreview.innerHTML = completedMadlib;
	styleCompletedMadlib();
};

const styleCompletedMadlib = () => {
	madlibPreview.classList.remove("yikes");
	madlibPreview.style.scale = "1.125";
	madlibPreview.classList.remove("madlib-preview-movement");
	blackBackground.style.transition = "opacity 1s, z-index 0s 0s";
	blackBackground.style.opacity = ".8";
	blackBackground.style.zIndex = "2";
	madlibPreview.classList.add("completed-madlib-preview");
};

backButton.addEventListener("click", goBackAPlaceholder);
getMadlibing.addEventListener("click", getPlaceHolders);
madlibWordForm.addEventListener("submit", handleInput);

// Restarting MadLib

const resetMadlib = () => {
	resetBlackBg();
	resetPreview();
	headerDropdown();
};

const resetBlackBg = () => {
	blackBackground.style.transition = "opacity .4s, z-index 0s .4s";
	blackBackground.style.zIndex = "-1";
	blackBackground.style.opacity = "0";
};

const resetPreview = () => {
	madlibPreview.innerHTML = newContent;
	madlibPreview.classList.remove("completed-madlib-preview");
	madlibPreview.style.scale = "1";
};

startOver.addEventListener("click", resetMadlib);

// Saving Madlib to Database

const getNameForm = (e) => {
	saveForm.style.transition = "scale 1s .35s";
	saveButton.classList.add("save-madlib-active");
	saveForm.classList.add("author-name-active");
};

const getInputAndSave = (e) => {
	e.preventDefault();

	if (nameInput.value !== "") {
		const DateTime = luxon.DateTime;
		let today = DateTime.now().toLocaleString();
		let content = madlibPreview.innerHTML;

		let newSave = {
			name: nameInput.value,
			content: content.replaceAll("'", "''"),
			topic: madlibTopic,
			date: today,
		};

		axios
			.post("/api/user_madlibs", newSave)
			.catch((error) => console.log(error));

		resetMadlib();
	} else {
		alert(
			"If you don't want to put your name, choose an alias or put anonymous."
		);
	}
};

saveForm.addEventListener("submit", getInputAndSave);
saveButton.addEventListener("click", getNameForm);
