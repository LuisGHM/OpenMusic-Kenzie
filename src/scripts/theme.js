var dark = false;

function toggleDarkMode() {
    const button = document.querySelector(".header__image");
    if (dark == false) {
        button.src = "./src/assets/img/moon.svg";
    } else if(dark){
        button.src = "./src/assets/img/sun.svg";
    }

}

function changeTheme(){
    const body = document.querySelector("body");
    const buttons = document.querySelectorAll("button");
    const titles1 = document.querySelectorAll("h1");
    const titles2 = document.querySelectorAll("h2");
    const paragraphs = document.querySelectorAll("p");
    const spans = document.querySelectorAll("span");
    const cardContainers = document.querySelectorAll(".card__container");
    const cardText = document.querySelector(".card__text");
    const theme = "darkMode";
    dark = !dark;

    body.classList.toggle(theme);
    buttons.forEach((button) => button.classList.toggle(theme));
    titles1.forEach((title) => title.classList.toggle(theme));
    titles2.forEach((title) => title.classList.toggle(theme));
    paragraphs.forEach((paragraph) => paragraph.classList.toggle(theme));
    spans.forEach((span) => span.classList.toggle(theme));
    cardContainers.forEach((cardContainer) => cardContainer.classList.toggle(theme));
    cardText.classList.toggle(theme);
    localStorage.setItem(theme, JSON.stringify(dark));
}

function themePreferenceAnalysis() {
    darkMode = JSON.parse(localStorage.getItem("darkMode"));
    console.log(darkMode);
    if (darkMode) {
        changeTheme()
    }
  }
  
