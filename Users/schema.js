import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        firstName: String,
        email: String,
        lastName: String,
        dob: Date,
        role: {
            type: String,
            enum: ["STUDENT", "FACULTY", "ADMIN"],
            default: "STUDENT",
        },
        loginId: String,
        section: String,
        lastActivity: Date,
        totalActivity: String,
        courses: [String],
        quizAnswers: [
            {
                quizId: { type: String, required: true },
                attempts: { type: Number, default: 0 },
                score: { type: Number, default: 0 },
                answers: [
                    {
                        questionId: { type: String, required: true },
                        multipleChoiceAnswerIndex: { type: Number, default: -1 },
                        trueFalseAnswer: String,
                        fillInTheBlankAnswer: String,
                    },
                ],
            },
        ],
    },
    { collection: "users" }
);
export default userSchema;
