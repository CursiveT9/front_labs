function search() {
    const searchText = document.getElementById('searchText').value.toLowerCase();
    const cities = document.querySelectorAll('#towns li');
    let matches = 0;
    cities.forEach(function(city) {
        let cityText = city.textContent.toLowerCase();
        if (cityText.includes(searchText)) {
            city.style.fontWeight = 'bold';
            city.style.textDecoration = 'underline';
            matches++;
        } else {
            city.style.fontWeight = 'normal';
            city.style.textDecoration = 'none';
        }
    });
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = matches + ' matches found';
}
