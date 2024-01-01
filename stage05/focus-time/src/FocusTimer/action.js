import * as el from './elements.js';
import state from './state.js';
import { countdown, updateDisplay } from './timer.js';
import * as sounds from './sounds.js';

export function toggleTimer() {
    state.isRunnig = document.documentElement.classList.toggle('running');
    countdown();
    sounds.buttonPressAudio.play()
};

export function modifyTimer() {
    el.minutes.setAttribute('contenteditable', true);
    el.minutes.focus();
    
};

export function resetTimer() {
    state.isRunnig = false;
    document.documentElement.classList.remove('running');
    updateDisplay();
    sounds.buttonPressAudio.play()
};

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on');

    if(state.isMute) {
        sounds.bgAudio.play();
        return;
    }

    sounds.bgAudio.pause()
};