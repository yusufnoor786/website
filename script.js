window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        let position = sec.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.2;
        if (position < screenPos) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});
