
// Task: Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();

function generateBlocks(number){
    const parent = document.createElement(`div`)
    parent.setAttribute(`class`, `big-box` )
    document.body.prepend(parent)
   
    for(let i = 1; i <= number; i++){

        const div = document.createElement(`div`)
        div.setAttribute(`class`, `box` )
        parent.prepend(div)

        let colorR = Math.floor(Math.random() * 255);
        let colorG = Math.floor(Math.random() * 255);
        let colorB = Math.floor(Math.random() * 255);

        document.querySelector(`.box`).style.backgroundColor = `rgb(${colorR}, ${colorG} ,${colorB})`
    }
}
generateBlocks(25)

// Advanced: Зробіть так, щоб квадрати змінювали колір раз на секунду.Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval();
function generateBlocksInterval(value){
    setInterval(()=>{
        generateBlocks(value)
    },1000)
}
generateBlocksInterval(25)
