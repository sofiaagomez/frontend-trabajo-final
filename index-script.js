const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const icon = darkModeBtn.querySelector("i");
    if (body.classList.contains("dark-mode")) {
        icon.textContent = "light_mode";
    } else {
        icon.textContent = "dark_mode";
    }
});