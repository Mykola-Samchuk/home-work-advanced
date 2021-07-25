async function getRandomChinese(length){
    
    let res = ``;

    for(i = 0; i < length; i++){
      let getPromise = new Promise((resolve, reject)=>{
        setTimeout(() => {
             let sign = Date.now().toString().slice(-5);
             let signString = String.fromCharCode(sign);

             resolve(signString);
          }, 50*length);
      })
      res += await getPromise;
    }
    console.log(res)

}

getRandomChinese(4)