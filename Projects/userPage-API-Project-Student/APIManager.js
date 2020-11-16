//This is the class that will manage all your APIs

class APIManager {

    constructor() {
        this.data = {}
    }

 getUserData()
{
    $.ajax({
        type:"GET",
        url: 'https://randomuser.me/api/',
        success: (ref) => {
            const user = ref.results[0]
            let userDataObj = {}
            userDataObj.firstName = user.name.first
            userDataObj.lastName = user.name.last
            userDataObj.city = user.location.city
            userDataObj.state = user.location.state
            userDataObj.picture = user.picture.large
            console.log(userDataObj)
            this.data.user = userDataObj
        }
      });
}

getUserAbout()
{
    $.ajax({
        type:"GET",
        url: `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`,
        success: (ref) =>{
            let userDataText = {}
            userDataText.text = ref[0]
            this.data.text = userDataText
        }
      });
}

getUserPoke()
{
    $.ajax({
        type:"GET",
        url: `https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random()*10) + 1}`,
        success: (ref) =>{
            let userDataPoke = {}
            userDataPoke.name = ref.name
            userDataPoke.image = ref.sprites.front_default
            this.data.poke = userDataPoke

        }
      });
}

getUserQuote()
{
    $.ajax({
        type:"GET",
        url: 'https://api.kanye.rest/',
        success: (ref) =>{
            let userDataQuote = {}
            userDataQuote.quote = ref.quote
            this.data.quote = userDataQuote
        }
      });
}

get Data()
{
    return this.data
}

}
