let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;
    
    if (userGuess === randomNumber) {
        document.getElementById('result').innerText = `Félicitations! Vous avez deviné le nombre ${randomNumber} en ${attempts} essais.`;
        document.getElementById('guess').value = '';
        randomNumber = Math.floor(Math.random() * 100) + 1; // Réinitialiser le jeu
        attempts = 0; // Réinitialiser les essais
    } else if (userGuess < randomNumber) {
        document.getElementById('result').innerText = 'Trop bas! Essayez encore.';
    } else if (userGuess > randomNumber) {
        document.getElementById('result').innerText = 'Trop haut! Essayez encore.';
    }
});
