const THEME_TOGGLE_BTN = document.getElementById('theme-toggle');




THEME_TOGGLE_BTN.addEventListener('change', (e)=> {
    if(e.target.checked) {
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
    }else{
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    }
});

// Set theme from local storage
let setActiveTheme = ()=> {
    const THEME = localStorage.getItem('theme');

    if(THEME === 'light') {
        document.body.classList.add('light');
        THEME_TOGGLE_BTN.checked = true;
    }else{
        document.body.classList.remove('light');
        THEME_TOGGLE_BTN.checked = false;
    }
}

setActiveTheme();