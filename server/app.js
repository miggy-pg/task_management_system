const express = require("express")

const app = express()

const PORT = 3000

const tasksRouter = require("./routes/tasks.route")

app.use("/", tasksRouter)

app.get("/", (req, res) => {
	res.send("Welcome")
})


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
})