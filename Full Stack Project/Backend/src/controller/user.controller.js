const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userModel = require("../model/user.model")

const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    const existingUser = await userModel.findOne({ email })
    if (existingUser) return res.json({ message: "User already exists" })
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await userModel.create({ name, email, password: hashedPassword })
    res.json({ message: "User Registered Successfully", user })
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (!user) return res.json({ message: "User not found" })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.json({ message: "Invalid password" })
    const token = jwt.sign({ id: user._id }, "secretkey123", { expiresIn: "1d" })
    res.json({ message: "Login Successful", token, user })
}

module.exports = { registerUser, loginUser }
