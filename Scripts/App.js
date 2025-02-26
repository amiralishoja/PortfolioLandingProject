const $ = document
const loadingElem = $.querySelector(".loading")
const menuContainer = $.querySelector(".navbar__menu")
const skillsContainer = $.getElementById("rowSkills")
const landingContainer = $.getElementById("rowLanding")
const menuList = [
    { id: 1, name: "About Me", href: "#home", class: "menu__icon fa-solid fa-bomb" },
    { id: 2, name: "Skills", href: "#skills", class: "menu__icon fa-solid fa-code" },
    { id: 3, name: "Landing", href: "#landing", class: "menu__icon fa-solid fa-layer-group" },
    { id: 4, name: "Contact", href: "#contact", class: "menu__icon fa-solid fa-phone-volume" }
]
const skillsList = [
    { id: 1, src: "Picture/Skills/Html.svg" },
    { id: 2, src: "Picture/Skills/Css.svg" },
    { id: 3, src: "Picture/Skills/Sass.svg" },
    { id: 2, src: "Picture/Skills/JavaScript.svg" }
]
const landingList = [
    { id: 1, name: "Rsdetailing landing", src: "Picture/Landing/1.PNG", href: "https://rsdetailing.wuaze.com" },
    { id: 2, name: "Hostinger landing", src: "Picture/Landing/2.PNG", href: "https://hostinger.wuaze.com" },
    { id: 3, name: "Motel landing", src: "Picture/Landing/3.PNG", href: "https://motel.wuaze.com" }
]
const coverElem = $.querySelector(".cover")
const scrollElem = $.querySelector(".scroll")
const menuMobileBtn = $.querySelector(".navbar__mobileBtn")
const menuMobileBtnIcon = $.querySelector(".navbar__mobileBtn__icon")
const btnAboutElems = $.querySelectorAll(".about .btn")
const phoneElem = $.querySelectorAll(".footer__call")
let btnMenuFlag = true

// if (location.protocol == "http:") {
//     location.protocol = "https:"
// }

window.addEventListener("load", function () {
    loadingElem.classList.add("dis-none")
})

window.addEventListener("scroll", function () {
    const fullScrollHeight = $.body.offsetHeight - window.innerHeight
    const scrollNow = window.scrollY
    let percentScroll = (scrollNow / fullScrollHeight * 100).toFixed(0)
    if (percentScroll === Infinity) {
        percentScroll = 0
    }
    scrollElem.style.width = percentScroll + "%"
})

window.addEventListener("resize", function () {
    if (window.innerWidth > 767) {
        if (menuMobileBtnIcon.className == "navbar__mobileBtn__icon fa-solid fa-xmark") {
            hideMenu()
        }
    }
})

menuList.forEach(function (menuItem) {
    menuContainer.insertAdjacentHTML("beforeend", '<li class="menu__item"><a href="' + menuItem.href + '" class="menu__link">' + menuItem.name + '</a><i class="' + menuItem.class + '"></i></li>')
})
skillsList.forEach(function (skill) {
    skillsContainer.insertAdjacentHTML("beforeend", '<div class="col-6 col-sm-3 flex-center"><div class="skills__item"><img src="' + skill.src + '" alt="Html" class="skills__picture"></div></div>')
})
landingList.forEach(function (landing) {
    landingContainer.insertAdjacentHTML("beforeend", '<div class="col-12 col-sm-6 col-lg-4"><div class="landing__item"><img src="' + landing.src + '" alt="' + landing.name + '" class="landing__img"><div class="landing__content"><h4 class="landing__content__title">' + landing.name + '</h4><div class="btn btn--show-landing"><i class="btn__icon fas fa-arrow-circle-right"></i><a href="' + landing.href + '" class="btn__title">Online Preview</a></div></div></div></div>')
})
const btnLandingElems = $.querySelectorAll(".landing .btn")

const menuItems = $.querySelectorAll(".menu__item")
menuItems[0].classList.add("menu__item--active")
menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
        $.querySelector(".menu__item--active").classList.remove("menu__item--active")
        item.classList.add("menu__item--active")
        if (window.innerWidth < 767) {
            hideMenu()
        }
    })
})

menuMobileBtn.addEventListener("click", function () {
    menuContainer.classList.toggle("dis-flex")
    coverElem.classList.toggle("dis-flex")
    if (btnMenuFlag) {
        menuMobileBtnIcon.className = "navbar__mobileBtn__icon fa-solid fa-xmark"
        btnMenuFlag = false
    }
    else {
        menuMobileBtnIcon.className = "navbar__mobileBtn__icon fa-solid fa-bars"
        btnMenuFlag = true
    }
})

function hideMenu() {
    menuContainer.classList.toggle("dis-flex")
    coverElem.classList.toggle("dis-flex")
    menuMobileBtnIcon.className = "navbar__mobileBtn__icon fa-solid fa-bars"
    btnMenuFlag = true
}

function linkGenerator(arr, history = false) {
    arr.forEach(function (btn) {
        btn.addEventListener("click", function () {
            for (let count = 0; count < btn.childElementCount; count++) {
                if (btn.children[count].localName == "a") {
                    if (history) {
                        location.assign(btn.children[count].href)
                    }
                    else {
                        location.replace(btn.children[count].href)
                    }
                }
            }
        })
    })
}

linkGenerator(menuItems)
linkGenerator(btnAboutElems)
linkGenerator(phoneElem)
linkGenerator(btnLandingElems, true)