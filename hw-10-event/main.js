document.addEventListener(`keydown`, function (event){
    const listElem = document.querySelector(`.list-elem[data-key="${event.code}"]`)
    const audioPlay = document.querySelector(`.audio-road[data-key="${event.code}"]`)
    
    if(!audioPlay) return
    audioPlay.currentTime = 0;
    audioPlay.play()
    listElem.classList.add('playing');
    
    
})

document.addEventListener(`keyup`, function (event){
    const listElem = document.querySelector(`.list-elem[data-key="${event.code}"]`)
    listElem.classList.remove('playing');
    
})

const list = document.querySelector(`.list`)
list.addEventListener(`click`, function(event){
    const listEven = event.target.getAttribute(`data-key`)
   const audio = document.querySelectorAll(`.audio-road`)
    
    
    for(let i of audio ){      
        i.getAttribute(`data-key`)
    }
    
    
})
