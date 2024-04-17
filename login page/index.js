const Login = document.getElementById("Login");
const btn = document.getElementById("btn");
const fogpass = document.getElementById("fogpass");
let username = document.getElementById("username");
let password = document.getElementById("password");

btn.addEventListener("click", function() {
    if (username.value === "Korede" && password.value === "Korede") {
        
        setTimeout(() => {
            btn.textContent = "Successful";
        }, 1000);
        setTimeout(() => {
            btn.style.backgroundColor = "green";
        }, 1000);
       
        
        btn.addEventListener("mouseout", function(event) {
            btn.textContent = "Login";
            btn.style.backgroundColor = "hsla(57, 100%, 51%, 0.756)";
        });
    } else {
        fogpass.style.backgroundColor = "red";
        setTimeout(() => {
            fogpass.textContent = "Forgot password !";
        }, 1000);
        btn.addEventListener("mouseout", function(event) {
            fogpass.textContent = "";
            fogpass.style.backgroundColor = "";
        });
    }
});
