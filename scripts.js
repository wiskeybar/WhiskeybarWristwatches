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
const modalClose = document.createElement('div');
const wrapper = document.querySelector('.wrapper');
const galleryItems = Array.from(document.querySelectorAll('.watchGallery_galleryItem'));
const seeMoreBtn = Array.from(document.querySelectorAll('.newItems_examplePicContainer__seeMoreBtn'));
const watchGallerySub = Array.from(document.querySelectorAll('.watchGallery_gallerySub'));
const shoppingBag = document.querySelector('.shoppingBag');
const basket = document.querySelector('.basket');
const addNewItemBtns = Array.from(document.querySelectorAll('.newItems_add'));
const modal = document.createElement('img');
const itemsInBasket = []



class Basket {

    addToBasket(path, price, description, quantityValue) {
        const itemMaximized = document.createElement('div');

        const img = document.createElement('div');
        const itemPrice = document.createElement('p')

        const itemDescription = document.createElement('p');
        const quantity = document.createElement('input');
        const remove = document.createElement('p')


        itemMaximized.dataName = description

        itemMaximized.className = "basketItemMaximized";
        img.className = "basketImage";
        itemDescription.className = "basketDescription";
        quantity.className = "basketQuantity";
        quantity.type = "number"
        img.innerHTML = `<img src=${path}>`
        // img.src = path;
        remove.innerHTML = "<i class='fas fa-times'>";
        remove.className = 'basketRemove';
        itemDescription.textContent = description;
        itemPrice.textContent = parseFloat(price);
        itemPrice.className = 'basketPrice';
        itemPrice.dataPrice = parseFloat(price)
        quantity.value = quantityValue;
        quantity.min = "0"
        basket.prepend(itemMaximized)

        itemMaximized.prepend(itemPrice)
        itemMaximized.prepend(remove)
        itemMaximized.prepend(quantity)
        itemMaximized.prepend(img)
        itemMaximized.prepend(itemDescription)

        quantity.addEventListener('change', (e) => {

            itemPrice.textContent = (itemPrice.dataPrice * quantity.value).toFixed(2);

        }

        )
        remove.addEventListener('click', (e) => { e.target.parentNode.remove() })






    }

}

// allow currency change for desktop view
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
// allow currency change for mobile view
convertMoneyBtnMin.forEach(convertBtn => {
    convertBtn.addEventListener('click', (e) => {
        convertMoneyBtnMin.forEach(btnMin => btnMin.style.color = 'white');
        e.target.style.color = "orangered";
        convertMoneyBtnsTop.forEach(btn => btn.classList.remove('visible'));
        convertMoneyBtnsTop.forEach(btn => btn.classList.add('invisible'));
        convertMoneyBtnsTop[e.target.dataset.btnkey].classList.add('visible');
    })


})
// turns suggestion for currency change on/off
convertMoneyBtnTxt.addEventListener('click', () => {
    convertMoneyBtnMin.forEach(btn => btn.style.boxShadow = "0px 0px 2px inset orangered")
    const shadowRemove = () => { convertMoneyBtnMin.forEach(btn => btn.style.boxShadow = "none") }
    setTimeout(shadowRemove, 1000)
})

// adds an animation for one paragraph and controles top menu in dekstop view
window.addEventListener('scroll', () => {

    if (pageYOffset >= 150) {
        expandedMenu.classList.add('top_fixed');
    }
    if (pageYOffset >= (newItemsParagraphTwo.getBoundingClientRect().height * 0.85)) {

        newItemsParagraphTwo.classList.add('newItems_paragraphTwo_animated');
    }
    if (basket.classList.contains('basket_open')) {
        basket.classList.remove('basket_open')
    }

    else if (pageYOffset <= 150) {

        expandedMenu.classList.remove('top_fixed');
        mainNav.style.marginTop = 0;
    }
})
// changes the bars and X for minified view, functions stored in variables
const menuClose = () => {
    minifiedMenu.classList.remove('top_maximized');
    menuOpener.innerHTML = "<i class='fas fa-bars'>";
    menuOpener.style.border = "none";

}
const menuOpen = () => {
    minifiedMenu.classList.add('top_maximized');
    menuOpener.innerHTML = "<i class='fas fa-times'>";
    menuOpener.style.border = "1px solid orangered";
}
menuOpener.addEventListener('click', () => {
    if (!(minifiedMenu.classList.contains('top_maximized'))) {
        menuOpen()
    }
    else {
        menuClose()
    }
})

// in minified view closes the sidebar menu when event is outside of the menubox, see above for function, also closes the basket if clicked outside of it
window.addEventListener('click', (e) => {
    if (e.clientY > minifiedMenu.offsetHeight) {
        menuClose()
    }

    if (e.clientY > (basket.getBoundingClientRect().height + (window.innerHeight * 0.1))) {
        basket.classList.remove('basket_open')
    }
})
// makes sure that when resize happens there is no overflow-scroll on trendingItems section
window.addEventListener('resize', () => {
    if (window.innerWidth > 735) {
        trendingItemsContainer.classList.remove('trendingItems_container_active')
        trendingItemsGalleryBtn.textContent = "see what's trending"

    }
})

