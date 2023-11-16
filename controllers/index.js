const router = require("express").Router()
const homeRoutes= require("./home-routes")
const dashRoutes = require("./dasboard-routes")
const apiRoutes= require("./api")

router.use("/api", apiRoutes)
router.use("/", homeRoutes)
router.use("/dashboard", dashRoutes)


module.exports=router