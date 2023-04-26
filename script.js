let grid = document.querySelector(".grid-div");
let grids = document.querySelector(".grids")
let body = document.querySelector("body")

body.addEventListener("mouseup", () => {
    isPressed=false;
})
// let rows = 16;
// let columns = 16;

let eraser = false;

firstLoad()

function firstLoad(){
    let gridLabels = document.querySelectorAll('#range-value');
    for (let i = 0; i < gridLabels.length; i++) {
      gridLabels[i].textContent = 16;
    }

    genGrid(16,16);
}

let isPressed = false;
function genGrid(columns, rows){
    grid.style.display = "grid";
    grid.style.setProperty("grid-template-columns", `repeat(${columns},1fr)`);
    grid.style.setProperty('grid-template-rows', `repeat(${rows},1fr)`);

    for(i = 0; i< columns*rows; i++){
        let div = document.createElement("div");
        div.classList.add("grid-item")
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







function clearGrid(){
    let gridItems = document.getElementsByClassName('grid-item')

    for(var i = 0; i < gridItems.length; i++){
        gridItems[i].removeAttribute("style"); 
    }
}



  function rangeSlider(value) {
    let gridLabels = document.querySelectorAll('#range-value');
    for (let i = 0; i < gridLabels.length; i++) {
      gridLabels[i].textContent = value;
    }
    document.querySelectorAll('#range-value').textContent = value;
    gridSize = parseInt(value);

    setPPS(gridSize);

  }

  function rangeSliderValue(value) {
    let gridLabels = document.querySelectorAll('#range-value');
    for (let i = 0; i < gridLabels.length; i++) {
      gridLabels[i].textContent = value;
    }
  }





function setPPS(amt) {
    // let pps = document.getElementById("pps").value;
    let pps = amt
    if(pps > 64) {
        return alert("Pixels per side cant exceed 64")
    }

    let gridItems = document.getElementsByClassName('grid-item');

    while(gridItems[0]) {
        gridItems[0].parentNode.removeChild(gridItems[0]);
    }

    genGrid(pps,pps);
}