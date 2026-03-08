document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
  
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        
        let isValid = true;

        const nameInput = document.getElementById('name');
        const nameValue = nameInput.value.trim();
        const words = nameValue.split(' ').filter(w => w.length > 0);
        if (words.length < 2) {
            nameInput.classList.add('is-invalid');
            isValid = false;
        }

        const phoneInput = document.getElementById('phone');
        const phoneValue = phoneInput.value.trim();
        const phoneDigits = phoneValue.replace(/\D/g, '');
        if (phoneDigits.length < 10) {
            phoneInput.classList.add('is-invalid');
            isValid = false;
        }

        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        }

        const subjectInput = document.getElementById('subject');
        if (subjectInput.value === '') {
            subjectInput.classList.add('is-invalid');
            isValid = false;
        }

        const messageInput = document.getElementById('message');
        const messageValue = messageInput.value.trim();
        if (messageValue.length < 10) {
            messageInput.classList.add('is-invalid');
            isValid = false;
        }

        const consentInput = document.getElementById('consent');
        if (!consentInput.checked) {
            consentInput.classList.add('is-invalid');
            isValid = false;
        }

        if (isValid) {
            const formData = {
                name: nameValue,
                phone: phoneValue,
                email: emailValue,
                subject: subjectInput.value,
                message: messageValue,
                consent: consentInput.checked
            };

            const submitEvent = new CustomEvent('formValid', { detail: formData });
            document.dispatchEvent(submitEvent);

            alert('Форма отправлена! Данные в консоли.');
            form.reset();
        }
    });

    document.querySelectorAll('.form-control, .form-select, .form-check-input').forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('is-invalid');
        });
    });
});