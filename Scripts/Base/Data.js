let btnMenuFlag = true
let cloneElemId;
let countSocialTranslateY = 0;
let countSkillsTranslateY = 0;
let countSocialElem;
let countSkillsElem;
let countLengthSkillName;
const speedTranslateSocialElem = +aboutSocialElem.dataset.speed
const timeTranslateSocialElem = +aboutSocialElem.dataset.time
const socialElemOffsetHeight = +aboutSocialElem.offsetHeight
const speedTranslateSkillsElem = +skillsWrapperElem.dataset.speed
const timeTranslateSkillsElem = +skillsWrapperElem.dataset.time
let skillsWrapperElemOffsetWidth = skillsWrapperElem.offsetWidth
let skillsElemOffsetWidth;
const timeEffectTypeCaption = +aboutCaptionElem.dataset.time
const workHabits = aboutCaptionElem.dataset.workHabits
const workHabitsLength = workHabits.length
const countProjectPagesElem = +projectPagesElem.dataset.countPage
const countProjectElementElem = +projectPagesElem.dataset.countElement
let currentPageProjectElem = +projectPagesElem.dataset.currentPage
const siteName = "Amirali Shoja"
const logoName = "Shoja.com"
const themeMode = localStorage.getItem("theme")
const darkSystemTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
const lightSystemTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
const navbarElemHeight = navbarElem.offsetHeight


const menuList = [
    { id: 1, name: "About Me", href: "#aboutMe", class: "fa-solid fa-bomb" },
    { id: 2, name: "Skills", href: "#skills", class: "fa-solid fa-code" },
    { id: 3, name: "Project", href: "#project", class: "fa-solid fa-layer-group" },
    { id: 4, name: "Contact", href: "#contact", class: "fa-solid fa-phone-volume" }
]
const skillsList = [
    { id: 1, name: "Html", src: "Images/Skills/Html.svg", caption: "Elements Attributes Links Pictures Tables Lists Layout Forms Medias ..."},
    { id: 2, name: "Css", src: "Images/Skills/Css.svg", caption: "Selectors Units Fonts Viewports Variables Animations Backgrounds Function Media Query Grid System Flexbox ..." },
    { id: 3, name: "Sass", src: "Images/Skills/Sass.svg", caption: "Variables Nestings Import Partials Mixins Include Extend Function Maps Interpolation Conditions Loops ..."},
    { id: 4, name: "JavaScript", src: "Images/Skills/JavaScript.svg", caption: "Variables Operators Data Types Function Events Arrays & Objects Data Methods Loops Error Hadelling Dom Bom Styles Conditions ..." }
]
const projectList = [
    { id: 1, name: "Rsdetailing", src: "Images/Project/1.PNG", caption: "This landing page example is producd with Html Css and a little Javascript", href: "https://rsdetailing.wuaze.com" },
    { id: 2, name: "Hostinger", src: "Images/Project/2.PNG", caption: "This landing page example is producd with Html Sass and a little Javascript", href: "https://hostinger.wuaze.com" },
    { id: 3, name: "Motel", src: "Images/Project/3.PNG", caption: "This landing page example is producd with Html Css and a little Javascript", href: "https://motel.wuaze.com" }
]
const socialList = [
    {id: 1, name: "Linkedin", src: "Images/Social/linkedin.png", href: "https://www.linkedin.com/in/amirali-shoja-459b652ab"},
    {id: 2, name: "Telegram", src: "Images/Social/Telegram.png", href: "https://t.me/amirali_shoja"},
    {id: 3, name: "Instagram", src: "Images/Social/Instagram.png", href: "https://instagram.com/amirali.shoja"},
    {id: 4, name: "GitHub", src: "Images/Social/Github.png", href: "https://github.com/amiralishoja"},
    {id: 5, name: "Spotify", src: "Images/Social/Spotify.png", href: "https://open.spotify.com/user/3172y5iz5tv42jhub36opkevig2i?si=fFMgefC1QkGhyyefVHLCjw"}
]

const footerContent = {
    title: "To infinity and beyond",
    caption: "I have always wanted to have my own website. This thought constantly crossed my mind when I was young, and I was unable to fulfill it until today, until I became a front-end developer and found the power to create a website. I dreamed of launching it",
    email: "amiralishoja.info@gmail.com",
    sms: "09945792393"
}