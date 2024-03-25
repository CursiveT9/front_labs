function arrayRotation(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.push(arr.shift());
    }
    return arr.join(' ');
}
console.log(arrayRotation([51, 47, 32, 61, 21], 2));
console.log(arrayRotation([32, 21, 61, 1], 4));
console.log(arrayRotation([2, 4, 15, 31], 5));