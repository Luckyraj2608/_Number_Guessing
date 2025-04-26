console.log("script working..");

let button = document.getElementById('guess');
let restart = document.getElementById('restart');
let counter = document.getElementById('counter');
let hint = document.getElementById('hint');
let randomValue = generateRandomValue();
let count = 0;
let val;
let won = false;

function generateRandomValue(){
    return Math.floor(Math.random() * 100 + 1);

}

button.onclick = function(){
    val = Number(document.getElementById('guessValue').value);
    getHint(val);
    increaseCounter();
}
function getHint(val) {
    if (val >= 1 && val <= 100){
        if (val == randomValue) {
            hint.innerText = `Congratulation, you won in ${count + 1} attempt`;
            won = true;

        } else if ((randomValue - val) > 10) {
            hint.innerText = "Your Guess is too low!"
        } else if ((val - randomValue) > 10) {
            hint.innerText = "Your Guess is too High!"
        } else if ((randomValue - val) <= 10 && randomValue > val) {
            hint.innerText = "Your Guess is slightly low!"
        } else if ((val - randomValue) < 10 && val > randomValue) {
            hint.innerText = "Your Guess is too High!"
        }
    } else {
        hint.innerText = "No Hints for this value"
    }
}

function increaseCounter(){
    if (count < 4) {
        count++;
        counter.innerText = count;
    } else {
        counter.innerText = "Guesses Finished";
        if (!won) {
            hint.innerText = `You lost, the answer was ${randomValue} `
        }
    }
}

restart.onclick = function(){
    location.href = "index.html";
}