skillsList.forEach(skillsItemGenerator);
effectTypeSkill();
setInterval(effectTypeSkill, skillsList.length * timeEffectTypeCaption);
aboutTitleElem.append(siteName)
displayProjectList(projectList, projectContainer, countProjectElementElem, countProjectPagesElem, currentPageProjectElem)
if (projectList.length > countProjectElementElem) {
    projectPaginationGenerator(projectList, projectPagesElem, countProjectElementElem)
}
let animationSkillsTranslateY = setInterval(animationSkillsTranslateYHandler, timeTranslateSkillsElem);
socialList.forEach(socialItemGenerator);

footerTitleElem.innerHTML = footerContent.title
footerCaptionElem.innerHTML = footerContent.caption
footerEmailLinkElem.href = `mailto:${footerContent.email}`
footerEmailTextElem.innerHTML = footerContent.email
footerSmsLinkElem.href = `sms:${footerContent.sms}`
footerSmsTextElem.innerHTML = footerContent.sms
socialList.forEach(footerSocialElemGenerator)
let animationSocialTranslateY = setInterval(animationSocialTranslateYHandler, timeTranslateSocialElem);
[...btnLinkSectionUper.children].forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        scrollSection(btn.dataset.sectionId)
    })
})
window.addEventListener("scroll", activeClassMenuItemScrolling)