const { getConnection } = require('../database/database')
const { v4 } = require('uuid')

const getTasks = async(req, res) => {
    const tasks = await getConnection().get('tasks').value()
    res.json(tasks)
}
const createTask = async(req, res) => {
    const newTask = {
        title: req.body.title,
        description: req.body.description,
        id: v4(),
        created_at: new Date()
    }
    getConnection().get('tasks').push(newTask).write();

    res.send(newTask)
}

const getTask = async(req, res) => {
    const id = req.params.id;
    const task = await getConnection().get('tasks').find({id: id}).value()
    res.json(task)
}

const updateTask = async(req, res) => {
    const task = req.body
    const id = req.params.id;
    const result = await getConnection().get('tasks').find({id: id})
    .assign(task)
    .write()
    res.json(result)

}

const deleteTask = async(req, res) => {
    const id = req.params.id
    const result = await getConnection().get('tasks').remove({id: id}).write()
    res.json(result)
}  

module.exports = {
    getTasks,
    createTask, 
    getTask,
    updateTask,
    deleteTask
}