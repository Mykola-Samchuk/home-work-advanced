const users = document.getElementById(`users-list`);
const planets = document.getElementById(`planet-list`);
const userUrl = `https://swapi.dev/api/films/2/`;
const planetsUrl = `https://swapi.dev/api/planets`;

let listUser = document.querySelector(`.character-item`);
let listPlanet = document.querySelector(`.planet-item`);

users.addEventListener(`click`, getUsers);
planets.addEventListener(`click`, getPlanets);


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

async function getPlanets(){

    const response = await fetch(planetsUrl);
    const content = await response.json();
    const planets = await content.results;

    for(let planet of planets){

        listPlanet.innerHTML += `
        <div class="planet">
            <h2 class="planet-name">${planet.name}</h2>
        </div>
        `
        
    };
    
};


