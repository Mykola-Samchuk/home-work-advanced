// Функція для ігнорування не цілих чисел________________________
function getIntegers(...numbers){
    
    let result = [];
    numbers.forEach(function(itemOfArr){
            if(Number.isInteger(itemOfArr)){
                result.push(itemOfArr);
            }
            
    });
    return result;
}
// Функція для швидкої перевірки в console.log
function l(value){
    console.log(value);
}
// _________________________________________________________________

// Task 1: Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.
function getRandomArray(length, min, max){

    const arrNumber = [...Array(length)];
    const minNumber = Math.min(min, max);
    const maxNumber = Math.max(min, max);

    arrNumber.map((item, index) => {
        arrNumber[index] = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
    })
    return arrNumber;
}

console.log(`Task 1:Повертаємо випадкові числа від і до = ` + getRandomArray(10, 1, 20));


// Task 2: Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

/*function getModa(...numbers){

    numbers = [6,2,2,2,6,3]
    l(numbers)
    let filteredNumbers  = getIntegers(...numbers)
    l(filteredNumbers)
    let moda = []
    l(moda)
    
    filteredNumbers.forEach(function(item){
       
        if(typeof moda[item] == `undefined`) {
            moda[item] = 1
        } else {
            moda[item] = moda[item] + 1
            
        }
        
        
    })
    
}
getModa();
*/


// Task 3:Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

function getAverage(...numbers){
    
    let filteredNumbers = getIntegers();
    let sum = 0;
    let count = 0;

    numbers.forEach(function(itemOfArr){
            if(Number.isInteger(itemOfArr)){
                filteredNumbers.push(itemOfArr);
                sum += itemOfArr;
                count += 1;
            }; 
    });
   
    return sum / count;

}

console.log(`Task 3: Повертаємо середнє арифметичне = `,getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// Task 5: Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers){
    
    let result = [];
    numbers.filter((item) => {

        if(item % 2){
            result.push(item);
        }
        
    })
    return result;
    
}
console.log(`Task 5: Виводим відфільтровані не парні числа = `,filterEvenNumbers(1, 2, 3, 4, 5, 6));

// Task 6: Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0 Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers){

    const filterNumber = numbers.filter((item)=>{
        return item > 0;
    })
    return filterNumber.length;
    

}
console.log(`Task 6: Виводим кількість значень > 0 =`,countPositiveNumbers(1, -2, 3, -4, -5, 6));

// Task 7: Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5 Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]
function getDividedByFive(...numbers){

    const dividedByFive = [];

    numbers.forEach((item) =>{
        let sum = item / 5;
        if(Number.isInteger(sum)){
            dividedByFive.push(item);
        }
        
    })
    return dividedByFive;

}
console.log(`Task 7: Виводим всі числа, що ціло діляться на 5 =`, getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// Task 8: Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]

function divideByThree(word){
    
    const toLower = word.toLowerCase().split(' ').join('');

    const wordThree = [];

    for(let i = 0; i < toLower.length; i+=3){
        if(toLower.length >= 3){
            
            wordThree.push(toLower.substring(i, i+3));
        }
        else return toLower;
    }

    return wordThree;

}
console.log(`Task 9: Виводим слова розбиті на 3 = `, divideByThree('Commander'))