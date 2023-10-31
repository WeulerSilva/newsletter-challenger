const form = document.querySelector('#form');
const email = document.querySelector('#email');
const erro = document.querySelector('.erro');
const image = document.querySelector('.image');
const subscrib = document.querySelector('.subscrib');
const myForm = document.querySelector('.my-formulary');
const sucess = document.querySelector('.email-sucess');
const validP = document.querySelector('.email-user');
const buttSubmit = document.querySelector('#butt');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let emailValue = email.value;

if(email.value === ''  || !EmailValid(email.value)) {
  erro.style.display = 'flex';
  email.style.border = '1px solid #ff527b';
  email.style.backgroundColor = '#ffe8e6';
  email.style.color = '#ff527b';

  return
}else {
  image.style.display = 'none';
  subscrib.style.display = 'none';
  myForm.classList.remove('my-formulary');
  myForm.classList.add('new');
  sucess.style.display = 'flex';
  validP.innerHTML = emailValue;

  buttSubmit.addEventListener('click', () => {
    form.submit();
  })
};
})

function EmailValid(regex) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if(emailRegex.test(regex)) {
    return true;
  }

  return false
}

email.addEventListener('click', () => {
  email.removeAttribute('value')
});