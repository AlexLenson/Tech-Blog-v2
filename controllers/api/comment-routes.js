const router = require("express").Router()
const { Comment } = require("../../models")
const withAuth = require("../../utils/auth")


router.post("/", withAuth, async (req, res) => {
    try {
        // console.log(req.body, req.session.userId ," is the user present here?");
        const newComment = await Comment.create({
        content: req.body.content,
            post_id: req.body.postId,
          user_id: req.session.userId
        })
        //   console.log(newComment, "where is my user??")
        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err)
    }
})



module.exports = router;