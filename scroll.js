document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        layers: document.querySelectorAll('.layer1, .layer2, .layer3, .layer4, .layer5, .layer6, .layer7'),
        trainDoor: document.querySelector('.train-door'),
        woomen: document.querySelector('.woomen'),
        title: document.querySelector('.welcome-title'),
    };

    const viewportHeight = window.innerHeight; 
    const maxScroll = 1.5 * viewportHeight; 

    if (elements.woomen) {
        elements.woomen.style.transform = 'scale(6)';
    }

    let scrollY = 0;
    const onScroll = () => {
        scrollY = window.scrollY;
        requestAnimationFrame(updateStyles);
    };

    const updateStyles = () => {
        const scrollPercent = Math.min(scrollY / maxScroll, 1); 


        if (elements.woomen) {
            const maxBlur = 10, targetBlur = 0;
            const blurFactor = maxBlur * (1 - scrollPercent);

            const maxScale = 6, targetScale = 0.9;
            const scaleFactor = maxScale - (maxScale - targetScale) * scrollPercent;

            elements.woomen.style.filter = `blur(${blurFactor}px)`;
            elements.woomen.style.transform = `scale(${Math.max(scaleFactor, targetScale)})`;
        }


        if (elements.trainDoor) {
            const startScroll = 170 * viewportHeight / 100; 
            const endScroll = 270 * viewportHeight / 100;

            if (scrollY >= startScroll && scrollY <= endScroll) {
                const rangePercent = (scrollY - startScroll) / (endScroll - startScroll);
                const opacity = rangePercent;
                const blur = 10 - 5 * rangePercent; 

                elements.trainDoor.style.opacity = opacity;
                elements.trainDoor.style.filter = `blur(${blur}px)`;
            } else {
                elements.trainDoor.style.opacity = scrollY < startScroll ? 0 : 1;
                elements.trainDoor.style.filter = scrollY < startScroll ? 'blur(10px)' : 'blur(5px)';
            }
        }


        if (elements.title) {
            const maxBlur = 20, maxOpacity = 1;
            const opacityFactor = maxOpacity * (1 - scrollPercent);
            const blurFactor = maxBlur * scrollPercent;

            elements.title.style.filter = `blur(${blurFactor}px)`;
            elements.title.style.opacity = opacityFactor.toString();
        }
    };

    window.addEventListener('scroll', onScroll);
});
