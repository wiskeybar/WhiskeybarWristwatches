const menuOpener = document.querySelector('.top_minified__opener')
const expandedMenu = document.querySelector('.top_expanded');
const mainNav = document.querySelector('.top_nav')
const minifiedMenu = document.querySelector('.top_minified');
const menuElements = Array.from(document.querySelectorAll('.top_minified__item'))
const searchButtons = Array.from(document.querySelectorAll('.searchItems'))
const searchFields = Array.from(document.querySelectorAll('.searchField'))

const openerClose = () => {
    minifiedMenu.classList.remove('top_maximized');
    menuOpener.innerHTML = "<i class='fas fa-bars'>";
    menuOpener.style.color = "black";

}
const searchInputClose = (i) => {
    searchFields[i].classList.remove('searchFieldActive')
}

menuOpener.addEventListener('click', () => {
    if (!(minifiedMenu.classList.contains('top_maximized'))) {
        minifiedMenu.classList.add('top_maximized');
        menuOpener.innerHTML = "<i class='fas fa-times'>";
        menuOpener.style.color = "white";
    }
    else {
        openerClose()
    }
}
)

window.addEventListener('scroll', () => {
    if (pageYOffset >= 150) {
        expandedMenu.classList.add('top_fixed');
        mainNav.style.marginTop = `${expandedMenu.offsetHeight}px`;
    }
    else {
        expandedMenu.classList.remove('top_fixed');
        mainNav.style.marginTop = 0;
    }
})

window.addEventListener('click', (e) => {
    if (e.clientY > minifiedMenu.offsetHeight) {
        openerClose()
    }


})

searchButtons[0].addEventListener('click', () => {
    if (!(searchFields[0].classList.contains('searchFieldActive'))) {
        searchFields[0].classList.add('searchFieldActive')
    }
    else {
        searchInputClose(0)
    }
})

searchButtons[1].addEventListener('click', () => {
    if (!(searchFields[1].classList.contains('searchFieldActive'))) {
        searchFields[1].classList.add('searchFieldActive')
        searchButtons[1].innerHTML = "  <i class='fas fa-search'></i> Close Search"
    }
    else {
        searchInputClose(1)
        searchButtons[1].innerHTML = "  <i class='fas fa-search'></i> Search for items"

    }
})