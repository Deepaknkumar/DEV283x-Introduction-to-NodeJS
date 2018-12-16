function postExists(req){
    let postId = req.params.postId;
        if(postId<req.blog.posts.length){
            return true;
        }else{
            return false;
        }
}

module.exports = {
    postExists,
    getPosts(req,res){
        console.log(req.body);
        res.status(200).send(req.blog.posts)
    },

    addPost(req,res){
        if(req.body.name && req.body.url && req.body.text){
            let newPost = {
                name : req.body.name,
                url : req.body.url,
                text : req.body.text,
                comments : []
            }
            req.blog.posts.push(newPost)
            res.status(201).send(newPost)
        }else{
            res.status(400).send({name:"Post name", url : " url of the post", text: "Contents of the post"})
        }
    },

    updatePost(req,res){
        let postId = req.params.postId;
        if( postId < req.blog.posts.length){
            if(req.body.name && req.body.url && req.body.text){
                req.blog.posts[postId] = req.body;
                res.status(204).send(req.blog.posts[postId])
            }else{
                res.sendStatus(400)
            }
        }else{
            res.sendStatus(400)
        }
    },

    removePost(req,res){
        let postId = req.params.postId;
        if( postId < req.blog.posts.length){
            req.blog.posts.splice(postId,1);
            res.status(204).send()
        }else{
            res.sendStatus(400)
        }
    }
}

// exports.postExists = postExists