import Media from "../../models/media.model.js"

export default async function getMedia(request, response) {
	try {
		const result = await Media.find({}).limit(20).skip(0).lean()
		response.json(result)
		response.end()
	} catch (error) {
		console.log("get media error", error)
		response.status(500)
		response.end()
	}
}
