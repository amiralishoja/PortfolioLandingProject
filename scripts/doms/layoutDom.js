// In this section, strict mode is used to prevent bugs and clean the code better

"use strict"

// In this section, the vital elements of  the site have been called

const $ = document
const keywordsMetaTagElement = $.getElementById("keyWordsMetaTag")
const copyrightMetaTagElement = $.getElementById("copyRightMetaTag")
const ownerMetaTagElement = $.getElementById("ownerMetaTag")
const descriptionMetaTagElement = $.getElementById("descriptionMetaTag")
const authorMetaTagElement = $.getElementById("authorMetaTag")
const pageTitleElement = $.querySelector("title")
const loadingElement = $.querySelector(".loading")
const navigationElement = $.querySelector(".navigation")
const mobileMenuButtonElement = $.querySelector(".navigation__mobile-button")
const mobileMenuButtonIconElement = $.querySelector(".navigation__mobile-icon")
const navigationLogoElement = $.querySelector(".navigation__logo")
const navigationLogoSuffixElement = $.querySelector(".navigation__logo-suffix")
const menuContainerElement = $.querySelector(".navigation__menu")
const themeButtonElement = $.querySelector(".navigation__theme-button")
const themeButtonIconElement = $.querySelector(".navigation__theme-icon")
const footerTitleElement = $.querySelector(".footer__title")
const footerCaptionElement = $.querySelector(".footer__caption")
const footerEmailLinkElement = $.querySelector(".footer__email")
const footerEmailTextElement = $.querySelector(".footer__email__txt")
const footerSmsLinkElement = $.querySelector(".footer__sms")
const footerSocialElement = $.querySelector(".footer__social")
const scrollElement = $.querySelector(".scroll")
const coverElement = $.querySelector(".cover")