// Storing sections in a Data Structure - Using "querySelectorAll"
const sections = document.querySelectorAll("section");


// Creating a Dynamic Navigation Menu
const navMenu = document.getElementById('navbar__list'); // Assuming you have a <ul> with this ID.

sections.forEach(section => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');

    anchor.href = `#${section.id}`;
    anchor.textContent = section.dataset.nav;
    anchor.classList.add('menu__link');

    listItem.appendChild(anchor);
    navMenu.appendChild(listItem);
});


//  Highlighting the Active Section
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    });
});

// Adding Scroll-to-Section Functionality 
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Active Section Highlighting with makeActive() Function
function makeActive() {
    sections.forEach(section => {
        const box = section.getBoundingClientRect();
        // 150px is a good offset for determining the active section.
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add(".menu__link");
            document.querySelector(`a[href="#${section.id}"]`).classList.add(".menu__link");
        } else {
            section.classList.remove(".menu__link");
            document.querySelector(`a[href="#${section.id}"]`).classList.remove(".menu__link");
        }
    });
}

// Listen for scroll events and trigger the active section function.
document.addEventListener("scroll", makeActive);


// Hide Navigation Bar When Not Scrolling
let isScrolling;

window.addEventListener("scroll", () => {
    document.querySelector(".navbar__menu").style.display = "block"; // Show navbar when scrolling.

    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        document.querySelector(".navbar__menu").style.display = "none"; // Hide navbar after scrolling stops.
    }, 2000);
});


// Scroll-to-Top Button
const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Collapsible Sections
const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const section = button.parentElement;
        section.classList.toggle("collapsed");
    });
});

