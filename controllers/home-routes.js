const router = require("express").Router()

const { Post, User, Comment }=require("../models")

router.get("/", async (req, res)=>{
    try{
        console.log("route hit homepage");

        const postData= await Post.findAll({
            include:[User]
        })

        const posts= postData.map((post)=> post.get({plain: true}))
        console.log(posts);

        res.render("homepage", {posts, logged_in:req.session.logged_in})

    }catch{
       res.status(500).json({message:"something went wrong"})

    }
});

router.get("/post/:id", async (req, res) => {
    try {

        const postData = await Post.findByPk(req.params.id,{
            include: [{model:User}, {model:Comment, include:[{model:User}]}]
        })

        const posts = postData.get({ plain: true })

        res.render("single-post", {posts, logged_in:req.session.logged_in})

    } catch {
        res.status(500).json({ message: "something went wrong" })

    }
});

router.get("/login", (req, res)=>{
    if(req.session.logged_in){
        res.redirect("/dashboard")
    }
    res.render("login")
})

module.exports= router