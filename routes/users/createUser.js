import User from "../../models/user.model.js"

export default async function createUser(request, response) {
	if (!request.body.username || !request.body.password) {
		response.status(400)
		response.end()
		return
	}

	const check = await User.findOne({ username: request.body.username })

	if (check) {
		response.status(403)
		response.end()
		return
	}

	try {
		// create ze document
		const user = new User({
			username: request.body.username,
			password: request.body.password
		})

		await user.save() // save ze document

		response.status(201)
		response.json(user) // show ze document
		response.end()
	} catch (error) {
		if (error._message) {
			response.status(400)
			response.end()
			return
		}

		console.log("create user error", error)
		response.status(500)
		response.end()
	}
}
