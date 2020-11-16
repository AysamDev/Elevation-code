const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())
    //new post
    const post = function()
    {
        const input = $('#input').val()
        $('#input').val("")
        tweeter.addPost(input)
        renderer.renderPosts(tweeter.getPosts())
    }

    //remove post
    $('div#posts1').on('click','.delete',function()
    {
        const index = $(this).data().id
        console.log(index)
        tweeter.removePost(index)
        renderer.renderPosts(tweeter.getPosts())

    })

    //addComment
    $('div#posts1').on('click','.postComment',function()
    {
        const index =  $(this).data().postid
        console.log(index)
        let input
        const save = $($(this).closest('#posts1').children('.inputComment')) //saves the inputs
        console.log(save)
        for(let i = 0;i<save.length;i++)
        {
            const check = $(save[i])
            if(check.data().postid == index)
            {
                input = $(check)
            }
         
        }
        tweeter.addComment(input.val(),index)
        renderer.renderPosts(tweeter.getPosts())

    })
    //delete comment
    $('div#posts1').on('click','.delete-comment',function()
    {
        const postIndex = $(this).data().postid
        const index = $(this).data().id
        tweeter.removeComment(postIndex,index)
        renderer.renderPosts(tweeter.getPosts())

    })
        
  