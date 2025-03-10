const element = document.getElementById("container");
let startingInt = 16;
height = element.clientHeight / startingInt;

function init(num, height) {
    for (let i = 0; i < num; i++) {
        const el = document.createElement("div");
        el.style.display = "flex";
        for (let j = 0; j < num; j++) {
            const div = document.createElement("div");
            div.style.height = height + "px";
            div.style.border = "2px solid black";
            div.style.flexGrow = "1";
            div.classList.add("grid");
            el.appendChild(div);
        }
        element.appendChild(el);
    }
}


element.addEventListener("mouseover",(e) => {
    const element = e.target;
    if (element.classList.contains("grid")) {
        element.style.background = "blue";
    }
});

init(startingInt, height);

const setGridSize = document.getElementById("gridSize");

setGridSize.addEventListener('click', gridSize);


function gridSize() {
    let userInput = prompt("Enter grid size up to 100 tiles: ");
    
    if (userInput > 100) {
        alert("Grid size cant be bigger than 100!!")
    } else {
        startingInt = userInput;
        element.replaceChildren();
        height = element.clientHeight / startingInt;
        init(startingInt, height);
    }
}