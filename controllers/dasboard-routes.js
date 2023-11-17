const router = require("express").Router()
const withAuth = require("../utils/auth")
const { Post, User, Comment } = require("../models")

router.get("/", withAuth, async (req, res) => {
    try {
        console.log("route hit homepage");

        const postData = await Post.findAll({
            include: [User],
            where:{
                user_id: req.session.user_id
            }
        })

        const posts = postData.map((post) => post.get({ plain: true }))
        console.log(posts);

        res.render("dashboard", { posts, logged_in:req.session.logged_in })

    } catch {
        res.status(500).json({ message: "something went wrong" }).redirect("/login")
     

    }
});

router.get("/post/:id", withAuth, async (req, res) => {
    try {

        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User }]
        })

        const posts = postData.get({ plain: true })

        res.render("user-single-post", { posts, logged_in: req.session.logged_in })

    } catch {
        res.status(500).json({ message: "something went wrong" })

    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        layout: 'dashboard',
    });
});

module.exports= router