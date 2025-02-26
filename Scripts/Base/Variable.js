// In this section, there are global wariables that need to b constantly changed or should be set afteer the components off the site.

const navigationElementOffsetHeight = navigationElement.offsetHeight;
let menuButtonFlag = true;
const themeModeSetting = localStorage.getItem("theme");
let currentThemeFlag;
let skillsElementOffsetWidth;
const skillsCount = dataBase.skills.length;
const captionEffectDuration = +aboutCaptionElement.dataset.time;
const socialTranslationDuration = +aboutSocialElement.dataset.time;
let socialTranslationCount = 0;
const skillsTranslationDuration = +skillsWrapperElement.dataset.time;
let skillsTranslationCount = 0;
const projectElementCount = +projectPagesElement.dataset.countElement;
const ProjectPageCount = +projectPagesElement.dataset.countPage;
let currentProjectPage = +projectPagesElement.dataset.currentPage;
const projectCount = dataBase.project.length;
let currentSectionId = menu[0].href;