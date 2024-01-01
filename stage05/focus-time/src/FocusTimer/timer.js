import state from "./state.js";
import * as el from './elements.js';
import { resetTimer } from "./action.js";

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    el.minutes.textContent = String(minutes).padStart(2, "0");
    el.seconds.textContent = String(seconds).padStart(2, "0");
}

export function countdown() {
    if(!state.isRunnig) {
        return
    };

    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    seconds--

    if(seconds < 0) {
        seconds = 59;
        minutes--
    } else if(seconds > 59) {
        seconds = 0;
    }

    if(minutes < 0) {
        resetTimer()
        return;
    }

    updateDisplay(minutes, seconds)
    setTimeout(() => countdown(), 1000)
};
