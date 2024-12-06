// Declaring global variables
const sections = document.querySelectorAll("section");



// Creating a Dynamic Navigation Menu
const navMenu = document.getElementById('navbar__list'); // Assuming you are already have UL with this ID.

// Using For-Loop to create the list items according the sections
for (const section of sections) {
    const list_Item = document.createElement('li');
    const anchor = document.createElement('a');

    // Adding the link,content & the style for each item
    anchor.href = `#${section.id}`;
    anchor.textContent = section.dataset.nav;
    anchor.classList.add('menu__link');

    // Adding the items to the list & adding list to the menu
    list_Item.appendChild(anchor);
    navMenu.appendChild(list_Item);
};



//  Highlighting the Active Section
window.addEventListener("scroll", () => {
    //  Using For-Loop to return the size of each section
    for (const section of sections) {

        // Using getBoundingClientRect() to return the size of an element and its position relative to the viewport
        const rect = section.getBoundingClientRect();
        // Checking if Section is in the viewport
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            // Adding the style for activated section
            section.classList.add("activated-section");
        } else {
            section.classList.remove("activated-section");
        }
    };
});



// Highlighting the navigation links
const nav_Links = document.querySelectorAll(".menu__link");

//  Looping over navigation links
for (const link of nav_Links) {
    // Adding click event listener 
    link.addEventListener("click", (event) => {
        // this func. to preventing default behavior
        event.preventDefault();

        // Adding the styles to highlighting the activated navigation links
        nav_Links.forEach(nav => nav.classList.remove("activated-link"));
        link.classList.add("activated-link");
    });
};



// Adding Scroll-to-Section Functionality 
const links = document.querySelectorAll('a');

for (const link of links) {
    // Adding click event listener 
    link.addEventListener('click', event => {
        // this func. to preventing default behavior
        event.preventDefault();
        // Scrolling to the target section
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}



// Hide Navigation Bar When Not Scrolling
let isScrolling;

// Adding scroll event listener
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".page__header");

    // Show navbar with smooth effect
    navbar.style.visibility = "visible";
    navbar.style.opacity = "1";
    navbar.style.transition = "opacity 0.5s ease-in-out";

    // Clear if there any timer
    clearTimeout(isScrolling);

    // Hide navbar after 2 seconds of inactivity
    isScrolling = setTimeout(() => {
        navbar.style.opacity = "0";
        navbar.style.visibility = "hidden";
    }, 2000);
});



// Scroll-to-Top Button
const scrollTopButton = document.getElementById("scrollTop");

// Adding scroll event listener
window.addEventListener("scroll", () => {
    // Show or Hide button based on scroll position
    scrollTopButton.style.display = window.scrollY > window.innerHeight ? "block" : "none";
});

// Adding click event listener (clicking on go to top button)
scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});



// Collapsible Sections
const toggle_Buttons = document.querySelectorAll(".toggle-btn");

// Loop through all toggle buttons
for (const button of toggle_Buttons) {
    // Adding click event listener (clicking on toggle section button)
    button.addEventListener("click", () => {
        const section = button.parentElement;
        // Hide the content or collapse it by adding the "collapsed" style
        section.classList.toggle("collapsed");
    });
};

