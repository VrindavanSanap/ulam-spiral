
function make2dArray(rows, cols) {
    return new Array(rows).fill().map(() => new Array(cols).fill(0));
}
function is_prime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function ulam_spiral(n) {
    let grid = make2dArray(n);
    let r = Math.floor(n / 2);
    let c = Math.floor(n / 2);
    let directions = [[0, 1], [-1, 0], [0, -1], [1, 0]];
    let step = 0;
    let counter = 0;
    let increment = 1;
    let limit = n * n + (n % 2 === 0 ? n : 0);

    while (counter < limit) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < increment; k++) {
                grid[r][c] = Number(is_prime(++counter));
                if (counter === limit) {
                    return grid;
                }
                let [dr, dc] = directions[step % 4];
                r += dr;
                c += dc;
            }
            step++;
        }
        increment++;
    }
}


class Grid {
    constructor(rows, cols) {
        this.cols = cols;
        this.rows = rows;
        this.grid = ulam_spiral(rows) 


    }

    display(resolution) {
        fill(0);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let x = j * resolution;
                let y = i * resolution;
                if (this.grid[i][j]) {
                    rect(x, y, resolution, resolution);
                }
            }
        }
    }

}