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
const links = document.querySelectorAll(".site-navigation a, .mob-navigation a");
 
for (let link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop - 40,
        behavior: "smooth"
    });

    closeMobMenu();
}


// SLIDERS
document.addEventListener('DOMContentLoaded' , ()=>{
    let projectsSlider = new Swiper(".projects-slider", {
        grabCursor: true,
        slidesPerView: 1.2,
        spaceBetween: 15,
        breakpoints: {
            480: {
                slidesPerView: 2.2,
            },
            767: {
                slidesPerView: 3.2,
            },
            1024: {
                slidesPerView: 4.2,
                spaceBetween: 20,
            },
        }
      });
});


// MOBILE MENU
const MOB_MENU_TOGGLE_BTN = document.querySelector('.mob-menu-toggle');
const MOB_NAVIGATION = document.querySelector('.mob-navigation');

let isMobMenuOpen = false; // store mob menu state

// Open mob menu on burger button click
MOB_MENU_TOGGLE_BTN.addEventListener('click' , e=> {
    if(!isMobMenuOpen) {
        MOB_MENU_TOGGLE_BTN.classList.add('open');
        MOB_NAVIGATION.classList.add('open');
        isMobMenuOpen = true;
    }else{
        closeMobMenu();
    }
});

// Function to close mob menu
function closeMobMenu() {
    if(isMobMenuOpen) {
        MOB_MENU_TOGGLE_BTN.classList.remove('open');
        MOB_NAVIGATION.classList.remove('open');
    }
    isMobMenuOpen = false;
}


// Listen for all clicks on the document
document.addEventListener('click', function(e) {

	// close mob navigation when clicking outside
	if (!e.target.closest('.mob-menu-toggle') && !e.target.closest('.mob-navigation')) {
        closeMobMenu();
	}

}, false);