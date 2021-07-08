const express = require('express')
const router = express.Router()
const user = require("../controllers/user")

router.post("/signup", (request, response) => {
    response.send('send')
})
router.route("/api/users/signin")
.post(user.addNewUser)

module.exports = router