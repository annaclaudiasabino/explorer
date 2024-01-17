import * as el from './elements.js'
import * as ev from './events.js'

el.clickCookie.addEventListener('click', () => {
    ev.openCookie()
    ev.radomMessage()
})

el.newMessage.addEventListener('click', () => {
    ev.newCookie()
})
