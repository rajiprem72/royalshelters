document.addEventListener("DOMContentLoaded", function () {

    const navigationToggle = document.getElementById("navigation-toggle");
    const navigationMenu = document.getElementById("navigation-menu");

    navigationToggle.addEventListener("click", function () {

        navigationMenu.classList.toggle("navigation-active");

    });

});
