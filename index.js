const progressBarElem = document.getElementById("sliderFront");
const containerTaskElem = document.getElementById("containerTask");

function toZero() {
    progressBarElem.style.width = "0%";
}

function toHundred() {
    progressBarElem.style.width = "100%";
}

function toSixty() {
    progressBarElem.style.width = "60%";
}

function addStroke(elem) {
    elem.style.textDecoration = "line-through";
}

const myTasks = [
    "Do the dishes",
    "Clean your room",
    "Have a coffee",
    "Greet neighbours",
    "Fix chair",
    "Improve living standards"
]

myTasks.forEach( function(elem) {
    const newChild = document.createElement("div");
    newChild.classList.toggle("containerText");

    const innerButton = document.createElement("div");
    innerButton.classList.toggle("innerButton");
    newChild.appendChild(innerButton);

    const taskTileElem = document.createElement("div");
    taskTileElem.classList.toggle("taskTile");
    taskTileElem.setAttribute("onclick", "addStroke(this)");
    taskTileElem.innerText = '' + elem;
    newChild.appendChild(taskTileElem);

    containerTaskElem.appendChild(newChild);
})
