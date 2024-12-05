import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
    const createModule = async (req, res) => {
        const { cid } = req.params;
        const module = await dao.createModule({ ...req.body, course: cid });
        res.json(module);
    };

    const updateModule = async (req, res) => {
        const { mid } = req.params;
        const module = await dao.updateModule(mid, req.body);
        res.json(module);
    }

    const deleteModule = async (req, res) => {
        const { mid } = req.params;
        const status = await dao.deleteModule(mid);
        res.json(status);
    }

    const findModulesByCourse = async (req, res) => {
        const { cid } = req.params;
        const modules = await dao.findModulesByCourse(cid);
        res.json(modules);
    }

    const findAllModules = async (req, res) => {
        const modules = await dao.findAllModules();
        res.json(modules);
    }   

    app.post("/api/courses/:cid/modules", createModule);
    app.put("/api/modules/:mid", updateModule);
    app.delete("/api/modules/:mid", deleteModule);
    app.get("/api/courses/:cid/modules", findModulesByCourse);
    app.get("/api/modules", findAllModules);
}
