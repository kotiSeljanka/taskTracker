const progressBarElem = document.getElementById("sliderFront");
const containerTaskElem = document.getElementById("containerTask");

let myTasks = [
    {"index": 0, "task":"Do the dishes", "done": false},
    {"index": 1, "task":"Clean your room", "done": false},
    {"index": 2, "task":"Have a coffee", "done": false},
    {"index": 3, "task":"Greet neighbours", "done": false},
    {"index": 4, "task":"Fix chair", "done": false},
    {"index": 5, "task":"Improve living standards", "done": false}
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
    taskTileElem.setAttribute("taskindex", `${elem["index"]}`);
    taskTileElem.innerText = '' + elem["task"];
    newChild.appendChild(taskTileElem);

    containerTaskElem.appendChild(newChild);
})

function addStroke(elem) {
    elem.classList.toggle("lineTrough");
    const elementIndex = elem.getAttribute('taskindex');
    if (myTasks[elementIndex]["done"] === true) {
        myTasks[elementIndex]["done"] = false;
    } else {
        myTasks[elementIndex]["done"] = true;
    }
    progressBarElem.style.width = `${calculateProgress()}%`
}

function calculateProgress() {
    let totalTrue = 0;
    myTasks.forEach( function(elem) {
        if (elem["done"] === true) {
            totalTrue++;
        }
    });
    return Math.ceil((totalTrue / myTasks.length) * 100);
}