// models/taskModel.js
import fs from "fs";

const DATA_FILE = "./tasks.json";

function loadTasks() {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

export function getAllTasks() {
  return loadTasks();
}

export function addTask(title) {
  const tasks = loadTasks();
  const newTask = { id: Date.now(), title, done: false };
  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
}

export function deleteTask(id) {
  let tasks = loadTasks();
  tasks = tasks.filter(t => t.id !== id);
  saveTasks(tasks);
}

export function toggleTask(id) {
  const tasks = loadTasks();
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.done = !task.done;
    saveTasks(tasks);
    return task;
  }
  return null;
}
