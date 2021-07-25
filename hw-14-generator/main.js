function* createIdGenerator() {
    let id = 1;
    for(let i = 1; i++;){
        yield id;
        id++;
    };
    
  };
  const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


function* newFontGenerator(number){
    const size = 2;
    
    while(true){
      let value = yield number;

      if(value ===`up`){
         number +=  size;
      }
      else if(value ===`down`){
         number -= size;
        
      };
      
    };
    
};

const fontGenerator = newFontGenerator(32);
const h1 = document.querySelector(`.cnsl`);
const up = document.querySelector(`.up`);
const down = document.querySelector(`.down`);

up.addEventListener(`click`, ()=>{
  h1.style.fontSize = `${fontGenerator.next(`up`).value}px`
});

down.addEventListener(`click`, ()=>{
  h1.style.fontSize = `${fontGenerator.next(`down`).value}px`
});