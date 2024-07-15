document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navbarLinks = document.getElementById("navbar-links");
    const rightNav = document.getElementById("right-nav");
    const logo = document.getElementById("logo");
    const signUp = document.getElementById("sign-up");
    const firstNav = document.getElementById("first-nav");
    hamburger.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
        rightNav.classList.toggle("active");
        signUp.classList.toggle("active");
        logo.classList.toggle("hide");
        if (firstNav.style.justifyContent=="end")
            firstNav.style.justifyContent="space-between"
        else
            firstNav.style.justifyContent="end";
            //setBodyHeight(658);
        hamburger.classList.toggle("change");
        
    });
});


function setBodyHeight(height) {
    document.body.style.height = height + 'px';
}

// Example usage
//setBodyHeight(1000); 