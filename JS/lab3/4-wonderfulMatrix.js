function isWonderfulMatrix(matrix) {
    let isWonderful = true;
    for (let i = 0; i < matrix.length; i++) {
        let sumRow = matrix[i].reduce((a, b) => a + b, 0);
        let sumCol = matrix.map(x => x[i]).reduce((a, b) => a + b, 0);
        if (sumRow !== sumCol) {
            isWonderful = false;
            break;
        }
    }
    return isWonderful;
}
console.log(isWonderfulMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));
console.log(isWonderfulMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));
console.log(isWonderfulMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));