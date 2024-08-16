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

        let ParalaxStyles = () => {
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
        }
        ParalaxStyles();

        paralax.addEventListener("mousemove", function (e) {
            let paralaxW = paralax.offsetWidth;
            let paralaxH = paralax.offsetHeight;

            let coordX = e.pageX - paralaxW / 2;
            let coordY = e.pageY - paralaxH / 2;

            coordXprocent = coordX / paralaxW * 100;
            coordYprocent = coordY / paralaxH * 100;
        });
    }

    
    let road = document.querySelector('.layer-road');
    let train = document.querySelector('.layer-train');

    window.addEventListener("scroll", function (e) {
        let height = window.scrollY;
        let speed = 0.3;
        
        road.style.cssText = `transform: translateY(${height * speed}px);`;
        train.style.cssText = `transform: translateY(${height * speed}px);`;
    });
}