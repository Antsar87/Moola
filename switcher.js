const switcher = document.querySelector('.theme-switcher');
const body = document.querySelector("body")

switcher.addEventListener("click", () => {
    body.classList.toggle("light-theme")
})