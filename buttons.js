let homeBtn = document.querySelector('.home-button');
let innerCircle = homeBtn.querySelector('.circle'); 
homeBtn.style.transition = "0.6s"; 

homeBtn.addEventListener("mouseover", () => {
    innerCircle.style.padding = "calc(var(--index) * .25)"; 
});
homeBtn.addEventListener("mouseout", () => {
    innerCircle.style.padding = "0"; 
});

homeBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const toggleButtonVisibility = (target, showAtBottom = true) => {
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                homeBtn.style.opacity = showAtBottom ? "0" : "1";
                homeBtn.style.transform = showAtBottom ? "translateY(35px)" : "translateY(0)";
            } else {
                homeBtn.style.opacity = showAtBottom ? "1" : "0";
                homeBtn.style.transform = showAtBottom ? "translateY(0)" : "translateY(35px)";
            }
        });
    };
    const observer = new IntersectionObserver(observerCallback);
    observer.observe(target);
};


let content = document.querySelector('.content');
let footer = document.querySelector('.footer');
toggleButtonVisibility(content, false); 
toggleButtonVisibility(footer, true);  

// -------------------------------------------------------------------------------------------------

document.querySelectorAll('.links_h').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.footer').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
})
document.querySelectorAll('.help').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.about').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
})

// -------------------------------------------------------------------------------------------------

let contact = document.getElementById('.contact');
contact.style.transition = "0.4s"; 
contact.style.opacity = "0"; 
contact.style.transform = "translateY(35px)"; 

const contactObserverCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contact.style.opacity = "1"; 
            contact.style.transform = "translateY(0)"; 
        } else {
            contact.style.opacity = "0"; 
            contact.style.transform = "translateY(15px)"; 
        }
    });
};
const contactObserver = new IntersectionObserver(contactObserverCallback);
contactObserver.observe(homeBtn); 
