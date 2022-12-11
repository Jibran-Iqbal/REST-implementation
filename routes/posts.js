const express = require("express");

const router=express.Router()
const Post = require('../models/Post')



// This one gets back all the posts
router.get('/',async(req,res) =>{
    try{
        const posts = await Post.find();
        res.json(posts)
    }
    catch(err){
        res.json({message:err})
    }
})






// router.post('/',(req,res)=>{
    //     console.log(req.body)
//     var post = new Post(req.body)/*({
//         title: req.body.title,
//         description:req.body.description
//     })*/
//         // post.markModified('rest')
//         // Post.createCollection();
//         post.save()
//         .then(data =>{
    //             res.json(data)
//         })
//         .catch(err =>console.log(err))//res.json({message:err}))
        
// })

//Another way of doing that is 




// This one submits a post
router.post('/',async(req,res)=>{
    console.log(req.body)
    const post = new Post(req.body)
    try{
    const savedPost=await post.save()
    res.json(savedPost)
    }
    catch(err){
        res.json({message:err});
    }
})



// This one gets back a specific post
router.get('/:postId',async (req,res) =>{
    // console.log(req.params.postId)
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch(err){
        res.send({message:err})
    }
})

// This one to delete posts
router.delete('/:pid',async(req,res)=>{
        try{

            const remPost=await Post.remove({title:req.params.pid})
            res.json(remPost)
        }   
        catch(err){
            console.log(err)
        }
        })



// Updata a post
router.patch('/:pt',async(req,res)=>{
    try{

        const upPost= await Post.updateOne({title:req.params.pt},{$set:{title:req.body.title}})

        res.json(upPost);
    }
    catch(err){
        res.json({message:err})
    }
})



module.exports= router;
