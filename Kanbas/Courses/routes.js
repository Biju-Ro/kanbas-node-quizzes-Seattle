import * as dao from "./dao.js";
export default function CourseRoutes(app) {
    const createCourse = async (req, res) => {
        const course = await dao.createCourse({...req.body, number: new Date().getTime().toString()});
        res.json(course);
    };
    const updateCourse = async (req, res) => {
        const { id } = req.params;
        const course = await dao.updateCourse(id, req.body);
        res.json(course);
    };
    const deleteCourse = async (req, res) => {
        const { id } = req.params;
        const status = await dao.deleteCourse(id);
        res.json(status);
    }
    const findCourses = async (req, res) => {
        const courses = await dao.findAllCourses();
        res.json(courses);
    }
    app.post("/api/courses", createCourse);
    app.get("/api/courses", findCourses);
    app.put("/api/courses/:id", updateCourse);
    app.delete("/api/courses/:id", deleteCourse);
}
