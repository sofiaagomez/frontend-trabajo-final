const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const icon = darkModeBtn.querySelector("i");

    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});