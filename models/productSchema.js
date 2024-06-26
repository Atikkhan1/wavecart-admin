const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    link: String,
    category: String,
    price: Number,
    description: String
})
mongoose.models = {}
export default mongoose.model("products", productSchema)