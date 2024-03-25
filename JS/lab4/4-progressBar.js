function progressBar(percent) {
    let bar = '';
    if (percent === 100) {
        console.log('Complete!');
    }
    for (let i = 0; i < 100; i+=10) {
        if (i < percent) {
            bar += '%';
        } else {
            bar += '.';
        }
    }
    console.log(`${percent}% [${bar}]`);
    if (percent !== 100) {
        console.log('Still loading...');
    }
}
progressBar(30)
progressBar(50)
progressBar(100)