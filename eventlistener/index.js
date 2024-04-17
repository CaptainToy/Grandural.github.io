const myBox = document.getElementById("myBox");
const movement = 10;
let x = 0;
let y = 0;



myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "Green";
    event.target.textContent = "Online";
});
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.style.color = "black"
    event.target.textContent = "You want to come online click me!"

});
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Offline";
});

document.addEventListener("keydown", event => {

    if (event.key.startsWith("Arrow")) {


        switch (event.key) {
            case "ArrowUp":
                y -= movement;
                break;
            case "ArrowDown":
                y += movement;
                break;
            case "ArrowLeft":
                y -= movement;
                break;
            case "ArrowRight":
                y += movement;
                break;

        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;

    }
});

const myButtons = document.querySelectorAll (".myButton")
myButtons.forEach(myButtons => {
    myButtons.style.backgroundColor = "green";
    myButtons.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    myButtons.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "blue";
    myButtons.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "yellow"
    })
    })
    })
})
myButtons.forEach(myButtons => {
    myButtons.addEventListener("click", event =>{
        event.target.remove();
        myButtons = document.querySelectorAll(".myButton");
    });
});