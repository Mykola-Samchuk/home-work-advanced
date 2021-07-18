const users = document.getElementById(`users-list`)

function getUsers(){
    fetch(`https://swapi.dev/api/films/2/`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
    })
}
getUsers()