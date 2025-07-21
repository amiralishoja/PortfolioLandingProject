// In this section, the database of the site is placed.

const menu = [
    { id: 1, name: "About Me", href: "#aboutMeSection", class: "ri-information-2-fill" },
    { id: 2, name: "Skills", href: "#skillsSection", class: "ri-settings-6-fill" },
    { id: 3, name: "Project", href: "#projectSection", class: "ri-git-branch-fill" },
    { id: 4, name: "Contact", href: "#footerSection", class: "ri-radar-fill" }
]

const dataBase = {
    social: [
        { id: 1, name: "Linkedin", iconClass: "ri-linkedin-box-fill", href: "https://www.linkedin.com/in/amiralishoja" },
        { id: 2, name: "Telegram", iconClass: "ri-telegram-2-line", href: "https://t.me/amirali_shoja" },
        { id: 3, name: "GitHub", iconClass: "ri-github-line", href: "https://github.com/amiralishoja" }
    ],
    skills: [
        { id: 1, name: "Html", iconClass: "devicon-html5-plain", caption: "Elements Attributes Links Pictures Tables Lists Layout Forms Medias ..." },
        { id: 2, name: "Css", iconClass: "devicon-css3-plain", caption: "Selectors Units Fonts Viewports Variables Animations Backgrounds Function Media Query Grid System Flexbox ..." },
        { id: 3, name: "Sass", iconClass: "devicon-sass-original", caption: "Variables Nestings Import Partials Mixins Include Extend Function Maps Interpolation Conditions Loops ..." },
        { id: 4, name: "JavaScript", iconClass: "devicon-javascript-plain", caption: "Variables Operators Data Types Function Events Arrays & Objects Data Methods Loops Error Hadelling Dom Bom Styles Conditions ..." }
    ],
    project: [
        {
            id: 1,
            name: "Rsdetailing",
            src: "./pictures/projects/1.png",
            caption: "This landing page example is producd with Html Css and a little Javascript",
            href: "https://rsdetailing.wuaze.com"
        },
        {
            id: 2,
            name: "Hostinger",
            src: "./pictures/projects/2.png",
            caption: "This landing page example is producd with Html Sass and a little Javascript",
            href: "https://hostinger.wuaze.com"
        },
        {
            id: 3,
            name: "Motel",
            src: "./pictures/projects/3.png",
            caption: "This landing page example is producd with Html Css and a little Javascript",
            href: "https://motel.wuaze.com"
        }
    ],
    Information: {
        owner: "Amirali Shoja",
        logo: ">-",
        slogan: "I'm not hacker, That's all...",
        pictureSrc: "./pictures/about/profile.png",
        title: "Towards infinity and beyond",
        caption: "I've always wanted to have my own website. This thought often crossed my mind when I was younger, but I couldn't make it happen, not until I became a front-end developer and discovered the power to build one. I used to dream of launching it.",
        email: "amiralishoja.info@gmail.com"
    },
    color: [
        { id: 1, name: "--main-color", vlaue: "#ffa000" },
        { id: 2, name: "--sub-color", vlaue: "#ff4800" }
    ]
}