const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())

const post = function(){
    const input = $('#input').val()
    $('#input').val("")
    tweeter.addPost(input)
    renderer.renderPosts(tweeter.getPosts())
}


    $('div#posts1').on('click','.delete',function()
    {
        const index = $(this).data().id
        console.log(index)
        const save = $($(this).closest('#posts1').children('.post1')[index[1] - 1])
        console.log(save.data().id)
        tweeter.removePost(save.data().id)
        renderer.renderPosts(tweeter.getPosts())

    })

    $('div#posts1').on('click','.postComment',function()
    {
        const index =  $(this).data().postid
        console.log(index)
        const save = $($(this).closest('#posts1').children('.inputComment'))
        console.log(save)
        renderer.renderPosts(tweeter.getPosts())

    })

    $('div#posts1').on('click','.delete-comment',function()
    {
        const postIndex = $(this).data().postid
        console.log(postIndex)
        let index =  $(this).data().id
        console.log("index is :" + index)
        console.log($(this).closest('#posts1').children('.comments'))
        let getC = parseInt(index[1])
        const save = $($(this).closest('#posts1').children('.comments')[getC])
        console.log()
        console.log(save.data().id)
        tweeter.removeComment(postIndex,index)
        renderer.renderPosts(tweeter.getPosts())

    })
        
  