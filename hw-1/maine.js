const applePrice = 15.678;
const lemonPrice = 123.965;
const pearPrice = 90.2345;

// Максимальна ціна.
let maxPrice = (Math.max(applePrice, lemonPrice, pearPrice));
console.log(maxPrice);

// Мінімальна ціна
let minPrice = (Math.min(applePrice, lemonPrice, pearPrice));
console.log(minPrice);

// Загальна сума
let allSum = (applePrice + lemonPrice + pearPrice);
console.log(allSum);

// Загальна округлена сума
let allSumFloor = (Math.floor(applePrice) + Math.floor(lemonPrice) + Math.floor(pearPrice));
console.log(allSumFloor);

// Сума округлена до сотень
allSumRound = Math.round(allSum/100)*100;
console.log(allSum);

// Чи є число парне 
let isEven = allSumFloor % 2 === 0;
console.log(`Total sum of all products is ${isEven} number`)

// Сума Решти 
let sumrest = 500 - allSum;
console.log(sumrest);

// Середнє значення округлене до 2-го знаку
let averageSum = (allSum / 3).toFixed(2);
console.log(averageSum);

// Задача
//Випадкова знижка
 let discount = (Math.random()*100).toFixed(2);
 console.log(discount);
 
//  Сума знижки
 let discountPrice = ((allSum * discount)/100).toFixed(2);
 console.log(discountPrice);

//  Cума до оплати
console.log((allSum - discountPrice).toFixed(2));


// Прибуток
 const profit = ((allSum / 2) - discountPrice).toFixed(0);
 console.log(profit);


//  Advanced
console.log(
    `
    Максимальна ціна: ${maxPrice}
    Мінімальна ціна: ${minPrice}
    Згальна сума: ${allSum}
    Загальна сума округлена: ${allSumFloor}
    Сума товарів округлена до сотень: ${allSumRound}
    Булеве значення чи парне число: ${isEven}
    Сума решти при оплаты товару 500: ${sumrest}
    Середнє значення цін: ${averageSum}
    Випадкова знижка в % : ${discount}%
    Сума до оплати : ${((allSum - discountPrice).toFixed(2))}
    Чистий прибуток : ${profit}
 ` 

);
