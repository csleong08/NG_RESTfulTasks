const bp = require("body-parser");
const api = require("./controller.js")

function routes(app)
{
    app.use(bp.json());
    console.log("routes are doing stuff");
    app.get("/tasks", api.allTasks);
    app.get("/tasks/:id", api.oneTask);
    app.post("/tasks", api.createTask);
    app.put("/tasks/:id", api.updateTask);
    app.delete("/tasks/:id", api.deleteTask);
    return app;
}

module.exports = routes;