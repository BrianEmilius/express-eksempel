import User from "../../models/user.model.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export default async function token(request, response) {
	if (!request.body.username || !request.body.password) {
		response.status(400)
		response.end()
		return
	}

	try {
		const user = await User.findOne({ username: request.body.username })
			.select("password")
		if (!user) {
			response.status(403)
			response.end()
			return
		}

		if (!await user.authenticate(request.body.password)) {
			response.status(403)
			response.end()
			return
		}

		const newToken = jwt.sign({ username: user.username }, process.env.TOKEN_SECRET, { expiresIn: "1h" })

		response.status(201)
		response.send(newToken)
		response.end()
	} catch (error) {
		console.log("authentication token error", error)
		response.status(500)
		response.end()
	}
}
