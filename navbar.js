document.addEventListener("DOMContentLoaded", () => {

    let currentPage =
        window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    const navLinks =
        document.querySelectorAll(".nav-item");

    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

});
