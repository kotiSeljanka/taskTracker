const progressBarElem = document.getElementById("sliderFront");
const containerTaskElem = document.getElementById("containerTask");
const containerSvg = document.getElementById("mySvg");

// List of tasks to bring to the page. Ideally is replaced by a database. 
let myTasks = [
    {"index": 0, "task":"Do the dishes", "done": false},
    {"index": 1, "task":"Clean your room", "done": false},
    {"index": 2, "task":"Have a coffee", "done": false},
    {"index": 3, "task":"Greet neighbours", "done": false},
    {"index": 4, "task":"Fix chair", "done": false},
    {"index": 5, "task":"Improve living standards", "done": false}
]

// Adding tasks to the documents page.
myTasks.forEach( function(elem) {
    // Container for .innerButton and .taskTile.
    const newChild = document.createElement("div");
    newChild.classList.toggle("containerText");

    // Button to toggle "done" property of a task. Currently not working, but is still brought to the page.
    const innerButton = document.createElement("div");
    innerButton.classList.toggle("innerButton");
    newChild.appendChild(innerButton);

    // Container for the text of the task. Comes with everything needed to interact with.
    const taskTileElem = document.createElement("div");
    taskTileElem.classList.toggle("taskTile");
    taskTileElem.setAttribute("onclick", "addStroke(this)");
    taskTileElem.setAttribute("taskindex", `${elem["index"]}`);
    taskTileElem.innerText = '' + elem["task"];
    newChild.appendChild(taskTileElem);

    containerTaskElem.appendChild(newChild);
})


/**
 * HTML-node calls this function to add or remove line-trough on its text. Also toggles "done" property of a task
 * and sets the progressbars width.
 * 
 * @param {Object} elem HTML-node, supposedly .taskTile.
 */
function addStroke(elem) {
    elem.classList.toggle("lineTrough");
    const elementIndex = elem.getAttribute('taskindex');
    if (myTasks[elementIndex]["done"] === true) {
        myTasks[elementIndex]["done"] = false;
    } else {
        myTasks[elementIndex]["done"] = true;
    }
    const progressNow = calculateProgress();
    progressBarElem.style.width = `${progressNow}%`;
    (progressNow === 100) ? (containerSvg.style.opacity = 1) : (containerSvg.style.opacity = 0);
}

/**
 * Calculates the progress percentage for the progressbar based on quantity of tasks done
 * 
 * @returns Number in range 0-100
 */
function calculateProgress() {
    let totalTrue = 0;
    myTasks.forEach( (elem) => { (elem["done"] === true) ? totalTrue++ : 0 });
    return Math.ceil((totalTrue / myTasks.length) * 100);
}