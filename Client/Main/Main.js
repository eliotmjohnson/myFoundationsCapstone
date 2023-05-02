// Elements

const headerArrow = document.querySelector(".header-arrow");
const headerTitleTwo = document.querySelector(".header-title-two");
const madlibSelector = document.querySelector(".madlib-outline-selection");
const previewBtns = document.querySelectorAll(
	".madlib-outline-selection-buttons"
);
const madlibPreview = document.querySelector(".madlib-preview");

// Header Animation

const headerDropdown = (e) => {
	e.preventDefault();

	madlibSelector.classList.toggle("yikes");
	headerArrow.classList.toggle("header-arrow-active");
	e.target.parentNode.classList.toggle("active");

	if (headerTitleTwo.classList.contains("yikes")) {
		headerTitleTwo.classList.remove("yikes");
		headerTitleTwo.style.transitionDelay = ".4s";
		madlibSelector.style.transitionDelay = "0s";
		madlibSelector.style.transition = "opacity .2s";
		madlibSelector.classList.remove("yikes");
	} else {
		headerTitleTwo.classList.add("yikes");
		headerTitleTwo.style.transitionDelay = ".1s";
		madlibSelector.style.transition = "opacity 1s";
		madlibSelector.classList.add("yikes");
		madlibSelector.style.transitionDelay = ".5s";
	}
};

headerArrow.addEventListener("click", headerDropdown);

// Display MadLib Previews

const getMadlibPreview = (e) => {
	e.preventDefault();
	
	let buttonText = e.target.textContent;

	axios
		.get(`/api/madlib/${buttonText}`)
		.then((res) => {
			let madlibContent = res.data[0].madlib_content;
			let newContent = madlibContent.replaceAll("  ", "<br><br>");

			madlibPreview.innerHTML = newContent;

			if (newContent.length > 1350) {
				madlibPreview.style.fontSize = ".8rem";
			} else if (newContent.includes("SpongeBob")) {
				madlibPreview.style.fontSize = ".95rem";
			} else if (newContent.length > 1110) {
				madlibPreview.style.fontSize = ".9rem";
			} else {
				madlibPreview.style.fontSize = "1rem";
			}

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
