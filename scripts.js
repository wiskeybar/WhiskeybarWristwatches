const menuOpener = document.querySelector('.top_minified__opener')

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