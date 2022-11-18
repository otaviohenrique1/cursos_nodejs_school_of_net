import mongoose from "mongoose"

const PersonSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

export default mongoose.model('Person', PersonSchema);