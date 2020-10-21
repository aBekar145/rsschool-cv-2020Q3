const numbers = document.querySelectorAll('.num ber');
const operations = document.querySelectorAll('.operator');
const decimalBtn = document.getElementById('decimal');
const clearBtns = document.querySelectorAll('.clear-btn');
const resultBtn = document.getElementById('result');
const display = document.getElementById('display');
const squareRootBtn = document.getElementById('square-root');

let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let memoryPendingOperation = '';

for ( let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
};

for ( let i = 0; i < operations.length; i++) {
  let operationBtn = operations[i];
  operationBtn.addEventListener('click', function (e) {
    operation(e.target.textContent);
  });
};

for ( let i = 0; i < clearBtns.length; i++) {
  let clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
    clear(e.target.textContent);
  });
};

decimalBtn.addEventListener('click', decimal);

resultBtn.addEventListener('click', result);
squareRootBtn.addEventListener('click', squareRoot);


function numberPress(number) {
  if (memoryNewNumber) {
    display.value = number;
    memoryNewNumber = false;
  } else {
    if(display.value === '0') {
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
    // } else if (memoryPendingOperation === '√') {
    //   memoryCurrentNumber /= Math.sqrt(localOperationMemory);
    }else {
      memoryCurrentNumber = parseFloat(localOperationMemory);
    };
    display.value = +memoryCurrentNumber.toFixed(1);
    memoryPendingOperation = op;
  };
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


function decimal(){
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

// function squareRoot(op){
//   memoryNewNumber = true;
//   let localSquareRootMemory = display.value;
//   if (memoryPendingOperation === '√') {
//     console.log(localSquareRootMemory = Math.sqrt(memoryNewNumber));
//     memoryNewNumber = true;
//   } else {

//   };
//   display.value = localSquareRootMemory;
// };

console.log()