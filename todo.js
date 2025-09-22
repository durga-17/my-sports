// todo.js
let todos = [];

function addTask(task) {
  todos.push(task);
  console.log(`✅ Added: ${task}`);
}

function showTasks() {
  console.log("📋 Your Tasks:");
  todos.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

addTask("Learn JavaScript");
addTask("Push code to GitHub");
showTasks();
