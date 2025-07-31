(function () {
    const themeSelect = document.getElementById('theme-select');
    const root = document.documentElement;

    const storedTheme = localStorage.getItem('theme');

    const applyTheme = (theme) => {
        if (!theme || theme === 'default') {
            root.removeAttribute('data-theme');
        } else {
            root.setAttribute('data-theme', theme);
        }
    };

    if (storedTheme) {
        applyTheme(storedTheme);
    }

    if (themeSelect) {
        themeSelect.value = storedTheme || 'default';
        themeSelect.addEventListener('change', () => {
            const selected = themeSelect.value;
            applyTheme(selected);
            localStorage.setItem('theme', selected);
        });
    }
})();
