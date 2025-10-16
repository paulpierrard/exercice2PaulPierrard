// Simulation d'une base de données en mémoire
let tasks = [
  { id: 1, title: "Faire les courses" },
  { id: 2, title: "Apprendre Express" },
];

module.exports = {
  getAllTasks: () => tasks,

  addTask: (title) => {
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
    };
    tasks.push(newTask);
    return newTask;
  },

  removeTask: (id) => {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
  },
};
