//getting the dots
const themeDots = document.querySelectorAll('.theme-dot');

// getting the style sheet 
const styleSheet = document.getElementById('theme-style');

// getting the current theme from local storage:
const currentTheme = localStorage.getItem('theme')
if (currentTheme === null) {
    setTheme('light-mode');
}
else {
    setTheme(currentTheme);
}

themeDots.forEach(item =>{
    item.addEventListener('click', () => {
        let theme = item.id;
        setTheme(theme);
    })
})

function setTheme(theme) {
    if (theme === 'blue-mode'){
        styleSheet.setAttribute('href', './css/blue.css');
    }
    else if (theme === 'green-mode') {
        styleSheet.setAttribute('href', './css/green.css');
    }
    else if (theme === 'purple-mode') {
        styleSheet.setAttribute('href', './css/purple.css');
    }
    else if (theme === 'light-mode') {
        styleSheet.setAttribute('href', '');
    }

    localStorage.setItem('theme', theme);
}