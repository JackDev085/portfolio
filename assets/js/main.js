const button_contact = document.getElementById('contact-button');
const contatos_div = document.getElementById('contatos');
button_contact.addEventListener('click', () => {
    contatos_div.classList.add('outline')
});