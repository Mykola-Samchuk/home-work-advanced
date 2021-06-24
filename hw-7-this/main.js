// Функція для швикого виклику console.log
function l(value){
    console.log(value)
}
// ________________________________________

const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

// Task 1: Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary){

    const taxOfSalary = salary * this.tax;
    return taxOfSalary;
}

const taxFromCoutry = getMyTaxes.call(litva ,1000);

console.log(`Tax from country where i'm live`,taxFromCoutry);

// Task 2: Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes(country){

    const middleTax = this.tax * this.middleSalary;
    return middleTax;
}

console.log(`Middle tax from country where work IT expert` ,getMiddleTaxes.call(ukraine));

// Task 3: Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes(country){

    const totalTaxAll = this.tax * this.middleSalary * this.vacancies
    return totalTaxAll

}



console.log(`How much tax does a IT expert pay in the Country` ,getTotalTaxes.call(litva))

// Task 4: Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.profit = salary - taxes;
console.log(`Task 4: A function that outputs a property to console.log every 10 seconds:`)
function getMySalary(country){

    setInterval(() => {

        const minSalary = 1500;
        const maxSalary = 2000;
        let salary = Math.floor(Math.random() * (maxSalary - minSalary)) + minSalary;
        const profit = salary - (this.tax * salary);

        obj = {};
        obj.salary = salary;
        obj.tax = this.tax;
        obj.profit = profit;
        console.log(obj);

    }, 10000);


}
getMySalary.call(litva);