const discountPattern = /[1-2]{5}/
const errorMessage = "Use the correct discount code"

const discount = document.querySelector('#discount');

discount.addEventListener('input', ({target}) => {
    const isValid = target.value.match(discountPattern);

    target.setCustomValidity(isValid ? '' : errorMessage)
})