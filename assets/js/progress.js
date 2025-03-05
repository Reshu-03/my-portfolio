document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress .progress-bar");

    function animateProgressBars() {
        progressBars.forEach((bar) => {
            let value = bar.getAttribute("aria-valuenow");
            bar.style.width = value + "%"; // Expands the bar
            bar.textContent = value + "%"; // Displays percentage inside the bar
        });
    }

    // Observer to trigger animation when progress bars enter viewport
    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    observer.disconnect(); // Stop observing after animation
                }
            });
        },
        { threshold: 0.5 } // Trigger animation when 50% of the section is visible
    );

    let skillsSection = document.querySelector(".skills-animation");
    observer.observe(skillsSection);
});
