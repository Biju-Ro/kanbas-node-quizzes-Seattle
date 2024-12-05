import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        course: { type: String, required: true },
        description: String,
        lessons: [
            {
                id: { type: String, required: true },
                name: { type: String, required: true },
                module: { type: String, required: true },
                description: String,
            },
        ],
    },
    { collection: "modules" }
);
export default moduleSchema;