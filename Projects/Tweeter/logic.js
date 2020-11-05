const Tweeter = function()
{
    const posts = 
        [
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "Aw man, I wanted to be first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        ]
        let commentIdCounter = 1
        let postIdCounter = posts.length
        for(let i = 0;i<posts.length;i++)
        {
            commentIdCounter += posts[i].comments.length
        }
        console.log(commentIdCounter)

        const getPosts = () =>
        {
            console.log(posts)
            return posts
        }

        const addPost = function(text){
            postIdCounter++
            const post = {
                id: "p" + postIdCounter,
                text,
                comments: []
            }
            posts.push(post)

        }

        const addComment = function(text,postID){
            commentIdCounter++
            const comment = {
                id: "c" + commentIdCounter,
                text
            }
            
            for(let post of posts)
            {
                if(post.id === postID)
                {
                    post.comments.push(comment)
                }
            }

        }

        const removePost = function(postID)
        {
            
            for(let i= 0;i<posts.length;i++)
            {
                console.log(i)
                if(posts[i].id === postID)
                {
                    console.log(postIdCounter)
                    postIdCounter--
                    posts.splice(i,1)
                    console.log(posts)
                    
                }
            }
        }

        const removeComment = function(postID,commentID)
        {
            for(let post of posts)
            {
                if(post.id === postID)
                {
                    for(let i = 0;i<post.comments.length;i++)
                    {
                        console.log(i)
                        if(post.comments[i].id === commentID)
                        {
                            commentIdCounter--
                            post.comments.splice(i,1)
                        }
                    }
                }
            }
        }
        return{
            getPosts,
            addPost,
            removePost,
            addComment,
            removeComment
        }
}

// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

//  tweeter.removePost("p1")
// console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================
// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}