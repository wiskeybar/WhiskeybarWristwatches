const menuOpener = document.querySelector('.top_minified__opener')
const expandedMenu = document.querySelector('.top_expanded');
const mainNav = document.querySelector('.top_nav')
const minifiedMenu = document.querySelector('.top_minified');
const menuElements = Array.from(document.querySelectorAll('.top_minified__item'))
const searchButtons = Array.from(document.querySelectorAll('.searchItems'))
const searchFields = Array.from(document.querySelectorAll('.searchField'))
const newItemsParagraphTwo = document.querySelector('.newItems_paragraphTwo');
const trendingItemsContainer = document.querySelector('.trendingItems_container');
const trendingItemsGalleryBtn = document.querySelector('.trendingItems_showGallery');
const convertMoneyBtnsTop = Array.from(document.querySelectorAll('.convertMoneyBtnTop'))
const convertMoneyBtnMin = Array.from(document.querySelectorAll('.convertMoneyBtnMin'))
const convertMoneyBtnTxt = document.querySelector('.convertMoneyBtnTxt');
const emailInput = document.querySelector('.emailInput');
const inputSelect = document.querySelector('.inputSelect');
const formInput = document.querySelector('.formInput');
const submitFormBtn = document.querySelector('.submitFormBtn');
const inputRadioLabel = document.querySelector('.inputRadioLabel');
const modalContainer = document.querySelector('.modal_container');
const modal = document.createElement('img')

const galleryItems = Array.from(document.querySelectorAll('.watchGallery_galleryItem'))




const menuOpenerClose = () => {
    minifiedMenu.classList.remove('top_maximized');
    menuOpener.innerHTML = "<i class='fas fa-bars'>";
    menuOpener.style.color = "black";
    menuOpener.style.left = "1%";


}
const searchInputClose = (i) => {
    searchFields[i].classList.remove('searchFieldActive')
}


convertMoneyBtnsTop.forEach(convertBtn => {
    convertBtn.addEventListener('click', (e) => {
        if (convertMoneyBtnsTop.filter(btn => btn.classList.contains('visible')).length == convertMoneyBtnsTop.length) {
            convertMoneyBtnsTop.forEach(btn => btn.classList.remove('visible'));
            convertMoneyBtnsTop.forEach(btn => btn.classList.add('invisible'));
            convertMoneyBtnsTop[e.target.dataset.btnkey].classList.add('visible');

            convertMoneyBtnMin.forEach(btnMin => btnMin.style.color = 'white');
            convertMoneyBtnMin[e.target.dataset.btnkey].style.color = 'orangered';
        }
        else if (!(convertMoneyBtnsTop.filter(btn => btn.classList.contains('visible')).length == convertMoneyBtnsTop.length)) {
            convertMoneyBtnsTop.forEach(btn => btn.classList.remove('invisible'));
            convertMoneyBtnsTop.forEach(btn => btn.classList.add('visible'));
        }

    })
})
convertMoneyBtnMin.forEach(convertBtn => {
    convertBtn.addEventListener('click', (e) => {
        convertMoneyBtnMin.forEach(btnMin => btnMin.style.color = 'white');
        e.target.style.color = "orangered";
        convertMoneyBtnsTop.forEach(btn => btn.classList.remove('visible'));
        convertMoneyBtnsTop.forEach(btn => btn.classList.add('invisible'));
        convertMoneyBtnsTop[e.target.dataset.btnkey].classList.add('visible');
    })


})


convertMoneyBtnTxt.addEventListener('click', () => {
    convertMoneyBtnMin.forEach(btn => btn.style.boxShadow = "0px 0px 2px inset orangered")
    const shadowRemove = () => { convertMoneyBtnMin.forEach(btn => btn.style.boxShadow = "none") }
    setTimeout(shadowRemove, 1000)
})

