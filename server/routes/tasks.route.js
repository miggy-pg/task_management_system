const { Router } = require("express")
const router = Router()

const { getTasks } = require("../controllers/tasks.controller")


router.get("/tasks", getTasks)

module.exports = router