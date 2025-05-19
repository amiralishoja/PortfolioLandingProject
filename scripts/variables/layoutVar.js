// In this section, the database of the site is placed.

const menu = [
    { id: 1, name: "About Me", href: "#aboutMe", class: "fa-solid fa-bomb" },
    { id: 2, name: "Skills", href: "#skills", class: "fa-solid fa-code" },
    { id: 3, name: "Project", href: "#project", class: "fa-solid fa-layer-group" },
    { id: 4, name: "Contact", href: "#contact", class: "fa-solid fa-phone-volume" }
]

const dataBase = {
    social: [
        { id: 1, name: "Linkedin", src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FSocial%2FLinkedin.svg", href: "https://www.linkedin.com/in/amiralishoja" },
        { id: 2, name: "Telegram", src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FSocial%2FTelegram.svg", href: "https://t.me/amirali_shoja" },
        { id: 3, name: "GitHub", src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FSocial%2FGithub.svg", href: "https://github.com/amiralishoja" }
    ],
    skills: [
        { id: 1, name: "Html", src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FSkills%2FHtml.svg", caption: "Elements Attributes Links Pictures Tables Lists Layout Forms Medias ..." },
        { id: 2, name: "Css", src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FSkills%2FCss.svg", caption: "Selectors Units Fonts Viewports Variables Animations Backgrounds Function Media Query Grid System Flexbox ..." },
        { id: 3, name: "Sass", src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FSkills%2FSass.svg", caption: "Variables Nestings Import Partials Mixins Include Extend Function Maps Interpolation Conditions Loops ..." },
        { id: 4, name: "JavaScript", src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FSkills%2FJavaScript.svg", caption: "Variables Operators Data Types Function Events Arrays & Objects Data Methods Loops Error Hadelling Dom Bom Styles Conditions ..." }
    ],
    project: [
        {
            id: 1,
            name: "Rsdetailing",
            src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F1.webp",
            srcset: [
                { id: 1, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F1.681w.webp", size: "681w" },
                { id: 2, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F1.400w.webp", size: "400w" },
                { id: 3, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F1.946w.webp", size: "946w" },
                { id: 4, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F1.1165w.webp", size: "1165w" },
                { id: 5, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F1.1422w.webp", size: "1422w" }
            ],
            caption: "This landing page example is producd with Html Css and a little Javascript",
            href: "https://rsdetailing.wuaze.com"
        },
        {
            id: 2,
            name: "Hostinger",
            src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F2.webp",
            srcset: [
                { id: 1, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F2.688w.webp", size: "688w" },
                { id: 2, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F2.400w.webp", size: "400w" },
                { id: 3, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F2.948w.webp", size: "948w" },
                { id: 4, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F2.1087w.webp", size: "1087w" },
                { id: 5, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F2.1337w.webp", size: "1337w" },
                { id: 6, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F2.1423w.webp", size: "1423w" }
            ],
            caption: "This landing page example is producd with Html Sass and a little Javascript",
            href: "https://hostinger.wuaze.com"
        },
        {
            id: 3,
            name: "Motel",
            src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.webp",
            srcset: [
                { id: 1, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.400w.webp", size: "400w" },
                { id: 2, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.563w.webp", size: "563w" },
                { id: 3, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.694w.webp", size: "694w" },
                { id: 4, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.704w.webp", size: "704w" },
                { id: 5, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.990w.webp", size: "990w" },
                { id: 6, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.1005w.webp", size: "1005w" },
                { id: 7, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.1088w.webp", size: "1088w" },
                { id: 8, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.1171w.webp", size: "1171w" },
                { id: 9, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.1270w.webp", size: "1270w" },
                { id: 10, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.1339w.webp", size: "1339w" },
                { id: 11, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.1348w.webp", size: "1348w" },
                { id: 12, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FProject%2F3.1422w.webp", size: "1422w" }
            ],
            caption: "This landing page example is producd with Html Css and a little Javascript",
            href: "https://motel.wuaze.com"
        }
    ],
    Information: {
        owner: "Amirali Shoja",
        logo: ">_",
        slogan: "A Programmer Who Loves Front End",
        pictureSrc: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.webp",
        pictureSrcset: [
            { id: 1, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.300w.webp", size: "300w" },
            { id: 2, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.555w.webp", size: "555w" },
            { id: 3, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.727w.webp", size: "727w" },
            { id: 4, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.905w.webp", size: "905w" },
            { id: 5, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.1027w.webp", size: "1027w" },
            { id: 6, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.1104w.webp", size: "1104w" },
            { id: 7, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.1201w.webp", size: "1201w" },
            { id: 8, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.1278w.webp", size: "1278w" },
            { id: 9, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.1390w.webp", size: "1390w" },
            { id: 10, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.1489w.webp", size: "1489w" },
            { id: 11, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.1518w.webp", size: "1518w" },
            { id: 12, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.1613w.webp", size: "1613w" },
            { id: 13, src: "https://shoja.s3.ir-thr-at1.arvanstorage.ir/Images%2FAbout%2FPicture.1920w.webp", size: "1920w" }
        ],
        title: "To infinity and beyond",
        caption: "I have always wanted to have my own website. This thought constantly crossed my mind when I was young, and I was unable to fulfill it until today, until I became a front-end developer and found the power to create a website. I dreamed of launching it",
        email: "amiralishoja.info@gmail.com",
        sms: "09945792393",
    },
    color: [
        { id: 1, name: "--main-color", vlaue: "rgba(52, 255, 0, 1)" },
        { id: 2, name: "--sub-color", vlaue: "rgba(0, 255, 222, 1)" }
    ]
}