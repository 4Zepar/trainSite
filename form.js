function setupCustomSelect(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
    const items = list.querySelectorAll('li');

    input.addEventListener('input', function () {
        let value = this.value.toLowerCase();  
        list.style.display = value ? 'block' : 'none';  

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
 
            if (item.textContent.toLowerCase().indexOf(value) > -1) {
                item.style.display = '';  
            } else {
                item.style.display = 'none';  
            }
        }
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

            input.dispatchEvent(new Event('input')); //пипец
        }
    });

    document.addEventListener('click', function (e) {
        if (!input.contains(e.target)) {
            list.style.display = 'none';  
        }
    });
}

setupCustomSelect('departure', 'cityListDeparture');
setupCustomSelect('destination', 'cityListDestination');



document.forms.mainForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let modalWindow = document.querySelector('.modal');
    let modalScreen = document.querySelector('.modal-screen');

    modalScreen.style.display = 'flex';

    setTimeout(() => {
        modalWindow.style.transform = `translateY(calc(var(--index) * 2))`; 
        modalWindow.style.opacity = '1'; 
        modalWindow.style.filter = 'none';
        modalScreen.style.backdropFilter = 'blur(.5em)';
    }, 10);
    
    setTimeout(() => {
        modalWindow.style.transform = `translateY(calc(var(--index) * 0))`; 
        modalWindow.style.opacity = '0'; 
        modalWindow.style.filter = 'blur(.3em)';
        modalScreen.style.backdropFilter = 'blur(0)';
        
        setTimeout(() => {
            modalScreen.style.display = 'none';
        }, 1200);
    }, 1200);

    formFields.forEach( field => {
        field.value = '';
        field.dispatchEvent(new Event('input'));
    });
});



flatpickr("#departureDate", {
    minDate: "today",
    allowInput: true
});

flatpickr("#arrivalDate", {
    minDate: "today",
    allowInput: true
});



let mainForm = document.forms.mainForm;
let formFields = mainForm.querySelectorAll('input');

formFields.forEach(field => {
    field.addEventListener('input', function () {
        let marker = this.nextElementSibling;

        if (!marker.classList.contains('marker')) {
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



let amountInput = mainForm.number;
let amount = document.querySelector('.amount');

amountInput.addEventListener('input', function(e) {
    if (this.validity.valid) {
        amount.textContent = this.value * 5;
    }
    else {
        amount.textContent = '-';
    }
})




let submitButton = document.querySelector('.form-button');

let zeroPdd = () => {
    submitButton.style.cssText = `padding: calc(var(--index) * .3) calc(var(--index) * 1.3)`;
}

submitButton.addEventListener('click', function(e) {
    submitButton.style.cssText = `padding: calc(var(--index) * .3) calc(var(--index) * .9)`;
    setTimeout(zeroPdd, 200);
})

submitButton.addEventListener('mouseover', function(e) {
    submitButton.style.cssText = `padding: calc(var(--index) * .3) calc(var(--index) * 1.3)`;
})
submitButton.addEventListener('mouseout', function(e) {
    submitButton.style.cssText = `padding: calc(var(--index) * .3) calc(var(--index) * .9)`;
})



