const posts = require("./posts")
const postExists = posts.postExists

function postDoesnotExistResponse(res){
    res.status(400).send("requested post doesn't exist.")
}

function isValidComment(req){
    if(req.params.commentId < req.blog.posts[req.params.postId].comments.length){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    getComments(req,res){
        if(postExists(req)){
            res.status(200).send(JSON.stringify(req.blog.posts[req.params.postId].comments))
        }else{
            postDoesnotExistResponse(res);
        }
    },
    addComment(req,res){
        if(postExists(req)){
            if(req.body.comment){
                req.blog.posts[req.params.postId].comments.push(req.body.comment)
                res.status(201).send(req.blog.posts[req.params.postId])
            }else{
                res.status(400).send({comment: "The comment starts like ..."})
            }    
        }else{
            postDoesnotExistResponse(res);
        }
    },
    updateComment(req,res){
        if(postExists(req)){
            if(isValidComment(req)){
                if(req.body.comment){
                    req.blog.posts[req.params.postId].comments[req.params.commentId] = req.body.comment;
                    res.status(201).send(req.blog.posts[req.params.postId])
                }else{
                    res.status(400).send({comment: "The comment starts like ..."})
                }
            }else{
                res.status(400).send("Invalid comment requested.")
            }
        }else{
            postDoesnotExistResponse(res);
        }
    },
    removeComment(req,res){
        if(postExists(req)){
            if(isValidComment(req)){
                req.blog.posts[req.params.postId].comments.splice([req.params.commentId],1)
                res.status(201).send(req.blog.posts[req.params.postId])
            }else{
                res.status(400).send("Invalid comment requested.")
            }
        }else{
            postDoesnotExistResponse(res);
        }
    }
}