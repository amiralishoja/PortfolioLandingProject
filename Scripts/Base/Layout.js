titleElem.innerHTML = siteName
navbarLogoElem.insertAdjacentHTML("beforeend", `${logoName.split(".")[0]}<span>.${logoName.split(".")[1]}</span>`)
window.addEventListener("load", hideLoadingElem)
window.addEventListener("scroll", scrollBarHandler)
window.addEventListener("resize", function () {
    if (window.innerWidth > 767 && menuMobileBtnIcon.className == "navbar__mobileBtn__icon fa-solid fa-xmark") {
        hideMenu()
    }
})
menuList.forEach(menuItemGenerator)
menuMobileBtn.addEventListener("click", menuItemClickHandler)
if (themeMode) {
    checkThemeMode(themeMode)
}
else {
    if (darkSystemTheme) {
        checkThemeMode("dark")
    }
    else if (lightSystemTheme) {
        checkThemeMode("light")
    }
}
coverElem.addEventListener("click", hideMenu)