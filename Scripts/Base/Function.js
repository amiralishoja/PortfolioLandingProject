function removeActiveClass(className) {
    if ($.querySelector(`.${className}`)) {
        $.querySelector(`.${className}`).classList.remove(className)
    }
}

function menuItemGenerator(menuItem) {
    const newLinkElem = $.createElement("a")
    newLinkElem.className = "menu__link"
    newLinkElem.dataset.sectionId = menuItem.href;
    if (menuItem.id === 1) {
        newLinkElem.classList.add("menu__link--active")
    }
    newLinkElem.addEventListener("click", function () {
        removeActiveClass("menu__link--active")
        newLinkElem.classList.add("menu__link--active")
        if (window.innerWidth < 767) {
            hideMenu()
        }
        scrollSection(newLinkElem.dataset.sectionId)
    })
    newLinkElem.insertAdjacentHTML("beforeend", '<li class="menu__item">' + menuItem.name + '</li><i class="menu__icon ' + menuItem.class + '">')
    menuContainer.append(newLinkElem)

}

function scrollSection(sectionId) {
    const sectionOffsetTop = $.querySelector(sectionId).offsetTop
    window.scrollTo(0, sectionOffsetTop - navbarElemHeight + 1)
}

function socialItemGenerator(socialItem) {
    socialWrapperElem.insertAdjacentHTML("beforeend", '<div class="social"><img class= "social__icon" src = "' + socialItem.src + '" alt = "' + socialItem.name + '"><p class="social__text">' + socialItem.name + '</p><a class="social__link" href="' + socialItem.href + '"><svg class="social__flash" fill="black" viewBox="0 0 24 24" stroke-width="2" stroke="black" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/></svg></a></div>');
    countSocialElem = socialWrapperElem.childElementCount;
}

function animationSocialTranslateYHandler() {
    countSocialTranslateY++
    socialWrapperElem.style.setProperty("--time", `${speedTranslateSocialElem}ms`)
    socialWrapperElem.style.setProperty("--height", `${socialElemOffsetHeight}px`)
    socialWrapperElem.style.setProperty("--i", countSocialTranslateY)
    if (countSocialElem === countSocialTranslateY) {
        [...socialWrapperElem.children].forEach(function (elem) {
            cloneElementHandler(elem, socialWrapperElem)
        })
        setTimeout(function () {
            socialWrapperElem.style.setProperty("--time", "0ms")
            socialWrapperElem.style.setProperty("--i", 0)
            countSocialTranslateY = 0;
            [...socialWrapperElem.children].map(removeCloneChildHandler)
        }, speedTranslateSocialElem);

    }
}

function animationSkillsTranslateYHandler() {
    countSkillsTranslateY++
    skillsContainer.style.setProperty("--time", `${speedTranslateSkillsElem}ms`)
    skillsContainer.style.setProperty("--width", `${skillsElemOffsetWidth}px`)
    skillsContainer.style.setProperty("--i", countSkillsTranslateY)
    if (countSkillsElem + 1 - Math.round(skillsWrapperElemOffsetWidth / skillsElemOffsetWidth) === countSkillsTranslateY) {
        [...skillsContainer.children].forEach(function (elem) {
            cloneElementHandler(elem, skillsContainer)
        })
    }
    if (countSkillsTranslateY === countSkillsElem) {
        setTimeout(function () {
            skillsContainer.style.setProperty("--time", "0ms")
            skillsContainer.style.setProperty("--i", 0)
            countSkillsTranslateY = 0;
            [...skillsContainer.children].map(removeCloneChildHandler)
        }, speedTranslateSkillsElem);
    }
}

function skillsItemGenerator(skill) {
    skillsContainer.insertAdjacentHTML("beforeend", '<div class="col-12 col-lg-6 col-xxl-4 flex-center"><div class="skills__item"><img src="' + skill.src + '" alt="Html" class="skills__picture"><div class="skills__content"><h3 class="skills__title">' + skill.name + '</h3><p class="skills__caption">' + skill.caption + '</p></div></div></div>');
    countSkillsElem = skillsContainer.childElementCount;
    skillsElemOffsetWidth = [...skillsContainer.children][0].offsetWidth
}

