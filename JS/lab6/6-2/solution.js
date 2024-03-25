function solve() {
    const text = document.getElementById('text').value;
    const namingConvention = document.getElementById('naming-convention').value.toLowerCase();
    const words = text.split(' ');
    let result;
    switch (namingConvention) {
        case 'pascal case':
            result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
            break;
        case 'camel case':
            result = words.map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
            break;
        default:
            result = 'Ошибка!';
    }
    document.getElementById('result').textContent = result;
}
