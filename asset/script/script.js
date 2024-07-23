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
   
    
    item.addEventListener('click', () => {
        item.classList.toggle('expanded');
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


function setIframeSrc() {
    var iframe = document.getElementById('image-map');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.790021683318!2d139.33721069999999!3d35.657544699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60191d36c0322575%3A0xa366f8ae3c4953e0!2sDESIGN%20CAMPUS!5e0!3m2!1sja!2s!4v1721545720272!5m2!1sja!2s";
}

// Set the src when the page loads
setIframeSrc();

// Add an event listener to detect window resize
window.addEventListener('resize', setIframeSrc);