function cloneElementHandler(elem, container) {
    const cloneElem = elem.cloneNode(true)
    cloneElem.setAttribute("aria-hidden", "true")
    container.append(cloneElem)
}

function removeCloneChildHandler(child) {
    if (child.getAttribute("aria-hidden") === "true") {
        child.remove()
    }
}

function projectItemGenerator(project) {
    projectContainer.insertAdjacentHTML("beforeend", '<div class="col-12 col-sm-6 col-lg-4"><div class="project__item"><img src="' + project.src + '" alt="' + project.name + '" class="project__img"><div class="project__content"><h4 class="project__content__title">' + project.name + '</h4><p class="project__content__caption">' + project.caption + '</p><a href="' + project.href + '" class="btn btn--show-project"><i class="btn__icon fas fa-arrow-circle-right"></i><p class="btn__title">Online Preview</p></a></div></div></div>')
}

function hideMenu() {
    menuContainer.classList.toggle("dis-flex")
    coverElem.classList.toggle("dis-flex")
    menuMobileBtnIcon.className = "navbar__mobileBtn__icon fa-solid fa-bars"
    btnMenuFlag = true
}

function menuItemClickHandler() {
    menuContainer.classList.toggle("dis-flex")
    coverElem.classList.toggle("dis-flex")
    if (btnMenuFlag) {
        menuMobileBtnIcon.className = "navbar__mobileBtn__icon fa-solid fa-xmark"
        btnMenuFlag = false
    }
    else {
        menuMobileBtnIcon.className = "navbar__mobileBtn__icon fa-solid fa-bars"
        btnMenuFlag = true
    }
}

function hideLoadingElem() {
    loadingElem.classList.add("dis-none")
}

function scrollBarHandler() {
    const fullScrollHeight = $.body.offsetHeight - window.innerHeight
    const scrollNow = window.scrollY
    let percentScroll = (scrollNow / fullScrollHeight * 100).toFixed(0)
    if (percentScroll === Infinity) {
        percentScroll = 0
    }
    scrollElem.style.width = percentScroll + "%"
}

function activeClassMenuItemScrolling() {
    const activeElemDataId = `#${[...allSection].findLast(findLastSectionId).id}`;
    if (cloneElemId != activeElemDataId) {
        cloneElemId = activeElemDataId;
        [...menuContainer.children].forEach(function (menuItem) {
            if (menuItem.dataset.sectionId === activeElemDataId) {
                removeActiveClass("menu__link--active")
                menuItem.classList.add("menu__link--active")
            }
        });
    }
}

function findLastSectionId(section) {
    let offsetSectionElem;
    if (section.offsetHeight > window.innerHeight - navbarElem.offsetHeight) {
        offsetSectionElem = section.offsetTop - navbarElem.offsetHeight
    }
    else {
        offsetSectionElem = section.offsetTop + section.offsetHeight - window.innerHeight - 5
    }
    return offsetSectionElem < window.scrollY
}
function effectTypeSkill() {
    skillsList.forEach(aboutCaptionGenerator);
}

function aboutCaptionGenerator(skill) {
    countLengthSkillName = skill.name.length + workHabitsLength + 1
    aboutCaptionElem.style.setProperty("--time", `${timeEffectTypeCaption}ms`)
    if (skill.id === 1) {
        aboutCaptionElem.style.setProperty("--steps", countLengthSkillName)
        aboutCaptionElem.lastElementChild.innerHTML = skill.name + " " + workHabits;
    }
    else {
        setTimeout(function () {
            aboutCaptionElem.style.setProperty("--steps", countLengthSkillName)
            aboutCaptionElem.lastElementChild.innerHTML = skill.name + " " + workHabits;
        }, (skill.id - 1) * timeEffectTypeCaption);
    }
}


