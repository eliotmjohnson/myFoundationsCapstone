const headerArrow = document.querySelector(".header-arrow");
const headerText = document.querySelector(".header-dropdown-text");

const headerDropdown = (e) => {
	e.preventDefault();
	e.target.parentNode.classList.toggle("active");
	headerArrow.classList.toggle("header-arrow-active");
	if (headerText.classList.contains("header-dropdown-text-active")) {
		headerText.classList.remove("header-dropdown-text-active");
		headerText.style.transitionDelay = "0s";
	} else {
        headerText.classList.add("header-dropdown-text-active");
        headerText.style.transitionDelay = ".3s";
	}
};

headerArrow.addEventListener("click", headerDropdown);
