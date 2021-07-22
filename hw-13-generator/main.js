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
