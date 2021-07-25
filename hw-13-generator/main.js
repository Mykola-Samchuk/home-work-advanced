function* createIdGenerator() {
    let id = 1;
    for(let i = 1; i++;){
        yield id
        id++
    }
    
  }
  const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(number){
    const size = 2
    
    while(true){
      let value = yield + number
      if(value ===`up`)
        yield number += size

       
      else if(value ===`down`)
         number -= size
       
    }
    
    

}

const fontGenerator = newFontGenerator()