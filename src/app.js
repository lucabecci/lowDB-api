const express = require("express");
const morgan = require("morgan");
const taskRoutes = require("./routes/task.routes");
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
//routes

app.use('/tasks', taskRoutes);
//exportando
module.exports = app;
