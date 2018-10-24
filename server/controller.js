const Task = require("./models.js")

module.exports = 
{
    // getall
    allTasks: (req,res) => 
    {
        console.log("all tasks in controller")
        Task.find({})
            .then(task=>console.log(task)||res.json(task))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    // new task
    createTask: (req,res) => 
    {
        console.log("create task in controller")
        Task.create(req.body)
            .then(task=>console.log(task)||res.json(task))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    // one task
    oneTask: (req,res) => 
    {
        console.log("one task in controller");
        Task.findById(req.params.id)
                .then(task=>console.log(task)||res.json(task))
                .catch(errs=>console.log(errs)||res.json(errs))
    },
    updateTask: (req,res) => 
    {
        console.log("update task in controller");
        Task.findById(req.params.id, req.body, {new:true})
            .then(task=>console.log(task)||res.json(task))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    deleteTask: (req,res) =>
    {
        console.log("delete task in controller")
        Task.findByIdAndRemove(req.params.id)
            .then(task=>console.log(task)||res.json(task))
            .catch(errs=>console.log(errs)||res.json(errs))
    }
}