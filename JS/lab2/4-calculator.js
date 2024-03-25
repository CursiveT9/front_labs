function calculator(a, operator, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return 'Деление на ноль невозможно!';
            }
            return a / b;
        default:
            return 'Ошибочный оператор!';
    }
}
console.log(calculator(5, '+', 10));
console.log(calculator(25.5, '-', 3));
console.log(calculator(5, '*', 3));
console.log(calculator(21, '/', 3));