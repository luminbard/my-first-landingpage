document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navbarLinks = document.getElementById("navbar-links");
    const rightNav = document.getElementById("right-nav");
    const logo = document.getElementById("logo");
    const signUp = document.getElementById("sign-up");
    const topLink = document.getElementById("top-link");
    const firstNav = document.getElementById("first-nav");
    hamburger.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
        rightNav.classList.toggle("active"); 
        signUp.classList.toggle("active");
        logo.classList.toggle("hide");
        topLink.classList.toggle("hide");
        if (firstNav.style.justifyContent=="end")
            firstNav.style.justifyContent="space-between"
        else
            firstNav.style.justifyContent="end";
        hamburger.classList.toggle("change");
    });
});


document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.toggle-btn');
    const answer = item.querySelector('.faq-answer');
    
    btn.addEventListener('click', () => {
        const isVisible = answer.style.display === 'flex';
        
        if (!isVisible) {
            answer.style.display = 'flex';
            btn.classList.add('rotate');
        } else {
            answer.style.display = 'none';
            btn.classList.remove('rotate');
        }
    });
});
// Example usage
//setBodyHeight(1000); 