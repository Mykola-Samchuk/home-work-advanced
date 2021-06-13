// Task 1: Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.

function getMaxDigit(number){

   if(number < 0){
      alert(`Введіть коректне число`)
   }

   const strArrNumber = String(number).split(``); //перетворюю отримані числа в строку та створюю массив
   const maxNumber = Math.max(...strArrNumber); //розпаковую масив та вивожу максимальну цифру
   return  maxNumber; // повертаю отримане число
}

let taskOne = document.getElementById(`input_tsk_one`);
let btnOne = document.getElementById(`button_tsk_one`);

btnOne.onclick = function(){
   let inputValueTask1 = taskOne.value;
   console.log(getMaxDigit(inputValueTask1));
};

// Task 2: Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function getPow(x, y){
   
   let numberPow = x

   for(let i = 1; i<y; ++i){
      numberPow *= x
   }
   return numberPow
}

let taskTwoNum = document.getElementById(`input_tsk_two`);
let taskTwoPow = document.getElementById(`input_tsk_pow`);
let btnTwo = document.getElementById(`button_tsk_two`);

btnTwo.onclick = function(){
   let taskTwoNumValue = taskTwoNum.value;
   let taskTwoPowValue = taskTwoPow.value;
   console.log(getPow(taskTwoNumValue, taskTwoPowValue));
}
// Task 3: Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function firstUpperCase(str){

   let firstStrUP = str.toLowerCase()  //  отримане значення  зменшуєм все в нижній регістр
   firstStrUP  = firstStrUP .charAt(0).toUpperCase() + firstStrUP.slice(1) // збільшуєм першу букв зі слова та добавляєм решту букв
   return firstStrUP // повертаємо значення
};


let taskThird = document.getElementById(`input_tsk_third`);
let btnThird = document.getElementById(`button_tsk_third`);

btnThird.onclick = function(){
   let taskThirdValue = taskThird.value;
   console.log(firstUpperCase(taskThirdValue));
};

// Task 4: Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%).

function sumAfterTax (profit, tax){
   tax /=100;

   const sum = profit-(profit*tax);
   return sum;
}

let inputProfit = document.getElementById(`input_tsk_four_profit`);
let inputTax = document.getElementById(`inputinput_tsk_four_tax`);
let btnFour = document.getElementById(`button_task_four`);

btnFour.onclick = function(){
   let profitValue = inputProfit.value;
   let taxValue = inputTax.value;
   console.log(sumAfterTax(profitValue, taxValue))
}

// Task 5: Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.

function getRandomNumber(min, max){
  
   // let randomNumber = Math.floor(Math.random() * (max - min) ) + min;
   return Math.floor(Math.random() * (max - min) + min);

}
getRandomNumber()



let inputMin = document.getElementById(`input_min_five`);
let inputMax = document.getElementById(`input_max_five`);
let btnFive = document.getElementById(`button_tsk_five`);

btnFive.onclick = function(){
   let inputMinValue = inputMin.value;
   let inputMaxValue = inputMax.value;
   console.log(getRandomNumber(inputMinValue, inputMaxValue));
}

// Task 6

function countLetter(letter, word){
 word = word.toLowerCase()
 
 let amountOfLetters = 0;

   for(i = 0; i < word.length; i++){

       if(word[i] === letter) {
         amountOfLetters++
       }
   }
   return amountOfLetters

}


let inputLetter = document.getElementById(`input_letter_six`);
let inputWord = document.getElementById(`input_word_six`);
let btnTskSix = document.getElementById(`button_tsk_six`);

btnTskSix.onclick = function(){
   let inputLetterValue = inputLetter.value
   let inputWordValue = inputWord.value
   console.log(countLetter(inputLetterValue, inputWordValue))
}

// Task  7

function convertCurrency(convertSum, currency){
   const exchangeDollar = 25;
   const currencyUpper = currency.toUpperCase();
   let convert
   if( currencyUpper == `$`){
       convert = (convertSum * exchangeDollar) + `UAH`;
   }
  
   else if(currencyUpper == `UAH`){
      convert = (convertSum / exchangeDollar) + `$`;
   }
   else{
      console.log(`не коретна валюта`)
   }
   return convert
  
}


let inputSevenSum = document.getElementById(`input_sum_seven`);
let inputSevenCurrency = document.getElementById(`input_currency`);
let btnTskSeven = document.getElementById(`button_tsk_seven`);

btnTskSeven.onclick = function(){
  let inputSevenSumValue = inputSevenSum.value;
  let inputSevenCurrencyValue = inputSevenCurrency.value;
  console.log(convertCurrency(inputSevenSumValue, inputSevenCurrencyValue))
}