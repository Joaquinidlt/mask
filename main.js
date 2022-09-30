const inputCard = document.querySelector('#inputCard');
const inputDate = document.querySelector('#inputDate');
const inputCVV = document.querySelector('#inputCVV');

const maskNumber = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';

let current = "";
let cardNumber = []; // para cada uno de mis inputs voy a crear un arreglo, donde voy a almacenar los valores,
let dateNumber = []; // luego esos valores voy a transformar y al final los muestro en mi input, es un paso intermedio.
let cvvNumber = [];

inputCard.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        return;
    }

    e.preventDefault(); // esta function me permite anular la funcionalidad nativa, de lo que pasaria si preciono la tecla keydown.
    handleInput(maskNumber, e.key, cardNumber); // este va tener la mascara, me pide "maskNumber", tambien me pide la tecla que estoy presionando "e.key" y necesito el arreglo "cardNumber".
    inputCard.value = cardNumber.join("");
});

inputDate.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        return;
    }
    e.preventDefault();
    handleInput(maskDate, e.key, dateNumber);
    inputDate.value = dateNumber.join("");
});

inputCVV.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        return;
    }
    e.preventDefault();
    handleInput(maskCVV, e.key, cvvNumber);
    inputCVV.value = cvvNumber.join("");
});

function handleInput(mask, key, arr) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // con esto le digo a mi codigo que si no preciona alguno de estos numeros, no va a ser procesado.

    if (key === 'Backspace' && arr.length > 0) { // si la tecla que estoy presionando es igual a la de retroceso y el arreglo que tengo como parametro tiene mas 
        arr.pop();                              // de un elemento dentro, entonces saco ese elemento
        return;
    }
    if (numbers.includes(key) && arr.length + 1 <= mask.length) { // "numbers.includes(key)" va a validar si el valor de key (tecla que estamos presionando) esta dentro de numbers. "arr.length + 1 <= mask.length" en esta linea, preguntamos si el arreglo que tenemos sumado el elemento que vamos a agregar, es menor o igual al numeros de espacios de mask.
        if (mask[arr.length] === "-" || mask[arr.length] === "/") {
            arr.push(mask[arr.length], key);
        } else {
            arr.push(key);
        }
    }
}