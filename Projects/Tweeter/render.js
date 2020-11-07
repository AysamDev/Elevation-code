const Renderer = function()
{
    const br = $(`<br></br>`)
    const renderPosts = function(posts)
    {
        $('#posts1').children().remove()
        for(let post of posts)
        {
            const dl = $(` <span class=delete data-id=${post.id}>${"X"}</span>`)
            const po = $(`<div class=post1 data-id=${post.id}>Post:  ${post.text}</div>`)
            console.log(po.text())
            $('#posts1').append(dl)
            $('#posts1').append(po)
            $('#posts1').append(br)
            console.log(post)
            for(let comment of post.comments)
            {
                console.log(comment)
                const dlc = $(`<span class=delete-comment data-postid=${post.id} data-id=${comment.id}>${"X"}</span>`)
                const cm = $(`<div class=comments  data-id=${comment.id}>Comment: ${comment.text}</div>`)
                $('#posts1').append(dlc)
                $('#posts1').append(cm)
                $('#posts1').append(br)
               
            }
            const commentBtn = $(`<div data-postid=${post.id} class=postComment>Comment</div>`)
            $('#posts1').append($(`<input data-postid=${post.id} type="text" placeholder="Write a comment" class=inputComment>`))
            $('#posts1').append($(commentBtn))
            $('#posts1').append(br)
        }
    }


    return{
        renderPosts
        
    }
}
