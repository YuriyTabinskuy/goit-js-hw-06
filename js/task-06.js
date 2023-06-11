const validationInput = document.querySelector('#validation-input');

const validationInputLength = Number(validationInput.dataset.length);

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputValueLength = Number(event.currentTarget.value.length);
  if (inputValueLength === validationInputLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}