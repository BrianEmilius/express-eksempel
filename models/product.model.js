import { model, Schema } from "mongoose"

const ProductSchema = new Schema({
	name: String,
	description: String,
	price: {
		type: Number,
		required: [true, "you must provide a price"]
	},
	images: [{
		type: Schema.Types.ObjectId,
		ref: "Media"
	}]
}, {
	versionKey: false
})

const Product = model("Product", ProductSchema)

export default Product
