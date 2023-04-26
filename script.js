let grid = document.querySelector(".grid-div");
let grids = document.querySelector(".grids")
let body = document.querySelector("body")

body.addEventListener("mouseup", () => {
    isPressed=false;
})
let rows = 16;
let columns = 16;

let eraser = false;

genGrid()

let isPressed = false;
function genGrid(){

    grid.style.display = "grid";
    grid.style.setProperty("grid-template-columns", `repeat(${columns},1fr)`);
    grid.style.setProperty('grid-template-rows', `repeat(${rows},1fr)`);
    
    for(i = 0; i< columns*rows; i++){
        let div = document.createElement("div");~
        div.classList.add("grid-item")
        // div.style.border = "1px solid black";
        div.setAttribute("draggable", "false")

        div.addEventListener("mousedown", () => {
            isPressed=true;
            div.setAttribute("style", "background-color:black;")
        })
        div.addEventListener("mouseup", () => {
            isPressed=false;
        })

        div.addEventListener("mouseover", () => {
            if(isPressed===true){
                if(eraser == true){
                    div.removeAttribute("style");
                }
                div.setAttribute("style", "background-color:black;")
                


            }
        })


        grid.appendChild(div);
    }
}

function toggleEraser(){
    let gridItems = document.getElementsByClassName('grid-item')


    if(eraser == false){
        console.log(eraser)
        return eraser = true
    }
    if(eraser == true ) {
        console.log(eraser)
        return eraser = false
    }

}

if (eraser){
    e.target.style.backgroundColor = '';

}





function clearGrid(){
    let gridItems = document.getElementsByClassName('grid-item')

    for(var i = 0; i < gridItems.length; i++){
        gridItems[i].removeAttribute("style"); 
    }
}



function setPPS() {
    let pps = document.getElementById("pps").value;

    if(pps > 64) {
        return alert("Pixels per side cant exceed 64")
    }

    let gridItems = document.getElementsByClassName('grid-item');

    while(gridItems[0]) {
        gridItems[0].parentNode.removeChild(gridItems[0]);
    }
    columns = pps
    rows = pps
    genGrid();
    console.log(rows)
}