const tag = document.getElementById("tag");
const btn = document.getElementById("btn");
const back = document.getElementById("back");
const selectcolor = document.getElementById("selectcolor");


function changecolor(){
    const back = document.getElementById("back");
    const selectcolor = document.getElementById("selectcolor");

    const selectedColor = selectcolor.options[selectcolor.selectedindex].value;
    back.style.color = selectedColor;
    
}
changecolor()