import * as el from './elements.js';
import state from './state.js';
import { countdown, updateDisplay } from './timer.js';

export function toggleTimer() {
    state.isRunnig = document.documentElement.classList.toggle('running');
    countdown();
};

export function modifyTimer() {
    el.minutes.setAttribute('contenteditable', true);
    el.minutes.focus();
    
};

export function resetTimer() {
    state.isRunnig = false;
    document.documentElement.classList.remove('running');
    updateDisplay();
};

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on');
};