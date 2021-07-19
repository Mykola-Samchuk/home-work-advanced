const users = document.getElementById(`users-list`);
const baseUrl = `https://swapi.dev/api/films/2/`;
let list = document.querySelector(`.character-item`);

users.addEventListener(`click`, getUsers);

async function getUsers(){

    const response = await fetch(baseUrl);
    const content = await response.json();
    const users = content.characters;

    for(let character of users){

        let response = await fetch(character);
        character = await response.json();
        list.innerHTML+=`
        <div class="user">
        <h2 class="character-name">${character.name}</h2>
        <span class="character-birthday">${character.birth_year}</span>
        <span class="sex">${character.gender}</span>
        </div>
        `;
    };
    
};


