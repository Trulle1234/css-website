const cssInput = document.querySelector('.css-input');
const applyButton = document.querySelector('.apply-css');
const resetButton = document.querySelector('.reset-css')
const styleTag = document.getElementById('dynamic-style');
const defaultValue = cssInput.value

applyButton.addEventListener('click', () => {
    styleTag.textContent = cssInput.value;
});

resetButton.addEventListener('click', () => {
    styleTag.textContent = defaultValue
    cssInput.value = defaultValue;
})