// operates the searchboxes
const searchInputClose = (i) => {
    searchFields[i].classList.remove('searchFieldActive')
}
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
// in mobile view allows to hide the trending items container
trendingItemsGalleryBtn.addEventListener('click', () => {
    if (!(trendingItemsContainer.classList.contains('trendingItems_container_active'))) {
        trendingItemsContainer.classList.add('trendingItems_container_active');
        window.scrollTo(0, (trendingItemsContainer.offsetTop * 0.95))
        trendingItemsGalleryBtn.textContent = "close"
    }
    else if (trendingItemsContainer.classList.contains('trendingItems_container_active')) {
        trendingItemsContainer.classList.remove('trendingItems_container_active')
        trendingItemsGalleryBtn.textContent = "see what's trending"
    }
})
// operates hints for input in contact form
submitFormBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (emailInput.value.length < 5 || !(emailInput.value.includes("@"))) {
        emailInput.style.border = "1px solid orangered";
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
        formInput.style.border = "1px solid orangered";
        const bcgremove = () => { formInput.style.border = "1px solid gray"; };
        setTimeout(bcgremove, 1000);
        return
    }

    else {
        alert(`No backend on the site, sorry. 
                        It ain't much, but it's honest work :)`)
    }

})

// these are for opening and closing popup modal gallery
modalContainer.addEventListener('click', (e) => {

    // this gets the number of current, next and previous picture from the src attribute
    let modalnumber = modal.src.lastIndexOf(modal.src.charAt(modal.src.length - 6));
    let newSrcRight = Number(modal.src.charAt(modal.src.length - 6)) + 1;
    let newSrcLeft = Number(modal.src.charAt(modal.src.length - 6)) - 1;
    // these functions allow for navigating inside modals
    const replacer = (indexRemove, newSrc) => {
        modal.src = modal.src.substr(0, indexRemove) + newSrc + modal.src.substr((indexRemove + 1));
    };
    if (e.clientX > (((e.target.getBoundingClientRect().width / 2) + e.target.getBoundingClientRect().x))) {
        if (Number(modal.src.charAt(modal.src.length - 6))
            !== galleryItems.length) {
            replacer(modalnumber, newSrcRight)
        }
    }
    else {
        if (Number(modal.src.charAt(modal.src.length - 6))
            !== 1) {
            replacer(modalnumber, newSrcLeft)
        }

    }

});

modalClose.addEventListener('click', () => {
    modalContainer.removeChild(modal);
    modalContainer.removeChild(modalClose);
    wrapper.classList.remove('blurred')
})

// adding items inside basket. The basket is visable only in fullscreen/desktop mode.
addNewItemBtns.forEach(btn => btn.addEventListener('click', e => {

    // variables for easier navigation inside the function
    const newItem = new Basket;
    const parent = e.target.parentNode;
    const sources = Array.from(parent.childNodes);
    const quantity = 1;
    const imgSrc = sources.filter(source => source.src);
    const price = sources.filter(source => source.title)
    const currentname = parent.dataset['name']
    const basketItems = Array.from(basket.querySelectorAll('.basketItemMaximized'));

    // prevents adding new lines inside basket when item is already in it
    if (itemsInBasket.includes(currentname)) {
        const inBasket = basketItems.filter(item => item.dataName === currentname);
        let inBasketPrice = inBasket[0].childNodes[4].dataPrice;
        let inBasketQuantity = Number(inBasket[0].childNodes[2].value);
        let basketInput = inBasket[0].childNodes[2]
        basketInput.value = inBasketQuantity + 1

        // for instances of first 'add' 
        if (inBasketPrice === Number(inBasket[0].childNodes[4].textContent)) {
            inBasket[0].childNodes[4].textContent = inBasketPrice * 2
        }
        // and all the next
        else {
            inBasketQuantity += 1
            inBasket[0].childNodes[4].textContent = (inBasketQuantity * inBasketPrice).toFixed(2)
        }
    }
    // adds a new item based on variables and Basket class
    else {
        let newSrc = imgSrc[0].src.replace(/720/gi, 320)
        newItem.addToBasket(newSrc, price[0].textContent, currentname, quantity)
        itemsInBasket.push(currentname)
        this.nameOfItem = currentname
    }
    const bagAnimation = () => shoppingBag.classList.remove('shoppingBag_animated');
    shoppingBag.classList.add('shoppingBag_animated');
    setTimeout(bagAnimation, 200);

    basket.querySelector('.basket_titles').innerHTML = `    <h5>Item Name</h5>
    <h5>Minature</h5>
    <h5>Quantity</h5>
    <h5>Remove</h5>
    <h5>Price</h5>`

}))

// opens/closes the basket

shoppingBag.addEventListener('click', () => {
    basket.classList.contains('basket_open') ? basket.classList.remove('basket_open') : basket.classList.add('basket_open');

})

// send the user to a specific spot on the page
seeMoreBtn.forEach(btn => btn.addEventListener('click', () => { window.scrollTo(0, (galleryItems[0].offsetTop * 0.95)) }));

watchGallerySub.forEach(btn => btn.addEventListener('click', () => { window.scrollTo(0, (trendingItemsContainer.offsetTop * 0.95)) }))

// creates a modal popup for gallery
const modalCreator = (e) => {

    let src = e.target.src
    let newSrc = src.replace(/720/g, 1920)

    modal.className = "modalPopup";
    modal.src = newSrc
    modal.style.maxWidth = "80%";
    modal.style.maxHeight = "80%";
    modal.style.margin = "0 auto"
    wrapper.classList.add('blurred')


    modalContainer.appendChild(modal);
    modalClose.className = "modalClose"
    modalClose.innerHTML = "<p> CLOSE GALLERY </p>";
    modalContainer.appendChild(modalClose);

}
galleryItems.forEach(item => item.addEventListener('click', e => { modalCreator(e) }))

