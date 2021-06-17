// Task 1: Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.
function getRandomArray(length, min, max){

    const arrNumber = [...Array(length)];
    const minNumber = Math.min(min, max);
    const maxNumber = Math.max(min, max);

    arrNumber.map((item, index)=>{
        arrNumber[index] = Math.round(Math.random() * (maxNumber - minNumber) + minNumber)
    })
    return arrNumber
}
// console.log(getRandomArray(10, 1, 20))

// Task 3:Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

function getAverage(...numbers){
    
    let filteredNumbers = getIntegers();
    let sum = 0;
    let count = 0

    numbers.forEach(function(itemOfArr){
            if(Number.isInteger(itemOfArr)){
                filteredNumbers.push(itemOfArr)
                sum += itemOfArr
                count += 1
            } 
    })
   
    return sum / count;

}

console.log(`Повертаємо середнє арифметичне`,getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

// Функція для ігнорування не цілих чисел________________________
function getIntegers(...numbers){
    
    let result = [];
    numbers.forEach(function(itemOfArr){
            if(Number.isInteger(itemOfArr)){
                result.push(itemOfArr)
            }
            
    })
    return result
}
// _______________________________________________________________

// Task 2: Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2



function getModa(...numbers){
    numbers = [6,2,2,2,6,3]
    l(numbers)
    let filteredNumbers  = getIntegers(...numbers)
    l(filteredNumbers)
    let moda = []
    l(moda)
    let n = []
   
    filteredNumbers.forEach(function(item){
       
        if(typeof moda[item] == `undefined`) {
            moda[item] = 1
        } else {
            moda[item] = moda[item] + 1
            n.push(moda[item])
        }
        
        
    })
    l(n)
    
    



    // let maxNNN = 0;
    // let result;

    // moda.forEach(function(element, index){
       
    //     if (element > maxNNN){
    //         maxNNN = element;
    //         result = element;
    //     }
    //     l(result )
    // })

    // console.log(nMax)
    // console.log(moda)

}
getModa();


function l(value) {
    console.log(value)
}