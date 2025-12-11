export function displayTodos(data) {
    const container = document.getElementById("todos-container");
    container.innerHTML = "";

    data.forEach(todo => {
        let div = document.createElement("div");
        div.style.border = "1px solid gray";
        div.style.margin = "10px";
        div.style.padding = "10px";

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Status: ${todo.completed ? "✔ Completed" : "❌ Pending"}</p>
        `;

        container.appendChild(div);
    });
}
