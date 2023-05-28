let cardNumber = document.getElementById("userInput").value;

/*let cardNumber = 6011127961777935;*/

let numberArray = Array.from(String(cardNumber), Number);

const validateCred = (array) => {
    let total = 0;
    for (let i = array.length -1; i >= 0; i--) {
      let currentValue = array[i];
      if ((array.length - 1 - i) % 2 === 1) {
        currentValue *= 2;
        if (currentValue > 9) {
            currentValue -= 9;
        }
      }
      total += currentValue;
    }

    if (total % 10 === 0) {
        return document.getElementById("output").innerHTML = "This is a valid number!";
    } else if (total % 10 !== 0){
        return document.getElementById("output").innerHTML = "This is NOT a valid number!";
    } else {
        return document.getElementById("output").innerHTML = "Please enter a 16-digit number.";
    }
};

/*console.log(validateCred(numberArray));
console.log(numberArray);*/

const userClick = document.getElementById("clickableButton");
const cardStatement = document.getElementById("output");

userClick.addEventListener('click', () => {
    const finalStatement = validateCred(numberArray);
    cardStatement.innerHTML = finalStatement;
});

let hiddenText = document.getElementById("newText");
let nervousButtonActivate = document.getElementById("nervousButton");
let resetNervousText = document.getElementById("nervous");
let resetEverything = document.getElementById("resetButton");

hiddenText.hidden = true;

nervousButtonActivate.onclick = function() {
    hiddenText.hidden = false;
    resetNervousText.hidden = true;
    nervousButtonActivate.hidden = true;
};

resetEverything.onclick = function() {
    hiddenText.hidden = true;
    resetNervousText.hidden = false;
    nervousButtonActivate.hidden = false;
}

