window.onload = function () {
    let paralax = document.querySelector('.paralax');

    if (paralax) {
        let layer1 = document.querySelector('.layer1');
        let layer2 = document.querySelector('.layer2');
        let layer3 = document.querySelector('.layer3');
        let layer4 = document.querySelector('.layer4');
        let layer5 = document.querySelector('.layer5');
        let layer6 = document.querySelector('.layer6');
        let layer7 = document.querySelector('.layer7');
        let layerGrass = document.querySelector('.layer-grass');
    
        let forLayer1 = 30;
        let forLayer2 = 20;
        let forLayer3 = 10;
        let forLayer4 = 25;
        let forLayer5 = 18;
        let forLayer6 = 13;
        let forLayer7 = 8;
        let forLayerGrass = 18;
    
        let koef = 0.2;
    
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;
    
        let isParallaxActive = false; 
    
        let ParalaxStyles = () => {
            if (!isParallaxActive) return;
    
            let distX = coordXprocent - positionX;
            let distY = coordYprocent - positionY;
    
            positionX = positionX = (distX * koef);
            positionY = positionY = (distY * koef);
    
            layer1.style.cssText = `transform: translate(${positionX / forLayer1}%, ${positionY / forLayer1}%);`;
            layer2.style.cssText = `transform: translate(${positionX / forLayer2}%, ${positionY / forLayer2}%);`;
            layer3.style.cssText = `transform: translate(${positionX / forLayer3}%, ${positionY / forLayer3}%);`;
            layer4.style.cssText = `transform: translate(${positionX / forLayer4}%, ${positionY / forLayer4}%);`;
            layer5.style.cssText = `transform: translate(${positionX / forLayer5}%, ${positionY / forLayer5}%);`;
            layer6.style.cssText = `transform: translate(${positionX / forLayer6}%, ${positionY / forLayer6}%);`;
            layer7.style.cssText = `transform: translate(${positionX / forLayer7}%, ${positionY / forLayer7}%);`;
            layerGrass.style.cssText = `transform: translate(${positionX / forLayerGrass}%, ${positionY / forLayerGrass}%);`;
    
            requestAnimationFrame(ParalaxStyles); 
        };

        paralax.addEventListener("mousemove", function (e) {
            let paralaxW = paralax.offsetWidth;
            let paralaxH = paralax.offsetHeight;
    
            let coordX = e.pageX - paralaxW / 2;
            let coordY = e.pageY - paralaxH / 2;
    
            coordXprocent = coordX / paralaxW * 100;
            coordYprocent = coordY / paralaxH * 100;
        });
    
        let observerOptions = {
            root: null,
            threshold: 0.1 
        };
    
        let observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    isParallaxActive = true;
                    ParalaxStyles(); 
                } else {
                    isParallaxActive = false;
                }
            });
        };
    
        let observer = new IntersectionObserver(observerCallback, observerOptions);
    
        observer.observe(paralax);
    }


    
    let road = document.querySelector('.layer-road');
    let lastScrollY = 0;
    const speed = 0.3;
    const handleScroll = () => {
        let height = window.scrollY;
        road.style.transform = `translateY(${height * speed}px)`;
    };
    window.addEventListener("scroll", () => {
        if (Math.abs(lastScrollY - window.scrollY) > 20) {
            handleScroll();
            lastScrollY = window.scrollY;
        }
    });



    let menu = document.querySelector('.line');
    let button = document.querySelector('.menu');
    let zeroScale = () => button.style.transform = 'scale(1)';

    const toggleMenu = (isOpen) => {
        menu.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0)';
        button.style.transform = isOpen ? 'scale(1.05)' : 'scale(1)';
    };

    button.addEventListener('mouseover', () => toggleMenu(true));
    button.addEventListener('mouseout', () => toggleMenu(false));
    button.addEventListener('click', () => {
        toggleMenu(true);
        setTimeout(zeroScale, 200);
    });


    
    let closeButton = document.querySelector('.button-close');
    let contentMenu = document.querySelector('.content-menu');
    const toggleContentMenu = (isOpen) => {
        contentMenu.style.transform = isOpen ? 'translateX(0%)' : 'translateX(-101%)';
        closeButton.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(-90deg)';
        closeButton.style.scale = isOpen ? '1' : '0';
    };

    button.addEventListener('click', () => toggleContentMenu(true));
    closeButton.addEventListener('click', () => toggleContentMenu(false));


    let mail = document.querySelector('.mail');
    mail.addEventListener('click', () => {
        navigator.clipboard.writeText(mail.innerText).then(() => {
            alert('Copied to clipboard');
        });
    });



    const navItems = document.querySelectorAll(".navigation-item");
    const sections = document.querySelectorAll("article");

    navItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            const targetSection = index === 0 ? 0 : sections[index];
            targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
            toggleContentMenu(false); 
        });
    });
}


    let adaptHeader = document.querySelector('.adapt-header');
    let showBtn = document.querySelector('.show');
    const openHeaderWindow = () => {
        adaptHeader.style.display = 'flex';
        setTimeout(() => {
            adaptHeader.style.opacity = '1';
            adaptHeader.style.filter = 'blur(0)';
        }, 10);
    };

    const closeHeaderWindow = () => {
        adaptHeader.style.opacity = '0';
        adaptHeader.style.filter = 'blur(2em)';
        setTimeout(() => adaptHeader.style.display = 'none', 200);
    };

    showBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openHeaderWindow();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeHeaderWindow();
    });

    const headItems = document.querySelectorAll(".navbar_elem");
    headItems.forEach((item, index) => {
        if (index === 4) return;
        item.addEventListener("click", closeHeaderWindow);
    });

