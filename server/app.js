const express = require("express")
const app = express()
const path = require("path")

const PORT = 3000

const tasksRouter = require("./routes/tasks.route")

// SET OUR HBS TEMPLATE ENGINE
app.set("view engine", "hbs")
// POINT TO OUR VIEWS FOLDER
app.set("views", path.join(__dirname, "views"))

app.use((req, res, next) => {
	const start = Date.now()
	next()

	const delta = Date.now() - start
	console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

app.use(express.json())
app.use('/site', express.static(path.join(__dirname, "public")))

// For our template engine HBS, we will use 'layout' which will be the main template (similar to Jinja2 in Flask) 
// and 'partials' which will be the smaller templates that will be included in the main template
// So, we will not call 'layout' separately, it will be called automatically
app.use("/", (req, res, next) => {
	res.render('index', { title: 'Home Page', caption: 'Welcome to our site!' })
}
)

app.use("/", tasksRouter)


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
})