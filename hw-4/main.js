const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];



function getPairs(students){

    const manWithFamel = [

          [students[0], students[2]],
          [students[1], students[3]],
          [students[4], students[5]],

        ];

    return manWithFamel
}


console.log(getPairs(students))

function getStudentsThemes(themes){

    const studentsPairs =  getPairs(students);
    // console.log(studentsPairs)
    
        studentsPairs[0].splice(2, 0,  themes[0])
        studentsPairs[1].splice(2, 0,  themes[1])
        studentsPairs[2].splice(2, 0,  themes[2])
    return studentsPairs
}

console.log(getStudentsThemes(themes))

function getMarksStudens(students, marks){
    
    const marksStudents = []

    for(let i=0; i<students.length; i++){
        marksStudents.push([students[i],marks[i]])
    }
    return marksStudents

}
console.log(getMarksStudens(students, marks))

function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
console.log(getRandomIntInclusive())

function getPairsMarks(){

    const randomMarks = getRandomIntInclusive();
    const pairsStudents = getStudentsThemes(themes);
    const pairsMarks = []
    for(let i=0; i<pairsStudents.length; i++){
        pairsMarks.push([pairsStudents[i],randomMarks])
    }
    return pairsMarks
}
console.log(getPairsMarks())
getPairsMarks()