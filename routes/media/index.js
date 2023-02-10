import createMedia from "./createMedia.js"
import upload from "../../middlewares/upload.js"
import getMedia from "./getMedia.js"

export default function media(app) {
	app.route("/api/v1/media/:id?")
		.post(upload.single("file"), createMedia)
		.get(getMedia)
}
