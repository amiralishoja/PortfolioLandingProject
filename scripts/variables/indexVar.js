// In this section, there are global wariables that need to b constantly changed or should be set afteer the components off the site.

const navigationElementOffsetHeight = navigationElement.offsetHeight;
let menuButtonFlag = true;
const themeModeSetting = localStorage.getItem("theme");
let currentThemeFlag;
const skillsCount = dataBase.skills.length;
const captionEffectDuration = +aboutCaptionElement.dataset.animationTime;
const socialTranslationDuration = +aboutSocialElement.dataset.animationTime;
let socialTranslationCount = 0;
let projectElementCount = 0;
const projectElementDesktopCount = +projectPagesElement.dataset.countElementDesktop;
const projectElementMobileCount = +projectPagesElement.dataset.countElementMobile;
const ProjectPageCount = +projectPagesElement.dataset.countPage;
let currentProjectPage = +projectPagesElement.dataset.currentPage;
const breakPojectPaginationWidth = +projectPagesElement.dataset.breakWidth
const projectCount = dataBase.project.length;
let currentSectionId = menu[0].href;