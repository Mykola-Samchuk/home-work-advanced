
// Task: Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();
function getRandomColor(){

    let colorR = Math.floor(Math.random() * 255);
    let colorG = Math.floor(Math.random() * 255);
    let colorB = Math.floor(Math.random() * 255);

    return `rgb(${colorR}, ${colorG} ,${colorB})`
};

function generateBlocks(number){

    const parent = document.createElement(`div`);
    parent.setAttribute(`class`, `big-box`);
    document.body.append(parent);
   
    for(let i = 1; i <= number; i++){
        const div = document.createElement(`div`);
        div.setAttribute(`class`, `box` );
        parent.prepend(div);
        div.style.backgroundColor =  getRandomColor();
    };
};
generateBlocks(25);

// Advanced: Зробіть так, щоб квадрати змінювали колір раз на секунду.Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval();

const getColor = () => {

    const div = document.querySelectorAll('.box');

    for ( let box of div ) {
        box.style.background = getRandomColor();
    };
}


function generateBlocksInterval(){
    setInterval(()=>{
        getColor();
    },1000)
};
generateBlocksInterval()



