document.addEventListener(`keydown`, function (event){
    const listElem = document.querySelector(`.list-elem[data-key="${event.code}"]`)
    const audioPlay = document.querySelector(`.audio-road[data-key="${event.code}"]`)
    
    if(!audioPlay) return
    audioPlay.currentTime = 0;
    audioPlay.play()
    listElem.classList.add('playing');
})


