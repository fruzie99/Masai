const API_URL = "https://jsonplaceholder.typicode.com/todos";
const TODO_KEY = "todos";


async function fetchAndSaveTodos() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        const first20 = data.slice(0, 20);

        localStorage.setItem(TODO_KEY, JSON.stringify(first20));

        renderTodos();
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}


function getTodos() {
    const stored = localStorage.getItem(TODO_KEY);
    return stored ? JSON.parse(stored) : [];
}


function renderTodos() {
    const container = document.getElementById("todo-container");
    const todos = getTodos();

    container.innerHTML = ""; 

    if (todos.length === 0) {
        container.innerHTML = "<h3>No Todos Available</h3>";
        return;
    }

    todos.forEach((todo) => {
        const div = document.createElement("div");
        div.className = "todo";

        div.innerHTML = `
            <span>${todo.title}</span>
            <span class="${todo.completed ? "completed" : "not-completed"}">
                ${todo.completed ? "Completed" : "Pending"}
            </span>
            <button onclick="deleteTodo(${todo.id})">Delete</button>
        `;

        container.appendChild(div);
    });
}


function deleteTodo(id) {
    let todos = getTodos();
    let updated = todos.filter(todo => todo.id !== id);

    localStorage.setItem(TODO_KEY, JSON.stringify(updated));

    renderTodos();
}


document.getElementById("fetchBtn").addEventListener("click", fetchAndSaveTodos);


renderTodos();
