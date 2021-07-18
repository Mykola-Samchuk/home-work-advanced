const users = document.getElementById(`users-list`)
const baseUrl = `https://swapi.dev/api/films/2/`
function createTemplate(){
    return `
    <div class="character-item">
        <h2 class="character-name"></h2>
        <span class="character-birthday"></span>
        <span class="sex"></span>
    </div>
    `
}

fetch(baseUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
            data.characters.forEach((item)=>{
                console.log(item)
            })
    
    })
    
    
