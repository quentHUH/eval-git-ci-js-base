
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function addTask(name) {
    if (typeof name !== 'string' || name.trim() === '') throw new Error('Invalid task name');
    const task = { id: nextId++, name: name.trim(), done: false };
    tasks.push(task);
    return task;
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) throw new Error('Task not found');
    task.done = !task.done;
    return task;
}

function countDone() {
    return tasks.filter(t => t.done).length;
}


function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { addTask, toggleTask, countDone, getTasks, reset };
