document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        layers: document.querySelectorAll('.layer1, .layer2, .layer3, .layer4, .layer5, .layer6, .layer7'),
        train: document.querySelector('.layer-train'),
        grass: document.querySelector('.layer-grass'),
        trainDoor: document.querySelector('.train-door'),
        woomen: document.querySelector('.woomen'),
    };
    elements.woomen.style.transform = `scale(6)`;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY; // Текущее положение прокрутки
        const viewportHeight = window.innerHeight; // Высота окна
        const maxScroll = 1.5 * viewportHeight; // 150vh в пикселях

        // Рассчёт прогресса прокрутки от 0 до 150vh
        const scrollPercent = Math.min(scrollY / maxScroll, 1);

        // Эффект для всех слоёв с масштабом
        elements.layers.forEach((layer) => {
            const maxScale = 1.2; // Начальный масштаб
            const targetScale = 1.08; // Финальный масштаб
            const scaleFactor = maxScale - (maxScale - targetScale) * scrollPercent;

            layer.style.transform = `scale(${scaleFactor})`;
        });

        // Эффект размытия и масштабирования для "woomen"
        if (elements.woomen) {
            const maxBlur = 10; // Начальное размытие
            const targetBlur = 0; // Финальное размытие
            const blurFactor = maxBlur * (1 - scrollPercent);

            const maxScale = 6; // Начальный масштаб
            const targetScale = .9; // Финальный масштаб
            const scaleFactor = maxScale - (maxScale - targetScale) * scrollPercent;

            elements.woomen.style.filter = `blur(${blurFactor}px)`;
            elements.woomen.style.transform = `scale(${Math.max(scaleFactor, targetScale)})`;
        }

        // Эффект для "train-door"
        if (elements.trainDoor) {
            const startScroll = 170; // Начало появления в vh
            const endScroll = 270; // Конец появления в vh
            const rangeStart = startScroll * viewportHeight / 100;
            const rangeEnd = endScroll * viewportHeight / 100;

            if (scrollY >= rangeStart && scrollY <= rangeEnd) {
                const rangePercent = (scrollY - rangeStart) / (rangeEnd - rangeStart);
                const opacity = rangePercent;
                const blur = 10 - 5 * rangePercent; // От 10px до 5px

                elements.trainDoor.style.opacity = opacity;
                elements.trainDoor.style.filter = `blur(${blur}px)`;
            } else if (scrollY < rangeStart) {
                elements.trainDoor.style.opacity = 0;
                elements.trainDoor.style.filter = `blur(10px)`;
            } else {
                elements.trainDoor.style.opacity = 1;
                elements.trainDoor.style.filter = `blur(5px)`;
            }
        }
    });
});



// ---------------------------------------------------------------------------



