/* Aufgabe 1 */
const zahl = document.getElementById('zahl');
const ergebnis = document.getElementById('ergebnis');

function verdoppeln() {
    const rechnung = zahl.value * 2;
    console.log(rechnung);
    ergebnis.innerHTML = rechnung;
}

/* Aufgabe 2 */
const jahr = document.getElementById('jahr');
const result = document.getElementById('result');

const button = document.getElementById('button');
button.addEventListener('click', getAlter);

function getAlter() {
    const jahrAlter = 2023 - jahr.value;
    console.log(jahrAlter);
    result.innerHTML = jahrAlter;
}

/* Aufgabe 3 */
const alterEins = document.getElementById('alterEins');
const alterZwei = document.getElementById('alterZwei');
const differenz = document.getElementById('differenz');

const nochEinButton = document.getElementById('nochEinButton');
nochEinButton.addEventListener('click', getDifferenz);

function getDifferenz () {
    const nochEinErgebnis = Math.abs(alterEins.value - alterZwei.value);
    console.log(nochEinErgebnis);
    differenz.innerHTML = nochEinErgebnis;
}

/* Aufgabe 4 */
const plusEins = document.getElementById('plusEins');
const minusEins = document.getElementById('minusEins');
const plusZehn = document.getElementById('plusZehn');
const minusZehn = document.getElementById('minusZehn');
const plusHundert = document.getElementById('plusHundert');
const minusHundert = document.getElementById('minusHundert');
const reset = document.getElementById('reset');
const malZwei = document.getElementById('malZwei');

const nextResult = document.getElementById('nextResult');
let currentNumber = 0;

plusEins.addEventListener("click", () => {
    currentNumber += 1;
    nextResult.innerHTML = currentNumber;
});

minusEins.addEventListener("click", () => {
    currentNumber -= 1;
    nextResult.innerHTML = currentNumber;
});

plusZehn.addEventListener("click", () => {
    currentNumber += 10;
    nextResult.innerHTML = currentNumber;
});

minusZehn.addEventListener("click", () => {
    currentNumber -= 10;
    nextResult.innerHTML = currentNumber;
});

plusHundert.addEventListener("click", () => {
    currentNumber += 100;
    nextResult.innerHTML = currentNumber;
});

minusHundert.addEventListener("click", () => {
    currentNumber -= 100;
    nextResult.innerHTML = currentNumber;
});

reset.addEventListener("click", () => {
    currentNumber = 0;
    nextResult.innerHTML = currentNumber;
});

malZwei.addEventListener("click", () => {
    currentNumber = currentNumber*2;
    nextResult.innerHTML = currentNumber;
});

/* Aufgabe 5 */
let headline = document.getElementById("headline");
let switchButton = document.getElementById("switchButton");
let resetButton = document.getElementById("resetButton");

switchButton.addEventListener("click", () =>  {
headline.classList.add("optionZwei");
});

resetButton.addEventListener("click", () =>  {
headline.classList.remove("optionZwei");
headline.classList.add("optionEins");
});