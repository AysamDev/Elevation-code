
const api = new APIManager()

const render = new Renderer()

$('#loadUser').on('click',function()
{
    api.getUserData()
    api.getUserAbout()
    api.getUserPoke()
    api.getUserQuote()
})

$('#displayUser').on('click',function()
{
    $('.user-container').children().remove()
    $('.pokemon-container').children().remove()
    $('.meat-container').children().remove()
    $('.quote-container').children().remove()
    render.renderUserApi(api.Data.user)
    render.renderUserAboutApi(api.Data.text)
    render.renderUserPokeApi(api.Data.poke)
    render.renderUserQuoteApi(api.Data.quote.quote)
    
})

