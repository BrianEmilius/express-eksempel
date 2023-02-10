//import { MongoClient } from "mongodb"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const uri = process.env.MONGO_URI

async function main() {
	mongoose.set('strictQuery', false)
	await mongoose.connect(uri)
	console.log("DB connection established")
}

main().catch(error => console.log("DB connection error", error))
