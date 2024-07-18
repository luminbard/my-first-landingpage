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
    if (window.innerWidth < 1100) {
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5452.16234944011!2d139.3357881570759!3d35.655448057382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60191dd856de197f%3A0xe206cd84f9aec58d!2z44Kz44Ov44O844Kt44Oz44Kw44K544Oa44O844K55YWr546L5a2QIDhCZWF0!5e0!3m2!1sja!2sjp!4v1721228943167!5m2!1sja!2sjp" ;;
    } else {
        iframe.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483.5679417952115!2d139.33263113371498!3d35.657693758640264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1721228275270!5m2!1sja!2sjp";
                               
    }
}

// Set the src when the page loads
setIframeSrc();

// Add an event listener to detect window resize
window.addEventListener('resize', setIframeSrc);