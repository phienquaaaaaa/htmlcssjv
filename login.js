const users = [
    { username: "customer", password: "123", role: "customer" },
    { username: "staff", password: "123", role: "staff" },
    { username: "admin", password: "123", role: "admin" }
];

function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    const user = users.find(x => x.username === u && x.password === p);

    if (!user) {
        document.getElementById("error").innerText = "Oh no! Wrong something. Try again...";
        return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "index.html";
}