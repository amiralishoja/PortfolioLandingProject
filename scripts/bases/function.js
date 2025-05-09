// This is function deletes the activated classes of an element

function removeActiveClassName(className) {
    if ($.querySelector(`.${className}`)) {
        $.querySelector(`.${className}`).classList.remove(className)
    }
}

// This is function scrolls the page to the desired section

function scrollToSection(sectionId) {
    const sectionOffsetTop = $.querySelector(sectionId).offsetTop
    window.scrollTo(0, sectionOffsetTop - navigationElementOffsetHeight + 1)
}

// This is function hides mobile menu element and its related elements

function hideMobileMenu() {
    menuContainerElement.classList.remove("dis-flex")
    coverElement.classList.remove("dis-flex")
    mobileMenuButtonIconElement.className = "navigation__mobile-icon fa-solid fa-bars"
    menuButtonFlag = true
}

// This is function shows mobile menu element and its related elements

function showMobileMenu() {
    menuContainerElement.classList.add("dis-flex")
    coverElement.classList.add("dis-flex")
    mobileMenuButtonIconElement.className = "navigation__mobile-icon fa-solid fa-xmark"
    menuButtonFlag = false
}

// This is function creates clone element

function createdCloneElement(elem, container) {
    const cloneElem = elem.cloneNode(true)
    cloneElem.setAttribute("aria-hidden", "true")
    container.append(cloneElem)
}

// This is function deletes clone element

function removeCloneElement(child) {
    if (child.getAttribute("aria-hidden") === "true") {
        child.remove()
    }
}

// This is function creates property in element

function setPropertyStyleElement(name, value, element = document.documentElement) {
    element.style.setProperty(name, value);
}

// This function makes the addresses of images along with their pixel size

function generateSrcsetAttributeElement(array) {
    const newArray = array.map(function (picture) {
        return `${picture.src} ${picture.size}`
    })
    return newArray.join(", ")
}

function generateSizesAttributeElement(xxLarg, xLarg, larg, medium, small, other = "calc(100vw - 20px)") {
    return `(min-width: 1400px) ${xxLarg}px, (min-width: 1200px) ${xLarg}px, (min-width: 992px) ${larg}px, (min-width: 768px) ${medium}px, (min-width: 576px) ${small}px, ${other}`
}

// This function creates all header information components

function setHeaderInformation() {
    pageTitleElement.innerHTML = dataBase.Information.owner
    navigationLogoElement.insertAdjacentHTML("afterbegin", dataBase.Information.logo.split(".")[0])
    navigationLogoSuffixElement.innerHTML = "." + dataBase.Information.logo.split(".")[1]
}

// This is function creates menu and its components

function setHeaderMenu() {
    menu.forEach(generateMenuItem);
    [...menuContainerElement.children][0].classList.add("menu__link--active")
    mobileMenuButtonElement.addEventListener("click", mobileMenuButtonClicked)
    coverElement.addEventListener("click", hideMobileMenu)
}

// This is function creates menu item elements

function generateMenuItem(menuItem) {
    const newLinkElem = $.createElement("a")
    newLinkElem.className = "menu__link"
    newLinkElem.dataset.sectionId = menuItem.href;

    const newLiElem = $.createElement("li")
    newLiElem.className = "menu__item"
    newLiElem.innerHTML = menuItem.name

    const newIconElem = $.createElement("i")
    newIconElem.className = `menu__icon ${menuItem.class}`

    newLinkElem.append(newLiElem, newIconElem)

    newLinkElem.addEventListener("click", function () {
        removeActiveClassName("menu__link--active")
        newLinkElem.classList.add("menu__link--active")
        scrollToSection(newLinkElem.dataset.sectionId)
        if (!menuButtonFlag) {
            hideMobileMenu()
        }
    })

    menuContainerElement.append(newLinkElem)
}

// This is function changes mobile menu state of view

function mobileMenuButtonClicked() {
    if (menuButtonFlag) {
        showMobileMenu()
    }
    else {
        hideMobileMenu()
    }
}

// This is function adds site colors to the site

function setColorSite() {
    dataBase.color.forEach(function (object) {
        setPropertyStyleElement(object.name, object.vlaue)
    })
}

// This is function analyzes the theme of the site

function initializeThemeMode() {
    if (themeModeSetting) {
        setThemeMode(themeModeSetting)
    }
    else {
        const darkSystemTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        const lightSystemTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
        if (darkSystemTheme) {
            setThemeMode("dark")
        }
        else if (lightSystemTheme) {
            setThemeMode("light")
        }
    }
    themeButtonElement.addEventListener("click", function () {
        setThemeMode(currentThemeFlag)
    })
}

