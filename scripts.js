const inputEl = document.querySelector('.inputEl');

const handleVisibility = ({type}) => {

    const [column] = [...document.getElementsByClassName(type)];
    const label = document.createElement('p')
    label.classList.add(type);
    label.classList.add('visible');
    label.textContent = type;
    column.append(label);

    setTimeout(() => {
        label.remove();
    }, 2000)
}


inputEl.addEventListener('input', handleVisibility)

inputEl.addEventListener('change', handleVisibility)

inputEl.addEventListener('keypress', handleVisibility)