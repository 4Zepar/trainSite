let homeBtn = document.querySelector('.home-button');
homeBtn.style.transition = "0.6s"; 

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

const contentObserverCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            homeBtn.style.opacity = "1"; 
            homeBtn.style.transform = "translateY(0)"; 
        } else {
            homeBtn.style.opacity = "0"; 
            homeBtn.style.transform = "translateY(35px)"; 
        }
    });
};

const contentObserver = new IntersectionObserver(contentObserverCallback);

let content = document.querySelector('.content');
contentObserver.observe(content);



const footerObserverCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            homeBtn.style.opacity = "0"; 
            homeBtn.style.transform = "translateY(35px)"; 
        } else {
            homeBtn.style.opacity = "1"; 
            homeBtn.style.transform = "translateY(0)"; 
        }
    });
};

const footerObserver = new IntersectionObserver(footerObserverCallback);

let footer = document.querySelector('.footer');
footerObserver.observe(footer);

// -------------------------------------------------------------------------------------------------

let linkBtns = document.querySelectorAll('.links');
let helpBtns = document.querySelectorAll('.help');

linkBtns.forEach(button => {
    button.addEventListener('click', function() {
        let targetElement = document.querySelector('.footer');
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
})

helpBtns.forEach(button => {
    button.addEventListener('click', function() {
        let targetElement = document.querySelector('.about');
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
})





// -------------------------------------------------------------------------------------------------

const contact = document.getElementById('.contact');
contact.style.transition = "0.4s"; 
contact.style.opacity = "0"; 
contact.style.transform = "translateY(35px)"; 

// Создаем функцию обратного вызова для IntersectionObserver
const homeBtnObserverCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Если homeBtn в зоне видимости, показываем contact
            contact.style.opacity = "1"; 
            contact.style.transform = "translateY(0)"; 
        } else {
            // Если homeBtn не в зоне видимости, скрываем contact
            contact.style.opacity = "0"; 
            contact.style.transform = "translateY(15px)"; 
        }
    });
};

// Создаем новый IntersectionObserver
const homeBtnObserver = new IntersectionObserver(homeBtnObserverCallback);

// Начинаем наблюдение за элементом homeBtn
homeBtnObserver.observe(homeBtn);