// This is function sets the theme mode of the site

function setThemeMode(mode) {
    document.documentElement.className = mode
    toggleThemeMode(mode)
}

// This is function changes theme mode

function toggleThemeMode(mode) {
    switch (mode) {
        case "dark":
            themeButtonIconElement.className = "navigation__theme-icon fa-solid fa-lightbulb"
            currentThemeFlag = "light"
            break;
        case "light":
            themeButtonIconElement.className = "navigation__theme-icon fa-solid fa-moon"
            currentThemeFlag = "dark"
            break;
    }
    localStorage.setItem("theme", mode)
}

// This is function updates scroll bar

function updateScrollBar() {
    const fullScrollHeight = $.body.offsetHeight - window.innerHeight
    const scrollNow = window.scrollY
    let percentScroll = (scrollNow / fullScrollHeight * 100).toFixed(0)
    if (percentScroll === Infinity) {
        percentScroll = 0
    }
    scrollElement.style.width = percentScroll + "%"
}

// This is function changes the value of variable and components site

function changeValueInResize() {
    if (window.innerWidth > 767 && mobileMenuButtonElement.className == "navigation__mobile-icon fa-solid fa-xmark") {
        hideMobileMenu()
    }
    skillsElementOffsetWidth = [...skillsContainerElement.children][0].offsetWidth
    const nowProjectElementCount = changeValueTwoConditional(window.innerWidth > 567, projectElementDesktopCount, projectElementMobileCount);
    currentProjectPage = 1;
    if (nowProjectElementCount !== projectElementCount) {
        displayProject()
    }
}

// This function assigns the corect value to the main variable by checking a binary condition

function changeValueTwoConditional (condition, trueValue, falseValue) {
    if (condition) {
        return trueValue
    }
    else {
        return falseValue
    }
}

// This is function hides loading element

function hideLoadingElement() {
    loadingElement.classList.add("dis-none")
}

// This is function creates "about" section

function displayAbout() {
    displayAboutMe()
    displayAboutPicture()
    displayAboutSkills()
    displayAboutSocial()
}

// This is function creates "about me" and its components in the "about" section

function displayAboutMe() {
    aboutTitleElement.insertAdjacentHTML("beforeend", dataBase.Information.owner);
    aboutSloganElement.innerHTML = dataBase.Information.slogan;
    [...upperSectionButtonsElement.children].forEach(function (btn) {
        btn.addEventListener("click", function () {
            scrollToSection(btn.dataset.sectionId)
        })
    })
}

// This is function creates "about picture" and its components in the "about" section

function displayAboutPicture() {
    aboutPictureElement.setAttribute("src", dataBase.Information.pictureSrc)
    const imageSrcset = generateSrcsetAttributeElement(dataBase.Information.pictureSrcset)
    const imageSizes = generateSizesAttributeElement(416, 345, 465, 555, 670, "calc((100vw - 20px) / 100 * 80)")
    aboutPictureElement.setAttribute("srcset", imageSrcset)
    aboutPictureElement.setAttribute("sizes", imageSizes)
    aboutPictureElement.setAttribute("loading", "lazy")
    aboutPictureElement.setAttribute("alt", dataBase.Information.owner)
}

// This is function creates "about skills" and its components in the "about" section

function displayAboutSkills() {
    applySkillsEffect();
    setInterval(applySkillsEffect, skillsCount * captionEffectDuration);
}

// This function creates "about skills" and an effect on "about skills"

function applySkillsEffect() {
    dataBase.skills.forEach(function (skill) {
        const workHabits = aboutCaptionElement.dataset.workHabits;
        const workHabitsLength = workHabits.length;
        const countLengthSkillName = skill.name.length + workHabitsLength + 1
        const coefficientTime = skill.id - 1

        setPropertyStyleElement("--time", `${captionEffectDuration}ms`, aboutCaptionElement)
        setPropertyStyleElement("--steps", countLengthSkillName, aboutCaptionElement)

        if (skill.id === 1) {
            aboutSkillsElement.innerHTML = `${skill.name} ${workHabits}`;
        }
        else {
            setTimeout(function () {
                aboutSkillsElement.innerHTML = `${skill.name} ${workHabits}`;
            }, coefficientTime * captionEffectDuration);
        }
    });
}

// This is function creates "about social" and its components in the "about" section

function displayAboutSocial() {
    dataBase.social.forEach(generateSocialItem);
    setInterval(animateSocialTranslation, socialTranslationDuration);
}

// This is function generates social item

