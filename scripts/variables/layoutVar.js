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
        { id: 1, name: "Html", percent: "90", svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
        { id: 2, name: "Css", percent: "85", svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
        { id: 3, name: "Sass", percent: "70", svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"},
        { id: 4, name: "JavaScript", percent: "80", svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
        { id: 5, name: "Git", percent: "75", svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
        { id: 6, name: "Tailwind Css", percent: "80", svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
        { id: 7, name: "React", percent: "85", svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    ],
    project: [
        {
            id: 1,
            name: "Godakht",
            src: "./pictures/projects/godakht.png",
            caption: "Chemistry project created for school competition, and i made it with html css js and some js library",
            href: "https://amiralishoja.github.io/Godakht/dist/",
            github: "https://github.com/amiralishoja/Godakht"
        },
        {
            id: 2,
            name: "Portfolio",
            src: "./pictures/projects/portfolio.png",
            caption: "Portfolio landing project created with just html css and js without using any library exept using icons library's",
            href: "https://amiralishoja.github.io/PortfolioLandingProject/dist",
            github: "https://github.com/amiralishoja/PortfolioLandingProject"
        },
        {
            id: 3,
            name: "Nava Player",
            src: "./pictures/projects/navaplayer.png",
            caption: "Nava player project created with html css js, i give it to my mother as a gift",
            href: "https://amiralishoja.github.io/NavaPlayerProject/dist",
            github: "https://github.com/amiralishoja/NavaPlayerProject"
        },
        {
            id: 4,
            name: "Rsdetailing",
            src: "./pictures/projects/rsdetailing.png",
            caption: "This landing page example is producd with Html Css and a little Javascript",
            href: "https://amiralishoja.github.io/RsdetailingLandingProject/Dist",
            github: "https://github.com/amiralishoja/RsdetailingLandingProject"
        },
        {
            id: 5,
            name: "Motel",
            src: "./pictures/projects/motel.png",
            caption: "This landing page example is producd with Html Sass and a little Javascript",
            href: "https://amiralishoja.github.io/MotelLandingProject/Dist",
            github: "https://github.com/amiralishoja/MotelLandingProject"
        },
        {
            id: 6,
            name: "Hostinger",
            src: "./pictures/projects/hostinger.png",
            caption: "This landing page example is producd with Html Css and a little Javascript",
            href: "https://amiralishoja.github.io/HostingerLandingProject/Dist/",
            github: "https://github.com/amiralishoja/HostingerLandingProject"
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