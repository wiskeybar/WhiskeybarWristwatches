const menuOpener = document.querySelector('.top_minified__opener')
const expandedMenu = document.querySelector('.top_expanded');
const mainNav = document.querySelector('.top_nav')
menuOpener.addEventListener('click', (e) => {
    const minifiedMenu = document.querySelector('.top_minified');
    if (!(minifiedMenu.classList.contains('top_maximized'))) {
        minifiedMenu.classList.add('top_maximized')
        menuOpener.innerHTML = "<i class='fas fa-times'>"

    }
    else {
        minifiedMenu.classList.remove('top_maximized')
        menuOpener.innerHTML = "<i class='fas fa-bars'>"

    }
}
)

window.addEventListener('scroll', () => {
    console.log(expandedMenu.offsetHeight, expandedMenu.offsetWidth);


    if (pageYOffset >= 150) {
        expandedMenu.classList.add('top_fixed')
        mainNav.style.marginTop = `${expandedMenu.offsetHeight}px`

    }
    else {
        expandedMenu.classList.remove('top_fixed')
        mainNav.style.marginTop = 0

    }
})