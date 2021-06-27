function l(value){
     console.log(value)
}
 
 
class Student {

     constructor(university, course, fullName){

         this.university = university;
         this.course = course;
         this.fullName = fullName;
     };

 // Task 1

     getInfo(){
         return `Студент ${this.course}го курсу ${this.university} м.Одеса, ${this.fullName}`;
     };

 // Task 2
    get getMarks(){
        return this._marks
    }
 //  Task 3
    set setMarks(value){
       this._marks = this._marks.push(this.marks)
    }

}

const ostap = new Student ( `Вищої Школи Психотерапії`,`1`,`Остап Родоманський Бендер`);

l(ostap.getInfo())
ostap.marks = [5, 4, 4, 5]
l(ostap.marks)
ostap.marks = 1

l(ostap.marks)


