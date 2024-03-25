function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(1984) ? "yes" : "no");
console.log(isLeapYear(2003) ? "yes" : "no");
console.log(isLeapYear(4) ? "yes" : "no");
