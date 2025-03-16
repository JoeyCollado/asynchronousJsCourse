const loadJoke = async () => {
   
    try{
        const chuckFetch = await fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                Accept: "application/json"
            }
        });

        const jokeData = await chuckFetch.json();
        document.getElementById('loadingjoke').innerHTML = jokeData.value;
    }
    catch(error){
        console.log(error)
    }
}

//button backend
document.getElementById('jokebtn').addEventListener("click", loadJoke);