document.addEventListener("DOMContentLoaded", function () {
    const titles = document.querySelectorAll(".post h2");

    titles.forEach(title => {
        title.addEventListener("mouseover", () => {
            title.style.color = "#2d5c3a";
        });

        title.addEventListener("mouseout", () => {
            title.style.color = "#6b8f71";
        });
    });
});