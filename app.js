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

// Endpoint para recibir webhook de GitHub (evento push)
app.post("/webhook", (req, res) => {
    console.log("Evento push recibido desde GitHub:");
    console.log(req.body);
    res.status(200).send("Webhook recibido correctamente");
});


app.listen(3000, () => {
    console.log("Servidor ejecutándose en puerto 3000");
});

//Vamos a probar hacer este cambio desde aquí con este comentarios, hecho por mi para verificar que el webhook funciona correctamente.