// THEME JS
const THEME_TOGGLE_BTN = document.getElementById('theme-toggle');
THEME_TOGGLE_BTN.addEventListener('change', (e)=> {
    if(e.target.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }else{
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});

// Set theme from local storage
let setActiveTheme = ()=> {
    const THEME = localStorage.getItem('theme');

    if(THEME === 'dark') {
        document.body.classList.add('dark');
        THEME_TOGGLE_BTN.checked = true;
    }else{
        document.body.classList.remove('dark');
        THEME_TOGGLE_BTN.checked = false;
    }
}

setActiveTheme();



// SMOOTH SCROLLING JS
const links = document.querySelectorAll(".site-navigation a");
 
for (let link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}