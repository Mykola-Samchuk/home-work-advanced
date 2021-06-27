function l(value){
     console.log(value)
}
 

class Student {

    constructor(university, course, fullName){

        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = []
        this.activeStudent = true
    };

// Task 1

    getInfo(){
        return `Студент ${this.course}го курсу ${this.university} м.Одеса, ${this.fullName}`;
    };

// Task 2
   get getMarks(){
       if(this.activeStudent = true){
        return this.marks
       }
       return null
   }
//  Task 3
   set setMarks(value){
    if(this.activeStudent){
        this.marks.push(value)
    }
       
      
   }
   getAverageMark(){
       let sum = 0;
       this.marks.forEach((item) =>{
           sum += item
       })
       return sum / this.marks.length
   }

   dismiss(){
       this.activeStudent = false
   }

   recovery(){
       this.activeStudent = true
   }
}

const ostap = new Student ( `Вищої Школи Психотерапії`,1,`Остап Родоманський Бендер`);
console.log(`We get an info method:`, ostap.getInfo())
ostap.marks = [5, 4, 4, 5]
console.log(`We get an info method:`, ostap.marks)
ostap.setMarks = 5
console.log(`We add the grade to the student's grades:`, ostap.getMarks)
console.log(`We get an Average mark of student:`, ostap.getAverageMark())


// Advanced



