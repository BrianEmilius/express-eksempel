import { model, Schema } from "mongoose"

const ImageSchema = new Schema({
	originalname: String,
	mimetype: String,
	filename: String,
	path: String,
	size: Number
})

const CheeseSchema = new Schema({
	name: String,
	description: String,
	price: {
		type: Number,
		required: [true, "you must provide a price"]
	},
	image: ImageSchema
})

const Cheese = model("Cheese", CheeseSchema)

export default Cheese
