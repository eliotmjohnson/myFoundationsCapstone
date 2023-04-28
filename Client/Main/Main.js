const headerArrow = document.querySelector(".header-arrow");
const headerTitleTwo = document.querySelector(".header-title-two");
const madlibSelector = document.querySelector(".madlib-outline-selection");

const headerDropdown = (e) => {
	e.preventDefault();
	madlibSelector.classList.toggle("yikes");
	headerArrow.classList.toggle("header-arrow-active");
	e.target.parentNode.classList.toggle("active");

	if (headerTitleTwo.classList.contains("yikes")) {
		headerTitleTwo.classList.remove("yikes");
		headerTitleTwo.style.transitionDelay = ".4s";
		madlibSelector.style.transitionDelay = "0s";
		madlibSelector.style.transition = "opacity .2s"
		madlibSelector.classList.remove("yikes");
		
	} else {
		headerTitleTwo.classList.add("yikes");
		headerTitleTwo.style.transitionDelay = ".1s";
		madlibSelector.style.transition = "opacity 1s"
		madlibSelector.classList.add("yikes");
		madlibSelector.style.transitionDelay = ".5s";

	}
};

headerArrow.addEventListener("click", headerDropdown);
