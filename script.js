const element = document.getElementById("container");
function init() {
    for (let i = 0; i < 16; i++) {
        const el = document.createElement("div");
        el.style.display = "flex";
        for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.background = "lightgray";
            div.style.border = "2px solid black";
            el.appendChild(div);
        }
        element.appendChild(el);
    }
}

init();