function generateSocialItem(socialItem) {
    socialWrapperElement.insertAdjacentHTML("beforeend",
    `<div class="social">
        <img class= "social__icon" src = "${socialItem.src}" alt = "${socialItem.name}" loading="lazy">
        <p class="social__text">${socialItem.name}</p>
        <a class="social__link" href="${socialItem.href}">
            <i class="fa-solid fa-arrow-up-right-from-square social__flash"></i>
        </a>
    </div>`);
}

// This is function creates an animate on "about social"

function animateSocialTranslation() {
    const speedTranslateSocialElem = +aboutSocialElement.dataset.speed
    const socialElemOffsetHeight = +aboutSocialElement.offsetHeight
    const countSocialElem = dataBase.social.length
    socialTranslationCount++

    setPropertyStyleElement("--time", `${speedTranslateSocialElem}ms`, socialWrapperElement)
    setPropertyStyleElement("--height", `${socialElemOffsetHeight}px`, socialWrapperElement)
    setPropertyStyleElement("--i", socialTranslationCount, socialWrapperElement)

    if (countSocialElem === socialTranslationCount) {
        [...socialWrapperElement.children].forEach(function (elem) {
            createdCloneElement(elem, socialWrapperElement)
        })
        setTimeout(function () {
            setPropertyStyleElement("--time", "0ms", socialWrapperElement)
            setPropertyStyleElement("--i", 0, socialWrapperElement)

            socialTranslationCount = 0;
            [...socialWrapperElement.children].map(removeCloneElement)
        }, speedTranslateSocialElem);

    }
}

// This is function creates "skills" and its conponents

function displaySkills() {
    dataBase.skills.forEach(generateSkillsItem);
    skillsElementOffsetWidth = [...skillsContainerElement.children][0].offsetWidth
    setInterval(animateSkillsTranslation, skillsTranslationDuration);
}

// This is function generates skills item in the "skills" section

function generateSkillsItem(skill) {
    skillsContainerElement.insertAdjacentHTML("beforeend",
    `<div class="col-12 col-lg-6 col-xxl-4 flex-center">
        <div class="skills__item">
            <img src="${skill.src}" alt="Html" class="skills__picture" loading="lazy">
            <div class="skills__content">
                <H3 class="skills__title">${skill.name}</H3>
                <p class="skills__caption">${skill.caption}</p>
            </div>
        </div>
    </div>`);
}

// This is function creates an animate on skills item elements

function animateSkillsTranslation() {
    const speedTranslateSkillsElem = +skillsWrapperElement.dataset.speed
    const skillsWrapperElemOffsetWidth = skillsWrapperElement.offsetWidth
    skillsTranslationCount++

    setPropertyStyleElement("--speed", `${speedTranslateSkillsElem}ms`, skillsContainerElement)
    setPropertyStyleElement("--time", `${skillsTranslationDuration}ms`, skillsContainerElement)
    setPropertyStyleElement("--delay", `${speedTranslateSkillsElem}ms`, skillsContainerElement)
    setPropertyStyleElement("--width", `${skillsElementOffsetWidth}px`, skillsContainerElement)
    setPropertyStyleElement("--i", skillsTranslationCount, skillsContainerElement)

    if (skillsCount + 1 - Math.round(skillsWrapperElemOffsetWidth / skillsElementOffsetWidth) === skillsTranslationCount) {
        [...skillsContainerElement.children].forEach(function (elem) {
            createdCloneElement(elem, skillsContainerElement)
        })
    }
    if (skillsTranslationCount === skillsCount) {
        setTimeout(function () {
            setPropertyStyleElement("--speed", "0ms", skillsContainerElement)
            setPropertyStyleElement("--i", 0, skillsContainerElement)

            skillsTranslationCount = 0;
            [...skillsContainerElement.children].map(removeCloneElement)
        }, speedTranslateSkillsElem);
    }
}

// This is function creates "project" an its components

function displayProject() {
    projectElementCount = changeValueTwoConditional(window.innerWidth > 576, projectElementDesktopCount, projectElementMobileCount)
    displayProjectListItem(dataBase.project, projectContainerElement, projectElementCount, ProjectPageCount, currentProjectPage)
    generateProjectPagination(dataBase.project, projectPagesElement, projectElementCount)
}

// This is fucntion determines the position of the domain required by the projects

function displayProjectListItem(array, container, rowsCount, countPage, currentPage) {
    if (currentPage <= countPage) {
        container.innerHTML = ""
        const paginationStart = rowsCount * currentPage - rowsCount
        const paginationEnd = rowsCount * currentPage
        const paginatedProject = array.slice(paginationStart, paginationEnd)
        paginatedProject.forEach(generateProjectItem)
    }
}

// This is function generates project item elements in the "project" section

