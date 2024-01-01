const button = document.querySelector('.switcher')
const rootElement = document.documentElement;
const rootStyles = getComputedStyle(rootElement);
const primaryColor = rootStyles.getPropertyValue('---primary-color').trim();
const textColor = rootStyles.getPropertyValue('---text-color').trim();

button.addEventListener('click', (event) => {
    if (event.target.name == "sunny-outline") {
        event.target.name = "moon-outline"
        rootElement.style.setProperty('---primary-color', "#191919");
        rootElement.style.setProperty('---text-color', "#fff");
    }
    else {
        event.target.name = "sunny-outline"
        rootElement.style.setProperty('---primary-color', "#fff");
        rootElement.style.setProperty('---text-color', "#191919");
    }
})