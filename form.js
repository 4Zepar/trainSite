// Оптимизация кастомного выбора
function setupCustomSelect(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
    const items = list.querySelectorAll('li');

    input.addEventListener('input', function () {
        const value = this.value.toLowerCase();  
        list.style.display = value ? 'block' : 'none';  

        items.forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(value) ? '' : 'none';
        });
    });

    input.addEventListener('focus', function () {
        if (this.value === '') {
            list.style.display = 'block';  
        }
    });

    list.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            input.value = e.target.getAttribute('data-value');  
            list.style.display = 'none';  
            input.dispatchEvent(new Event('input')); // Оповещение о изменении
        }
    });

    document.addEventListener('click', function (e) {
        if (!input.contains(e.target) && !list.contains(e.target)) {
            list.style.display = 'none';  
        }
    });
}

setupCustomSelect('departure', 'cityListDeparture');
setupCustomSelect('destination', 'cityListDestination');

// -------------------------------------------------------------------------------------

// Оптимизация submit формы
document.forms.mainForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const modalWindow = document.querySelector('.modal');
    const modalScreen = document.querySelector('.modal-screen');

    modalScreen.style.display = 'flex';

    requestAnimationFrame(() => {
        modalWindow.style.transform = `translateY(0)`; 
        modalWindow.style.opacity = '1'; 
        modalWindow.style.filter = 'none';
        modalScreen.style.backdropFilter = 'blur(.5em)';
    });

    setTimeout(() => {
        modalWindow.style.transform = `translateY(3rem)`; 
        modalWindow.style.opacity = '0'; 
        modalWindow.style.filter = 'blur(.3em)';
        modalScreen.style.backdropFilter = 'blur(0)';
        
        setTimeout(() => {
            modalScreen.style.display = 'none';
        }, 1200);
    }, 1200);

    formFields.forEach(field => {
        field.value = '';
        field.dispatchEvent(new Event('input'));
    });
});

// -------------------------------------------------------------------------------------

// Оптимизация для flatpickr
document.addEventListener("DOMContentLoaded", () => {
    flatpickr("#departureDate", { minDate: "today", allowInput: true });
    flatpickr("#arrivalDate", { minDate: "today", allowInput: true });
});

// -------------------------------------------------------------------------------------

// Оптимизация инпутов формы
let mainForm = document.forms.mainForm;
let formFields = mainForm.querySelectorAll('input');

formFields.forEach(field => {
    field.addEventListener('input', function () {
        let marker = this.nextElementSibling;

        // Проверяем, что маркер существует, и если нет, ищем его внутри родительского .form-group
        if (!marker || !marker.classList.contains('marker')) {
            const parent = this.closest('.form-group');
            if (parent) {
                marker = parent.querySelector('.marker');
            }
        }

        if (marker) {
            if (this.validity.valid && this.value) {
                marker.style.color = 'green';
                marker.textContent = '●';
                marker.style.scale = '1.2';
            } else {
                marker.style.color = 'red';
                marker.textContent = '✖';
                marker.style.scale = '1';
            }
        }
    });
});


// -------------------------------------------------------------------------------------

// Оптимизация вычисления суммы
let amountInput = mainForm.number;
let amount = document.querySelector('.amount');

amountInput.addEventListener('input', function () {
    amount.textContent = this.validity.valid ? this.value * 5 : '-';
});

// -------------------------------------------------------------------------------------

// Оптимизация кнопки submit
let submitButton = document.querySelector('.form-button');

submitButton.addEventListener('click', () => {
    submitButton.style.cssText = `padding: calc(var(--index) * .3) calc(var(--index) * .9)`;
    setTimeout(() => {
        submitButton.style.cssText = `padding: calc(var(--index) * .3) calc(var(--index) * 1.3)`;
    }, 200);
});

submitButton.addEventListener('mouseover', () => {
    submitButton.style.cssText = `padding: calc(var(--index) * .3) calc(var(--index) * 1.3)`;
});

submitButton.addEventListener('mouseout', () => {
    submitButton.style.cssText = `padding: calc(var(--index) * .3) calc(var(--index) * .9)`;
});

// -------------------------------------------------------------------------------------

// Оптимизация модальных окон
function setupModal(triggerBtns, modalWindow, modalScreen) {
    triggerBtns.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            modalScreen.style.display = 'flex';
            requestAnimationFrame(() => {
                modalScreen.style.opacity = '1'; 
                modalScreen.style.backdropFilter = 'blur(.5em)';
                requestAnimationFrame(() => {
                    modalWindow.style.transform = `translateY(0)`; 
                    modalWindow.style.opacity = '1'; 
                });
            });
        });
    });

    modalScreen.addEventListener('click', function (e) {
        if (e.target === modalScreen) closeModal(modalWindow, modalScreen);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal(modalWindow, modalScreen);
    });

    function closeModal(modalWindow, modalScreen) {
        modalWindow.style.transform = `translateY(3rem)`; 
        modalWindow.style.opacity = '0'; 
        
        setTimeout(() => {
            modalScreen.style.opacity = '0'; 
            modalScreen.style.backdropFilter = '0';
            setTimeout(() => {
                modalScreen.style.display = 'none';
            }, 200);
        }, 400);
    }
}

setupModal(document.querySelectorAll('.login'), document.querySelector('.login-form'), document.querySelector('.login-screen'));
setupModal(document.querySelectorAll('.contct'), document.querySelector('.contact'), document.querySelector('.contact-screen'));

// -------------------------------------------------------------------------------------

// Оптимизация логин формы
let logformMain = document.querySelector('.logform-main');
let logformFields = logformMain.querySelectorAll('input');

logformFields.forEach(field => {
    field.addEventListener('input', function () {
        const marker = this.nextElementSibling || this.closest('.form-group')?.querySelector('.marker');
        
        if (marker) {
            if (this.validity.valid && this.value) {
                marker.style.color = 'green';
                marker.textContent = '●';
                marker.style.scale = '1.2';
            } else {
                marker.style.color = 'red';
                marker.textContent = '✖';
                marker.style.scale = '1';
            }
        }
    });
});
