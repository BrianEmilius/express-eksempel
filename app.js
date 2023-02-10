import express from "express"
import products from "./routes/products/index.js"
import users from "./routes/users/index.js"
import media from "./routes/media/index.js"
import auth from "./routes/auth/index.js"
import "./database.js"

const app = express()

app.use(express.static("./uploads"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
products(app)
users(app)
media(app)
auth(app)

app.listen(1337, function() {
	console.log("The App is listening on port 1337")
})
