import Product from "../../models/product.model.js"
import dotenv from "dotenv"
dotenv.config()

function URLBuilder(id, resource) {
	return process.env.HOST_ADDRESS + `/api/v1/${resource}/${id}`
}

export default async function getAllProducts(request, response) {
	const id = request.params.id
	const limit = parseInt(request.query.limit || 20)
	const skip = parseInt(request.query.skip || 0)

	const query = id ? { _id: id } : {}
	const result = await Product.find(query).limit(limit).skip(skip).toObject()
	const length = await Product.countDocuments()

	const nextLink = skip + limit >= length ? null : process.env.HOST_ADDRESS + `/api/v1/products?limit=${limit}&skip=${skip + limit}`
	const previousLink = skip === 0
		? null
		: process.env.HOST_ADDRESS
			+ `/api/v1/products?limit=${limit}&skip=${skip - limit < 0 ? 0 : skip - limit}`

	const presentation = {
		count: length,
		next: nextLink,
		previous: previousLink,
		results: result.map(item => ({...item, url: URLBuilder(item._id, "products")}))
	}

	response.json(id ? {...result[0], url: URLBuilder(result[0]._id, "products")} : presentation)
	response.end()
}
