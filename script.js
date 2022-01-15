const nums = document.querySelectorAll('.num-but');
const funcs = document.querySelectorAll('.func-but'); 
const screen = document.querySelector('.screen'); 
const equals = document.querySelector('.equals'); 

let chosen = []; 
let term = 0; 

nums.forEach(num => num.addEventListener('click', () => {
    display(num.textContent); 
    if (!chosen[term]){
        chosen[term] = num.textContent; 
    } else {
        chosen[term] = chosen[term] + num.textContent;
         
    }
})); 

function display(butClicked){ 
    if (screen.textContent == 0){
        screen.textContent = butClicked; 
    } else {
        screen.textContent += butClicked; 
    }
}
function displayAndReset(butClicked){
    screen.textContent = butClicked; 
}

funcs.forEach(func => func.addEventListener('click', () => {
    if (chosen[0]){ 
        term++; 
        chosen[term] = func.id; 
        display(func.textContent); 
    }
    term++; 
}))

equals.addEventListener('click', () => {
    equalsMethod(chosen);  
}); 

function equalsMethod(chosenNum){
    let result = chosenNum[0];
    let i = 1;  
    while (i <= term){
        let funcName = chosenNum[i];
        if (funcName == 'add'){ 
            result = add(result, chosenNum[i+1]);
        } else if (funcName == 'subtract') result = subtract(result, chosenNum[i+1]);
        else if (funcName == 'multiply') result = multiply(result, chosenNum[i+1]);
        else if (funcName == 'divide') result = divide(result, chosenNum[i+1]);
        else {} 
        i += 2; 
    }
    displayAndReset(result);  
}



function add(num1, num2) {
	return +num1 + +num2; 
}

function subtract(num1, num2) {
	return +num1 - +num2; 
};

function sum(array1) {
	return array1.reduce((firstNum, secNum) => +firstNum + +secondNum, 0); 
};

function multiply(num1, num2) {
  return +num1 * +num2; 
};

function power(num1, num2) {
	return Math.pow(num1, num2); 
};
