'use strict';
//! Declarations
const EtS = document.querySelector('#EtS');
const DtS = document.querySelector('#DtS');
const StD = document.querySelector('#StD');
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'AC', 0, ''];
const operators = ['+', '-', '*', '/'];

const inputDisplay = document.querySelector('.input-display');
const equalOperatorButton = document.querySelector('.equal-operator');
let firstInput;
let operatorValue;

//! create Euro to Shekels Button
const sIcon = document.createElement('i');
sIcon.classList.add('fa-solid');
sIcon.classList.add('fa-shekel-sign');
const arrowIcon = document.createElement('i');
arrowIcon.classList.add('fa-solid');
arrowIcon.classList.add('fa-arrow-right');
const eIcon = document.createElement('i');
eIcon.classList.add('fa-solid');
eIcon.classList.add('fa-euro-sign');

const createNumberButtons = () => {
  const numbersContainer = document.querySelector('.numbers-container');

  numbersArray.forEach(number => {
    const button = document.createElement('button');
    numbersContainer.appendChild(button);
    button.textContent = number;

    if (button.textContent === 'AC') {
      button.classList.add('clear-button');
    }

    if (button.textContent === '') {
      button.classList.add('StE');
      button.appendChild(sIcon);
      button.appendChild(arrowIcon);
      button.appendChild(eIcon);
    }

    const displayNumButtons = function () {
      if (operators.includes(inputDisplay.textContent[0])) {
        inputDisplay.textContent = '';
      }
      if (button.textContent !== 'AC')
        inputDisplay.textContent =
          +inputDisplay.textContent === 0
            ? number
            : inputDisplay.textContent + number;
    };

    button.addEventListener('click', displayNumButtons);
    button.removeEventListener('click', () => {
      displayNumButtons;
    });
  });

  const StE = document.querySelector('.StE');
  const clearButton = document.querySelector('.clear-button');

  clearButton.addEventListener('click', () => {
    inputDisplay.textContent = 0;
  });
  StE.addEventListener('click', () => {
    firstInput = +inputDisplay.textContent;
    inputDisplay.textContent = firstInput * 0.24;
  });
};

const createOperatorsButtons = () => {
  const operatorsContainer = document.querySelector('.operators-container');

  operators.forEach(operator => {
    const operatorButton = document.createElement('button');
    operatorsContainer.appendChild(operatorButton);
    operatorButton.textContent = operator;

    const displayOpButtons = function () {
      firstInput = inputDisplay.textContent;
      inputDisplay.textContent = operator;
      operatorValue = operator;
    };

    operatorButton.addEventListener('click', displayOpButtons);

    operatorButton.removeEventListener('click', () => {
      displayOpButtons;
    });
  });
};

const calculate = () => {
  const secondInput = inputDisplay.textContent;
  if (operatorValue === '+') {
    inputDisplay.textContent = parseInt(firstInput) + parseInt(secondInput);
  }
  if (operatorValue === '-') {
    inputDisplay.textContent = parseInt(firstInput) - parseInt(secondInput);
  }
  if (operatorValue === '*') {
    inputDisplay.textContent = parseInt(firstInput) * parseInt(secondInput);
  }
  if (operatorValue === '/') {
    inputDisplay.textContent = parseInt(firstInput) / parseInt(secondInput);
  }
};

//! new Code ex-curr
EtS.addEventListener('click', () => {
  firstInput = inputDisplay.textContent;
  inputDisplay.textContent = firstInput * 4;
});
DtS.addEventListener('click', () => {
  firstInput = inputDisplay.textContent;
  inputDisplay.textContent = firstInput * 3.8;
});
StD.addEventListener('click', () => {
  firstInput = inputDisplay.textContent;
  inputDisplay.textContent = firstInput * 0.26;
});

equalOperatorButton.addEventListener('click', calculate);
createNumberButtons();
createOperatorsButtons();
