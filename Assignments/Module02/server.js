const express = require("express")
const bodyparser = require("body-parser")
const morgan = require("morgan")
const routes = require("./routes")

const app = express()

let blog = {
    posts : [
        {
            name : "Top things you should know before using NodeJs",
            url : "https://somenodejswebsite.com/the_page ",
            text : "There goes this long post",
            comments: [ "I learned a lot.","Another generic comment. Have a good day!"]
        }
    ]
}

app.use(bodyparser.json())
app.use(morgan('dev'))

app.use((req,res,next)=>{
    req.blog = blog
    next()
})


app.get("/posts",routes.posts.getPosts)
app.post("/posts",routes.posts.addPost)
app.put("/posts/:postId",routes.posts.updatePost)
app.delete("/posts/:postId",routes.posts.removePost)

app.get("/posts/:postId/comments",routes.comments.getComments)
app.post("/posts/:postId/comments",routes.comments.addComment)
app.put("/posts/:postId/comments/:commentId",routes.comments.updateComment)
app.delete("/posts/:postId/comments/:commentId",routes.comments.removeComment)

app.listen(3000)