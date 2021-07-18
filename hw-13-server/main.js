const users = document.getElementById(`users-list`)

const baseUrl = `https://swapi.dev/api/films/2/`



function getUsers(){

    const res = fetch(`https://swapi.dev/api/films/2/`)

        .then(function (response){
            return response.json()
        })
        .then(function (data){
            const users = data.characters
            console.log(users)
            users.forEach(item => {
                fetch(item)
                .then(function (response){
                    return response.json()
                })
                .then(function(data){
                    console.log(data)
                })
            });
        })
        
        
}
getUsers()

// function showUsers(){
//     const users = getUsers()
//     console.log(users)
// }
// showUsers()