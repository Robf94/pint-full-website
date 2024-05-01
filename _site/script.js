// Highlight active nav links

function activeLinks() {
    document.querySelectorAll(".nav-link").forEach((link) => {
        console.log(window.location.href)
        if (link.href === window.location.href) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
    return pageName;
};

activeLinks();

// End activeLinks