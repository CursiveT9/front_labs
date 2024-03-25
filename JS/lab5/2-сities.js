function cities(rows) {
    rows.forEach(row => {
        let values = row.split('|').map(value => value.trim());
        let cityObj = {
            town: values[0],
            latitude: parseFloat(values[1]).toFixed(2),
            longitude: parseFloat(values[2]).toFixed(2)
        };
        console.log(cityObj);
    });
}
cities([
    'Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
]);