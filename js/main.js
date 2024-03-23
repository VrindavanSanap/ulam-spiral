let grid;
let cols;
let rows;
let resolution = 4;
function setup() {
    createCanvas(600, 600);
    frameRate(10);
    cols = width / resolution;
    rows = height / resolution;
    grid = new Grid(rows, cols);
}

function draw() {
    background(255);
    grid.display(resolution)
}

function windowResized() {
    // resizeCanvas(windowWidth, windowHeight);
}
