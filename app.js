const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];

// Crear tarea
app.post("/tasks", (req, res) => {
    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(task);
    res.status(201).json(task);
});

// Listar tareas
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.listen(3000, () => {
    console.log("Servidor ejecutándose en puerto 3000");
});
