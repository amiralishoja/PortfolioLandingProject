// In this section, the fake database of the site is placed.

const menu = [
    { id: 1, name: "About Me", href: "#aboutMe", class: "fa-solid fa-bomb" },
    { id: 2, name: "Skills", href: "#skills", class: "fa-solid fa-code" },
    { id: 3, name: "Project", href: "#project", class: "fa-solid fa-layer-group" },
    { id: 4, name: "Contact", href: "#contact", class: "fa-solid fa-phone-volume" }
]

// If you want to change the default information, please replace the text you received from the data generator with the "database" object.

const dataBase = {
    social: [
        { id: 1, name: "Linkedin", src: "Images/Social/linkedin.svg", href: "https://www.linkedin.com/in/amirali-shoja-459b652ab" },
        { id: 2, name: "Telegram", src: "Images/Social/Telegram.svg", href: "https://t.me/amirali_shoja" },
        { id: 3, name: "Instagram", src: "Images/Social/Instagram.svg", href: "https://instagram.com/amirali.shoja" },
        { id: 4, name: "GitHub", src: "Images/Social/Github.svg", href: "https://github.com/amiralishoja" },
        { id: 5, name: "Spotify", src: "Images/Social/Spotify.svg", href: "https://open.spotify.com/user/3172y5iz5tv42jhub36opkevig2i?si=fFMgefC1QkGhyyefVHLCjw" }
    ],
    skills: [
        { id: 1, name: "Html", src: "Images/Skills/Html.svg", caption: "Elements Attributes Links Pictures Tables Lists Layout Forms Medias ..." },
        { id: 2, name: "Css", src: "Images/Skills/Css.svg", caption: "Selectors Units Fonts Viewports Variables Animations Backgrounds Function Media Query Grid System Flexbox ..." },
        { id: 3, name: "Sass", src: "Images/Skills/Sass.svg", caption: "Variables Nestings Import Partials Mixins Include Extend Function Maps Interpolation Conditions Loops ..." },
        { id: 4, name: "JavaScript", src: "Images/Skills/JavaScript.svg", caption: "Variables Operators Data Types Function Events Arrays & Objects Data Methods Loops Error Hadelling Dom Bom Styles Conditions ..." }
    ],
    project: [
        {
            id: 1,
            name: "Rsdetailing",
            src: "Images/Project/1.webp",
            srcset: [
                "Images/Project/1.400w.webp",
                "Images/Project/1.681w.webp",
                "Images/Project/1.946w.webp",
                "Images/Project/1.1165w.webp",
                "Images/Project/1.1422w.webp",
            ],
            caption: "This landing page example is producd with Html Css and a little Javascript",
            href: "https://rsdetailing.wuaze.com"
        },
        {
            id: 2,
            name: "Hostinger",
            src: "Images/Project/2.webp",
            srcset: [
                "Images/Project/2.400w.webp",
                "Images/Project/2.688w.webp",
                "Images/Project/2.948w.webp",
                "Images/Project/2.1087w.webp",
                "Images/Project/2.1337w.webp",
                "Images/Project/2.1423w.webp",
            ],
            caption: "This landing page example is producd with Html Sass and a little Javascript",
            href: "https://hostinger.wuaze.com"
        },
        {
            id: 3,
            name: "Motel",
            src: "Images/Project/3.webp",
            srcset: [
                "Images/Project/3.400w.webp",
                "Images/Project/3.563w.webp",
                "Images/Project/3.694w.webp",
                "Images/Project/3.704w.webp",
                "Images/Project/3.990w.webp",
                "Images/Project/3.1005w.webp",
                "Images/Project/3.1088w.webp",
                "Images/Project/3.1171w.webp",
                "Images/Project/3.1270w.webp",
                "Images/Project/3.1339w.webp",
                "Images/Project/3.1348w.webp",
                "Images/Project/3.1422w.webp",
            ],
            caption: "This landing page example is producd with Html Css and a little Javascript",
            href: "https://motel.wuaze.com"
        }
    ],
    Information: {
        owner: "Amirali Shoja",
        logo: "Shoja.com",
        slogan: "A Programmer Who Loves Front End",
        pictureSrc: "Images/About/Picture.webp",
        pictureSrcset: [
            "Images/About/Picture.300w.webp",
            "Images/About/Picture.555w.webp",
            "Images/About/Picture.727w.webp",
            "Images/About/Picture.905w.webp",
            "Images/About/Picture.1027w.webp",
            "Images/About/Picture.1104w.webp",
            "Images/About/Picture.1201w.webp",
            "Images/About/Picture.1278w.webp",
            "Images/About/Picture.1390w.webp",
            "Images/About/Picture.1489w.webp",
            "Images/About/Picture.1518w.webp",
            "Images/About/Picture.1613w.webp",
            "Images/About/Picture.1920w.webp",
        ],
        keyWords: "amirali shoja, developer, front-end, java script, freelancer, remote work",
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