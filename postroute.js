const express=require("express")
const mongoose=require("mongoose")
const router=express.Router()
const post=require('./postsdb')
// create post
router.post('/',async(req,res)=>{
    const {userid,title,body}=req.body
    const newpost=new post({userid,title,body})
    const saveposts= await newpost.save()
    res.status(201).json(saveposts)
})
// get all posts
router.get('/',async(req,res)=>{
    const posts= await post.find()
    res.json(posts)
})
// get posts by id
router.get('/:id',async(req,res)=>{
    const posts= await post.findById(req.params.id)
    if(!posts){return res.status(404).json({Message:"ERROR POST NOT FOUND!!!"})}
    res.json(posts)
})
// update posts
router.put('/:id',async(req,res)=>{
    const {title,body}=req.body
    const updatepost=await post.findByIdAndUpdate(req.params.id,{title,body},{ new: true })
    if(!updatepost){return res.status(404).json({Message:"ERROR POST NOT FOUND!!!"})}
    res.json(updatepost)
})
// delete posts
router.delete('/:id',async(req,res)=>{
    const posts= await post.findByIdAndDelete(req.params.id)
    if(!posts){return res.status(404).json({Message:"ERROR POST NOT FOUND!!!"})}
    res.json({Message:"post deleted"})
})
//patch posts
router.patch('/:id',async(req,res)=>{   
  
    const posts = await post.findByIdAndUpdate(req.params.id);
    posts.title = req.body.title ?? posts.title;
    posts.body = req.body.body ?? posts.body;
    const saveposts= await posts.save()
    res.json(posts)
})
module.exports=router