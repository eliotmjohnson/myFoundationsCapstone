// Elements

const body = document.querySelector("body");
const mainHeader = document.querySelector(".main-header");
const headerArrow = document.querySelector(".header-arrow");
const headerTitleTwo = document.querySelector(".header-title-two");
const madlibSelector = document.querySelector(".selectors");
const previewBtns = document.querySelectorAll(
	".madlib-outline-selection-buttons"
);
const btnsSection = document.querySelector(".selectors>section");
const madlibGallery = document.querySelector(".madlib-gallery");
const blackBackground = document.querySelector(".semi-black-background");
const completedPreview = document.querySelector(".completed-madlib-preview");
const closeButton = document.querySelector(".start-over");

// Header Dropdown

const headerDropdown = () => {
	if (!madlibSelector.classList.contains("yikes")) {
		headerArrow.classList.add("header-arrow-active");
		mainHeader.classList.add("active");

		headerTitleTwo.style.zIndex = "2";
		headerTitleTwo.style.transition = "opacity .3s .1s";
		headerTitleTwo.classList.add("yikes");

		madlibSelector.style.transition = "opacity 1s .5s";
		madlibSelector.classList.add("yikes");

		btnsSection.style.transition = "visibility 0s 0s";
		btnsSection.style.visibility = "visible";
	} else {
		headerArrow.parentNode.classList.remove("active");

		headerArrow.classList.remove("header-arrow-active");

		headerTitleTwo.classList.remove("yikes");
		headerTitleTwo.style.transition = "opacity .3s .4s, z-index 0s .7s";
		headerTitleTwo.style.zIndex = "0";

		madlibSelector.style.transition = "opacity .2s 0s";
		madlibSelector.classList.remove("yikes");

		btnsSection.style.transition = "visibility 0s .2s";
		btnsSection.style.visibility = "hidden";
	}
};

headerArrow.addEventListener("click", headerDropdown);

// Get All User MadLibs

const getUserMadlibs = (userArr) => {
	axios
		.get("/api/user_madlibs")
		.then((res) => {
			dontRepeatYourself(res.data);
		})
		.catch((error) => console.log(error));
};

getUserMadlibs();

const dontRepeatYourself = (data) => {
	const userMadlibsArr = data;

	for (let i = 0; i < userMadlibsArr.length; i++) {
		let {
			author_name: name,
			madlib_topic: topic,
			madlib_content: content,
			date_created: date,
		} = userMadlibsArr[i];

		const madlibCard = document.createElement("div");

		const nameLength = (name) => {
			if (name.length > 25) {
				return "font-size: 2rem;";
			} else if (name.length > 18) {
				return "font-size: 2.5rem;";
			} else if (name.length > 12) {
				return "font-size: 3rem;";
			} else {
				return "";
			}
		};

		madlibCard.classList.add("madlib-card");
		madlibCard.innerHTML = `
                <span class="madguys">
                    <img class="madguy-one" src="../Images/madlib_guy2.png" alt="madlib-guy1">
                    <img class="madguy-two" src="../Images/madlib_guy2.png" alt="madlib-guy2">
                </span>
                <div class="card-content">
                    <Aside class="madlib-info">
                        <h1 style="${nameLength(name)}">${name}</h1>
                        <h2>${topic}</h2>
                        <p>${date}</p>
						<button class="show-madlib" onclick="showMadlib(\`${content.replaceAll(
							'"',
							"#"
						)}\`)">Click to see MadLib!</button>
                    </Aside>
                    <section class="madlib-preview">${content}</section>
                </div>
                `;

		madlibGallery.appendChild(madlibCard);
	}
};

// Get Sorted User MadLibs

const getSortedUserMadLibs = (e) => {
	e.preventDefault();

	let buttonText = e.target.textContent;
	madlibTopic = buttonText;

	axios
		.get(`/api/sorted_madlibs/${buttonText}`)
		.then((res) => {
			madlibGallery.innerHTML = "";
			dontRepeatYourself(res.data);
			headerDropdown();
		})
		.catch((error) => console.log(error));
};

const firstButtonSet = previewBtns[0].children;
const secondButtonSet = previewBtns[1].children;

for (let i = 0; i < firstButtonSet.length; i++) {
	firstButtonSet[i].addEventListener("click", getSortedUserMadLibs);
	secondButtonSet[i].addEventListener("click", getSortedUserMadLibs);
}

// Show User MadLib On Smaller Screens

const showMadlib = (content) => {
	blackBackground.style.transition = "opacity 1s, z-index 0s";
	completedPreview.innerHTML = content.replaceAll("#", '"');
	blackBackground.style.zIndex = "3";
	blackBackground.style.opacity = "1";
	body.style.overflow = "hidden";
	body.style.position = "relative";
};

const hideMadlib = () => {
	blackBackground.style.opacity = "0";
	blackBackground.style.transition = "opacity .3s, z-index 0s .3s";
	blackBackground.style.zIndex = "-1";
	body.style.overflow = "visible";
	body.style.position = "initial";
};

closeButton.addEventListener("click", hideMadlib);
