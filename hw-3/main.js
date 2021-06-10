// Task 1: Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
let inputIn = document.getElementById("input").value;
let btnIn = document.getElementById("button");

btnIn.addEventListener('click', function(){
   let inputIn = document.getElementById("input").value;
   console.log(getMaxDigit(inputIn))
}
   )

function getMaxDigit(number){
   
   const strArrNumber = String(number).split(``); //перетворюю отримані числа в строку та створюю массив
   const maxNumber = Math.max(...strArrNumber); //розпаковую масив та вивожу максимальну цифру
   return  maxNumber; // повертаю отримане число
   
}
console.log(getMaxDigit());


// Task 2: Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл


// Task 3: Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function firstUpperCase (str){

   let firstStrUP = str.toLowerCase()  //  отримане значення  зменшуєм все в нижній регістр
   firstStrUP  = firstStrUP .charAt(0).toUpperCase() + firstStrUP.slice(1) // збільшуєм першу букв зі слова та добавляєм решту букв
   return firstStrUP // повертаємо значення

}
console.log(firstUpperCase(`kdnkdn`));

// Task 4: Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%).

