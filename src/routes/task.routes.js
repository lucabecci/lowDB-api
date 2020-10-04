const { Router } = require("express");
const router = Router();

const { getTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/task.controller')

router.get('/', getTasks)

router.get('/:id', getTask)

router.post('/', createTask)

router.delete('/:id', deleteTask)

router.put('/:id', updateTask)

module.exports = router;
