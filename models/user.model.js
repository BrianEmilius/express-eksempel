import { model, Schema } from "mongoose"
import bcrypt from "bcrypt"

const UserSchema = new Schema({
	username: {
		type: String,
		required: [true, "must provide username"]
	},
	password: {
		type: String,
		required: [true, "must provide password"],
		select: false
	}
}, {
	versionKey: false
})

UserSchema.pre("save", async function(next) {
	if (!this.isModified("password")) return next()

	const salt = 10
	const hash = await bcrypt.hash(this.password, salt)
	this.password = hash
	next()
})

UserSchema.methods.authenticate = async function(password) {
	return await bcrypt.compare(password, this.password)
}

const User = model("User", UserSchema)

export default User
