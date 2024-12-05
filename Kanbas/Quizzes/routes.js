import * as dao from "./dao.js";

export default function QuizRoutes(app) {
    app.get("/api/quizzes", async (req, res) => {
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
    });

    app.get("/api/quizzes/:qid", async (req, res) => {
        const { qid } = req.params;
        const quiz = await dao.findQuizByID(qid);
        res.json(quiz);
    });

    app.get("/api/courses/:cid/quizzes", async (req, res) => {
        const { cid } = req.params;
        const quizzes = await dao.findQuizByCourse(cid);
        res.json(quizzes);
    });

    app.post("/api/courses/:cid/quizzes", async (req, res) => {
        const { cid } = req.params;
        const newQuiz = {
            ...req.body,
            course: cid
        };
        const createdQuiz = await dao.addQuiz(newQuiz);
        res.json(createdQuiz);
    });

    app.put("/api/quizzes/:qid", async (req, res) => {
        const { qid } = req.params;
        const updatedQuiz = await dao.editQuiz(qid, req.body);
        res.json(updatedQuiz);
    });

    app.delete("/api/quizzes/:qid", async (req, res) => {
        const { qid } = req.params;
        await dao.deleteQuiz(qid);
        res.sendStatus(204);
    });
}
