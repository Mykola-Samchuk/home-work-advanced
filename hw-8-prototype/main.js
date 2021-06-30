function l(value){
     console.log(value);
};
 
    // Task 1: У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
class Student {

    constructor(university, course, fullName){

        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
        this.activeStudent = true;

    };

    // Task 2: Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.

    getInfo(){
        return `Студент ${this.course}го курсу ${this.university} м.Одеса, ${this.fullName}`;
    };

    // Task 3: Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
   get getMarks(){

       if(this.activeStudent = true){
        return this.marks;
       }
       else return null;

   };
    //  Task 4: Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
   set setMarks(value){

    if(this.activeStudent){
        this.marks.push(value);
    }; 

   };
   //  Task 5: Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
   getAverageMark(){

       let sum = 0;

       this.marks.forEach((item) =>{
           sum += item;
       });

       return sum / this.marks.length;
   };
    // Task 6: Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)   
   dismiss(){
       this.activeStudent = false
   }
    //  Task 7: Створіть метод this.recover, який дозволить поновити студента  
   recovery(){
       this.activeStudent = true;
   };
};

const ostap = new Student ( `Вищої Школи Психотерапії`,1,`Остап Родоманський Бендер`);
console.log(`We get an info method:`, ostap.getInfo());
ostap.marks = [5, 4, 4, 5];
console.log(`We get studet marks:`, ostap.marks);
ostap.setMarks = 5;
console.log(`We add the grade to the student's grades:`, ostap.getMarks);
console.log(`We get an Average mark of student:`, ostap.getAverageMark());


// Advanced Task
    
class BudgetStudent extends Student {

    constructor(university, course, fullName){

        super(university, course, fullName);
        
        setInterval(()=>{

            this.getScholarship();
            
        },30000);
    };
    
    getScholarship(){
        
        if( this.getAverageMark() >= 4 && this.activeStudent == true){
                console.log(`Ви отримали 1400 грн. стипендії`);
            }
         else console.log(`Ви не отримуєте стипендії`);
    };
};

const igor = new BudgetStudent (`Вищої Школи Психотерапії`,1,`Ігор Бендер`);
igor.marks = [5, 4, 4, 5];
igor.getScholarship();