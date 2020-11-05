const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())

const post = function(){
    const input = $('#input').val()
    $('#input').val("")
    tweeter.addPost(input)
    renderer.renderPosts(tweeter.getPosts())
}


    $('.delete').on('click',function()
    {
        console.log("aaaa")
        const a = $(this).data().id
        console.log(a)
        const index = parseInt(a[1])
         const save = $($(this).closest('#posts1').children('.post1')[index - 1])
         tweeter.removePost(save.data().id)
         renderer.renderPosts(tweeter.getPosts())
    })
    
    $('.postComment').on('click','inputComment',function()
    {
        const a = $(this)
        console.log(a)
        const index = parseInt(a[1])
         const save = $($(this).closest('#posts1').children('.post1')[index - 1])
        const input = $(this).closest('#posts1').children('.post1')
        $('.inputComment').val("")
        console.log(input)
    })
      
        
  