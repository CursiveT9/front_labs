function toggle() {
    let extraContent = document.getElementById('extra');
    let button = document.querySelector('.button');
    if (extraContent.style.display === 'block') {
        extraContent.style.display = 'none';
        button.textContent = 'More';
    } else {
        extraContent.style.display = 'block';
        button.textContent = 'Less';
    }
}
