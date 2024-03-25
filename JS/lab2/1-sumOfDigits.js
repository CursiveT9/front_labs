function sumOfDigits(number) {
    let numberString = number.toString();
    let sum = 0;
    for (let char of numberString) {
        sum += parseInt(char);
    }
    return sum;
}
console.log(sumOfDigits(245678));
console.log(sumOfDigits(97561));
console.log(sumOfDigits(543));