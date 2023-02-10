import { model, Schema } from "mongoose"

const MediaSchema = new Schema({
	originalname: String,
	mimetype: String,
	filename: String,
	size: Number,
	name: String,
	description: String
}, {
	versionKey: false
})

MediaSchema.pre("deleteOne", function(next) {
	this.model("Product").deleteOne({ images: [this._id] }, next)
})

const Media = model("Media", MediaSchema)

export default Media
