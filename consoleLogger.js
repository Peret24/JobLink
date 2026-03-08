document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('formValid', function(event) {
        const formData = event.detail;
        
        console.clear();
        console.log('Новые данные формы: ');
        console.log('ФИО:', formData.name);
        console.log('Телефон:', formData.phone);
        console.log('Email:', formData.email);
        console.log('Тема:', formData.subject);
        console.log('Сообщение:', formData.message);
        console.log('Согласие:', formData.consent ? 'Да' : 'Нет');
        console.log('Время отправки:', new Date().toLocaleString());
    });
});