const users = document.getElementById(`users-list`);
const planets = document.getElementById(`planet-list`);
const planetsNext = document.getElementById( `planet-next`);
const planetsPrevious = document.getElementById( `planet-previous`);
const userUrl = `https://swapi.dev/api/films/2/`;
const planetsUrl = `https://swapi.dev/api/planets/?page=`;

let getPage = 1;
let listUser = document.querySelector(`.character-item`);
let listPlanet = document.querySelector(`.planet-item`);


users.addEventListener(`click`, getUsers);
planets.addEventListener(`click`, ()=>{getPlanets(planetsUrl)});

planetsNext.addEventListener(`click`, function getNext(){
    if(getPage <6){
        listPlanet.innerHTML =``
        getPage += 1
        getPlanets(planetsUrl + getPage)
    };
});

planetsPrevious.addEventListener(`click`, function getPrev(){
    if(getPage <= 6){
        listPlanet.innerHTML =``
        getPage -= 1
        getPlanets(planetsUrl + getPage)
    };
});



async function getUsers(){

    const response = await fetch(userUrl);
    const content = await response.json();
    const users = content.characters;

    for(let character of users){

        let response = await fetch(character);
        character = await response.json();

        listUser.innerHTML+=`
        <div class="user">
        <h2 class="character-name">${character.name}</h2>
        <span class="character-birthday">${character.birth_year}</span>
        <span class="sex">${character.gender}</span>
        </div>
        `;
    };
    
};

async function getPlanets(planetsUrl){

    const response = await fetch(planetsUrl);
    const content = await response.json();
    const planets = await content.results;

    for(let planet of planets){

        listPlanet.innerHTML += `
        <div class="planet">
            <h2 class="planet-name">${planet.name}</h2>
        </div>
        `;
    };

    document.querySelector(`.btn-planet`).style.display=`flex`;
    
};




