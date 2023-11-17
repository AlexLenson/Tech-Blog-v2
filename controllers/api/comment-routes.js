const router = require("express").Router()
const { Comment } = require("../../models")
const withAuth = require("../../utils/auth")


router.post("/", withAuth, async (req, res) => {
    try {
        // console.log(req.body, req.session.userId ," is the user present here?");
        // only the content is being saved to the database, not post_id or user_id
        const newComment = await Comment.create({
        content: req.body.content,
            post_id: req.body.post_id,
          user_id: req.session.user_id
        })
        //   console.log(newComment, "where is my user??")
        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err)
    }
})



module.exports = router;