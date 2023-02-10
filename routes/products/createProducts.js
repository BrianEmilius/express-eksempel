import Product from "../../models/product.model.js"

export default async function createProducts(request, response) {
	try {
		const document = {
			...request.body,
			image: { ...request.file }
		}

		const product = new Product(document)

		await product.save()

		response.status(201)
		response.json(product)
		response.end()
	} catch (error) {
		if (error._message) {
			response.status(400)
			response.end()
			return
		}

		console.log("create product error", error)
		response.status(500)
		response.end()
	}
}
