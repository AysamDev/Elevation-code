
class Renderer {
    constructor()
    {

    }
   renderUserApi(data)
    {
        console.log(data)
        const template = $('#user-template').html()
        const templateScript = Handlebars.compile(template)
        const html = templateScript(data)
        $(`.user-container`).append(html)           
    }
    renderUserQuoteApi(data)
    {
        console.log(data)
        const template = $('#quote-template').html()
        const templateScript = Handlebars.compile(template)
        const html = templateScript(data)
        $(".quote-container").append(html)         
    }
    renderUserPokeApi(data)
    {
        console.log(data)
        const template = $('#poke-template').html()
        const templateScript = Handlebars.compile(template)
        const html = templateScript(data)
        $(".pokemon-container").append(html)     
    }

    renderUserAboutApi(data)
    {
        console.log(data)
        const template = $('#meat-template').html()
        const templateScript = Handlebars.compile(template)
        const html = templateScript(data)
        $(".meat-container").append(html)     
    }
}