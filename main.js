const cssInput = document.querySelector('.css-input');
const applyButton = document.querySelector('.apply-css');
const resetButton = document.querySelector('.reset-css');
const helpButton  = document.querySelector('.help-button')
const styleTag = document.getElementById('dynamic-style');
const defaultValue = cssInput.value;

helpButton.addEventListener('click', () => {
    window.confirm("You can edit the styling of this website (only for yourself, unfortunately). Simply type your CSS and click the button!");
});

cssInput.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;

        const spaces = "    ";
        this.value = this.value.substring(0, start) + spaces + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + spaces.length;
    }
});

applyButton.addEventListener('click', () => {
    styleTag.textContent = cssInput.value;
});

resetButton.addEventListener('click', () => {
    styleTag.textContent = defaultValue;
    cssInput.value = defaultValue;
});

