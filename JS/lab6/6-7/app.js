function lockedProfile() {
    document.querySelectorAll('.profile button').forEach(button => {
        button.addEventListener('click', () => {
            const profileDiv = button.closest('.profile');
            const hiddenFields = profileDiv.querySelector('div[id^="user"]');
            const isLocked = profileDiv.querySelector('input[name^="user"]:checked').value === 'lock';

            if (!isLocked) {
                hiddenFields.style.display = hiddenFields.style.display === 'none' ? 'block' : 'none';
                button.textContent = hiddenFields.style.display === 'none' ? 'Show more' : 'Hide it';
            }
        });
    });
}
