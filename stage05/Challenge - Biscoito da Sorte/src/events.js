import * as el from './elements.js'
import { messageCookie } from './messagens.js'

export function radomMessage() {
    const numberPhrase = messageCookie.length
    let randomPhrase = Math.floor(Math.random() * numberPhrase)
    el.message.textContent = messageCookie[randomPhrase]
}


export function openCookie() {
    el.resultCookieCard.classList.add("active");
    el.principalCard.classList.remove("active");
    el.message.classList.add('animation-card')
}

export function newCookie() {
    el.resultCookieCard.classList.remove("active");
    el.principalCard.classList.add("active");
    el.message.classList.remove('animation-card')
}