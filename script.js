// MOUSE GLOW


const glow = document.querySelector(".cursor-glow");

window.addEventListener("pointermove", (event) => {

    glow.style.left = event.clientX + "px";

    glow.style.top = event.clientY + "px";

});



// SCROLL REVEAL ANIMATION


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


// Hero animations

document
    .querySelectorAll(".hero-content, .hero-side")
    .forEach((element) => {

        observer.observe(element);

    });


// Section animations

document
    .querySelectorAll(
        "section:not(.hero) .section-content"
    )
    .forEach((element) => {

        observer.observe(element);

    });


// SMOOTH NAVIGATION

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });