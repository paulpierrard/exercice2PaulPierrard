const Task = require("../models/taskModel");

exports.displayTasks = (req, res) => {
  res.json(Task.getAllTasks());
};

exports.addTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Le titre de la tâche est requis." });
  }
  const newTask = Task.addTask(title);
  res.status(201).json(newTask);
};

exports.removeTask = (req, res) => {
  const id = parseInt(req.params.id);
  const success = Task.removeTask(id);
  if (!success) {
    return res.status(404).json({ message: "Tâche non trouvée." });
  }
  res.json({ message: "Tâche supprimée avec succès." });
};
