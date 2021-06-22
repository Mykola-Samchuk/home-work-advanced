// Функція для швидкої перевірки

function l(value){
    console.log(value)
}

// 


const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  console.log('Initial data', students);
// Task 1: Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
function getSubjects(students){
    
    const subjectsInfo = Object.keys(students.subjects);
    const res = [];

    subjectsInfo.forEach((item)=>{
        res.push(item.replace(`_`,` `));
    });

    const subjectsUperCase = [];
    
    res.forEach((item)=>{
        subjectsUperCase.push(item.charAt(0).toUpperCase()+item.slice(1));
    });
    
    return subjectsUperCase;
};
console.log(`Task 1: Subjects of student`, getSubjects(students[0]));

// Task 2: Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)
 
function getAverageMark(students){

    const subjectsInfo = Object.values(students.subjects);
    const arrInOne = subjectsInfo.flat();
    let getAverage = 0;

    arrInOne.forEach((item)=>{
        getAverage +=item;
    })

    const averageMark = (getAverage / arrInOne.length).toFixed(2);

    return Number(averageMark);
};
console.log(`Task 2:  AverageMark`, getAverageMark(students[0]));

// Task 3: Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(students){

    const result = {
        name: students.name,
        course: students.course,
        averageMark: getAverageMark(students)
    }
    return result;
}
console.log(`Task 3: Student info`, getStudentInfo(students[1]));

// Task 4: Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
function  getStudentsNames(students){
    const studentsName = students.map((item) => {
        return item.name;
    })
    
    return studentsName.sort();
}
console.log(`Task 4: Students name sort`,getStudentsNames(students));

// Task 5: Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students){
    const student = students.map((item)=>{
      return item.name;
    });

    const studentMark = students.map((item, index)=>{
       return getAverageMark(students[index]);
    });
    
    const maxNum = Math.max(...studentMark);
    const indexNum = studentMark.indexOf(maxNum);

    return student[indexNum];
}
    
console.log(`Task 5: Best Student` ,getBestStudent(students));

// Task 6: Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(value){

    const arrWord = value.split(``);
    const result = {};

    arrWord.forEach((item)=>{

        if(typeof result[item]== `undefined`){
            result[item] = 1;
        }
        else{
            result[item] = result[item] + 1
        }
        return result;
    })
    return result;
}
console.log(`Task 6: An object in which the key is the letters in the word, and the value is the number of repetitions.`, calculateWordLetters(`test`));

