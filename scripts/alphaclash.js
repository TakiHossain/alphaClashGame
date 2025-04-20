function playNow() {
    hideElementById('home');
    hideElementById('final-score');
    showElementById('game');

    setTextElementValueById('life', 5);
    setTextElementValueById('score', 0);

    continueGame();
}

function getRandomAlphabets() {
    const randomAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = Math.floor(Math.random() * randomAlphabet.length);
    const letter = randomAlphabet[index];
    return letter;
}

console.log('random', getRandomAlphabets());

function handleKeyboardButtonPress(event) {
    const playerPress = event.key;
    console.log('player pressed', playerPress);

    const currentAlphabetText = document.getElementById('displayLetter');
    const currentAlphabet = currentAlphabetText.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPress === expectedAlphabet) {
        console.log('nice job!');
        const currentScore = getTextElementValueById('score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('score', updatedScore);
        removeKeyboardBackgroundColor(expectedAlphabet);
        continueGame();
    }

    else {
        console.log('try again');
        const currentLife = getTextElementValueById('life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }

    }

    if (playerPress === 'Escape') {
        console.log('game over');
        gameOver();
    }
}

document.addEventListener('keydown', handleKeyboardButtonPress);

function gameOver() {
    hideElementById('home');
    hideElementById('game');
    showElementById('final-score');

    const finalScore = getTextElementValueById('score');
    setTextElementValueById('finalScore', finalScore);

    const currentAlphabet = getElementTextById('displayLetter').toLowerCase();
    removeKeyboardBackgroundColor(currentAlphabet);
}

function continueGame() {
    const alphabet = getRandomAlphabets();
    const currentAlphabet = document.getElementById('displayLetter');
    currentAlphabet.innerText = alphabet.toUpperCase();

    setKeyboardBackgroundColor(alphabet);
}