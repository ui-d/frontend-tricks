const dateInput = document.querySelector('.inputEl');
const dateOutput = document.querySelector('.alert');
      dateInput.valueAsDate = new Date();


dateInput.addEventListener('input', () => {
    // dateOutput. innerText = new Date(dateInput.value);
    dateOutput. innerText = dateInput.valueAsDate;
})