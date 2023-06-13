const input = document.querySelector('#validation-input'); 
const validLength = input.dataset.length; 
 
input.addEventListener('blur', () => { 
  const isLengthValid = input.value.length === parseInt(validLength); 
   
  input.classList.toggle('valid', isLengthValid); 
  input.classList.toggle('invalid', !isLengthValid); 
});