function generateProjectItem(project) {
    const imageSrcset = generateSrcsetAttributeElement(project.srcset)
    const imageSizes = generateSizesAttributeElement(403.32, 326.67, 226.67, 305, 215)
    projectContainerElement.insertAdjacentHTML("beforeend",
    `<div class="col-12 col-sm-6 col-lg-4">
        <div class="project__item">
            <img
            class="project__img"
            src="${project.src}"
            srcset="${imageSrcset}"
            sizes="${imageSizes}"
            loading="lazy"
            alt="${project.name}">
            <div class="project__content">
                <H4 class="project__content__title">${project.name}</H4>
                <p class="project__content__caption">${project.caption}</p>
                <a href="${project.href}" class="button button--fixed button--show-project">
                    <i class="button__icon fas fa-arrow-circle-right"></i>
                    <p class="button__title">Online Preview</p>
                </a>
            </div>
        </div>
    </div>`)
}

// This is function generates project pagination button in the "project" section

function generateProjectPagination(array, container, rowsCount) {
    if (projectCount > projectElementCount) {
        let countPages = Math.ceil(array.length / rowsCount)
        if (countPages > ProjectPageCount) {
            countPages = ProjectPageCount
        }
        container.innerHTML = ""
        const prevPageButton = generateSubsPrevButton("prev")
        container.append(prevPageButton)
        for (let i = 1; i <= countPages; i++) {
            generatePaginationButton(i, array, container)
        }
        const subsPageButton = generateSubsPrevButton("subs")
        container.append(subsPageButton)
    }
    else {
        container.innerHTML = ""
    }
}

// This is function generates subsequent and previous button

function generateSubsPrevButton(type) {
    const button = document.createElement("button")
    button.classList.add("project__button")
    switch (type) {
        case "subs":        
            button.classList.add("project__button--subs")
            button.innerHTML = '<i class="fas fa-arrow-circle-right"></i>'
            break;
        case "prev":
            button.classList.add("project__button--prev")
            button.innerHTML = '<i class="fas fa-arrow-circle-left"></i>'
            break;
    }
    button.addEventListener("click", function () {
        if (type === "subs" && currentProjectPage !== ProjectPageCount && currentProjectPage !== Math.ceil(projectCount / projectElementCount)) {
            displayProjectListItem(dataBase.project, projectContainerElement, projectElementCount, ProjectPageCount, ++currentProjectPage)
        }
        else if (type === "prev" && currentProjectPage !== 1) {
            displayProjectListItem(dataBase.project, projectContainerElement, projectElementCount, ProjectPageCount, --currentProjectPage)
        }
        generateProjectPagination(dataBase.project, projectPagesElement, projectElementCount)
        document.querySelector(`.${button.className.split(" ")[1]}`).focus();
    })
    return button
}

// This is function generates numeric project pagination button

function generatePaginationButton(page, array, container) {
    const button = document.createElement('button')
    button.innerHTML = page
    button.classList.add("project__button")
    if (page === currentProjectPage) {
        button.classList.add('project__button--active')
    }
    button.addEventListener('click', function () {
        currentProjectPage = page
        displayProjectListItem(array, projectContainerElement, projectElementCount, ProjectPageCount, currentProjectPage)
        removeActiveClassName("project__button--active")
        button.classList.add("project__button--active")
    })
    container.appendChild(button)
}

// This is function creates "footer" and its components

function displayFooter() {
    footerTitleElement.innerHTML = dataBase.Information.title
    footerCaptionElement.innerHTML = dataBase.Information.caption
    footerEmailLinkElement.href = `mailto:${dataBase.Information.email}`
    footerEmailTextElement.innerHTML = dataBase.Information.email
    footerSmsLinkElement.href = `sms:${dataBase.Information.sms}`
    footerSmsTextElement.innerHTML = dataBase.Information.sms
}

// This is function changes the menu item when scrolling to the user

function toggleActiveMenuItemOnScroll() {
    const activeElemData = [...sectionsElement].findLast(function (section) {
        let offsetSectionElem;
        if (section.offsetHeight > window.innerHeight - navigationElementOffsetHeight) {
            offsetSectionElem = section.offsetTop - navigationElementOffsetHeight
        }
        else {
            offsetSectionElem = section.offsetTop + section.offsetHeight - window.innerHeight - 5
        }
        return offsetSectionElem < window.scrollY
    })

    const activeElemDataId = `#${activeElemData.id}`;

    if (currentSectionId != activeElemDataId) {
        currentSectionId = activeElemDataId;
        [...menuContainerElement.children].forEach(function (menuItem) {
            if (menuItem.dataset.sectionId === activeElemDataId) {
                removeActiveClassName("menu__link--active")
                menuItem.classList.add("menu__link--active")
            }
        });
    }
}