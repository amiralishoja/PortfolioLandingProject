// All constructors of header information are called in this function
setHeaderInformation()
// All header menu constructors are called in this function
setHeaderMenu()
// This function executes it by creating "footer" components
displayFooter()
// All site color generators are called in this function
setColorSite()
// All site theme builders are called in this function
initializeThemeMode()
// This event executes a function to update the scroll bar
window.addEventListener("scroll", updateScrollBar)
// This event executes a function to change critical values whose value depends on the size of the window
window.addEventListener("resize", changeValueInResize)
// This event executes a function to hide the loading of the site
window.addEventListener("load", hideLoadingElement)