function displayProjectList(array, container, rowsCount, countPage, currentPage) {
    if (currentPage <= countPage) {
        container.innerHTML = ""
        const paginatedProject = array.slice(rowsCount * currentPage - rowsCount, rowsCount * currentPage)
        paginatedProject.forEach(projectItemGenerator)
    }
}

function projectPaginationGenerator(array, container, rowsCount) {
    let countPages = Math.ceil(array.length / rowsCount)
    if (countPages > countProjectPagesElem) {
        countPages = countProjectPagesElem
    }
    container.innerHTML = ""
    const prevPageButton = buttonPageNextPrevGenerator("prev")
    container.append(prevPageButton)
    for (let i = 1; i <= countPages; i++) {
        paginationButtonGenerator(i, array, container)
    }
    const nextPageButton = buttonPageNextPrevGenerator("next")
    container.append(nextPageButton)
}

function paginationButtonGenerator(page, array, container) {
    const button = document.createElement('button')
    button.innerHTML = page
    button.classList.add("project__btn")
    if (page === currentPageProjectElem) {
        button.classList.add('project__btn--active')
    }
    button.addEventListener('click', function () {
        currentPageProjectElem = page
        displayProjectList(array, projectContainer, countProjectElementElem, countProjectPagesElem, currentPageProjectElem)
        removeActiveClass("project__btn--active")
        button.classList.add("project__btn--active")
    })
    container.appendChild(button)
}

function buttonPageNextPrevGenerator(type) {
    const button = document.createElement("button")
    button.classList.add("project__btn")
    if (type === "next") {
        button.classList.add("project__btn--next")
        button.innerHTML = '<i class="fas fa-arrow-circle-right"></i>'
    }
    else if (type === "prev") {
        button.classList.add("project__btn--prev")
        button.innerHTML = '<i class="fas fa-arrow-circle-left"></i>'
    }
    button.addEventListener("click", function (event) {
        if (type === "next" && currentPageProjectElem !== countProjectPagesElem && currentPageProjectElem !== Math.ceil(projectList.length / countProjectElementElem)) {
            displayProjectList(projectList, projectContainer, countProjectElementElem, countProjectPagesElem, ++currentPageProjectElem)
        }
        else if (type === "prev" && currentPageProjectElem !== 1) {
            displayProjectList(projectList, projectContainer, countProjectElementElem, countProjectPagesElem, --currentPageProjectElem)
        }
        projectPaginationGenerator(projectList, projectPagesElem, countProjectElementElem)
        document.querySelector(`.${button.className.split(" ")[1]}`).focus();
    })
    return button
}

function footerSocialElemGenerator(socialItem) {
    footerSocialElem.insertAdjacentHTML("beforeend", '<a href="' + socialItem.href + '" class="social__item"><img class= "social__img" src = "' + socialItem.src + '" alt = "' + socialItem.name + '"></a>');
}

function checkThemeMode(mode) {
    if (mode === "dark") {
        document.documentElement.className = mode
        themeBtnGenerator(mode)
    }
    else if (mode === "light") {
        document.documentElement.className = mode
        themeBtnGenerator(mode)
    }
}

function themeBtnGenerator(mode) {
    let themeFlag;
    if (mode === "dark") {
        themeBtnIcon.className = "navbar__themeBtn__icon fa-solid fa-lightbulb"
        themeFlag = "light"
    }
    else if (mode === "light") {
        themeBtnIcon.className = "navbar__themeBtn__icon fa-solid fa-moon"
        themeFlag = "dark"
    }
    themeBtn.addEventListener("click", function () {
        checkThemeMode(themeFlag)
    })
    localStorage.setItem("theme", mode)
}

function createElementWithAdJacentHtml(array, container, position, html) {
    array.forEach(function (item) {
        container.insertAdjacentHTML(position, html)
    })
}