let grid = document.querySelector(".grid-div");
let grids = document.querySelector(".grids")
let body = document.querySelector("body")
let colour = "#000000";

body.addEventListener("mouseup", () => {
    isPressed=false;
})

let rgb = false
let eraser = false;
let gridBorder;

firstLoad()


//generates the grid on website load at a default of 16x16
function firstLoad(){
    let gridLabels = document.querySelectorAll('#range-value');
    for (let i = 0; i < gridLabels.length; i++) {
      gridLabels[i].textContent = 16;
    }

    genGrid(16,16);
}

let isPressed = false;


//generates the grid based on the given dimensions adds a listener on the elements for a click/click drag
function genGrid(columns, rows){
    gridBorder = true
    grid.style.display = "grid";
    grid.style.setProperty("grid-template-columns", `repeat(${columns},1fr)`);
    grid.style.setProperty('grid-template-rows', `repeat(${rows},1fr)`);

    for(i = 0; i< columns*rows; i++){
        let div = document.createElement("div");
        div.classList.add("grid-item")
        div.classList.add("grid-border")
        div.setAttribute("draggable", "false")
        div.addEventListener("mousedown", () => {
            isPressed=true;
            div.setAttribute("style", `background-color:${colour};`)
        })
        div.addEventListener("mouseup", () => {
            isPressed=false;
        })
        div.addEventListener("mouseover", () => {
            if(isPressed===true){
                div.setAttribute("style", `background-color:${colour};`)
            }
        })
        grid.appendChild(div);
    }
}

//changes the colour of drawn elements to simulate erasing
function toggleEraser(){
    let eraserButton = document.getElementById('eraserBtn')
    if(eraser == false){
        colour = "#ffffff";
        eraserButton.setAttribute("class", "btn pressed");
        return eraser = true
    }
    if(eraser == true ) {
        colour = "#000000";
        eraserButton.setAttribute("class", "btn");
        return eraser = false
    }
}


//enables or disables the grid by drawing a border on the bottom and right of each pixel(avoids buly center lines)
function toggleGrid(){
    let gridItems = document.getElementsByClassName('grid-item')

    if(gridBorder == true) {
        for(var i = 0; i < gridItems.length; i++){
            gridItems[i].setAttribute('class', 'grid-item'); 
        }
        return gridBorder = false;
    }

    if(gridBorder == false ){
        for(var i = 0; i < gridItems.length; i++){
            gridItems[i].setAttribute('class', 'grid-item grid-border'); 
        }
        return gridBorder =true
    }

}

//removes any drawn pixels on the canvas
function clearGrid(){
    let gridItems = document.getElementsByClassName('grid-item')

    for(var i = 0; i < gridItems.length; i++){
        gridItems[i].removeAttribute("style"); 
    }
}


//updates grid size based on selected slider value
function rangeSlider(value) {
let gridLabels = document.querySelectorAll('#range-value');
for (let i = 0; i < gridLabels.length; i++) {
    gridLabels[i].textContent = value;
}
document.querySelectorAll('#range-value').textContent = value;
gridSize = parseInt(value);

setPPS(gridSize);
}

//updates the displayed value below the slider
function rangeSliderValue(value) {
let gridLabels = document.querySelectorAll('#range-value');
for (let i = 0; i < gridLabels.length; i++) {
    gridLabels[i].textContent = value;
}
}




//sets the amount of pixels per side of grid
function setPPS(amt) {
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


//colour picker utility
let colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener('change', (e) => {
    colour = e.target.value;
});


//rgb pen logic
function toggleRGB(){
    let rgbButton = document.getElementById('rgbBtn')
    // if(rgb == false){
        // rgbButton.setAttribute("class", "btn pressed");
        let randomColour = Math.floor(Math.random()*16777215).toString(16)
        if(randomColour === 000000) randomColour = 123456;

        colour = `#${randomColour}`
        
        console.log(colour)
    //     return rgb = true
    // }
    // if(rgb == true ) {
    //     colour = "#000000"
    //     rgbButton.setAttribute("class", "btn");
    //     return rgb = false
    // }
}
//toggle feature temporarily disabled as is nto needed with current implementation
//pottentially needed for rainbow pen mode 
