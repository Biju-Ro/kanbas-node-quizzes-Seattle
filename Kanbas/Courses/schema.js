import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
    {
        number: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        image: String,
        department: String, 
        credits: Number,
        description: String,
        author: String,
    },
    { collection: "courses" }
);
export default courseSchema;