menuOpener.addEventListener('click', () => {
    if (!(minifiedMenu.classList.contains('top_maximized'))) {
        minifiedMenu.classList.add('top_maximized');
        menuOpener.innerHTML = "<i class='fas fa-times'>";
        menuOpener.style.color = "white";
        menuOpener.style.left = "95%";
    }
    else {
        menuOpenerClose()
    }
}
)

window.addEventListener('scroll', () => {

    if (pageYOffset >= 150) {
        expandedMenu.classList.add('top_fixed');
    }
    if (pageYOffset >= (newItemsParagraphTwo.getBoundingClientRect().height * 0.85)) {

        newItemsParagraphTwo.classList.add('newItems_paragraphTwo_animated');
    }

    else {
        expandedMenu.classList.remove('top_fixed');
        mainNav.style.marginTop = 0;
    }
})

window.addEventListener('click', (e) => {
    if (e.clientY > minifiedMenu.offsetHeight) {
        menuOpenerClose()
    }


})

searchButtons[0].addEventListener('click', (e) => {
    const searchButtonIndex = searchButtons.indexOf(e.target)

    if (!(searchFields[searchButtonIndex].classList.contains('searchFieldActive'))) {
        searchFields[searchButtonIndex].classList.add('searchFieldActive')
    }
    else {
        searchInputClose(searchButtonIndex)
    }
})

searchButtons[1].addEventListener('click', (e) => {
    const searchButtonIndex = searchButtons.indexOf(e.target)

    if (!(searchFields[searchButtonIndex].classList.contains('searchFieldActive'))) {
        searchFields[searchButtonIndex].classList.add('searchFieldActive')
        searchButtons[searchButtonIndex].innerHTML = "  <i class='fas fa-search'></i> Close Search"
    }
    else {
        searchInputClose(searchButtonIndex)
        searchButtons[searchButtonIndex].innerHTML = "  <i class='fas fa-search'></i> Search for items"

    }
})

trendingItemsGalleryBtn.addEventListener('click', () => {
    if (!(trendingItemsContainer.classList.contains('trendingItems_container_active'))) {
        trendingItemsContainer.classList.add('trendingItems_container_active');
        window.scrollTo(0, (trendingItemsContainer.offsetTop * 0.95))
        trendingItemsGalleryBtn.textContent = "close"
    }
    else if (trendingItemsContainer.classList.contains('trendingItems_container_active')) {
        console.log('nie ma')
        trendingItemsContainer.classList.remove('trendingItems_container_active')
        trendingItemsGalleryBtn.textContent = "see what's trending"

    }
})


submitFormBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (emailInput.value.length < 5 || !(emailInput.value.includes("@"))) {
        emailInput.style.border = "2px solid orangered";
        const bcgremove = () => { emailInput.style.border = "1px solid gray"; };
        setTimeout(bcgremove, 1000);
        return
    }
    else if (!(inputSelect.value)) {

        inputSelect.style.color = "orangered";
        const bcgremove = () => { inputSelect.style.color = "black"; };
        setTimeout(bcgremove, 1000);
        return
    }
    else if (formInput.value.length < 20) {
        formInput.style.border = "2px solid orangered";
        const bcgremove = () => { formInput.style.border = "1px solid gray"; };
        setTimeout(bcgremove, 1000);
        return
    }

    else {
        alert("No backend on the site, sorry. It ain't much, but it's honest work :)")
    }

})





galleryItems.forEach(item => item.addEventListener('click', (e) => {

    let src = e.target.src
    let newSrc = src.replace(/720/gi, 1920)

    modal.className = "modalPopup";
    modal.src = newSrc
    modal.style.maxWidth = "80%";
    modal.style.maxHeight = "80%";
    modal.style.margin = "0 auto"

    modalContainer.appendChild(modal);

}))

modalContainer.addEventListener('click', (e) => {
    console.log(e.clientX)
    console.log(e.target.getBoundingClientRect())
    if (e.clientX > (((e.target.getBoundingClientRect().width / 2) + e.target.getBoundingClientRect().x))) {
        console.log('prawa')
    }
    else {
        console.log('lewa');

    }
})