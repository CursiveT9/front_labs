function attachEventsListeners() {
    const convertButtons = document.querySelectorAll('input[id$="Btn"]');
    convertButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const inputId = button.id.replace('Btn', '');
            convertTime(inputId);
        });
    });
}

function convertTime(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = Number(inputField.value);
    let seconds = 0;
    switch (inputId) {
        case 'days':
            seconds = inputValue * 86400;
            break;
        case 'hours':
            seconds = inputValue * 3600;
            break;
        case 'minutes':
            seconds = inputValue * 60;
            break;
        case 'seconds':
            seconds = inputValue;
            break;
    }
    const days = seconds / 86400;
    const hours = seconds / 3600;
    const minutes = seconds / 60;
    document.getElementById('days').value = days;
    document.getElementById('hours').value = hours;
    document.getElementById('minutes').value = minutes;
    document.getElementById('seconds').value = seconds;
}