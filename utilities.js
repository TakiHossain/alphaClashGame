function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setKeyboardBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeKeyboardBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId)
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}