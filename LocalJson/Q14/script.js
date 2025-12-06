const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const searchBar = document.getElementById("searchBar");
const taskList = document.getElementById("taskList");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function displayTasks(list = tasks) {
  taskList.innerHTML = "";

  list.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.style.textDecoration = task.completed ? "line-through" : "none";

  
    li.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      displayTasks();
    });

   
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.style.marginLeft = "10px";

    removeBtn.addEventListener("click", (event) => {
      event.stopPropagation(); // prevent toggle
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      displayTasks();
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  displayTasks();
  taskInput.value = "";
});


searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  const filtered = tasks.filter(t => t.text.toLowerCase().includes(query));
  displayTasks(filtered);
});


displayTasks();
