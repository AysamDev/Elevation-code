const Renderer = function()
{
   
    const renderPosts = function(posts)
    {
        $('#posts1').children().remove()
        for(let post of posts)
        {
            const ay = $(` <span class=delete data-id=${post.id}>${"X"}</span>
            <div class=post1 data-id=${post.id}>Post:${post.text}</div>
            <br></br>`)
            console.log(ay.text())
            $('#posts1').append(ay)
            $('#posts1').append($('<br></br>'))
            console.log(post)
            for(let comment of post.comments)
            {
                console.log(comment)
                const cm = $(` <span class=delete-comment>${"X"}</span>
                <span class=comments data-id=${comment.id}>Comment:${comment.text}</span>
               <br></br>`)
                $('#posts1').append(cm)
            }
            const commentBtn = $(`<div class="postComment"">Comment</div>`)
            $('#posts1').append($(`<input type="text" placeholder="What's on your mind?" class="inputComment">`))
            $('#posts1').append($(commentBtn))
            $('#posts1').append($('<br></br>'))
        }
    }


    return{
        renderPosts,
        
    }
}
