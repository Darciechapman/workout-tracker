const router = require("express").Router();
const path = require("path");

//HTML routes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"))
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/index.html'))
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/exercise.html"))
})

module.exports = router;