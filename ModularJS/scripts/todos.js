import { navbar } from "./navbar.js";
import { footer } from "./footer.js";
import { displayTodos } from "./displayTodos.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();


let isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn) {
    alert("Please login first!");
    window.location.href = "login.html";
}


async function fetchTodos() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await res.json();
        displayTodos(data.slice(0, 20)); // Display first 20
    } catch (err) {
        console.log(err);
    }
}

fetchTodos();
