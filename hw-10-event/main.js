document.addEventListener(`keydown`, function (event){
    const listElem = document.querySelector(`.list-elem[data-key="${event.code}"]`);
    const audioPlay = document.querySelector(`.audio-road[data-key="${event.code}"]`);
    
    if(!audioPlay) return
    audioPlay.currentTime = 0;
    audioPlay.play();
    listElem.classList.add('playing');
})

document.addEventListener(`keyup`, function (event){
    const listElem = document.querySelector(`.list-elem[data-key="${event.code}"]`);
    listElem.classList.remove('playing');
})

const list = document.querySelectorAll(`.list-elem`);

list.forEach((item)=>{
    item.addEventListener(`click`, function(event){
        const audio = document.querySelector(`.audio-road[data-key="${item.dataset.key}"]`);
        audio.play();
        audio.currentTime = 0;
    });
});
