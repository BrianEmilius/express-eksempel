import express from "express"
import oste from "./routes/oste.js"

const app = express()

app.use(express.static("./public"))
oste(app)

app.listen(1337, function() {
	console.log("The App is listening on port 1337")
})
