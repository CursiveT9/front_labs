function operations(array) {
    let oldSum = 0;
    let newSum = 0;
    for (let i = 0; i < array.length; i++) {
        oldSum += array[i];
        if (array[i] % 2 === 0) {
            array[i] = array[i] + i;
        } else {
            array[i] = array[i] - i;
        }
        newSum += array[i];
    }
    console.log("[" + array+ "]" + "\n" + oldSum+ "\n" + newSum);
}
operations([5, 15, 23, 56, 35]);
operations([-5, 11, 3, 0, 2]);