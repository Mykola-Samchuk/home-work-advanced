// Отримуємо числа від користувача та переводимо  їх (з string to number) в числове значення
let n = Number(prompt(`Pleas enter the first number`, 0));
let m = Number(prompt(`Pleas enter the first number`, 0));

// Перевіряємо чи переведене число не NaN , якщо NaN то просимо ввести коректне число
while( isNaN(n) || isNaN(m) ){
     n = Number(prompt(`Pleas enter the first CORRECTED number`, 0));
     m = Number(prompt(`Pleas enter the second CORRECTED number`, 0));
}
// Перевіряємо чи число ціле,якщо ні, просимо ввесто знову
while( !Number.isInteger(n) || !Number.isInteger(m) ){
     n = Number(prompt(`Pleas enter the first CORRECTED number (integer)`, 0));
     m = Number(prompt(`Pleas enter the second CORRECTED number (integer)`, 0));

}
/* Забрав після коментаря в TRELLO Volodymyr Pavlyk 
// Відкидаємо не ціле
// n = Math.trunc(n);
// m = Math.trunc(m);
*/

// Чи пропускати парні числа?
let evenNumber = confirm(`Skip even numbers??`);
console.log( `Значення ${evenNumber}`);

// Знаходимо максимальне та мінімальне число
let minNumber = Math.min(n, m);
let maxNumber = Math.max(n, m);
console.log(`Max Number ${minNumber}`)
console.log(`Min Number ${maxNumber}`)

// Створюємо цикл підрахунку
let totalSum = 0;
for(let i = minNumber; i <= maxNumber; i++){
    
        if(evenNumber){
            if(i % 2 === 0) continue
        }
    
    totalSum += i
}

console.log(totalSum)


document.getElementById("totalSum").innerHTML = totalSum;

     


