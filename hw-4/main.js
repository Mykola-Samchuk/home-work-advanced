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


console.log('Arrays with pairs of students', getPairs(students))

function getStudentsThemes(themes){

    const studentsPairs = getPairs(students);
    const studentThemes = [];
    for(let i = 0; i < themes.length; i++){
        studentThemes.push([studentsPairs[i][0] + ` i ` + studentsPairs[i][1] , themes[i]]);
    };
    return studentThemes;
    
}
console.log(`Arrays with pairs of students and tasks`, getStudentsThemes(themes))

function getMarksStudens(students, marks){
    
    const marksStudents = []

    for(let i = 0; i < students.length; i++){
        marksStudents.push([students[i], marks[i]])
    }
    return marksStudents

}
console.log( 'Arrays with students and grades', getMarksStudens(students, marks))


function getPairsMarks(){

    const pairsStudentsThemes = getStudentsThemes(themes);

    pairsStudentsThemes.map(function(item){
        item.push(Math.ceil(Math.random() * 5));
    })
    return pairsStudentsThemes
    
}
console.log(`Arrays of pairs students with marks`, getPairsMarks())