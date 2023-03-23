const formEL = document.querySelector ('[name="contact_form"]');

formEL.addEventListener('submit', event => {
    event.preventDefault(); 
    const { user_name, user_phone, user_email, user_comment } = event.currentTarget.elements;
    if  (user_name.value !== '' && user_phone.value !== '' && user_email.value !== '') {
     console.log('Имя пользователя:', user_name.value);
     console.log('Номер телефона пользователя:', user_phone.value);
     console.log('Почта пользователя:', user_email.value);
     console.log('Комментарий пользователя:', user_comment.value);
    } else {
        alert('Введите данные в поля формы');
    }
});
