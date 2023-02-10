import upload from "../../middlewares/upload.js"
import authorization from "../../middlewares/auth.js"
import createProducts from "./createProducts.js"
import getProducts from "./getProducts.js"
import updateProducts from "./updateProducts.js"

export default function products(app) {
	app.route("/api/v1/products/:id?")
		.get(getProducts)
		.all(authorization)
		.post(upload.array("images"), createProducts)
		.patch(upload.array("images"), updateProducts)
}
