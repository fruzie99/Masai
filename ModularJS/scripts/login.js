document.getElementById("login-btn").addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No user found. Please signup first.");
        return;
    }

    if (email === storedUser.email && pass === storedUser.pass) {
        localStorage.setItem("isLoggedIn", true);
        alert("Login Successful!");
        window.location.href = "todos.html";
    } else {
        alert("Invalid Credentials");
    }
});
