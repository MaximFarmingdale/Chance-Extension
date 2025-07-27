const result = document.getElementById("result");
document.getElementById("roll-button").addEventListener("click", () => {
    result.textContent = `You rolled a ${random(6)}!`
});
document.getElementById("flip-button").addEventListener("click", () => {
    const flipResult = random(2) === 1 ? "heads": "tails";
    result.textContent = `The coin was ${flipResult}!`
});
function random(number){
    return Math.floor(Math.random() * number) + 1;
}