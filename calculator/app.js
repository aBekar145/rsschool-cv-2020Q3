let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operator');
let decimalBtn = document.getElementById('decimal');
let clearBtns = document.querySelectorAll('.clear-btn');
let resultBtn = document.getElementById('result');
let squareRootBtn = document.getElementById('square-root');
let exponentiationBtn = document.getElementById('exponentiation');
let display = document.getElementById('display');

let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let memoryPendingOperation ='';

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
};

for (let i = 0; i < operations.length; i++) {
  let operationBtn = operations[i];
  operationBtn.addEventListener('click', function (e) {
    operation(e.target.textContent);
  });
};

for (let i = 0; i < clearBtns.length; i++) {
  let clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
    clear(e.target.textContent);
  });
};

decimalBtn.addEventListener('click', decimal);

// resultBtn.addEventListener('click',result);

squareRootBtn.addEventListener('click', getSquareRoot);

exponentiationBtn.addEventListener('click', getExponentiation);



function numberPress(number) {
  if (memoryNewNumber) {
    display.value = number;
    memoryNewNumber = false;
  } else {
    if (display.value === '0') {
      display.value = number;
    } else {
      display.value += number;
    };
  };

};

function operation(op) {
  let localOperationMemory = display.value;

  if (memoryNewNumber && memoryPendingOperation !== '=') {
    display.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    if (memoryPendingOperation === '+') {
      memoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === '-') {
      memoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === '*') {
      memoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === '/') {
      memoryCurrentNumber /= parseFloat(localOperationMemory);
    }
    // else if (memoryPendingOperation === '√') {
    //   Math.sqrt(memoryCurrentNumber);
    // }
    else {
      memoryCurrentNumber = parseFloat(localOperationMemory);
    };
    display.value = memoryCurrentNumber;
    memoryPendingOperation = op;
  };
};

function decimal() {
  let localDecimalMemory = display.value;
  if (memoryNewNumber) {
    localDecimalMemory = '0.';
    memoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    };
  };
  display.value = localDecimalMemory;
};

function clear(id) {
  if (id === 'ce') {
    display.value = '0';
    memoryNewNumber = true;
  } else if (id === 'c') {
    display.value = '0';
    memoryNewNumber = true;
    memoryCurrentNumber = 0;
    memoryPendingOperation = '';
  }
};

function getSquareRoot() {
  let localSquareRootMemory = display.value;
  if (memoryNewNumber) {
    localSquareRootMemory = (localSquareRootMemory);
  }
  display.value = memoryCurrentNumber;
};


function getExponentiation() {
  console.log('Клик по кнопке Сетепень!');
};

