import Media from "../../models/media.model.js"

export default async function createMedia(request, response) {
	console.log(request.file)
	const media = new Media({
		...request.file,
		name: request.body.name,
		description: request.body.description
	})

	try {
		await media.save()
		response.status(201)
		response.end()
	} catch (error) {
		console.log(error)
		response.status(500)
		response.end()
	}
}
