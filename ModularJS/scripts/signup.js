document.getElementById("signup-btn").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (!name || !email || !pass) {
        alert("Please fill all fields");
        return;
    }

    let user = { name, email, pass };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful!");
    window.location.href = "login.html";
});
