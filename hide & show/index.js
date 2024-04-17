const img = document.getElementById("img");
const button = document.getElementById("button");


button.addEventListener("click", event => {
    if (img.style.visibility === "hidden") {
        img.style.visibility = "visible";
        button.textContent = "HIDE"
    }
    else {
        img.style.visibility = "hidden";
        button.textContent = "SHOW";
    }



})