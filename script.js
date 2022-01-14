const nums = document.querySelectorAll('.num-but');
const funcs = document.querySelectorAll('.func-but'); 
const screen = document.querySelector('.screen'); 

let displayNums = 0; 
nums.forEach(num => num.addEventListener('click', function() {
    if (displayNums == 0){
        displayNums = num.textContent; 
    } else {
        displayNums = displayNums + num.textContent;
    }
    display(displayNums); 
})); 

function display(disNums){
    displayNums = disNums;  
    screen.textContent = disNums; 
}

const add = function(num1, num2) {
	return num1 + num2; 
};

const subtract = function(num1, num2) {
	return num1 - num2; 
};

const sum = function(array1) {
	return array1.reduce((firstNum, secNum) => firstNum + secondNum, 0); 
};

const multiply = function(num1, num2) {
  return num1 * num2; 
};

const power = function(num1, num2) {
	return Math.pow(num1, num2); 
};

const factorial = function(num) {
  let fac = num; 
	while (num > 0){
    fac *= --num; 
  }
  return fac; 
};

const operate = function(num1, num2, func){
    return func(num1, num2); 
}