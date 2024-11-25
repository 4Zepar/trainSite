let homeBtn = document.querySelector('.home-button');
homeBtn.style.transition = "0.6s"; 
homeBtn.style.opacity = "0"; 
homeBtn.style.transform = "translateY(35px)"; 

homeBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

let innerCircle = homeBtn.querySelector('.circle'); 

homeBtn.addEventListener("mouseover", function() {
    innerCircle.style.padding = "calc(var(--index) * .25)"; 
});
homeBtn.addEventListener("mouseout", function() {
    innerCircle.style.padding = "0"; 
});


function checkScroll() {
    let scrollTop = window.scrollY; 
    let viewportHeight = window.innerHeight; 
    let documentHeight = document.documentElement.scrollHeight; 
    let firstPageHeight = documentHeight - viewportHeight; 

    if (scrollTop >= firstPageHeight * 0.3) { 
        homeBtn.style.opacity = "1"; 
        homeBtn.style.transform = "translateY(0)"; 
    } else {
        homeBtn.style.opacity = "0"; 
        homeBtn.style.transform = "translateY(35px)"; 
    }
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);


// -------------------------------------------------------------------------------------------------


document.querySelectorAll('.navbar_elem')[0].addEventListener('click', function() {
    let targetElement = document.querySelector('.form');
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
});