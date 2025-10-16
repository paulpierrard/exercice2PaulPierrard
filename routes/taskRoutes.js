const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Routes CRUD simples
router.get("/", taskController.displayTasks);     // Afficher toutes les tâches
router.post("/", taskController.addTask);         // Ajouter une tâche
router.delete("/:id", taskController.removeTask); // Supprimer une tâche

module.exports = router;
